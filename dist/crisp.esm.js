var CrispMessage = /** @class */ (function () {
    function CrispMessage(crisp) {
        this.parent = crisp;
    }
    CrispMessage.prototype.send = function (type, content) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["do", "message:send", [type, content]]);
    };
    CrispMessage.prototype.sendText = function (content) {
        this.send("text", content);
    };
    CrispMessage.prototype.sendFile = function (content) {
        this.send("file", content);
    };
    CrispMessage.prototype.sendAnimation = function (content) {
        this.send("animation", content);
    };
    CrispMessage.prototype.sendAudio = function (content) {
        this.send("audio", content);
    };
    CrispMessage.prototype.show = function (type, content) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["do", "message:show", [type, content]]);
    };
    CrispMessage.prototype.showText = function (content) {
        this.show("text", content);
    };
    CrispMessage.prototype.showFile = function (content) {
        this.show("file", content);
    };
    CrispMessage.prototype.showAnimation = function (content) {
        this.show("animation", content);
    };
    CrispMessage.prototype.showAudio = function (content) {
        this.show("audio", content);
    };
    CrispMessage.prototype.showPicker = function (content) {
        this.show("picker", content);
    };
    CrispMessage.prototype.showField = function (content) {
        this.show("field", content);
    };
    CrispMessage.prototype.markAsRead = function () {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["do", "message:read"]);
    };
    CrispMessage.prototype.onMessageSent = function (callback) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["off", "message:sent"]);
        window.$crisp.push(["on", "message:sent", callback]);
    };
    CrispMessage.prototype.onMessageReceived = function (callback) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["off", "message:received"]);
        window.$crisp.push(["on", "message:received", callback]);
    };
    CrispMessage.prototype.onMessageComposeSent = function (callback) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["off", "message:compose:sent"]);
        window.$crisp.push(["on", "message:compose:sent", callback]);
    };
    CrispMessage.prototype.onMessageComposeReceive = function (callback) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["off", "message:compose:received"]);
        window.$crisp.push(["on", "message:compose:received", callback]);
    };
    return CrispMessage;
}());

var CrispUser = /** @class */ (function () {
    function CrispUser(crisp) {
        this.parent = crisp;
    }
    CrispUser.prototype.setNickname = function (nickname) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["set", "user:nickname", [nickname]]);
    };
    CrispUser.prototype.setEmail = function (email, hmac) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["set", "user:email", [email, hmac]]);
    };
    CrispUser.prototype.setPhone = function (phone) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["set", "user:phone", [phone]]);
    };
    CrispUser.prototype.setAvatar = function (avatar) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["set", "user:avatar", [avatar]]);
    };
    CrispUser.prototype.setCompany = function (name, data) {
        var _payload = {};
        if (data && data.url) {
            _payload.url = data.url;
        }
        if (data && data.description) {
            _payload.description = data.description;
        }
        if (data && data.employment) {
            _payload.employment = [
                data.employment.title
            ];
            if (data.employment.role) {
                _payload.employment.push(data.employment.role);
            }
        }
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["set", "user:company", [name, _payload]]);
    };
    CrispUser.prototype.getEmail = function () {
        if (!this.parent.isCrispInjected()) {
            return null;
        }
        return window.$crisp.get("user:email");
    };
    CrispUser.prototype.getPhone = function () {
        if (!this.parent.isCrispInjected()) {
            return null;
        }
        return window.$crisp.get("user:phone");
    };
    CrispUser.prototype.getNickname = function () {
        if (!this.parent.isCrispInjected()) {
            return null;
        }
        return window.$crisp.get("user:nickname");
    };
    CrispUser.prototype.getAvatar = function () {
        if (!this.parent.isCrispInjected()) {
            return null;
        }
        return window.$crisp.get("user:avatar");
    };
    CrispUser.prototype.getCompany = function () {
        if (!this.parent.isCrispInjected()) {
            return null;
        }
        return window.$crisp.get("user:company");
    };
    CrispUser.prototype.onEmailChanged = function (callback) {
        if (this.parent.isCrispInjected()) {
            window.$crisp.push(["off", "user:email:changed"]);
            window.$crisp.push(["on", "user:email:changed", callback]);
        }
    };
    CrispUser.prototype.onPhoneChanged = function (callback) {
        if (this.parent.isCrispInjected()) {
            window.$crisp.push(["off", "user:phone:changed"]);
            window.$crisp.push(["on", "user:phone:changed", callback]);
        }
    };
    CrispUser.prototype.onNicknameChanged = function (callback) {
        if (this.parent.isCrispInjected()) {
            window.$crisp.push(["off", "user:nickname:changed"]);
            window.$crisp.push(["on", "user:nickname:changed", callback]);
        }
    };
    CrispUser.prototype.onAvatarChanged = function (callback) {
        if (this.parent.isCrispInjected()) {
            window.$crisp.push(["off", "user:avatar:changed"]);
            window.$crisp.push(["on", "user:avatar:changed", callback]);
        }
    };
    return CrispUser;
}());

