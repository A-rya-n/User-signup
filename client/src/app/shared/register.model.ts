export class Register {
  public name: string;
  public email: string;
  public user: string;
  public password: string;

  constructor(name: string, email: string, user: string, password: string) {
    this.name = name;
    this.email = email;
    this.user = user;
    this.password = password;
  }
}
