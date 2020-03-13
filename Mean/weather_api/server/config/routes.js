var cities  = require ('../controllers/cities.js')
module.exports = function (app){
        app.get('https://api.openweathermap.org/data/2.5/weather?id=4684904&appid=da16133e378c08dfb5962a1b2b98117c', (req, res) => {
            cities.index(req,res);
        });
        app.get('/getdallas', (req, res) => {
            cities.index(req,res);
        });
    
        app.get('/getcities', (req, res) => {  
            cities.find(req,res);
        });
        app.get('/**',(req,res)=>{
            res.sendFile('index.html', { root: './public/dist/public' });        }) 
           
    }