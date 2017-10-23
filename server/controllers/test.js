const { mysql } = require('../qcloud')


async function get(ctx, next) {
  console.log(ctx.query)
  const output = await mysql.select('*').from('v_lesson')
  ctx.state.data = output

}

module.exports = {
  get
}