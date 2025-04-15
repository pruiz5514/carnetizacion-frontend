import { IEstablishments } from "../../Core/application/dto/establishment/get-establishments.dto";
import { HttpClient } from "../utils/client-http";

export class EstablismentService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string,token?:string){
        this.httpClient = new HttpClient(baseUrl, token);
    }

    async getEstablisments(url:string):Promise<IEstablishments[]>{
        try{
            const establishments = await this.httpClient.get<IEstablishments[]>(url)
            return establishments
        } catch(error){
            throw error
        }
    }
}