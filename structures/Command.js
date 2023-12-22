class Command {
  constructor(name, run) {
    this.name = name;
    this.run = run;
  }

  initCommand(bot) {
    bot.command(this.name, this.run);
  }
}

export default Command;
