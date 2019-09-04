export interface LoginResponseInterface {
    token: string;
    expires: number;
    
    id: number;

    user: {
        id: number;
    };

    credentials: {
        isProfesor: boolean;
        isReferada: boolean;
        isStudent: boolean;
    };
}