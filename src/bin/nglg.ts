import * as yargs from 'yargs';

yargs
  // help
  .help('help')
  .alias('help', 'h')

  // version
  .version()
  .alias('version', 'v')

  // usage
  .usage('Usage: $0 [blueprint] [name]')
  .example('Example: $0 component my-component-name', 'my-component-name is the name of your component')

  // executes commands based on file system directories
  .commandDir('commands')

  // only accept known parameters
  .strict()

  // epilog, aka, footer of the helper command
  .epilog('@angular/cli Library Generator')
  .argv;
