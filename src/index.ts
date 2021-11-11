import { commandSync } from 'execa';
import * as lt from 'listr';
import { Settings } from './config/settings';
import { Task } from './task/run';
const Lintr = lt.default;

const { stdout } = commandSync('git add .', {});
const settings = new Settings();
const config = settings.loading()?.config;
const tasks = config.tasks;
const task = new Task();

const runner = new Lintr([task.prepare(), task.execute(tasks)]);
runner.run().catch((error) => {
  console.log(error.stderr);
});
