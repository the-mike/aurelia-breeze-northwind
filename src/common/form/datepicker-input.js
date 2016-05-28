import { inject, bindable } from 'aurelia-framework';

@inject(Element)
export class DatepickerInput {
  @bindable sWidth = 12;
  @bindable mWidth = 12;
  @bindable name = "hello";
  @bindable label = "Label";
  @bindable bindAttribute;
  element;

  constructor(element) {
    this.element = element;
    console.log(element);
  }


}
