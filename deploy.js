/* eslint-disable import/no-extraneous-dependencies */

const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

const env = require('dotenv').config().parsed;

const config = {
  user: env.FTP_USER, // NOTE that this was username in 1.x
  password: env.FTP_PASSWORD, // optional, prompted if none given
  host: env.FTP_HOST,
  port: env.FTP_PORT,
  localRoot: `${__dirname}/build`,
  remoteRoot: env.FTP_REMOTEROOT,
  exclude: [], // this would upload everything except dot files
  include: ['*', '.htaccess'],
  deleteRemote: true, // delete existing files at destination before uploading
};

// use with promises
ftpDeploy
  .deploy(config)
  .then(res => console.log('finished'))
  .catch(err => console.log(err));
