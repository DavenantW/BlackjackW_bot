import { Telegraf } from 'telegraf';
import { glob } from 'glob';

class Bot {
  constructor(token) {
    this.bot = new Telegraf(token);
  }

  async importFile(filePath) {
    return (await import(filePath))?.default;
  }

  async registerCommands() {
    const commandFiles = await glob('commands/**/*.js');
    commandFiles.forEach(async (filePath) => {
      const command = await this.importFile(filePath);
      if (!command.name) return;
      command.initCommand(this.bot);
      console.log(command);
    });
  }

  async start() {
    await this.registerCommands();
    this.bot.launch();
    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
  }
}

export default Bot;
