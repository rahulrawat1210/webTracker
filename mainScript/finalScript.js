//pratyush was here

console.log(navigator.userAgent);
function botCheck1 () {
    var start = Date.now();
    var botPattern = "(googlebot\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|" +
        "slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|" +
        "FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|" +
        "GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|" +
        "fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|" +
        "woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|" +
        "citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|" +
        "ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|" +
        "ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|" +
        "gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|" +
        "careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|" +
        "openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|" +
        "content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|" +
        "siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|HeadlessChrome|WeSEE:Search|niki-bot|" +
        "CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|" +
        "g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|" +
        "cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|PhantomJS|OrangeBot|memorybot|AdvBot|MegaIndex|" +
        "SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|" +
        "findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    var re = new RegExp(botPattern, 'i');
    var userAgent = navigator.userAgent;
    if (re.test(userAgent)) {
        return true;
    } else {
        console.log("check 1 passed!   time elapsed: " + (Date.now() - start) + "ms.");
        return false;
    }
}
function botCheck2 () {
    var start = Date.now();
    var documentDetectionKeys = [
        "__webdriver_evaluate",
        "__selenium_evaluate",
        "__webdriver_script_function",
        "__webdriver_script_func",
        "__webdriver_script_fn",
        "__fxdriver_evaluate",
        "__driver_unwrapped",
        "__webdriver_unwrapped",
        "__driver_evaluate",
        "__selenium_unwrapped",
        "__fxdriver_unwrapped",
    ];
    var windowDetectionKeys = [
        "_phantom",
        "__nightmare",
        "_selenium",
        "callPhantom",
        "callSelenium",
        "_Selenium_IDE_Recorder",
    ];
    for (var windowDetectionKey in windowDetectionKeys) {
        var windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];
        if (window[windowDetectionKeyValue]) {
            return true;
        }
    };
    for (var documentDetectionKey in documentDetectionKeys) {
        var documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];
        if (window['document'][documentDetectionKeyValue]) {
            return true;
        }
    };
    for (var documentKey in window['document']) {
        if (documentKey.match(/\$[a-z]dc_/) && window['document'][documentKey]['cache_']) {
            return true;
        }
    }
    var trident = navigator.userAgent.indexOf('Trident/');
    if (trident > 0) {
    } else {
        if (window['external'] && window['external'].toString() && (window['external'].toString()['indexOf']('Sequentum') != -1)) return true;
        if (window['document']['documentElement']['getAttribute']('selenium')) return true;
        if (window['document']['documentElement']['getAttribute']('webdriver')) return true;
        if (window['document']['documentElement']['getAttribute']('driver')) return true;
    }
    var global = (function () {
                return this;
            })();
            var phantom = global._phantom;
            if (!phantom && global.__karma__ && global.frameElement)
                phantom = global.parent._phantom;
            var isPhantomxx = !!phantom;
            if(isPhantomxx)
            {
                return true;
            }
    console.log("check 2 passed!   time elapsed: " + (Date.now() - start) + "ms.");
    return false;
};
function botCheck3 () {
    var start = Date.now();
    if (window.outerWidth === 0 && window.outerHeight === 0) {
        return true;
    } else {
        console.log("widht and height check passed!");
    }
    var isMobile = false;
    var platform = navigator.userAgent.toLowerCase().match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    console.log(platform);
    if(platform != null && platform.length !== 0 ) {
      isMobile = true;
    } else {
        console.log("not mobile browser!");
    }
    console.log(navigator.plugins);
    if(!isMobile && navigator.plugins.length === 0) {
        if(navigator.languages.length === 0) {
            console.log("you are a bot");
            return true;
        }
    } else {
        console.log("plugins and language check passed!");
    }
    if(navigator.webdriver) {
        return true;
    } else {
        console.log("webdriver check passed!");
    }
    console.log("check 3 passed!   time elapsed: " + (Date.now() - start) + "ms.");
    return false;
}
function isBot () {
    var Bot = 1;
    if(!botCheck1()) {
        if(!botCheck2()) {
            if(!botCheck3()) {
                Bot = 0;
            }
        }
    }
    return Bot;
}
var isBot = isBot();
        var date = new Date();
        var h = date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds();
        var mon = date.getUTCMonth()+1;
        var url = window.location.href,
            date = date.getUTCFullYear()+"-"+mon+"-"+date.getUTCDate(),
            reslW = window.screen.availWidth,
            reslH = window.screen.availHeight,
            ref = document.referrer,
            time = h,
            datetime = date+" "+time,
            res = reslW + " X " + reslH;
            if (ref == ''){
                ref = "DIRECT HIT!!";
            }
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var isAdmin = 'Frontend';
        var getLocation = function(href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };
        var l = getLocation(url);
        host = l.hostname;
        if(host === 'test-admin.buildbot.io'||host === 'admin.buildbot.io'){
            isAdmin = 'Backend';
        }
        xhttp.open("POST", "http://web-analytics.pollin.me/insertlog", true);
        //xhttp.open("POST", "http://localhost:3000/insertlog", true);
        xhttp.setRequestHeader("Content-Type", "application/json;chartset=UTF-8");
        var data = JSON.stringify({url:url, datetime: datetime, ress: res, ref: ref, S_id: id, isBot: isBot, isAdmin: isAdmin});
        xhttp.send(data);
