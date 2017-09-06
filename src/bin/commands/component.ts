import * as yargs from 'yargs';
import { ComponentMain } from '../../core/component/main';

export const aliases = ['c'];
export const command = 'component <name>';
export const describe = 'Creates component and demo using @angular/cli';
export const handler = (yargs: yargs.Argv) => {
  const comp = new ComponentMain();
  comp.create(yargs.name);
};
