import { Pipe, PipeTransform } from '@angular/core';
import { dataPhone } from './../../datafForPhone';

@Pipe({
  name: 'search',
  standalone: true
})

export class SearchPipe implements PipeTransform {
  transform(value: dataPhone[], parentField: string): dataPhone[] {
    if (parentField === ''|| !value) {
      return value;
    }
    const normalizedParentField = parentField.toLowerCase();
    const result = value.filter(info =>
      info.firstName.toLowerCase().includes(normalizedParentField) ||
      info.lastName.toLowerCase().includes(normalizedParentField) ||
      info.phoneNumber.toLowerCase().includes(normalizedParentField)
    );
    return result;
  }
  
  
     
    
      
    
  }
  

