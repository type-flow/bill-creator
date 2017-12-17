export interface IBill {
  id: number;
  no?: string;
  date: string;
  // to: IBillCustomer;
  articles: Array<IBillArticles>;
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
  mail: string | Mail;
  web: string;
  uid: string;
  iban: string;
  bic: string
}

interface Mail {
  name: string;
  domain: string
}



export interface IBillArticles {
    description: string;
    amount: number;
    amountType: string;
    singleprice: number;
    price: number;
    priceTaxed: number;
    tax: number;
}
