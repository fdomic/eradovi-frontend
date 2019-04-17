
export interface kreirajOdjelDjelatnikaInterface {
    success: boolean;
    data: OdjelDjelatnikaInterface
}


export interface OdjelDjelatnikaInterface {
   
        odjel_id: number,
        djelatnik_id: number,
        naziv: string
         
}
