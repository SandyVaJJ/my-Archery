import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundSearchComponent } from './round-search.component';

describe('RoundSearchComponent', () => {
  let component: RoundSearchComponent;
  let fixture: ComponentFixture<RoundSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
