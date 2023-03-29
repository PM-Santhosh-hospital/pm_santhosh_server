const express = require('express')
const mongoose = require('mongoose')
const dotenv =  require('dotenv')
const morgan = require('morgan');
const cors = require('cors')
const cookieSession = require('cookie-session');
const path = require('path')
const api = require('./server/router/admin')
const blog = require('./server/router/blog')
const testinomial = require('./server/router/testinomial')
const banner = require('./server/router/banner')
const doctor = require('./server/router/doctor')



const app = express()

const PORT = process.env.PORT || 5000
dotenv.config()


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  
app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: true , limit: '50mb', parameterLimit: '500' }))

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.COOKEY_KEY] 
   }))

   app.use(express.static('public'));
   app.use('/images',express.static('images'));


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true,  }).then(() => {
    console.log('mongodb connected successfully')

    app.use('/static', express.static(path.join(__dirname, './server/uploads')))

  app.use('/api', api)

  app.use('/api', blog)

  app.use('/api', testinomial)

  app.use('/api', banner)

  app.use('/api', doctor)
  





  
    
 const server = app.listen(PORT,function(err){
  if(err){
    console.log("Error cannt run the page")
    return;
  }
  console.log("Server running ")
 });

// const io = require('./socket').init(server);
// io.on('connection', socket =>{

// console.log('connected client');


// })
}).catch(err=>console.log(err))
