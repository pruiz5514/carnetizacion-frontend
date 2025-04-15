const defaultBaseUrl = import.meta.env.VITE_BACK_HOST ?? ''

export class HttpClient{
    private baseUrl: string;
    private token?: string

    constructor(baseUrl?: string, token?:string){
        this.baseUrl = baseUrl || defaultBaseUrl
        this.token = token
    }

    async get<T>(url:string): Promise<T>{
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: 'GET'
        })
        return this.handleResponse(response)
    }

    async post<T,B>(url:string, body: B): Promise<T>{
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`,{
            headers: headers,
            method: 'POST',
            body: JSON.stringify(body)
        })
        return this.handleResponse(response)
    }

    async delete<T>(url:string):Promise<T>{
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`,{
            method: 'DELETE',
            headers: headers
        })
        
        return this.handleResponse(response)
    }

    async put <T, B> (url:string, body:B): Promise<T>{
        const headers = await this.getHeader()
        const response = await fetch(`${this.baseUrl}/${url}`,{
            method:"PUT",
            headers: headers,
            body: JSON.stringify(body)
        });
    
        return this.handleResponse(response)
      }
    

    async getHeader(){
        const headers: HeadersInit = {
            "Content-Type" : 'application/json'
        }

        if(this.token){
            
            headers['Authorization'] = `Bearer ${this.token}`
        }

        return headers
    }

    private async handleResponse(response: Response) {
        if (!response.ok) {
          const errorData = await response.json();
          throw errorData;
        }
    
        return await response.json();
      }
}