import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { createLogs } from '../../util/createLogMessage.js'

// 

dotenv.config()

// 

const getYouGileColums = async (key, idColums) => {
    try {

        const responce = await fetch(`${process.env.COLUMS}/${idColums}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${key}`
            }
        })

        if (!responce.ok) {
            createLogs(`Ошибка при получении данных колнок - ${responce.status}`)
            throw new Error(`Ошибка при получении данных колнок - ${responce.status}`)
 
        }

        const data = await responce.json()
        return data

    } catch (error) {
        console.log(error);
    }
}


const getYougileBoard = async (key, idBoard) => {
    try {

        const responce = await fetch(`${process.env.BOARD}/${idBoard}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${key}`
            }
        })


        if (!responce.ok) {
            createLogs(`Ошибка при получении данных доски - ${responce.status}`)
            throw new Error(`Ошибка при получении данных доски - ${responce.status}`)
        }

        const data = await responce.json()
        return data
        
    } catch (error) {
        console.log(error)
    }
}


export const getYouGileDestanationTask = async (key, columnId) => {

    const getColumn = await getYouGileColums(key, columnId)
    const getBoard = await getYougileBoard(key, getColumn.boardId)

    return {
        getColumn,
        getBoard
    }

}


