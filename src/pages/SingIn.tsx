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
    display: flex;
    padding: 5px;
    width: 100vw;
    height: 100vh;
`