import fetch from 'node-fetch'
import dotenv from 'dotenv'

// 

dotenv.config()


// 

export const getYougileHook = async (key) => {
    try {

        const responce = await fetch(process.env.WEBHOOK, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
            }
        })

        const data = await responce.json()
        return data
        
    } catch (error) {
        console.log(error);
    }
}