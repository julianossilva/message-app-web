import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/auth-context";
import { Api, NotImplementedApi } from "../api";
import SignInFormContainer from "./SignInFormContainer";

describe("SignInFormContainer", () => {
    test("SignInFormContainer", async () => {
        let api: Api = new (class extends NotImplementedApi {})();

        render(
            <MemoryRouter>
                <AuthProvider api={api}>
                    <SignInFormContainer />
                </AuthProvider>
            </MemoryRouter>
        );

        expect(() => screen.getByAltText(/message app logo/)).not.toThrow();
    });
});
