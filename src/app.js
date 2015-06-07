import {bootstrap, ComponentAnnotation as Component, ViewAnnotation as View, Injectable} from 'angular2/angular2';
import {NgIf} from 'angular2/angular2';
import Fetch from 'node-fetch';

@Injectable()
class ImagesFactory {
  getUrls(): Array {
    let url = 'http://localhost:8080/public/test.json'
    var t = Fetch(url).then(response => response.json())
      .then(json => json.data.children
        .map(a => a.data.url)
        .filter(a => /\.(gif|jpg|png)$/.exec(a)));
    return t;
  }
}

@Component({
    selector: 'my-app',
    appInjector: [ImagesFactory]
})
@View({
  templateUrl: "src/hello.html",
  directives: [NgIf]
})
class MyAppComponent {
    name: string;
    img: string;

    constructor(images: ImagesFactory) {
      this.name = "world";
      images.getUrls().then(ar =>
        this.img = ar[0]
      );
    }
}

bootstrap(MyAppComponent);
