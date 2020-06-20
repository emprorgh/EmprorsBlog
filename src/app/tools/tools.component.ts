import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public testCaseData = [];
  public testCaseDataGridHeader = [
    { headerName: 'Test Case ID', field: 'Test Case ID', filter: true, resizable:true },
    { headerName: 'Test Case Title', field: 'Test Case Title' },
    { headerName: 'Automation Status', field: 'Automation Status'},
    { headerName: 'Automated Test Name', field: 'Automated Test Name' },
    { headerName: 'Automated By', field: 'Automated By' },
    { headerName: 'Authored By', field: 'Authored By' },
    { headerName: 'Priority', field: 'Priority' },
    { headerName: 'Tags', field: 'Tags' },
    { headerName: 'Test Result', field: 'Test Result' },
    { headerName: 'Test User', field: 'Test User' },
    { headerName: 'Test Date', field: 'Test Date' },
  ];
  constructor(private toolsService : ToolsService) { }

  ngOnInit() {
    this.toolsService.getTestCaseData()
      .subscribe(data => this.testCaseData = data);
  }

}
