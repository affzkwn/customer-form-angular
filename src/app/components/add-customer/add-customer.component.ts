import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @Input() customer !: Customer;
  @Output() onAddCust: EventEmitter<Customer> = new EventEmitter();
  @Output() onDeleteForm: EventEmitter<Customer> = new EventEmitter();

  firstName!: string;
  lastName!: string;
  email!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){

    const empField={
      firstName:'',
      lastName:'',
      email:''
    }

    console.log( empField );

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
    console.log({ newCust });


  }

}
