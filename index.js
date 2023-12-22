import { config } from 'dotenv';
import Bot from './structures/Bot.js';

config();

const bot = new Bot(process.env.BOT_TOKEN);
bot.start();

