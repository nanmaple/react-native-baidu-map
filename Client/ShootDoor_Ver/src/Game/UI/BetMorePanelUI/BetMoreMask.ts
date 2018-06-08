class mask extends Laya.Box{
    private masks:Laya.Sprite;
    constructor(){
        super();
        this.masks = new Laya.Sprite();
        this.addChild(this.masks);
        document.addEventListener("screenMode", () => {
            if (GameConfig.ScreenMode == 0) {
                if(this.masks){
                    this.masks.removeSelf();
                }
                this.masks.graphics.drawRect(0,0,this.width,this.height,"#6dac7c");
                this.addChild(this.masks);
            } else {
                if(this.masks){
                    this.masks.removeSelf();
                }
                this.masks.graphics.drawRect(0,0,this.width,this.height,"#6dac7c");
                this.addChild(this.masks);
            }
        })
        
    }

    public Show():void{
        this.masks.graphics.drawRect(0,0,this.width,this.height,"#6dac7c");
        this.masks.visible = true
    }
    public Hide():void{
        this.masks.visible = false
    }

}