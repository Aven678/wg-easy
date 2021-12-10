'use strict';

const { release } = require('./package.json');

module.exports.RELEASE = release;
module.exports.PORT = 51821;
module.exports.PASSWORD = "changeme";
module.exports.WG_PATH = '/etc/wireguard/';
module.exports.WG_HOST = "127.0.0.1";
module.exports.WG_PORT = 51820;
module.exports.WG_PERSISTENT_KEEPALIVE = 0;
module.exports.WG_DEFAULT_ADDRESS = '10.8.0.x';
module.exports.WG_DEFAULT_DNS = '1.1.1.1';
module.exports.WG_ALLOWED_IPS = '0.0.0.0/0';
module.exports.WG_NAT = true
module.exports.WAN_INTERFACE = "eth0"