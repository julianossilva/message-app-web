import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useAuth, UsernameOrPasswordWorngError } from "../contexts/auth-context";
import { faCircle, faCircleXmark, faUserSecret, faX } from "@fortawesome/free-solid-svg-icons";

export default function SignInForm() {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loginFailed, setLoginFailed] = useState(false);

    const { signIn } = useAuth()

    async function submit(event: FormEvent) {
        event.preventDefault()

        try {
            await signIn(username, password)
        } catch (error) {
            if (error instanceof UsernameOrPasswordWorngError) {
                setLoginFailed(true)
            }
        }
    }

    return (
        <Container onSubmit={submit}>
            {loginFailed ? (
                <p className="error-message">
                    username or password wrong. 
                    <a onClick={() => setLoginFailed(false)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </a></p>)
                : (<></>)}
            <form>
                <label htmlFor="username">username:</label>
                <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                <label htmlFor="password">password:</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
            <p>Not registered? <Link className="signup-link" to="/signup">Sign Up</Link></p>
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

    .signup-link{
        color: #00A3E9;
    }
`