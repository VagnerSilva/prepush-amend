import { command } from 'execa';
import * as Listr from 'listr';
import { ListrTask } from 'listr';
import { Git } from '../gitcommand/command';

export class Task {
  private _Listr;
  private _exe;
  private _git;

  constructor() {
    this._Listr = Listr.default;
    this._exe = command;
    this._git = new Git();
  }

  prepare(): ListrTask<any> {
    return {
      title: 'Preparing...',
      task: () => 'starting...',
    };
  }

  execute(tasks: string[]): ListrTask<any> {
    const taskList: ListrTask<any>[] = tasks.map((value) => {
      return {
        title: value,
        task: (ctx, task) => this._exe(value),
      };
    });

    return {
      title: 'Executing tasks...',
      task: () => {
        return new this._Listr(taskList);
      },
    };
  }

  checkStaged(): ListrTask<any> {
    let cb: any;
    if (this._git.isUnstaged()) {
      cb = () => {
        this._git.addAll();
        this._git.amend();
      };
    } else {
      cb = () => 'ok';
    }
    return {
      title: 'Check updates...',
      task: () => cb,
    };
  }
}
