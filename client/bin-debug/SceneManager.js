var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.init = function (root) {
        this.root = root;
    };
    SceneManager.showScene = function (scene, par) {
        if (!this.root) {
            console.error("SceneManager not be init");
            return;
        }
        if (!scene) {
            console.error("scene is null");
            return;
        }
        if (this.root.numChildren > 0) {
            var top = this.root.getChildAt(this.root.numChildren - 1);
            top.onHide && top.onHide();
        }
        scene = new scene(par);
        scene.name = scene.constructor.name;
        scene.onShow && scene.onShow(par);
        this.root.addChild(scene);
        if (SceneManager.isAnimation) {
            scene.x = 480;
            egret.Tween.get(scene, { loop: false }).to({ x: 0, y: 0 }, 300, egret.Ease.circInOut);
        }
        console.log("SceneManager show scene:" + scene.constructor.name + "@" + scene.hasCode);
    };
    SceneManager.back = function () {
        if (this.root.numChildren > 0) {
            var perScene = this.root.getChildAt(this.root.numChildren - 1);
            if (perScene) {
                perScene.onHide && perScene.onHide();
                if (!SceneManager.isAnimation) {
                    if (this.root.numChildren > 1) {
                        var top = this.root.getChildAt(this.root.numChildren - 2);
                        console.log("SceneManger back from scene" + perScene.constructor.name + "@" + perScene.hasCode + " to" + top.constructor.name + "@" + top.hasCode);
                        top.onShow && top.onShow();
                    }
                    this.root.removeChild(perScene);
                }
                else {
                    perScene.x = 0;
                    egret.Tween.get(perScene, { loop: false }).to({ x: 800, y: 0 }, 600, egret.Ease.quadIn).call(function () {
                        perScene.x = 0;
                        this.root.removeChild(perScene);
                    }.bind(this));
                    if (this.root.numChildren > 1) {
                        var top = this.root.getChildAt(this.root.numChildren - 2);
                        top.onShow && top.onShow();
                        top.x = -480;
                        egret.Tween.get(top, { loop: false }).to({ x: 0, y: 0 }, 400, egret.Ease.backIn);
                    }
                }
                return true;
            }
            else {
                console.warn("WARN preScene is undefine");
                return false;
            }
        }
        else {
            console.warn("SceneManager Dont Back!");
            return false;
        }
    };
    SceneManager.JumpResultUI = function (p3, p1, p2, iswin, islandwin, timestr, roomid) {
        SceneManager.root.removeChildren();
        /*
        let re = new ResultUI();
        SceneManager.root.addChild(re);
        if(p1.isLandLord){
            re.showResult(p1,p2, p3, iswin, islandwin, timestr, roomid);
        }else if(p2.isLandLord){
            re.showResult(p1,p2,p3, iswin, islandwin, timestr, roomid);
        }else if(p3.isLandLord){
            re.showResult(p1,p2,p3, iswin, islandwin, timestr, roomid);
        }
        */
    };
    SceneManager.ErrorPage = function (msg, callFunction, obj) {
        SceneManager.root.removeChildren();
        /*
        let errpage:ErrorNote = new ErroeNote();
        errpage.SetErrorMsg(msg, callFun);
        SceneManager.root.addChild(errpage);
        */
    };
    SceneManager.isAnimation = false;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map