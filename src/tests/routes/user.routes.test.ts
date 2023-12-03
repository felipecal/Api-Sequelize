import request from 'supertest';
import { app } from '../../index';
import { describe, expect, test } from '@jest/globals';

describe('Should test user routes', () => {
  it('Should get all Users with success', async () => {
    const res = await request(app).get('/getAllUsers');
    expect(res.status).toBe(200);
  });
});
