!function(){"use strict";function e(){}function t(t,n){var o,r,i,l,a=E;for(l=arguments.length;l-- >2;)W.push(arguments[l]);n&&null!=n.children&&(W.length||W.push(n.children),delete n.children);while(W.length)if((r=W.pop())&&void 0!==r.pop)for(l=r.length;l--;)W.push(r[l]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&o?a[a.length-1]+=r:a===E?a=[r]:a.push(r),o=i;var u=new e;return u.nodeName=t,u.children=a,u.attributes=null==n?void 0:n,u.key=null==n?void 0:n.key,void 0!==S.vnode&&S.vnode(u),u}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,o){return t(e.nodeName,n(n({},e.attributes),o),arguments.length>2?[].slice.call(arguments,2):e.children)}function r(e){!e.__d&&(e.__d=!0)&&1==A.push(e)&&(S.debounceRendering||P)(i)}function i(){var e,t=A;A=[];while(e=t.pop())e.__d&&k(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&a(e,t.nodeName):n||e._componentConstructor===t.nodeName}function a(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function _(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function c(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===V.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,f,l):e.removeEventListener(t,f,l),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)s(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function s(e,t,n){try{e[t]=n}catch(e){}}function f(e){return this.__l[e.type](S.event&&S.event(e)||e)}function d(){var e;while(e=D.pop())S.afterMount&&S.afterMount(e),e.componentDidMount&&e.componentDidMount()}function h(e,t,n,o,r,i){H++||(R=null!=r&&void 0!==r.ownerSVGElement,j=null!=e&&!("__preactattr_"in e));var l=m(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--H||(j=!1,i||d()),l}function m(e,t,n,o,r){var i=e,l=R;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0))),i.__preactattr_=!0,i;var u=t.nodeName;if("function"==typeof u)return U(e,t,n,o);if(R="svg"===u||"foreignObject"!==u&&R,u+="",(!e||!a(e,u))&&(i=_(u,R),e)){while(e.firstChild)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0)}var p=i.firstChild,c=i.__preactattr_,s=t.children;if(null==c){c=i.__preactattr_={};for(var f=i.attributes,d=f.length;d--;)c[f[d].name]=f[d].value}return!j&&s&&1===s.length&&"string"==typeof s[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=s[0]&&(p.nodeValue=s[0]):(s&&s.length||null!=p)&&v(i,s,n,o,j||null!=c.dangerouslySetInnerHTML),g(i,t.attributes,c),R=l,i}function v(e,t,n,o,r){var i,a,u,_,c,s=e.childNodes,f=[],d={},h=0,v=0,y=s.length,g=0,w=t?t.length:0;if(0!==y)for(var C=0;C<y;C++){var x=s[C],N=x.__preactattr_,k=w&&N?x._component?x._component.__k:N.key:null;null!=k?(h++,d[k]=x):(N||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(f[g++]=x)}if(0!==w)for(var C=0;C<w;C++){_=t[C],c=null;var k=_.key;if(null!=k)h&&void 0!==d[k]&&(c=d[k],d[k]=void 0,h--);else if(!c&&v<g)for(i=v;i<g;i++)if(void 0!==f[i]&&l(a=f[i],_,r)){c=a,f[i]=void 0,i===g-1&&g--,i===v&&v++;break}c=m(c,_,n,o),u=s[C],c&&c!==e&&c!==u&&(null==u?e.appendChild(c):c===u.nextSibling?p(u):e.insertBefore(c,u))}if(h)for(var C in d)void 0!==d[C]&&b(d[C],!1);while(v<=g)void 0!==(c=f[g--])&&b(c,!1)}function b(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||p(e),y(e))}function y(e){e=e.lastChild;while(e){var t=e.previousSibling;b(e,!0),e=t}}function g(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||c(e,o,n[o],n[o]=void 0,R);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||c(e,o,n[o],n[o]=t[o],R)}function w(e){var t=e.constructor.name;(I[t]||(I[t]=[])).push(e)}function C(e,t,n){var o,r=I[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),T.call(o,t,n)):(o=new T(t,n),o.constructor=e,o.render=x),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.__b=r[i].__b,r.splice(i,1);break}return o}function x(e,t,n){return this.constructor(e,n)}function N(e,t,n,o,i){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===S.syncComponentUpdates&&e.base?r(e):k(e,1,i)),e.__r&&e.__r(e))}function k(e,t,o,r){if(!e.__x){var i,l,a,_=e.props,p=e.state,c=e.context,s=e.__p||_,f=e.__s||p,m=e.__c||c,v=e.base,y=e.__b,g=v||y,w=e._component,x=!1;if(v&&(e.props=s,e.state=f,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(_,p,c)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(_,p,c),e.props=_,e.state=p,e.context=c),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!x){i=e.render(_,p,c),e.getChildContext&&(c=n(n({},c),e.getChildContext()));var U,T,M=i&&i.nodeName;if("function"==typeof M){var W=u(i);l=w,l&&l.constructor===M&&W.key==l.__k?N(l,W,1,c,!1):(U=l,e._component=l=C(M,W,c),l.__b=l.__b||y,l.__u=e,N(l,W,0,c,!1),k(l,1,o,!0)),T=l.base}else a=g,U=w,U&&(a=e._component=null),(g||1===t)&&(a&&(a._component=null),T=h(a,i,c,o||!v,g&&g.parentNode,!0));if(g&&T!==g&&l!==w){var E=g.parentNode;E&&T!==E&&(E.replaceChild(T,g),U||(g._component=null,b(g,!1)))}if(U&&L(U),e.base=T,T&&!r){var P=e,V=e;while(V=V.__u)(P=V).base=T;T._component=P,T._componentConstructor=P.constructor}}if(!v||o?D.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(s,f,m),S.afterUpdate&&S.afterUpdate(e)),null!=e.__h)while(e.__h.length)e.__h.pop().call(e);H||r||d()}}function U(e,t,n,o){var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,_=a,p=u(t);while(r&&!_&&(r=r.__u))_=r.constructor===t.nodeName;return r&&_&&(!o||r._component)?(N(r,p,3,n,o),e=r.base):(i&&!a&&(L(i),e=l=null),r=C(t.nodeName,p,n),e&&!r.__b&&(r.__b=e,l=null),N(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,b(l,!1))),e}function L(e){S.beforeUnmount&&S.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?L(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,p(t),w(e),y(t)),e.__r&&e.__r(null)}function T(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function M(e,t,n){return h(n,e,{},!1,t,!1)}var S={},W=[],E=[],P="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,V=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],D=[],H=0,R=!1,j=!1,I={};n(T.prototype,{setState:function(e,t){var o=this.state;this.__s||(this.__s=n({},o)),n(o,"function"==typeof e?e(o,this.props):e),t&&(this.__h=this.__h||[]).push(t),r(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),k(this,2)},render:function(){}});var $={h:t,createElement:t,cloneElement:o,Component:T,render:M,rerender:i,options:S};"undefined"!=typeof module?module.exports=$:self.preact=$}();
const { Component, h, render } = window.preact;

/**
 * Storage Methods
 */

function checkStorage() {
  var p = new Promise(function(resolve, reject){
      chrome.storage.local.get(function(res) {
        resolve(res)
      })
  })
  return p
}

function setStorage(obj) {
  chrome.storage.local.set(obj);
}

function setInnerHTML(el, data) {
  var element = document.getElementsByClassName(el);

  if( typeof element[0] !== 'undefined' ) {
    element[0].innerHTML = data;
  } else {
    console.log('missing element '  + el);
  }
}

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    callback(tab);
  });
}

