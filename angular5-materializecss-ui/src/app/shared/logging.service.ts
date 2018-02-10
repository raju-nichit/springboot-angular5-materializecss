import {toast} from 'angular2-materialize';

export class LoggingService {
  constructor() {
  }

  errorLoggging(error: any) {
    console.log(error);
    toast(error.error.message, 2000, 'red rounded');
  }

  successLogging(message: string) {
    toast(message, 2000, 'green rounded');
  }
}
