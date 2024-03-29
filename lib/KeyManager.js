const Configstore = require('configstore');
const pkg = require('../package.json');

class keyManager{
    constructor(){
        this.conf = new Configstore(pkg.name);
    }
    setKey(key){
        this.conf.set('apiKey',key);
        return key;
    }
    getKey(){
        const key = this.conf.get('apiKey');
        if(!key) throw new Error('no API key found: get one at https://coinlayer.com');
        return key;
    }
    deleteKey(){
        const key = this.conf.get('apiKey');
        if(!key) throw new Error('no API key found: get one at https://coinlayer.com');
        this.conf.delete('apiKey');
        return;
    }
}

module.exports = keyManager;