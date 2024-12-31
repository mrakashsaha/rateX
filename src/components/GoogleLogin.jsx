import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axiosAPI from '../axios/axiosAPI';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const {continueWithGoogle, setLoading} = useContext (AuthContext);

    const handleSignUpWithGoogle = () => {

        continueWithGoogle()
        .then (result=> {
            console.log (result.user.email);
            const userProfile = {
                email: result?.user?.email,
                photoURL: result?.user?.photoURL,
                displayName: result?.user?.displayName,
            }
            axiosAPI.put("/users", { userProfile })
                .then(res => {
                    if (res.data.acknowledged) {
                        navigate("/")
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
                <button onClick={handleSignUpWithGoogle} className="btn btn-primary hover:bg-[#b9362a] bg-[#EA4335] text-white border-none"> <FaGoogle></FaGoogle> Sign Up with Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;