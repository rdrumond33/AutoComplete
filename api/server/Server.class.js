const Express = require('express');
const BodyParser =require('body-parser');
const path = require('path')

const RouterEvent =require('../controller/event.Controller');

class Server{
    constructor(){
        this.app = Express()
    }
    configiServer(port){
        this.app.use(BodyParser.urlencoded({extended:true}))
        this.app.use(BodyParser.json())
        this.app.use(Express.static(path.join(__dirname, "../../public")));
        
        this.app.get('/',(req,res)=>{
            res.render('/public/index.html')
        })
        /**Routes */
        this.app.use('/api',RouterEvent)

        this.app.listen(port,()=>{console.log(`Listen port ${port}`);
        })
    }


    start(port){this.configiServer(port)}
}

module.exports = Server