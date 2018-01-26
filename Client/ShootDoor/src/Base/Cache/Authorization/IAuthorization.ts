/// <reference path="../../Dto/AuthorizationDto.ts"/>
namespace BaseCache {
    export interface IAuthorization {
        /**
         * 获取会员授权信息
         */
        GetAuthorization(gameID: number): BaseDto.AuthorizationDto,
        /**
         * 设置授权信息
         * @param dto 
         */
        SetAuthorization(gameID: number,dto: BaseDto.AuthorizationDto): boolean
    };
}
