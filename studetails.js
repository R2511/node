'use strict';

module.exports = function(Studetails) {
    Studetails.greet = async function(msg) {
        return 'Greetings... ' + msg;
    }

    Studetails.remoteMethod('greet', {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'greeting', type: 'string'}
    });
};
