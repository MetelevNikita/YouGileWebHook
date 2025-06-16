import dotenv from 'dotenv';
import fetch from 'node-fetch';

// 

dotenv.config();

// 


export const deleteAllYougileHooks = async (id, key, url) => {
    try {

        const responce = await fetch(`${process.env.WEBHOOK}/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                deleted: true,
                url: url
                })
        })

        const data = await responce.json()
        return data


        
    } catch (error) {
        console.log(error)
    }
}