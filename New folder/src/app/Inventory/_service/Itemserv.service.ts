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
  GetAllItems() {
    return this.http.get<Item[]>(this.urlcon + "/AllItems", this.header).pipe();
  }
  PostItem(Item: Item) {
    return this.http.post<DepartmentClass>(this.urlcon + "/addItem", Item, this.header).pipe();
  }
  UpdateItem(Item: Item) {
    return this.http.put<Item>(this.urlcon + "/updateItem", Item, this.header).pipe();
  }
  DeleteItem(id: number) {
    return this.http.delete<Item>(this.urlcon + "/deleteItem/" + id, this.header).pipe();
  }

  GetOne(id:number){
    return this.http.get<Item>(this.urlcon+"/getOne/"  +id ,this.header).pipe();
  }

  getCategories(){
    return this.http.get<category[]>(this.urlcon+"/getAllCategories")
  }
}
