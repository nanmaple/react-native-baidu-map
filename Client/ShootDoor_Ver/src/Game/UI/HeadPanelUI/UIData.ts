namespace ScenePanel {
    export class HeadPanelUIData {
        private static instance: HeadPanelUIData;
        public static GetInstance() {
            if (!this.instance) {
                this.instance = new HeadPanelUIData();
            }
            return this.instance;
        }

        public money: number;

        public memberInfo: BaseDto.MemberInfoDto;
        public parentID: string;
        public grHandler: Laya.Handler;
        public ruleHandler: Laya.Handler;
        public isTourists: boolean;
        public balanceHander: Laya.Handler;
    }
}