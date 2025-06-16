import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import { createLogs } from "../../util/createLogMessage.js";



// confing firebase

import { app } from "../../firebase/app.js";



const db = getFirestore(app);





export const getUsersFireStore = async () => {
    try {

        let usersArr = []

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            usersArr.push(doc.data())
        });


        return usersArr;
        
    } catch (error) {
        createLogs(`Ошибка получения пользователей с Firebase - ${error.message}`)
        console.log(error)
    }
}


