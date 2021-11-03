import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @Output() onAddCust: EventEmitter<Customer> = new EventEmitter();
  @Output() onDeleteForm: EventEmitter<Customer> = new EventEmitter();

  firstName!: string;
  lastName!: string;
  email!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(customer: Customer){
    this.onDeleteForm.emit(customer);
  }

  onSubmit() {
    if(!this.firstName){
      alert('Please Add Your First Name!');
      return;
    }

    const newCust = {
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email
    }

    this.onAddCust.emit(newCust);

    this.firstName='';
    this.lastName='';
    this.email='';
  }

}
