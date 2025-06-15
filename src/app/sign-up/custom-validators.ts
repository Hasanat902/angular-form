import { AbstractControl, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

export class customValidator {
  static noWhiteSpace(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    const isWhiteSpace = value.indexOf(' ') >= 0;
    return isWhiteSpace ? { whiteSpace: true } : null;
  }

  static userExistAsync(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const userNames = ['rashed', 'r@shed', 'rash3d'];

    const value = control.value as string;
    const isExist = userNames.includes(value);
    return isExist
      ? of({ userExist: true }).pipe(delay(500))
      : of(null).pipe(delay(500));
  }
}
