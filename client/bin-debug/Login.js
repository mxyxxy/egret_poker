var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super.call(this) || this;
    }
    Login.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        var self = this;
        instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (partName == "loginBtn") {
                console.log("test");
                self.onOpenSocket();
            }
        });
    };
    Login.prototype.onOpenSocket = function () {
        this.socket = new egret.WebSocket();
        //设置数据个格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        //添加说道数据监听，收到回调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开监听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭监听，手动关闭或者服务器关闭连接回调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常监听，出现异常回调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socket.connect("127.0.0.1", 3001);
    };
    Login.prototype.onSocketOpen = function () {
        var cmd = "Hello World";
        console.log("连接成功");
        var loginMsg = new com.user_loagin_c2s();
        loginMsg.accid = 1;
        loginMsg.ticket = "123";
        loginMsg.tstamp = 132;
        var loginUnit8Array = com.user_loagin_c2s.encode(loginMsg).finish();
        var loginBufferArray = new egret.ByteArray();
        for (var i = 0; i < loginUnit8Array.length; i++) {
            loginBufferArray.writeByte(loginUnit8Array[i]);
        }
        var buffer = new egret.ByteArray();
        buffer.writeInt(4 + loginBufferArray.length);
        buffer.writeInt(1001);
        buffer.writeBytes(loginBufferArray);
        this.socket.writeBytes(buffer);
    };
    Login.prototype.onReceiveMessage = function (e) {
        //var msg = this.socket.readUTF();
        console.log("收到数据:");
        var buffer = new egret.ByteArray();
        this.socket.readBytes(buffer, 0);
        console.log(buffer.readInt());
        console.log(buffer.readInt());
        var uint8Array = new Uint8Array(buffer.length);
        var k = 0;
        for (var i = 8; i < buffer.length; i++) {
            uint8Array[k++] = buffer.bytes[i];
        }
        //let loginMsg = new com.user_loagin_s2c();
        var loginMsg = com.user_loagin_s2c.decode(uint8Array);
        console.log(loginMsg.accid);
    };
    Login.prototype.onSocketClose = function (e) {
        console.log("WebSocket onSocketClose");
    };
    Login.prototype.onSocketError = function (e) {
        console.log("WebSocket onSocketError");
    };
    Login.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Login;
}(eui.Component));
__reflect(Login.prototype, "Login", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Login.js.map