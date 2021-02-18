import { Component, OnInit, Inject } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-enroll-details',
  templateUrl: './enroll-details.component.html',
  styleUrls: ['./enroll-details.component.scss']
})
export class EnrollDetailsComponent implements OnInit {
  id: any;
  paramsSub: any;
  enrollDetail: any;
  activeStatus: any;
  name: any;

  constructor(private configService: ConfigService, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    /** To get the selected enrolle id **/
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => (this.id = params['id'])
    );

    /** To get the enrolle details **/
    this.configService.getEnrollesById(this.id)
      .subscribe((enrolleData: any) => {
        this.enrollDetail = enrolleData;
        this.activeStatus = this.enrollDetail.active;
        this.name = this.enrollDetail.name;
      });
  }

/** To update the selected enrolle details **/
updateDetails(enrollId:string) {
  const updateObj = {
        "active": this.activeStatus,
        "name": this.name,
        "dateOfBirth": this.enrollDetail.dateOfBirth
  }
  this.configService.updateEnrolleDetails(this.id, updateObj)
    .subscribe((enrolleUpdateData: any) => {
      this._snackBar.open('Details Updated Successfully', '', {
        duration: 2000,
        verticalPosition: 'top'
    });
      this.enrollDetail = enrolleUpdateData;
    });
}



}
