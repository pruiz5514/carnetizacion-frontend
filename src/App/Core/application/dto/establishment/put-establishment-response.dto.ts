export interface IPutEstablishmentsResponse {
    message:       string;
    establishment: Establishment;
}

export interface Establishment {
    id:                    string;
    fullname:              string;
    phone_number:          number;
    email:                 string;
    role_id:               number;
    establishment_name:    string;
    establishment_address: string;
}
