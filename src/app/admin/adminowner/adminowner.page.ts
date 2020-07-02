import { Component } from "@angular/core";
import { AddressService } from "src/app/services/address.service";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";

@Injectable()
export class ProductProvider {
  url: string;
  constructor(public http: HttpClient) {
    console.log("Hello ProductProvider Provider");
    this.url = "http://juso.go.kr";
  }
  getProductList() {
    return this.http.get(this.url);
  }
}

@Component({
  selector: "app-adminowner",
  templateUrl: "./adminowner.page.html",
  styleUrls: ["./adminowner.page.scss"],
})
export class AdminownerPage {
  Object = Object;
  loading: any;
  retList = [];
  page: number = 1;
  addrText: any;

  constructor(public service: AddressService) {}

  private newMethod() {
    return this.retList;
  }

  async adminowner(searchText: string) {
    await this.service.addsearch(searchText, this.page, 10).then((res: any) => {
      console.log(res);

      this.retList = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < res.results.juso.length; i++) {
        console.log(res.results.juso[i]);
        this.retList.push(res.results.juso[i]);
      }

      for (let j = 0; j < res.results.common.length; j++) {
        console.log(res.results.common[j]);
        this.retList.push(res.results.common[j]);
      }
    });
  }
}
