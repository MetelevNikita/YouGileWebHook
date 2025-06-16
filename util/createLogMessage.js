import fs from 'fs';



export const createLogs = async (message) => {

    try {

        console.log('Creating logs');

        const currentPath = process.cwd() + '/logs';
        console.log(currentPath)

        const date = new Date();
        const currentDate = date.toLocaleDateString().toString().replace(/\//g, '-');
        console.log(currentDate)
        const currentTime = date.toLocaleTimeString();


        if  (!fs.existsSync(`${currentPath}/Log_${currentDate}.log`)){
            console.log('File does not exist')
            fs.writeFileSync(`${currentPath}/Log_${currentDate}.log`, `Started at ${currentTime}\n`);
        }

        fs.appendFileSync(`${currentPath}/Log_${currentDate}.log`, `${currentTime} \t ${message}\n`);
        
    } catch (error) {
        console.log(error);
    }

}