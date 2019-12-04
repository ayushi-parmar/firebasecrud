import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../services/empservice.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  constructor(private apiService:EmpserviceService) { 
    
  }

  ngOnInit() {
    console.log("hello");
    this.apiService.GetEmpList();
  }

}
