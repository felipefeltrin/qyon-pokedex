(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],p=0,l=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-36fb946c":"949fbdde"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-36fb946c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-36fb946c":"1757eec7"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===r||p===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],p=u.getAttribute("data-href");if(p===r||p===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=s(e);var l=new Error;u=function(t){p.onerror=p.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=p;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var s=Object(r["y"])("Home");return Object(r["r"])(),Object(r["d"])(s)}var a=n("be29"),c={components:{Home:a["a"]}},s=n("6b0d"),i=n.n(s);const u=i()(c,[["render",o]]);var p=u,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d=[{path:"/",name:"Home",component:p},{path:"/pokemon",name:"PokemonDetails",component:function(){return n.e("chunk-36fb946c").then(n.bind(null,"226d"))}}],f=Object(l["a"])({history:Object(l["b"])(),routes:d}),m=f,b=n("ecee"),h=n("c074"),k=n("ad3d");b["c"].add(h["a"]);var v=r["c"](p);v.use(m),v.component("font-awesome-icon",k["a"]),v.mount("#app")},"5c67":function(e,t,n){"use strict";n("cdc7")},7629:function(e,t,n){"use strict";n("96a2")},"8bb7":function(e,t,n){},"940c":function(e,t,n){"use strict";n("99af");function r(){var e=this;this.pokeApi="https://pokeapi.co/api/v2",this.getPaginationUrl=function(t,n){return"".concat(e.pokeApi,"/pokemon/?limit=").concat(t,"&offset=").concat(n)},this.getSearchUrl=function(t){return"".concat(e.pokeApi,"/pokemon/").concat(t,"/")},this.getPokeDetailsBySpecies=function(t){return"".concat(e.pokeApi,"/pokemon-species/").concat(t,"/")},this.getPokeEvolutionChain=function(t){return"".concat(e.pokeApi,"/evolution-chain/").concat(t,"/")},this.getPokeTypeByType=function(t){return"".concat(e.pokeApi,"/type/").concat(t,"/")}}t["a"]=r},"96a2":function(e,t,n){},b2db:function(e,t,n){"use strict";n("dae2")},be29:function(e,t,n){"use strict";var r=n("7a23"),o=n("cf1c"),a=n.n(o),c={class:"main"},s=Object(r["f"])("h1",null,"Bem vindo à Pokedex",-1),i={class:"container"},u=Object(r["f"])("div",{class:"spinner"},[Object(r["f"])("img",{src:a.a,alt:""})],-1);function p(e,t,n,o,a,p){var l=Object(r["y"])("PokeList");return Object(r["r"])(),Object(r["e"])("div",c,[s,Object(r["f"])("div",i,[u,Object(r["h"])(l)])])}var l=function(e){return Object(r["u"])("data-v-ba33fe62"),e=e(),Object(r["s"])(),e},d={class:"search-container"},f=l((function(){return Object(r["f"])("input",{type:"text",placeholder:"Busca por nome ou número",class:"search-field",name:"pokemon_search"},null,-1)})),m={class:"row"};function b(e,t,n,o,a,c){var s=Object(r["y"])("font-awesome-icon"),i=Object(r["y"])("PokeCard");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",d,[f,Object(r["f"])("button",{class:"btn-search",onClick:t[0]||(t[0]=function(){return c.searchPokemon&&c.searchPokemon.apply(c,arguments)})},[Object(r["h"])(s,{icon:"search"})])]),Object(r["f"])("div",m,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(a.pokemons,(function(e){return Object(r["r"])(),Object(r["d"])(i,{key:e.id,pokemon:e},null,8,["pokemon"])})),128))]),Object(r["f"])("button",{class:"btn-load-more",onClick:t[1]||(t[1]=function(){return c.changePage&&c.changePage.apply(c,arguments)})}," Carregar Mais ")],64)}var h=n("1da1"),k=(n("96cf"),n("940c")),v=n("bc3a"),g=n.n(v),y={class:"pokeimage-container"},O=["src"],j={class:"pokemon-info"},P={class:"pokenumber-container"},w={class:"pokenumber"},x={class:"pokename-container"},C={class:"pokename"},T={class:"pokemon-types"};function S(e,t,n,o,a,c){var s=Object(r["y"])("PokeTypeList");return Object(r["r"])(),Object(r["e"])("div",{class:"pokecard",onClick:t[0]||(t[0]=function(){return c.loadPokeDetails&&c.loadPokeDetails.apply(c,arguments)})},[Object(r["f"])("div",y,[Object(r["f"])("img",{alt:"pokemon picture",src:n.pokemon.sprites.front_default,class:"pokeimage"},null,8,O)]),Object(r["f"])("div",j,[Object(r["f"])("div",P,[Object(r["f"])("span",w,"Nº "+Object(r["A"])(a.corretedPokeNumber),1)]),Object(r["f"])("div",x,[Object(r["f"])("h3",C,Object(r["A"])(a.capitalizedPokeName),1)]),Object(r["f"])("div",T,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(n.pokemon.types,(function(e){return Object(r["r"])(),Object(r["d"])(s,{pokemonType:e,key:e},null,8,["pokemonType"])})),128))])])])}n("b0c0");function _(e,t,n,o,a,c){return Object(r["r"])(),Object(r["e"])("span",{class:Object(r["n"])(a.pokemonTypeClass)},Object(r["A"])(a.capitalizedPokeType),3)}var L={name:"PokemonType",props:{pokemonType:{type:Object,required:!0}},data:function(){var e=this.pokemonType.type.name.toLowerCase(),t=e[0].toUpperCase()+e.substring(1);return{capitalizedPokeType:t,pokemonTypeClass:"poketype ".concat(e)}}},E=(n("d95e"),n("6b0d")),A=n.n(E);const N=A()(L,[["render",_],["__scopeId","data-v-237238f7"]]);var B=N,U={name:"PokemonCard",components:{PokeTypeList:B},props:{pokemon:{type:Object,required:!0}},data:function(){var e=this.pokemon.name.toLowerCase(),t=e[0].toUpperCase()+e.substring(1),n=parseInt(this.pokemon.id),r=0;return r=n<10?"00".concat(n):n<100?"0".concat(n):n,{capitalizedPokeName:t,corretedPokeNumber:r}},methods:{loadPokeDetails:function(){}}};n("7629");const R=A()(U,[["render",S],["__scopeId","data-v-187d461a"]]);var D=R,F=new k["a"],I=[],M=20,q=0,z={name:"PokemonListing",components:{PokeCard:D},data:function(){return{pokemons:I}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchPokesFromUrl();case 2:I=t.sent,Q.methods.toggleSpinner();case 4:case"end":return t.stop()}}),t)})))()},methods:{changePage:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Q.methods.toggleSpinner(),q+=M,e.next=4,this.fetchPokesFromUrl();case 4:t=e.sent,this.pokemons=t,Q.methods.toggleSpinner();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchPokesFromUrl:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.pokemons,e.next=4,g.a.get(F.getPaginationUrl(M,q)).then(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<n.data.results.length)){e.next=8;break}return o=n.data.results[r],e.next=5,g.a.get(o.url).then((function(e){t.push(e.data)}));case 5:r++,e.next=1;break;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return document.getElementsByClassName("btn-load-more")[0].classList.remove("disabled-button"),e.abrupt("return",t);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),alert("Erro ao carregar Pokémons");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),searchPokemon:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,Q.methods.toggleSpinner(),e.prev=2,n=document.getElementsByName("pokemon_search")[0].value,n=n.toLowerCase(),!n){e.next=11;break}return e.next=8,g.a.get(F.getSearchUrl(n)).then((function(e){t.pokemons=[e.data]}));case 8:document.getElementsByClassName("btn-load-more")[0].classList.add("disabled-button"),e.next=14;break;case 11:t.pokemons=[],q=0,this.fetchPokesFromUrl();case 14:e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](2),console.log(e.t0),alert("Erro ao buscar Pokémon");case 20:Q.methods.toggleSpinner();case 21:case"end":return e.stop()}}),e,this,[[2,16]])})));function t(){return e.apply(this,arguments)}return t}()}};n("b2db");const H=A()(z,[["render",b],["__scopeId","data-v-ba33fe62"]]);var J=H,K={name:"Pokedex",components:{PokeList:J},methods:{toggleSpinner:function(){var e=document.getElementsByClassName("spinner")[0],t=window.getComputedStyle(e);"hidden"===t.visibility?(e.style.visibility="visible",document.body.classList.add("is-loading")):(e.style.visibility="hidden",document.body.classList.remove("is-loading"))}}};n("5c67");const G=A()(K,[["render",p]]);var Q=t["a"]=G},cdc7:function(e,t,n){},cf1c:function(e,t,n){e.exports=n.p+"img/loading.66fb6272.gif"},d95e:function(e,t,n){"use strict";n("8bb7")},dae2:function(e,t,n){}});
//# sourceMappingURL=app.41c110f9.js.map