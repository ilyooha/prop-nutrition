export interface Units {
    code: string;
    stringify: (value: number) => string;
}

export interface Count {
    value: number;
    units: Units;
}