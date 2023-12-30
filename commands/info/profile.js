import fetch from 'node-fetch';
import Command from '../../structures/Command.js';

export default new Command('profile', async (ctx) => {
  try {
    const profile = fetch('https://blackjackw.com/profile');

    ctx.replyWithHTML(`
      <b>Ваш профиль</b>

<b>Имя:</b> ${profile.name}
<b>Баланс:</b> ${profile.balance} фишек
<b>Рефералов:</b> ${profile.referrals}
<b>Игр сыграно:</b> ${profile.gamesPlayed}
<b>Максимальная ставка:</b> ${profile.maxRate}
<b>Средний процент побед:</b> ${profile.averageWin}%
<b>Побед:</b> ${profile.victory}
<b>BlackJack:</b> ${profile.blackJack}
      `);
  } catch (err) {
    console.log(err);
  }
});
