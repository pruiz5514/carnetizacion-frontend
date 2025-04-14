export interface IPostScanResponse {
    message: string;
    newScan: NewScan;
}

export interface NewScan {
    id:               number;
    student_id:       string;
    establishment_id: string;
    discount_applied: boolean;
    scanned_at:       Date;
}
