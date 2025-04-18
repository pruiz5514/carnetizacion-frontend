import { IScanByEstablishment } from "../../Core/application/dto/scan/get-scan-establishment.dto";
import { IScanStudents } from "../../Core/application/dto/scan/get-scan-student.dto";
import { IPostScanResponse } from "../../Core/application/dto/scan/post-scan-response.dto";
import { IPostScan } from "../../Core/application/dto/scan/post-scan.dto";
import { errorAlert, successAlert } from "../utils/alerts";
import { HttpClient } from "../utils/client-http";

export class ScanService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string, token?:string){
        this.httpClient = new HttpClient(baseUrl, token);
    }

    async scan(url:string, body: IPostScan){
        try{
            const scan = await this.httpClient.post<IPostScanResponse, IPostScan>(url, body);
            successAlert('Registro guardado exitosamente')
            return scan
        } catch(error){
            errorAlert((error as { message: string }).message);
            console.log(error);
            throw error
        }
    }

    async getByEstablishmentId(url:string, id:string):Promise<IScanByEstablishment[]>{
        try{
            const scan = await this.httpClient.get<IScanByEstablishment[]>(`${url}/${id}`);
            return scan
        }catch(error){
            console.log(error);
            throw error
        }
    }

    async getByStudentId(url:string, id:string):Promise<IScanStudents[]>{
        try{
            const scan = await this.httpClient.get<IScanStudents[]>(`${url}/${id}`);
            return scan
        }catch(error){
            console.log(error);
            throw error
        }
    }
}