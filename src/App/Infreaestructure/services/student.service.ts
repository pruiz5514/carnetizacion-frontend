import { IStudentById } from "../../Core/application/dto/student/get-student-byId.dto";
import { HttpClient } from "../utils/client-http";

export class StudentService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string,token?:string){
        this.httpClient = new HttpClient(baseUrl, token);
    }

    async getStudentById(url:string,id:string):Promise<IStudentById>{
        try{
            const studentById = await this.httpClient.get<IStudentById>(`${url}/${id}`)
            return studentById
        } catch(error){
            throw error
        }
    }
}