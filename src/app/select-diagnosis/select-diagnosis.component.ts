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

  @Input() limitedCoverage: any; // Input data from parent component
  @Input() policyUrl: any;
  searchTerm: string = ''; // Search term for filtering
  filteredData: any; // Filtered data to display in the table
  descIsAscending = false; // Sorting order for description
  codeIsAscending = false; // Sorting order for ICD-10 code
  selectedDiagnosis: any = null;

  ngOnInit() {
    console.log(this.limitedCoverage);
    console.log(this.policyUrl)
    this.filteredData = this.limitedCoverage; // Initialize filteredData with the full dataset
  }

  // Filter the data based on the search term
  filteredCoverage() {
    console.log("called");
    let filteredData = this.limitedCoverage;
    if (this.searchTerm) {
      filteredData = this.limitedCoverage.filter((test: { description: string; code: string; }) =>
        test.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        test.code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.filteredData = filteredData; // Update filteredData
  }

  // Toggle sorting for ICD-10 code
  toggleSortCode() {
    this.codeIsAscending = !this.codeIsAscending; // Toggle sorting order
    this.filteredData.sort((a: any, b: any) => {
      if (this.codeIsAscending) {
        return a.code.localeCompare(b.code); // Ascending order
      } else {
        return b.code.localeCompare(a.code); // Descending order
      }
    });
  }

  // Toggle sorting for description
  toggleSortDesc() {
    this.descIsAscending = !this.descIsAscending; // Toggle sorting order
    this.filteredData.sort((a: any, b: any) => {
      if (this.descIsAscending) {
        return a.description.localeCompare(b.description); // Ascending order
      } else {
        return b.description.localeCompare(a.description); // Descending order
      }
    });
  }

  // Select row and highlight
  selectDiagnosis(test: any) {
    this.selectedDiagnosis = test; // Store selected diagnosis
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