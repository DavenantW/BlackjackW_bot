import { Telegraf } from 'telegraf';
import { glob } from 'glob';
import importFile from '../utils/importFile.js';

class Bot {
  constructor(token) {
    this.bot = new Telegraf(token);
  }

  async registerCommands() {
    const commandFiles = await glob('commands/**/*.js');
    console.log(commandFiles);
    commandFiles.forEach(async (filePath) => {
      const command = await importFile(`../${filePath}`);
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
