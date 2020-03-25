import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ControlremovalPage } from "./controlremoval.page";

describe("ControlremovalPage", () => {
  let component: ControlremovalPage;
  let fixture: ComponentFixture<ControlremovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlremovalPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlremovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
