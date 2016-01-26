/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document),function(a,b){"object"==typeof module&&"object"==typeof exports?(module.exports=function(a){a.console=console,a.parseInt=parseInt,a.Function=Function,a.Boolean=Boolean,a.Number=Number,a.RegExp=RegExp,a.String=String,a.Object=Object,a.Array=Array,a.Error=Error,a.Date=Date,a.Math=Math;var c=a.Object();return b(a,c),c},module.factory=b):(b(a,(a.NW||(a.NW=a.Object()))&&(a.NW.Dom||(a.NW.Dom=a.Object()))),a.NW.Dom.factory=b)}(this,function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p="nwmatcher-1.3.6",q=b,r=a.document,s=r.documentElement,t=a.Array.prototype.slice,u=a.Object.prototype.toString,v="[#.:]?",w="([~*^$|!]?={1})",x="[\\x20\\t\\n\\r\\f]*",y="[\\x20]|[>+~][^>+~]",z="(?:[-+]?\\d*n)?[-+]?\\d*",A='"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"'+"|'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'",B="\\([^()]+\\)|\\(.*\\)",C="\\{[^{}]+\\}|\\{.*\\}",D="\\[[^[\\]]*\\]|\\[.*\\]",E="\\[.*\\]|\\(.*\\)|\\{.*\\}",F="(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)",G="(?:-?[_a-zA-Z]{1}[-\\w]*|[^\\x00-\\xa0]+|\\\\.+)+",H="("+A+"|"+G+")",I=x+"("+F+"*:?"+F+"+)"+x+"(?:"+w+x+H+")?"+x,J=I.replace(H,"([\\x22\\x27]*)((?:\\\\?.)*?)\\3"),K="((?:"+z+"|"+A+"|"+v+"|"+F+"+|\\["+I+"\\]|\\(.+\\)|"+x+"|,)+)",L=".+",M="(?=[\\x20\\t\\n\\r\\f]*[^>+~(){}<>])(\\*|(?:"+v+G+")|"+y+"|\\["+I+"\\]|\\("+K+"\\)|\\{"+L+"\\}|(?:,|"+x+"))+",N=M.replace(K,".*"),O=new a.RegExp(M,"g"),P=new a.RegExp("^"+x+"|"+x+"$","g"),Q=new a.RegExp("^((?!:not)("+v+"|"+G+"|\\([^()]*\\))+|\\["+I+"\\])$"),R=new a.RegExp("([^,\\\\()[\\]]+|"+D+"|"+B+"|"+C+"|\\\\.)+","g"),S=new a.RegExp("(\\["+I+"\\]|\\("+K+"\\)|\\\\.|[^\\x20\\t\\r\\n\\f>+~])+","g"),T=/[\x20\t\n\r\f]+/g,U=new a.RegExp(G+"|^$"),V=function(){var a=/ \w+\(/,b=String(Object.prototype.toString).replace(a," (");return function(c){return c&&"string"!=typeof c&&b==String(c).replace(a," (")}}(),W=V(r.hasFocus),X=V(r.querySelector),Y=V(r.getElementById),Z=V(s.getElementsByTagName),$=V(s.getElementsByClassName),_=V(s.getAttribute),aa=V(s.hasAttribute),ba=function(){var a=!1;try{a=!!t.call(r.childNodes,0)[0]}catch(b){}return a}(),ca="nextElementSibling"in s&&"previousElementSibling"in s,da=Y?function(){var b=!0,c="x"+a.String(+new a.Date),d=r.createElementNS?"a":'<a name="'+c+'">';return(d=r.createElement(d)).name=c,s.insertBefore(d,s.firstChild),b=!!r.getElementById(c),s.removeChild(d),b}():!0,ea=Z?function(){var a=r.createElement("div");return a.appendChild(r.createComment("")),!!a.getElementsByTagName("*")[0]}():!0,fa=$?function(){var a,b=r.createElement("div"),c="台北";return b.appendChild(r.createElement("span")).setAttribute("class",c+"abc "+c),b.appendChild(r.createElement("span")).setAttribute("class","x"),a=!b.getElementsByClassName(c)[0],b.lastChild.className=c,a||2!=b.getElementsByClassName(c).length}():!0,ga=_?function(){var a=r.createElement("input");return a.setAttribute("value",5),5!=a.defaultValue}():!0,ha=aa?function(){var a=r.createElement("option");return a.setAttribute("selected","selected"),!a.hasAttribute("selected")}():!0,ia=function(){var a=r.createElement("select");return a.appendChild(r.createElement("option")),!a.firstChild.selected}(),ja=/opera/i.test(u.call(a.opera)),ka=ja&&a.parseFloat(a.opera.version())>=11,la=X?function(){var b,c,d=new a.Array,e=function(a,c,d){var e=!1;b.appendChild(c);try{e=b.querySelectorAll(a).length==d}catch(f){}for(;b.firstChild;)b.removeChild(b.firstChild);return e};return b=r.implementation&&r.implementation.createDocument?r.implementation.createDocument("","",null).appendChild(r.createElement("html")).appendChild(r.createElement("head")).parentNode.appendChild(r.createElement("body")):r.createElement("div"),c=r.createElement("div"),c.innerHTML='<p id="a"></p><br>',e("p#a+*",c,0)&&d.push("\\w+#\\w+.*[+~]"),c=r.createElement("p"),c.setAttribute("class",""),e('[class^=""]',c,1)&&d.push("[*^$]=[\\x20\\t\\n\\r\\f]*(?:\"\"|'')"),c=r.createElement("option"),c.setAttribute("selected","selected"),e(":checked",c,0)&&d.push(":checked"),c=r.createElement("input"),c.setAttribute("type","hidden"),e(":enabled",c,0)&&d.push(":enabled",":disabled"),c=r.createElement("link"),c.setAttribute("href","x"),e(":link",c,1)||d.push(":link"),ha&&d.push("\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),d.length?new a.RegExp(d.join("|")):{test:function(){return!1}}}():!0,ma=new a.RegExp("(?:\\[[\\x20\\t\\n\\r\\f]*class\\b|\\."+G+")"),na=new a.RegExp(ea&&fa||ja?"^#?-?[_a-zA-Z]{1}"+F+"*$":ea?"^[.#]?-?[_a-zA-Z]{1}"+F+"*$":fa?"^(?:\\*|#-?[_a-zA-Z]{1}"+F+"*)$":"^(?:\\*|[.#]?-?[_a-zA-Z]{1}"+F+"*)$"),oa=new a.Object({a:1,A:1,area:1,AREA:1,link:1,LINK:1}),pa=new a.Object({checked:1,disabled:1,ismap:1,multiple:1,readonly:1,selected:1}),qa=new a.Object({value:"defaultValue",checked:"defaultChecked",selected:"defaultSelected"}),ra=new a.Object({action:2,cite:2,codebase:2,data:2,href:2,longdesc:2,lowsrc:2,src:2,usemap:2}),sa=new a.Object({"class":0,accept:1,"accept-charset":1,align:1,alink:1,axis:1,bgcolor:1,charset:1,checked:1,clear:1,codetype:1,color:1,compact:1,declare:1,defer:1,dir:1,direction:1,disabled:1,enctype:1,face:1,frame:1,hreflang:1,"http-equiv":1,lang:1,language:1,link:1,media:1,method:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,rel:1,rev:1,rules:1,scope:1,scrolling:1,selected:1,shape:1,target:1,text:1,type:1,valign:1,valuetype:1,vlink:1}),ta=new a.Object({accept:1,"accept-charset":1,alink:1,axis:1,bgcolor:1,charset:1,codetype:1,color:1,enctype:1,face:1,hreflang:1,"http-equiv":1,lang:1,language:1,link:1,media:1,rel:1,rev:1,target:1,text:1,type:1,vlink:1}),ua=new a.Object({}),va=new a.Object({"=":"n=='%m'","^=":"n.indexOf('%m')==0","*=":"n.indexOf('%m')>-1","|=":"(n+'-').indexOf('%m-')==0","~=":"(' '+n+' ').indexOf(' %m ')>-1","$=":"n.substr(n.length-'%m'.length)=='%m'"}),wa=new a.Object({ID:new a.RegExp("^\\*?#("+F+"+)|"+E),TAG:new a.RegExp("^("+F+"+)|"+E),CLASS:new a.RegExp("^\\*?\\.("+F+"+$)|"+E)}),xa=new a.Object({spseudos:/^\:(root|empty|(?:first|last|only)(?:-child|-of-type)|nth(?:-last)?(?:-child|-of-type)\(\s*(even|odd|(?:[-+]{0,1}\d*n\s*)?[-+]{0,1}\s*\d*)\s*\))?(.*)/i,dpseudos:/^\:(link|visited|target|active|focus|hover|checked|disabled|enabled|selected|lang\(([-\w]{2,})\)|not\(([^()]*|.*)\))?(.*)/i,attribute:new a.RegExp("^\\["+J+"\\](.*)"),children:/^[\x20\t\n\r\f]*\>[\x20\t\n\r\f]*(.*)/,adjacent:/^[\x20\t\n\r\f]*\+[\x20\t\n\r\f]*(.*)/,relative:/^[\x20\t\n\r\f]*\~[\x20\t\n\r\f]*(.*)/,ancestor:/^[\x20\t\n\r\f]+(.*)/,universal:/^\*(.*)/,id:new a.RegExp("^#("+F+"+)(.*)"),tagName:new a.RegExp("^("+F+"+)(.*)"),className:new a.RegExp("^\\.("+F+"+)(.*)")}),ya=function(b,c){var d,e=-1;if(!b.length&&a.Array.slice)return a.Array.slice(c);for(;d=c[++e];)b[b.length]=d;return b},za=function(a,b,c){for(var d,e=-1;(d=b[++e])&&!1!==c(a[a.length]=d););return a},Aa=function(a,b){var c,d=r;f=a,r=a.ownerDocument||a,(b||d!==r)&&(s=r.documentElement,o="DiV"==r.createElement("DiV").nodeName,n=o||"string"!=typeof r.compatMode?function(){var a=r.createElement("div").style;return a&&(a.width=1)&&"1px"==a.width}():r.compatMode.indexOf("CSS")<0,c=r.createElement("div"),c.appendChild(r.createElement("p")).setAttribute("class","xXx"),c.appendChild(r.createElement("p")).setAttribute("class","xxx"),l=!o&&$&&n&&(2!=c.getElementsByClassName("xxx").length||2!=c.getElementsByClassName("xXx").length),m=!o&&X&&n&&(2!=c.querySelectorAll("[class~=xxx]").length||2!=c.querySelectorAll(".xXx").length),Va.CACHING&&q.setCache(!0,r))},Ba=function(a){return a.replace(/\\([0-9a-fA-F]{1,6}\x20?|.)|([\x22\x27])/g,function(a,b,c){var d,e,f,g,h;return c?"\\"+c:/^[0-9a-fA-F]/.test(b)?(d=parseInt(b,16),0>d||d>1114111?"\\ufffd":65535>=d?(g="000"+d.toString(16),"\\u"+g.substr(g.length-4)):(d-=65536,f=(d>>10)+55296,h=d%1024+56320,e="000"+f.toString(16),g="000"+h.toString(16),"\\u"+e.substr(e.length-4)+"\\u"+g.substr(g.length-4))):/^[\\\x22\x27]/.test(b)?a:b})},Ca=function(a,b){for(var c=-1,d=null;(d=b[++c])&&d.getAttribute("id")!=a;);return d},Da=da?function(a,b){var c=null;return a=a.replace(/\\([^\\]{1})/g,"$1"),o||9!=b.nodeType?Ca(a,b.getElementsByTagName("*")):(c=b.getElementById(a))&&c.name==a&&b.getElementsByName?Ca(a,b.getElementsByName(a)):c}:function(a,b){return a=a.replace(/\\([^\\]{1})/g,"$1"),b.getElementById&&b.getElementById(a)||Ca(a,b.getElementsByTagName("*"))},Ea=function(a,b){return b||(b=r),f!==b&&Aa(b),Da(a,b)},Fa=function(b,c){var d="*"==b,e=c,f=new a.Array,g=e.firstChild;for(d||(b=b.toUpperCase());e=g;)if(e.tagName>"@"&&(d||e.tagName.toUpperCase()==b)&&(f[f.length]=e),!(g=e.firstChild||e.nextSibling))for(;!g&&(e=e.parentNode)&&e!==c;)g=e.nextSibling;return f},Ga=!ea&&ba?function(a,b){return o||11==b.nodeType?Fa(a,b):t.call(b.getElementsByTagName(a),0)}:function(b,c){var d,e=-1,f=e,g=new a.Array,h=c.getElementsByTagName(b);if("*"==b)for(;d=h[++e];)d.nodeName>"@"&&(g[++f]=d);else for(;d=h[++e];)g[e]=d;return g},Ha=function(a,b){return b||(b=r),f!==b&&Aa(b),Ga(a,b)},Ia=function(a,b){return ab('[name="'+a.replace(/\\([^\\]{1})/g,"$1")+'"]',b)},Ja=function(b,c){var d,e,f=-1,g=f,h=new a.Array,i=Ga("*",c);for(b=" "+(n?b.toLowerCase():b).replace(/\\([^\\]{1})/g,"$1")+" ";d=i[++f];)e=o?d.getAttribute("class"):d.className,e&&e.length&&(" "+(n?e.toLowerCase():e).replace(T," ")+" ").indexOf(b)>-1&&(h[++g]=d);return h},Ka=function(a,b){return fa||l||o||!b.getElementsByClassName?Ja(a,b):t.call(b.getElementsByClassName(a.replace(/\\([^\\]{1})/g,"$1")),0)},La=function(a,b){return b||(b=r),f!==b&&Aa(b),Ka(a,b)},Ma="compareDocumentPosition"in s?function(a,b){return 16==(16&a.compareDocumentPosition(b))}:"contains"in s?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},Na=ga?function(a,b){return b=b.toLowerCase(),"object"==typeof a[b]?a.attributes[b]&&a.attributes[b].value:"type"==b?a.getAttribute(b):ra[b]?a.getAttribute(b,2):pa[b]?a.getAttribute(b)?b:"false":(a=a.getAttributeNode(b))&&a.value}:function(a,b){return a.getAttribute(b)},Oa=ha?function(a,b){var c=a.getAttributeNode(b=b.toLowerCase());return qa[b]&&"value"!=b?a[qa[b]]:c&&c.specified}:function(a,b){return o?!!a.getAttribute(b):a.hasAttribute(b)},Pa=function(a){for(a=a.firstChild;a;){if(3==a.nodeType||a.nodeName>"@")return!1;a=a.nextSibling}return!0},Qa=function(a){return Oa(a,"href")&&oa[a.nodeName]},Ra=function(a,b){for(var c=1,d=b?"nextSibling":"previousSibling";a=a[d];)a.nodeName>"@"&&++c;return c},Sa=function(a,b){for(var c=1,d=b?"nextSibling":"previousSibling",e=a.nodeName;a=a[d];)a.nodeName==e&&++c;return c},Ta=function(b){if("string"==typeof b)return Va[b]||Va;if("object"!=typeof b)return!1;for(var c in b)Va[c]=!!b[c],"SIMPLENOT"==c?(cb=new a.Object,db=new a.Object,eb=new a.Object,fb=new a.Object,Va[c]||(Va.USE_QSAPI=!1)):"USE_QSAPI"==c&&(Va[c]=!!b[c]&&X);return O=new a.RegExp(Va.SIMPLENOT?M:N,"g"),!0},Ua=function(b){if(Va.VERBOSITY)throw new a.Error(b);a.console&&a.console.log&&a.console.log(b)},Va=new a.Object({CACHING:!1,SHORTCUTS:!1,SIMPLENOT:!0,UNIQUE_ID:!0,USE_HTML5:!0,USE_QSAPI:X,VERBOSITY:!0}),Wa="r[r.length]=c[k];if(f&&false===f(c[k]))break main;else continue main;",Xa=function(b,c,d){var e="string"==typeof b?b.match(R):b;if("string"==typeof c||(c=""),1==e.length)c+=Za(e[0],d?Wa:"f&&f(k);return true;",d);else for(var f,g=-1,h=new a.Object;f=e[++g];)f=f.replace(P,""),!h[f]&&(h[f]=!0)&&(c+=Za(f,d?Wa:"f&&f(k);return true;",d));return d?new a.Function("c,s,r,d,h,g,f,v","var N,n,x=0,k=-1,e;main:while((e=c[++k])){"+c+"}return r;"):new a.Function("e,s,r,d,h,g,f,v","var N,n,x=0,k=e;"+c+"return false;")},Ya="var z=v[@]||(v[@]=[]),l=z.length-1;while(l>=0&&z[l]!==e)--l;if(l!==-1){break;}z[z.length]=e;",Za=function(b,c,d){for(var e,f,g,h,i,j,k,l,m,p=0;b;){if(p++,i=b.match(xa.universal))h="";else if(i=b.match(xa.id))c="if("+(o?'s.getAttribute(e,"id")':'(e.submit?s.getAttribute(e,"id"):e.id)')+'=="'+i[1]+'"){'+c+"}";else if(i=b.match(xa.tagName))c="if(e.nodeName"+(o?'=="'+i[1]+'"':'.toUpperCase()=="'+i[1].toUpperCase()+'"')+"){"+c+"}";else if(i=b.match(xa.className))c="if((n="+(o?'s.getAttribute(e,"class")':"e.className")+')&&n.length&&(" "+'+(n?"n.toLowerCase()":"n")+".replace("+T+'," ")+" ").indexOf(" '+(n?i[1].toLowerCase():i[1])+' ")>-1){'+c+"}";else if(i=b.match(xa.attribute)){if(h=i[1].split(":"),h=2==h.length?h[1]:h[0]+"",i[2]&&!va[i[2]])return Ua('Unsupported operator in attribute selectors "'+b+'"'),"";l="false",i[2]&&i[4]&&(l=va[i[2]])?(i[4]=Ba(i[4]),sa["class"]=n?1:0,m=(o?ta:sa)[h.toLowerCase()],l=l.replace(/\%m/g,m?i[4].toLowerCase():i[4])):("!="==i[2]||"="==i[2])&&(l="n"+i[2]+'=""'),c='if(n=s.hasAttribute(e,"'+i[1]+'")){'+(i[2]?'n=s.getAttribute(e,"'+i[1]+'")':"")+(m&&i[2]?".toLowerCase();":";")+"if("+(i[2]?l:"n")+"){"+c+"}}"}else if(i=b.match(xa.adjacent))c=(d?"":Ya.replace(/@/g,p))+c,c=ca?"var N"+p+"=e;while(e&&(e=e.previousElementSibling)){"+c+"break;}e=N"+p+";":"var N"+p+'=e;while(e&&(e=e.previousSibling)){if(e.nodeName>"@"){'+c+"break;}}e=N"+p+";";else if(i=b.match(xa.relative))c=(d?"":Ya.replace(/@/g,p))+c,c=ca?"var N"+p+"=e;e=e.parentNode.firstElementChild;while(e&&e!==N"+p+"){"+c+"e=e.nextElementSibling;}e=N"+p+";":"var N"+p+"=e;e=e.parentNode.firstChild;while(e&&e!==N"+p+'){if(e.nodeName>"@"){'+c+"}e=e.nextSibling;}e=N"+p+";";else if(i=b.match(xa.children))c=(d?"":Ya.replace(/@/g,p))+c,c="var N"+p+"=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){"+c+"break;}e=N"+p+";";else if(i=b.match(xa.ancestor))c=(d?"":Ya.replace(/@/g,p))+c,c="var N"+p+"=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){"+c+"}e=N"+p+";";else if((i=b.match(xa.spseudos))&&i[1])switch(i[1]){case"root":c=i[3]?"if(e===h||s.contains(h,e)){"+c+"}":"if(e===h){"+c+"}";break;case"empty":c="if(s.isEmpty(e)){"+c+"}";break;default:if(i[1]&&i[2]){if("n"==i[2]){c="if(e!==h){"+c+"}";break}"even"==i[2]?(e=2,f=0):"odd"==i[2]?(e=2,f=1):(f=(g=i[2].match(/(-?\d+)$/))?a.parseInt(g[1],10):0,e=(g=i[2].match(/(-?\d*)n/i))?a.parseInt(g[1],10):0,g&&"-"==g[1]&&(e=-1)),l=e>1?/last/i.test(i[1])?"(n-("+f+"))%"+e+"==0":"n>="+f+"&&(n-("+f+"))%"+e+"==0":-1>e?/last/i.test(i[1])?"(n-("+f+"))%"+e+"==0":"n<="+f+"&&(n-("+f+"))%"+e+"==0":0===e?"n=="+f:-1==e?"n<="+f:"n>="+f,c="if(e!==h){n=s["+(/-of-type/i.test(i[1])?'"nthOfType"':'"nthElement"')+"](e,"+(/last/i.test(i[1])?"true":"false")+");if("+l+"){"+c+"}}"}else e=/first/i.test(i[1])?"previous":"next",g=/only/i.test(i[1])?"previous":"next",f=/first|last/i.test(i[1]),m=/-of-type/i.test(i[1])?"&&n.nodeName!=e.nodeName":'&&n.nodeName<"@"',c="if(e!==h){"+("n=e;while((n=n."+e+"Sibling)"+m+");if(!n){"+(f?c:"n=e;while((n=n."+g+"Sibling)"+m+");if(!n){"+c+"}")+"}")+"}"}else if((i=b.match(xa.dpseudos))&&i[1])switch(i[1].match(/^\w+/)[0]){case"not":if(h=i[3].replace(P,""),Va.SIMPLENOT&&!Q.test(h))return Ua('Negation pseudo-class only accepts simple selectors "'+b+'"'),"";c="compatMode"in r?"if(!"+Xa(h,"",!1)+"(e,s,r,d,h,g)){"+c+"}":'if(!s.match(e, "'+h.replace(/\x22/g,'\\"')+'",g)){'+c+"}";break;case"checked":c='if((typeof e.form!=="undefined"&&(/^(?:radio|checkbox)$/i).test(e.type)&&e.checked)'+(Va.USE_HTML5?"||(/^option$/i.test(e.nodeName)&&(e.selected||e.checked))":"")+"){"+c+"}";break;case"disabled":c='if(((typeof e.form!=="undefined"'+(Va.USE_HTML5?"":"&&!(/^hidden$/i).test(e.type)")+")||s.isLink(e))&&e.disabled===true){"+c+"}";break;case"enabled":c='if(((typeof e.form!=="undefined"'+(Va.USE_HTML5?"":"&&!(/^hidden$/i).test(e.type)")+")||s.isLink(e))&&e.disabled===false){"+c+"}";break;case"lang":l="",i[2]&&(l=i[2].substr(0,2)+"-"),c='do{(n=e.lang||"").toLowerCase();if((n==""&&h.lang=="'+i[2].toLowerCase()+'")||(n&&(n=="'+i[2].toLowerCase()+'"||n.substr(0,3)=="'+l.toLowerCase()+'"))){'+c+"break;}}while((e=e.parentNode)&&e!==g);";break;case"target":c="if(e.id==d.location.hash.slice(1)){"+c+"}";break;case"link":c="if(s.isLink(e)&&!e.visited){"+c+"}";break;case"visited":c="if(s.isLink(e)&&e.visited){"+c+"}";break;case"active":if(o)break;c="if(e===d.activeElement){"+c+"}";break;case"hover":if(o)break;c="if(e===d.hoverElement){"+c+"}";break;case"focus":if(o)break;c=W?'if(e===d.activeElement&&d.hasFocus()&&(e.type||e.href||typeof e.tabIndex=="number")){'+c+"}":"if(e===d.activeElement&&(e.type||e.href)){"+c+"}";break;case"selected":h=ia?"||(n=e.parentNode)&&n.options[n.selectedIndex]===e":"",c="if(/^option$/i.test(e.nodeName)&&(e.selected||e.checked"+h+")){"+c+"}"}else{h=!1,k=!1;for(h in ua)if((i=b.match(ua[h].Expression))&&i[1]&&(j=ua[h].Callback(i,c),c=j.source,k=j.status))break;if(!k)return Ua('Unknown pseudo-class selector "'+b+'"'),"";if(!h)return Ua('Unknown token in selector "'+b+'"'),""}if(!i)return Ua('Invalid syntax in selector "'+b+'"'),"";b=i&&i[i.length-1]}return c},$a=function(b,d,e,g){var i;if(!b||1!=b.nodeType)return Ua("Invalid element argument"),!1;if("string"!=typeof d)return Ua("Invalid selector argument"),!1;if(e&&1==e.nodeType&&!Ma(e,b))return!1;if(f!==e&&Aa(e||(e=b.ownerDocument)),d=d.replace(P,""),Va.SHORTCUTS&&(d=q.shortcuts(d,b,e)),h!=d){if(!(i=d.match(O))||i[0]!=d)return Ua('The string "'+d+'", is not a valid CSS selector'),!1;c=(i=d.match(R)).length<2,h=d,j=i}else i=j;return db[d]&&cb[d]===e||(db[d]=Xa(c?[d]:i,"",!1),cb[d]=e),db[d](b,gb,[],r,s,e,g,new a.Object)},_a=function(a,b){return ab(a,b,function(){return!1})[0]||null},ab=function(b,c,h){var j,l,n,p,u,v,w=b;if(0===arguments.length)return Ua("Not enough arguments"),[];if("string"!=typeof b)return[];if(c&&!/1|9|11/.test(c.nodeType))return Ua("Invalid or illegal context element"),[];if(f!==c&&Aa(c||(c=r)),Va.CACHING&&(p=q.loadResults(w,c,r,s)))return h?za([],p,h):p;if(!ka&&na.test(b))switch(b.charAt(0)){case"#":Va.UNIQUE_ID&&(p=(n=Da(b.slice(1),c))?[n]:[]);break;case".":p=Ka(b.slice(1),c);break;default:p=Ga(b,c)}else if(!(o||!Va.USE_QSAPI||m&&ma.test(b)||la.test(b)))try{p=c.querySelectorAll(b)}catch(x){}if(p)return p=h?za([],p,h):ba?t.call(p):ya([],p),Va.CACHING&&q.saveResults(w,c,r,p),p;if(b=b.replace(P,""),Va.SHORTCUTS&&(b=q.shortcuts(b,c)),l=i!=b){if(!(u=b.match(O))||u[0]!=b)return Ua('The string "'+b+'", is not a valid CSS selector'),[];d=(u=b.match(R)).length<2,i=b,k=u}else u=k;if(11==c.nodeType)p=Fa("*",c);else if(!o&&d){if(l&&(u=b.match(S),v=u[u.length-1],e=v.split(":not")[0],g=b.length-v.length),Va.UNIQUE_ID&&(u=e.match(wa.ID))&&(v=u[1])?(n=Da(v,c))&&($a(n,b)?(h&&h(n),p=new a.Array(n)):p=new a.Array):Va.UNIQUE_ID&&(u=b.match(wa.ID))&&(v=u[1])&&((n=Da(v,r))?"#"+v==b?(h&&h(n),p=new a.Array(n)):c=/[>+~]/.test(b)?n.parentNode:n:p=new a.Array),p)return Va.CACHING&&q.saveResults(w,c,r,p),p;if(!$&&(u=e.match(wa.TAG))&&(v=u[1])){if(0===(p=Ga(v,c)).length)return[];b=b.slice(0,g)+b.slice(g).replace(v,"*")}else if((u=e.match(wa.CLASS))&&(v=u[1])){if(0===(p=Ka(v,c)).length)return[];b=U.test(b.charAt(b.indexOf(v)-1))?b.slice(0,g)+b.slice(g).replace("."+v,""):b.slice(0,g)+b.slice(g).replace("."+v,"*")}else if((u=b.match(wa.CLASS))&&(v=u[1])){if(0===(p=Ka(v,c)).length)return[];for(j=0,els=new a.Array;p.length>j;++j)els=ya(els,p[j].getElementsByTagName("*"));p=els,b=U.test(b.charAt(b.indexOf(v)-1))?b.slice(0,g)+b.slice(g).replace("."+v,""):b.slice(0,g)+b.slice(g).replace("."+v,"*")}else if($&&(u=e.match(wa.TAG))&&(v=u[1])){if(0===(p=Ga(v,c)).length)return[];b=b.slice(0,g)+b.slice(g).replace(v,"*")}}return p||(p=/^(?:applet|object)$/i.test(c.nodeName)?c.childNodes:Ga("*",c)),fb[b]&&eb[b]===c||(fb[b]=Xa(d?[b]:u,"",!0),eb[b]=c),p=fb[b](p,gb,[],r,s,c,h,new a.Object),Va.CACHING&&q.saveResults(w,c,r,p),p},bb=function(a){return a},cb=new a.Object,db=new a.Object,eb=new a.Object,fb=new a.Object,gb=new a.Object({nthElement:Ra,nthOfType:Sa,getAttribute:Na,hasAttribute:Oa,byClass:Ka,byName:Ia,byTag:Ga,byId:Da,contains:Ma,isEmpty:Pa,isLink:Qa,select:ab,match:$a}),hb=new a.Object({prefixes:v,encoding:F,operators:w,whitespace:x,identifier:G,attributes:I,combinators:y,pseudoclass:K,pseudoparms:z,quotedvalue:A});q.ACCEPT_NODE=Wa,q.byId=Ea,q.byTag=Ha,q.byName=Ia,q.byClass=La,q.getAttribute=Na,q.hasAttribute=Oa,q.match=$a,q.first=_a,q.select=ab,q.compile=Xa,q.contains=Ma,q.configure=Ta,q.setCache=bb,q.loadResults=bb,q.saveResults=bb,q.shortcuts=bb,q.emit=Ua,q.Config=Va,q.Snapshot=gb,q.Operators=va,q.Selectors=ua,q.Tokens=hb,q.Version=p,q.registerOperator=function(a,b){va[a]||(va[a]=b)},q.registerSelector=function(b,c,d){ua[b]||(ua[b]=new a.Object({Expression:c,Callback:d}))},Aa(r,!0)}),function(a){return}(this),/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
function(a){"use strict";a.matchMedia=a.matchMedia||function(a,b){var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(a.document)}(this),/*! Respond.js v1.4.0: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),void(h=a.setTimeout(u,p));g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);