export interface IPostStudentsResponse {
    message:    string;
    newStudent: NewStudent;
}

export interface NewStudent {
    id:        string;
    fullname:  string;
    email:     string;
    qr_code:   string;
    active:    boolean;
    createdAt: Date;
}