var CrispTrigger = /** @class */ (function () {
    function CrispTrigger(crisp) {
        this.parent = crisp;
    }
    CrispTrigger.prototype.run = function (name) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["do", "trigger:run", [name]]);
    };
    return CrispTrigger;
}());

var EventsColors;
(function (EventsColors) {
    EventsColors["Red"] = "red";
    EventsColors["Orange"] = "orange";
    EventsColors["Yellow"] = "yellow";
    EventsColors["Green"] = "green";
    EventsColors["Blue"] = "blue";
    EventsColors["Purple"] = "purple";
    EventsColors["Pink"] = "pink";
    EventsColors["Brown"] = "brown";
    EventsColors["Grey"] = "grey";
    EventsColors["Black"] = "black";
})(EventsColors || (EventsColors = {}));
var CrispSession = /** @class */ (function () {
    function CrispSession(crisp) {
        this.parent = crisp;
    }
    CrispSession.prototype.reset = function (reload) {
        if (reload === void 0) { reload = false; }
        if (this.parent.isCrispInjected()) {
            window.$crisp.do("session:reset", [reload]);
        }
    };
    CrispSession.prototype.setSegments = function (segments, overwrite) {
        this.parent.createSingletonIfNecessary();
        $crisp.push(["set", "session:segments", [segments, overwrite]]);
    };
    CrispSession.prototype.setData = function (data) {
        var _this = this;
        var _payload = [];
        Object.entries(data).forEach(function (item) {
            if (_this.isValidDataValue(item[0])) {
                _payload.push([item[0], item[1]]);
            }
        });
        this.parent.createSingletonIfNecessary();
        $crisp.push(["set", "session:data", [_payload]]);
    };
    CrispSession.prototype.pushEvent = function (name, data, color) {
        if (data === void 0) { data = {}; }
        if (color === void 0) { color = EventsColors.Blue; }
        if (this.parent.isCrispInjected()) {
            window.$crisp.push(["set", "session:event", [[[name, data, color]]]]);
        }
    };
    CrispSession.prototype.getData = function (key) {
        if (!this.parent.isCrispInjected()) {
            return undefined;
        }
        return window.$crisp.get("session:data", key);
    };
    CrispSession.prototype.getIdentifier = function () {
        if (!this.parent.isCrispInjected()) {
            return null;
        }
        return window.$crisp.get("session:identifier");
    };
    CrispSession.prototype.onLoaded = function (callback) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["off", "session:loaded"]);
        window.$crisp.push(["on", "session:loaded", callback]);
    };
    CrispSession.prototype.isValidDataValue = function (value) {
        return (typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean");
    };
    return CrispSession;
}());

