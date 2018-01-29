var enquireJs = require('enquire.js')
export function enquireScreen(cb, str) {
    enquireJs.register(str || 'only screen and (max-width: 960px)', {
        match: function match() {
            cb && cb(true);
        },
        unmatch: function unmatch() {
            cb && cb(false);
        }
    });
}