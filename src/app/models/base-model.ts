export class BaseModel<T> {
    statusCode: number;
    statusMessage: string;
    isSuccess: boolean;
    data: T | undefined;
    errors: ModelError[];

    constructor() {
        this.statusCode = 200;
        this.statusMessage = "";
        this.isSuccess = true;
        this.data;
        this.errors = [];
    }
}

export interface ModelError {
    key: string
    message: string
  }