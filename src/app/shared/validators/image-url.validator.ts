import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function imageUrlValidator(): ValidatorFn {
  const imageUrlPattern = /\.(jpeg|jpg|gif|png)$/i;
  const urlPattern = /^(https?:\/\/)?([\w\d\.-]+)\.([a-z\.]{2,6})(\/[\w\d\.-]*)*\/?$/;

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value) {
      if (!urlPattern.test(value)) {
        return { invalidUrl: true };
      }

      if (!imageUrlPattern.test(value)) {
        return { invalidUrl: true };
      }
    }

    return null;
  };
}
