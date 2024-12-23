import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const {continueWithGoogle, setLoading} = useContext (AuthContext);

    const handleSignUpWithGoogle = () => {

        continueWithGoogle()
        .then (result=> {
            console.log (result.user);
            navigate("/")
        })
        .catch (error => {
            console.log (error);
            setLoading(false);
            
        });

    }
    return (
        <div>
            <div className="form-control mt-2">
                <button onClick={handleSignUpWithGoogle} className="btn btn-primary hover:bg-[#b9362a] bg-[#EA4335] text-white border-none"> <FaGoogle></FaGoogle> Sign Up with Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;