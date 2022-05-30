import styled from "styled-components"
import SignInForm from "./SignInForm"
import logo from '../assets/logo.png'
export default function SignInFormContainer() {
    return (
        <Container>
            <div className="logo-wrapper">
                <img className="logo" src={logo} alt="message app logo" />
            </div>
            <SignInForm/>
        </Container>
    )
}

const Container = styled.div`
    padding: 5px;
    min-width: 300px;
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
    
`