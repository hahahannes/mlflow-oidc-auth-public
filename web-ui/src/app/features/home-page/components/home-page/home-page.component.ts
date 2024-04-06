import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AccessKeyDialogData,
  AccessKeyModalComponent,
} from '../../../../shared/components';
import { finalize, forkJoin, switchMap } from 'rxjs';
import { AuthService, DataService } from '../../../../shared/services';
import { ExperimentModel, ModelModel, UserResponseModel } from '../../../../shared/interfaces/data.interfaces';

@Component({
  selector: 'ml-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  currentUserInfo: UserResponseModel | null = null;
  loading = false;
  experimentsColumnConfig = [
    {
      title: 'Experiment name',
      key: 'name',
    },
    {
      title: 'Permissions',
      key: 'permission',
    },
  ];
  modelsColumnConfig = [
    {
      title: 'Model name',
      key: 'name',
    },
    {
      title: 'Permissions',
      key: 'permission',
    },
  ];
  experimentsDataSource: ExperimentModel[] = [];

  modelsDataSource: ModelModel[] = [];

  constructor(
    private readonly dialog: MatDialog,
    private readonly dataService: DataService,
    private readonly authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.currentUserInfo = this.authService.getUserInfo();

    if (this.currentUserInfo) {
      const { username } = this.currentUserInfo;
      
      if (username) {
        this.experimentsDataSource = this.currentUserInfo.experiment_permissions;
        this.modelsDataSource = this.currentUserInfo.registered_model_permissions;
      }
    }
  }

  showAccessKeyModal() {
    this.dataService.getAccessKey()
      .pipe(
        switchMap(({ token }) => this.dialog.open<AccessKeyModalComponent, AccessKeyDialogData>(AccessKeyModalComponent, {
          data: {
            token,
          },
        })
          .afterClosed()),
      )
      .subscribe();
  }
}
