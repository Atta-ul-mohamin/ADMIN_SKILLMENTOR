import { Component } from '@angular/core';
import { ParseService } from 'src/app/services/parse.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  totalMUser:string='';
        totalMUserT:string='';
        totalOrders:string='';
        totalPrice:string='';
        showEmployeeTable: boolean = false;
        employees: any[] = [];
        showTeacherTable: boolean = false;
        teacher: any[] = [];
        history:any[]=[];
        showHistoryTable: boolean=false;

  constructor( private router: Router , private service:ParseService) { }

  ngOnInit() {
  this.getDashBoardData();
  this.getMUserData();
  this.getMUserTData();
  this.currentOrders();
  this.createGig();
  this.cancelOrders();
  this.incompleteOrders();
  this.historyOrders();
  }

async historyOrders(){

}
  async incompleteOrders(){

  }
  async cancelOrders(){

  }

async createGig(){

}
  async getMUserData(){
 const result = await  this.service.MUserData();
 console.log(result);
 this.employees= result;  
  }

  async getMUserTData(){
    const result = await  this.service.MUserTData();
    console.log(result);
    this.teacher = result; 
  }
  async getHistoryData(){
    const result = await  this.service.HistoryData();
    console.log(result);
    this.history = result; 
  }

 async currentOrders(){

 }



  async getDashBoardData(){
  const result = await  this.service.getData();
  this.totalMUser=result.totalMUser;
  this.totalMUserT=result.totalMUserT;
  this.totalOrders=result.totalOrders;
  this.totalPrice=result.totalPrice;
  console.log(result,"result");
  }
  title = 'angular16';
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  data:any;

  logout(){
    this.router.navigate(['/home']);
  }

  showEmployees() {
    this.showEmployeeTable = true;
    this.showTeacherTable = false;
    this.showHistoryTable = false;
    this.getMUserData();
  }

  showTeacher() {
    this.showTeacherTable = true;
    this.showEmployeeTable = false;
    this.showHistoryTable = false;
    this.getMUserTData();
  }

  showHistory() {
    this.showHistoryTable = true;
    this.showEmployeeTable = false;
    this.showTeacherTable = false;
    this.getHistoryData();
  }
  
}