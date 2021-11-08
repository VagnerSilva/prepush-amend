import { commandSync } from 'execa';
import { Settings } from './config/settings';

const { stdout } = commandSync('git add .', {});
const settings = new Settings();

console.log(stdout.split('\n'));

//'git', ['ls-files', '.', '--exclude-standard', '--others', '-m']
