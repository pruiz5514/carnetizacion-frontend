export interface IPostEstablishmentsResponse {
    message:       string;
    establishment: IEstablishment;
}

export interface IEstablishment {
    id:                    string;
    fullname:              string;
    phone_number:          number;
    email:                 string;
    role_id:               number;
    establishment_name:    string;
    establishment_address: string;
    createdAt:             Date;
}
