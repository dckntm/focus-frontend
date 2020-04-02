export class Report{
    constructor(
        public id,
        public title,
        public questionnaires:[
            {
                sections: [
                    {
                        title: string,
                        order: number,
                        repeatable: boolean,
                        questions: [
                            {
                                questionText: string,
                                inputType: number,
                            }
                        ]
                    }
                ],
                title: string,
                order: number,
            }
        ],
        tables: [],
    ){}

}