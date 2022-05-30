import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useAuth, UsernameOrPasswordWorngError } from "../contexts/auth-context";
import { faCircleXmark, faUserSecret, faX } from "@fortawesome/free-solid-svg-icons";

export default function SignUpForm() {

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [name, setName] = useState("");
    let [loginFailed, setLoginFailed] = useState(false);

    const { signUp } = useAuth()

    async function submit(event: FormEvent) {
        event.preventDefault()

        try {
            await signUp(username, email, password, name)
        } catch (error) {
            if (error instanceof UsernameOrPasswordWorngError) {
                setLoginFailed(true)
            }
        }
    }

    return (
        <Container>
            <h2>Sign Up</h2>
            {loginFailed ? (
                <p className="error-message">
                    username or password wrong. 
                    <a onClick={() => setLoginFailed(false)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </a></p>)
                : (<></>)}
            <form  onSubmit={submit}>
                <label htmlFor="username">username:</label>
                <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />

                <label htmlFor="email">email:</label>
                <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                
                <label htmlFor="password">password:</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                
                <label htmlFor="confirm-password">confirm password:</label>
                <input type="password" name="confirm-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                
                <label htmlFor="name">name:</label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                
                <button type="submit">Sign Up</button>
            </form>
            <p>Already registered? <Link className="signin-link" to="/signin">Sign In</Link></p>
        </Container>
    )
}


const Container = styled.div`
    font-family: 'Courier New', Courier, monospace;
    font-size: 12pt;
    background-color: #211834;
    color: #F3F1F9;
    padding: 15px;
    border-radius: 5px;

    h2 {
        font-size: 14pt;
        font-weight: bolder;
        margin: 5px 0;
    }


    .error-message {
        color: #F3F1F9;
        background-color: rgb(209, 55, 55);
        padding: 5px;
    }

    .error-message a {
        margin-left: 5px;
        
    }

    .error-message a:hover {
        color: #211834;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form label {
        margin-top: 10px;
    }

    form input {
        margin-top: 5px;
        outline: none;
        padding: 5px;
        font-size: 14pt;
        font-weight: 400;
        border: 1px solid #211834;
        background-color: #F3F1F9;
    }

    form button {
        margin-top: 10px;
        padding: 5px;
        font-weight: bold;
        color: #F3F1F9;
        background-color: #34803F;
        border: 1px solid #1E4824;
    }

    .signin-link{
        color: #00A3E9;
    }
`