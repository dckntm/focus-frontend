import { Questionnaire } from './module';

export class Report{
    id: string;
    title: string;
    reportTemplateId: string;
    assignedOrganizationId: string;
    status: number;
    deadline: Date;
    questionnaireAnswers: Questionnaire[]
    tableAnswers: []
}