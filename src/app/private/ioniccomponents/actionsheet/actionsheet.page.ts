import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(public actionsheetcontroller: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet(){
    const actionSheet = await this.actionsheetcontroller.create({
      header:'Albums',
      buttons:[{
        text:'Delete',
        role:'destructive',
        icon:'trash',
        handler: () =>{
          console.log('Delete Clicked');
        }
      },{
        text:'Share',
        icon:'share',
        handler: () =>{
          console.log('Share Clicked');
        }
      },{
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
