import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header:'Alert',
      subHeader:'Default alert',
      message:'This is an alert Message',
      buttons:  ['OK']
    });
    await alert.present();
  }

  async presentAlertMulti(){
    const alert = await this.alertController.create({
      header:'Alert Multi',
      subHeader:'Alert multi button',
      message:'This is an Multi button alert',
      buttons:['OK','Cancel']
    });
    await alert.present();
  }

  async presentAlertConfirm(){
    const alert = await this.alertController.create({
      header:'Alert Confirm',
      subHeader:'Alert Confirmations',
      message:'This is an confirmations alert',
      buttons:[{
        text:'OK',
        handler:()=>{
          console.log('Confirming ok');
        } 
      },{
        text:'Cancel',
        role:'cancel',
        cssClass:'secondary',
        handler:()=>{
          console.log('Confirming cancel');
        }
      }]
    });
    await alert.present();
  }

  async presentAlertPrompt(){
    const alert = await this.alertController.create({
      header:'Prompt',
      inputs:[{
        name:'name',
        type:'text',
        placeholder:"Name"
      },{
        name:'date1',
        type:'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },{
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      }],
      buttons:[{
        text:'OK',
        handler:()=>{
          console.log('Propmt ok');
        }
      },{
        text:'Cancel',
        role:'cancel',
        cssClass:'secondary',
        handler:()=>{
          console.log('Propmt cancel');
        }
      }]
    });
    await alert.present();
  }

  async presentAlertRadio(){
    const alert = await this.alertController.create({
      header:'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertCheckbox(){
    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
