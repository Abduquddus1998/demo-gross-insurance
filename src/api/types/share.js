//@flow

export type ShareInfoParams = {
  customer_account_number: string,
  bond_series: string,
  bond_number: string,
};

export type SellShareParams = {
  requester_account_number: string,
  bond_series: string,
  bond_number: string,
  money_amount: string,
  transfer_type: number,
};

export type ShareShortInfo = {
  bond_series: string,
  bond_number: string,
  bond_absolute_value: number,
  bond_percent: number,
};

export type TradeShares = {
  data: Array<ShareShortInfo>,
};

export type Step1 = {
  bond_series: string,
  bond_number: string,
  bond_absolute_value: number,
  bond_percent: number,
  bond_life_time: number,
  bond_start_date: string,
  bond_end_date: string,
  price: number,
  seller_name: string,
  customer_privilege: number,
};

export type BuyShareSteps1 = {
  data: Array<Step1>,
};
