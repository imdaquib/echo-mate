const express = require('express');
const connectDB = require('./config/db')
const path = require('path');
const cors = require('cors')
const PORT = process.env.PORT || 5000;

/// connect database
connectDB();

// Init Middleware
const app = express();

app.use(express.json({extended: false}));

// app.get('/', (req, res) => res.send('Api running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

// server static assets in production
// if(process.env.NODE_ENV === 'production'){
//       // set static folder
//       app.use(express.static('client/build'));

//       app.get('*', (req, res) =>{
//             res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
//       })
// }

app.use(express.json());

const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"client/build")
app.use(express.static(buildpath));

app.use(
      cors({
        "origin": "*",
      })
    );


app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`);
})