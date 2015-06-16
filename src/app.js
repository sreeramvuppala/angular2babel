import {bootstrap, ComponentAnnotation as Component, ViewAnnotation as View, Injectable} from 'angular2/angular2';
import {NgIf} from 'angular2/angular2';
import Fetch from 'node-fetch';
import {Main} from 'src/main';
import {AppFooter} from 'src/footer';

@Component({
    selector: 'my-app'
})
@View({
  templateUrl: "src/app.html",
  directives: [AppFooter, Main]
})
class MyAppComponent {
    
}

bootstrap(MyAppComponent);
