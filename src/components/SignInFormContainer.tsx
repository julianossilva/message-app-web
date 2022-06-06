import React from "react";
import styled from "styled-components";
import SignInForm from "./SignInForm";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function SignInFormContainer() {
    return (
        <Container>
            <div className="logo-wrapper">
                <Link to="/">
                    <img className="logo" src={logo} alt="message app logo" />
                </Link>
            </div>
            <SignInForm />
        </Container>
    );
}

const Container = styled.div`
    padding: 5px;
    max-width: 100vw;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo-wrapper {
        display: flex;
        justify-content: center;
    }

    .logo-wrapper .logo {
        max-width: 50px;
        margin-bottom: 10px;
    }
`;
