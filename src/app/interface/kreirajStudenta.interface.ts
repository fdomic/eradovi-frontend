export interface kreirajStudentaInterface {
    success: boolean;
    data: StudentaInterface
}

export interface StudentaInterface {
    
        users: {
            name:string,
            email: string,
            password: string
        },
    
        ime: string,
        prezime: string,
        oib: number,
        jmbag: number
    
}
