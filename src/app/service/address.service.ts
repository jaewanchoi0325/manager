import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AddressService {
  url: string = "http://www.juso.go.kr";

  constructor(private client: HttpClient) {}

  async addrsearch(addr: string, curPage: number, countPerPage: number) {
    let keyword = "keyword=" + addr;
    let confmKey = "confmKey=" + "devU01TX0FVVEgyMDIwMDYyOTE4MTY0NjEwOTkxMjE=";
    let currentPage = "curPage=" + curPage;
    let cpp = "countPerPage=" + countPerPage;
    let type = "resultType=json";
    let path = "/addrlink/addrLinkApi.do?";
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
