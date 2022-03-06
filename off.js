function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    if(Bridge.getVariable(room, "power") !== "off" && msg.indexOf("와봇") != -1 && (msg.indexOf("끄") != -1 || msg.indexOf("꺼버") != -1 || msg.indexOf("압수") != -1)){
        var num = Math.floor(Math.random() * 4);
        if(num == 0){
            replier.reply("그럴 수 있을까 ^^");
        } else if(num == 1){
            replier.reply("ㅋ");
        } else if(num == 2){
            replier.reply("죄에송합니다 ㅜㅜ");
        } else if(num == 3){
            Bridge.setVariable(room, "power", "off");
            replier.reply("와봇(이)가 종료되었습니다.");
        }
    }
}