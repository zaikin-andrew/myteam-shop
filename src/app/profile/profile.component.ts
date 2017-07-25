import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Currency } from '../shared/currency.model';
import { Auth, HelperService } from '../shared/services/';
import { User } from '../shared/user.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public user: User;
  public profileCurrency: any;
  public nameCountry: any;
  private subsriber: Subscription;

  constructor(private auth: Auth,
              private toastr: ToastsManager,
              private helperService: HelperService) {
  }

  public ngOnInit() {
    this.profileCurrency = Currency.getCurrency();
    this.helperService.getCountry()
      .subscribe((res) => {
        this.nameCountry = res;
      });
    this.subsriber = this.auth.onAuth.subscribe((user) => this.user = user);
    this.auth.getProfile();
  }

  public ngOnDestroy() {
    this.subsriber.unsubscribe();
  }

  public update(field: string, value: string) {
    this.auth.updateProfile(field, value)
      .subscribe(
        (data) => this.toastr.success('Profile update', 'Success'),
        (error) => this.toastr.success(error)
      );
  }
}
