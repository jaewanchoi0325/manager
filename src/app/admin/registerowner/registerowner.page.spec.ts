import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RegisterownerPage } from "./registerowner.page";

describe("RegisterownerPage", () => {
  let component: RegisterownerPage;
  let fixture: ComponentFixture<RegisterownerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterownerPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterownerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
