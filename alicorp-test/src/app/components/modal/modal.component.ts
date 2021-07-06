import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
  })
  export class ModalComponent {
  
    constructor(
      public dialogRef: MatDialogRef<ModalComponent>) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }