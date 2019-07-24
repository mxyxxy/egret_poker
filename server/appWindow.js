var ws = require("nodejs-websocket")
//var loginProto = require("./simple")
var loginProto = require("./protobuf-bundles")
var AllUserData = new Array()
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("binary", function (inStream) {
        console.log("Received "+inStream)
		var data = new Buffer(0);
		inStream.on("readable", function(){
			var newData = inStream.read();
			if(newData){
				data = Buffer.concat([data,newData], data.length + newData.length);
			}
		})
		inStream.on("end", function(){
			console.log(data)
			var msgLength = data.readInt32BE();	
			var msgID = data.readInt32BE(4);
			var msgData = data.slice(8,data.length);
			var loginReqObj = loginProto.com.user_loagin_c2s.decode(msgData);
			console.log("msgLength="+msgLength );
			console.log("msgID="+msgID );	
			console.log("data="+loginReqObj);
			
			var loginSendMsg = new loginProto.com.user_loagin_s2c();
			loginSendMsg.accid = 1;
			var loginUnit8Array = loginProto.com.user_loagin_s2c.encode(loginSendMsg).finish();
			console.log(loginUnit8Array);

			var loginSendMsgBuffer = new Buffer(8 + loginUnit8Array.length);
			loginSendMsgBuffer.writeInt32BE(8 + loginUnit8Array.length);
			loginSendMsgBuffer.writeInt32BE(1002,4);
			loginSendMsgBuffer.fill(loginUnit8Array, 8);

			//var sendDataUint8Array = new Uint8Array(8 + loginUnit8Array.length);
			//sendDataUint8Array[0] = 8 + loginUnit8Array.length;
			//sendDataUint8Array[1] = 

			conn.sendBinary(loginSendMsgBuffer);
			
		})
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
        
    })
}).listen(3001)
