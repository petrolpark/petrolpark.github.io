gdjs.ComputerCode = {};
gdjs.ComputerCode.GDBackgroundObjects1= [];
gdjs.ComputerCode.GDBackgroundObjects2= [];
gdjs.ComputerCode.GDWindowObjects1= [];
gdjs.ComputerCode.GDWindowObjects2= [];
gdjs.ComputerCode.GDCrossObjects1= [];
gdjs.ComputerCode.GDCrossObjects2= [];
gdjs.ComputerCode.GDWindowTitleObjects1= [];
gdjs.ComputerCode.GDWindowTitleObjects2= [];

gdjs.ComputerCode.conditionTrue_0 = {val:false};
gdjs.ComputerCode.condition0IsTrue_0 = {val:false};
gdjs.ComputerCode.condition1IsTrue_0 = {val:false};
gdjs.ComputerCode.condition2IsTrue_0 = {val:false};


gdjs.ComputerCode.mapOfGDgdjs_46ComputerCode_46GDCrossObjects1Objects = Hashtable.newFrom({"Cross": gdjs.ComputerCode.GDCrossObjects1});gdjs.ComputerCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Back", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Apps", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Window", 0);
}}

}


{

gdjs.ComputerCode.GDCrossObjects1.createFrom(runtimeScene.getObjects("Cross"));

gdjs.ComputerCode.condition0IsTrue_0.val = false;
gdjs.ComputerCode.condition1IsTrue_0.val = false;
{
gdjs.ComputerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ComputerCode.condition0IsTrue_0.val ) {
{
gdjs.ComputerCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_46ComputerCode_46GDCrossObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ComputerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Window");
}}

}


};

gdjs.ComputerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ComputerCode.GDBackgroundObjects1.length = 0;
gdjs.ComputerCode.GDBackgroundObjects2.length = 0;
gdjs.ComputerCode.GDWindowObjects1.length = 0;
gdjs.ComputerCode.GDWindowObjects2.length = 0;
gdjs.ComputerCode.GDCrossObjects1.length = 0;
gdjs.ComputerCode.GDCrossObjects2.length = 0;
gdjs.ComputerCode.GDWindowTitleObjects1.length = 0;
gdjs.ComputerCode.GDWindowTitleObjects2.length = 0;

gdjs.ComputerCode.eventsList0(runtimeScene);
return;

}

gdjs['ComputerCode'] = gdjs.ComputerCode;
