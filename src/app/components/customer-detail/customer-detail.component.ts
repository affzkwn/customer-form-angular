import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer !: Customer;
  faTimes = faTimes;
  @Output() onDeleteForm: EventEmitter<Customer> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onDelete(customer: Customer){

    this.onDeleteForm.emit(customer);
    console.log("Data Deleted");

  }

}
