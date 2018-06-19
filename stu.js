'use strict';

module.exports = function(Stu) {
    Stu.greet = async function(msg) {
        return 'Greetings... ' + msg;
    }

    stu.remoteMethod('greet', {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'greeting', type: 'string'}
    });
};