function getHref(url) {
  var l = document.createElement("a");
  l.href = url;
  return l;
}

function buildHrefMeta(url) {
  return {
    favicon: url.favIconUrl,
    title: url.title
  }
}

function formatCache(data) {
  let ordered = [];
  Object.keys(data).map(key => {
    if( data[key].meta.favicon ) {
      ordered.push({
        title: key.replace('www.', ''),
        count: data[key].count,
        favicon: data[key].meta.favicon,
      })
    }    
  })
  ordered = ordered.sort((a, b) => {
    return a.count > b.count ? -1 : 1
  })
  return ordered;
}

function buildNewCache(url, res) {
  let href = getHref(url.url);
  if( ! res.cache ) {
    res.cache = {};
  }

  if( ! res.cache[href.hostname] ) {
    res.cache[href.hostname] = {};
    res.cache[href.hostname].meta = buildHrefMeta(url);
  }
  
  if( ! res.cache[href.hostname].count ) {
    res.cache[href.hostname].count = 1
  } else {
    res.cache[href.hostname].count = res.cache[href.hostname].count + 1
  }

  if( ! res.cache[href.hostname]['visited'] ) {
    res.cache[href.hostname]['visited'] = [];
  }
  res.cache[href.hostname]['visited'].push(url.url);

  return res  
}

class App extends Component {
  render(props, state) {
    return (
      h('div', { class: 'app' },
        h(Main, { data: formatCache(this.props.data.cache) })
      )
    );
  }
}

class Main extends Component {
  render() {
    const items = this.props.data.map( (item, idx) => (
      h('a', { id:idx, class:'table cell', href: 'https://' + item.title, target: '_blank'  }, 
        h('div', { class: 'table-cell image-cell' },
          h('img', { src: item.favicon, class: 'favicon' }),
        ),
        h('div', { class: 'table-cell' },
          h('span', { class: 'title bold' }, item.title),
        ),
        h('div', { class: 'table-cell right-align' },
          h('span', null, item.count)
        )
      )
    ));
    return (
      h('main', { class: 'clearfix' },
        h('div', { class: 'bar center' },
          h('button', { disabled: ! this.state.today, onClick: (e) => { this.setState({ today: true }) }}, 'Today')
        ),
        h('div', null, items)
      )
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  var container = document.querySelectorAll('.container')[0];
  getCurrentTabUrl((url) => {
    checkStorage().then(function(res) {
      res = buildNewCache(url, res);
      setStorage(res)
      render(h(App, { data : res }), container);
    })
  });
});
