import { PouchDoc } from "app/models/pouchDoc";

import { Validators } from '@angular/forms';

export class Student extends PouchDoc {
    public firstname: string;
    public lastname: string;
    public birthdate: string;
    public address: string;
    public locality: string;
    public phone: string;
    public type: string;
    // TODO Fix the any type to valid comment type
    public comments: {credatim: Date, comment: string}[];

    constructor(student: any = {}) {
        super(student._id, student._rev);
        this.firstname = student.firstname || '';
        this.lastname = student.lastname || '';
        this.birthdate = student.birthdate || '';
        this.address = student.address || '';
        this.locality = student.locality || '';
        this.phone = student.phone || '';
        this.type = 'Student';
        this.comments = student.comments || [];
        /*this.comments.forEach( comment => {
            comment.datetime = new Date();
        })*/
    }

    static validators = {
        firstname: [Validators.required, Validators.minLength(3)],
        lastname: [Validators.required, Validators.minLength(3)],
        birthdate: [Validators.required, Validators.minLength(10), Validators.pattern(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)]
    }
}