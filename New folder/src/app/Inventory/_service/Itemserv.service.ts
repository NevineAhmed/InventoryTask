import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import DepartmentClass from '../_Model/Item';
import Item from '../_Model/Item';
import category from '../_Model/category';

@Injectable({
  providedIn: 'root'
})
export class ItemservService {


  constructor(public http: HttpClient) { }
  urlcon: string = "http://localhost:50565/";
  header = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }
  header2 = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem("token")
    })
  }

  /*************************************************************** */
  GetAllDepartments() {
    return this.http.get<Item[]>(this.urlcon + "Item/AllItems", this.header).pipe();
  }
  PostDepartment(Item: Item) {
    return this.http.post<DepartmentClass>(this.urlcon + "Item/addItem", Item, this.header).pipe();
  }
  UpdateDepartment(Item: Item) {
    return this.http.put<Item>(this.urlcon + "Item/updateItem", Item, this.header).pipe();
  }
  DeleteItem(id: number) {
    return this.http.delete<Item>(this.urlcon + "Item/deleteItem/" + id, this.header).pipe();
  }

  GetOne(id:number){
    return this.http.get<Item>(this.urlcon+"Item/getOne"  +id ,this.header).pipe();
  }

  getCategories(){
    return this.http.get<category[]>(this.urlcon+"Item/getAllCategories")
  }
}
