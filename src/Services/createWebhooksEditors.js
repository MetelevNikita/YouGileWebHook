import { getYougileCompany } from "../Functions/getYougileCompany.js";
import { getYougileKey } from "../Functions/getYougileKey.js";
import { getYouGileDestanationTask } from "../Functions/getYouGileDestanationTask.js";

// 

import { getYougileHook } from "../Functions/getYougileHook.js";
import { deleteAllYougileHooks } from "../Functions/deleteYougileHook.js";

// firestore

import { getUsersFireStore } from "../Functions/getFirebaseDB.js";

// bot

import { telegramBotMessage } from '../bot/TelegramAPI.js'

// logs

import { createLogs } from "../../util/createLogMessage.js";









const createWebHookEditors = async (req, res) => {


    try {


        const companyId = await getYougileCompany(1)
        const key = await getYougileKey(companyId)


        const title = req.body.prevData.title;
        const columnId = req.body.payload.columnId;
        const authorTask = req.body.prevData.description.split('<br />')[3]



        const destanation = await getYouGileDestanationTask(key, columnId)
        const data = await getUsersFireStore();



        const currentUserId = data.filter((user) => {
   
            const fullName = `${user.name} ${user.lastName}`
            return fullName === authorTask

        })

        console.log(currentUserId[0].tgId)


        const messageTg = `Ваша карточка на платформе YouGile с именем ${title}\n\nпередана исполнителю отдела видеомонтажа ${destanation.getBoard.title}\n\nстатус заявки ${destanation.getColumn.title}`
        console.log(messageTg)
        await telegramBotMessage(currentUserId[0].tgId, messageTg)

        res.status(200).send('DONE')

    } catch (error) {
        createLogs(`Ошибка в работе Хука - ${error.message}`)
        console.log(error.message)
        
    }
}



export { createWebHookEditors }