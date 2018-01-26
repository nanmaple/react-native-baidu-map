/// <reference path="Config.ts" />
/// <reference path="../../Base/Utils/Http.ts" />
namespace Net {
      /**
       * WebApi层
       * 单例 使用WebApi.instance
       */
      export class WebApi extends WebApiBaseCtrl {
            //单例
            public static readonly instance: WebApi = new WebApi();
            constructor() {
                  super(GameConfig.GameID);
            }

            /**
             * 获取投注信息信息
             * @param successHandler 成功回调
             * @param errorhandler 失败回调
             */
            public GetBetRecord(dto: Dto.BetRecordPageDto, successHandler: Laya.Handler, errorhandler: Laya.Handler) {
                  this.http.Post(Net.ApiConfig.GetBetRecord, dto, this.header, (response: any) => {
                        if (response.Result == BaseEnum.ErrorCode.Success) {
                              let dto: Dto.HandlerDto = new Dto.HandlerDto();
                              dto.Data = response.Data;
                              successHandler.runWith(dto);
                        } else {
                              errorhandler.runWith(response.ErrorCode);
                        }
                  }, (error: any) => {
                        errorhandler.runWith(error.toString());
                  });
            }
      }
}