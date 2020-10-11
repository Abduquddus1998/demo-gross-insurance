// @flow
import { Base } from "./base";

import type {
  RegistrationParams,
  ConfirmationParams,
  LoginParams,
} from "./types/auth";

class AuthApi extends Base {
  async registration(url: string, params: RegistrationParams): Promise<any> {
    return this.postRequest(url, params);
  }

  async confirmation(url: string, params: ConfirmationParams): Promise<any> {
    return this.postRequest(url, params);
  }

  async userLogin(url: string, params: LoginParams): Promise<any> {
    return this.postRequest(url, params);
  }
}

const authApi: AuthApi = new AuthApi();

export default authApi;
