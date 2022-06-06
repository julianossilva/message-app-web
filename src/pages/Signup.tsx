import React from "react";

import styled from "styled-components";
import SignUpFormContainer from "../components/SignUpFormContainer";

export default function SignUp() {
    return (
        <Container>
            <SignUpFormContainer />
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
