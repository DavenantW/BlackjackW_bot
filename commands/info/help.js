import Command from '../../structures/Command.js';

export default new Command('help', (ctx) => {
  ctx.reply('help');
});
