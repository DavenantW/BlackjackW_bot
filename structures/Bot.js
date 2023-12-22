import { Telegraf } from 'telegraf';

class Bot {
  constructor(token) {
    this.bot = new Telegraf(token);
  }

  async importFile(filePath) {
    return (await import(filePath))?.default;
  }
}
