export interface IQuery{
    offset: number,
    rows: IRow[],
    total_rows: number
}

export interface IRow{
    id: number,
    key: object,
    value: null
}