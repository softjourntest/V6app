/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
import { Home_PhonePortrait } from '../pages/Home/PhonePortrait/Home';
import { TimeEntry_PhonePortrait } from '../pages/TimeEntry/PhonePortrait/TimeEntry';
import { ServiceNowList_PhonePortrait } from '../pages/ServiceNowList/PhonePortrait/ServiceNowList';
import { ServiceRequest_PhonePortrait } from '../pages/ServiceRequest/PhonePortrait/ServiceRequest';
import { TimeComments_PhonePortrait } from '../pages/TimeComments/PhonePortrait/TimeComments';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Login_PhonePortrait,
    Home_PhonePortrait,
    TimeEntry_PhonePortrait,
    ServiceNowList_PhonePortrait,
    ServiceRequest_PhonePortrait,
    TimeComments_PhonePortrait
  ];
  static mapping = {
    'Login': {
      PhonePortrait: Login_PhonePortrait
    },
    'Home': {
      PhonePortrait: Home_PhonePortrait
    },
    'TimeEntry': {
      PhonePortrait: TimeEntry_PhonePortrait
    },
    'ServiceNowList': {
      PhonePortrait: ServiceNowList_PhonePortrait
    },
    'ServiceRequest': {
      PhonePortrait: ServiceRequest_PhonePortrait
    },
    'TimeComments': {
      PhonePortrait: TimeComments_PhonePortrait
    }
  }
}