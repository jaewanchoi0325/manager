import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Login3Page } from './login3.page';

describe('Login3Page', () => {
  let component: Login3Page;
  let fixture: ComponentFixture<Login3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Login3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
