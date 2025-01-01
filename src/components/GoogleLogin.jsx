import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosAPI from '../axios/axiosAPI';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {continueWithGoogle, setLoading} = useContext (AuthContext);

    const handleSignUpWithGoogle = () => {

        continueWithGoogle()
        .then (result=> {
            
            const userProfile = {
                email: result?.user?.email,
                photoURL: result?.user?.photoURL,
                displayName: result?.user?.displayName,
            }
            axiosAPI.put("/users", { userProfile })
                .then(res => {
                    if (res.data.acknowledged) {
                        // navigate("/")
                        navigate(location?.state ? location.state : "/");
                    }
                })
        })
        .catch (error => {
            console.log (error);
            setLoading(false);
            
        });

    }
    return (
        <div>
            <div className="form-control mt-2">
                <button onClick={handleSignUpWithGoogle} className="btn border-[#04B2B2] bg-[#eef7f7] text-[#151515] hover:bg-[#038787] hover:text-white"> <FaGoogle></FaGoogle> Continue with Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;