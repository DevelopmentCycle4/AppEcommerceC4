import {DBconnection} from './db.js'
import { PORT } from './config.js';
import app from "./app.js";
//import {consultar} from './db.js'


DBconnection();

/*app.get('./prueba',(req,res)=>{
    res.send('Servidor listo')
})*/

app.listen(PORT);
    console.log('Estoy ejecutandome en puerto', PORT);


//consultar()
