import axios, { Axios, AxiosError, AxiosInstance } from "axios";

export type ApiResponse<T> = {
    statusCode: number;
    messageError?: string;
    body: T;
};

export interface Api {
    signIn(
        username: string,
        password: string
    ): Promise<ApiResponse<{ code?: string, token?: string }>>;
    signUp(
        username: string,
        email: string,
        password: string,
        name: string
    ): Promise<ApiResponse<{code?: string}>>;
    signOut(token: string): Promise<ApiResponse<{}>>;
}

export class NotImplementedApi implements Api {
    signIn(
        username: string,
        password: string
    ): Promise<ApiResponse<{ token: string }>> {
        throw new Error("Method not implemented.");
    }
    signUp(
        username: string,
        email: string,
        password: string,
        name: string
    ): Promise<ApiResponse<{}>> {
        throw new Error("Method not implemented.");
    }
    signOut(token: string): Promise<ApiResponse<{}>> {
        throw new Error("Method not implemented.");
    }
}

export class ApiAxios implements Api {
    private api: AxiosInstance;

    constructor(baseUrl?: string, timeout?: number) {
        this.api = axios.create({
            baseURL: baseUrl ?? String(process.env.REACT_APP_API_URL),
            timeout,
        });
    }

    async signUp(
        username: string,
        email: string,
        password: string,
        name: string
    ): Promise<ApiResponse<{code?: string}>> {
        try {
            let res = await this.api.post("/signup", {
                username,
                email,
                password,
                name,
            });
            return {
                statusCode: res.status,
                body: {},
            };
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status == 400) {
                    return {
                        statusCode: 400,
                        body: {
                            code: String(error.response.data.code),
                        }
                    }
                }
            }
            console.log(error)
            throw new HttpRequestError();
        }
    }

    async signIn(
        username: string,
        password: string
    ): Promise<ApiResponse<{ token: string }>> {
        try {
            let res = await this.api.post("/signin", {
                username,
                password,
            });
            return {
                statusCode: 200,
                body: {
                    token: String(res.data.token),
                },
            };
        } catch (error) {
            throw new HttpRequestError();
        }
    }

    async signOut(token: string): Promise<ApiResponse<{}>> {
        try {
            let res = await this.api.post(
                "/signout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return {
                statusCode: 200,
                body: {},
            };
        } catch (error) {
            throw new HttpRequestError();
        }
    }
}

export class HttpRequestError extends Error {
    constructor() {
        super("Http error.");
    }
}
