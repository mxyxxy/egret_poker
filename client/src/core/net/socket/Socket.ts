class Socket extends SingtonClass{

	private _needReconnect:boolean = false;
	private _maxReconnectCount = 10;

	private _reconnectCount:number = 0;
	private _connectFlag:boolean;
	private _host:string;
	private _post:any;
	private _socket:egret.WebSocket;
	private _msg:BaseMsg;

	public constructor() {
		super();
	}

	private addEvent(){
		this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
		this._socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
		this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this)
		this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
	}

	private removeEvent(){
		this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
		this._socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
		this._socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this)
		this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);

	}

	private onSocketOpen():void{
		this._reconnectionCount = 0;
		this._isConnecting = true;
		if(this._connectFlag && this._needReconnect){
			
		}
	}

}