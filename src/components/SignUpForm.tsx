import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    EmailAlreadyRegistered,
    InvalidEmailError,
    InvalidNameError,
    InvalidPasswordError,
    InvalidUsernameError,
    useAuth,
    UsernameAlreadyRegistered,
} from "../contexts/auth-context";
import {
    faCircleXmark,
    faUserSecret,
    faX,
} from "@fortawesome/free-solid-svg-icons";

export default function SignUpForm() {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [name, setName] = useState("");

    let [invalidUsername, setInvalidUsername] = useState(false);
    let [invalidEmail, setInvalidEmail] = useState(false);
    let [invalidPassword, setInvalidPassword] = useState(false);
    let [invalidName, setInvalidName] = useState(false);

    let [passwordConfirmationNotMatch, setPasswordConfirmationNotMatch] =
        useState(false);

    let [usernameAlreadyRegistered, setUsernameAlreadyRegistered] =
        useState(false);
    let [emailAlreaduRegistered, setEmailAlreadyRegistered] = useState(false);

    const { signUp } = useAuth();

    async function submit(event: FormEvent) {
        event.preventDefault();

        try {
            if (password != confirmPassword) {
                setPasswordConfirmationNotMatch(true);
                return;
            }
            await signUp(username, email, password, name);
        } catch (error) {
            if (error instanceof InvalidUsernameError) {
                setInvalidUsername(true);
            } else if (error instanceof InvalidEmailError) {
                setInvalidEmail(true);
            } else if (error instanceof InvalidPasswordError) {
                setInvalidPassword(true);
            } else if (error instanceof InvalidNameError) {
                setInvalidName(true);
            } else if (error instanceof UsernameAlreadyRegistered) {
                setUsernameAlreadyRegistered(true);
            } else if (error instanceof EmailAlreadyRegistered) {
                setEmailAlreadyRegistered(true);
            }
        }
    }

    function clearErrors() {
        setInvalidUsername(false);
        setInvalidEmail(false);
        setInvalidPassword(false);
        setInvalidName(false);
        setPasswordConfirmationNotMatch(false);
        setUsernameAlreadyRegistered(false);
        setEmailAlreadyRegistered(false);
    }

    return (
        <Container>
            <h2>Sign Up</h2>

            {invalidUsername && (
                <div className="error-message-container">
                    <div className="error-messages">
                        {invalidUsername && (
                            <div className="error-message">
                                invalid username.
                            </div>
                        )}
                        {invalidEmail && (
                            <div className="error-message">invalid email.</div>
                        )}
                        {invalidPassword && (
                            <div className="error-message">
                                invalid password.
                            </div>
                        )}
                        {invalidName && (
                            <div className="error-message">invalid name.</div>
                        )}
                        {passwordConfirmationNotMatch && (
                            <div className="error-message">
                                password and confirmation not match.
                            </div>
                        )}
                        {usernameAlreadyRegistered && (
                            <div className="error-message">
                                username already registered.
                            </div>
                        )}
                        {emailAlreaduRegistered && (
                            <div className="error-message">
                                email already registered.
                            </div>
                        )}
                    </div>
                    <a
                        className="close-errors-button"
                        onClick={() => clearErrors()}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </a>
                </div>
            )}

            <form onSubmit={submit}>
                <label htmlFor="username">username:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email">email:</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="confirm-password">confirm password:</label>
                <input
                    type="password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <label htmlFor="name">name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already registered?{" "}
                <Link className="signin-link" to="/signin">
                    Sign In
                </Link>
            </p>
        </Container>
    );
}

const Container = styled.div`
    font-family: "Courier New", Courier, monospace;
    font-size: 12pt;
    background-color: #211834;
    color: #f3f1f9;
    padding: 15px;
    border-radius: 5px;

    h2 {
        font-size: 14pt;
        font-weight: bolder;
        margin: 5px 0;
    }

    .error-message-container {
        display: flex;
        color: #f3f1f9;
        background-color: rgb(209, 55, 55);
        padding: 5px;
    }

    .error-message-container .error-messages {
        flex-grow: 1;
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
        background-color: #f3f1f9;
    }

    form button {
        margin-top: 10px;
        padding: 5px;
        font-weight: bold;
        color: #f3f1f9;
        background-color: #34803f;
        border: 1px solid #1e4824;
    }

    .signin-link {
        color: #00a3e9;
    }
`;
