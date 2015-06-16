import {bootstrap, ComponentAnnotation as Component, ViewAnnotation as View, Injectable} from 'angular2/angular2';

@Component({
    selector: 'app-footer'
})
@View({
  templateUrl: "src/footer.html"
})
export class AppFooter {
    
}