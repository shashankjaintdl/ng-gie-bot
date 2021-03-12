import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { JKeys } from 'src/app/models/JKeys';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  code:string=null;
  _jKeys:JKeys=new JKeys();
  constructor(private localStorage:CookieService,private router:Router) { }

  ngOnInit(): void {
    // console.log("Token"+this.localStorage.get("token"))
    if(!this.localStorage.get("code"))
    {
      this.localStorage.remove("code");
      this.redirect();
    }
    else{
      this.router.navigate(['/callback'])
    }
  }
  redirect(){
    // var currentURL=window.location.href;
    // this.code=currentURL.split('&code=')[1];
    this.code=this.localStorage.get('code');
    // console.log("code2="+this.code);
    if(this.localStorage.get("code")===undefined || this.localStorage.get("code")==undefined){
    window.location.href =  this._jKeys.maamStgHost+
                           'authorize?client_id='+
                            this._jKeys.clientId+
                            '&response_type='+
                            this._jKeys.response_type+
                            '&scope=urn%3Aaxa%3Agie%3Achatbot%3Agir&redirect_uri='+
                            this._jKeys.stgRedirectUrl;
    }
   
  }

}
