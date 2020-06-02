import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ChecklistoutercheckonePage } from "./checklistoutercheckone.page";

describe("ChecklistoutercheckonePage", () => {
  let component: ChecklistoutercheckonePage;
  let fixture: ComponentFixture<ChecklistoutercheckonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistoutercheckonePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistoutercheckonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
