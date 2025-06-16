import fetch from 'node-fetch'
import { createLogs } from '../../util/createLogMessage.js'

// 

export const createYougileHook = async (key) => {
    try {

        const responce = await fetch(process.env.WEBHOOK, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                url: process.env.WEBHOOK_URL_TEST,
                event: 'task-moved',
            })
        })

        if (!responce.ok) {
            throw new Error(`Не удалось создать вебхук Yougile - ${responce.status}`)
        }

        const hook = await responce.json()
        return hook
        
    } catch (error) {
        createLogs(`Не удалось создать вебхук Yougile - ${error.message}`)
        console.log(`Не удалось создать вебхук Yougile - ${error.message}`)
    }
}