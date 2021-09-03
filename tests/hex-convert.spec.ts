import request from 'supertest'
import app from '../src/app'
import { expect } from 'chai'

describe('Test: /api/hex-convert', () => {
  const testRequests = [
    {
      input: 10,
      output: 'A'
    },
    {
      input: 15,
      output: 'F'
    },
    {
      input: 30,
      output: '1E'
    },
    {
      input: 12232,
      output: '2FC8'
    }
  ]

  testRequests.forEach((item) => {
    const { input, output } = item

    it(`It should return ${output} when input is ${input}`, () => {
      return request(app)
        .post('/api/hex-convert')
        .send({
          input
        })
        .expect(200)
        .then((response) => {
          expect(response.body).to.deep.equal({
            output
          })
        })
    })
  })
})
