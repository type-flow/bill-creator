import { Injectable } from '@angular/core';
import { IBill, IBillCompany } from '../interfaces/bill.interface'
import { IDocumentDefinition, IDDStyles, IDDInfo } from '../interfaces/document-definition.interface';

@Injectable()
export class DocumentDefinitionService {

  private docDef: IDocumentDefinition;
  private bill: IBill;
  private company: IBillCompany;

  constructor() {

    this.company = {
      sex: 'Herr',
      fname: 'Lukas',
      lname: 'Holzer',
      company: 'Typeflow e.U.',
      street: 'Sandgasse',
      number: '16/3',
      zip: 4020,
      town: 'Linz',
      phone: '+43 660/48 355 48',
      mail: {
        name: 'lukas.holzer',
        domain: 'typeflow.cc',
      },
      web: 'www.typeflow.cc',
      uid: 'string',
      iban: 'string',
      bic: 'string'
    }


    this.docDef = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [85.039, 127.559, 85.039, 150],
      info: this.getInfo(),
      compress: false,
      background: [],
      content: [],
      styles: this.getStyles(),
      defaultStyle: {
        fontSize: 11
      }
    };

  }

  private getBackground(): any[] {
    return [

    ]
  }

  private getSignature(): any {
    return {
      style: 'signatureTable',
      margin: [58.032, 610, 85.039, 0],
      table: {
        widths: [17.007, 102.047, '*', 25, '*'],
        body: [
          ['', {image:'typeflow-eu.png', width: 102.047}, '', '', ''],
          ['', {text: 'Lukas Holzer', style: 'bold'}, 'www.typeflow.cc', {text: 'IBAN:', style: 'smallIt'}, 'AT05 2032 0321 0040 6036'],
          ['', 'Sandgasse 16/3', {text: [{ text: 'luks.holzer', style: 'bold' }, '@typeflow.cc']}, {text: 'BIC:', style: 'smallIt'}, 'ASPKAT2LXXX'],
          ['', '4020 Linz', '+43 660/48 355 48', '', ''],
          [ {text: 'UID:', style: 'smallIt'},'ATU72152118', '', '', '']
        ]
      }, layout: 'noBorders'
    };
  }

  private getInfo(): IDDInfo {
    return {
      title: `Rechnung Nr. ${this.bill.no}`,
      author: 'Lukas Holzer',
      producer: 'Typeflow e.U.',
      subject: `Rechnung Nr. ${this.bill.no}`,
      keywords: `${this.bill.no}, Typeflow, Lukas HOLZER`,
    }
  }

  private getStyles(): IDDStyles {
    return {
      bold: { bold: true },
      italic: { italics: true },
      smallIt: { fontSize: 6, italics: true },
      textRight: { alignment: 'right', },
      fromSpace: { margin: [0, 11.338, 0, 11.338] },
      signatureTable: { fontSize: 8 }
    };
  }




}
