import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBrowseComponent } from './sidebar-browse.component';

describe('SidebarBrowseComponent', () => {
  let component: SidebarBrowseComponent;
  let fixture: ComponentFixture<SidebarBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
