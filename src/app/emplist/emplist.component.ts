import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../services/empservice.service';
import { employee } from '../models/employee.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

   public employees :Array<employee>
   

  constructor(private apiService:EmpserviceService,private router: Router) { 
    this.employees=[]
  }

  ngOnInit() {
    
    console.log("hello");
    this.apiService.GetEmpList().subscribe(
      list => {
        this.employees =list.map(item =>{
          return{
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
  

  deleteEmployee($key){
    // console.log(i)
    if(confirm("Are you sure to delete this record?")){
    this.apiService.DeleteEmp($key)
  }
}

  employeeDetails(employee){
  
    this.apiService.editEmp(employee)
    
  this.router.navigate(['/update'])
  

  }
}
