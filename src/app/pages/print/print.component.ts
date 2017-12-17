import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  private totalCosts: number;
  private totalCostsBrutto: number;
  private totalTax: number;
  private bill: any = {
    id: 1,
    date: "07.12.2017",
    to: {
      sex: "Frau",
      fname: "Eva",
      lname: "Langmayr",
      company: "(Bits and Bobs by Eva)",
      street: "Obere Donaustraße",
      number: "15A/3/2/13",
      zip: 1020,
      town: "Wien"
    },
    articles: [{
      description: "Adventskalender 2017",
      amount: 3,
      amountType: "Std.",
      singleprice: 30.00,
      price: 0,
      priceTaxed: 0,
      tax: 20
    }]
  };

  constructor(private dataService: DataService) {
    this.calculateCosts();
    this.dataService.buildObject();
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;
    // var dd = {
    //   pageSize: 'A4',
    //   pageOrientation: 'portrait',
    //   pageMargins: [ 40, 60, 40, 60 ],
    //   content: 'your pdf data'
    // };
    // pdfMake.createPdf(dd).download();
  }

  ngOnInit() {
  }

  private calculateCosts(): void {
    this.totalCosts = 0;
    this.totalCostsBrutto = 0;
    this.totalTax = 0;

    this.bill.articles.forEach(article => {
      article.price = parseFloat((article.singleprice * article.amount).toFixed(2));
      article.priceTaxed = (article.price * (100 + article.tax)) / 100;
      this.totalCosts += article.price;
      this.totalTax += article.price * (article.tax / 100);
      this.totalCostsBrutto += article.priceTaxed;
    });
  }

}
