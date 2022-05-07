let express = require('express');
let app = express();
let port='3000'
app.use(express.static("public"));
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('pages/index',{nmbr:0})
})
app.post('/change/:n',(req,res)=>{
    let nmbr=req.params.n;
    res.render('partials/elements',{nmbr:nmbr}) 
})
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
 