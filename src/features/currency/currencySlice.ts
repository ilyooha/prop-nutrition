export interface Currency {
    code: string;
    sign: string;
    reverse?: boolean;
    formatValue: (value: number) => string;
}
