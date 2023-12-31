export interface MultiplechoiceQuestion {
    question: string;
    options: Answer;
    kind: string;
    correctAnswer: string;
    bonus: boolean;
}

export interface VoicelineQuestion {
    question: string;
    voiceLine: string;
    kind: string;
    correctAnswer: string;
    bonus: boolean;
}

export interface Answer{
    option1: string;
    option2: string;
    option3: string;
    option4: string;
}

export interface ErrorQuestion {
    question: string;
    errorPicture: string;
    kind: string;
    correctedPicture: string;
    imgurLink: string;
    bonus: boolean;
}

export interface GeoguessrQuestion {
    question: string;
    searchPicture: string;
    kind: string;
    markedPicture: string;
    imgurLink: string;
    bonus: boolean;
    answer?: string;
}

export interface GuessingQuestion {
    question: string;
    video: string;
    videoQuestion: string,
    picture: string;
    pictureQuestion: string;
    kind: string;
    correctAnswer: string;
    bonus: boolean;
}

export interface LocationQuestion {
    question: string;
    searchPicture: string;
    kind: string;
    markedPicture: string;
    imgurLink: string;
    bonus: boolean;
}

export interface BuzzerQuestion {
    question: string;
    kind: string;
    video?: string;
    audio?: string;
    picture?: string;
}