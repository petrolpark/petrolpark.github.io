
gdjs.evtsExt__YSort__YSort = gdjs.evtsExt__YSort__YSort || {};

/**
 * Behavior generated from YSort
 * @class YSort
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__YSort__YSort.YSort = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
};

gdjs.evtsExt__YSort__YSort.YSort.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("YSort::YSort", gdjs.evtsExt__YSort__YSort.YSort);

// Hot-reload:
gdjs.evtsExt__YSort__YSort.YSort.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {


    return true;
}

// Properties:
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1[i].setZOrder((gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()));
}
}}

}


};

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

