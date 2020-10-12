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

  async updateProfile(url: string, params): Promise<any> {
    return this.postRequest(url, params);
  }

  async updatePassword(url: string, params): Promise<any> {
    return this.postRequest(url, params);
  }

  async balanceUpdate(url: string, params): Promise<any> {
    return this.postRequest(url, params);
  }
}

const dashboardApi: Dashboard = new Dashboard();

export default dashboardApi;
