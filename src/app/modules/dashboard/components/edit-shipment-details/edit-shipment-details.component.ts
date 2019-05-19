import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShipmentService } from 'src/app/modules/shared/services/shipment.service';
import { Subscriber } from 'rxjs';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';

@Component({
  selector: 'app-edit-shipment-details',
  templateUrl: './edit-shipment-details.component.html',
  styleUrls: ['./edit-shipment-details.component.scss']
})
export class EditShipmentDetailsComponent implements OnInit, OnDestroy {

  shipmentName: string;
  subs = new Subscriber();
  constructor(
    private dialogRef: MatDialogRef<EditShipmentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shipmentService: ShipmentService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
    if (this.data) {
      this.shipmentName = this.data.name;
    }
  }

  // Close dilog
  closeDialog() {
    this.dialogRef.close('');
  }

  // Update shipment name
  updateShipment() {
    this.data.name = this.shipmentName;
    this.subs.add(
      this.shipmentService.updateShipmentData(this.data.id, this.data).subscribe(
        (res) => {
          if (res) {
            this.dialogRef.close(res);
          }
        },
        (error) => {
          this.snackbar.snackbarService('There was a error while updating data, Please try again!');
          this.dialogRef.close('');
        }
      )
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
