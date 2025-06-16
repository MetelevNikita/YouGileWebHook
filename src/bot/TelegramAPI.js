import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

// 

import { createLogs } from './../../util/createLogMessage.js'

// 

dotenv.config();

// 

const token = process.env.TG_BOT

// 

const bot = new TelegramBot(token, {polling: true})


bot.on("message", (msg) => {
    console.log(msg)
})



export const telegramBotMessage = async (chatId, message) => {
    try {

        await bot.sendMessage(chatId, message)
        console.log('Сообщение отправлено')
        
    } catch (error) {
        createLogs(`Ошибка отправки сообщения в Телеграм Бота ${error.message}`)
        console.log(error.message)
    }
}

