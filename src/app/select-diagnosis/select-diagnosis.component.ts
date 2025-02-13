import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-select-diagnosis',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './select-diagnosis.component.html',
  styleUrl: './select-diagnosis.component.scss'
})
export class SelectDiagnosisComponent implements OnInit {

  @Input() limitedCoverage: any;
  @Input() policyUrl: any;
  searchTerm: string = '';
  filteredData: any;
  descIsAscending = false;
  codeIsAscending = false;
  selectedDiagnosis: any = null;

  ngOnInit() {
    this.filteredData = this.limitedCoverage;
  }

  // Filter the data based on the search term
  filteredCoverage() {
    let filteredData = this.limitedCoverage;
    if (this.searchTerm) {
      filteredData = this.limitedCoverage.filter((test: { description: string; code: string; }) =>
        test.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        test.code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.filteredData = filteredData;
  }

  // Toggle sorting for ICD-10 code
  toggleSortCode() {
    this.codeIsAscending = !this.codeIsAscending;
    this.filteredData.sort((a: any, b: any) => {
      if (this.codeIsAscending) {
        return a.code.localeCompare(b.code);
      } else {
        return b.code.localeCompare(a.code);
      }
    });
  }

  // Toggle sorting for description
  toggleSortDesc() {
    this.descIsAscending = !this.descIsAscending;
    this.filteredData.sort((a: any, b: any) => {
      if (this.descIsAscending) {
        return a.description.localeCompare(b.description);
      } else {
        return b.description.localeCompare(a.description);
      }
    });
  }

  // Select row and highlight
  selectDiagnosis(test: any) {
    this.selectedDiagnosis = test;
  }

  // Copy selected diagnosis code to clipboard
  copyDiagnosisCode() {
    if (this.selectedDiagnosis) {
      navigator.clipboard.writeText(this.selectedDiagnosis.code).then(() => {
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    } else {
      alert('Please select a diagnosis first!');
    }
  }
}