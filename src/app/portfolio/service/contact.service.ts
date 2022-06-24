import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { NotificationService } from "./notification.service";
import { ErrorNotificationService } from "./error-notification.service";
import { Contact } from "../model/contact.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContactService {

  readonly formSpreeUrl: string = environment.formSpreeUrl;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private errorNotificationService: ErrorNotificationService,
  ) {
  }

  private handleError(errorResponse: any): Observable<never> {
    this.errorNotificationService.open(errorResponse);
    return throwError(errorResponse);
  }

  sendMessage(contact: Contact): Observable<any> {
    return this.http.post<any>(this.formSpreeUrl, contact, this.httpOptions).pipe(
      catchError(errorResponse => this.handleError(errorResponse)),
    );
  }
}
