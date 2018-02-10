export class UserModel {

  constructor(private id: number,
              private firstName: string,
              private lastName: string,
              private email: string,
              private password: string,
              public authToken: string) {
  }
}
