import { Component, OnInit } from '@angular/core';
import { ConstQuestions } from 'src/app/constQuestions';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogData } from 'src/app/interfaces/dialogData';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  //Buzzerfragen
  //Fehlersuche
  //NPS-Voiceline
  //Marvin
  //Trivia/Lore
  //Geoguesser

  //Von allen fragen 5 Fragen oder so Punkte: 100/200/300/400/500

  //ANFANGS WAR GEPLANT ALLE KATEGORIEN NACH FRAGETYP ZU TRENNEN. JETZT SIND DIE GEMISCHT, DESHALB ÜBERALL ANY GESETZT
  //DIE EINORDNUNG DER FRAGEN INS DEN RICHTIGEN BEREICH FUNKTIONIERT ALLES ÜBER DATA.KIND
  //GOTT SEI DANK HAB ICH DAS AM ANFANG SO GEBAUT HEH

  questions: any = ConstQuestions.questions;
  points: number[] = [100, 200, 300, 400, 500];
  concatQuestions: any[] = [];
  images: any[] = [];

  buttonColors: string[] = ["teal1", "teal2", "teal3",  "teal4", "teal5"]

  usedQuestionColors: string[][] = [];

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.setupBoard();
  }

  private setupBoard() {
    this.setupConcatQuestions();
  }

 

  private setupConcatQuestions() {
    this.concatQuestions = [
      this.questions.questions1,
      this.questions.questions2,
      this.questions.questions3,
      this.questions.questions4,
      this.questions.questions5
    ];

    this.images = ['filter_4','graphic_eq','error_outline','push_pin','help_outline']

    for (let i = 0; i < this.concatQuestions.length; i++) {
      const row = [];
      for (let j = 0; j < this.concatQuestions[i].length; j++) {
        row.push(this.buttonColors[j]);
        console.log(row)
      }
      this.usedQuestionColors.push(row);
    }

  }

  public onClickOpenDialog(item: any, i: number, j: number) {

    console.log(item);

    let dialogData: DialogData<DialogComponent> = {
      component: DialogComponent,
      data: {
        'Data': item
      },
    }

    let ref = this.dialogService.openDialog(dialogData);

    ref.afterClosed().subscribe(()=>{

      if(item.bonus === true){
        this.usedQuestionColors[i][j] = "bonus";
      }else{
        this.usedQuestionColors[i][j] = "";
      }
      
    })

  }
}
