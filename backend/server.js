const express=require("express")
const server=express()
const cors=require('cors')
const connectDB=require('./config/database')
const userRoutes=require('./routes/auth')
const productRoutes=require('./routes/produit')
const adminRoutes=require('./routes/user')




connectDB()


// middleware 
server.use(express.json())
server.use(cors())
server.use('/api/user',userRoutes)
server.use('/api/admin',adminRoutes)
server.use('/api/product',productRoutes)

const port =6000 

server.listen(port ,()=>console.log(`server ranning on port ${port}`))