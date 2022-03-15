//@ts-nocheck
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

const Community = () => {
    let { state } = useLocation();
    let navigate = useNavigate();
    let { state }: any = useLocation();

    return (
        <>
            <Navbar state={state} />
        </>
    );
};

export default Community;
