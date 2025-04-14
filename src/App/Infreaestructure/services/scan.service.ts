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
}