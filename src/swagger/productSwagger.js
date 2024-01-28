/**
 * @swagger
 * /getAllProducts:
 *   get:
 *     tags:
 *      - Product
 *     description: Returns all Products from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of Products.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /getProduct/{id}:
 *   get:
 *     tags:
 *      - Product
 *     description: Get a product by id.
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: Return a product by the id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 */

/**
 * @swagger
 * /createProduct:
 *   post:
 *     tags:
 *      - Product
 *     description: Create a new Product.
 *     produces:
 *       - application/json
 *     requestBody:
 *       description: Create a new product or update a product that already exists with the required fields.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_name:
 *                 type: string
 *               description:
 *                 type: string
 *               value:
 *                 type: number
 *                 minimum: 0.00
 *                 maximum: 10000000.00
 *               cod_user:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Return the product that was created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some error occurred in createProduct.
 */

/**
 * @swagger
 * /updateProduct/{id}:
 *   put:
 *     tags:
 *      - Product
 *     description: Update a Product.
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *     requestBody:
 *       description: Update a product or update with the required fields.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_name:
 *                 type: string
 *               description:
 *                 type: string
 *               value:
 *                 type: float
 *               cod_user:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Return the product that was updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some error occurred in updateProduct.
 */

/**
 * @swagger
 * /deleteProduct/{id}:
 *   delete:
 *     tags:
 *      - Product
 *     description: Delete a product by id.
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: Return the id of the product that was deleted.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some error occurred in deleteProduct.
 */
