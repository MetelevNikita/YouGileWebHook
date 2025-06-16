import { Router } from "express";

// service

import { createWebHookEditors } from "../Services/createWebhooksEditors.js";


// 

const router = Router();



router.get("/yougile", (req, res) => {
    res.send('this is YougileService')
})


router.post("/yougile", createWebHookEditors)


export default router