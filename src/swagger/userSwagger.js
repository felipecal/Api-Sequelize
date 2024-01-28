/**
 * @swagger
 * /getAllUsers:
 *   get:
 *     tags:
 *      - User
 *     description: Returns all users from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /getUser/{id}:
 *   get:
 *     tags:
 *      - User
 *     description: Get a user by id.
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: Return a user by the id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 */

/**
 * @swagger
 * /authenticateUser:
 *   post:
 *     tags:
 *      - User
 *     description: Authenticate a user by username and password.
 *     produces:
 *       - application/json
 *     requestBody:
 *       description: User credentials for authentication.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Return a boolean if the user is authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: User not found or authentication error.
 */

/**
 * @swagger
 * /validateToken:
 *   post:
 *     tags:
 *      - User
 *     description: Check if the user token is valid.
 *     produces:
 *       - application/json
 *     requestBody:
 *       description: User token for validation.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Return a boolean if the user token is valid or not.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Error in validate Token.
 */

/**
 * @swagger
 * /createUser:
 *   post:
 *     tags:
 *      - User
 *     description: Create a new User.
 *     produces:
 *       - application/json
 *     requestBody:
 *       description: Create a new user or update a user that already exists with the required fields.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Return the user that was created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some error occurred in createUser.
 */

/**
 * @swagger
 * /updateUser/{id}:
 *   put:
 *     tags:
 *      - User
 *     description: Update a User.
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *     requestBody:
 *       description: Update a user or update with the required fields.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Return the user that was updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some error occurred in updateUser.
 */

/**
 * @swagger
 * /deleteUser/{id}:
 *   delete:
 *     tags:
 *      - User
 *     description: Delete a user by id.
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: Return the id of the user that was deleted.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some error occurred in deleteUser.
 */
