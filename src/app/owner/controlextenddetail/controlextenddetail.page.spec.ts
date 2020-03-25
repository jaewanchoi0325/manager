import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ControlextenddetailPage } from "./controlextenddetail.page";

describe("ControlextenddetailPage", () => {
  let component: ControlextenddetailPage;
  let fixture: ComponentFixture<ControlextenddetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlextenddetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlextenddetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
