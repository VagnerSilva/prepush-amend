module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'build', 'docs', 'refactor', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking'],
  scopes: ['conf', 'test', 'git', 'prepush'],
  types: {
    build: {
      description:
        'Alterações nas configurações, dependência, atualizações, tarefas de automação, etc.',
      emoji: '👷',
      value: 'build',
    },
    docs: {
      description: 'Documentação',
      emoji: '📚',
      value: 'docs',
    },
    feat: {
      description: 'Nova funcionalidade',
      emoji: '⭐',
      value: 'feat',
    },
    fix: {
      description: 'Correção de bugs',
      emoji: '🚑️',
      value: 'fix',
    },
    perf: {
      description: 'Melhoraria de performance',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description:
        'Mudança de código que não corrige um bug nem adiciona um recurso',
      emoji: '💡',
      value: 'refactor',
    },
    test: {
      description: 'Adição ou correção de teste',
      emoji: '🧪',
      value: 'test',
    },
  },
};
