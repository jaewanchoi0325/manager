import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenteropinionlistPage } from './renteropinionlist.page';

describe('RenteropinionlistPage', () => {
  let component: RenteropinionlistPage;
  let fixture: ComponentFixture<RenteropinionlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenteropinionlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenteropinionlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
