var parse = require('parse-duration');
var TelegramBot = require('node-telegram-bot-api');

const TOKEN_BOT = process.env.TIMER_BOT_KEY;
const bot = new TelegramBot(TOKEN_BOT, {polling: true});

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

bot.onText(/\/timer (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const duration = parse(match[1]);

    function timerAlert() {
        const text = `Alert, Start: ${timeConverter(msg.date)}, Finished: ${timeConverter(Date.now()/1000)}`
        bot.sendMessage(chatId, text, {reply_to_message_id: msg.message_id});
    }

    setTimeout(timerAlert, duration);
});

bot.onText(/\/timer (.+) (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const duration = parse(match[1]);
    const notificationText = match[2]

    function timerAlert() {
        const text = `${notificationText}, Start: ${timeConverter(msg.date)}, Finished: ${timeConverter(Date.now()/1000)}`
        bot.sendMessage(chatId, text, {reply_to_message_id: msg.message_id});
    }

    setTimeout(timerAlert, duration);
});