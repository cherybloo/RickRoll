const {readFile} = require('fs');
const {createServer} = require('http');
const port = 3000;

const server = createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    readFile('./main.html',(error,data)=>{
        if(error)
            res.write("Something went worng here dude",error);
        else
            res.write(data);
        res.end();
    })
});

server.listen(port,(error)=>{
    if(error)
        console.log("Hey there is error here dude",error);
    else
        console.log(`Working and listenig to port ${port}`);
});