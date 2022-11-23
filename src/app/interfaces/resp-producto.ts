export interface RespProductos {
    range:          string;
    majorDimension: string;
    values:         Array<string[]>;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toRespProductos(json: string): RespProductos {
        return JSON.parse(json);
    }

    public static respProductosToJson(value: RespProductos): string {
        return JSON.stringify(value);
    }
}