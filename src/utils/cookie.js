export const getCookie = name => {
    var cookies = {};
    if (document.cookie) {
        var objs = document.cookie.split(';');
        for (var i in objs) {
            var index = objs[i].indexOf('=');
            var key = objs[i].substr(0, index);
            var value = objs[i].substr(index + 1, objs[i].length);
            cookies[key] = value;
        }
    }
    return cookies[name];
}


export const setCookie = (name, value, opts) => {
    //opts: maxAge,path,domain,secure
    if (name && value) {
        var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (opts) {
            if (opts.maxAge) {
                cookie += ';max-age=' + opts.maxAge;
            }
            if (opts.path) {
                cookie += ';max-age=' + opts.path;
            }
            if (opts.domain) {
                cookie += ';max-age=' + opts.doamin;
            }
            if (opts.secure) {
                cookie += ';max-age=' + opts.secure;
            }
        }
        document.cookie = cookie;
        return cookie;
    } else {
        return '';
    }
}



export const remove = key => {
    if (getCookie()[key]) {
        document.cookie = key + '=;max-age=0';
    }
}


export const clear = () => {
    var cookies = getCookie();
    for (var i in cookies) {
        document.cookie = cookies[i] + '=;max-age=0';
    }
}