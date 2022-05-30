import styled from "styled-components"

export default function SignInForm() {
    return (
        <Container>
            <form>
                <label htmlFor="username">username:</label>
                <input type="text" name="username" />
                <label htmlFor="password">username:</label>
                <input type="password" name="password" />
            </form>
        </Container>
    )
}


const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
    }
`