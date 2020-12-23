import {Router} from '@vaadin/router'
export function interceptNetworkRequests() {
    const fetch = window.fetch || "";
    const isFetchNative = fetch.toString().indexOf('native code') !== -1;
    if(isFetchNative) {
        window.fetch = async function () {
            const p = await fetch.apply(this, arguments);
            if (p.status==401 &&  p.url.split('/')[p.url.split('/').length-1]!='login') {
                localStorage.clear();
                 Router.go('/')
            }
            return p;
        };
    }
    return true;
}

