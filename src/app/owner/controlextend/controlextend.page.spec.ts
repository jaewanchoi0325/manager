import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ControlextendPage } from "./controlextend.page";

describe("ControlextendPage", () => {
  let component: ControlextendPage;
  let fixture: ComponentFixture<ControlextendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlextendPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlextendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
