import { PrismaClient } from "../../generated/prisma/client.js";
import bcrypt from "bcryptjs";

// 

const prisma = new PrismaClient();

// GET


const getUsers =  async (req, res) => {
    try {

        const users = await prisma.user.findMany()

        if (!users) return res.status(404).json({status: 404, message: 'No users found', data: []})

        return res.status(200).json({
            status: 200,
            message: 'Users fetched successfully',
            data: users
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}
// POST

const createUser = async (req, res) => {
    try {

        const { name, lastName, email, telegramId, password } = await req.body
        const hashedPassword = bcrypt.hashSync(password, 10)
        console.log(name, lastName, email, telegramId, hashedPassword)


        const user = await prisma.user.create({
            data: {
                name: name,
                lastName: lastName,
                email: email,
                telegramId: telegramId,
                password: hashedPassword
            },
            include: {
                filmingPost: true
            }
        })

        if (!user) return res.status(404).json({status: 404, message: 'User not creted'})


        res.status(200).json({status: 200, message: 'User created successfully'})
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}

// DELETE

const deleteUser = async (req, res) => {
    try {

        const userId = req.params.id

        const deleteUser = await prisma.user.delete({
            where: {
                id: parseInt(userId)
            }
        })

        if (!deleteUser) return res.status(404).json({status: 404, message: 'User not delete'})

        return res.status(200).json({status: 200, message: 'User deleted successfully'})


        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}


export { getUsers, createUser, deleteUser }