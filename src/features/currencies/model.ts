export interface Currency {
    code: string;
    reverse?: boolean;
    stringify: (value: number) => string;
}
