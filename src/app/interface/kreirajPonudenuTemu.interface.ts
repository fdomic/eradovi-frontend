export interface kreirajPonudenuTemuInterface {
    success: boolean;
    data: {

      rad_id:number,  
      djelatnik_id: number,

      naziv_hr: string,
      opis_hr: string,

      naziv_eng: string,
      opis_eng: string,

      naziv_tal: string,
      opis_tal: string
    }
}
