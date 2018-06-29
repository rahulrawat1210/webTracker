
//================================
//Level 1 check - for known bots
//================================

console.log(navigator.userAgent);

function botCheck1 () {
    
    //for testing purposes
    var start = Date.now();

    //List of all known bots
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

//==========================================
//Level 2 check for Selenium and PhantomJS
//==========================================

function botCheck2 () {

    //For testing 
    var start = Date.now();
    
    //==================================
    //Document Variables to check
    //==================================

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

    //==================================
    //Windows Variables to check
    //==================================

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
        //Browser is IE which does not support this check.

    } else {
        if (window['external'] && window['external'].toString() && (window['external'].toString()['indexOf']('Sequentum') != -1)) return true;

        if (window['document']['documentElement']['getAttribute']('selenium')) return true;
        if (window['document']['documentElement']['getAttribute']('webdriver')) return true;
        if (window['document']['documentElement']['getAttribute']('driver')) return true;
    }

        //======================
       // recheck protocol for phantom.js
      //============================= =-========= 
      
      
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

    //======================
    //If nothing is found
    //======================    
    console.log("check 2 passed!   time elapsed: " + (Date.now() - start) + "ms.");
    return false;
};

//=====================================
//Level 3 check for headless browsers
//=====================================

function botCheck3 () {

    //For testing
    var start = Date.now();

    //================================
    //Checking for no-window bots
    //================================

    if (window.outerWidth === 0 && window.outerHeight === 0) { 
        //headless browser
        return true;

    } else {
        console.log("widht and height check passed!");
    }

    //======================================================================================
    //Checking if Mobile Browser because plugins are not supported in mobile environment.
    //======================================================================================
        
    var isMobile = false;
    
    var platform = navigator.userAgent.toLowerCase().match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    
    console.log(platform);

    if(platform != null && platform.length !== 0 ) {
      isMobile = true;

    } else {
        console.log("not mobile browser!");
    }

    //======================================================================================
    //If the browser is not in mobile environment yet has 0 plugins then it is a bot
    //======================================================================================

    console.log(navigator.plugins);
    if(!isMobile && navigator.plugins.length === 0) {

        if(navigator.languages.length === 0) {
            console.log("you are a bot");
            return true;
        }    

    } else {
        console.log("plugins and language check passed!");
    }

    //======================================================================================
    //naviagtor.webdriver is only available in Chromium if used for bot making
    //======================================================================================
    
    if(navigator.webdriver) {
        //Chrome Headless Detected
        return true;

    } else {
        console.log("webdriver check passed!");
    }

    //=====================
    //If nothing is found
    //=====================
    console.log("check 3 passed!   time elapsed: " + (Date.now() - start) + "ms.");
    return false;
}

//=========================
//Running the mainscript
//=========================

function isBot () {
    var Bot = 1;

    if(!botCheck1()) {

        //check 2 if check 1 failed
        if(!botCheck2()) {

            //check 3 if check 2 also failed
            if(!botCheck3()) {

                //not a bot
                Bot = 0;
            }
        }
    }

    return Bot;
}

//console.log(isBot());

var isBot = isBot();
        var date = new Date();
        var h = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds();
        var url = window.location.href,
            date = date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear(),
            reslW = window.screen.availWidth,
            reslH = window.screen.availHeight,
            ref = document.referrer,
            time = h,
            res = reslW+" X "+reslH;
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        console.log(ref);
        //xhttp.open("POST", "http://web-analytics.pollin.me/insertlog", true);
        xhttp.open("POST", "http://localhost:3000/insertlog", true);
        xhttp.setRequestHeader("Content-Type", "application/json;chartset=UTF-8");
        var data = JSON.stringify({url:url, date: date, ress: res, ref: ref, time: time,S_id: id, isBot: isBot});
        xhttp.send(data);

