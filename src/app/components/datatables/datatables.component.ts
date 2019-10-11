import { Component, OnInit } from '@angular/core';
import {read, write, utils} from 'xlsx';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnInit {

  personas: any;
  
  constructor() { }

  ngOnInit() {
    const excel = document.getElementById('input-uploadExcel');

    this.personas = [
      {codigo: '1', nombre: 'Jose', apellido: 'Martinez'},
      {codigo: '2', nombre: 'Jose', apellido: 'Martinez'},
      {codigo: '3', nombre: 'Jose', apellido: 'Martinez'},
      {codigo: '4', nombre: 'Jose', apellido: 'Martinez'},
      {codigo: '5', nombre: 'Jose', apellido: 'Martinez'},
      {codigo: '6', nombre: 'Jose', apellido: 'Martinez'},
    ];
    
  }
  
  read(){
    const file = new FileReader();
  }

  excelUpload(files: any) {
    console.log('excelUpload: ', files);
    if (files && files.length > 0) {
      const file: File = files.item(0);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
          const res = reader.result as string; // This variable contains your file as text
          const lines = res.split('\n'); // Splits you file into lines
          const ids = [];
          lines.forEach((line) => {
              ids.push(line.split(',')[0]); // Get first item of line
          });
          console.log('Gaaaaa', ids);
      };
  }
  }

}
