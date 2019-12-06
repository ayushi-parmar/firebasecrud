import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmplistComponent } from '../emplist/emplist.component';
import { employee } from '../models/employee.model';


import { EmpserviceService } from '../services/empservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  public submitted=false;
  

constructor(private formBuilder: FormBuilder,private router: Router, private apiService:EmpserviceService,) { }
  ngOnInit() :void {      
}


get f() { return this.apiService.updateForm.controls; }

onSubmit() {
  
  this.submitted = true;

  // // stop here if form is invalid
  if (this.apiService.updateForm.invalid) {
      return;
  }

  else{   
      this.apiService.updateEmp(this.apiService.updateForm.value);        
  }
  this.gotolist();

}

gotolist() {
  this.router.navigate(['/emplist']);
}

}


 