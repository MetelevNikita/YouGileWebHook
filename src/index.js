import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path'

// router

import router from './Router/route.js'

// components

import { getYougileCompany } from './Functions/getYougileCompany.js';
import { getYougileKey } from './Functions/getYougileKey.js';

import { getYougileHook } from './Functions/getYougileHook.js';
import { createYougileHook } from './Functions/createYougileHook.js';
import { deleteAllYougileHooks } from './Functions/deleteYougileHook.js';

// 

import { createLogs } from '../util/createLogMessage.js';

// firestore

import { getUsersFireStore } from './Functions/getFirebaseDB.js';



dotenv.config({
    path: path.join(process.cwd(), ".env")
});

// App setup

const app = express();
const server = http.createServer(app);


createLogs('\n\napp start')

// use

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

// routes

app.use('/api', router)

// 

const PORT = process.env.PORT || 4000;


// yougile

// const getDataYougile = async () => {
//     const companyId = await getYougileCompany(1)
//     const key = await getYougileKey(companyId)

//     console.log(companyId)
//     console.log(key)


//     const allHook = await getYougileHook(key);


//     allHook.map((item) => {
//         deleteAllYougileHooks(item.id, key, item.url)
//     })

//     const hook = await createYougileHook(key)
//     console.log(hook)
//     console.log(allHook)

// }

// getDataYougile()




const startServer = async () => {
    try {

        server.listen(process.env.PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
        
    } catch (error) { 
        console.log(`Server node running on PORT - ${PORT}`)
        throw new Error(error.message)
    }
}

startServer()

