function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    let batteryLevel = Device.getBatteryLevel();
    if(batteryLevel <= 15){
        if (Bridge.getVariable(room, "alreadyCheck") !== "on") {
            Api.replyRoom("유용민,강민서,유용민,김영현", "와봇 배고픔 밥 먹여줘 @강민서 @김영현 @유용민", "com.kakao.talk");
            Bridge.setVariable(room, "alreadyCheck", "on");
        }
    }
    else {
        Bridge.setVariable(room, "alreadyCheck", "off");
    }
}