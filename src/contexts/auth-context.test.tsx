import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth-context";
import { NotImplementedApi } from "../api";

describe("AuthProvider", () => {
    test("AuthProvider ...", async () => {
        let api = new (class extends NotImplementedApi {})();

        let MyTester = () => {
            let {} = useAuth();

            return <h1>My Tester</h1>;
        };

        render(
            <AuthProvider api={api}>
                <MyTester />
            </AuthProvider>
        );
    });
});
