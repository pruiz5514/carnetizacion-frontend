import { IStudentById } from "../../Core/application/dto/student/get-student-byId.dto";
import { IStudents } from "../../Core/application/dto/student/get-students.dto";
import { IPostStudentsResponse } from "../../Core/application/dto/student/post-student-response.dto";
import { IPostStudents } from "../../Core/application/dto/student/post-student.dto";
import { IPutStudentsResponse } from "../../Core/application/dto/student/put-student-response.dto";
import { errorAlert, successAlert } from "../utils/alerts";
import { HttpClient } from "../utils/client-http";

export class StudentService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string,token?:string){
        this.httpClient = new HttpClient(baseUrl, token);
    }

    async getAllStudents(url:string):Promise<IStudents[]>{
        try{
            const students = await this.httpClient.get<IStudents[]>(url)
            return students
        } catch(error){
            throw error
        }
    }


    async getStudentById(url:string,id:string):Promise<IStudentById>{
        try{
            const studentById = await this.httpClient.get<IStudentById>(`${url}/${id}`)
            return studentById
        } catch(error){
            throw error
        }
    }

    async postStudent(url:string, body:IPostStudents):Promise<IPostStudentsResponse>{
        try{
            const newEstablishment = await this.httpClient.post<IPostStudentsResponse, IPostStudents>(url,body);
            successAlert('Estudiante publicado exitosamente')
            return newEstablishment
        }catch(error){
            errorAlert((error as { message: string }).message);
            throw error
        }
    }

    async deleteStudent(url:string, id:string){
        try{
            await this.httpClient.delete<string>(`${url}/${id}`);
            successAlert('Estudiante eliminado exitosamente')
        }catch(error){
            errorAlert((error as { message: string }).message);
            throw error
        }
    }

        async updateStudent(url:string, id:string, body:IPostStudents):Promise<IPutStudentsResponse>{
            try{
                const updatedStudent = await this.httpClient.put<IPutStudentsResponse, IPostStudents>(`${url}/${id}`, body);
                successAlert('Estudiante actualizado exitosamente')
                return updatedStudent
            }catch(error){
                errorAlert((error as { message: string }).message);
                throw error
            }
        }
}