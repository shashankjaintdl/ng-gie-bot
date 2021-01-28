export class JKeys{
    public clientId='cef06bd4';
    public response_type='code';

    /*================================
     Staging / Non- Prod configuration
    =================================*/

    /*
      Kindly comment the below configuration while doing the deployment in Non-Productions
    */

    public maamHost = "https://maam.axa.com/maam/v2/";
    public maamStgHost:any='https://maam-stg.axa.com/maam/v2/';
    public stgRedirectUrl:string='https://gie-bot-test.azurewebsites.net'

    /*=======================
     Production configuration
    =======================*/
    
    /*
      Kindly un-comment the below configuration while doing the deployment in production
    */

    // public maamHost = "https://maam.axa.com/maam/v2/";
    // public maamStgHost:any='https://maam.axa.com/maam/v2/';
    // public stgRedirectUrl:string='https://gie.azurewebsites.net'
    

    /*
    Production Bot configuration
    */
    public secret:string="BeybTd3ehgs.0sMod7EPfTy_HePGUiuUaVzmrIbS_ypZiA1xZCvD6Ec";
    public webChatURL:string="https://webchat.botframework.com/api/tokens";

    /*

    */
    public smartyBlob:string="https://axagie.blob.core.windows.net/smarty";
}
