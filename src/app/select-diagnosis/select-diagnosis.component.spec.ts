import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SelectDiagnosisComponent } from './select-diagnosis.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

describe('SelectDiagnosisComponent', () => {
  let component: SelectDiagnosisComponent;
  let fixture: ComponentFixture<SelectDiagnosisComponent>;

  const mockData = [
    { description: 'Anemia', code: 'D50' },
    { description: 'Diabetes', code: 'E11' },
    { description: 'Hypertension', code: 'I10' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDiagnosisComponent, FormsModule, CommonModule, MatIconModule, MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDiagnosisComponent);
    component = fixture.componentInstance;

    // ✅ Assign mock data to input before initialization
    component.limitedCoverage = mockData;
    component.ngOnInit(); // Call manually because @Input() is set dynamically
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with limitedCoverage data', () => {
    expect(component.filteredData).toEqual(mockData);
  });

  it('should filter diagnosis based on searchTerm', () => {
    component.searchTerm = 'Anemia';
    component.filteredCoverage();
    expect(component.filteredData.length).toBe(1);
    expect(component.filteredData[0].description).toBe('Anemia');
  });

  it('should toggle sorting for ICD-10 code', () => {
    component.toggleSortCode();
    expect(component.codeIsAscending).toBeTrue();
    expect(component.filteredData[0].code).toBe('D50');

    component.toggleSortCode();
    expect(component.codeIsAscending).toBeFalse();
    expect(component.filteredData[0].code).toBe('I10');
  });

  it('should toggle sorting for description', () => {
    component.toggleSortDesc();
    expect(component.descIsAscending).toBeTrue();
    expect(component.filteredData[0].description).toBe('Anemia');

    component.toggleSortDesc();
    expect(component.descIsAscending).toBeFalse();
    expect(component.filteredData[0].description).toBe('Hypertension');
  });

  it('should select a diagnosis row', () => {
    component.selectDiagnosis(mockData[1]);
    expect(component.selectedDiagnosis).toEqual(mockData[1]);
  });

  it('should copy selected diagnosis code to clipboard', async () => {
    spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
    component.selectedDiagnosis = { description: 'Hypertension', code: 'I10' };
    await component.copyDiagnosisCode();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('I10');
  });

  it('should show alert if no diagnosis is selected for copy', () => {
    spyOn(window, 'alert');
    component.copyDiagnosisCode();
    expect(window.alert).toHaveBeenCalledWith('Please select a diagnosis first!');
  });
});
