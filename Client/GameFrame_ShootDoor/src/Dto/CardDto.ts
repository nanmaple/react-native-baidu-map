namespace Dto {
    export class CardDto {
        /**
         * 牌面图片
         */
        public Poker: ui.PokerHVUI;

        /**
         * 牌面数字
         */
        public Card: number = null;

        /**
         * 牌面状态
         */
        public Status: PokerStatus = PokerStatus.Hide;
        public BaseScale: ScaleDto = new ScaleDto();
        /**
         * 缩放属性
         */
        public Scale: ScaleDto = new ScaleDto();
    }

    class ScaleDto {
        public x: number = 0;
        public y: number = 0;
        public scaleX: number = 1;
        public scaleY: number = 1
    }

    export enum PokerStatus {
        Hide = 0,
        Show = 1,
        Flip = 2,
    }
}

