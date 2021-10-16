import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoGameComponent } from './novo-game.component';

describe('NovoGameComponent', () => {
  let component: NovoGameComponent;
  let fixture: ComponentFixture<NovoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
