export class employee{
    id: number;
    firstName: string;
    lastName: string;
    emailId: string;
    active: boolean;
   
constructor(firstName,lastName,emailId){
this.firstName =firstName
this.lastName = lastName
this.emailId = emailId

}
   
    getfirstName() {
      return this.firstName 
    }
     
  }