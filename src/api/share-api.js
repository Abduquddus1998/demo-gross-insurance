// @flow

import { Base } from "./base";

import {
  ShareInfoParams,
  SellShareParams,
  TradeShares,
  BuyShareSteps1,
} from "./types/share";

export class ShareApi extends Base {
  async getShareInfo(url: string, params: ShareInfoParams): Promise<any> {
    return this.postRequest(url, params);
  }

  async shareSaleRequest(url: string, params: SellShareParams): Promise<any> {
    return this.postRequest(url, params);
  }

  async getAllTradeShares(url: string): Promise<TradeShares> {
    return this.getRequest(url);
  }

  async shareBuyFirstStep(
    url: string,
    params: ShareInfoParams
  ): Promise<BuyShareSteps1> {
    return this.postRequest(url, params);
  }

  async shareBuySecondStep(url: string, params): Promise<any> {
    return this.postRequest(url, params);
  }
}

const shareApi: ShareApi = new ShareApi();

export default shareApi;
