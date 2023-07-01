import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectDB } from "./Connection/connection.js";
import register from "./Routers/register_route.js";
import login from "./Routers/Login_route.js";
import profile_user from "./Routers/Profile.js";
import cookieParser from "cookie-parser";
import logout from "./Routers/Logout.js";
import profile_info from "./Routers/Profile_Info.js";
import brandForm from "./Routers/Brand_route.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import prod_disp from "./Routers/ProductDisplay_route.js";
import Details from "./Routers/Detail_Route.js";
import All_brands from "./Routers/BrandsDisp_route.js";
import allprod from "./Routers/AllBrandProducts_route.js";
import all_products from "./Routers/Product_route.js";
import search from "./Routers/Search_route.js";
import deletepost from "./Routers/Delete_post.js";
import edit_prod from "./Routers/Edit_route.js";
import edit_profile from "./Routers/Profileedit_route.js";
import Orders from "./Routers/Orders_route.js";
import all_orders from "./Routers/GetOrders_route.js";
import order_det from "./Routers/OrderDetails_route.js";
import delete_order from "./Routers/DeleteOrder_route.js";
import all from "./Routers/ALLprods_route.js";
import editbrand_route from "./Routers/GetEdit_route.js";
import trails from "./Routers/Trail_route.js";
import path from "path";

const app = express();

app.use(express.json());

app.use(cookieParser());
    
 app.use(cors({origin:'https://pure-radiance-frontend.vercel.app',credentials:true}));
//  app.use(cors({credentials:true,origin:'http://localhost:3000'}));
// app.use(cors());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://pure-radiance-frontend.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


const __filename = fileURLToPath(import.meta.url);// configurations to do changes in ES version for dirname
const __dirname = dirname(__filename);
app.use('/Uploads',express.static(__dirname+'/Uploads')); //getting files from backend to frontend

configDotenv();   


app.use(register);

app.use(login);

app.use(profile_user);

app.use(logout);

app.use(profile_info);

app.use(brandForm);

app.use(prod_disp);

app.use(Details);    

app.use(All_brands);

app.use(allprod);

app.use(all_products);

app.use(search);

app.use(deletepost);

app.use(edit_prod)

app.use(edit_profile);

app.use(Orders);

app.use(all_orders);

app.use(order_det);

app.use(delete_order);

app.use(all);

app.use(editbrand_route);

app.use(trails);



    
const port = process.env.PORT || 5000;

connectDB();

// // Serve static files from the build directory
// app.use(express.static(path.join(__dirname, '../client/public')));

// // Handle all other routes and return the index.html file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/public/index.html'));
// });


  
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});   



