import { PrismaClient } from "../../generated/prisma/client.js";

// 

const prisma = new PrismaClient();

// 

const getFilmingPost = async (req, res) => {
    try {


        const filmingPost = await prisma.filmingPost.findMany()

        if (!filmingPost) {
            return res.status(404).json({error: "Filming Posts not found"})
        }

        return res.status(200).json({
            status: 200,
            message: 'filming post fetched successfully',
            data: filmingPost
        })



    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
        
    }

}


const createFilmingPost = async (req, res) => {
    try {

        const { title, executor, date_start, date_end, time_start, time_end, place, contacts, conditions, type, cloth } = await req.body
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message}) 
    }
}