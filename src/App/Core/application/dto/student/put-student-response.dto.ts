export interface IPutStudentsResponse {
    message:        string;
    updatedStudent: UpdatedStudent;
}

export interface UpdatedStudent {
    id:        string;
    fullname:  string;
    email:     string;
    qr_code:   string;
    active:    boolean;
    createdAt: Date;
}
