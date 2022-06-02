// Import express
import express from "express";
// Import Controller Product
// import {
//     getProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct
//  } from "../controllers/Product.js";

import { getRolePermissions,
         getRolePermissionsbyRoleId
        } from "../controllers/RolePermission.js";
 
 // Init express router
const router = express.Router();
 
// Route get semua product
// router.get('/products', getProducts);
// // Route get product by id
// router.get('/products/:id', getProductById);
// // Route create product baru
// router.post('/products', createProduct);
// // Route update product by id
// router.put('/products/:id', updateProduct);
// // Route delete product by id
// router.delete('/products/:id', deleteProduct);

router.get('/rolepermission', getRolePermissions);
router.post('/rolepermissionbyid', getRolePermissionsbyRoleId)
 
// export router
export default router;