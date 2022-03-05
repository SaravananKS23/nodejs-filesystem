//To use the inbuilt packages which is required for our project
const http = require('http');
const fs = require('fs');
//Localhost port number defined
const PORT = 8000
//To create the server, read and write the data using inbuilt packages
http.createServer((req,res)=>{
let date = new Date();
//Due to standard time stamp writing the file name is failed. So we are using the getTimeStamp() function to achieve this. Format of file name is "date([M]#-[D]##-[Y]####)-time([H]##-[M]##-[S]##).txt".
function getTimeStamp() {
        var now = new Date();
        return ("date([M]"+(now.getMonth() + 1) + '-[D]' +
                (now.getDate()) + '-[Y]' +
                now.getFullYear() + ")-time([H]" +
                now.getHours() + '-[M]' +
                ((now.getMinutes() < 10)
                 ? ("0" + now.getMinutes())
                 : (now.getMinutes())) + '-[S]' +
                ((now.getSeconds() < 10)
                 ? ("0" + now.getSeconds())
                 : (now.getSeconds()))+")");
    }
    console.log(`${getTimeStamp()}.txt`)
            res.writeHeader(200,{"Content-Type":'text/html'})
            fs.writeFile(`DateTime/${getTimeStamp()}.txt`,date,(err)=>{
        if(err)
            console.log(err)
        else
            {
                fs.readFile(`DateTime/${getTimeStamp()}.txt`,(err,d)=>{
                    res.write(d)
                            res.end()
                })
            }
    })

}).listen(PORT,()=>{
//To check whether the server is started or not.
    console.log('Server is up in', PORT)
})