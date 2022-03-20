import fs from 'fs';
import http from 'http';
import mime from 'mime-types';
let lookup = mime.lookup;


const port = process.env.PORT || 3000;

// create a server object (Immutable)
const server = http.createServer((req, res) => 
{
    let path = req.url as string;
    if (path == "/" || path == "/home")
    {
        path = "/index.html";
    
    }

    let mime_type = lookup(path.substring(1)) as string;

    fs.readFile(__dirname + path, function(err, data)
    {
        if(err)
        {
            res.writeHead(404);
            res.end("ERROR: 404 - File Not Found! " + err.message);
            return;
        }
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, {'Content-Type': mime_type});
        res.end(data);
    })
});

// creating an event listener
server.listen(port, function() 
{
  console.log(`Server running at Port:${port}/`);
});