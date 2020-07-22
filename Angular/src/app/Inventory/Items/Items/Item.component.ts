import { Component, OnInit } from '@angular/core';
import { ItemservService } from '../../_service/Itemserv.service';
import Item from '../../_Model/Item';
import category from '../../_Model/category';

@Component({
  selector: 'app-Item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.css']
})
export class ItemComponent implements OnInit {
/*********************************** */
allItems:Item[]=[];
oneItem:Item=new Item(0,null,0,0,"",0);
newItem:Item=new Item(0,null,0,0,"",0);
categories:category[]=[]
catnum:number
catnum1:number
config:any;
/********************************** */
  constructor(public serv:ItemservService) { 
    this.config = {
      itemsPerPage: 2,
      currentPage: 1
    }
  }

  ngOnInit(): void {
    this.oneItem=new Item(0,null,0,0,"",0)
    this.getall();
    this.getCategories();
  }
  /******************************************* */
  getall(){
    this.serv.GetAllItems().subscribe(a=>this.allItems = a)
  }

  changeEdit(value:number){
    console.log(value);
    this.catnum1=value;
    this.newItem.category =this.catnum1;
    }

  addItem(){
   
var check=this.allItems.filter(a=>a.item_name.toLowerCase()  ==  this.newItem.item_name.toLowerCase()  ).length; 

if(check != 0){
  alert("you cannot add this Item it is stored before");
}

else{
  this.serv.PostItem(this.newItem).subscribe(e=>{this.newItem=new Item (0,null,0,0,"",0);this.getall();})
}
  }
  showupdate(item:Item){
  this.serv.GetOne(item.id).subscribe(a=>{this.oneItem=a;console.log(a)});
  }
  updateItem(){
    
    this.serv.UpdateItem(this.oneItem).subscribe(e=>{this.oneItem=new Item(0,null,0,0,"",0);this.getall()})
  }


  deleteItem(item:Item){
    
    this.serv.DeleteItem(item.id).subscribe(e=>this.getall())
   
  }

  getCategories(){
    this.serv.getCategories().subscribe(a=>this.categories=a)
  }

  changeCateg(categoryId:number){
    console.log(categoryId);
    this.catnum=categoryId;
    
    }

  pageChanged(event){
    this.config.currentPage = event;
   }
}
  

  
