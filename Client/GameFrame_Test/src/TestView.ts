class TestView {
    private testView: Laya.View = new Laya.View();
    constructor() {
        this.testView.zOrder = 999;
        this.testView.width = 750;
        this.testView.height = 1334;
        Laya.stage.addChild(this.testView);

        this.CreateLineRoute();
    }


    public CreateLineRoute() {
        //画折线
        let sp: Laya.Sprite = new Laya.Sprite();
        sp.zOrder = 5;
        //自定义路径
        var path: Array<any> = [
            ["moveTo", 0, 0], //画笔的起始点，
            ["arcTo", 45, -45, 90, 0, 45], 
            ["arcTo", 75, -225, 60, -550, Math.sqrt(15*15+225*225)],
            // ["lineTo", 60, -550],
            ["lineTo", 70, -550],
            ["lineTo", 45, -560],
            ["lineTo", 20, -550],
            ["lineTo", 30, -550],
            ["arcTo", 15, -225, 0, 0,  Math.sqrt(15*15+550*550)], 
        ];
        //绘制圆角矩形
        sp.graphics.drawPath(330, 800, path, { fillStyle: "#ff0000" }, { "strokeStyle": "#ffffff", "lineWidth": "10" });
        //贝塞尔1
        this.testView.addChild(sp);
    }
}