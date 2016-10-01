import {NextRTC} from 'nextrtc-js-client';

module.exports = (function () {
var instance;

function createInstance() {
    var object = NextRTC({
                     wsURL : 'wss://localhost:8433/signaling',
                     mediaConfig : {
                         video : true
                     },
                     peerConfig : {
                         iceServers:
                             [
                                 {urls:
                                     ["stun:stun.l.google.com:19302"]
                                  }
                             ],
                         iceTransportPolicy:'all',
                         rtcpMuxPolicy:'negotiate'
                     }
                 });
    return object;
}

return {
    getInstance: function () {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    }
};
})();