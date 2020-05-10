export class Report{
    id: string;
    title: string;
    reportTemplateId: string;
    assignedOrganizationId: string;
    status: number;
    deadline: Date;
    questionnaireAnswers: [{
        title: string;
        order: number;
        sectionAnswers: [{
            title: string;
            order: number;
            questionAnswers: [{
                title: string;
                order: number;
                answer: string;
                answerType: number;
            }]
        }]
    }] ;
    tableAnswers: []
}