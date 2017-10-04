import * as yargs from 'yargs';

import { RefreshMain } from '../../core/refresh/main';

export const aliases = ['r'];
export const command = 'refresh';
export const describe = 'Updates nglg folder only';
export const handler = (yargs: yargs.Argv) => {
  const refresher = new RefreshMain();
  refresher.refresh(yargs.name);
};
