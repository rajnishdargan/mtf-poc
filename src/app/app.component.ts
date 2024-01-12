import { Component } from '@angular/core';
import { QuestionData } from './questionData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-mtf';
  totalScore = 0;
  public editorState = QuestionData.editorState;
  public questionData = QuestionData;

  updateSwappedOptions(swappedOptions: any) {
    this.editorState.options.right = swappedOptions;
  }

  updateScore(score: number) {
    console.log('Score:', score);
    this.totalScore = score;
  }
}
