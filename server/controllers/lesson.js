const { mysql } = require('../qcloud')

async function getLessonList(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const output = await mysql.select('*').from('v_lesson')
    ctx.state.data = output
  } else {
    ctx.state.code = -1
  }
}

module.exports = {
  getLessonList
}