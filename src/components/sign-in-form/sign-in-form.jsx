import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input";
import './sign-in-form.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields

    const dispatch = useDispatch();
    // console.log(formFields);
    
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };
    
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            dispatch(emailSignInStart(email, password))
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-credential':
                    alert('Incorrect email or password')
                    break;
                case 'auth/user-not-found':
                    alert('Email not found')
                    break;
                default:
                    console.log(error)
            }
        }
    }  

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({...formFields, [name]:value})
    }

    return ( 
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label='Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    );
}
export default SignInForm;