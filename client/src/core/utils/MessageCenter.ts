class MessageCenter extends SingtonClass{

	private dict: any;
	private eVec: Array<MessageVo>;
	private lastRunTime: number;
	private type: number;

	public constructor(type:number) {
		super();
		this.type = type;
		this.dict = {};
		this.eVec = new Array<MessageVo>();
		this.lastRunTime = 0;
		if(this.type == 0){
			//todo 
		}
	}

	public clear(){
		this.dict = {};
		this.eVec.splice(0);
	}


	public addListener(type: string, listener: Function, listenerObj: any): void{
		var arr: Array<any> = this.dict[type];
		if(arr){
			arr = new Array<any>();
			this.dict[type] = arr;
		}
		//检查是否已经存在
		var i: number = 0;
		var len : number = arr.length;
		for(i; i<len; i++){
			if(arr[i][0] == listener && arr[i][1] == listenerObj){
				return;
			}
		}

		arr.push([listener, listenerObj]);
	}

	public removeListener(type: string, listener:Function, listenerObj: any): void{
		var arr: Array<any> = this.dict[type];
		if(arr == null){
			return;
		}
		var i: number = 0;
		var len: number = arr.length;
		for(i; i<len; i++){
			if(arr[i][0] == listener && arr[i][1] == listenerObj){
				arr.splice(i, 1);
				break;
			}
		}
		if(arr.length == 0){
			this.dict[type] = null;
			delete this.dict[type];
		}
	}

	public removeAll(listenerObj: any): void{
		var keys = Object.keys(this.dict);
		for(var i: number = 0, len = keys.length; i< len; i++){
			var type = keys[i];
			var arr: Array<any> = this.dict[type];
			for(var j=0; j<arr.length; j++){
				if(arr[j][1] == listenerObj){
					arr.splice(j, 1);
					j--;
				}
			}
			if(arr.length == 0){
				this.dict[type] = null;
				delete this.dict[type];
			}
		}
	}

	public dispath(type: string, ...param: any[]):void{
		if(this.dict[type] == null){
			return;
		}
		var vo:MessageVo = ObjectPool.pop("MessageVo");
		vo.type = type;
		vo.param = param;
		if(this.type == 0){
			this.eVec.push(vo);
		}else if(this.type == 1){
			this.dealMsg(vo);
		}else{
			console.log("type 没有定义");
		}
	}

	//to do
	private run():void{

	}

	private dealMsg(msgVo: MessageVo): void{
		var listeners: Array<any> = this.dict[msgVo.type];
		var i: number = 0;
		var len: number = listeners.length;
		var listener: Array<any> = null;
		while(i < len){
			listener = listeners[i];
			listener[0].apply(listener[1], msgVo.param);
			if(listener.length != len){
				len = listener.length;
				i--;
			}
			i++;
		}
		msgVo.dispose();
		ObjectPool.push(msgVo);
	}

	public isHasListener(type:string):boolean{
		return this.dict[type] != undefined;
	}

}

class MessageVo{
	public type: string;
	public param: any[];

	public constructor() {

	}

	public dispose() :void{
		this.type = null;
		this.param = null;
	}

}