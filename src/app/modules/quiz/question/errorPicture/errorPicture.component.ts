import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ConstQuestions } from 'src/app/constQuestions';
import { ErrorQuestion } from 'src/app/interfaces/question';

@Component({
  selector: 'app-errorPicture',
  templateUrl: './errorPicture.component.html',
  styleUrls: ['./errorPicture.component.scss']
})
export class ErrorPictureComponent implements OnInit, OnChanges {

  @Input() data: ErrorQuestion = {
    question: '',
    errorPicture: '',
    kind: '',
    correctedPicture: '',
    imgurLink: '',
    bonus: false
  };

  showCorrected: boolean = false;
  hideAll: boolean = false;

  pictureSize: {width: string, height: string} =  ConstQuestions.pictureSize;
  errorPictureSize: {width: string, height: string} =  ConstQuestions.errorPictureSize;
  correctedPictureSize: {width: string, height: string} =  ConstQuestions.correctedPictureSize;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.data);
  }

  public switchToCorrected(){
    this.showCorrected = true;
    this.hideAll = false;
  }

  public hideAllButWhiteboard(){
    this.hideAll = true;
  }

}
