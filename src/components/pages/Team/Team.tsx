import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TeamMember from './TeamMember/TeamMember';
import './team.scss';
import App from '../../../App';
import { toast } from 'react-toastify';
const config = require('../../../config.json');

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(config.DISCORD_ENDPOINT)
            .then((result) => {
                let teamMembers: any = [];

                result.data.forEach((user: any) => {
                    let gif = user.avatar.includes('a_');

                    for (let roleName in config.roles) {
                        let role = config.roles[roleName];

                        if (role.names.includes(user.username)) {
                            let userRole = roleName;

                            teamMembers.push(
                                <TeamMember
                                    role={userRole}
                                    user={user}
                                    gif={gif}
                                    key={user.id}
                                />
                            );

                            break;
                        }
                    }
                });

                setTeamMembers(teamMembers);
                setLoaded(true);
            })
            .catch((error) => {
                console.log(error);

                toast.error('Something went wrong!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined
                });
            });
    }, []);

    if (!loaded) {
        return (
            <>
                <p>Loading</p>
            </>
        );
    } else {
        return (
            <>
                <App />
                {teamMembers}
            </>
        );
    }
};

export default Team;
