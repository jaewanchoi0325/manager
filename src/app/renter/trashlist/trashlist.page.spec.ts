import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrashlistPage } from './trashlist.page';

describe('TrashlistPage', () => {
  let component: TrashlistPage;
  let fixture: ComponentFixture<TrashlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrashlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
