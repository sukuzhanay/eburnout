
export interface Answer {
    id: string;
    question: string;
    value: string;
};

export interface Question {
    id: string;
    recommendation: string;
    checked: boolean;
};

export interface QuestionUser {
    key?: string;
    email: string;
    user: string;
    survey: string;
    created_at: string;
    updated_at: string;
    questions: Array<Question>;
    answers: Array<Answer>;
};
