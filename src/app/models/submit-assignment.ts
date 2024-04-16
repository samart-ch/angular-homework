export interface SelectionAnswer {
    questionId: string,
    questionAnswerId: string
}

export interface SubmitAssignment {
    questionCategoryId?: string;
    questions?: Question[];
}

export  interface Question {
    questionId?: string;
    answers?: Answer[];
}

export interface Answer {
    questionAnswerId?: string;
}