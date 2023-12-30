import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './../../pipes/searchPipe/search.pipe';
@Component({
  selector: 'app-child-component',
  imports: [FormsModule, CommonModule, SearchPipe],
  standalone: true,
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  public isEditForm: boolean = false;
  changeFirstName: string = '';
  changeLastName: string = '';
  changePhone: string = '';
  public emptyIndex!: number;
  @Input() fromParentObject: { firstName: string, lastName: string, phoneNumber: string }[] = [];
  @Input() parentField!: string;

  deletePhone(i: number): void {
    this.fromParentObject.splice(i, 1);
    console.log(this.parentField)
  }
  editInfo(index: number): void {
    this.isEditForm = true;
    this.emptyIndex = index;
    this.changeFirstName = this.fromParentObject[this.emptyIndex].firstName;
    this.changeLastName = this.fromParentObject[this.emptyIndex].lastName;
    this.changePhone = this.fromParentObject[this.emptyIndex].phoneNumber;
  }
  disOpenForm(): void {
    this.isEditForm = false;
  }
  saveChanges(): void {
    this.fromParentObject[this.emptyIndex].firstName = this.changeFirstName;
    this.fromParentObject[this.emptyIndex].lastName = this.changeLastName;
    this.fromParentObject[this.emptyIndex].phoneNumber = this.changePhone;
    this.changeFirstName = '';
    this.changeLastName = '';
    this.changePhone = '';
    this.isEditForm = false;


  }
}
