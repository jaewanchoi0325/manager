import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwneropinionPage } from './owneropinion.page';

describe('OwneropinionPage', () => {
  let component: OwneropinionPage;
  let fixture: ComponentFixture<OwneropinionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwneropinionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwneropinionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
