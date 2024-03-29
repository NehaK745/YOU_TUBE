import React from 'react';
import "./SignInPage.css";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";

const SignInPage: React.FC = () => {
    const responseGoogle = (res:any) =>{
        console.log(res);
    
        const name = res.profileObj.name;
    const email = res.profileObj.email;
    const googleId = res.profileObj.googleId;
    Axios.post("http://localhost:3001/user", {
        name: name,
        email: email,
        googleId: googleId,
      }).then((response) => {
        console.log("success");
      });
    };



    return (
        <div className ="SIP">
         <div className ="Container">
             <div className = "top">
                 <h1>Sign In With Google</h1>
                 </div>
                 <div className="body">
                    <GoogleLogin 
                    clientId="813779850060-puiveflq6qm3ppn28dqbi68mmg12ee3i.apps.googleusercontent.com"
                    buttonText= "SignIn"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}/>
                    
                 </div>

            </div>
        </div>
    )
}
export default SignInPage;