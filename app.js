const express = require("express")

const app = express()
const port = 5000

app.get('/div', (req, res) =>{
    if(parseInt(req.query.num2) === 0){ 
        return res.status(400).json({message:"No se puede dividir entre cero"})}
    else{
    let result = parseInt(req.query.num1) / parseInt(req.query.num2)
    
        
    console.log(req.query)
    return res.status(200).json({result: result})}
})

app.listen(port, () => console.log(`Escuchando el puerto ${port}`))
