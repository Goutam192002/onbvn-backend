import request from 'supertest';
import { describe } from "mocha";
import server from '../index';
import { expect } from 'chai';

describe('Server API', () => {
  it('returns a hello world message on hitting index', () => {
    request(server)
      .get('/')
      .expect(200, (err, res) => {
        expect(res.body).contains('Hello World')
      })
  })
});
