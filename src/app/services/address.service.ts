import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AddressService {
  adminowner(searchText: string, page: number, arg2: number) {
    throw new Error("Method not implemented.");
  }
  url: string = "http://www.juso.go.kr";

  constructor(private client: HttpClient) {}

  async addsearch(addr: string, curPage: number, countPerPage: number) {
    let keyword = "keyword=" + addr;
    let confmKey = "confmKey=" + "U01TX0FVVEgyMDIwMDYyNTE2MzY0OTEwOTkwNDc=";
    let currentPage = "curPage=" + curPage;
    let cpp = "countPerPage=" + countPerPage;
    let type = "resultType=json";

    let path = "/addrlink/addrLinkapi.do?";
    let url =
      this.url +
      path +
      keyword +
      "&" +
      confmKey +
      "&" +
      currentPage +
      "&" +
      cpp +
      "&" +
      type;
    console.log("this.url", this.url);

    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=utf-8");

    return new Promise((resolve) => {
      this.client.get(url, { headers }).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
