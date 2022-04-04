export interface Question{
    uuid: number;
    question: string;
    isQuestion: number;
    takeCount: number;
    isMSQ: number;
    questionnaireOptions: [number];
}