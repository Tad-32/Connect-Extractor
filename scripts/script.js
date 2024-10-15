function proxy(url) {
    return proxy_url = 'https://corsproxy.io/?' + encodeURIComponent(url);
}

function punctuationStrip(data, varName) {
    var strippedString = data.replace(/\s/g, '')
    .replace("var", '')
    .replace(varName, '')
    .replace("=", '')
    .replace(/\x22/g, '')
    .replace(';', '');

console.log(strippedString);

    return strippedString;
}

function find(data, stringToFind, listNumber) {
    var el = document.createElement( 'html' );
    el.innerHTML = data;

    var lines = el.innerHTML.split('\n');

    for (var i = 1; i < lines.length; i++) { 
        if (lines[i].includes(stringToFind)) { 
            i = i + listNumber
            return lines[i]
            // window.open(URL, '_blank');
        }
    }
}

function ExtractInfo(url) {
    $.get(proxy(url), (data) => 
    {
        userName = find(data, "userName = \"", 2);
        console.log(userName)
    });
};