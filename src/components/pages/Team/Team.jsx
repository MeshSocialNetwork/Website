import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TeamMember from './TeamMember/TeamMember';
import Loading from 'react-fullscreen-loading';
import './team.scss';
import App from '../../../App';
const config = require('../../../config.json');

const Team = (props) => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(config.DISCORD_ENDPOINT)
            .then((result) => {
                let teamMembers = [];

                console.log(result.data);

                result.data.forEach((user) => {
                    let gif = user.avatar.includes('a_');
                    let userRole;

                    for (let roleName in config.roles) {
                        let role = config.roles[roleName];

                        if (role.names.includes(user.username)) {
                            userRole = roleName;

                            teamMembers.push(
                                <TeamMember
                                    role={userRole}
                                    user={user}
                                    gif={gif}
                                />
                            );

                            break;
                        }
                    }
                });

                setTeamMembers(teamMembers);
                setLoaded(true);
            })
            .catch((error) => console.log(error));
    }, []);

    if (loaded === false) {
        return (
            <>
                <Loading
                    loading={true}
                    background={'#141d2b'}
                    loaderColor={'#fff'}
                />
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
