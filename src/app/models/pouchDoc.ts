export class PouchDoc{
    constructor(
        protected _id: string = String(new Date().getTime()), 
        protected _rev: string = ''
    ){ }
}