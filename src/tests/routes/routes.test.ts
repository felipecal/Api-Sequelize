

import request from 'supertest';
import { app } from '../../index';
import { describe, expect } from '@jest/globals';

describe('Should routes routes', () => {
  describe('Should teste User routes with success', () => {
    it('Should get all Users with success', async () => {
      const res = await request(app).get('/getAllUsers');
      expect(res.status).toBe(200);
    });

    it('Should get product by id success', async () => {
      const res = await request(app).get('/getUser/1');
      expect(res.status).toBe(200);
    });

    it('Should create a user with success', async () => {
      const res = await request(app).post('/createUser').send({
        user_name: "Teste",
        password: "Teste1234",
        email: "teste@teste.com"
      });
      expect(res.status).toBe(200);
    });

    it('Should update a user with success', async () => {
      const res = await request(app).put('/updateUser/1').send({
        user_name: "TesteUpdate",
        password: "Teste1234",
        email: "teste@teste.com"
      });
      expect(res.status).toBe(200);
    });

    it('Should delete a user with success', async () => {
      const res = await request(app).delete('/deleteUser/2');
      expect(res.status).toBe(200);
    });

  }),
    describe('Should teste User routes with success', () => {
      it('Should get all products with success', async () => {
        const res = await request(app).get('/getAllProducts');
        expect(res.status).toBe(200);
      });

      it('Should get product by id success', async () => {
        const res = await request(app).get('/getProduct/1');
        expect(res.status).toBe(200);
      });

      it('Should create a product with success', async () => {
        const res = await request(app).post('/createProduct').send({
          product_name: "Ryzen 7 7500X",
          description: "Quando você tem a arquitetura de processador de desktop mais avançada do mundo para jogadores e criadores de conteúdo, as possibilidades são infinitas.",
          value: 1200.00,
          cod_user: 1
        });
        expect(res.status).toBe(200);
      });

      it('Should update a product with success', async () => {
        const res = await request(app).put('/updateProduct/1').send({
          value: 12000.00
        });
        expect(res.status).toBe(200);
      });

      it('Should delete a product with success', async () => {
        const res = await request(app).delete('/deleteProduct/2');
        expect(res.status).toBe(200);
      });
    })
});
