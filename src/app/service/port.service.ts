import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, share } from "rxjs/operators";
import { Country, Port } from "src/app/types/index";

@Injectable({
  providedIn: "root",
})
export class PortService {
  private countries: Country[] = [
    new Country({
      id: 0,
      name: "서울특별시",
      flag: "seoul",
      ports: [
        new Port({ id: 1, name: "강남구" }),
        new Port({ id: 2, name: "강동구" }),
        new Port({ id: 3, name: "강북구" }),
        new Port({ id: 4, name: "강서구" }),
        new Port({ id: 5, name: "관악구" }),
        new Port({ id: 6, name: "광진구" }),
        new Port({ id: 7, name: "구로구" }),
        new Port({ id: 8, name: "금천구" }),
        new Port({ id: 9, name: "노원구" }),
        new Port({ id: 10, name: "도봉구" }),
        new Port({ id: 11, name: "동대문구" }),
        new Port({ id: 12, name: "동작구" }),
        new Port({ id: 13, name: "마포구" }),
        new Port({ id: 14, name: "서대문구" }),
        new Port({ id: 15, name: "서초구" }),
        new Port({ id: 16, name: "성동구" }),
        new Port({ id: 17, name: "성북구" }),
        new Port({ id: 18, name: "송파구" }),
        new Port({ id: 19, name: "양천구" }),
        new Port({ id: 20, name: "영등포구" }),
        new Port({ id: 21, name: "용산구" }),
        new Port({ id: 22, name: "은평구" }),
        new Port({ id: 23, name: "종로구" }),
        new Port({ id: 24, name: "중구" }),
        new Port({ id: 25, name: "중랑구" }),
      ],
    }),
    new Country({
      id: 26,
      name: "경기도",
      flag: "gyeonggido",
      ports: [
        new Port({ id: 27, name: "가평군" }),
        new Port({ id: 28, name: "양평군" }),
        new Port({ id: 29, name: "연천군" }),
        new Port({ id: 30, name: "고양시 덕양구" }),
        new Port({ id: 31, name: "고양시 일산동구" }),
        new Port({ id: 32, name: "고양시 일산서구" }),
        new Port({ id: 33, name: "과천시" }),
        new Port({ id: 34, name: "광명시" }),
        new Port({ id: 35, name: "광주시" }),
        new Port({ id: 36, name: "구리시" }),
        new Port({ id: 37, name: "군포시" }),
        new Port({ id: 38, name: "김포시" }),
        new Port({ id: 39, name: "남양주시" }),
        new Port({ id: 40, name: "동두천시" }),
        new Port({ id: 41, name: "부천시" }),
        new Port({ id: 42, name: "성남시 분당구" }),
        new Port({ id: 43, name: "성남시 수정구" }),
        new Port({ id: 44, name: "성남시 중원구" }),
        new Port({ id: 45, name: "수원시 권선구" }),
        new Port({ id: 46, name: "수원시 영통구" }),
        new Port({ id: 47, name: "수원시 장안구" }),
        new Port({ id: 48, name: "수원시 팔달구" }),
        new Port({ id: 49, name: "시흥시" }),
        new Port({ id: 50, name: "안산시 상록구" }),
        new Port({ id: 51, name: "안산시 단원구" }),
        new Port({ id: 52, name: "안성시" }),
        new Port({ id: 53, name: "안양시 동안구" }),
        new Port({ id: 54, name: "안양시 만안구" }),
        new Port({ id: 55, name: "양주시" }),
        new Port({ id: 56, name: "여주시" }),
        new Port({ id: 57, name: "오산시" }),
        new Port({ id: 58, name: "용인시 기흥구" }),
        new Port({ id: 59, name: "용인시 수지구" }),
        new Port({ id: 60, name: "용인시 처인구" }),
        new Port({ id: 61, name: "의왕시" }),
        new Port({ id: 62, name: "의정부시" }),
        new Port({ id: 63, name: "이천시" }),
        new Port({ id: 64, name: "파주시" }),
        new Port({ id: 65, name: "평택시" }),
        new Port({ id: 66, name: "포천시" }),
        new Port({ id: 67, name: "하남시" }),
        new Port({ id: 68, name: "화성시" }),
      ],
    }),
    new Country({
      id: 69,
      name: "인천광역시",
      flag: "incheon",
      ports: [
        new Port({ id: 70, name: "강화군" }),
        new Port({ id: 71, name: "옹진군" }),
        new Port({ id: 72, name: "계양구" }),
        new Port({ id: 73, name: "남동구" }),
        new Port({ id: 74, name: "동구" }),
        new Port({ id: 75, name: "미추홀구" }),
        new Port({ id: 76, name: "부평구" }),
        new Port({ id: 77, name: "서구" }),
        new Port({ id: 78, name: "연수구" }),
        new Port({ id: 79, name: "중구" }),
      ],
    }),
    // new Country({
    //   id: 80,
    //   name: "대전광역시",
    //   flag: "daejeon",
    //   ports: [
    //     new Port({ id: 81, name: "대덕구" }),
    //     new Port({ id: 82, name: "동구" }),
    //     new Port({ id: 83, name: "서구" }),
    //     new Port({ id: 84, name: "유성구" }),
    //     new Port({ id: 85, name: "중구" }),
    //   ],
    // }),
  ];
  private portsObservable: Observable<Port[]>;
  getCountries(page?: number, size?: number): Country[] {
    let countries = [];

    if (page && size) {
      countries = this.countries.slice(
        (page - 1) * size,
        (page - 1) * size + size
      );
    } else {
      countries = this.countries;
    }

    return countries;
  }

