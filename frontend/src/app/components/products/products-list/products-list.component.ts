import { Component } from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {


  displayedColumns: string[] = ['id', 'description', 'price', 'quantity'];
  dataSource = [];

  constructor(private apiService: ApiService) {
    this.loadItems()
  }



  ngOnInit() {

  }
  loadItems(): void {
    this.apiService.getAll('inventory-service/api/products').subscribe((data) => {
        this.dataSource=data["_embedded"]['products']
      console.log(data["_embedded"]['products'])
    });
  }

  deleteItem(id: number): void {
    this.apiService.delete('customer-service/api/customers', id).subscribe(() => {
      this.loadItems();
    });
  }
}
