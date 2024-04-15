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