import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ChecklistouterPage } from "./checklistouter.page";

describe("ChecklistouterPage", () => {
  let component: ChecklistouterPage;
  let fixture: ComponentFixture<ChecklistouterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistouterPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
