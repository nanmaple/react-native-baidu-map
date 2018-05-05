var BaseDto;
(function (BaseDto) {
    var WeChatSignatureDto = /** @class */ (function () {
        function WeChatSignatureDto() {
        }
        return WeChatSignatureDto;
    }());
    BaseDto.WeChatSignatureDto = WeChatSignatureDto;
    /**
     * 微信分享信息Dto
     */
    var WeChatShareDto = /** @class */ (function () {
        function WeChatShareDto() {
            /**
             * 标题
             */
            this.Title = "";
            /**
             * 图片地址
             */
            this.ImgUrl = "";
            /**
             * 描述
             */
            this.Desc = "";
            /**
             * 链接
             */
            this.Link = null;
        }
        return WeChatShareDto;
    }());
    BaseDto.WeChatShareDto = WeChatShareDto;
})(BaseDto || (BaseDto = {}));
