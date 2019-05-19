import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllShipments() {
    return this.httpClient.get('http://localhost:3000/shipments');
  }

  getShipmentData(id) {
    return this.httpClient.get(`http://localhost:3000/shipments/${id}`);
  }

  updateShipmentData(id, data) {
    return this.httpClient.put(`http://localhost:3000/shipments/${id}`, data);
  }
}
