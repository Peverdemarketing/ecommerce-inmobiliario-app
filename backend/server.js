import express from  'express';
import ItemDetailContainer from './ItemDetailContainer.js'; 

const app = express();

// Importar inmuebles
app.get('/api/inmuebles',(req, res) =>{

//Tomo datos de inmuebles
    res.send(ItemDetailContainer.inmuebles);
});


const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)

});