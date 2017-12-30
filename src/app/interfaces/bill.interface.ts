import { ICustomer } from './customer.interface';

export interface IBill {
  id?: string;
  no?: string;
  date: Date;
  to: ICustomer;
  articles: IBillArticles[];
}

export interface IBillCompany {
  sex: string;
  fname: string;
  lname: string;
  company: string;
  street: string;
  number: string;
  zip: number;
  town: string;
  phone: string;
  mail: string | IMail;
  web: string;
  uid: string;
  iban: string;
  bic: string
}

interface IMail {
  name: string;
  domain: string
}

export interface IBillArticles {
    description: string;
    amount: number;
    amountType: string;
    singleprice?: number;
    price: number;
    priceTaxed?: number;
    tax: number;
}
