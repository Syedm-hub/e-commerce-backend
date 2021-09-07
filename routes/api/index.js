const router = require("express").Router();
const categoryRoutes = require("../../routes/api/category-routes");
const productRoutes = require("../../routes/api/product-routes");
const tagRoutes = require("../../routes/api/tag-routes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
