const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/db/database');
 //const User = require('./src/model/User');
/// const Post = require('./src/model/Post');
const userRouter = require('./src/routes/user');
const postRouter = require('./src/routes/post');


/**Initializing Express Framework */
const app = express();

/**Connect Database */
connectDB();


const PORT =5001;

/**Adding Middlewares */
app.use(bodyParser.json());


/**ROutes */
app.use(userRouter);
app.use(postRouter);


/**Basic route */
app.get('/', (req, res) => {
    res.send('WELCOME TO MICRO BLOG API')
});

app.listen(PORT, () => {
    console.log(`Server running on port $ https://localhost${PORT}`);
});