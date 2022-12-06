import { exec } from 'child_process'
import { NextApiHandler } from 'next'

const login: NextApiHandler = (req, res) => {
  const { id, password } = req.query

  const _unsecureSql = `
SELECT * FROM users WHERE id=${id} AND password=${password}
`

  console.log('called sql')
  console.log(_unsecureSql)
  exec(`echo ${id} loggined >> log.txt`)

  res.status(200).json({
    message: 'OK',
    token: 'abc'
  })
}

export default login
