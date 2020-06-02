import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ChecklistouterchecktwoPage } from "./checklistouterchecktwo.page";

describe("ChecklistouterchecktwoPage", () => {
  let component: ChecklistouterchecktwoPage;
  let fixture: ComponentFixture<ChecklistouterchecktwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistouterchecktwoPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistouterchecktwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