  getPorts(page?: number, size?: number): Port[] {
    let ports = [];

    this.countries.forEach((country) => {
      country.ports.forEach((port) => {
        port.country = country;
        ports.push(port);
      });
    });

    if (page && size) {
      ports = ports.slice((page - 1) * size, (page - 1) * size + size);
    }

    return ports;
  }

  getPortsAsync(
    page?: number,
    size?: number,
    timeout = 1000
  ): Observable<Port[]> {
    if (this.portsObservable) {
      return this.portsObservable;
    }

    this.portsObservable = new Observable<Port[]>((observer) => {
      observer.next(this.getPorts(page, size));
      observer.complete();
    }).pipe(delay(timeout), share());

    this.portsObservable.subscribe(() => {
      // Remove completed observable.
      this.portsObservable = null;
    });

    return this.portsObservable;
  }

  filterPorts(ports: Port[], text: string): Port[] {
    return ports.filter((port) => {
      return (
        port.name.toLowerCase().indexOf(text) !== -1 ||
        port.country.name.toLowerCase().indexOf(text) !== -1
      );
    });
  }

  getNewPortId(): number {
    return (
      this.getPorts()
        .map((port) => port.id)
        .sort((portId1, portId2) => {
          return portId1 > portId2 ? -1 : 1;
        })[0] + 1
    );
  }

  addPort(port: Port) {
    port.id = this.getNewPortId();
    this.countries
      .find((country) => {
        return country.id === port.country.id;
      })
      .ports.push(port);
  }

  addPortAsync(port: Port, timeout = 1000): Observable<any> {
    const self = this;

    return new Observable<any>((observer) => {
      self.addPort(port);
      observer.next();
      observer.complete();
    }).pipe(delay(timeout));
  }

  deletePort(port: Port) {
    const country = this.countries.find((_country) => {
      return _country.id === port.country.id;
    });

    if (country && country.ports) {
      country.ports = country.ports.filter((_port) => {
        return _port.id !== port.id;
      });
    }
  }

  deletePortAsync(port: Port, timeout = 1000): Observable<any> {
    const self = this;

    return new Observable<any>((observer) => {
      self.deletePort(port);
      observer.next();
      observer.complete();
    }).pipe(delay(timeout));
  }

  isInteger(value: any): boolean {
    return value === parseInt(value, 10);
  }

  formatNumber(value: number, length: number): string {
    let formattedNumber = "";

    for (let i = 0; i < length; i++) {
      formattedNumber += "0";
    }

    return (formattedNumber + value).slice(-length);
  }

  formatTimeZone(offset: number): string {
    if (offset === 0) {
      return "Z";
    }

    if (!this.isInteger(offset)) {
      return "";
    }

    // Time zones vary from -12:00 to 14:00.
    if (offset < -720 || offset > 840) {
      return "";
    }

    let sign = "+";

    if (offset < 0) {
      offset *= -1;
      sign = "-";
    }

    const minutes = offset % 60,
      hours = (offset - minutes) / 60;

    return (
      sign + this.formatNumber(hours, 2) + ":" + this.formatNumber(minutes, 2)
    );
  }
  constructor() {}
}
