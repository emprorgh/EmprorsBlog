import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RTAutomationUI';
 

  columnDefs = [
    {headerName : 'Product ID', field: 'Id', filter: true},
    {headerName : 'Application Name', field: 'Product1'},
    {headerName : 'Web address', field: 'Url'}
  ]

  rowData =[
        { Id: '11', Product1: 'SSMD', Url: 'www.singlesourceqat.com'},
        { Id: '20', Product1: 'SSDP', Url: 'www.google.com' },
        { Id: '23', Product1: 'Patents', Url: '##' }

  ];
}