var CrispChat = /** @class */ (function () {
    function CrispChat(crisp) {
        this.parent = crisp;
    }
    CrispChat.prototype.show = function () {
        this.parent.autoInjectIfNecessasy();
        window.$crisp.push(["do", "chat:show"]);
    };
    CrispChat.prototype.hide = function () {
        this.parent.autoInjectIfNecessasy();
        window.$crisp.push(["do", "chat:hide"]);
    };
    CrispChat.prototype.open = function () {
        this.parent.autoInjectIfNecessasy();
        window.$crisp.push(["do", "chat:open"]);
    };
    CrispChat.prototype.close = function () {
        if (this.parent.isCrispInjected()) {
            window.$crisp.push(["do", "chat:close"]);
        }
    };
    CrispChat.prototype.unreadCount = function () {
        if (!this.parent.isCrispInjected()) {
            return 0;
        }
        return window.$crisp.get("chat:unread:count");
    };
    CrispChat.prototype.isChatOpened = function () {
        if (!this.parent.isCrispInjected()) {
            return false;
        }
        return window.$crisp.is("chat:opened");
    };
    CrispChat.prototype.isVisible = function () {
        if (!this.parent.isCrispInjected()) {
            return false;
        }
        return window.$crisp.is("chat:visible");
    };
    CrispChat.prototype.onChatInitiated = function (callback) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["off", "chat:initiated"]);
        window.$crisp.push(["on", "chat:initiated", callback]);
    };
    CrispChat.prototype.onChatOpened = function (callback) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["off", "chat:opened"]);
        window.$crisp.push(["on", "chat:opened", callback]);
    };
    CrispChat.prototype.onChatClose = function (callback) {
        this.parent.createSingletonIfNecessary();
        window.$crisp.push(["off", "chat:closed"]);
        window.$crisp.push(["on", "chat:closed", callback]);
    };
    return CrispChat;
}());

