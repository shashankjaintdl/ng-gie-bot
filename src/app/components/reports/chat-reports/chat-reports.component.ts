import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users';
import { CategoryService } from 'src/app/services/category.service';
import {FormGroup, FormControl} from '@angular/forms'
import { EventData } from 'src/app/models/EventData';

@Component({
  selector: 'app-chat-reports',
  templateUrl: './chat-reports.component.html',
  styleUrls: ['./chat-reports.component.css']
})
export class ChatReportsComponent implements OnInit {


  endDate: string;
  startDate:string;
  currentYearStart: any;
  currentYearEnd: any;
  currentMonthStart: any;
  currentMonthEnd: any;
  lastMonthStart: any;
  lastMonthEnd: any;
  todayStart: any;
  todayEnd: any;
  
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.role();
    this.startDate=new Date().getFullYear()+"-"+this.formatDate((new Date().getMonth()+1))+"-"+"11";
    this.endDate=new Date().getFullYear()+"-"+this.formatDate((new Date().getMonth()+1))+"-"+"12";
  }

  apply(){
    console.log("Hello"+this.startDate)
    this.getReport(this.startDate,this.endDate);

  }

  formatDate(n) {
    let addZeroToLoneFigure = (n) => n.toString().length === 1 ? '0' + n : n.toString();
    return addZeroToLoneFigure(n);
}

  getReport(startDate,endDate){
    this.categoryService.getChatReport(startDate,endDate).subscribe((response:EventData)=>{
    },(error)=>{
      console.log("Error")

    });
  }
  role(){

    this.categoryService.authorize("shashank.jain@axa-abs.co.in").subscribe((response:Users)=>{

    },(error)=>{})

  }
}
