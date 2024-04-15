export class UserLogin {
    accountId: string;
    fullName: string;
    accessToken: string;
    expiredDate: string;

    constructor() {
        this.accountId = "";
        this.fullName = "";
        this.accessToken = "";
        this.expiredDate = "";
    }
}

export class BaseModel<T> {
    statusCode: number;
    statusMessage: string;
    isSuccess: boolean;
    data: T | undefined;
    errors?: any;
    test: string;

    constructor() {
        this.statusCode = 200;
        this.statusMessage = "";
        this.isSuccess = true;
        this.data;
        this.errors = null;
        this.test = "ddd";
    }
}


// interface RootObject {
//     statusCode: number;
//     statusMessage: string;
//     isSuccess: boolean;
//     data: Data;
//     errors?: any;
//   }
//   interface Data {
//     accountId: string;
//     fullName: string;
//     accessToken: string;
//     expiredDate: string;
//   }