import { Component, Input, OnInit } from '@angular/core';
import { AppHighlightDirective } from '../../../../shared/directives/highlight.directive';
import { sayHello } from '../../../../../assets/js/myscript.js';
@Component({
  selector: 'app-dynamic-comp',
  imports: [AppHighlightDirective],
  templateUrl: './dynamic-comp.html',
  styleUrl: './dynamic-comp.scss',
})
export class DynamicComp implements OnInit {
  @Input() title!: string;
  @Input() content!: string;
  ngOnInit() {
    sayHello();
  }
}
