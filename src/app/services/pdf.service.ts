import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { IBill } from '../interfaces/bill.interface';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';


@Injectable()
export class PdfService {

  constructor(private dataService: DataService) { }

}
