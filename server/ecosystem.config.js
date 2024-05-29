module.exports = {
  apps: [{
    name: "zl-blog",
    script: './app.js',
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: '3.109.174.227',
      ref: 'origin/master',
      repo: 'git@bitbucket.org:zebrapro/zebralearn-authors-central.git',
      path: '/home/ubuntu/zebralearn-blog/server',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
