import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { TrashchecklistPage } from "./trashchecklist.page";

describe("TrashchecklistPage", () => {
  let component: TrashchecklistPage;
  let fixture: ComponentFixture<TrashchecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrashchecklistPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TrashchecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
