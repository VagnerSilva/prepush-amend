import { Task } from '../../src/task/run';

describe('Task', () => {
  let mockFilesUnstaged: string;
  let task: Task;
  let mockTask = {
    title: '',
    output: '',
    report: (error: Error) => {},
    skip: (message: string) => {},
    run: (ctx?: any) => Promise.resolve(),
  };
  beforeAll(() => {
    mockFilesUnstaged = `a.txt\nb.txt\nc.txt`;
    task = new Task();
    task['_exe'] = jest.fn().mockReturnValue({ stdout: mockFilesUnstaged });
    task['_git'].isUnstaged = jest.fn();
    task['_git'].addAll = jest.fn();
    task['_git'].amend = jest.fn();
  });
  test('checkStaged', () => {
    task['_git'].isUnstaged = jest.fn().mockReturnValue(false);

    const cb: any = task.checkStaged().task('', mockTask);
    expect(cb()).toBe('ok');

    task['_git'].isUnstaged = jest.fn().mockReturnValue(true);

    const cb2: any = task.checkStaged().task('', mockTask);
    expect(cb2()).not.toBe('ok');
    expect(task['_git'].addAll).toBeCalledTimes(1);
    expect(task['_git'].amend).toBeCalledTimes(1);
  });

  test('prepare', () => {
    const cb: any = task.prepare().task('', mockTask);
    expect(cb).toBe('starting...');
  });

  test('execute', () => {
    const tasks = ['pnpm lint'];
    const listr: any = task.execute(tasks).task('', mockTask);

    expect(listr['_tasks'][0].title).toBe('pnpm lint');
  });
});
