import { Router } from 'express'
import { decimalToHex } from '../helpers/decimal-to-hex'

const hexConvert = Router()

hexConvert.post('/', (req: any, res) => {
  const { input } = req.body

  if (Number.isNaN(input)) {
    return res.sendStatus(400)
  }

  res.json({
    output: decimalToHex(input)
  })
})

export { hexConvert }
