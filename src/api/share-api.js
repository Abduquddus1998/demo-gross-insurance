// @flow

import { Base } from "./base";

import { ShareInfoParams } from "./types/share";

export class ShareApi extends Base {
  async getShareInfo(url: string, params: ShareInfoParams): Promise<any> {
    return this.postRequest(url, params);
  }

  async shareSaleRequest(url: string, params): Promise<any> {
    return this.postRequest(url, params);
  }
}

const shareApi: ShareApi = new ShareApi();

export default shareApi;
