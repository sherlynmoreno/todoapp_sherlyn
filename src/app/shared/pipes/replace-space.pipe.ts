import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace' //TODO Este es el nombre de tu pipe
})
export class ReplaceSpacePipe implements PipeTransform {

  //TODO Nickname: (Hola soy sherlyn) ==> hola-soy-sherlyn
  transform(value: string, args:string): string {
    console.log({value})
    value = value.split(' ').join(args).toLocaleLowerCase()
    return value; //TODO: <===
  }

}
