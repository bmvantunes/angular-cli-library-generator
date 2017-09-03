import * as yargs from 'yargs';

// tslint:disable-next-line:no-unused-expression
yargs
  // help
  .help('help')
  .alias('help', 'h')

  // version
  .version(() => require('../../package.json').version)
  .alias('version', 'v')

  // usage
  .usage('Usage: $0 [blueprint] [name]')
  .example('Example: $0 component my-component-name', 'my-component-name is the name of your component')

  // generate blueprint
  .command({
    command: 'generate <blueprint> <name>',
    describe: 'Generate blueprint and demo with the specified name',
    aliases: ['g', '*'],
    builder: (yargs) => yargs.default('blueprint', 'component'),
    handler: (argv) => {
      console.log(`Generating ${argv.blueprint} ${argv.name}`);
    }
  })

  // only accept known parameters
  .strict()

  // epilog, aka, footer of the helper command
  .epilog('@angular/cli Library Generator');
