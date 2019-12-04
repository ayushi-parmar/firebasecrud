import { Injectable, ɵConsole } from '@angular/core';
import { employee } from '../models/employee.model';
// import { AddComponent } from '../add/add.component';


import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireDatabaseModule } from '@angular/fire/database';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmpserviceService {

  empRef: AngularFireDatabase;
 
  constructor(private db: AngularFireDatabase) {
    this.empRef = db
    
  }


  
  /* Create book */
  AddBook(emp:employee) {
   let primary =  this.empRef.createPushId()
    this.empRef.object("emps/"+primary).set({
      firstName: emp.firstName,
      lastName: emp.lastName,
      emailId : emp.emailId,
    })
    console.log()
  }
  
  // /* Get book */
  // GetBook(id: string) {
  //   this.bookRef = this.db.object('books-list/' + id);
  //   return this.bookRef;
  // }  

  /* Get book list */
  GetEmpList(){

    // this.db.database ("emps").snapshotChanges();


    // console.log(this.db.list('emps/'));
    
    
  }

  // // /* Update book */
  // // UpdateBook(id, book: Book) {
  // //   this.bookRef.update({
  // //     book_name: book.book_name,
  // //     isbn_10: book.isbn_10,
  // //     author_name: book.author_name,
  // //     publication_date: book.publication_date,
  // //     binding_type: book.binding_type,
  // //     in_stock: book.in_stock,
  // //     languages: book.languages
  // //   })
  // //   .catch(error => {
  // //     this.errorMgmt(error);
  // //   })
  // // }

  // // /* Delete book */
  // // DeleteBook(id: string) {
  // //   this.bookRef = this.db.object('books-list/' + id);
  // //   this.bookRef.remove()
  // //   .catch(error => {
  // //     this.errorMgmt(error);
  // //   })
  // // }

  // // // Error management
  // // private errorMgmt(error) {
  // //   console.log(error)
  // // }
}