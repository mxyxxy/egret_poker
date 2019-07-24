class ObjectPool {
	private static _content: any = {};
	private _objs :Array<any>;

	public constructor() {
		this._objs = new Array<any>();
	}

	public pushObj(obj:any):void{
		this._objs.push(obj);
	}

	public popObj(): any{
		if(this._objs.length > 0){
			return this._objs.pop();
		}else{
			return null;
		}
	}

	public clear():void{
		while(this._objs.length >0){
			this._objs.pop();
		}
	}

	pubic static pop(refKey: string, ...args: any[]): any{
		return null;
	}
}