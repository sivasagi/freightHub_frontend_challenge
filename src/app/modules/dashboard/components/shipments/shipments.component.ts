import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { ShipmentService } from 'src/app/modules/shared/services/shipment.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(
    private shipmentService: ShipmentService,
    private router: Router,
    private snackbar: SnackbarService
  ) { }
  displayedColumns: string[] = ['id', 'name', 'mode', 'type', 'origin', 'destination', 'status'];
  dataSource = new MatTableDataSource();
  private paginator: MatPaginator;
  private sort: MatSort;
  length: number;
  pageSize = 20;
  pageSizeOptions: number[] = [20, 50, 100];
  loading = false;
  subs = new Subscriber();
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.loading = true;
    this.getShipmentsData();
  }

  // Load all shipments
  getShipmentsData() {
    this.subs.add(
      this.shipmentService.getAllShipments().subscribe(
        (data: any) => {
          if (data) {
            this.loading = false;
            this.dataSource = new MatTableDataSource(data);
            this.length = data.length;
          }
        },
        (error) => {
          this.snackbar.snackbarService('There was a error while fetching data, Please try again!');
          this.loading = false;
        }
      )
    );
  }

  // Filter shipments data
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.length = this.dataSource.filteredData.length;
  }

  // Navigate to shipment details page
  goToShipmentDetailsPage(row) {
    if (row) {
      this.router.navigate(['details', row.id]);
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}
