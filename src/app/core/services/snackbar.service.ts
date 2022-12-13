import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openErrorToaster(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: 'end',
      panelClass: ['red-snackbar', 'snackbar'],
      duration: 3000,
      data: message,
    });
  }
}
