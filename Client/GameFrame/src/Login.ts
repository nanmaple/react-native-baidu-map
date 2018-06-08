class LoginView {
    private Account: Laya.TextInput;
    private Password: Laya.TextInput;
    private Button: Laya.Button;
    private handler: Laya.Handler;

    private loginService: any;
    constructor(successHandler: Laya.Handler) {
        this.handler = successHandler;
        var skins = [{ url: "res/atlas/comp.atlas", type: Laya.Loader.ATLAS }];
        Laya.loader.load(skins, Laya.Handler.create(this, () => {
            //设置画布的背景颜色
            this.Account = this.InputCreate(220, 200, 300, 60);
            this.Password = this.InputCreate(220, 300, 300, 60);
            this.Button = this.ButtonCreate(220, 400, 300, 60, "登录");
        }));
    }

    private InputCreate(x, y, w, h) {
        var textInput: Laya.TextInput = new Laya.TextInput();//创建一个 TextInput 类的实例对象 textInput 。
        textInput.wordWrap = true;//设置 textInput 的文本自动换行。
        textInput.color = "#fff"
        textInput.fontSize = 22;//设置 textInput 的字体大小。
        textInput.x = x;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        textInput.y = y;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        textInput.width = w;//设置 textInput 的宽度。
        textInput.height = h;//设置 textInput 的高度。
        textInput.bgColor = "#999";
        Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
        return textInput;
    }

    private ButtonCreate(x, y, w, h, label) {
        var button: Laya.Button = new Laya.Button();//创建一个 TextInput 类的实例对象 textInput 。
        button.label = "Login";//设置 textInput 的文本自动换行。
        button.labelSize = 22;//设置 textInput 的字体大小。
        button.x = x;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        button.y = y;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        button.width = w;//设置 textInput 的宽度。
        button.height = h;//设置 textInput 的高度。
        button.skin = 'comp/button.png';
        Laya.stage.addChild(button);//将 textInput 添加到显示列表。
        button.on(Laya.Event.CLICK, this, this.Login)
        return button;
    }

    private Login() {
        //获取Socket Token
        this.loginService = new Laya.Browser.window.LoginService(Network.Http.WebApi, Utils.Storage, this.LoginSuccess, null, this.LoginError);
        this.loginService.LoginByAccount(this.Account.text, this.Password.text, this.LoginSuccess);
    }

    private LoginSuccess = (data: any) => {
        console.log(data);
        Laya.stage.removeChild(this.Account);
        Laya.stage.removeChild(this.Password);
        Laya.stage.removeChild(this.Button);
        this.handler.run();
    }

    private LoginError(error: any) {
        console.log(error)
    }
}