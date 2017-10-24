import { Materia } from './../../../materia/model/materia';
import { SubjectDayVO } from './../subject-day-vo';
import { SubjectDay } from './../subject-day';
export class SubjectDayConverter {

    public toDB(vo: SubjectDayVO) {
        return new SubjectDay(
            vo.day,
            new Materia(vo.subject),
            vo.startTimeHour + ':' + vo.startTimeMinute,
            vo.endTimeHour + ':' + vo.endTimeMinute
        );
    }

}
