import { Router } from "express";

// service

import { createWebHookEditors } from "../Services/createWebhooksEditors.js";

// endpoint filming

// import { getFilming } from "../Services/FilmingPost/getFilming.js";

// endpoint users

// import { getUsers, createUser, deleteUser } from '../Services/userService.js'

// 

const router = Router();





// yougile

router.get("/yougile", (req, res) => {
    res.send('this is YougileService')
})

router.post("/yougile", createWebHookEditors)


// filming

// router.get('/filming', getFilming)

// router.get(`/filming/:id`, (req, res) => {
//     console.log(`this is GET filming with id ${req.params.id}`)
// })


// router.post('/filming', (req, res) => {
//     console.log('this is POST filming')
// })

// router.patch('/filming', (req, res) => {
//     console.log('this is PUT filming')
// })

// router.delete('/filming', (req, res) => {
//     console.log('this is DELETE filming')
// })


// users

// router.get('/users', getUsers)

// router.post('/users', createUser)

// router.delete('/users/:id', deleteUser)

// router.patch('/users/:id', (req, res) => {})



export default router