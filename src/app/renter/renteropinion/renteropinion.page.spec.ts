import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenteropinionPage } from './renteropinion.page';

describe('RenteropinionPage', () => {
  let component: RenteropinionPage;
  let fixture: ComponentFixture<RenteropinionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenteropinionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenteropinionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
