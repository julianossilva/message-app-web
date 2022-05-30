import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './contexts/auth-context';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SingIn';

export function Router() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}