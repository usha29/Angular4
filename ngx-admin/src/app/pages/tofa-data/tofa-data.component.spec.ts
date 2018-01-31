import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TofaDataComponent } from './tofa-data.component';

describe('TofaDataComponent', () => {
  let component: TofaDataComponent;
  let fixture: ComponentFixture<TofaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TofaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TofaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
