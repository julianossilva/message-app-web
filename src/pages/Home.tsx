import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/auth-context";

export default function Home() {
    let { getUserData } = useAuth();

    function signOut() {
        console.log("Log out");
    }

    let userData = getUserData();

    if (!userData) {
        return <Navigate to="/signin" />;
    }

    return (
        <Container>
            <h1>Home</h1>
            <Link to="signup">Sign Up</Link>
            <Link to="signin">Sign In</Link>
            <button onClick={signOut}>Sign Out</button>
        </Container>
    );
}

const Container = styled.div``;
