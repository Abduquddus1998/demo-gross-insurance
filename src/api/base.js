import axios from "axios";
import configs from "config/index";

export class Base {
  instance = axios.create({
    baseURL: configs.baseUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  async getRequest(url) {
    const { data } = await this.instance.request({
      url: url,
      method: "get",
    });

    if (!data.data || data.error) {
      throw data.error;
    }

    return { data: data.data, error: data.error, status: data.status };
  }

  async postRequest(url, params) {
    const { data } = await this.instance.request({
      url: url,
      method: "post",
      data: params,
    });

    if (!data.data || data.error) {
      throw data.error;
    }

    return { data: data.data, error: data.error, status: data.status };
  }
}
