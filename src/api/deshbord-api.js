// @flow

import { Base } from "./base";

export class Dashboard extends Base {
  async getProfileInfo(url: string, params): Promise<any> {
    return this.postRequest(url, params);
  }

  async sharesInSale(url: string, params): Promise<any> {
    return this.postRequest(url, params);
  }

  async sharesInBuy(url: string, params): Promise<any> {
    return this.postRequest(url, params);
  }
}

const dashboardApi: Dashboard = new Dashboard();

export default dashboardApi;