var ChatboxColors;
(function (ChatboxColors) {
    ChatboxColors["Default"] = "default";
    ChatboxColors["Amber"] = "amber";
    ChatboxColors["Black"] = "black";
    ChatboxColors["Blue"] = "blue";
    ChatboxColors["BlueGrey"] = "blue_grey";
    ChatboxColors["LightBlue"] = "light_blue";
    ChatboxColors["Brown"] = "brown";
    ChatboxColors["Cyan"] = "cyan";
    ChatboxColors["Green"] = "green";
    ChatboxColors["LightGreen"] = "light_green";
    ChatboxColors["Grey"] = "grey";
    ChatboxColors["Indigo"] = "indigo";
    ChatboxColors["Orange"] = "orange";
    ChatboxColors["DeepOrange"] = "deep_orange";
    ChatboxColors["Pink"] = "pink";
    ChatboxColors["Purple"] = "purple";
    ChatboxColors["DeepPurple"] = "deep_purple";
    ChatboxColors["Red"] = "red";
    ChatboxColors["Teal"] = "teal";
})(ChatboxColors || (ChatboxColors = {}));
var ChatboxPosition;
(function (ChatboxPosition) {
    ChatboxPosition["Left"] = "left";
    ChatboxPosition["Right"] = "right";
})(ChatboxPosition || (ChatboxPosition = {}));
var Crisp = /** @class */ (function () {
    function Crisp() {
        // Options
        this.websiteId = "";
        // States
        this.injected = false;
        this.chat = new CrispChat(this);
        this.session = new CrispSession(this);
        this.user = new CrispUser(this);
        this.message = new CrispMessage(this);
        this.trigger = new CrispTrigger(this);
    }
    Crisp.prototype.configure = function (websiteId, options) {
        if (options === void 0) { options = { autoload: true }; }
        this.websiteId = websiteId;
        this.tokenId = options.tokenId;
        this.autoload = options.autoload;
        this.sessionMerge = options.sessionMerge;
        this.cookieDomain = options.cookieDomain;
        this.lockFullview = options.lockFullview;
        this.lockMaximized = options.lockMaximized;
        // Autoload Crisp is option is enavled
        if (this.autoload) {
            this.load();
        }
    };
    Crisp.prototype.load = function () {
        var _head = document.getElementsByTagName("head");
        this.createSingletonIfNecessary();
        // Prevents from loading Crisp twice
        if (this.isCrispInjected()) {
            return;
        }
        if (!this.websiteId) {
            throw new Error("websiteId must be set before loading Crisp");
        }
        if (!_head || !_head[0]) {
            return this.deferredLoading();
        }
        window.CRISP_WEBSITE_ID = this.websiteId;
        window.CRISP_RUNTIME_CONFIG = {};
        if (this.tokenId) {
            window.CRISP_TOKEN_ID = this.tokenId;
        }
        if (this.sessionMerge) {
            window.CRISP_RUNTIME_CONFIG.session_merge = true;
        }
        if (this.lockFullview) {
            window.CRISP_RUNTIME_CONFIG.lock_full_view = true;
        }
        if (this.lockMaximized) {
            window.CRISP_RUNTIME_CONFIG.lock_maximized = true;
        }
        if (this.cookieDomain) {
            window.CRISP_COOKIE_DOMAIN = this.cookieDomain;
        }
        if (this.cookieExpire) {
            window.CRISP_COOKIE_EXPIRE = this.cookieExpire;
        }
        var _script = document.createElement("script");
        _script.src = "https://client.crisp.chat/l.js";
        _script.async = true;
        _head[0].appendChild(_script);
        this.injected = true;
    };
    Crisp.prototype.setTokenId = function (tokenId) {
        this.tokenId = tokenId;
    };
    Crisp.prototype.setZIndex = function (zIndex) {
        this.createSingletonIfNecessary();
        window.$crisp.push(["config", "container:index", [zIndex]]);
    };
    Crisp.prototype.setColorTheme = function (color) {
        this.createSingletonIfNecessary();
        window.$crisp.push(["config", "color:theme", [color]]);
    };
    Crisp.prototype.setHideOnAway = function (enabled) {
        this.createSingletonIfNecessary();
        window.$crisp.push(["config", "hide:on:away", [enabled]]);
    };
    Crisp.prototype.setHideOnMobile = function (enabled) {
        this.createSingletonIfNecessary();
        window.$crisp.push(["config", "hide:on:mobile", [enabled]]);
    };
    Crisp.prototype.setPosition = function (position) {
        this.createSingletonIfNecessary();
        $crisp.push(["config", "position:reverse", [position === ChatboxPosition.Left]]);
    };
    Crisp.prototype.setAvailabilityTooltip = function (enabled) {
        this.createSingletonIfNecessary();
        window.$crisp.push(["config", "availability:tooltip", [enabled]]);
    };
    Crisp.prototype.setVacationMode = function (enabled) {
        this.createSingletonIfNecessary();
        window.$crisp.push(["config", "hide:vacation", [enabled]]);
    };
    Crisp.prototype.muteSound = function (mute) {
        this.createSingletonIfNecessary();
        window.$crisp.push(["config", "sound:mute", [mute]]);
    };
    Crisp.prototype.toggleOperatorCount = function (enabled) {
        this.createSingletonIfNecessary();
        window.$crisp.push(["config", "show:operator:count", [enabled]]);
    };
    Crisp.prototype.createSingletonIfNecessary = function () {
        // Assigns $crisp singleton
        if (window.$crisp === undefined) {
            window.$crisp = [];
        }
    };
    Crisp.prototype.autoInjectIfNecessasy = function () {
        if (!this.isCrispInjected()) {
            this.load();
        }
    };
    Crisp.prototype.isCrispInjected = function () {
        return this.injected === true || (window.$crisp && window.$crisp.is);
    };
    Crisp.prototype.deferredLoading = function () {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            _this.load();
        });
    };
    return Crisp;
}());
var singleton = new Crisp();

export { singleton as Crisp, Crisp as CrispClass };
//# sourceMappingURL=crisp.esm.js.map
