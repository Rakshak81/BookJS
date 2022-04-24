var express = require ('express');
const bookRouter = express.Router();
var app = express();

bookRouter.route('/books').get((req, res) => {
    const response = {hello: "This is my hello API"};

    res.json(response);
})

app.use('/api', bookRouter);

var port = process.env.PORT || 3000
app.get('/', (req,res) => {
    res.send('Welcome to rest api');
})
app.listen(port, ()=> {
    console.log(`Running on port ${port}`);
});