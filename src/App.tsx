import React from "react";
import "./assets/global.css";
import { BrowserRouter } from "react-router-dom";
import { Api } from "./api";
import { AuthProvider } from "./contexts/auth-context";
import RouteList from "./RouteList";

export type AppProps = {
    api: Api;
};

export function App(props: AppProps) {
    return (
        <BrowserRouter>
            <AuthProvider api={props.api}>
                <RouteList />
            </AuthProvider>
        </BrowserRouter>
    );
}
export default App;
