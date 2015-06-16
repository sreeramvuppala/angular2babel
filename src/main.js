import {bootstrap, ComponentAnnotation as Component, ViewAnnotation as View, Injectable} from 'angular2/angular2';

import { Greeter } from 'src/greeter';

@Component({
    selector: 'main'
})
@View({
  templateUrl: "src/main.html"
})

export class Main {
    name: string;

    constructor() {
      var greeter = new Greeter();
      this.name = greeter.hello ("Ram");
    }
}