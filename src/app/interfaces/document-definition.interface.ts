export interface IDocumentDefinition {
  pageSize: string;
  pageOrientation: string;
  pageMargins: number[];
  info: IDDInfo;
  compress: boolean;
  background: IDDBackground[];
  content: IDDContent[];
  styles: IDDStyles;
  defaultStyle: DefaultStyle;
}

export interface IDDInfo {
  title: string;
  author: string;
  producer: string;
  subject: string;
  keywords: string;
}

export interface IDDStyles {
  bold: Bold;
  italic: Italic;
  smallIt: SmallIt;
  textRight: TextRight;
  fromSpace: FromSpace;
  signatureTable: SignatureTable;
}

export interface IDDBackground {
  image: string;
  width: number;
  margin: number[];
  style: string;
  table: Table;
  layout: string;
}
export interface IDDContent {
  stack: any[];
  style: string;
  text: any;
  fontSize?: number;
  bold?: boolean;
  margin: number[];
  table: Table2;
  layout: string;
}


export interface DefaultStyle {
  fontSize: number;
}

export interface Table {
  widths: any[];
  body: any[][];
}

export interface Table2 {
  widths: string[];
  headerRows: number;
  body: any[][];
}

export interface Bold {
  bold: boolean;
}

export interface Italic {
  italics: boolean;
}

export interface SmallIt {
  fontSize: number;
  italics: boolean;
}

export interface TextRight {
  alignment: string;
}

export interface FromSpace {
  margin: number[];
}

export interface SignatureTable {
  fontSize: number;
}

export interface Styles {
}

