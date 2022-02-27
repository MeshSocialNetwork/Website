import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Error = () => {
    const { state } = useLocation();

    if (state) {
        switch (state.error) {
            case 'no-user':
                toast.error('This user does not exist!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined
                });
                break;
            default:
                toast.error('Something went wrong!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined
                });
                break;
        }
    }

    return <Link to={'/'}>Back home!</Link>;
};

export default Error;
