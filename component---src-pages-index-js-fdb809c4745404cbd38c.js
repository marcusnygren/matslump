(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{213:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),i=a(75),n=a(210),o=a(214),l=a(215),d=a.n(l),c=function(){var e=o.data;return s.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},u=a(209);var f=["Sallad med nektariner och mögelost","Linssallad med grapefrukt och bresaola","Linssallad med avokado","Bönsallad med fetaost och mango","Pizza Bolognese","Klassisk Lasagne","Köttfärssås med smaksatt creme fraiche","Köttfärsbiffar med bönor och blomkål","Lammfärsbullar med linsröra","Grönare köttfärssås med pasta","Lasagne XL","Kokosfisk med ris","Fisk med mango","Kokos- och saffransfisk","Wraps med ägg och rökt lax","Sesampanerad fisk med chiliyoghurt och ris","Pasta med räksås","Variant på mandelfisk","Franskinspirerade fiskbiffar","Kyckling med passionsfruktsås","Haremsgryta","Kyckling med apelsinsås och rostade rotfrukter","Kyckling i ingefära och chili","Klassisk helstekt helgkyckling med rostad potatis och gräddsås","Kycklingtacopaj","Franskinspirerad kyckling","Kycklingbullar i jordnötssås","Äggmuffins med kalkon","Bulgur med frukt, nötter, ost och korv","Makaronipudding","Pestopasta med lufttorkad skinka","Stroganoff med kryddkorv","Fläskpannkaka och stekta äpplen","Korv och currymos","Korv stroganoff med basilika","Havre- och dinkelpannkakor med bacon och äpple","Äppelspäckad korv och potatisgratäng","Falukorv med krossade rotfrukter","Risplättar med korv","Italienskinspirerad korvpanna","Pasta med salsiccia","Korvwok","Korvgryta","Grönsaksgratäng","Ärtgryta med rödbetor","Kantarellpaj","Stroganoff med bönor","Curry med sötpotatis och blomkål","Kikärtsbiffar och lingryta","Kikärtsskål","Tomatbönor","Bakade bönor med tomater och tryffelkeso","Aubergine med linser, tomat och yoghurtsås","Harissaris","Pasta med grönkål","Blandade bönor med smaksatt creme fraiche","Currypannkakor med tomatsallad","Chunky tomatsås med linser","Sötpotatispaj","Falafelwraps med myntasås","BLT-macka","Eggs Benedict","Varm laxmacka","Kikärtssoppa med smetana","Kyklingsoppa med syrlig grädde","Sötpotatissoppa","Korvsoppa","Edamamesoppa"],p=["Spenatsmoothie","Irish shake","Myntashake","Bananshake","Apelsinsallad med Keso och kli","Björnbärs- och bannayoghurt med topping","Blodgrapeglass","Marängsviss med apelsin","Sockerkaka med varma bär och grädde","Hasselnötsvåfflor med kolasås","Citronplättar","Våfflor med kardemummakräm","Hallontårta","Amerikanska pannkakor","Amerikanska kokospannkakor","Kanelpaj med vaniljglass","Risgrynsgröt med apelsinströssel","Apelsinsallad med yoghurtsås","Kesovåfflor","Plättbakelse","Fryst vaniljtårta med bjärnbär","Kolatryffelpaj","Apelsinchokladbit","Chokladbollar","Apelsinkaka med chokladtryffel","Rulltårta med apelsin och choklad","Apelsinbrownies","Kanelbullar extra","Apelsintryffelbiskvier","Chocolate chocolate chocolate chippies","Scones","Bovetebullar"],g=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={weekList:[a.renderNewRecipe(),a.renderNewRecipe(),a.renderNewRecipe(),a.renderNewRecipe(),a.renderNewRecipe(),a.renderNewRecipe(),a.renderNewRecipe()],dessert:p[Math.floor(Math.random()*p.length)]},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.renderNewRecipe=function(){return f[Math.floor(Math.random()*f.length)]},i.newRecipe=function(e){var t=[this.state.weekList[0],this.state.weekList[1],this.state.weekList[2],this.state.weekList[3],this.state.weekList[4],this.state.weekList[5],this.state.weekList[6],this.state.weekList[7]];t[e]=this.renderNewRecipe(),this.setState({weekList:t})},i.renderRecipes=function(e){var t=this;return e.map((function(e,a){return s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){return t.newRecipe(a)}},s.a.createElement("img",{width:"10px",src:"/iconfinder_icons_update_1564533.png"}))," ",e,": ",t.state.weekList[a])}))},i.render=function(){return s.a.createElement("div",null,s.a.createElement("ol",null,this.renderRecipes(["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"])),s.a.createElement("p",null,"Veckans efterrätt: ",this.renderRecipes(["Dessert"])))},r}(s.a.Component);t.default=function(){return s.a.createElement(n.a,null,s.a.createElement(u.a,{title:"Home"}),s.a.createElement("h1",null,"What's for dinner this week?"),s.a.createElement("h2",null,"Week ","32"),s.a.createElement(g,null),s.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},s.a.createElement(c,null)),s.a.createElement(i.Link,{to:"/about/"},"About"))}},214:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/matslump/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png","srcSet":"/matslump/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\\n/matslump/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\\n/matslump/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\\n/matslump/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\\n/matslump/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\\n/matslump/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},215:function(e,t,a){"use strict";a(16),a(12),a(8),a(78),a(144),a(216);var r=a(17);t.__esModule=!0,t.default=void 0;var s,i=r(a(76)),n=r(a(77)),o=r(a(142)),l=r(a(143)),d=r(a(0)),c=r(a(45)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,s=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),s&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,k=h&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,s=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:s,srcSet:r,sizes:i}),d.default.createElement("source",{media:s,srcSet:a,sizes:i}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e,t){var a=e.srcSet,r=e.srcSetWebp,s=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(s?'media="'+s+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),s);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+d+n+o+a+r+t+i+s+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,s=e.spreadProps,i=d.default.createElement(A,(0,l.default)({src:t},s));return a.length>1?d.default.createElement("picture",null,r(a),i):i},A=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,s=e.src,i=e.style,n=e.onLoad,c=e.onError,u=e.onClick,f=e.loading,p=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:s},g,{onLoad:n,onError:c,onClick:u,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));A.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&k&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,s=e.style,i=void 0===s?{}:s,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,k=e.durationFadeIn,b=e.Tag,v=e.itemProp,E=e.loading,L=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:I?1:0,transition:z?"opacity "+k+"ms":"none"},o),V="boolean"==typeof h?"lightgray":h,K={transitionDelay:k+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&K,{},o,{},f),x={title:t,alt:this.state.isVisible?"":a,style:N,className:p,itemProp:v};if(g){var T=g,j=T[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),V&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&K)}),j.base64&&d.default.createElement(C,{src:j.base64,spreadProps:x,imageVariants:T,generateSources:w}),j.tracedSVG&&d.default.createElement(C,{src:j.tracedSVG,spreadProps:x,imageVariants:T,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(T),d.default.createElement(A,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:E,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:E},j,{imageVariants:T}))}}))}if(m){var B=m,M=B[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete W.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},V&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:V,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},z&&K)}),M.base64&&d.default.createElement(C,{src:M.base64,spreadProps:x,imageVariants:B,generateSources:w}),M.tracedSVG&&d.default.createElement(C,{src:M.tracedSVG,spreadProps:x,imageVariants:B,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(B),d.default.createElement(A,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:E,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:E},M,{imageVariants:B}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});I.propTypes={resolutions:z,sizes:O,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=I;t.default=V},216:function(e,t,a){"use strict";a(217)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},217:function(e,t,a){var r=a(1),s=a(9),i=a(37),n=/"/g,o=function(e,t,a,r){var s=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(n,"&quot;")+'"'),o+">"+s+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*s((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-fdb809c4745404cbd38c.js.map