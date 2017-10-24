import { Materia } from '../../materia/model/materia';

export class SubjectDay {
    id?: string;
    day?: string;
    subject?: Materia;
    startTime?: string;
    endTime?: string;

    constructor(
        day?: string,
        subject?: Materia,
        startTime?: string,
        endTime?: string
    ) {
        this.day = day;
        this.subject = subject;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}





