import { Component, OnInit } from '@angular/core';
import { FileUploader} from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL,itemAlias:'profile'});
  ngOnInit(){
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
  }
 }

}
