import Command from '../../structures/Command.js';

const profile = {
  name: 'Artem',
  balance: 50,
  referrals: 2,
  gamesPlayed: 156,
  maxRate: 200,
  averageWin: 70,
  victory: 110,
  blackJack: 6,
};

export default new Command('profile', (ctx) => {
  try {
    ctx.replyWithHTML(`
      <b>Ваш профиль</b>

<b>Имя:</b> ${profile.name}
<b>Баланс:</b> ${profile.balance}
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
