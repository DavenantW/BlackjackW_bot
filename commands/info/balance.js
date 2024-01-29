import Command from '../../structures/Command.js'

export default new Command ("balance", async function (ctx){
  const balance = await fetch('https://blackjackw.com/balance');
  ctx.reply(`Ваш баланс: ${balance}`)
} )


