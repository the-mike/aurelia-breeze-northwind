import { bindable } from 'aurelia-framework';

export class SelectInput {
    @bindable sWidth = 12;
    @bindable mWidth = 12;
    @bindable name = "hello";
    @bindable label = "Label";
    @bindable bindAttribute;
    @bindable options = [];

    attached(){
      console.log(this);
    }

    emptySelected(){
      return !!this.bindAttribute;
    }
}
