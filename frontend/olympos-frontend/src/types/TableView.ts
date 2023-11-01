export interface ColDef {
    header: string;
    value: string;
    ratio: number;
    extend?: boolean;
}
export interface RowData<T> {
    [key: string]: string | number | boolean | Extend<T>;
}
interface Extend<T> {
    component: T;
    slot: string | number;
}