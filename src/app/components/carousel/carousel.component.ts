import { Component, Input } from '@angular/core';
import { ImageModel } from '../../model/image.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ecs-carousel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  @Input()
  images: ImageModel[]|undefined;
  count: number = 0;

  previous(): void {
    if(this.images != undefined && this.count === 0) {
      this.count = this.images?.length - 1;
    } else {
      this.count--;
    }
  }

  next(): void {
    if(this.images != undefined && this.count === this.images?.length - 1) {
      this.count = 0;
    } else {
      ++this.count;
    }
  }

  calculateNextPrevious() {
    return `-${this.count*100}%`;
  }
}
