import { useDispatch } from "react-redux";
import { useState } from "react";

import { signUpStart } from "../../store/user/user.action";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input";
import './sign-up-form.styles.scss'
import Button from "../button/button";




const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:'',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields
    const dispatch = useDispatch();
    // console.log(formFields);

    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => { 
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email already taken');
            } else {
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
            <h2>Don't have an account</h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
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
                <FormInput
                    label='Confirm Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
}
export default SignUpForm;