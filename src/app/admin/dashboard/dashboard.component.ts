import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { NotificationService } from "app/common/services/notification/notification.service";
import { SessionService } from "app/common/services/session/session.service";
import { saveAs } from 'file-saver';
import { from } from 'rxjs';
import { FileUploadServiceService } from 'app/common/services/fileUpload/file-upload-service.service'
import { fileUploadModel } from 'app/common/models/form_script/formScript.model'
import { FileListService } from 'app/common/services/clientList/client-list.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  run_disabled: boolean = false;
  file_uploaded: any = [];
  items : any = []
  formData = new FormData();
  get_data = false
  constructor(
    private notificationService: NotificationService,
    private fileUploadService: FileUploadServiceService,
    private fileListService: FileListService,
  ) { }
  ngOnInit(): void {
    this.list_data();
  }

  list_data = () => {
    this.fileListService.list().subscribe((data) => {
      console.log(data, data[0]);
      let map = new Map();
      map.set
       data.forEach(element => {
         let ele = JSON.parse(element.file_data)
         console.log(ele);
         let obj = {"id":element.id , file_data:ele}
         this.items.push(obj)
       })
    });
  };

  handleFileInput(files: FileList) {
    console.log(files)
    this.file_uploaded = files;
    console.log("length:", this.file_uploaded.length)
    console.log(this.file_uploaded)
   
    for (const file of this.file_uploaded) {
      this.formData.append('files', file, file.name) // file.name is optional
  }
    
  }
  create = () => {
    this.run_disabled = true;
    console.log(this.file_uploaded)
    console.log(this.formData)
    this.fileUploadService.create(this.formData).subscribe((data) => {
      console.log(data);
      this.run_disabled = false;
      this.list_data();
    },(error) =>{
      this.run_disabled = false;
      this.notificationService.showNotification("Error occured, please try again", "danger");
    });
  };


}
