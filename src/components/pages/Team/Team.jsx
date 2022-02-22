import React from 'react';
import axios from 'axios';
import TeamMember from './TeamMember/TeamMember';
import Loading from 'react-fullscreen-loading';
import './team.scss';

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamMembers: [],
            loaded: false
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
                    teamMembers: teamMembers,
                    loaded: true
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        if (this.state.loaded === false) {
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
            return <>{this.state.teamMembers}</>;
        }
    }
}

export default Team;
