import Command from '../../structures/Command.js'

export default new Command('start', (ctx) => {
  ctx.reply('Этот бот для игры в блекджек');
})
