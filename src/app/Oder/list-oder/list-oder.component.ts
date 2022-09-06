import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/Model/OrderModel';
import { OrderServiceService } from 'src/app/Service/order-service.service';

@Component({
  selector: 'app-list-oder',
  templateUrl: './list-oder.component.html',
  styleUrls: ['./list-oder.component.css']
})

export class ListOderComponent implements OnInit {

  orders: OrderModel[] = [];
  order: OrderModel = new OrderModel();

  constructor(private orderSer: OrderServiceService, private router: Router) { }

  ngOnInit(): void {
    this.orderSer.getOrder()
    .subscribe(data => {
      this.orders = data;
    })
  }

  update(order: OrderModel) {
    this.orderSer.updateOder(order)
    .subscribe(data => {
      order = data;
      alert("Xác nhận đơn hàng thành công");
    })
  }

  update2(order: OrderModel) {
    this.orderSer.updateOder2(order)
    .subscribe(data => {
      order = data;
      alert("Hủy đơn hàng thành công");
    })
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  fetchPosts(){
    this.ngOnInit();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
