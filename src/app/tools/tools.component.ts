import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  model: NgbDateStruct;
  public testCaseData = [];
  public testCaseDataGridHeader = [
    { headerName: 'Test Case ID', field: 'Test Case ID', filter: true, resizable:true },
    { headerName: 'Test Case Title', field: 'Test Case Title' },
    { headerName: 'Automation Status', field: 'Automation Status', filter: true},
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
    this.toolsService.getTestCaseData("68355", "01/01/2020")
      .subscribe(data => this.testCaseData = data);
  }

}
