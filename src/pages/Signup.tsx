import styled from 'styled-components'
import SignUpFormContainer from '../components/SignUpFormContainer'

export default function SignUp() {
    return (
        <Container>
            <SignUpFormContainer/>
        </Container>
    )
}

const Container = styled.div`
    background-color: #F3F1F9;
    justify-content: center;
    display: flex;
    min-height: 100vh;
    min-width: 100vw;

`