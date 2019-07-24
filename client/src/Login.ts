class Login extends eui.Component implements  eui.UIComponent {

	private socket:egret.WebSocket;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		var self = this;
		

		instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent){
			if(partName == "loginBtn"){
				console.log("test");
				self.onOpenSocket();
				
			}
		});
	}

	public onOpenSocket(){
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
	}


	public onSocketOpen(){
		var cmd="Hello World"
		console.log("连接成功");
		let loginMsg = new com.user_loagin_c2s();
		loginMsg.accid = 1;
		loginMsg.ticket = "123"
		loginMsg.tstamp = 132;
		var loginUnit8Array = com.user_loagin_c2s.encode(loginMsg).finish();
	
		var loginBufferArray = new egret.ByteArray();
		for(var i=0; i<loginUnit8Array.length; i++){
			loginBufferArray.writeByte(loginUnit8Array[i]);
		}

		var buffer = new egret.ByteArray();
		buffer.writeInt(4 + loginBufferArray.length);
		buffer.writeInt(1001);
		buffer.writeBytes(loginBufferArray);
		this.socket.writeBytes(buffer);
	}

	public onReceiveMessage(e:egret.Event){
		//var msg = this.socket.readUTF();
		console.log("收到数据:");
		var buffer = new egret.ByteArray(); 
		this.socket.readBytes(buffer, 0);
		console.log(buffer.readInt());
		console.log(buffer.readInt());
		var uint8Array = new Uint8Array(buffer.length);
		var k = 0;
		for(var i=8; i<buffer.length; i++){
			uint8Array[k++] = buffer.bytes[i];
		}

		//let loginMsg = new com.user_loagin_s2c();
		let loginMsg = com.user_loagin_s2c.decode(uint8Array);
		console.log(loginMsg.accid);
	
	}

	public onSocketClose(e:egret.Event):void{
		console.log("WebSocket onSocketClose");
	}

	public onSocketError(e:egret.IOErrorEvent):void{
		console.log("WebSocket onSocketError");
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
}