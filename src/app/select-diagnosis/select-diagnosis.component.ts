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

  @Input() limitedCoverage:any;
  
  ngOnInit() {
    console.log(this.limitedCoverage)
  }

}
