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
    this.redirect();
  }
  redirect(){
    this.localStorage.removeAll();
    var currentURL=window.location.href;
    this.code=currentURL.split('&code=')[1];
    localStorage.setItem('code',this.code);
    console.log("code"+this.code);
    if(this.code===undefined || this.code==undefined){
    window.location.href =  this._jKeys.maamStgHost+
                           'authorize?client_id='+
                            this._jKeys.clientId+
                            '&response_type='+
                            this._jKeys.response_type+
                            '&scope=urn%3Aaxa%3Agie%3Achatbot%3Agir&redirect_uri='+
                            this._jKeys.stgRedirectUrl;
    }
    else{
      this.router.navigate(['/callback'])
    }
  }

}
