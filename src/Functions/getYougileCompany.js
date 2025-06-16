import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { createLogs } from '../../util/createLogMessage.js'

// 

dotenv.config()

// 

export const getYougileCompany = async (index) => {
    try {
        const responce = await fetch(process.env.COMPANY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: process.env.LOGIN,
                password: process.env.PASSWORD
            })
        })


        if (!responce.ok) {
            createLogs(`Ошибка получения Комании YG ${error.message}`)
            throw new Error(`Ошибка получения Комании YG - ${responce.status}`);
        }


        if (typeof index !== 'number') {
            throw new Error('Неверный индекс');
        }

        const data = await responce.json()
        console.log(data.content[index].name)
        return data.content[index].id

        
    } catch (error) {
        createLogs(`Ошибка получения Комании YG ${error.message}`)
        console.log(`ОШИБКА!!! ${error}`, {status: 500})
    }
}