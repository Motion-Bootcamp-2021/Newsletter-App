import React, { useState } from 'react';
import Button from './Button/Button';
import SignUpEmailForm from './SignUpEmailForm/SignUpEmailForm';
import './SignUp.scss';

 function SingUpPage ({nextPage}){ 
    const [isEmailSignUp, setEmailSignUpState] = useState(false);
    
    const emailSignUpMethod  = () => {
        setEmailSignUpState(!isEmailSignUp);
    }

    const gmailMethodSignUp = () => {
        //gmail signUp ...
    }

    const facebookMethodSignUp = () => {
        //facebook signUp ...
    }

    const signUpMethods = () => {
        if(!isEmailSignUp){
            return(
                <section className="signUp-others-method">
                    <Button text="SignUp with gmail" id="gmailButton" onClick={gmailMethodSignUp}/>
                    <Button text="SignUp with facebook" id="facebookButton" onClick={facebookMethodSignUp}/>
                </section>
            )
        }
        else{
            return null
        }
     }

     return (
         <div className="singUpPage">
             <div>
                 <SignUpEmailForm emailSignUpMethod={emailSignUpMethod} nextPage={nextPage}/>
                 {signUpMethods()}
             </div>
         </div>
     );
 }

export default SingUpPage;
