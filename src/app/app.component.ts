import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common'; // Import CommonModule
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ExternalLabsModalComponent } from './external-labs-modal/external-labs-modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmrService } from './emr-services/emr-service/emr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, MatDialogModule, RouterLink, RouterOutlet], // Include CommonModule in imports
  providers: [HttpClient, EmrService]
})
export class AppComponent {
  authToken = "" // Initialize authToken

  constructor(public dialog:MatDialog,
    private router: Router,
    @Inject(DOCUMENT) private document:Document) {
    
  }

  launchDialog(tokenDetails: any) {
    // Assuming you are using a service to manage modals
    const dialoRef = this.dialog.open(ExternalLabsModalComponent,{
      width:'auto',
      data:tokenDetails
    });

    dialoRef.afterClosed();
}
ngOnInit():void{
  const url=new URL(this.document.location.href);
  let hookInstance=url.searchParams.get('hookInstance');

  console.log(url)

  console.log(hookInstance)

  if(!hookInstance){
    this.router.navigate(['/forbidden'])
  }

  // if(!hookInstance){
  //   this.router.navigate([''],{queryParams:{hookInstance:'00000000-007b-9f33-e810-e841a57c502c'},queryParamsHandling:'merge'})
  //   hookInstance='00000000-007b-9f33-e810-e841a57c502c'
  // }
  hookInstance && this.launchDialog({hookInstance});
}
}


