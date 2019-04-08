export interface KreirajDjelatnikaInterface {
    success: boolean;
    data: {
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
}
