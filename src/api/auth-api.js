// @flow
import { Base } from "./base";

import type { RegistrationParams, ConfirmationParams } from "./types/auth";

class AuthApi extends Base {
  async registration(url: string, params: RegistrationParams): Promise<any> {
    return this.postRequest(url, params);
  }

  async confirmation(url: string, params: ConfirmationParams): Promise<any> {
    return this.postRequest(url, params);
  }
}

const authApi: AuthApi = new AuthApi();

export default authApi;

/*
*
— send verification code to email

http://localhost:8080/api/sign-up-confirm-email

request:
{
    "customer_name":"Abdubosit",
    "customer_surname":"Akhmedjanov",
    "customer_email":"bossbmw55@gmail.com"
}

responce:
success:
{
    "status": 0,
    "error": "undefined",
    "data": 1
}

error:
{
    "status": 1,
    "error": "duplicate",
    "data": "undefined"
}



— email verified
http://localhost:8080/api/sign-up-email-confirmed

request:
{
    "security_key":"579806",
    "customer_password":"a12345"
}

responce:
success:
{
    "status": 0,
    "error": "undefined",
    "data": "ok"
}

error:
{
    "status": 1,
    "error": "Incorrect verification code",
    "data": "undefined"
}
* */
