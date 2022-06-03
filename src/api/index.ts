import axios, { AxiosInstance } from 'axios'

export interface Api {
    signUp(): Promise<void>
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

    async signUp() {
        try {
            let res = await this.api.get("/user")
            console.log(res)
        } catch (error) {

        }
    }
}