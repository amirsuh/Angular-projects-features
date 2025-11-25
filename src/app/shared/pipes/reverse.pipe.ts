import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string | any[]): string | any[] {
    if (!value) return value;
    return Array.isArray(value) ? value.reverse() : value.split('').reverse().join('');
  }
}
