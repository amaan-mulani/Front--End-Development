import http from "http";
let server= http.createServer((req, res) => {
    if(req.url==='/'){
    res.write("Server has started !");
    res.end();
    }
    else if(req.url==='/mobile'){
        res.write("Mobile URL");
        res.end();
    }
    else if(req.url==='/laptop'){
        res.write("Laptop URL");
        res.end();
    }
    
});
server.listen(9999,()=>{
    console.log("Server is running sucessfully");
});