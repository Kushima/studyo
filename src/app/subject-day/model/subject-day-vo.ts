export class SubjectDayVO {

    id?: string;
    day?: string;
    subject?: string;
    startTimeMinute?: string;
    startTimeHour?: string;
    endTimeMinute?: string;
    endTimeHour?: string;

    constructor(
        id?: string,
        day?: string,
        subject?: string,
        startTimeMinute?: string,
        startTimeHour?: string,
        endTimeMinute?: string,
        endTimeHour?: string,
    ) {
        this.id = id;
        this.day = day;
        this.subject = subject;
        this.startTimeMinute = startTimeMinute;
        this.startTimeHour = startTimeHour;
        this.endTimeMinute = endTimeMinute;
        this.endTimeHour = endTimeHour;
    }
}





