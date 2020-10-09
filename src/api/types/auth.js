// @flow
export type RegistrationParams = {
  customer_name: string,
  customer_surname: string,
  customer_email: string,
};

export type ConfirmationParams = {
  security_key: string,
  customer_password: string,
};
