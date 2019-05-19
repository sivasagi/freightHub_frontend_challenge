import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class SnackbarService {

  snackbarConfig: MatSnackBarConfig = {};
  constructor(
    private snackbar: MatSnackBar
  ) { }

  snackbarService(message, snackbarPos?, action = 'OK') {
    if (snackbarPos) {
      this.snackbarConfig.verticalPosition = snackbarPos;
    }
    this.snackbar.open(message, action, this.snackbarConfig);
  }
}
