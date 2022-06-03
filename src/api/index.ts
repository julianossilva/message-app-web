import axios, { AxiosInstance } from 'axios'

export interface Api {
    signUp(username: string, email: string, password: string, name: string): Promise<void>
}

export class ApiAxios implements Api{

    private api: AxiosInstance
    
    constructor() {
        this.api = axios.create({
            baseURL: String(process.env.REACT_APP_API_URL),
            timeout: 1000,
            //headers: {'X-Custom-Header': 'foobar'}
        })
    }

    async signUp(username: string, email: string, password: string, name: string) {
        try {
            let res = await this.api.post("/signup", {
                username,
                email,
                password,
                name
            });
        } catch (error) {
            console.log(error)
        }
    }
}