import styled from "styled-components"
import SignInForm from "./SignInForm"

export default function SignInFormContainer() {
    return (
        <Container>
            <div className="logo-wrapper">
                <div>
                    logo
                </div>
            </div>
            <SignInForm/>
        </Container>
    )
}

const Container = styled.h1`
    min-width: 300px;
    
`