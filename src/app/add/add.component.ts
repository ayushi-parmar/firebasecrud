import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmplistComponent } from '../emplist/emplist.component';
import { employee } from '../models/employee.model';


import { EmpserviceService } from '../services/empservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  registerForm: FormGroup;
  public submitted=false;
  public employee;
  public submit=true;


  constructor(private formBuilder: FormBuilder,private router: Router, private apiService:EmpserviceService) { }

  ngOnInit() :void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
  });
}
get f() { return this.registerForm.controls; }

onSubmit() {
  
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  else{   
    this.employee = new employee(this.registerForm.value.firstName,this.registerForm.value.lastName,this.registerForm.value.emailId)

    this.apiService.AddEmp(this.employee)
  

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  this.gotolist();
  }
}


onReset() {
  this.submitted = false;
  this.registerForm.reset();
  
}

gotolist() {
  this.router.navigate(['/emplist']);
}

}
