import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecklistfixaPage } from './checklistfixa.page';

describe('ChecklistfixaPage', () => {
  let component: ChecklistfixaPage;
  let fixture: ComponentFixture<ChecklistfixaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistfixaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistfixaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
