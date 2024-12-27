import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent {

  displayedColumns: string[] = ['id', 'lastName', 'firstname', 'email'];
  dataSource = [];

  constructor(private apiService: ApiService) {
    this.loadItems()
  }




  loadItems(): void {
    this.apiService.getAll('customer-service/api/customers').subscribe((data) => {
      this.dataSource = data;
      console.log(data)
    });
  }

  deleteItem(id: number): void {
    this.apiService.delete('customer-service/api/customers', id).subscribe(() => {
      this.loadItems();
    });
  }
}
