import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  constructor() { }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      //TODO: obteniendo el valor
      return of(control.value).pipe(
        delay(500),
        map((email) => {
          const emails = ['test@test.com', 'hola@gmail.com'];
          return emails.includes(email);  //TODO: PUEDE RETORNAR UN TRUE | FALSE
        })
      ).pipe(
        map((exists) => (exists ? { emailExists: true } : null)),
        
      );
    };
  }
} 
