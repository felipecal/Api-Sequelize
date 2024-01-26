/**
 * @swagger
 * /getAllUsers:
 *   get:
 *     tags:
 *      - User
 *     description: Retrieve a list of all users in the application.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of users
 *         schema:
 *           $ref: '#/components/schemas/User'
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
 *        required: true
 *     responses:
 *       200:
 *         description: A list of users.
 *         schema:
 *           $ref: '#/components/schemas/User'
 *       400:
 *         description: User was not found
 */
