import { Router } from 'express'

const hexConvert = Router()

hexConvert.post('/', (req: any, res) => {
  const { input } = req.body

  if (!input) {
    return res.sendStatus(400)
  }

  res.json({
    output: input.toString(16).toUpperCase()
  })
})

export { hexConvert }
