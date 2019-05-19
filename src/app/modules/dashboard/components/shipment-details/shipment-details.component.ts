import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentService } from 'src/app/modules/shared/services/shipment.service';
import { Location } from '@angular/common';
import { EditShipmentDetailsComponent } from '../edit-shipment-details/edit-shipment-details.component';
import { MatDialog } from '@angular/material';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent implements OnInit, OnDestroy {

  shipmentId: any;
  shipmentData: any;
  loading = false;
  subs = new Subscriber();
  constructor(
    private activatedRoute: ActivatedRoute,
    private shipmentService: ShipmentService,
    private location: Location,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.shipmentId = this.activatedRoute.snapshot.params.shipmentId;
    this.getShipmentDetails();
  }

  // Load shipment details
  getShipmentDetails() {
    this.subs.add(
      this.shipmentService.getShipmentData(this.shipmentId).subscribe(
        (data) => {
          if (data) {
            this.shipmentData = data;
            this.loading = false;
          }
        },
        (error) => {
          this.snackbar.snackbarService('There was a error while fetching data, Please try again!');
          this.loading = false;
        }
      )
    );
  }

  // Go back to previous page
  goToBackPage() {
    this.location.back();
  }

  // Edit shipment name
  editShipment(ev) {
    const dialogRef = this.dialog.open(EditShipmentDetailsComponent, {
      data: this.shipmentData
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.shipmentData.name = res.name;
      }
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
