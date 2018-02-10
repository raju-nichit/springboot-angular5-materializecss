export class AppConstant {
  public static BASE_URL = 'http://localhost:8080/programmingkida';
  public static SIGNIN_URL = AppConstant.BASE_URL + '/user/signin';
  public static SIGNUP_URL = AppConstant.BASE_URL + '/user/signup';
  public static LOGOUT_URL = AppConstant.BASE_URL + '/user/logout';
  public static UPDATE_PROFILE_URL = AppConstant.BASE_URL + '/user/{id}/edit';
}
