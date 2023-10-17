import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent {
  customerForm: FormGroup;



constructor(private fb: FormBuilder) {
  this.customerForm = this.fb.group({
    customerName: [''],
    city: [''],
    coworkers: [''],
    mobileNumber: [''],
    faxNumber: [''],
    address: [''],
  });
}

onSubmit() {
  // Handle form submission here
  // You can access the form values using this.customerForm.value
}
}







