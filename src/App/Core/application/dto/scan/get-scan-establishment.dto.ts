export interface IScanByEstablishment {
    id:               number;
    establishment_id: string;
    scanned_at:       Date;
    discount_applied: boolean;
    student:          Student;
}

export interface Student {
    id:        string;
    fullname:  string;
    email:     string;
    qr_code:   string;
    active:    boolean;
    createdAt: Date;
}
