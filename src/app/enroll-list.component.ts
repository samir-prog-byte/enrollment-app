import { Component, OnInit, Inject } from '@angular/core';
import { ConfigService } from '../config/config.service';

export interface DialogData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-enroll-list',
  templateUrl: './enroll-list.component.html',
  styleUrls: ['./enroll-list.component.scss']
})
export class EnrollListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'active'];
  dataSource: any;
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getEnrolles()
      .subscribe((enrolleData: any) => {
        this.dataSource = enrolleData;
      });

  }


}
