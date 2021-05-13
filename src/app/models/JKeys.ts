export class JKeys{
    public clientId='cef06bd4';
    public response_type='code';

    /*================================
     Staging / Non- Prod configuration
    =================================*/

    /*
      Kindly comment the below configuration while doing the deployment in Productions
    */

    // public maamHost:string = "https://maam.axa.com/maam/v2/";
    // public maamStgHost:any='https://maam-stg.axa.com/maam/v2/';
    // public stgRedirectUrl:string='https://gie-bot-test.azurewebsites.net'
    // public secret:string="3eZXbb4L87E.m4FOSz-R7iR9G0awFA7oYQGCGENLN0SB5Bq_yxBDI40";

    /*
      End Of Non-prod configuration
     */
    public adminHost:string="https://localhost:44380/api/v1/"

    /*=======================
     Production configuration
    =======================*/

    /*
      Kindly un-comment the below configuration while doing the deployment in production
    */

    public maamHost = "https://maam.axa.com/maam/v2/";
    public maamStgHost:any='https://maam.axa.com/maam/v2/';
    public stgRedirectUrl:string='https://gie.azurewebsites.net'
    public secret:string="BeybTd3ehgs.0sMod7EPfTy_HePGUiuUaVzmrIbS_ypZiA1xZCvD6Ec";
    public scope:string = "urn%3Aaxa%3Agie%3Achatbot%3Agir";

    /*
    Production Bot configuration End
    */


    public webChatURL:string="https://webchat.botframework.com/api/tokens";

    /*

    */
    public smartyBlob:string="https://axagie.blob.core.windows.net/smarty";


    public hostUrl:string="http://localhost:3978/";
    public getChatReport:string = "api/chat-report";
}
