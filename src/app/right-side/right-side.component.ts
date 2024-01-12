import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent {
  @Input() options: any;
  @Input() questionData: any;
  @Output() optionsSwapped = new EventEmitter<any>();
  @Output() scoreCalculated = new EventEmitter<number>();

  onDrop(event: any) {
    const droppedItem = event.item.data;
    const currentIndex = this.options.right.indexOf(droppedItem);
    const targetIndex = event.currentIndex;

    this.swapOptions(currentIndex, targetIndex);

    this.optionsSwapped.emit(this.options.right);
    this.calculateScore();
  }

  private swapOptions(index1: number, index2: number) {
    const temp = this.options.right[index1];
    this.options.right[index1] = this.options.right[index2];
    this.options.right[index2] = temp;
  }

  private calculateScore() {
    const correctResponse = this.questionData.responseDeclaration.response1.correctResponse.value;
    const mapping = this.questionData.responseDeclaration.response1.mapping;

    const currentResponse = this.options.right.map((item: any) => {
      return {
        // [item.value.value]: this.options.right.indexOf(item),
        [this.options.right.indexOf(item)]: item.value.value,
      };
    });

    let score = 0;
    score = this.calculateFinalScore(correctResponse, currentResponse, mapping);

    this.scoreCalculated.emit(score);
  }

  calculateFinalScore(correctResponse, currentResponse, mapping) {
    let totalScore = 0;

    for (let i = 0; i < correctResponse.length; i++) {
      const correctValue = correctResponse[i][i.toString()];
      const currentValue = currentResponse[i][i];

      // Find the corresponding mapping entry
      const mappingEntry = mapping.find(entry => entry.value[i.toString()] === correctValue);

      // If mapping entry is found, calculate the score
      if (mappingEntry) {
        if (currentValue === correctValue) {
          totalScore += mappingEntry.score;
        }
      }
    }

    return totalScore;
  }

}
