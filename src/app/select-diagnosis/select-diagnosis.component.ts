import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() additionalSupportiveDiagnosis: any;
  @Input() policyUrl: any;
  @Input() chemName: any;
  @Output() close = new EventEmitter<void>(); // Add this line

  searchTerm: string = '';
  filteredData: any;
  descIsAscending = false;
  codeIsAscending = false;
  selectedDiagnosis: any = null;
  selectedFilter = 'limited';

  ngOnInit() {
    this.filteredData = this.limitedCoverage;
  }

  // Filter the data based on the search term
  filteredCoverage() {
    let dataToFilter = this.limitedCoverage; // Default to limited coverage

    // Check if "All" is selected, then use additionalSupportiveDiagnosis
    if (this.selectedFilter === 'all' && this.additionalSupportiveDiagnosis) {
      dataToFilter = this.additionalSupportiveDiagnosis;
    }

    if (this.searchTerm) {
      this.filteredData = dataToFilter.filter((test: { description: string; code: string; }) =>
        test.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        test.code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredData = dataToFilter; // Reset to full list if no search term
    }
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
    }
  }

  // Emit the close event when the back button is clicked
  onBack() {
    this.close.emit(); // Emit the event
  }

  openPolicyPopup() {
    window.open(this.policyUrl, 'PolicyPopup', 'width=800,height=600,scrollbars=yes,resizable=yes');
  }
}