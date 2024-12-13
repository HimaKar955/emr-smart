import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss'], // Fixed typo in property name
})
export class ForbiddenComponent {}
  
