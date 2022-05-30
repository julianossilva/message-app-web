import styled from 'styled-components'
import SignInFormContainer from '../components/SignInFormContainer'

export default function SignIn() {
    return (
        <Container>
            <SignInFormContainer/>
        </Container>
    )
}

const Container = styled.div`
    background-color: #F3F1F9;
    justify-content: center;
    display: flex;
    height: 100vh;
    width: 100vw;
`