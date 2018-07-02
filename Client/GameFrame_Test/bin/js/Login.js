var LoginView = /** @class */ (function () {
    function LoginView(successHandler) {
        var _this = this;
        this.loginView = new Laya.View();
        this.LoginSuccess = function (data) {
            // console.log(data);
            _this.loginView.removeSelf();
            _this.handler.run();
        };
        Laya.stage.addChild(this.loginView);
        this.handler = successHandler;
        var skins = [{ url: "res/atlas/comp.atlas", type: Laya.Loader.ATLAS }];
        Laya.loader.load(skins, Laya.Handler.create(this, function () {
            //设置画布的背景颜色
            _this.Account = _this.InputCreate(220, 200, 300, 60, "w015854");
            _this.Password = _this.InputCreate(220, 300, 300, 60, "123456");
            _this.Button = _this.ButtonCreate(220, 400, 300, 60, "登录", false);
            _this.ButtonTourist = _this.ButtonCreate(220, 500, 300, 60, "游客登录", true);
            _this.Button = _this.ButtonCreate(220, 800, 300, 60, "测试UI", false, true);
        }));
    }
    LoginView.prototype.InputCreate = function (x, y, w, h, text) {
        var textInput = new Laya.TextInput(); //创建一个 TextInput 类的实例对象 textInput 。
        textInput.wordWrap = true; //设置 textInput 的文本自动换行。
        textInput.color = "#fff";
        textInput.fontSize = 22; //设置 textInput 的字体大小。
        textInput.x = x; //设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        textInput.y = y; //设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        textInput.width = w; //设置 textInput 的宽度。
        textInput.height = h; //设置 textInput 的高度。
        textInput.bgColor = "#999";
        textInput.text = text;
        this.loginView.addChild(textInput); //将 textInput 添加到显示列表。
        return textInput;
    };
    LoginView.prototype.ButtonCreate = function (x, y, w, h, label, isTourist, testView) {
        var button = new Laya.Button(); //创建一个 TextInput 类的实例对象 textInput 。
        button.label = label; //设置 textInput 的文本。
        button.labelSize = 22; //设置 textInput 的字体大小。
        button.x = x; //设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        button.y = y; //设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        button.width = w; //设置 textInput 的宽度。
        button.height = h; //设置 textInput 的高度。
        button.skin = 'comp/button.png';
        this.loginView.addChild(button); //将 textInput 添加到显示列表。
        button.on(Laya.Event.CLICK, this, this.Login, [isTourist, testView]);
        return button;
    };
    LoginView.prototype.Login = function (isTourist, testView) {
        //获取Socket Token
        this.loginService = new Laya.Browser.window.LoginService(Network.WebApi, Utils.Storage, this.LoginSuccess, null, this.LoginError);
        if (testView) {
            this.loginView.removeSelf();
            var testsView = new TestView();
            return;
        }
        if (isTourist) {
            this.loginService.Login();
        }
        else {
            this.loginService.LoginByAccount(this.Account.text, this.Password.text, this.LoginSuccess);
        }
    };
    LoginView.prototype.LoginError = function (error) {
        console.log(error);
    };
    return LoginView;
}());
//# sourceMappingURL=Login.js.map