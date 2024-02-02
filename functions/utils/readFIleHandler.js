const fs = require('fs');

exports.writeFileDataFromWifi = (data) => {
    data = JSON.stringify(data);

    timeCreated = new Date();
    filePath = `../storage/storage
        _${timeCreated.getFullYear()}
        _${timeCreated.month()}
        _${timeCreated.getDate()}
    .json`;

    fs.appendFile(filePath, data, () => {
        if (err) {
            console.log(err);
            return false;
        }

        console.log("file was successfully recorded");
        return true;
    });
};

exports.readFileFromWiFi = () => { 
    fs.readFile("hello.txt", function(error,data){
        if(error) {  // если возникла ошибка
            return console.log(error);
        }
        console.log(data.toString());   // выводим считанные данные
    });
    console.log("Асинхронное чтение файлов");
}