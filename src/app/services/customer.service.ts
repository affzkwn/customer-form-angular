import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "application/json"
  }),
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:5000/customer'

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  onDelete(customer : Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http.delete<Customer>(url);
  }

  addCust(customer : Customer) {
    return this.http.post<Customer>(this.apiUrl, customer, httpOptions);
  }
}
