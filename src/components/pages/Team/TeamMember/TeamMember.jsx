import './teamMember.scss';

const TeamMember = (props) => {
    const getDivClassName = () => {
        switch (props.user.status) {
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
    };

    return (
        <>
            <div className='card'>
                <div className={getDivClassName()}>
                    <div className='user-text'>
                        <h1 className='card-username'>{props.user.username}</h1>
                        <h2 className='card-role'>{props.role}</h2>
                    </div>
                    <div className='avatar'>
                        {props.gif ? (
                            <img
                                alt='avatar'
                                src={`https://cdn.discordapp.com/avatars/${props.user.id}/${props.user.avatar}.gif?size=64`}
                            />
                        ) : (
                            <img
                                alt='avatar'
                                src={`https://cdn.discordapp.com/avatars/${props.user.id}/${props.user.avatar}.webp?size=64`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamMember;
