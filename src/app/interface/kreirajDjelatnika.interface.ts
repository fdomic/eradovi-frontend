export interface KreirajDjelatnikaInterface {
    success: boolean;
    data: DjelatnikaInterface;
}

export interface DjelatnikaInterface {
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
