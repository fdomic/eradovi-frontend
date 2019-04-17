export interface kreirajKomentarInterface {
    success: boolean;
    data: KomentarInterface

}

export interface KomentarInterface {
    
     
        rad_id: string,
        djelatnik_id:string,
        student_id: string,
        komentar: string,
        datum: Date,
        id: number

    
}
