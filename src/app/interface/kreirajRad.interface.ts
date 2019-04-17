export interface kreirajRadInterface {
    success: boolean;
    data: RadInterface
}


export interface RadInterface {
 
  stanje_rada: {
      statusi_rada_id: number
    },

    djelatnik_id: number,

    naziv_hr: string,
    opis_hr: string,

    naziv_eng: string,
    opis_eng: string,

    naziv_tal: string,
    opis_tal: string
  
}
