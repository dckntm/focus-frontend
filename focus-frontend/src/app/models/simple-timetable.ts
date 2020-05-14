export class SimpleTimetable{
    id: string;
    emissionPeriod: string;
    organizations: string[];
    reportTemplate: string;
    deadlinePeriod:{
        days: number;
        months: number;
        years: number;
    }
}