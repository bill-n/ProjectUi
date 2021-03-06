import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../employee";
import ProjectModel from "../models/ProjectModel";
@Injectable({
  providedIn: "root"
})
export class AppService {
  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();
  private developerService = "https://developerservice03.herokuapp.com/";
  constructor(private http: HttpClient) {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  getEmployeeRole(email: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      this.developerService + "dev/email/" + email
    );
  }
  getLoggedHours(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.developerService + "log");
  }
  getLoggedHoursForDev(empId: string): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(
      this.developerService + "projectlogged/dev/" + empId
    );
  }
}
