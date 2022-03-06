function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    // 호출
    if(msg.indexOf("뭐였") != -1 || msg.indexOf("뭐 였") != -1){
        replier.reply(Bridge.getVariable(room, "important"));
        replier.reply("아마 이거일 듯?");
        return;
    }

    // 기억
    if(msg.indexOf("기억해") != -1 || msg.indexOf("중요") != -1){
        Bridge.setVariable(room, "important", Bridge.getVariable(room, "recent"));
    }
    Bridge.setVariable(room, "recent", msg);
}