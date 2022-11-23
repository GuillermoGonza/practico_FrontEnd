

export interface ProvinciaResponce {
    id:     number;
    nombre: string;
    api:    string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toProvinciaResponce(json: string): ProvinciaResponce[] {
        return JSON.parse(json);
    }

    public static provinciaToJsonResponce(value: ProvinciaResponce[]): string {
        return JSON.stringify(value);
    }
}
