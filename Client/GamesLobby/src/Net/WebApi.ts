/// <reference path="Config.ts" />
/// <reference path="../Utils/Http.ts" />
namespace Net {
      /**
       * WebApi层
       * 单例 使用WebApi.instance
       */
      export class WebApi {
            //单例
            public static readonly instance: WebApi = new WebApi();
            //token存储
            private header: any = {
                  Authorization: ""
            };
            //http
            private http: Utils.Http = new Utils.Http();
            /**
             * 设置token
             * @param token 
             */
            public SetToken(token: string = ""): boolean {
                  this.header.Authorization = token;
                  return true;
            }
            /**
             * 微信登录
             * @param dto 登录参数Dto
             * @param successHandler 成功回调
             * @param errorhandler 失败回调
             */
            public Login(dto: BaseDto.LoginDto, successHandler: Laya.Handler, errorhandler: Laya.Handler) {
                  let obj = {
                        Code: dto.Code,
                        ParentID: dto.ParentID,
                        DeviceType: dto.DeviceType,
                        DeviceId: dto.DeviceId
                  }
                  //请求调Net的api，
                  this.http.Post(Net.ApiConfig.Login, obj, null, (response: any) => {
                        console.log("Login成功回调");
                        if (response.Result == Enum.ErrorCode.Success) {
                              successHandler.runWith(response.Data);
                        } else {
                              console.log("Login失败回调",response);
                              errorhandler.runWith(response.Result);
                        }
                  }, (error: any) => {
                        console.log("Login失败回调",error);
                        errorhandler.runWith(error.toString());
                  });
            };

            /**
             * 登录检查
             * @param dto 登录参数Dto
             * @param successHandler 成功回调
             * @param errorhandler 错误回调
             */
            public LoginByTourists(dto: BaseDto.LoginDto, successHandler: Laya.Handler, errorhandler: Laya.Handler) {
                  let obj = {
                        DeviceType: dto.DeviceType,
                        DeviceId: dto.DeviceId
                  }
                  //请求调Net的api，
                  this.http.Post(Net.ApiConfig.LoginByTourists, obj, null, (response: any) => {
                        console.log("LoginByTourists成功回调");
                        if (response.Result == Enum.ErrorCode.Success) {
                              successHandler.runWith(response.Data);
                        } else {
                              console.log("LoginByTourists失败回调",response);
                              errorhandler.runWith(response.Result);
                        }
                  }, (error: any) => {
                        console.log("LoginByTourists失败回调",error);
                        errorhandler.runWith(error.toString());
                  });
            };


            /**
             * 登录检查
             * @param token token值
             * @param successHandler 成功回调
             * @param errorhandler 错误回调
             */
            public LoginCheck(token: string, successHandler: Laya.Handler, errorhandler: Laya.Handler) {
                  let header: any = {
                        Authorization: token
                  }
                  //请求调Net的api，
                  this.http.Post(Net.ApiConfig.LoginCheck, null, header, (response: any) => {
                        console.log("LoginCheck成功回调");
                        if (response.Result == Enum.ErrorCode.Success) {
                              successHandler.runWith(response.Data);
                        } else {
                              console.log("LoginCheck失败回调",response);
                              errorhandler.runWith(response.Result);
                        }
                  }, (error: any) => {
                        console.log("LoginCheck失败回调",error);
                        errorhandler.runWith(error.toString());
                  });
            };

            /**
             * 通过临时token和会员id登录
             * @param token token值
             * @param successHandler 成功回调
             * @param errorhandler 错误回调
             */
            public LoginByID(token: string, dto: BaseDto.LoginDto, successHandler: Laya.Handler, errorhandler: Laya.Handler) {
                  let header: any = {
                        Authorization: token
                  };
                  let params: any = {
                        MemberID: dto.MemberID,
                        DeviceType: dto.DeviceType,
                        DeviceId: dto.DeviceId
                  }
                  //请求调Net的api，
                  this.http.Post(Net.ApiConfig.LoginById, params, header, (response: any) => {
                        console.log("LoginByID成功回调");
                        if (response.Result == Enum.ErrorCode.Success) {
                              successHandler.runWith(response.Data);
                        } else {
                              console.log("LoginByID失败回调",response);
                              errorhandler.runWith(response.Result);
                        }
                  }, (error: any) => {
                        console.log("LoginByID失败回调",error);
                        errorhandler.runWith(error.toString());
                  });
            };


            /**
             * 获取会员信息
             * @param successHandler 成功回调
             * @param errorhandler 失败回调
             */
            public GetMemberInfo(successHandler: Laya.Handler, errorhandler: Laya.Handler) {
                  //请求调Net的api，
                  this.http.Post(Net.ApiConfig.GetMemberInfo, null, this.header, (response: any) => {
                        console.log("GetMemberInfo成功回调");
                        if (response.Result == Enum.ErrorCode.Success) {
                              successHandler.runWith(response.Data);
                        } else {
                              console.log("GetMemberInfo失败回调",response);
                              errorhandler.runWith(response.Result);
                        }
                  }, (error: any) => {
                        console.log("GetMemberInfo失败回调",error);
                        errorhandler.runWith(error.toString());
                  });
            }
      }
}