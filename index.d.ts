declare class Decimal {
    public constructor(value: number | string | Decimal);
    public neg(): Decimal;
    public isNeg(): boolean;
    public isPos(): boolean;
    public isZero(): boolean;
    public eq(value: number | string | Decimal): boolean;
    public gt(value: number | string | Decimal): boolean;
    public gte(value: number | string | Decimal): boolean;
    public lt(value: number | string | Decimal): boolean;
    public lte(value: number | string | Decimal): boolean;
    public add(value: number | string | Decimal): Decimal;
    public sub(value: number | string | Decimal): Decimal;
    public mul(value: number | string | Decimal): Decimal;
    public div(value: number | string | Decimal): Decimal;
    public divToInt(value: number | string | Decimal): Decimal;
    public pow(value: number | string | Decimal): Decimal;
    public toHex(): string;
    public toNumber(): number;
    public toString(): string;
    public valueOf(): string;
}
declare namespace Decimal {
    function max(...values: (number | string | Decimal)[]): Decimal;
    function min(...values: (number | string | Decimal)[]): Decimal;
}
export default Decimal;
