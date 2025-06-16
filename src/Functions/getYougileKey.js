import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { createLogs } from '../../util/createLogMessage.js'

// 

dotenv.config()

// 

export const getYougileKey = async (companyId) => {
    try {


        const responce = await fetch(process.env.KEY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: process.env.LOGIN,
                password: process.env.PASSWORD,
                companyId: companyId
            })
        })

        if (!responce.ok) {
            createLogs(`Ошибка получения ключа YouGile - ${responce.status}`)
            throw new Error(`Ошибка получения ключа YouGile ${responce.status}`)
        }

        const data = await responce.json()
        return data[0].key
        
    } catch (error) {
        console.log(`ОШИБКА!!! ${error.message}`, {status: 500})
    }
}