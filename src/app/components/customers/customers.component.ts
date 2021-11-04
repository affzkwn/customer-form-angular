import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/customer';



@Component({
  selector: 'app-customers',
  templateUrl:'./customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers !: Customer[];

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
   this.customerService.getCustomers().subscribe((customers) => this.customers = customers);
  }

  onDeleteForm (customer: Customer) {
    this.customerService.onDelete(customer).subscribe(() => (this.customers = this.customers.filter(t => t.id !== customer.id)));
  }

  addCust( customer : Customer ) {
    this.customerService.addCust(customer).subscribe((customer) => (this.customers.push(customer)));
  }

}
