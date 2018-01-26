"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("../Base");
class MemberCtrl {
    constructor() {
        this.webApi = Base_1.WebApiManager.GetInstance();
        this.languageManager = new Base_1.LanguageManager();
    }
}
exports.default = MemberCtrl;
//# sourceMappingURL=BaseCtrl.js.map