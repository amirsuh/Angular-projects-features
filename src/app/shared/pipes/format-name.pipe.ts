import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'FormatName'
})
export class FormatNamePipe implements PipeTransform{
  transform(value: any, ...args: any[]){
   if(value){
    return value.title + ' ' + value.first + ' ' + value.last

   }else{
    return 'NA'
   }
  }
}
