import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponentComponent } from './child-component/child-component.component';
import { dataPhone } from '../datafForPhone';

@Component({
  selector: 'app-parent-component',
  standalone:true,
  imports:[CommonModule,FormsModule, ChildComponentComponent],
  templateUrl: './parent-component.component.html',  
  styleUrls: ['./parent-component.component.css']
})

export class ParentComponentComponent {
  public phoneData = dataPhone;
  public isOpen=false;
  public firstName2:string='';
  public lastName2:string='';
  public phoneNumber2:string='';
  public field:string='';
  dataObject:{firstName:string, lastName:string, phoneNumber:string}[]=[];
  addPhone():void{
    this.isOpen=true;
  
  }
  closeForm():void{
    this.isOpen=false;
  }
  saveInfo():void{
   if(this.firstName2!='' && this.lastName2!='' && this.phoneNumber2!=''){
    this.phoneData.push({firstName:this.firstName2,lastName:this.lastName2, phoneNumber:this.phoneNumber2 });
   }

   this.firstName2='';
   this.lastName2='';
   this.phoneNumber2='';
   this.isOpen=false;
  
  }
  openModal():void{
    this.isOpen=true;
  }
}
