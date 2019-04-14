export interface kreirajKomentarInterface {
    success: boolean;
    data: {
     
        rad_id: string,
        djelatnik_id:string,
        student_id: string,
        komentar: string,
        datum: Date,
        id: number

    }
}
