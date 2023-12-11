import request from 'supertest';
import { app } from '../../index';
import { describe, expect, test } from '@jest/globals';

describe('Should test user routes', () => {
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
    const res = await request(app).put('/updateUser/2').send({
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
});
