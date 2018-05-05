/// <reference path="Config.ts" />
/// <reference path="../../Base/Utils/Http.ts" />
namespace Net {
      /**
       * WebApi层
       * 单例 使用WebApi.instance
       */
      export class WebApi extends WebApiBaseCtrl {
            //单例
            public static instance: WebApi;
            constructor() {
                  super(GameConfig.GameID);
            }

            public static GetInstance(): WebApi {
                  if (!this.instance) {
                        this.instance = new WebApi();
                        this.instance.SetToken();
                  }
                  return this.instance;
            }

            /**
             * 获取投注信息信息
             * @param successHandler 成功回调
             * @param errorhandler 失败回调
             */
            public GetBetRecord(dto: Dto.BetRecordPageDto, successHandler: Laya.Handler, errorhandler: Laya.Handler) {
                  this.http.Post(Net.ApiConfig.GetBetRecord, dto, this.header, (response: any) => {
                        if (response.Result == BaseEnum.ErrorCode.Success) { 
                              if(response.Data){
                                    let dto: Dto.HandlerDto = new Dto.HandlerDto();
                                    dto.Data = response.Data;
                                    successHandler.runWith(dto);
                              }else{
                                    errorhandler.runWith(BaseEnum.ErrorCode.SystemError);
                              }
                        } else {
                              errorhandler.runWith(response.Result);
                        }
                  }, (error: any) => {
                        errorhandler.runWith(error.toString());
                  });
            }
            /**
             * 获取appid
             */
            public GetAppID(successHandler: Laya.Handler){
                  this.http.Get(Net.ApiConfig.GetAppIDApi,{},this.header,(response: any)=>{
                        if (response.Result == BaseEnum.ErrorCode.Success) { 
                              GameConfig.GetAppID(response.Data);
                              successHandler.run();
                        } else {
                              console.log("获取APPID失败",response);
                        }
                  },(error: any)=>{
                        console.log("获取APPID失败",error);
                  })
            }
      }
}