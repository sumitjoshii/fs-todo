export type LoginData = {
  email: string;
  password: string;
};

export type TokenResponse = {
  access: string;
  refresh: string;
  id: string;
};

export type RegisterData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
};

export type User = {
  id: number,
  username: string,
  email: string,
};