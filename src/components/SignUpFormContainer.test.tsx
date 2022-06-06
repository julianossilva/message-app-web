import "@testing-library/jest-dom"
import React from 'react'
import { render, screen } from '@testing-library/react'
import SignInFormContainer from "./SignInFormContainer"
import { MemoryRouter } from "react-router-dom"

describe("SignUpFormContainer", ()=> {
    test("SignUpFormContainer renders the logo",async () => {
        
        render(
            <MemoryRouter>
                <SignInFormContainer/>
            </MemoryRouter>
        )

        expect(()=> {
            screen.getByAltText(/message app logo/)
        }).not.toThrow()
    })
})


