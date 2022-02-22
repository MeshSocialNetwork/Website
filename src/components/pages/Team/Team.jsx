import React from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import TeamMember from './TeamMember/TeamMember';

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamMembers: []
        };
    }

    componentDidMount() {
        axios
            .get('https://meshnetwork.app/api/discord')
            .then((result) => {
                let teamMembers = [];

                result.data.forEach((user) => {
                    let gif = user.avatar.includes('a_');

                    teamMembers.push(
                        <TeamMember role={'Admin'} user={user} gif={gif} />
                    );
                });

                this.setState({
                    teamMembers: teamMembers
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <>
                <Navbar />

                {this.state.teamMembers}
            </>
        );
    }
}

export default Team;
