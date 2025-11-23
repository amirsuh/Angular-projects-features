import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPassowrdPipe',
})
export class FormatPasswordPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let message = '';
    switch (value) {
      case 'required':
        message = 'The field is required';
        break; // Exit the switch block
      case 'pattern':
        message = 'The Password should be patternised';
        break; // Exit the switch block
      case 'minlength':
        message = 'The Password should be minimum 8 char';
        break; // Exit the switch block
    }
    return message
  }
}
