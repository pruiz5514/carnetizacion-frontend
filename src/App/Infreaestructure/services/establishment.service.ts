import { IEstablishments } from "../../Core/application/dto/establishment/get-establishments.dto";
import { IPostEstablishmentsResponse } from "../../Core/application/dto/establishment/post-establishment-response.dto";
import { IPostEstablishments } from "../../Core/application/dto/establishment/post-establishment.dto";
import { errorAlert, successAlert } from "../utils/alerts";
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

    async postEstablishment(url:string, body:IPostEstablishments):Promise<IPostEstablishmentsResponse>{
        try{
            const newEstablishment = await this.httpClient.post<IPostEstablishmentsResponse, IPostEstablishments>(url,body);
            successAlert('Establecimiento publicado exitosamente')
            return newEstablishment
        }catch(error){
            errorAlert((error as { message: string }).message);
            throw error
        }
    }
}