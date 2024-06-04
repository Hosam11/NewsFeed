export class UserInfo {
  fName: string;
  phoneNumber: string;
  gender: string;
  bDate: Date;

  constructor(fname: string, phoneNumber: string, gender: string, bDate: Date) {
    this.fName = fname;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.bDate = bDate;
  }
}
