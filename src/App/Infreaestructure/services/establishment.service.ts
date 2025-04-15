import { IEstablishments } from "../../Core/application/dto/establishment/get-establishments.dto";
import { IPostEstablishmentsResponse } from "../../Core/application/dto/establishment/post-establishment-response.dto";
import { IPostEstablishments } from "../../Core/application/dto/establishment/post-establishment.dto";
import { IPutEstablishmentsResponse } from "../../Core/application/dto/establishment/put-establishment-response.dto";
import { IPutEstablishments } from "../../Core/application/dto/establishment/put-establishment.dto";
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

    async getEstablishmentById(url:string, id:string):Promise<IEstablishments>{
        try{
            const establishment = await this.httpClient.get<IEstablishments>(`${url}/${id}`)
            return establishment
        }catch(error){
            errorAlert('No se encontro informacion del establecimiento')
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

    async updateEstablishment(url:string, id:string, body:IPutEstablishments):Promise<IPutEstablishmentsResponse>{
        try{
            const updatedEstablishment = await this.httpClient.put<IPutEstablishmentsResponse, IPutEstablishments>(`${url}/${id}`, body);
            successAlert('Establecimiento actualizado exitosamente')
            return updatedEstablishment
        }catch(error){
            errorAlert((error as { message: string }).message);
            throw error
        }

    }
}