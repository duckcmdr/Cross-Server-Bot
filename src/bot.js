'use strict';

const { Client } = require('eris');
const config = require('../config');

exports.bot = new Client(config.token, {
    defaultImageFormat: 'png',
    defaultImageSize: 1024,
    autoreconnect: true,
    messageLimit: 25,
} );

