import { Injectable, ɵConsole } from '@angular/core';
import { employee } from '../models/employee.model';
// import { AddComponent } from '../add/add.component';

import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';

import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireDatabaseModule } from '@angular/fire/database';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmpserviceService {


  constructor(private firebase: AngularFireDatabase
    ,private formBuilder: FormBuilder
    ){}


   empref:AngularFireList<any>;  

  
   updateForm = this.formBuilder.group({
    $key: [null],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailId: ['', [Validators.required, Validators.email]],
});


GetEmpList(){
     this.empref=this.firebase.list('emps');
     return this.empref.snapshotChanges();
   }

AddEmp(emp){
  this.empref.push({
          firstName: emp.firstName,
          lastName: emp.lastName,
          emailId : emp.emailId,
  })
}

DeleteEmp($key:string) {
  this.empref.remove($key)
  }

editEmp(emp){
  
    this.updateForm.reset(emp)
  }

updateEmp(emp) {
   this.empref.update(emp.$key,
      {
        firstName: emp.firstName,
          lastName: emp.lastName,
          emailId : emp.emailId,
      })
  }



// ///////////

// private dbpath='/emps';

//   empRef: AngularFireList<employee>=null;;

//   constructor(private db: AngularFireDatabase) {
//     this.empRef=db.list(this.dbpath);
//   }
//     AddBook(emp:employee) :void{
//       this.empRef.push(emp)
//       console.log(emp)
            
        
//     }

//     GetEmpList():AngularFireList<employee> {
      
//       return this.empRef;
//     }

//    ///////////



}