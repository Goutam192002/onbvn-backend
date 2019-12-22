import request from 'supertest';
import { describe } from 'mocha';
import server from '../index';
import { expect } from 'chai';

describe('User routes', () => {
  it("should return all the users", () => {
    request(server)
      .get('/api/v1/users')
      .set('Content-Type', 'application/json')
  });
});
