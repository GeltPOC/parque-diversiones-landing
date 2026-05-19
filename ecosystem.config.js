module.exports = {
  apps: [{
    name: 'parque-diversiones-landing',
    script: 'npm',
    args: 'start -- -p 3590',
    cwd: '/home/gelt/apps/parque-diversiones-landing',
    env: {
      NODE_ENV: 'production',
      PORT: 3590,
    },
  }],
}
