var BaseDto;
(function (BaseDto) {
    /**
     * 消息Dto
     */
    var MessageDto = (function () {
        function MessageDto() {
        }
        return MessageDto;
    }());
    BaseDto.MessageDto = MessageDto;
    //游戏命令dto
    var GameMessageDto = (function () {
        function GameMessageDto() {
        }
        return GameMessageDto;
    }());
    BaseDto.GameMessageDto = GameMessageDto;
})(BaseDto || (BaseDto = {}));
