export interface IScanStudents {
    id:               number;
    student_id:       string;
    scanned_at:       Date;
    discount_applied: boolean;
    establishment:    Establishment;
}

export interface Establishment {
    fullname:              string;
    phone_number:          number;
    email:                 string;
    establishment_name:    string;
    establishment_address: string;
    createdAt:             Date;
}
