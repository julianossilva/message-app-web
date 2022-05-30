import React, { createContext, PropsWithChildren, useContext, useState } from 'react'

export type UserData = {
    username: string
}

export type AuthContextData = {
    signIn(username: string, password: string): Promise<void>;
    signOut(username: string, password: string): Promise<void>;
    signUp(username: string, email: string, password: string, name: string): Promise<void>
    getUserData(): UserData | null;
    getToken(): string | null

}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    let [token, setToken] = useState<string | null>(null)
    let [userData, setUserData] = useState<UserData | null>(null)

    async function signIn(username: string, password: string): Promise<void> {
        throw new UsernameOrPasswordWorngError()
    }

    async function signOut(username: string, password: string): Promise<void> {
        setToken(null)
        setUserData(null)
    }

    async function signUp(username: string, email: string, password: string, name: string): Promise<void> {
    }

    function getUserData(): UserData | null {
        return userData
    }

    function getToken(): string | null {
        return token
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, signUp, getToken, getUserData }}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext)
}


export class UsernameOrPasswordWorngError extends Error {
    constructor() {
        super("Username or passoword wrong.")
    }
}

export class InvalidUsernameError extends Error {
    constructor() {
        super("Invalid username.")
    }
}

export class InvalidEmailError extends Error {
    constructor() {
        super("Invalid email.")
    }
}

export class InvalidPasswordError extends Error {
    constructor() {
        super("Invalid password.")
    }
}

export class InvalidNameError extends Error {
    constructor() {
        super("Invalid name.")
    }
}