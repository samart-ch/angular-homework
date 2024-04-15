export class BaseModel<T> {
    statusCode: number;
    statusMessage: string;
    isSuccess: boolean;
    data: T | undefined;
    errors?: any;

    constructor() {
        this.statusCode = 200;
        this.statusMessage = "";
        this.isSuccess = true;
        this.data;
        this.errors = null;
    }
}