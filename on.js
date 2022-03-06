function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    if(Bridge.getVariable(room, "power") === "off" && msg.indexOf("와봇") != -1 && (msg.indexOf("켜") != -1 || msg.indexOf("키") != -1)){
        var num = Math.floor(Math.random() * 2);
        if(num == 0){
            replier.reply("싫은데? ^^");
        } else if(num == 1){
            Bridge.setVariable(room, "power", "on");
            replier.reply("와봇(을)를 시작합니다.");
        }
    }
}