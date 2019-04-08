export interface KreirajFakultetInterface {
    success: boolean;
    data: FakultetInterface;
}

export interface FakultetInterface {
    id: number;
    fakultet_id:number;
    naziv: string;
    updated_at: string;
    created_at: string;
}
