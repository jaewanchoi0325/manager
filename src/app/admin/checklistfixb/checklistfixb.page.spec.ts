import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecklistfixbPage } from './checklistfixb.page';

describe('ChecklistfixbPage', () => {
  let component: ChecklistfixbPage;
  let fixture: ComponentFixture<ChecklistfixbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistfixbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistfixbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
