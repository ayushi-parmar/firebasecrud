import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmplistComponent } from '../emplist/emplist.component';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  registerForm: FormGroup;
  public submitted=false;


  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
  });
}
get f() { return this.registerForm.controls; }

onSubmit() {
  
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  this.gotolist();
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

gotolist() {
  this.router.navigate(['/emplist']);
}

}
