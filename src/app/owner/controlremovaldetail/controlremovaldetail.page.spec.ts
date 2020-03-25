import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ControlremovaldetailPage } from "./controlremovaldetail.page";

describe("ControlremovaldetailPage", () => {
  let component: ControlremovaldetailPage;
  let fixture: ComponentFixture<ControlremovaldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlremovaldetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlremovaldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
