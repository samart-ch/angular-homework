export class Questionnaire {
    questionCategoryId: string
    title: string
    totalQuestion: number
    level: string
    timeLimitOfMinuteUnit: number
    questionInfo: QuestionInfo[]

    constructor() {
        this.questionCategoryId = ""
        this.title = ""
        this.totalQuestion = 0
        this.level = ""
        this.timeLimitOfMinuteUnit = 0
        this.questionInfo = []
    }
  }
  
  export class QuestionInfo {
    questionId: string
    sequence: number
    title: string
    questionAnswerInfo: QuestionAnswerInfo[]

    constructor() {
        this.questionId = ""
        this.sequence = 0
        this.title = ""
        this.questionAnswerInfo = []
    }
  }
  
  export class QuestionAnswerInfo {
    questionAnswerId: string
    sequence: number
    answer: string

    constructor() {
        this.questionAnswerId = ""
        this.sequence = 0
        this.answer = ""
    }

  }