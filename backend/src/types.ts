export type Address = {
  city: string;
  country: string;
  street: string;
  zip: string;
};

export type Customer = {
  email: string;
  name: string;
  phone: string;
};

export type OrderType = {
  id: string;
  title: string;
  bookingDate: number;
  address: Address;
  customer: Customer;
};

export type CustomError = Error & {
  status: 500 | 400 | 404 | 403;
};
