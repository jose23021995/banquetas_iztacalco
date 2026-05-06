export interface ImagResponseExpress {
    URL_foto: string;
    id_registro: number;
    tipo: 'ANTES' | 'DESPUES';
}

export interface ImagPostMysql {
    id_imagen:number;
    URL_foto: string;
    id_registro: number;
    tipo: 'ANTES' | 'DESPUES';
    created_at: string | Date;
}
