import React from "react";

import styled from "styled-components";
import SignInFormContainer from "../components/SignInFormContainer";

export default function SignIn() {
    return (
        <Container>
            <SignInFormContainer />
        </Container>
    );
}

const Container = styled.div`
    background-color: #f3f1f9;
    justify-content: center;
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
`;
