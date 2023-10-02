import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateServerModalComponent } from '../../shared/modals/create-server-modal/create-server-modal.component';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CreateServerModalComponent, { height: '60%', width: '23%' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
