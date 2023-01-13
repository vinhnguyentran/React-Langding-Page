window.QGSettings = {
   "appId": "62369f6992fb483665af",
   "debug": false,
   "personalizationEnabled": true,
   "vapidPublicKey": "BALoVMqgFg1cm6lZsnjIGT2zVWdhXFHjAsP0QOeIEllgwkWSXHy44oV-lBxet5lFlDyAwhnHxENUHbhzKkg4i2U",
   "qgendpoint": "https:///notify.html",
   "origin": "https://www.topcv.vn/",
   "inWebEnabled": false
};
if(window.qg && window.qg.queue) {
    window.qg.queue.unshift(('init', QGSettings));
}
!function(q,g,r,a,p,h,js){
    if(!q.qg){
        js=q.qg=function() {
            js.callmethod ? js.callmethod.call(js, arguments) : js.queue.push(arguments);
            js.queue = [];
        }
    }
    if(q.qg.initialized){return;}
    window.qg.queue.unshift(['init',window.QGSettings])
    p=g.createElement(r);
    p.async=!0;
    p.src=a;
    h=g.getElementsByTagName(r)[0];
    h.parentNode.insertBefore(p,h);
    q.qg.initialized = true;
}(window,document,'script','https://cdn.qgraph.io/v3/r/aiqua.js');

