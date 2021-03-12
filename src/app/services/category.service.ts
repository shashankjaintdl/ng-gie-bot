import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CookieService } from "ngx-cookie";
import { Observable } from "rxjs";
import { EventData } from "../models/EventData";
import { JKeys } from "../models/JKeys";
import { Users } from "../models/Users";

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
    
    _jKeys:JKeys=new JKeys();
    constructor(private _http: HttpClient, private http: Http, private localstorage: CookieService) { }

    authorize(email:string):Observable<Users>{
        const params = new HttpParams()
        .set("email",email)
         return this._http.get<Users>(this._jKeys.adminHost + "authorize",{params});
    
    }
    
    getChatReport(startDate,endDate){
      const params=new HttpParams()
      .set("StartDate",startDate)
      .set("EndDate",endDate);
      return this._http.get<EventData>(this._jKeys.hostUrl+this._jKeys.getChatReport,{params});
    }
  }