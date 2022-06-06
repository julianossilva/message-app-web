import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Api, NotImplementedApi } from "../api";
import {
    AuthProvider,
    UsernameOrPasswordWorngError,
} from "../contexts/auth-context";
import SignInForm from "./SignInForm";
import axios from "axios";

describe("SignInForm", () => {
    test("SignInForm renders title", async () => {
        let api: Api = new (class extends NotImplementedApi {})();
        render(
            <MemoryRouter initialEntries={["/signin"]}>
                <AuthProvider api={api}>
                    <SignInForm />
                </AuthProvider>
            </MemoryRouter>
        );

        let titles = screen.queryAllByText("SIGN IN", {
            selector: "h2",
            normalizer: (e) => e.toUpperCase(),
        });

        expect(titles.length).toBe(1);
    });

    test("SignInForm renders username and password labels", async () => {
        let api: Api = new (class extends NotImplementedApi {})();

        render(
            <MemoryRouter initialEntries={["/signin"]}>
                <AuthProvider api={api}>
                    <SignInForm />
                </AuthProvider>
            </MemoryRouter>
        );

        let usernameLabel = screen.queryByText("username:");
        let passwordLabel = screen.queryByText("password:");

        expect(usernameLabel).not.toBeNull();
        expect(passwordLabel).not.toBeNull();
    });

    test("SignInForm renders submit button", async () => {
        let api: Api = new (class extends NotImplementedApi {})();

        render(
            <MemoryRouter initialEntries={["/signin"]}>
                <AuthProvider api={api}>
                    <SignInForm />
                </AuthProvider>
            </MemoryRouter>
        );

        let button = screen.queryByText("Sign In", {
            selector: "button, input",
        });

        expect(button).not.toBeNull();
    });

    test("SignInForm renders show error message", async () => {
        let api: Api = new (class extends NotImplementedApi {})();

        render(
            <MemoryRouter initialEntries={["/signin"]}>
                <AuthProvider api={api}>
                    <SignInForm />
                </AuthProvider>
            </MemoryRouter>
        );

        let button = screen.getByText(/Sign In/, {
            selector: "button, input",
        });

        userEvent.click(button);

        let messageError = await screen.findByText(
            /username or password wrong/
        );

        expect(messageError).not.toBeNull();
    });
});
