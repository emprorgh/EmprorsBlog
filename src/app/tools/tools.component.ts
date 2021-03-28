import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public testCaseData = [];
  testCaseForm :NgForm;
  planId : string;
  date : string ;
  public testCaseDataGridHeader = [
    { headerName: 'Test Case ID', field: 'TestCaseID', filter: true, resizable:true },
    { headerName: 'Test Case Title', field: 'TestCaseTitle' },
    { headerName: 'Automation Status', field: 'AutomationStatus', filter: true},
    { headerName: 'Automated Test Name', field: 'AutomatedTestName' },
    { headerName: 'Automated By', field: 'AutomatedBy' },
    { headerName: 'Authored By', field: 'AuthoredBy' },
    { headerName: 'Priority', field: 'Priority' },
    { headerName: 'Tags', field: 'tags' },
    { headerName: 'Test Result', field: 'TestResult' },
    { headerName: 'Test User', field: 'TestUser' },
    { headerName: 'Test Date', field: 'TestDate' },
  ];
  constructor(private toolsService : ToolsService) { }

  ngOnInit() {
    
    /* this.toolsService.getTestCaseData("68355", "12/12/2019")
      .subscribe(data => this.testCaseData = data); */
  }

  onSubmit() {
    
    this.toolsService.getTestCaseData(this.planId, this.date)
    .subscribe(data => this.testCaseData = data);
        
        
      }
    }


