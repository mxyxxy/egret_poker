interface BaseMsg {
	/*
	 接收消息处理
	*/
	receive(socket:egret.WebSocket):void;
	/*
	 发送消息处理
	*/
	send(socket:egret.WebSocket, msg:any):void;
	/*
	 消息解析
	*/
	decode(msg:any):any;
	/*
	 消息封装
	*/
	encode(msg:any):any;
}