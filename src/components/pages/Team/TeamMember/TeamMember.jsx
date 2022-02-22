import React from 'react';
import './teamMember.scss';

class TeamMember extends React.Component {
    getDivClassName() {
        switch (this.props.user.status) {
            case 'offline':
                return 'card-user offline-status';
            case 'idle':
                return 'card-user idle-status';
            case 'dnd':
                return 'card-user dnd-status';
            case 'online':
                return 'card-user online-status';
            default:
                return 'card-user offline-status';
        }
    }

    render(props) {
        return (
            <>
                <div className='card'>
                    <div className={this.getDivClassName()}>
                        <div className='user-text'>
                            <h1 className='card-username'>
                                {this.props.user.username}
                            </h1>
                            <h2 className='card-role'>{this.props.role}</h2>
                        </div>
                        <div className='avatar'>
                            {this.props.gif ? (
                                <img
                                    alt='avatar'
                                    src={`https://cdn.discordapp.com/avatars/${this.props.user.id}/${this.props.user.avatar}.gif?size=64`}
                                />
                            ) : (
                                <img
                                    alt='avatar'
                                    src={`https://cdn.discordapp.com/avatars/${this.props.user.id}/${this.props.user.avatar}.webp?size=64`}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TeamMember;
