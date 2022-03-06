function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    const isOn = Bridge.getVariable(room, "power") !== "off";
    if(isOn) {
        const URL = "https://wa-api.defcon.or.kr/getMessage";
        const DATA = {
            msg: msg,
            room: room,
            sender: sender
        };

        let responseRaw = org.jsoup.Jsoup.connect(URL).header("Content-Type", "application/json").header("Accept", "application/json").requestBody(JSON.stringify(DATA)).userAgent("Mozilla").ignoreContentType(true).post();

        let response = JSON.parse(responseRaw.text());
        if(response.RESULT.RESULT_CODE === 0){
            for (var message of response.DATA.msg.split("\\m")) {
                replier.reply(message.replace(/\\n/gi, "\n"));
            }
        }
    }
}