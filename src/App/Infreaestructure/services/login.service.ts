import { ILoginResponse } from "../../Core/application/dto/login/login-response.dto";
import { ILogin } from "../../Core/application/dto/login/login.dto";
import { errorAlert } from "../utils/alerts";
import { HttpClient } from "../utils/client-http";

export class LoginService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async login(url:string, body: ILogin){
        try{
            const user = await this.httpClient.post<ILoginResponse, ILogin>(url, body);
            return user
        } catch(error){
            errorAlert((error as { message: string }).message);
            console.log(error);
            throw error
        }
    }
}