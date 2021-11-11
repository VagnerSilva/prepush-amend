module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        'changelogFile': 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  branches: ['main', { name: 'beta', prerelease: true }],
};
