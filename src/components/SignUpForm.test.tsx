import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from "react-router-dom";
import { AuthProvider, InvalidUsernameError } from "../contexts/auth-context";
import { Api, ApiResponse, NotImplementedApi } from "../api";
import SignUpForm from "./SignUpForm";

describe("SignUpForm", () => {
    test("SignUpForm renders title", () => {
        let api: Api = new (class extends NotImplementedApi { })();

        render(
            <MemoryRouter>
                <AuthProvider api={api}>
                    <SignUpForm />
                </AuthProvider>
            </MemoryRouter>
        );

        expect(() =>
            screen.getByText(/Sign Up/, { selector: "h2" })
        ).not.toThrow();
    });

    test("SignUpForm renders labels", async () => {
        let api: Api = new (class extends NotImplementedApi { })();
        render(
            <MemoryRouter>
                <AuthProvider api={api}>
                    <SignUpForm />
                </AuthProvider>
            </MemoryRouter>
        );

        expect(() => {
            screen.getByText(/username:/);
            screen.getByText(/email:/);
            screen.getByText(/^password:/);
            screen.getByText(/confirm password:/);
            screen.getByText(/^name:/);
        }).not.toThrow();
    });

    test("SignUpForm renders submit button", async () => {
        let api: Api = new (class extends NotImplementedApi { })();
        render(
            <MemoryRouter>
                <AuthProvider api={api}>
                    <SignUpForm />
                </AuthProvider>
            </MemoryRouter>
        );

        expect(() => {
            screen.getByText(/Sign Up/, {
                selector: "button, input"
            });
        }).not.toThrow();
    });

    test("SignUpForm renders error message if username is invalid", async () => {
        let api: Api = new (class extends NotImplementedApi {
            async signUp(username: string, email: string, password: string, name: string): Promise<ApiResponse<{}>> {
                throw new InvalidUsernameError()
            }
        })();
        render(
            <MemoryRouter>
                <AuthProvider api={api}>
                    <SignUpForm />
                </AuthProvider>
            </MemoryRouter>
        );

        let submit = screen.getByText(/Sign Up/, {
            selector: "button, input"
        });

        userEvent.click(submit);

        await expect(screen.findByText(/invalid username./)).resolves.not.toBeUndefined()
    });
});
