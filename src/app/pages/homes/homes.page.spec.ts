import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomesPage } from './homes.page';

describe('HomesPage', () => {
  let component: HomesPage;
  let fixture: ComponentFixture<HomesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
