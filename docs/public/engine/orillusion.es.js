var on=Object.defineProperty,ln=(e,t,r)=>t in e?on(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t,r)=>(ln(e,"symbol"!=typeof t?t+"":t,r),r);const me=class{constructor(e=1,t=1,r=1,i=1){s(this,"r",0),s(this,"g",0),s(this,"b",0),s(this,"a",0),this.setTo(e,t,r,i)}convertToHDRRGB(){return this.r=this.r*Math.pow(2.4,this.a),this.g=this.g*Math.pow(2.4,this.a),this.b=this.b*Math.pow(2.4,this.a),this}unSerialized(e){return this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this}hexToRGB(e){this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255}hexToRGBA(e){this.a=(e>>24&255)/255,this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255}static random(e=1){var t=new me;return t.a=e,t.r=e*Math.random(),t.g=e*Math.random(),t.b=e*Math.random(),t}setTo(e,t,r,i){this.r=Math.max(e,0),this.g=Math.max(t,0),this.b=Math.max(r,0),this.a=Math.max(i,0)}setHex(e){if("string"!=typeof e||me.NON_HEX_CHARS.test(e)||!me.VALID_HEX_SIZE.test(e))throw new TypeError("Expected a valid hex string");let t=1;8===(e=e.replace(/^#/,"")).length&&(t=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(t=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var e=Number.parseInt(e,16),r=e>>16,i=e>>8&255,e=255&e,a=t;this.a=a,this.r=r/255,this.g=i/255,this.b=e/255}getHex(){var e=e=>{let t=(e*=255).toString(16);return t=1===t.length?"0"+t:t};return e(this.r)+e(this.g)+e(this.b)+e(this.a)}get rgb(){return[255*this.r>>>0,255*this.g>>>0,255*this.b>>>0]}set rgb(e){this.setTo(e[0]/255,e[1]/255,e[2]/255,this.a)}get rgba(){return[255*this.r>>>0,255*this.g>>>0,255*this.b>>>0,255*this.a>>>0]}set rgba(e){this.setTo(e[0]/255,e[1]/255,e[2]/255,e[3]/255)}clone(){return(new me).copyForm(this)}copyForm(e){return this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this}copyFormArray(e,t=255){return this.r=e[0]/t,this.g=e[1]/t,this.b=e[2]/t,this.a=e[3]/t,this}static hexRGBColor(e,t=null){return(t=t||new me).hexToRGB(e),t}};let b=me;s(b,"COLOR_RED",new me(1,0,0,1)),s(b,"COLOR_GREEN",new me(0,1,0,1)),s(b,"COLOR_BLUE",new me(0,0,1,1)),s(b,"COLOR_WHITE",new me(1,1,1,1)),s(b,"COLOR_0",new me),s(b,"COLOR_1",new me),s(b,"COLOR_2",new me),s(b,"HEX_CHARACTERS","a-f\\d"),s(b,"MATCH_3OR4_HEX",`#?[${me.HEX_CHARACTERS}]{3}[${me.HEX_CHARACTERS}]?`),s(b,"MATCH_6OR8_HEX",`#?[${me.HEX_CHARACTERS}]{6}([${me.HEX_CHARACTERS}]{2})?`),s(b,"NON_HEX_CHARS",new RegExp(`[^#${me.HEX_CHARACTERS}]`,"gi")),s(b,"VALID_HEX_SIZE",new RegExp(`^${me.MATCH_3OR4_HEX}$|^${me.MATCH_6OR8_HEX}$`,"i")),s(b,"PRIMARY",4149685),s(b,"PRIMARYDARK",3162015),s(b,"ACCENT",16728193),s(b,"WHITE",16777215),s(b,"IVORY",16777200),s(b,"LIGHTYELLOW",16777184),s(b,"YELLOW",16776960),s(b,"SNOW",16775930),s(b,"FLORALWHITE",16775920),s(b,"LEMONCHIFFON",16775885),s(b,"CORNSILK",16775388),s(b,"SEASHELL",16774638),s(b,"LAVENDERBLUSH",16773365),s(b,"PAPAYAWHIP",16773077),s(b,"BLANCHEDALMOND",16772045),s(b,"MISTYROSE",16770273),s(b,"BISQUE",16770244),s(b,"MOCCASIN",16770229),s(b,"NAVAJOWHITE",16768685),s(b,"PEACHPUFF",16767673),s(b,"GOLD",16766720),s(b,"PINK",16761035),s(b,"LIGHTPINK",16758465),s(b,"ORANGE",16753920),s(b,"LIGHTSALMON",16752762),s(b,"DARKORANGE",16747520),s(b,"CORAL",16744272),s(b,"HOTPINK",16738740),s(b,"TOMATO",16737095),s(b,"ORANGERED",16729344),s(b,"DEEPPINK",16716947),s(b,"FUCHSIA",16711935),s(b,"MAGENTA",16711935),s(b,"RED",16711680),s(b,"OLDLACE",16643558),s(b,"LIGHTGOLDENRODYELLOW",16448210),s(b,"LINEN",16445670),s(b,"ANTIQUEWHITE",16444375),s(b,"SALMON",16416882),s(b,"GHOSTWHITE",16316671),s(b,"MINTCREAM",16121850),s(b,"WHITESMOKE",16119285),s(b,"BEIGE",16119260),s(b,"WHEAT",16113331),s(b,"SANDYBROWN",16032864),s(b,"AZURE",15794175),s(b,"HONEYDEW",15794160),s(b,"ALICEBLUE",15792383),s(b,"KHAKI",15787660),s(b,"LIGHTCORAL",15761536),s(b,"PALEGOLDENROD",15657130),s(b,"VIOLET",15631086),s(b,"DARKSALMON",15308410),s(b,"LAVENDER",15132410),s(b,"LIGHTCYAN",14745599),s(b,"BURLYWOOD",14596231),s(b,"PLUM",14524637),s(b,"GAINSBORO",14474460),s(b,"CRIMSON",14423100),s(b,"PALEVIOLETRED",14381203),s(b,"GOLDENROD",14329120),s(b,"ORCHID",14315734),s(b,"THISTLE",14204888),s(b,"LIGHTGREY",13882323),s(b,"TAN",13808780),s(b,"CHOCOLATE",13789470),s(b,"PERU",13468991),s(b,"INDIANRED",13458524),s(b,"MEDIUMVIOLETRED",13047173),s(b,"SILVER",12632256),s(b,"DARKKHAKI",12433259),s(b,"ROSYBROWN",12357519),s(b,"MEDIUMORCHID",12211667),s(b,"DARKGOLDENROD",12092939),s(b,"FIREBRICK",11674146),s(b,"POWDERBLUE",11591910),s(b,"LIGHTSTEELBLUE",11584734),s(b,"PALETURQUOISE",11529966),s(b,"GREENYELLOW",11403055),s(b,"LIGHTBLUE",11393254),s(b,"DARKGRAY",11119017),s(b,"BROWN",10824234),s(b,"SIENNA",10506797),s(b,"DARKORCHID",10040012),s(b,"PALEGREEN",10025880),s(b,"DARKVIOLET",9699539),s(b,"MEDIUMPURPLE",9662683),s(b,"LIGHTGREEN",9498256),s(b,"DARKSEAGREEN",9419919),s(b,"SADDLEBROWN",9127187),s(b,"DARKMAGENTA",9109643),s(b,"DARKRED",9109504),s(b,"BLUEVIOLET",9055202),s(b,"LIGHTSKYBLUE",8900346),s(b,"SKYBLUE",8900331),s(b,"GRAY",8421504),s(b,"OLIVE",8421376),s(b,"PURPLE",8388736),s(b,"MAROON",8388608),s(b,"AQUAMARINE",8388564),s(b,"CHARTREUSE",8388352),s(b,"LAWNGREEN",8190976),s(b,"MEDIUMSLATEBLUE",8087790),s(b,"LIGHTSLATEGRAY",7833753),s(b,"SLATEGRAY",7372944),s(b,"OLIVEDRAB",7048739),s(b,"SLATEBLUE",6970061),s(b,"DIMGRAY",6908265),s(b,"MEDIUMAQUAMARINE",6737322),s(b,"CORNFLOWERBLUE",6591981),s(b,"CADETBLUE",6266528),s(b,"DARKOLIVEGREEN",5597999),s(b,"INDIGO",4915330),s(b,"MEDIUMTURQUOISE",4772300),s(b,"DARKSLATEBLUE",4734347),s(b,"STEELBLUE",4620980),s(b,"ROYALBLUE",4286945),s(b,"TURQUOISE",4251856),s(b,"MEDIUMSEAGREEN",3978097),s(b,"LIMEGREEN",3329330),s(b,"DARKSLATEGRAY",3100495),s(b,"SEAGREEN",3050327),s(b,"FORESTGREEN",2263842),s(b,"LIGHTSEAGREEN",2142890),s(b,"DODGERBLUE",2003199),s(b,"MIDNIGHTBLUE",1644912),s(b,"AQUA",65535),s(b,"CYAN",65535),s(b,"SPRINGGREEN",65407),s(b,"LIME",65280),s(b,"MEDIUMSPRINGGREEN",64154),s(b,"DARKTURQUOISE",52945),s(b,"DEEPSKYBLUE",49151),s(b,"DARKCYAN",35723),s(b,"TEAL",32896),s(b,"GREEN",32768),s(b,"DARKGREEN",25600),s(b,"BLUE",255),s(b,"MEDIUMBLUE",205),s(b,"DARKBLUE",139),s(b,"NAVY",128),s(b,"BLACK",0);class de{static start(e){this._startTime=performance.now(),this._timeLabel=e}static end(){console.log(this._timeLabel,performance.now()-this._startTime)}}s(de,"time",0),s(de,"frame",0),s(de,"delta",0),s(de,"_startTime",0),s(de,"_timeLabel","");class st{constructor(e=null,t=null){s(this,"target"),s(this,"currentTarget"),s(this,"type"),s(this,"data"),s(this,"param"),s(this,"time",0),s(this,"delay",0),s(this,"mouseCode",0),s(this,"ctrlKey"),s(this,"altKey"),s(this,"shiftKey"),s(this,"targetTouches"),s(this,"changedTouches"),s(this,"touches"),s(this,"_stopImmediatePropagation",!1),s(this,"view"),this.type=e,this.data=t}stopImmediatePropagation(){this._stopImmediatePropagation=!0}reset(){this._stopImmediatePropagation=!1}get isStopImmediatePropagation(){return this._stopImmediatePropagation}}class gi{constructor(e=null,t=null,r=null,i=null,a=0){s(this,"id",0),s(this,"current"),this.type=e,this.thisObject=t,this.handler=r,this.param=i,this.priority=a}equalCurrentListener(e,t,r,i){return this.type==e&&this.thisObject==r&&this.handler==t&&this.param==i}dispose(){this.handler=null,this.thisObject=null,this.param=null,this.priority=0}}s(gi,"event_id_count",0);class br{constructor(){s(this,"listeners",{}),s(this,"data")}dispatchEvent(e){if(null!=(t=this.listeners[e.type]))for(var t=t.slice(),r=0;r<t.length;r++){var i=t[r];if(i.handler){try{e.param=i.param,(e.currentTarget=i).thisObject,i.handler.call(i.thisObject,e)}catch{}if(e.isStopImmediatePropagation)break}}}dispose(){for(var e in this.listeners)for(var t=this.listeners[e];0<t.length;){var r=t[0];r.handler=null,r.thisObject=null,t.splice(0,1)}}addEventListener(t,r,i,a=null,e=0){if(null==this.listeners[t]&&(this.listeners[t]=[]),!this.hasEventListener(t,r,i))return(e=new gi(t,i,r,a,e)).id=++gi.event_id_count,(e.current=this).listeners[t].push(e),this.listeners[t].sort(function(e,t){return t.priority-e.priority}),e.id;for(let e=0;e<this.listeners[t].length;e++){var s=this.listeners[t][e];if(s.equalCurrentListener(t,r,i,a))return s.id}return 0}removeEventListener(e,t,r){if(this.hasEventListener(e,t,r))for(var i=0;i<this.listeners[e].length;i++){var a=this.listeners[e][i];if(a.equalCurrentListener(e,t,r,a.param))return a.handler=null,a.thisObject=null,void this.listeners[e].splice(i,1)}}removeEventListenerAt(e){for(var t in this.listeners)for(var r=0;r<this.listeners[t].length;r++){var i=this.listeners[t][r];if(i.id==e)return i.handler=null,i.thisObject=null,this.listeners[t].splice(r,1),!0}return!1}removeAllEventListener(e=null){let t;if(e){if(this.listeners[e]){for(var r=0;r<this.listeners[e].length;r++)(t=this.listeners[e][r]).dispose(),this.listeners[e].splice(r,1);delete this.listeners[e]}}else for(var i in this.listeners){for(r=0;r<this.listeners[i].length;r++)(t=this.listeners[i][r]).dispose(),this.listeners[i].splice(r,1);delete this.listeners[i]}}containEventListener(e){return null!=this.listeners[e]&&0<this.listeners[e].length}hasEventListener(e,t=null,r=null){if(null!=this.listeners[e]&&r&&t)for(var i=0;i<this.listeners[e].length;i++){var a=this.listeners[e][i];if(a.equalCurrentListener(e,t,r,a.param))return!0}return!1}}class Tt extends st{constructor(){super(...arguments),s(this,"keyCode",0)}}s(Tt,"KEY_DOWN","onKeyDown"),s(Tt,"KEY_UP","onKeyUp");class L extends st{constructor(){super(...arguments),s(this,"pointerId"),s(this,"pointerType"),s(this,"isPrimary"),s(this,"pressure"),s(this,"mouseX"),s(this,"mouseY"),s(this,"movementX"),s(this,"movementY"),s(this,"deltaX"),s(this,"deltaY"),s(this,"deltaZ")}reset(){super.reset(),this.mouseX=0,this.mouseY=0,this.movementX=0,this.movementY=0,this.deltaX=0,this.deltaY=0,this.deltaZ=0}}s(L,"PICK_OVER","onPickOver"),s(L,"PICK_OVER_GUI","onPickOverGUI"),s(L,"PICK_CLICK","onPickClick"),s(L,"PICK_CLICK_GUI","onPickClickGUI"),s(L,"PICK_OUT","onPickOut"),s(L,"PICK_OUT_GUI","onPickOutGUI"),s(L,"PICK_MOVE","onPickMove"),s(L,"PICK_UP","onPickUp"),s(L,"PICK_UP_GUI","onPickUpGUI"),s(L,"PICK_DOWN","onPickDown"),s(L,"PICK_DOWN_GUI","onPickDownGUI"),s(L,"POINTER_RIGHT_CLICK","onPointerRightClick"),s(L,"POINTER_MID_UP","onPointerMidUp"),s(L,"POINTER_MID_DOWN","onPointerMidDown"),s(L,"POINTER_CLICK","onPointerClick"),s(L,"POINTER_MOVE","onPointerMove"),s(L,"POINTER_DOWN","onPointerDown"),s(L,"POINTER_UP","onPointerUp"),s(L,"POINTER_OUT","onPointerOut"),s(L,"POINTER_OVER","onPointerOver"),s(L,"POINTER_WHEEL","onPointerWheel");const k=class{constructor(e=0,t=0,r=0,i=0){s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"w",1),s(this,"index",0),this.set(e,t,r,i),this.index=k._index++}static get ZERO(){return new k(0,0,0)}static get ONE(){return new k(1,1,1)}static get LEFT(){return new k(-1,0,0)}static get RIGHT(){return new k(1,0,0)}static get UP(){return new k(0,1,0)}static get DOWN(){return new k(0,-1,0)}static get BACK(){return new k(0,0,-1)}static get FORWARD(){return new k(0,0,1)}set a(e){this.w=e}set r(e){this.x=e}set g(e){this.y=e}set b(e){this.z=e}get a(){return this.w}get r(){return this.x}get g(){return this.y}get b(){return this.z}get length(){return Math.sqrt(this.lengthSquared)}get lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}get position(){return this}static getTowPointbyDir(e,t,r,i,a){a==k.Z_AXIS?(t.x=e.y,t.y=-e.x,r.x=-e.y,r.y=e.x,t.scaleBy(.5*i),r.scaleBy(.5*i)):a==k.Y_AXIS&&(t.x=e.z,t.z=-e.x,r.x=-e.z,r.z=e.x,t.scaleBy(.5*i),r.scaleBy(.5*i))}static pointToLine(e,t,r){let i=0,a,s,o;return(a=k.distance(e,t),s=k.distance(e,r),(o=k.distance(t,r))<=1e-6||s<=1e-6)?i=0:i=a<=1e-6||a*a+s*s<=o*o?s:a*a+o*o<=s*s?o:(e=(a+s+o)/2,2*Math.sqrt(e*(e-a)*(e-s)*(e-o))/a),i}static cross(e,t,r=null){return(r=r||new k).x=e.y*t.z-e.z*t.y,r.y=e.z*t.x-e.x*t.z,r.z=e.x*t.y-e.y*t.x,r.w=1,r}static dot(e,t){return e.x*t.x+e.y*t.y+e.z*t.z}static getPoints(t,r){var i=[];for(let e=0;e<t;e++){var a=new k(Math.random()*r-.5*r,Math.random()*r-.5*r,Math.random()*r-.5*r);i.push(a)}return i}static getPointNumbers(t,r){var i=[];for(let e=0;e<t;e++)i.push(Math.random()*r-.5*r,Math.random()*r-.5*r,Math.random()*r-.5*r);return i}static getAngle(e,t){e=e.dotProduct(t)/(e.length*t.length);return 180*Math.acos(e)/Math.PI}static sqrMagnitude(e){return e.x*e.x+e.y*e.y+e.z*e.z}static getZYAngle(e,t){return this.calAngle(e.y,e.z,t.y,t.z)}static sub(e,t,r=null){return(r=r||new k).x=e.x-t.x,r.y=e.y-t.y,r.z=e.z-t.z,r}static add(e,t,r=null){return(r=r||new k).x=e.x+t.x,r.y=e.y+t.y,r.z=e.z+t.z,r}static smoothDamp(e,t,r,i,a,s){return null}static distance(e,t){var r=e.x-t.x,i=e.y-t.y,e=e.z-t.z;return Math.sqrt(r*r+i*i+e*e)}static distanceXZ(e,t){var r=e.x-t.x,e=e.z-t.z;return Math.sqrt(r*r+0+e*e)}set(e,t,r,i=1){return this.x=e,this.y=t,this.z=r,this.w=i,this}add(e,t=null){t=t||new k;var r=this.x,i=this.y,a=this.z,s=this.w,o=e.x,n=e.y,h=e.z,e=e.w;return t.setTo(r+o,i+n,a+h,s+e),t}addXYZW(e,t,r,i,a=null){a=a||new k;var s=this.x,o=this.y,n=this.z,h=this.w;return a.setTo(s+e,o+t,n+r,h+i),a}clone(){return new k(this.x,this.y,this.z,this.w)}copyFrom(e){var t=this;return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}crossProduct(e,t=null){return(t=t||new k).x=this.y*e.z-this.z*e.y,t.y=this.z*e.x-this.x*e.z,t.z=this.x*e.y-this.y*e.x,t.w=1,t}decrementBy(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}dotProduct(e){return this.x*e.x+this.y*e.y+this.z*e.z}equals(e,t=!1){return this.x==e.x&&this.y==e.y&&this.z==e.z&&(!t||this.w==e.w)}incrementBy(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}divide(e){return e instanceof k?new k(this.x/e.x,this.y/e.y,this.z/e.z):(this.x=this.x/e,this.y=this.y/e,this.z=this.z/e,this)}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}normalize(e=1){return 0!=this.length&&(e=e/this.length,this.x*=e,this.y*=e,this.z*=e),this}applyQuaternion(e){var t=this.x,r=this.y,i=this.z,a=e.x,s=e.y,o=e.z,e=e.w,n=e*t+s*i-o*r,h=e*r+o*t-a*i,l=e*i+a*r-s*t,t=-a*t-s*r-o*i;return this.x=n*e+t*-a+h*-o-l*-s,this.y=h*e+t*-s+l*-a-n*-o,this.z=l*e+t*-o+n*-s-h*-a,this}scaleBy(e){return this.x*=e,this.y*=e,this.z*=e,this}mul(e){var t=new k;return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t}scale(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}scaleToRef(e,t){return(t=t||new k).x=this.x*e,t.y=this.y*e,t.z=this.z*e,t}setTo(e,t,r,i=1){this.x=e,this.y=t,this.z=r,this.w=i}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}subtract(e,t=null){return(t=t||new k).setTo(this.x-e.x,this.y-e.y,this.z-e.z),t}multiply(e,t=null){t=t||new k;var r=this.x,i=this.y,a=this.z,s=e.x,o=e.y,e=e.z;return t.setTo(r*s,i*o,a*e),t}divided(e,t=null){t=t||new k;var r=this.x,i=this.y,a=this.z,s=e.x,o=e.y,e=e.z;return t.setTo(r/s,i/o,a/e),t}div(e,t){t=t||new k;var r=this.x,i=this.y,a=this.z,s=this.w;return t.setTo(r/e,i/e,a/e,s/e),t}lerp(e,t,r){var i=e.x,a=e.y,s=e.z,e=e.w,o=t.x,n=t.y,h=t.z,t=t.w;this.x=(o-i)*r+i,this.y=(n-a)*r+a,this.z=(h-s)*r+s,this.w=(t-e)*r+e}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}toString(){return"<"+this.x+", "+this.y+", "+this.z+">"}normalizeToWay2D_XY(){var e=Math.abs(this.x);Math.abs(this.y)<e?0<this.x?this.copyFrom(k.RIGHT):this.copyFrom(k.LEFT):0<this.y?this.copyFrom(k.DOWN):this.copyFrom(k.UP)}toArray(){return[this.x,this.y,this.z]}copyToBytes(e){e.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this.x,!0),e.setFloat32(+Float32Array.BYTES_PER_ELEMENT,this.y,!0),e.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,this.z,!0)}cross(e,t=null){return(t=t||new k).x=this.y*e.z-this.z*e.y,t.y=this.z*e.x-this.x*e.z,t.z=this.x*e.y-this.y*e.x,t.w=1,t}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}setFromArray(e,t=0){this.x=e[t],this.y=e[t+1],this.z=e[t+2]}divideScalar(e){return this.multiplyScalar(1/e)}clampLength(e,t){var r=this.length;return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}setScalar(e){return this.x=e,this.y=e,this.z=e,this}static calAngle(e,t,r,i){i=function(e,t,r,i){e=[e-r,t-i];return function(e,t){var r=e[0]*t[0]+e[1]*t[1],e=Math.sqrt(e[0]*e[0]+e[1]*e[1])*Math.sqrt(t[0]*t[0]+t[1]*t[1]);return r/e}(e,[0,-1])}(r,i,e,t);let a=180*Math.acos(i)/Math.PI;return a=r<e?-a:a}};let p=k;s(p,"MAX",new k(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)),s(p,"MIN",new k(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE)),s(p,"SAFE_MAX",new k(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),s(p,"SAFE_MIN",new k(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)),s(p,"X_AXIS",new k(1,0,0)),s(p,"neg_X_AXIS",new k(-1,0,0)),s(p,"Y_AXIS",new k(0,1,0)),s(p,"Z_AXIS",new k(0,0,1)),s(p,"HELP_0",new k),s(p,"HELP_1",new k),s(p,"HELP_2",new k),s(p,"EPSILON",1e-5),s(p,"HELP_3",new k),s(p,"HELP_4",new k),s(p,"HELP_5",new k),s(p,"HELP_6",new k),s(p,"_index",0);class hn{constructor(e){s(this,"canvasX"),s(this,"canvasY"),s(this,"identifier"),s(this,"clientX"),s(this,"clientY"),s(this,"pageX"),s(this,"pageY"),s(this,"screenX"),s(this,"screenY"),this.canvasX=e.clientX,this.canvasY=e.clientY,this.identifier=e.identifier,this.clientX=e.clientX,this.clientY=e.clientY,this.pageX=e.pageX,this.pageY=e.pageY,this.screenX=e.screenX,this.screenY=e.screenY}}class un extends br{constructor(){super(...arguments),s(this,"canvasX",0),s(this,"canvasY",0),s(this,"isMouseDown",!1),s(this,"isRightMouseDown",!1),s(this,"canvas"),s(this,"mouseX",0),s(this,"mouseY",0),s(this,"wheelDelta",0),s(this,"mouseOffsetX",0),s(this,"mouseOffsetY",0),s(this,"mouseLastX",0),s(this,"mouseLastY",0),s(this,"_time",0),s(this,"_keyStatus"),s(this,"_mouseStatus"),s(this,"_isTouchStart"),s(this,"_keyEvent3d"),s(this,"_pointerEvent3D"),s(this,"_windowsEvent3d"),s(this,"_gp",!1),s(this,"_oldPosition1",null),s(this,"_oldPosition2",null),s(this,"_downTime",0)}initCanvas(e){(this.canvas=e).onpointerdown=e=>{0==e.button?this.mouseStart(e):1==e.button?this.middleDown(e):2==e.button&&this.mouseStart(e)},e.onpointerup=e=>{0==e.button?this.mouseEnd(e):1==e.button?this.middleUp(e):2==e.button&&this.mouseEnd(e)},e.onpointerenter=e=>{this.mouseOver(e)},e.onpointermove=e=>{this.mouseMove(e)},e.onpointercancel=e=>{this.mouseEnd(e)},e.onpointerleave=e=>{this.mouseEnd(e)},e.onpointerout=e=>{this.mouseEnd(e)},e.addEventListener("click",e=>{2==e.button?(this.isRightMouseDown=!1,this.rightClick(e)):0==e.button&&(this.isMouseDown=!1,this.mouseClick(e))},!0),e.addEventListener("wheel",e=>this.mouseWheel(e),{passive:!1}),window.addEventListener("keydown",e=>this.keyDown(e),!0),window.addEventListener("keyup",e=>this.keyUp(e),!0),e.oncontextmenu=function(){return!1};e=this.canvas.getBoundingClientRect();this.canvasX=e.left,this.canvasY=e.top,this._keyStatus={},this._mouseStatus={},this._isTouchStart=!1,this._keyEvent3d=new Tt,this._pointerEvent3D=new L,this._windowsEvent3d=new st}onPinch(e,t,r,i){this._oldPosition1=new p(e,t),this._oldPosition2=new p(r,i)}onSwipe(e,t){this.mouseX=e,this.mouseY=t,this._oldPosition1=null,this._oldPosition2=null,this._time=(new Date).getTime()}GetTargetTouches(e){for(var t=new Array,r=0;r<e.length;r++){var i=new hn(e[r]);t.push(i)}return t}rightClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=L.POINTER_RIGHT_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}middleDown(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=L.POINTER_MID_DOWN,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}middleUp(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=L.POINTER_MID_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}mouseClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=L.POINTER_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}mouseEnd(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._mouseStatus[this._pointerEvent3D.mouseCode]=!1,this._pointerEvent3D.type=L.POINTER_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseStart(e){this.isMouseDown=!0,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.type=L.POINTER_DOWN,this.dispatchEvent(this._pointerEvent3D)}mouseMove(e){this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=L.POINTER_MOVE,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.movementX=e.movementX,this._pointerEvent3D.movementY=e.movementY,this.dispatchEvent(this._pointerEvent3D)}mouseOver(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=L.POINTER_OVER,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseWheel(e){e.preventDefault(),this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,"wheelDelta"in e?(this._pointerEvent3D.delay=e.wheelDelta,this.wheelDelta=e.wheelDelta):"delta"in e&&(this.wheelDelta=e.delta),this._pointerEvent3D.reset(),this._pointerEvent3D.type=L.POINTER_WHEEL,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.deltaX=e.deltaX,this._pointerEvent3D.deltaY=e.deltaY,this._pointerEvent3D.deltaZ=e.deltaZ,this.dispatchEvent(this._pointerEvent3D)}keyDown(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyEvent3d.ctrlKey=e.ctrlKey,this._keyEvent3d.altKey=e.altKey,this._keyEvent3d.shiftKey=e.shiftKey,this._keyStatus[e.keyCode]||(this._keyStatus[e.keyCode]=!0,this._keyEvent3d.type=Tt.KEY_DOWN,this.dispatchEvent(this._keyEvent3d))}keyUp(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyStatus[e.keyCode]=!1,this._keyEvent3d.type=Tt.KEY_UP,this.dispatchEvent(this._keyEvent3d)}GetSlideAngle(e,t){return 180*Math.atan2(t,e)/Math.PI}GetSlideDirection(e,t,r,i){t-=i,i=r-e,r=0;return Math.abs(i)<2&&Math.abs(t)<2||(-45<=(e=this.GetSlideAngle(i,t))&&e<45?r=4:45<=e&&e<135?r=1:-135<=e&&e<-45?r=2:(135<=e&&e<=180||-180<=e&&e<-135)&&(r=3)),r}}const cn="0.6.0";class fn{constructor(){s(this,"adapter"),s(this,"device"),s(this,"context"),s(this,"aspect"),s(this,"presentationSize",[0,0]),s(this,"presentationFormat"),s(this,"canvas"),s(this,"windowWidth"),s(this,"windowHeight"),s(this,"sourceWidth"),s(this,"sourceHeight"),s(this,"canvasConfig"),s(this,"super",1)}get pixelRatio(){var e;return(null==(e=this.canvasConfig)?void 0:e.devicePixelRatio)||window.devicePixelRatio||1}async init(e){if((this.canvasConfig=e)&&e.canvas){if(this.canvas=e.canvas,null===this.canvas)throw new Error("no Canvas")}else this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.top="0px",this.canvas.style.left="0px",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.zIndex=null!=e&&e.zIndex?e.zIndex.toString():"0",document.body.appendChild(this.canvas);this.resize(this.canvas.clientWidth,this.canvas.clientHeight),e&&e.backgroundImage?(this.canvas.style.background=`url(${e.backgroundImage})`,this.canvas.style["background-size"]="cover",this.canvas.style["background-position"]="center"):this.canvas.style.background="transparent",this.canvas.style["touch-action"]="none",this.canvas.style["object-fit"]="cover",this.context=this.canvas.getContext("webgpu"),this.sourceWidth=Math.floor(this.canvas.clientWidth*this.pixelRatio*this.super),this.sourceHeight=Math.floor(this.canvas.clientHeight*this.pixelRatio*this.super),this.adapter=await navigator.gpu.requestAdapter({powerPreference:"high-performance"}),this.adapter,this.device=await this.adapter.requestDevice({requiredFeatures:["texture-compression-bc"],requiredLimits:{minUniformBufferOffsetAlignment:256,maxStorageBufferBindingSize:this.adapter.limits.maxStorageBufferBindingSize}}),this.device,this.device.label="device",this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:this.device,format:this.presentationFormat,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT,alphaMode:"premultiplied",colorSpace:"display-p3"}),this.resize(this.canvas.clientWidth,this.canvas.clientHeight);let t;return new ResizeObserver(()=>{clearTimeout(t),t=setTimeout(()=>{this.resize(this.canvas.clientWidth,this.canvas.clientHeight)},50)}).observe(this.canvas),!0}resize(e,t){this.canvas.width=this.windowWidth=Math.floor(e*this.pixelRatio*this.super),this.canvas.height=this.windowHeight=Math.floor(t*this.pixelRatio*this.super),this.presentationSize[0]=this.windowWidth,this.presentationSize[1]=this.windowHeight,this.aspect=this.windowWidth/this.windowHeight}}let E=new fn;class pr{}s(pr,"Bloom_Brightness_frag_wgsl",`
    struct uniformData {
        luminosityThreshold: f32
    };

    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;
    @group(2) @binding(0)
    var<uniform> global: uniformData;

    fn Brightness(c: vec3<f32>) -> f32 {
        var c1: vec3<f32>;

        c1 = c;
        let e8: vec3<f32> = c1;
        let e10: vec3<f32> = c1;
        let e12: vec3<f32> = c1;
        let e14: vec3<f32> = c1;
        let e17: vec3<f32> = c1;
        let e19: vec3<f32> = c1;
        let e21: vec3<f32> = c1;
        let e23: vec3<f32> = c1;
        let e25: vec3<f32> = c1;
        let e28: vec3<f32> = c1;
        return max(max(e23.x, e25.y), e28.z);
    }

    fn main1() {
        var uv: vec2<f32>;
        var LinearColor: vec4<f32>;
        var TotalLuminance: f32;
        var BloomLuminance: f32;
        var BloomAmount: f32;

        let e6: vec2<f32> = fragUV1;
        uv = e6.xy;
        let e11: vec2<f32> = uv;
        uv.y = (1.0 - e11.y);
        let e15: vec2<f32> = uv;
        let e16: vec4<f32> = textureSample(baseMap, baseMapSampler, e15);
        LinearColor = e16;
        let e18: vec4<f32> = LinearColor;
        let e27: vec4<f32> = LinearColor;
        let e36: vec4<f32> = LinearColor;
        let e38: vec3<f32> = min(vec3<f32>(f32(65000), f32(65000), f32(65000)), e36.xyz);
        LinearColor.x = e38.x;
        LinearColor.y = e38.y;
        LinearColor.z = e38.z;
        let e45: vec4<f32> = LinearColor;
        let e47: vec4<f32> = LinearColor;
        let e49: f32 = Brightness(e47.xyz);
        TotalLuminance = e49;
        let e51: f32 = TotalLuminance;
        let e52: f32 = global.luminosityThreshold;
        BloomLuminance = (e51 - e52);
        let e55: f32 = BloomLuminance;
        let e60: f32 = BloomLuminance;
        BloomAmount = clamp((e60 * 0.5), 0.0, 1.0);
        let e67: f32 = BloomAmount;
        let e68: vec4<f32> = LinearColor;
        o_Target = vec4<f32>((e67 * e68.xyz), f32(0));
        return;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        fragUV1 = fragUV;
        main1();
        let e13: vec4<f32> = o_Target;
        return FragmentOutput(e13);
    }
    `),s(pr,"Bloom_blur_frag_wgsl",`
      struct uniformData {
          texSize: vec2<f32>,
          hScale: f32,
          vScale: f32,
          horizontal: f32
      };

      struct FragmentOutput {
          @location(0) o_Target: vec4<f32>
      };

      var<private> fragUV1: vec2<f32>;
      var<private> o_Target: vec4<f32>;
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
      @group(2) @binding(0)
      var<uniform> global: uniformData;

      fn main1() {
          var uv: vec2<f32>;
          var tex_offset: vec2<f32>;
          var result: vec3<f32>;
          var i: i32 = 1;
          var local: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var local1: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var j: i32 = 1;
          var local2: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var local3: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);

          let e13: vec2<f32> = fragUV1;
          uv = e13.xy;
          let e18: vec2<f32> = uv;
          uv.y = (1.0 - e18.y);
          let e22: vec2<f32> = global.texSize;
          tex_offset = (vec2<f32>(1.0) / vec2<f32>(e22));
          let e28: vec2<f32> = uv;
          let e29: vec4<f32> = textureSample(baseMap, baseMapSampler, e28);
          result = (e29.xyz * array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464)[0]);
          let e35: f32 = global.horizontal;
          if ((e35 > 1.0)) {
              {
                  loop {
                      let e40: i32 = i;
                      if (!((e40 < 5))) {
                          break;
                      }
                      {
                          let e47: vec3<f32> = result;
                          let e48: vec2<f32> = uv;
                          let e49: vec2<f32> = tex_offset;
                          let e51: i32 = i;
                          let e54: f32 = global.hScale;
                          let e59: vec2<f32> = uv;
                          let e60: vec2<f32> = tex_offset;
                          let e62: i32 = i;
                          let e65: f32 = global.hScale;
                          let e70: vec4<f32> = textureSample(baseMap, baseMapSampler, (e59 + vec2<f32>(((e60.x * f32(e62)) * e65), 0.0)));
                          let e72: i32 = i;
                          let e75: f32 = local[e72];
                          result = (e47 + (e70.xyz * e75));
                          let e78: vec3<f32> = result;
                          let e79: vec2<f32> = uv;
                          let e80: vec2<f32> = tex_offset;
                          let e82: i32 = i;
                          let e85: f32 = global.hScale;
                          let e90: vec2<f32> = uv;
                          let e91: vec2<f32> = tex_offset;
                          let e93: i32 = i;
                          let e96: f32 = global.hScale;
                          let e101: vec4<f32> = textureSample(baseMap, baseMapSampler, (e90 - vec2<f32>(((e91.x * f32(e93)) * e96), 0.0)));
                          let e103: i32 = i;
                          let e106: f32 = local1[e103];
                          result = (e78 + (e101.xyz * e106));
                      }
                      continuing {
                          let e44: i32 = i;
                          i = (e44 + 1);
                      }
                  }
              }
          }
          let e109: f32 = global.horizontal;
          if ((e109 < 1.0)) {
              {
                  loop {
                      let e114: i32 = j;
                      if (!((e114 < 5))) {
                          break;
                      }
                      {
                          let e121: vec3<f32> = result;
                          let e122: vec2<f32> = uv;
                          let e124: vec2<f32> = tex_offset;
                          let e126: i32 = j;
                          let e129: f32 = global.vScale;
                          let e133: vec2<f32> = uv;
                          let e135: vec2<f32> = tex_offset;
                          let e137: i32 = j;
                          let e140: f32 = global.vScale;
                          let e144: vec4<f32> = textureSample(baseMap, baseMapSampler, (e133 + vec2<f32>(0.0, ((e135.y * f32(e137)) * e140))));
                          let e146: i32 = j;
                          let e149: f32 = local2[e146];
                          result = (e121 + (e144.xyz * e149));
                          let e152: vec3<f32> = result;
                          let e153: vec2<f32> = uv;
                          let e155: vec2<f32> = tex_offset;
                          let e157: i32 = j;
                          let e160: f32 = global.vScale;
                          let e164: vec2<f32> = uv;
                          let e166: vec2<f32> = tex_offset;
                          let e168: i32 = j;
                          let e171: f32 = global.vScale;
                          let e175: vec4<f32> = textureSample(baseMap, baseMapSampler, (e164 - vec2<f32>(0.0, ((e166.y * f32(e168)) * e171))));
                          let e177: i32 = j;
                          let e180: f32 = local3[e177];
                          result = (e152 + (e175.xyz * e180));
                      }
                      continuing {
                          let e118: i32 = j;
                          j = (e118 + 1);
                      }
                  }
              }
          }
          let e183: vec3<f32> = result;
          o_Target = vec4<f32>(e183, 1.0);
          return;
      }

      @fragment
      fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
          fragUV1 = fragUV;
          main1();
          let e27: vec4<f32> = o_Target;
          return FragmentOutput(e27);
      }
      `),s(pr,"Bloom_composite_frag_wgsl",`
      struct uniformData {
          bloomStrength: f32,
          bloomRadius: f32
      };

      struct FragmentOutput {
          @location(0) o_Target: vec4<f32>
      };

      var<private> fragUV1: vec2<f32>;
      var<private> o_Target: vec4<f32>;
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
      @group(1) @binding(2)
      var blurTex1Sampler: sampler;
      @group(1) @binding(3)
      var blurTex1: texture_2d<f32>;
      @group(1) @binding(4)
      var blurTex2Sampler: sampler;
      @group(1) @binding(5)
      var blurTex2: texture_2d<f32>;
      @group(1) @binding(6)
      var blurTex3Sampler: sampler;
      @group(1) @binding(7)
      var blurTex3: texture_2d<f32>;
      @group(1) @binding(8)
      var blurTex4Sampler: sampler;
      @group(1) @binding(9)
      var blurTex4: texture_2d<f32>;
      @group(1) @binding(10)
      var blurTex5Sampler: sampler;
      @group(1) @binding(11)
      var blurTex5: texture_2d<f32>;
      @group(2) @binding(0)
      var<uniform> global: uniformData;

      fn lerpBloomFactor(factor: f32) -> f32 {
          var factor1: f32;
          var mirrorFactor: f32;

          factor1 = factor;
          let e23: f32 = factor1;
          mirrorFactor = (1.2000000476837158 - e23);
          let e29: f32 = factor1;
          let e30: f32 = mirrorFactor;
          let e31: f32 = global.bloomRadius;
          return mix(e29, e30, e31);
      }

      fn main1() {
          var uv: vec2<f32>;
          var source: vec4<f32>;

          let e20: vec2<f32> = fragUV1;
          uv = e20.xy;
          let e25: vec2<f32> = uv;
          uv.y = (1.0 - e25.y);
          let e29: vec2<f32> = uv;
          let e30: vec4<f32> = textureSample(baseMap, baseMapSampler, e29);
          source = e30;
          let e32: vec4<f32> = source;
          let e33: f32 = global.bloomStrength;
          let e38: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[0]);
          let e45: vec2<f32> = uv;
          let e46: vec4<f32> = textureSample(blurTex1, blurTex1Sampler, e45);
          let e52: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[1]);
          let e59: vec2<f32> = uv;
          let e60: vec4<f32> = textureSample(blurTex2, blurTex2Sampler, e59);
          let e67: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[2]);
          let e74: vec2<f32> = uv;
          let e75: vec4<f32> = textureSample(blurTex3, blurTex3Sampler, e74);
          let e82: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[3]);
          let e89: vec2<f32> = uv;
          let e90: vec4<f32> = textureSample(blurTex4, blurTex4Sampler, e89);
          let e97: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[4]);
          let e104: vec2<f32> = uv;
          let e105: vec4<f32> = textureSample(blurTex5, blurTex5Sampler, e104);
          o_Target = (e32 + (e33 * ((((((e38 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[0], 1.0)) * e46) + ((e52 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[1], 1.0)) * e60)) + ((e67 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[2], 1.0)) * e75)) + ((e82 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[3], 1.0)) * e90)) + ((e97 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[4], 1.0)) * e105))));
          o_Target.a = e30.a ;
          return;
      } 

      @fragment
      fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
          fragUV1 = fragUV;
          main1();
        //   let e81: vec4<f32> = pow(o_Target,vec4<f32>(vec3<f32>(2.2),o_Target.w));
          return FragmentOutput(o_Target);
      }
      `);let dn=`
        var<private> colorSet : array<vec3<f32>, 9> = array<vec3<f32>, 9>(
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(1.0, 0.5, 0.0),
            vec3<f32>(0.5, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.5),
            vec3<f32>(0.0, 0.5, 1.0),
            vec3<f32>(0.0, 0.0, 1.0),
            vec3<f32>(0.5, 0.0, 1.0),
            vec3<f32>(1.0, 0.0, 0.5)
        );

        #if DEBUG_CLUSTER
        fn debugCluster(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              var tile : vec3<u32> = getTile(fragCoord);
              let clusterDebug = vec4<f32>(colorSet[u32(tile.z) % 9u], 1.0);
              ORI_FragmentOutput.color = clusterDebug ;
              // ORI_FragmentOutput.color = vec4<f32>(0.5,0.5,0.0,1.0); 
            #endif
          }
      
          fn debugClusterBox(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              let clusterIndex : u32 = getClusterIndex(fragCoord);
              let cluster = clusterBuffer[clusterIndex];
        
              let midPoint : vec3<f32> = (cluster.maxPoint.xyz - cluster.minPoint.xyz) / vec3<f32>(2.0, 2.0, 2.0);
              let center : vec3<f32> = cluster.minPoint.xyz + midPoint;
              let radius : f32 = length(midPoint) ;
        
              let fragToBoundsCenter : vec3<f32> = ORI_VertexVarying.viewPosition.xyz - center;
              let distToBoundsCenter : f32 = length(fragToBoundsCenter);
              let normDist : f32 = distToBoundsCenter / radius;
              ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(normDist,normDist,normDist)  , 1.0);
            #endif
          }
      
          fn debugClusterLightCount(fragCoord:vec4<f32>){
            #if USE_LIGHT
              let clusterIndex : u32 = getClusterIndex(fragCoord);
              let lightCount : u32 = u32(assignTable[clusterIndex].count);
              let lightFactor : f32 = f32(lightCount) / f32(32.0);
              ORI_FragmentOutput.color =  mix(vec4<f32>(0.0, 0.0, 1.0, 1.0), vec4<f32>(1.0, 0.0, 0.0, 1.0), vec4<f32>(lightFactor, lightFactor, lightFactor, lightFactor));
            #endif
          }
          #endif
    `;class xi{}s(xi,"sky_vs_frag_wgsl",`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
      @location(0) fragUV: vec2<f32>,
      @location(1) vWorldPos: vec4<f32>,
      @location(2) vWorldNormal: vec3<f32>,
      @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    @vertex
    fn main( 
      @builtin(instance_index) index : u32,
      @location(0) position: vec3<f32>,
      @location(1) normal: vec3<f32>,
      @location(2) uv: vec2<f32>
    ) -> VertexOutput {
      ORI_VertexOut.fragUV = uv;
      let modelMat = models.matrix[u32(index)];
      let vm = globalUniform.viewMat * modelMat;
      let normalMatrix = mat3x3<f32>(vm[0].xyz,vm[1].xyz,vm[2].xyz);
	    ORI_VertexOut.vWorldNormal = normalize( normalMatrix * normal );
      ORI_VertexOut.vWorldPos = modelMat * vec4<f32>(position.xyz,1.0) ;

      var fixProjMat = globalUniform.projMat ;
      fixProjMat[2].z = 1.0 ;//99999.0 / (99999.0 - 1.0) ;
      fixProjMat[3].z = -1.0 ;//(-1.0 * 99999.0) / (99999.0 - 1.0) ;

      var fixViewMat = globalUniform.viewMat ;
      fixViewMat[3].x = 0.0 ;
      fixViewMat[3].y = 0.0 ;
      fixViewMat[3].z = 0.0 ;

      var clipPos = fixProjMat * fixViewMat * ORI_VertexOut.vWorldPos;
      ORI_VertexOut.member = clipPos;
      return ORI_VertexOut;
    }
  `),s(xi,"sky_fs_frag_wgsl",`
    #include "GlobalUniform"

    struct uniformData {
        exposure: f32,
        roughness: f32
    };

    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>,
        #if USE_WORLDPOS
          @location(1) o_Position: vec4<f32>,
        #endif
        #if USEGBUFFER
          @location(2) o_Normal: vec4<f32>,
          @location(3) o_Material: vec4<f32>
        #endif
    };

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_cube<f32>;

    @group(2) @binding(0)
    var<uniform> global: uniformData;

    fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
      var linRGB1 = max(linRGB, vec3<f32>(0.0));
      linRGB1 = pow(linRGB1, vec3<f32>(0.4166666567325592));
      return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>, @location(1) vWorldPos: vec4<f32>, @location(2) vWorldNormal: vec3<f32>) -> FragmentOutput {
        let maxLevel: u32 = textureNumLevels(baseMap);
        let textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
        let o_Target: vec4<f32> = vec4<f32>(LinearToGammaSpace(textureColor),1.0) * globalUniform.skyExposure ;
        var normal_rgba8unorm = (vWorldNormal + 1.0) * 0.5;
        normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));

        return FragmentOutput(
          o_Target,
          #if USE_WORLDPOS
              vWorldPos,
          #endif
          #if USEGBUFFER
              vec4<f32>(normal_rgba8unorm,0.0),
              vec4<f32>(0.0,1.0,0.0,0.0)
          #endif
        );
    }
    `);let pn=`
    struct LightData {
        index:f32,
        lightType:i32,
        radius:f32,
        linear:f32,
        
        position:vec3<f32>,
        lightMatrixIndex:f32,

        direction:vec3<f32>,
        quadratic:f32,

        lightColor:vec3<f32>,
        intensity:f32,

        innerCutOff :f32,
        outerCutOff:f32,
        range :f32,
        castShadow:i32,

        lightTangent:vec3<f32>,
        ies:f32,
    };

    const PointLightType = 1;
    const DirectLightType = 2;
    const SpotLightType = 3;

    struct ClusterBox{
        minPoint:vec4<f32>,
        maxPoint:vec4<f32>
    };

    struct LightIndex
    {
        count:f32,
        start:f32,
        empty0:f32,
        empty1:f32,
    };

    struct ClustersUniform{
        clusterTileX:f32,
        clusterTileY:f32,
        clusterTileZ:f32,
        numLights:f32,
        maxNumLightsPerCluster:f32,
        near:f32,
        far:f32,
        screenWidth:f32,
        screenHeight:f32,
        clusterPix:f32, 
    };

    @group(2) @binding(1)
    var<storage,read> lightBuffer: array<LightData>;
    @group(2) @binding(2)
    var<uniform> clustersUniform : ClustersUniform;
    @group(2) @binding(3)
    var<storage,read> lightAssignBuffer : array<f32>;
    @group(2) @binding(4)
    var<storage,read> assignTable : array<LightIndex>;
    #if DEBUG_CLUSTER
        @group(2) @binding(5)
        var<storage,read> clusterBuffer : array<ClusterBox>;
    #endif

    fn getLight( index:i32 ) -> LightData{
        let lightId = i32(lightAssignBuffer[index]);
        var lightData = lightBuffer[lightId];
        return lightData ;
    }

    fn linear01Depth(depth : f32) -> f32 {
        return globalUniform.far * globalUniform.near / fma(depth, globalUniform.near-globalUniform.far, globalUniform.far);
    }

    fn getTile(fragCoord : vec4<f32>) -> vec3<u32> {
        var coord = fragCoord ; 
        coord.z = linear01Depth(coord.z) ; 

        let sliceScale = f32(clustersUniform.clusterTileZ) / log2(globalUniform.far / globalUniform.near);
        let sliceBias = -(f32(clustersUniform.clusterTileZ) * log2(globalUniform.near) / log2(globalUniform.far / globalUniform.near));
        let zTile = u32(max(log2(coord.z) * sliceScale + sliceBias, 0.0));
        return vec3<u32>(u32(coord.x / (clustersUniform.screenWidth / f32(clustersUniform.clusterTileX))),
                        u32(coord.y / (clustersUniform.screenHeight / f32(clustersUniform.clusterTileY))),
                        zTile);
    }

    fn getCluster(fragCoord : vec4<f32>) -> LightIndex {
    let tile = getTile(fragCoord);
    let id = tile.x +
            tile.y * u32(clustersUniform.clusterTileX) +
            tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
    return assignTable[id];
    }

    #if DEBUG_CLUSTER
        fn getClusterIndex(fragCoord : vec4<f32>) -> u32 {
            let tile = getTile(fragCoord);
            let id = tile.x +
                tile.y * u32(clustersUniform.clusterTileX) +
                tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
            return id;
            // return 0u ;
        }
    #endif
`,mn=`
#include "BRDF_frag"
#include "LightStruct"
#include "ShadowMapping_frag"

#if USE_IES_PROFILE
  #include "IESProfiles_frag"
#endif



const LUMEN = 10.764;



fn calcAttenuation( d : f32 ,  falloffStart : f32 ,  falloffEnd : f32)-> f32
{
    // Linear falloff.
    return saturate((falloffEnd-d) / (falloffEnd - falloffStart));
}

fn directLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    #if USE_LIGHT
      var L = -normalize(light.direction.xyz) ;
      let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
      var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
      var att = light.intensity / LUMEN ;
      if(light.castShadow>=0){
          #if USE_SHADOWMAPING
            att *= shadowStrut.directShadowVisibility[light.castShadow] ; 
          #endif
      }

      #if USE_LAMBERT
        color = vec3<f32>(1.0,0.5,1.0) ;
      #endif 

      #if USE_BRDF
        color = simpleBRDF(albedo,N,V,L,att,lightColor,fragData.Roughness) ;
      #endif 
    #endif 
    return color ;
}

fn pointLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , light:LightData ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir);
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    if( abs(dist) < light.range ){
        var L = dir ;
        var atten = 1.0 ;
        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.001) * light.intensity / LUMEN;
        if( light.castShadow >= 0 )
        {
            atten *= shadowStrut.pointShadows[light.castShadow] ;
        }

        #if USE_IES_PROFILE
          atten *= getLightIESProfileAtt(WP,light);
        #endif

        var lightColor = light.lightColor.rgb  ;
        lightColor = getHDRColor(lightColor , light.linear )  ;
        // lightColor = LinearToSrgbBranchless(lightColor.rgb) ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,0.5,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,fragData.Roughness))  ;
        #endif 
    } 
    return color ;
}

fn getDistanceAtten(  light:LightData , dist : f32 ) -> f32 {
  return 1.0 - smoothstep(0.0,light.range,dist) ;
}

fn spotLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , light:LightData ) -> vec3<f32> {
    let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir) ;
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    var color = vec3<f32>(0.0) ;
    if( abs(dist) < light.range * 2.0 ){
        var L = dir ;
        let theta = dot(-L, normalize(light.direction));
        let angle = acos(theta) ;
        var atten = 1.0 ;
        var lightColor = light.lightColor.rgb  ;

        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.1) * light.intensity / LUMEN;
        if(angle < light.outerCutOff){
          if(angle > light.innerCutOff){
            atten *= 1.0 - smoothstep(light.innerCutOff, light.outerCutOff, angle) ;
          
          
          }
        }else{
          atten = 0.0 ;
        }

        if( light.castShadow >= 0 )
        {
            atten *= shadowStrut.pointShadows[light.castShadow] ;
        }

        #if USE_IES_PROFILE
            atten *= getLightIESProfileAtt(WP,light);
        #endif

        lightColor = getHDRColor(lightColor , light.linear ) ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,0.5,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,fragData.Roughness)) ;
        #endif 
    }
    return  color ;
}
`,_a=`
var<private> PI: f32 = 3.14159265359;


fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
  let x:f32 = position.x;
  let y:f32 = position.y;
  let z:f32 = position.z;

  let qx:f32 = q.x;
  let qy:f32 = q.y;
  let qz:f32 = q.z;
  let qw:f32 = q.w;

  let ix:f32 = qw * x + qy * z - qz * y;
  let iy:f32 = qw * y + qz * x - qx * z;
  let iz:f32 = qw * z + qx * y - qy * x;
  let iw:f32 = -qx * x - qy * y - qz * z;

  var ret: vec3<f32>;
  ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  return ret;
}

fn inverse( m:mat3x3<f32>) -> mat3x3<f32>{
  var a00 = m[0][0];
  var a01 = m[0][1];
  var a02 = m[0][2];
  var a10 = m[1][0];
  var a11 = m[1][1];
  var a12 = m[1][2];
  var a20 = m[2][0];
  var a21 = m[2][1];
  var a22 = m[2][2];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  var det = a00 * b01 + a01 * b11 + a02 * b21 ;
  return mat3x3<f32>(
      vec3<f32>(b01/ det, (-a22 * a01 + a02 * a21)/ det, (a12 * a01 - a02 * a11)/ det),
      vec3<f32>(b11/ det, (a22 * a00 - a02 * a20)/ det, (-a12 * a00 + a02 * a10)/ det),
      vec3<f32>(b21/ det, (-a21 * a00 + a01 * a20)/ det, (a11 * a00 - a01 * a10)/ det)
  );
}

fn dir_to_faceId(pt:vec3<f32>) -> i32 {
    //**** nx px ny py nz pz
    var abs_x = abs(pt.x);
    var abs_y = abs(pt.y);
    var abs_z = abs(pt.z);
    var coord = max(max(abs_x, abs_y), abs_z);
    if(coord == -pt.x){  return 0;}
    if(coord == pt.x) { return 1;}

    if(coord == -pt.y){  return 2;}
    if(coord == pt.y) { return 3;}

    if(coord == -pt.z) { return 4;}
    return 5;
  }

  fn convert_xyz_to_cube_uv(x:f32, y:f32, z:f32 ) -> vec2<f32>
  {
    var dir = vec3<f32>(x, y, z);
    var absX = abs(dir.x);
    var absY = abs(dir.y);
    var absZ = abs(dir.z);

    var isXPositive = 0;
    if(dir.x > 0.0){isXPositive = 1;}
    var isYPositive = 0;
    if(dir.y > 0.0){isYPositive = 1;}
    var isZPositive = 0;
    if(dir.z > 0.0){isZPositive = 1;}

    var maxAxis:f32 = 0.0;
    var uc:f32 = 0.0;
    var vc:f32 = 0.0;

    // POSITIVE X
    if (isXPositive == 1 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from +z to -z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = -z;
      vc = y;
    }
    // NEGATIVE X
    if (isXPositive ==0 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from -z to +z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = z;
      vc = y;
    }
    // POSITIVE Y
    if (isYPositive==1 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from +z to -z
      maxAxis = absY;
      uc = x;
      vc = -z;
    }
    // NEGATIVE Y
    if (isYPositive ==0 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -z to +z
      maxAxis = absY;
      uc = x;
      vc = z;
    }
    // POSITIVE Z
    if (isZPositive == 1&& absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = x;
      vc = y;
    }
    // NEGATIVE Z
    if (isZPositive ==0 && absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from +x to -x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = -x;
      vc = y;
    }

    // Convert range from -1 to 1 to 0 to 1
    var u = 0.5f * (uc / maxAxis + 1.0f);
    var v = 0.5f * (vc / maxAxis + 1.0f);

    return vec2(u, v);
  }

    // Returns ±1
    fn signNotZero( v1:vec2<f32>) -> vec2<f32> {
        var v:vec2<f32> = v1;
        if(v.x >= 0.0){
            v.x = 1.0;
        }else{
            v.x = -1.0;
        }
        if(v.y >= 0.0){
            v.y = 1.0;
        }else{
            v.y= -1.0;
        }
        return v;
    }

    fn octEncode( v:vec3<f32> ) -> vec2<f32> {
        var l1norm = abs(v.x) + abs(v.y) + abs(v.z);
        var result = v.xy * (1.0 / l1norm);
        if (v.z < 0.0) {
            result = (1.0 - abs(result.yx)) * signNotZero(result.xy);
        }
        return result;
    }

    // Returns a unit vector. Argument o is an octahedral vector packed via octEncode,on the [-1, +1] square*/
    fn octDecode( o:vec2<f32> ) -> vec3<f32> {
        var v = vec3<f32>(o.x, o.y, 1.0 - abs(o.x) - abs(o.y));
        if (v.z < 0.0) {
            var tmp = (1.0 - abs(v.yx)) * signNotZero(v.xy);
            v.x = tmp.x;
            v.y = tmp.y;
        }
        return normalize(v);
    }

    fn Linear01Depth(z:f32,near:f32,far:f32)-> f32{
        let ZBufferZ = (-1.0+(far/near)) / far;
        let ZBufferW = near /far ;
        return 1.0 / (ZBufferZ * z + ZBufferW) ;
    }

    
    fn LinearizeDepth( depth:f32 , nearPlane:f32 , farPlane:f32 )-> f32 {
      var z = depth * 2.0 - 1.0;
      return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - z * (farPlane - nearPlane));
    }

    fn QuaternionToMatrix(q: vec4<f32>) -> mat4x4<f32> {
      // If q is guaranteed to be a unit quaternion, s will always
      // be 1.  In that case, this calculation can be optimized out.
      //float norm = GetNorm (q);
      //float s = (norm > 0.0) ? 2.0/norm : 0;

      var result: mat4x4<f32>;
  
      // Precalculate coordinate products
      let x = q.x * 2.0;
      let y = q.y * 2.0;
      let z = q.z * 2.0;
      let xx = q.x * x;
      let yy = q.y * y;
      let zz = q.z * z;
      let xy = q.x * y;
      let xz = q.x * z;
      let yz = q.y * z;
      let wx = q.w * x;
      let wy = q.w * y;
      let wz = q.w * z;
  
      // Calculate 3x3 matrix from orthonormal basis
      result[0][0] = 1.0 - (yy + zz);
      result[0][1] = xy + wz;
      result[0][2] = xz - wy;
      result[0][3] = 0.0;
  
      result[1][0] = xy - wz;
      result[1][1] = 1.0 - (xx + zz);
      result[1][2] = yz + wx;
      result[1][3] = 0.0;
  
      result[2][0] = xz + wy;
      result[2][1] = yz - wx;
      result[2][2] = 1.0 - (xx + yy);
      result[2][3] = 0.0;
  
      result[3][0] = 0.0;
      result[3][1] = 0.0;
      result[3][2] = 0.0;
      result[3][3] = 1.0;

      return result;
    }

    fn MakeScaleMatrix(scale: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          scale.x, 0.0, 0.0, 0.0,
          0.0, scale.y, 0.0, 0.0,
          0.0, 0.0, scale.z, 0.0,
          0.0, 0.0, 0.0, 1.0,
        );
    }

    fn MakeRotationMatrix(rotationQuaternion: vec4<f32>) -> mat4x4<f32> {
        return QuaternionToMatrix(rotationQuaternion);
    }

    fn MakeTranslationMatrix(translation: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          translation.x, translation.y, translation.z, 1.0,
        );
    }

    fn MakeMatrix4x4(scale: vec3<f32>, rotationQuaternion: vec4<f32>, translation: vec3<f32>) -> mat4x4<f32> {
        var scaleMat: mat4x4<f32> = MakeScaleMatrix(scale);
        var rotationMat: mat4x4<f32> = MakeRotationMatrix(rotationQuaternion);
        var translationMat: mat4x4<f32> = MakeTranslationMatrix(translation);
        return translationMat * scaleMat * rotationMat;
    }

    fn mixMatrix4x4(a: mat4x4<f32>, b: mat4x4<f32>, t:f32) -> mat4x4<f32> {
      return a * (1.0 - t) + b * t;
      // return mat4x4<f32>(
      //   mix(a[0], b[0], t),
      //   mix(a[1], b[1], t),
      //   mix(a[2], b[2], t),
      //   mix(a[3], b[3], t)
      // );
    }

    fn decodeDepth( color:vec4<f32> ) -> f32{
      var depth = 0.0 ;
      const bitShifts = vec4<f32>(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0); 
      depth = dot(color, bitShifts);
      return depth;
    }

    fn encodeDepth( depth:f32 ) -> vec4<f32>{
      const bitSh  = vec4<f32>(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
      const bitMsk = vec4<f32>(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
      var comp:vec4<f32>;
      comp  = depth * bitSh;
      comp  = fract(comp);
      comp -= comp.xxyz * bitMsk;
      return comp;
    }
`,gn=`
        struct MaterialUniform {
          transformUV1:vec4<f32>,
          transformUV2:vec4<f32>,

          baseColor: vec4<f32>,
          emissiveColor: vec4<f32>,
          materialF0: vec4<f32>,
          envIntensity: f32,
          normalScale: f32,
          roughness: f32,
          metallic: f32,
          ao: f32,

          roughness_min: f32,
          roughness_max: f32,
          metallic_min: f32,
          metallic_max: f32,
          emissiveIntensity: f32,
          alphaCutoff: f32,
          ior: f32,
          clearcoatColor: vec4<f32>,
          clearcoatWeight: f32,
          clearcoatFactor: f32,
          clearcoatRoughnessFactor: f32,
        };
      
        @group(2) @binding(0)
        var<uniform> materialUniform: MaterialUniform;
      `,xn=`
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,
  baseColor: vec4<f32>,
  alphaCutoff: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,_n=`
    #include "Common_frag"
    #include "GlobalUniform"

    fn UnLit(){
        
        let alpha = ORI_ShadingInput.BaseColor.a ;
        ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.BaseColor.rgb * alpha , alpha) ;

        #if USE_WORLDPOS
            ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
        #endif

        #if USEGBUFFER
            var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
            normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
            ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
            ORI_FragmentOutput.material = vec4<f32>(1.0,1.0,0.0,1.0);
        #endif
    }

    fn debugFragmentOut(){

    }
`;class Ri{static groupBindingAndFunctions(e,t){return`
            struct JointsMatrix {
                matrix : array<mat4x4<f32>>
            };

            @group(${e}) @binding(${t})
            var<storage, read> jointsMatrixIndexTable: array<f32>;

            @group(${e}) @binding(${t+1})
            var<storage, read> jointsInverseMatrix: JointsMatrix;

            @group(${e}) @binding(${t+2})
            var<storage, read> jointsIndexMapingTable: array<f32>;

            const MAX_JOINT_NUM = 8;
            fn getSkeletonWorldMatrix(joints: array<f32, MAX_JOINT_NUM>, weights: array<f32, MAX_JOINT_NUM>, num: u32) -> mat4x4<f32> {
                var result: mat4x4<f32>;
                for(var i: u32 = 0; i < num; i = i + 1) {
                    let jointId = i32(joints[i]);
                    let jointIndex = u32(jointsIndexMapingTable[jointId]);
                    let jointMatrixIndex = u32(jointsMatrixIndexTable[jointIndex]);
                    let joint = models.matrix[jointMatrixIndex] * jointsInverseMatrix.matrix[jointId] * weights[i];
                    result += joint;
                }
                return result;
            }

            fn getSkeletonWorldMatrix_4(joints: vec4<f32>, weights: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints.x, joints.y, joints.z, joints.w,
                    0, 0, 0, 0,
                ), array<f32, MAX_JOINT_NUM>(
                    weights.x, weights.y, weights.z, weights.w,
                    0, 0, 0, 0,
                ), 4);
            }
    
            fn getSkeletonWorldMatrix_8(joints0: vec4<f32>, weights0: vec4<f32>, joints1: vec4<f32>, weights1: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints0.x, joints0.y, joints0.z, joints0.w,
                    joints1.x, joints1.y, joints1.z, joints1.w,
                ), array<f32, MAX_JOINT_NUM>(
                    weights0.x, weights0.y, weights0.z, weights0.w,
                    weights1.x, weights1.y, weights1.z, weights1.w,
                ), 8);
            }
        `}}class Re{static getMorphTargetShaderBinding(e,t){return`
            fn blendMorphTargetPosition(vertexID:i32, posIn:vec3<f32>) -> vec3<f32>{
                let offset:i32 = vertexID * 3;
                var pos = posIn * morphTargetConfig.morphBaseInfluence;
                pos += vec3<f32>(morphTargetOpPositions[offset], morphTargetOpPositions[offset + 1], morphTargetOpPositions[offset + 2]);
                return pos;
            }

            #if USE_MORPHNORMALS
                fn blendMorphTargetNormal(vertexID:i32, normalIn:vec3<f32>) -> vec3<f32>{
                    let offset:i32 = vertexID * 3;
                    var normal = normalIn * morphTargetConfig.morphBaseInfluence;
                    normal += vec3<f32>(morphTargetOpNormals[offset], morphTargetOpNormals[offset + 1], morphTargetOpNormals[offset + 2]);
                    return normal;
                }
            #endif

            struct MorphTargetConfigData {
                morphBaseInfluence:f32,
                morphTargetCount:f32,
                totalVertexCount:f32,
                computeWorkGroupXY:f32,
            };
            
            @group(${e}) @binding(${t})
            var<uniform> morphTargetConfig: MorphTargetConfigData;
            
            @group(${e}) @binding(${t+1})
            var<storage,read> morphTargetOpPositions: array<f32>;

            #if USE_MORPHNORMALS
                @group(${e}) @binding(${t+2})
                var<storage,read> morphTargetOpNormals: array<f32>;
            #endif
`}static getMorphTargetAttr(e){return`@location(${e}) vIndex: f32,`}static getMorphTargetCalcVertex(){return`
            vertexPosition = blendMorphTargetPosition(i32(vertex.vIndex), vertexPosition);

            #if USE_MORPHNORMALS
                vertexNormal = blendMorphTargetNormal(i32(vertex.vIndex), vertexNormal);
            #endif
        `}}s(Re,"CsMain",`
        struct MorphTargetConfigData {
            morphBaseInfluence:f32,
            morphTargetCount:f32,
            totalVertexCount:f32,
            computeWorkGroupXY:f32,
        };

        @group(0) @binding(0) var<uniform> morphTargetConfig: MorphTargetConfigData;
        @group(0) @binding(1) var<storage, read> morphTargetInfluence : array<f32>;
        @group(0) @binding(2) var<storage, read> morphTargetPositions : array<f32>;
        @group(0) @binding(3) var<storage, read_write> morphTargetOpPositions : array<f32>;
        
        #if USE_MORPHNORMALS
            @group(0) @binding(4) var<storage, read> morphTargetNormals : array<f32>;
            @group(0) @binding(5) var<storage, read_write> morphTargetOpNormals : array<f32>;
        #endif
        
        @compute @workgroup_size( 8 , 8 , 1 )
        fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
        {
            let vertexIndex:i32 = i32(globalInvocation_id.y) * i32(morphTargetConfig.computeWorkGroupXY) + i32(globalInvocation_id.x);
        
            let morphTargetCount:i32 = i32(morphTargetConfig.morphTargetCount);
            let totalVertexCount:i32 = i32(morphTargetConfig.totalVertexCount);
            var vertexPosition:vec3<f32> = vec3<f32>(0.0);
            var vertexNormal:vec3<f32> = vec3<f32>(0.0);
            if(vertexIndex < totalVertexCount)
            {
                for(var i:i32 = 0; i < morphTargetCount; i ++){
                    let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                    let morphPosition = vec3<f32>(morphTargetPositions[offset], morphTargetPositions[offset + 1], morphTargetPositions[offset + 2]);
                    vertexPosition += morphTargetInfluence[i] * morphPosition;
                }

                var writeOffset = vertexIndex * 3;
                //op position
                morphTargetOpPositions[writeOffset] = vertexPosition.x;
                morphTargetOpPositions[writeOffset + 1] = vertexPosition.y;
                morphTargetOpPositions[writeOffset + 2] = vertexPosition.z;

                #if USE_MORPHNORMALS
                    for(var i:i32 = 0; i < morphTargetCount; i ++){
                        let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                        let morphNormal = vec3<f32>(morphTargetNormals[offset], morphTargetNormals[offset + 1], morphTargetNormals[offset + 2]);
                        vertexNormal += morphTargetInfluence[i] * morphNormal;
                    }

                    //op normal
                    morphTargetOpNormals[writeOffset] = vertexNormal.x;
                    morphTargetOpNormals[writeOffset + 1] = vertexNormal.y;
                    morphTargetOpNormals[writeOffset + 2] = vertexNormal.z;
                #endif
            }
        }
`);let vn=`
    #if USE_MORPHTARGETS
    ${Re.getMorphTargetShaderBinding(3,0)}
    #endif

    #if USE_SKELETON
    ${Ri.groupBindingAndFunctions(3,0)} 
    #endif

    struct VertexAttributes{
    @builtin(instance_index) index : u32,
    @location(0) position: vec3<f32>,
    @location(1) normal: vec3<f32>,
    @location(2) uv: vec2<f32>,
    @location(3) TEXCOORD_1: vec2<f32>,

    #if USE_TANGENT
        @location(4) TANGENT: vec4<f32>,
        #if USE_SKELETON
            @location(5) joints0: vec4<f32>,
            @location(6) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
            @location(7) joints1: vec4<f32>,
            @location(8) weights1: vec4<f32>,
        #endif
        #elseif USE_MORPHTARGETS
            ${Re.getMorphTargetAttr(5)}
        #endif
    #elseif USE_SKELETON
        @location(4) joints0: vec4<f32>,
        @location(5) weights0: vec4<f32>,
        #if USE_JOINT_VEC8
        @location(6) joints1: vec4<f32>,
        @location(7) weights1: vec4<f32>,
        #endif
    #elseif USE_MORPHTARGETS
        ${Re.getMorphTargetAttr(4)}
    #endif
    }

    struct VertexOutput {
    @location(0) varying_UV0: vec2<f32>,
    @location(1) varying_UV1: vec2<f32>,
    @location(2) varying_ViewPos: vec4<f32>,
    @location(3) varying_Clip: vec4<f32>,
    @location(4) varying_WPos: vec4<f32>,
    @location(5) varying_WNormal: vec3<f32>,
    @location(6) varying_Color: vec4<f32>,

    #if USE_SHADOWMAPING
        @location(7) varying_ShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        @location(8) varying_Tangent: vec4<f32>,
    #endif

    @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    fn ORI_Vert(vertex:VertexAttributes){
    var vertexPosition = vertex.position;
    var vertexNormal = vertex.normal;

    #if USE_MORPHTARGETS
    ${Re.getMorphTargetCalcVertex()}    
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
            let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
            ORI_MATRIX_M *= skeletonNormal ;
        #else
            let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
            ORI_MATRIX_M *= skeletonNormal ;
        #endif
    #endif

    #if USE_TANGENT
        ORI_VertexOut.varying_Tangent = vertex.TANGENT ;
    #endif

    ORI_NORMALMATRIX = transpose(inverse( mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ));

    var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));
    var viewPosition = ORI_MATRIX_V * worldPos;
    var clipPosition = ORI_MATRIX_P * viewPosition ;

    ORI_CameraWorldDir = normalize(ORI_CAMERAMATRIX[3].xyz - worldPos.xyz) ;

    ORI_VertexOut.varying_UV0 = vertex.uv.xy ;
    ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;
    ORI_VertexOut.varying_ViewPos = viewPosition / viewPosition.w;
    ORI_VertexOut.varying_Clip = clipPosition ;
    ORI_VertexOut.varying_WPos = worldPos ;
    ORI_VertexOut.varying_WPos.w = f32(vertex.index);
    ORI_VertexOut.varying_WNormal = normalize(ORI_NORMALMATRIX * vertexNormal.xyz) ;
    ORI_VertexOut.member = clipPosition ;
    }
`,yn=`
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,
  baseColor: vec4<f32>,
  rectClip: vec4<f32>,
  alphaCutoff: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,Sn=`
    struct IrradianceVolumeData {
        //0
        orientationIndex:f32,
            hysteresis:f32,
            OctRTSideSize:f32,
            OctRTMaxSize:f32,

            //1
            startX:f32,
            startY:f32,
            startZ:f32,
            ProbeSpace:f32,

            //2
            gridXCount:f32,
            gridYCount:f32,
            gridZCount:f32,
            maxDistance:f32,

            //3
            depthSharpness:f32,
            ProbeSourceTextureSize:f32,
            ProbeSize:f32,
            bounceIntensity:f32,

            //4
            probeRoughness:f32,
            normalBias:f32,
            irradianceChebyshevBias:f32,
            rayNumber:f32,

            //5
            irradianceDistanceBias:f32,
            indirectIntensity:f32,
            ddgiGamma:f32,
            lerpHysteresis:f32,
            //6

            debugX:f32,
            debugY:f32,
            debugZ:f32,
            slot0:f32,

            //..
            v7:vec4<f32>,
    }
`,bn=`
    #include "MathShader"
    #include "FastMathShader"
    #include "InstanceUniform"

    var<private> ORI_MATRIX_P: mat4x4<f32>;
    var<private> ORI_MATRIX_V: mat4x4<f32>;
    var<private> ORI_MATRIX_M: mat4x4<f32>;
    var<private> ORI_MATRIX_PV: mat4x4<f32>;
    var<private> ORI_MATRIX_PVInv: mat4x4<f32>;
    var<private> ORI_MATRIX_World: mat4x4<f32>;
    var<private> ORI_CAMERAMATRIX: mat4x4<f32>;
    var<private> ORI_NORMALMATRIX: mat3x3<f32>;
    var<private> ORI_CameraWorldDir: vec3<f32>;

    var<private> TIME: vec4<f32>;
    var<private> MOUSE: vec4<f32>;
    var<private> SCREEN: vec4<f32>;

    var<private> ProjectionParams: vec4<f32>;

    fn vertex_inline(vertex:VertexAttributes){
        TIME.x = globalUniform.frame;
        TIME.y = globalUniform.time;
        TIME.z = globalUniform.delta;

        MOUSE.x = globalUniform.mouseX;
        MOUSE.y = globalUniform.mouseY;

        SCREEN.x = globalUniform.windowWidth;
        SCREEN.y = globalUniform.windowHeight;

        ProjectionParams.x = globalUniform.near;
        ProjectionParams.y = globalUniform.far;
        ProjectionParams.z = 1.0 + 1.0 / globalUniform.far;

        ORI_MATRIX_P = globalUniform.projMat ;
        ORI_MATRIX_V = globalUniform.viewMat ;
        ORI_MATRIX_PV = ORI_MATRIX_P * ORI_MATRIX_V ;
        ORI_MATRIX_PVInv = globalUniform.pvMatrixInv ;
        ORI_CAMERAMATRIX = globalUniform.cameraWorldMatrix ;

        ORI_MATRIX_M = models.matrix[u32(vertex.index)];
            
        #if USE_INSTANCEDRAW
            let modelID = instanceDrawID.matrixIDs[vertex.index];
            ORI_MATRIX_M = models.matrix[modelID];
        #endif
    }
`,wn=`
  #include "GlobalUniform"
  #include "FragmentVarying"
  #include "ColorPassFragmentOutput"
  #include "ShadingInput"

  var<private> ORI_FragmentOutput: FragmentOutput;
  var<private> ORI_VertexVarying: FragmentVarying;
  var<private> ORI_ShadingInput: ShadingInput;
  @fragment
  fn FragMain( vertex_varying:FragmentVarying ) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    ORI_FragmentOutput.color = vec4<f32>(1.0, 0.0, 0.0, 1.0);
    #if USE_WORLDPOS
      ORI_FragmentOutput.worldPos = ORI_VertexVarying.vWorldPos;
    #endif
    #if USEGBUFFER
      ORI_FragmentOutput.worldNormal = vec4<f32>(ORI_ShadingInput.Normal.rgb ,1.0); 
      ORI_FragmentOutput.material = vec4<f32>(0.0,1.0,0.0,0.0);
    #endif
    frag();
    #if USE_DEBUG
      debugFragmentOut();
    #endif

    return ORI_FragmentOutput ;
  }
`,Tn=`
    #include "WorldMatrixUniform"
    #include "VertexAttributes_vert"
    #include "GlobalUniform"
    #include "Inline_vert"
    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        vertex_inline(vertex);
        vert(vertex);
        return ORI_VertexOut ;
    }
`,Cn=`
    @group(1) @binding(auto)
    var brdflutMapSampler: sampler;
    @group(1) @binding(auto)
    var brdflutMap: texture_2d<f32>;
`,Mn=`
    @group(1) @binding(auto)
    var prefilterMapSampler: sampler;
    @group(1) @binding(auto)
    var prefilterMap: texture_cube<f32>;
    @group(1) @binding(auto)
    var envMapSampler: sampler;
    @group(1) @binding(auto)
    var envMap: texture_cube<f32>;
`,Ms=`
  struct GlobalUniform {
    projMat: mat4x4<f32>,
    viewMat: mat4x4<f32>,
    cameraWorldMatrix: mat4x4<f32>,
    pvMatrixInv : mat4x4<f32>,
    shadowMatrix: array<mat4x4<f32>,8>,
    CameraPos: vec3<f32>,
    
    frame: f32,
    time: f32,
    delta: f32,
    shadowBias: f32,
    skyExposure: f32,
    renderPassState:f32,
    quadScale: f32,
    hdrExposure: f32,
  
    renderState_left: i32,
    renderState_right: i32,
    renderState_split: f32,

    mouseX: f32,
    mouseY: f32,
    windowWidth: f32,
    windowHeight: f32,

    near: f32,
    far: f32,

    pointShadowBias: f32,
    shadowMapSize: f32,
    shadowSoft: f32,
  };

  @group(0) @binding(0)
  var<uniform> globalUniform: GlobalUniform;
`,Pn=`
    #if USE_INSTANCEDRAW
        struct InstanceUniform {
            matrixIDs : array<i32>
        };
        @group(2) @binding(7)
        var<storage, read> instanceDrawID : InstanceUniform;
    #endif
`,En=`
    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;
`,Dn=`
  fn Pow3(  x : f32 ) -> f32
  {
      var xx = x*x;
      return x * xx;
  }

  fn Pow4(  x : f32 ) -> f32
  {
      var xx = x*x;
      return xx * xx;
  }

  fn pow5(x: f32) -> f32 {
      var x2 = x * x;
      return x2 * x2 * x;
  }

  fn rcp( x:f32 ) -> f32
  {
      return 1.0 / x;
  }

  fn rsqrt3( a : vec3<f32> ) -> vec3<f32>
  {
    return pow(a, vec3<f32>(-0.5));
  }

  fn rsqrt( a : f32 ) -> f32
  {
    return pow(a, -0.5);
  }
`,Rn=`
    fn perturbNormal(  worldPos:vec3<f32>,  surf_norm:vec3<f32>,  mapN:vec3<f32> , normalScale:f32 , face:f32 ) -> vec3<f32> {
        var q0 = vec3<f32>( dpdx( worldPos.x ), dpdx( worldPos.y ), dpdx( worldPos.z ) );
        var q1 = vec3<f32>( dpdy( worldPos.x ), dpdy( worldPos.y ), dpdy( worldPos.z ) );
        var st0 = dpdx( ORI_VertexVarying.fragUV0.xy );
        var st1 = dpdy( ORI_VertexVarying.fragUV0.xy );
        var N = surf_norm;
        var q1perp = cross( q1, N );
        var q0perp = cross( N, q0 );
        var T = q1perp * st0.x + q0perp * st1.x;
        var B = q1perp * st0.y + q0perp * st1.y;

        var det = max( dot( T, T ), dot( B, B ) );
        var scale = 1.0 ;
        if( det != 0.0 ){
            scale = inverseSqrt( det ) ;
        }
        scale *= normalScale;
        return normalize( (T * ( -mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z ) * face ) ;
    }

    fn unpackNormalMap( normal : vec3<f32> ) -> vec3<f32>
    {
        var normalTex = vec3<f32>( normal.xyz * 2.0 - 1.0 ) ;
        return normalize(normalTex);
    }

    fn unPackNormal(normal : vec3<f32> , height:f32 ) -> vec3<f32>{
        var face = 1.0 ;
        if(ORI_VertexVarying.face){
            face = 1.0 ;
        }else{
            face = -1.0 ;
        }

        #if USE_RGNORMAL
            return unPackRGNormal(normal,height,face);
        #else
            var n = normal ;
            #if USE_NORMALFILPY
            n.y = 1.0 - n.y ; 
            #endif
            
            var mapNormal: vec3<f32> = unpackNormalMap(n) ;
            return perturbNormal(ORI_VertexVarying.vWorldPos.xyz , ORI_VertexVarying.vWorldNormal.xyz , mapNormal , height , face  ) ;
        #endif
    }

    fn unPackRGNormal(normal : vec3<f32> , height:f32 , face:f32) -> vec3<f32> {
        var d = normal.rg * 2.0 - 1.0 ;
        var l = 1.0 - saturate(dot(d,d));
        var s = sqrt(l);
        var rg = d * height ; 
        var mapNormal = vec3<f32>(rg,s);
        var outN = perturbNormal(ORI_VertexVarying.vWorldPos.xyz,ORI_VertexVarying.vWorldNormal,mapNormal,1.0,face) ;
        return outN ;
    }
`,In=`
    struct FragmentVarying {
        @location(0) fragUV0: vec2<f32>,
        @location(1) fragUV1: vec2<f32>,
        @location(2) viewPosition: vec4<f32>,
        @location(3) fragPosition: vec4<f32>,
        @location(4) vWorldPos: vec4<f32>,
        @location(5) vWorldNormal: vec3<f32>,
        @location(6) vColor: vec4<f32>,

        #if USE_SHADOWMAPING
            @location(7) vShadowPos: vec4<f32>,
        #endif

        #if USE_TANGENT
            @location(8) TANGENT: vec4<f32>,
        #endif
        
        @builtin(front_facing) face: bool,
        @builtin(position) fragCoord : vec4<f32>
    };
`,Ln=`
    struct FragmentOutput {
        @location(0) color: vec4<f32>,
        #if USE_WORLDPOS
            @location(1) worldPos: vec4<f32>,
        #endif
        #if USEGBUFFER
            @location(2) worldNormal: vec4<f32>,
            @location(3) material: vec4<f32>,
        #endif
        // @builtin(frag_depth) out_depth: f32
    };
`,On=`
    struct ShadingInput{
        BaseColor:vec4<f32>,
        Roughness:f32,
        Metallic:f32,
        Specular:f32,
        EmissiveColor:vec4<f32>,
        SurfaceColor:vec4<f32>,
        Normal:vec3<f32>,
        Tangent:vec4<f32>,
        WorldPositionOffset:vec3<f32>,
        AmbientOcclusion:f32,
        PixelDepthOffset:f32,

        Opacity:f32,
        OpacityMask:f32,

        Refraction:f32,
    }
`,An=`
    #if USE_IES_PROFILE 
        @group(1) @binding(auto)
        var iesTextureArrayMapSampler : sampler;
        @group(1) @binding(auto)
        var iesTextureArrayMap: texture_2d_array<f32> ;
    #endif

    fn getLightIESProfileAtt( wPos : vec3<f32> , light:LightData ) -> f32
    {
        #if USE_IES_PROFILE 
            let tangent = vec3<f32>(1.0,0.0,0.0);
            let lightBitangent = normalize( cross( tangent, light.direction ) );
            let lightMatrix = mat4x4( vec4<f32>(light.direction.xyz, 0.0), vec4<f32>(lightBitangent.xyz, 0.0), vec4<f32>(tangent.xyz, 0.0), vec4<f32>(0.0, 0.0, 0.0, 1.0) );
            let lightMatrixInv = transpose(lightMatrix);
            let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
            let l = lightPos - wPos; 
            let toLight = normalize(l);
            let localToLight = (vec4<f32>(toLight.xyz, 0.0) * lightMatrixInv).xyz;
            let dotProd = dot(toLight, light.direction);
            let angle = asin(dotProd);
            let normAngle = (angle / PI) + 0.5 ;
            let tangentAngle = atan2( -localToLight.z, -localToLight.x ); 
            let normTangentAngle = tangentAngle / (PI * 2.0) + 0.5 ;
            if(light.ies >= 0.0){
                return textureSampleLevel(iesTextureArrayMap, iesTextureArrayMapSampler, vec2<f32>(normAngle , normTangentAngle) , i32(light.ies) , 0.0).r ;
            }else{
                return 1.0;
            }
        #else 
            return 1.0;
        #endif
    }

`,Un=`
    #if USE_SHADOWMAPING
    @group(1) @binding(auto) var shadowMapSampler: sampler_comparison;
    @group(1) @binding(auto) var shadowMap: texture_depth_2d_array;
    #endif

    @group(1) @binding(auto) var pointShadowMapSampler: sampler;
    @group(1) @binding(auto) var pointShadowMap: texture_depth_cube_array;

            struct ShadowStruct{
      directShadowVisibility: array<f32, 8>,
        pointShadows: array<f32, 8>,
            }

    var<private>shadowStrut: ShadowStruct;

            fn directShadowMaping(shadowBias: f32)  {
      for (var i: i32 = i32(0); i < i32(clustersUniform.numLights); i = i + 1) {
        var light = lightBuffer[i];
        var shadowIndex = i32(light.castShadow);
        shadowStrut.directShadowVisibility[shadowIndex] = 1.0;
        #if USE_SHADOWMAPING


        if (shadowIndex < 0 && light.lightType != DirectLightType) {
          continue;
        }

        var shadowPosTmp = globalUniform.shadowMatrix[shadowIndex] * vec4<f32>(ORI_VertexVarying.vWorldPos.xyz, 1.0);
        var shadowPos = shadowPosTmp.xyz / shadowPosTmp.w;
        var varying_shadowUV = shadowPos.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
        var bias = max(shadowBias * (1.0 - dot(ORI_ShadingInput.Normal, light.direction)), 0.000005);

        // if(varying_shadowUV.y>=1.0) {
        //     shadowStrut.directShadowVisibility[shadowIndex] = 2.0 ;
        //     continue;
        // }
        if (varying_shadowUV.x <= 1.0 && varying_shadowUV.x >= 0.0 && varying_shadowUV.y <= 1.0 && varying_shadowUV.y >= 0.0 && shadowPosTmp.z <= 1.0) {
          var texelSize = 1.0 / vec2<f32>(globalUniform.shadowMapSize);
          var oneOverShadowDepthTextureSize = texelSize;
          var size = 1;
          var sizeBlock = size * 2 + 1;
          var sizeBlockA = sizeBlock * sizeBlock;
          var visibility = 0.0;
          for (var y = -size; y <= size; y++) {
            for (var x = -size; x <= size; x++) {
              var offset = vec2<f32>(f32(x), f32(y)) * oneOverShadowDepthTextureSize / f32(sizeBlock);
              visibility += textureSampleCompare(
                shadowMap,
                shadowMapSampler,
                varying_shadowUV + offset,
                shadowIndex,
                shadowPos.z - bias
              );
            }
          }
          visibility /= f32(sizeBlockA);
          shadowStrut.directShadowVisibility[shadowIndex] = visibility + 0.001;
        }
        #endif
      }
    }

            fn pointShadowMapCompare(shadowBias: f32){
      let worldPos = ORI_VertexVarying.vWorldPos.xyz;
      let offset = 0.1;
      let lightIndex = getCluster(ORI_VertexVarying.fragCoord);
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count, 0.0);
      for (var i: i32 = i32(start); i < i32(end); i = i + 1) {
        let light = getLight(i);
        shadowStrut.pointShadows[light.castShadow] = 1.0;

        #if USE_SHADOWMAPING
        if (light.castShadow < 0 || light.lightType == DirectLightType) {
          continue;
        }
        let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
        var shadow = 0.0;
        let frgToLight = worldPos - lightPos.xyz;
        var dir: vec3<f32> = normalize(frgToLight);
        var len = length(frgToLight);
        var bias = max(shadowBias * globalUniform.far * (1.0 - dot(ORI_ShadingInput.Normal, dir)), 0.005);

        #if USE_PCF_SHADOW
        let samples = 4.0;
        for (var x: f32 = -offset; x < offset; x += offset / (samples * 0.5)) {
          for (var y: f32 = -offset; y < offset; y += offset / (samples * 0.5)) {
            for (var z: f32 = -offset; z < offset; z += offset / (samples * 0.5)) {
              let offsetDir = normalize(dir.xyz + vec3<f32>(x, y, z));
              var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
              depth *= globalUniform.far;
              if ((len - bias) > depth) {
                shadow += 1.0 * dot(offsetDir, dir.xyz);
              }
            }
          }
        }
        shadow = min(max(shadow / (samples * samples * samples), 0.0), 1.0);
        #endif

        #if USE_SOFT_SHADOW
        let vDis = length(globalUniform.CameraPos.xyz - worldPos.xyz);
        let sampleRadies = globalUniform.shadowSoft;
        let samples = 20;
        for (var j: i32 = 0; j < samples; j += 1) {
          let offsetDir = normalize(dir.xyz + sampleOffetDir[j] * sampleRadies);
          var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
          depth *= globalUniform.far;
          if ((len - bias) > depth) {
            shadow += 1.0 * dot(offsetDir, dir.xyz);
          }
        }
        shadow = min(max(shadow / f32(samples), 0.0), 1.0);
        #endif

        #if USE_HARD_SHADOW
        var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, dir.xyz, light.castShadow, 0);
        depth *= globalUniform.far;
        if ((len - bias) > depth) {
          shadow = 1.0;
        }
        #endif

        shadowStrut.pointShadows[light.castShadow] = 1.0 - shadow;
        #endif
      }
    }

    #if USE_SOFT_SHADOW
    var<private>sampleOffetDir : array<vec3<f32>, 20> = array<vec3<f32>, 20>(
      vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, -1.0, 1.0), vec3<f32>(-1.0, -1.0, 1.0), vec3<f32>(-1.0, 1.0, 1.0),
      vec3<f32>(1.0, 1.0, -1.0), vec3<f32>(1.0, -1.0, -1.0), vec3<f32>(-1.0, -1.0, -1.0), vec3<f32>(-1.0, 1.0, -1.0),
      vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, -1.0, 0.0), vec3<f32>(-1.0, -1.0, 0.0), vec3<f32>(-1.0, 1.0, 0.0),
      vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(-1.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, -1.0), vec3<f32>(-1.0, 0.0, -1.0),
      vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(0.0, -1.0, 1.0), vec3<f32>(0.0, -1.0, -1.0), vec3<f32>(0.0, 1.0, -1.0),
    );
    #endif
`,Bn=`
#include "IrradianceVolumeData_frag"
    fn pow3(  x : f32 ) -> f32
    {
        var xx = x*x;
        return x * xx;
    }

    struct IrradianceField {
        probeStartPosition: vec4<f32>,
        probeCounts:vec4<f32>,
        probeStep:f32,
        irradianceTextureWidth:f32,
        irradianceTextureHeight:f32,
        irradianceProbeSideLength:f32,
    };

    @group(1) @binding(auto)
    var irradianceMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceMap: texture_2d<f32>;
    @group(1) @binding(auto)
    var irradianceDepthMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceDepthMap: texture_2d<f32>;

    @group(2) @binding(6)
    var<storage,read> irradianceData : IrradianceVolumeData ;

    var<private> irradianceFieldSurface: IrradianceField;
    var<private> energyPreservation: f32 = 0.85;
    var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

    fn getIrradianceFieldSurface() -> IrradianceField{
        let data = irradianceData ;
        irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
        irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
        irradianceFieldSurface.probeStep = data.ProbeSpace;
        irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
        return irradianceFieldSurface;
    }

    fn rotateDir(n:vec3<f32>) -> vec3<f32>{
       return normalize(applyQuaternion(-n, quaternion));
    }

    fn square1f(v:f32) -> f32 {
        return v * v ;
     }

   fn square(v:vec3<f32>) -> vec3<f32>{
      return v*v;
   }

    fn getIrradiance() -> vec4<f32>{
        var irradiance = sampleIrradianceField();
        var outerVolumeFactor:f32 = getOuterVolume(irradianceFieldSurface, ORI_VertexVarying.vWorldPos.xyz);
        irradiance *= outerVolumeFactor;
        return irradiance ;
    }
    
    fn debugProbe(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0);
        return probeIrradiance;
    }
    
    fn debugProbeDepth(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);
        
        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV ,0.0);
        probeIrradiance.x = probeIrradiance.x / irradianceData.maxDistance;
        probeIrradiance.y = 0.0;
        probeIrradiance.z = 0.0;
        probeIrradiance.w = 1.0;
        return probeIrradiance;
    }
    
    fn getOuterVolume(L:IrradianceField, position:vec3<f32>) -> f32{
        let halfWidth:vec3<f32> = 0.5 * (L.probeCounts.xyz - 1.0) * L.probeStep;
        let edgeWidth:vec3<f32> = halfWidth + L.probeStep;
        let centerPosition:vec3<f32> = halfWidth + L.probeStartPosition.xyz;
        let clampPos = min(edgeWidth, abs(position - centerPosition));
        
        let factorX = getOuterAxis(clampPos.x, edgeWidth.x, L.probeStep);
        let factorY = getOuterAxis(clampPos.y, edgeWidth.y, L.probeStep);
        let factorZ = getOuterAxis(clampPos.z, edgeWidth.z, L.probeStep);
        return factorX * factorY * factorZ;
    }
    
    fn getOuterAxis(current:f32, edge:f32, space:f32) -> f32{
        return clamp((edge - current) / space, 0.0, 1.0);
    }

    fn getBaseGridCoord(L:IrradianceField, X:vec3<f32>) -> vec3<i32> {
        var offsetIndex = (X - L.probeStartPosition.xyz) / irradianceFieldSurface.probeStep;
        return clamp(vec3<i32>(offsetIndex.xyz), vec3<i32>(0), vec3<i32>(L.probeCounts.xyz) - 1);
    }

    fn gridCoordToProbeIndex(L:IrradianceField, grid:vec3<i32>) -> i32
    {
        return grid.x + i32(L.probeCounts.x) * grid.z + grid.y * i32(L.probeCounts.z * L.probeCounts.x);
    }

    fn gridCoordToPosition(L:IrradianceField, grid:vec3<i32>) -> vec3<f32>
    {
        var pos:vec3<f32> = vec3<f32>(grid.xyz) * L.probeStep + L.probeStartPosition.xyz;
        return pos;
    }

    fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
    {
        var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
        uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
        uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
        return uv ;
    }

    fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
    {
        var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
        var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetZ = probeID / blockCount ;

        var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

        var blockOffset = vec2<f32>(0.0);
        blockOffset.x = f32(offsetX) * size;
        blockOffset.y = f32(offsetY) * size + f32(offsetZ) * irradianceFieldSurface.probeCounts.z * size;

        let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
        var probeCounts:vec3<f32> = irradianceFieldSurface.probeCounts.xyz;

        var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
        var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

        pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

        return pixelCoord + 1.0 ;
    }

    fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
    {
      var pixelCoord = pixelCoord0;
      let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
      let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
      let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
      let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
      let col:i32 = pixelCoord.y / pixelCountYMax;
      pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
      pixelCoord.y = pixelCoord.y % pixelCountYMax;
      return pixelCoord;
    }

    var<private> wpNormal:vec3<f32> ;
    fn sampleIrradianceField() -> vec4<f32>{
        wpNormal = ORI_ShadingInput.Normal.xyz ;
        var wo:vec3<f32> = ORI_CameraWorldDir ;
        var wsN:vec3<f32> = normalize(wpNormal);
        var direction:vec3<f32> = wpNormal;
        var worldPosition: vec3<f32> = ORI_VertexVarying.vWorldPos.xyz;
   
        getIrradianceFieldSurface();

        let surfaceBias = (wsN + 3.0 * wo) * irradianceData.normalBias ;

        var irradiance = vec3<f32>(0.0, 0.0, 0.0);
        var accumulatedWeights = 0.0;
        var biasedWorldPosition = (worldPosition + surfaceBias);

        var baseProbeCoords: vec3<i32> = getBaseGridCoord(irradianceFieldSurface, worldPosition);
        
        var baseProbeWorldPosition: vec3<f32> = gridCoordToPosition(irradianceFieldSurface, baseProbeCoords) ;
        
        var gridSpaceDistance = (biasedWorldPosition - baseProbeWorldPosition);

        // alpha is how far from the floor(currentVertex) position. on [0, 1] for each axis.
        var alpha: vec3<f32> = clamp(gridSpaceDistance / (irradianceFieldSurface.probeStep), vec3<f32>(0.0), vec3<f32>(1.0));
        // let irradianceDir = rotateDir(wsN.xyz);
        // Iterate over adjacent probe cage
        for (var i:i32 = 0; i < 8; i = i + 1) {
            var adjacentProbeOffset : vec3<i32> = vec3<i32>(i, i32(f32(i) * 0.5), i32(f32(i) * 0.25)) & vec3<i32>(1);
            var adjacentProbeCoords: vec3<i32> = clamp(baseProbeCoords + adjacentProbeOffset, vec3<i32>(0),  vec3<i32>(irradianceFieldSurface.probeCounts.xyz) - 1) ;
            
            var adjacentProbeIndex :i32 = gridCoordToProbeIndex(irradianceFieldSurface, adjacentProbeCoords);
            var adjacentProbeWorldPosition :vec3<f32> = gridCoordToPosition(irradianceFieldSurface, adjacentProbeCoords) ;//+ (wsN + 3.0 * w_o) * globalUniform.normalBias;
         
            var worldPosToAdjProbe = normalize(adjacentProbeWorldPosition - worldPosition);
            var biasedPosToAdjProbe = normalize(adjacentProbeWorldPosition - biasedWorldPosition);
            var biasedPosToAdjProbeDist = length(adjacentProbeWorldPosition - biasedWorldPosition);

            let trilinear = max(vec3<f32>(0.001), mix(1.0 - alpha, alpha, vec3<f32>(adjacentProbeOffset)));
            let trilinearWeight = (trilinear.x * trilinear.y * trilinear.z);
            var weight = 1.0;

            var wrapShading = (dot(worldPosToAdjProbe, direction) + 1.0) * 0.5;
            weight *= (wrapShading * wrapShading) + 0.2;

            var depthDir = -biasedPosToAdjProbe;//probe - world
            depthDir = applyQuaternion(depthDir, quaternion);
            var probeTextureUV : vec2<f32> = textureCoordFromDirection(depthDir.xyz,
                adjacentProbeIndex,
                irradianceFieldSurface.irradianceTextureWidth,
                irradianceFieldSurface.irradianceTextureHeight,
                irradianceFieldSurface.irradianceProbeSideLength);

            var filteredDistance : vec2<f32> = 2.0 * textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV,0.0).rg ;
           
            var variance = abs((filteredDistance.x * filteredDistance.x) - filteredDistance.y);

            var chebyshevWeight = 1.0;
            if(biasedPosToAdjProbeDist > filteredDistance.x ) // occluded
            {
                var v = biasedPosToAdjProbeDist - filteredDistance.x ;
                chebyshevWeight = variance / (variance + (v * v));
                // Increase the contrast in the weight
                chebyshevWeight = max((chebyshevWeight * chebyshevWeight * chebyshevWeight), 0.0);
            }

            weight *= max(0.05, chebyshevWeight);
            weight = max(0.000001, weight);

            let crushThreshold = 0.2;
            if (weight < crushThreshold)
            {
                weight *= (weight * weight) * (1.0 / (crushThreshold * crushThreshold));
            }

            weight *= trilinearWeight;
            
            //worldPosToAdjProbe
            let rotateDir = applyQuaternion(-direction, quaternion);
            probeTextureUV = textureCoordFromDirection((rotateDir),
            adjacentProbeIndex,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

            var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0).xyz;

            var exponent =  irradianceData.ddgiGamma * 0.5;
            probeIrradiance = pow(probeIrradiance, vec3<f32>(exponent));
            
            irradiance += (weight * probeIrradiance);
            accumulatedWeights += weight;
        }

        if(accumulatedWeights == 0.0){
            return vec4<f32>(0.0, 0.0, 0.0,1.0);
        }

        irradiance *= (1.0 / accumulatedWeights);   
        irradiance *= irradiance;                   

        irradiance *= 6.2831853071795864;     
        irradiance *= irradianceData.indirectIntensity;
        return vec4<f32>(irradiance,1.0) ;
    }

`,zn=`
#include "Clearcoat_frag"
    #include "EnvMap_frag"
    #include "BrdfLut_frag"

    struct FragData {
        Ao: f32,
        Metallic: f32,
        Roughness: f32,

        Albedo: vec4<f32>,
        Emissive: vec3<f32>,

        N: vec3<f32>,
        V: vec3<f32>,
        R: vec3<f32>,

        F0: vec3<f32>,
        F: vec3<f32>,
        KS: vec3<f32>,
        KD: vec3<f32>,
        Shadow: f32,
        Indirect: f32,
        Reflectance: f32,

        NoV: f32,
        FaceDirection:f32,

        DiffuseColor: vec3<f32>,
        SpecularColor: vec3<f32>,
        ClearcoatRoughness:f32,
        EnvColor: vec3<f32>,
        Irradiance: vec3<f32>,
    };

    var<private> fragData: FragData;

    struct BxDFContext
    {
        NoV : f32 ,
        NoL : f32 ,
        VoL : f32 ,
        NoH : f32 ,
        VoH : f32
    };

    fn getContext( N:vec3<f32>, V:vec3<f32>, H:vec3<f32>, L:vec3<f32> ) -> BxDFContext
    {
        var Context:BxDFContext ;
        Context.NoL = saturate(dot(N, L))  ;
        Context.NoV = saturate(dot(N, V))  ;
        Context.VoL = saturate(dot(V, L)) ;
        Context.NoH = saturate(dot(N, H));
        Context.VoH = saturate(dot(V, H));

        // Context.NoL = max(dot(N, L),0.0);
        // Context.NoV = max(dot(N, V),0.0);
        // Context.VoL = max(dot(V, L),0.0) ;
        // Context.NoH = saturate(dot(N, H));
        // Context.VoH = max(dot(V, H),0.0);
        return Context ;
    }

    // convert roughness to mipmapLevel
    fn roughnessToMipmapLevel( roughness: f32 , mipmapCount:i32 ) -> f32{
        let level = roughness * (1.7 - 0.7 * roughness );
        return level * f32(mipmapCount);
    }

    fn Fd90( NoL:f32, roughness:f32) -> f32
    {
        return (2.0 * NoL * roughness) + 0.4;
    }

    fn KDisneyTerm( NoL:f32, NoV:f32 , roughness:f32) -> f32
    {
        return (1.0 + Fd90(NoL, roughness) * pow(1.0 - NoL, 5.0)) * (1.0 + Fd90(NoV, roughness) * pow(1.0 - NoV, 5.0));
    }

    fn FresnelSchlick( NoV:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(1.0 - NoV, 5.0);
    }

    fn FresnelSchlickRoughness( NoV:f32,  F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(1.0 - NoV, 5.0);
    }

    fn DistributionGGX( NdotH:f32 ,  roughness:f32 ) -> f32
    {
        let alpha = roughness * roughness;
        let alpha2 = roughness * roughness;

        let NdotH2 = NdotH * NdotH;

        let nom   = alpha2;
        var denom = (NdotH2 * (alpha2 - 1.0) + 1.0);
        denom = PI * denom * denom;

        return nom / denom;
    }

    // [Heitz 2014, "Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs"]
    fn Vis_SmithJoint( NoV : f32 ,  NoL : f32 ,  a2 : f32) -> f32
    {
        var Vis_SmithV = NoL * sqrt(NoV * (NoV - NoV * a2) + a2);
        var Vis_SmithL = NoV * sqrt(NoL * (NoL - NoL * a2) + a2);
        return 0.5 * rcp(Vis_SmithV + Vis_SmithL);
    }

    fn GeometrySchlickGGX( NdotV : f32 , roughness : f32 ) -> f32
    {
        //roughness compute ks
        let r = (roughness + 1.0);
        let k = (r*r) / 8.0;

        let nom   = NdotV;
        let denom = NdotV * (1.0 - k) + k;
        
        return nom / denom;
    }
    
    fn GeometrySmith( NdotV:f32 , NdotL:f32 , roughness : f32) -> f32
    {
        // let NdotV = max(dot(N, V), 0.0);
        // let NdotL = max(dot(N, L), 0.0);
        let ggx1 = GeometrySchlickGGX(NdotV, roughness);
        let ggx2 = GeometrySchlickGGX(NdotL, roughness);
        return ggx1 * ggx2;
    }

    fn GeometryAttenuationGGXSmith( NdotL:f32,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn colorLinear( colorVector:vec3<f32> ) -> vec3<f32>
    {
        var linearColor = pow(colorVector.rgb, vec3<f32>(2.2));
        return linearColor;
    }

    fn computeFresnelSchlick( NoV:f32 , F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - NoV,0.0,1.0), 5.0);
    }

    fn computeFresnelSchlickRoughness(NoV:f32 , F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - fragData.NoV,0.0,1.0), 5.0);
    }

    fn computeDistributionGGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32) -> f32
    {
        var alpha = roughness * roughness;
        var alpha2 = alpha * alpha; 

        var NdotH = saturate(dot(N, H));
        var NdotH2 = NdotH * NdotH;

        return (alpha2) / (PI * (NdotH2 * (alpha2 - 1.0) + 1.0) * (NdotH2 * (alpha2 - 1.0) + 1.0));
    }

    fn D_GGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32 ) -> f32
    {
        var NoH = saturate(dot(N, H));
        var d = ( NoH * roughness - NoH ) * NoH + 1.0;	// 2 mad
        return roughness / ( PI*d*d );					// 4 mul, 1 rcp
    }

    fn computeGeometryAttenuationGGXSmith( NdotL:f32 ,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn Vis_Smith(  NoL:f32 ,  NoV:f32,  a2:f32 )-> f32
    {
        var Vis_SmithV = NoV + sqrt( NoV * (NoV - NoV * a2) + a2 );
        var Vis_SmithL = NoL + sqrt( NoL * (NoL - NoL * a2) + a2 );
        return rcp( Vis_SmithV * Vis_SmithL );
    }

    fn simpleBRDF( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,L:vec3<f32>,att:f32,lightColor:vec3<f32>,roughness:f32 )-> vec3<f32>{
        let H = normalize(V + L);
        let Context:BxDFContext = getContext(N,V,H,L);

        let D = DistributionGGX( Context.NoH , roughness);
        let G = GeometrySmith(Context.NoV,Context.NoL, roughness );
        let F = FresnelSchlick(Context.VoH, vec3<f32>(fragData.F0));
        let specular = ( D * G * F ) / (4.0 * Context.NoV * Context.NoL + 0.001);
        let kS = F;
        var kd = 1.0 - kS ;
        kd *= 1.0 - fragData.Metallic ;
        var diffuse = kd * (albedo.rgb / PI ) ;
        let ambient = specular.rgb ;

        fragData.KD += kd;
        fragData.KS += F;

        var col = (diffuse + ambient) * Context.NoL * lightColor * att ;
        // var col = (diffuse + ambient) * Context.NoL * lightColor ;
        return (col.rgb ) ;
    }

    fn getSpecularDominantDir (  N : vec3<f32> , R : vec3<f32> , roughness : f32 ) -> vec3<f32>
    {
        var smoothness = saturate (1.0 - roughness );
        var lerpFactor = smoothness * ( sqrt ( smoothness ) + roughness );
        // The result is not normalized as we fetch in a cubemap
        return mix (N, R, lerpFactor );
    }

    fn approximateSpecularIBL( specularColor:vec3<f32> , roughness:f32 , R:vec3<f32>) -> vec3<f32> {
        let NoV = fragData.NoV ;
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        var prefilteredColor: vec3<f32> = (textureSampleLevel(prefilterMap, prefilterMapSampler, getSpecularDominantDir(fragData.N,R,roughness) , mip ).rgb);
        prefilteredColor = globalUniform.skyExposure * LinearToGammaSpace(prefilteredColor);
        var envBRDF = textureSampleLevel(brdflutMap, brdflutMapSampler, vec2<f32>(NoV, roughness) , 0.0 ) ;
        return prefilteredColor * (specularColor.rgb * envBRDF.x + saturate( 50.0 * specularColor.g ) * envBRDF.y) ;
    }

    fn fresnel_coat(n:vec3<f32>,v:vec3<f32>,ior:f32) -> f32 {
        var f0 = (1.0-ior)/(1.0+ior);
        f0 = f0 * f0  ;
        let fr = pow((f0 + (1.0 - f0)*(1.0 - abs( max(dot(n,v),0.0) ))) , 5.0 ) ;  
        return fr ;
    }

    fn reflectEnvMap(n:vec3<f32> , v:vec3<f32> , roughness:f32) -> vec3<f32> {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(envMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var prefilteredColor: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(envMap, envMapSampler, R , mip ).rgb);
        prefilteredColor = LinearToGammaSpace(prefilteredColor);
        return prefilteredColor ;
    }

    fn Specular_D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        let a2 = roughness * roughness ;
        let f = (NoH * a2 - NoH) * NoH + 1.0;
        return a2 / (PI * f * f) ;
    }

    fn V_Kelemen( LoH : f32 ) -> f32 {
        return 0.25 / (LoH * LoH);
    }

    fn F_Schlick( f0:vec3<f32> ,  f90 : f32 ,  VoH : f32 ) -> vec3<f32> {
        return f0 + (f90 - f0) * pow(1.0 - VoH,5.0);
    }

    //https://google.github.io/filament/Filament.html materialsystem/clearcoatmodel/clearcoatparameterization
    fn CoatSpecular_brdf( f:vec3<f32>, s:vec3<f32>, n:vec3<f32> , v:vec3<f32> , l:vec3<f32> , att:f32 , layer :vec3<f32>) -> vec3<f32> {
        let H = normalize(v + l); 
        let VdotNc = max(dot(v,n),0.0);
        let LdotNc = max(dot(l,n),0.0);
        let NoH = max(dot(n,H),0.0);
        let LoH = clamp(dot(l,H),0.0,1.0);
        let NoL = max(dot(n,l),0.0);

        let Fd = f ; 
        let Fr = s ; 

        let clearcoatRoughnessFactor = clamp(materialUniform.clearcoatRoughnessFactor,0.089,1.0);
        let clearCoatRoughness = clearcoatRoughnessFactor * clearcoatRoughnessFactor ;

        let Dc = Specular_D_GGX( NoH , clearCoatRoughness ) ;
        let Vc = V_Kelemen( LoH ) ;
        let Fc = F_Schlick(vec3<f32>(0.04), clearCoatRoughness , pow(LoH,2.0)); 
        let Frc = (Dc * Vc) * Fc ;
        // return layer * vec3<f32>((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc) ;//* NoL;
        return layer * vec3<f32>((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc) * ( 0.5 + NoL * 0.5 ) ;
    }

    fn approximate_coating(base:vec3<f32> , clearColor: vec3<f32>, n:vec3<f32> , v:vec3<f32> , light:LightData ) -> vec3<f32> {
        let clearcoatRoughnessFactor = clamp(materialUniform.clearcoatRoughnessFactor,0.084,1.0);
        var clearcoatAlpha = clearcoatRoughnessFactor * clearcoatRoughnessFactor + fragData.ClearcoatRoughness;

        // var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
        var att = light.intensity ;
        let l = light.direction ;
   
        let NdotV = max(dot(n,v),0.0);
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(clearcoatAlpha,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var envIBL: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, R ,mip ).rgb) ;
        envIBL = LinearToGammaSpace(envIBL);

        let clearCoat = materialUniform.clearcoatFactor ;
        let f = FresnelSchlickRoughness( max(dot(n,v),0.0) , vec3<f32>(0.0) , clearcoatAlpha ) ;
        let clearcoat_brdf = (f * envIBL) + CoatSpecular_brdf( clearColor , vec3<f32>( clearCoat ) , n , v , -l , att , envIBL ) ;

        // return clearcoat_brdf;+ fragData.ClearcoatRoughness 
        return mix(base,clearcoat_brdf,materialUniform.clearcoatWeight ) ;
    }
`,Nn=`
  #include "Clearcoat_frag"
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"


 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = ORI_ShadingInput.AmbientOcclusion ; 
      fragData.Roughness = max(ORI_ShadingInput.Roughness,0.003) ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.N = ORI_ShadingInput.Normal;
      fragData.V = normalize(globalUniform.cameraWorldMatrix[3].xyz - ORI_VertexVarying.vWorldPos.xyz) ;

      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R;//reflect( fragData.V , -fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(0.04), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;

      fragData.DiffuseColor = fragData.Albedo.rgb * (1.0 - fragData.Metallic);
      fragData.SpecularColor = mix(vec3<f32>(1.0), fragData.Albedo.rgb, fragData.Metallic);

      fragData.ClearcoatRoughness = 0.0 ;
      #if USE_CLEARCOAT_ROUGHNESS
        fragData.ClearcoatRoughness = getClearcoatRoughnees() ;
      #endif
  }

  fn BxDFShading(){
      initFragData();

      var color = vec3<f32>(0.0);

      let lightIndex = getCluster(ORI_VertexVarying.fragCoord);
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count , 0.0);
      for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
      {
        let light = getLight(i32(i));

        switch (light.lightType) {
          case PointLightType: {
              color += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
          }
          case DirectLightType: {
            color += directLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness , light , globalUniform.shadowBias) ;
          }
          case SpotLightType: {
            color += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
          }
          default: {
          }
        }
      }

      var kS = FresnelSchlickRoughness(fragData.NoV, fragData.F0, fragData.Roughness );
      var kD = vec3(1.0) - kS;
      kD = kD * (1.0 - fragData.Metallic);
      kD = max(vec3<f32>(0.04),kD) ;

      let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
      var diffuseIrradiance: vec3<f32> = vec3<f32>(0.0);//

      #if USE_SKYLIGHT
          var prefilterTex: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 8.0 ).rgb);
          prefilterTex = LinearToGammaSpace(prefilterTex);
          var skyLight = kD * fragData.Albedo.xyz * prefilterTex;
          // color += skyLight ;
      #endif

      var envRef = kS * approximateSpecularIBL( fragData.SpecularColor , fragData.Roughness , fragData.R ) ;//* (materialUniform.ior - 1.0) ;
      
      var irradiance = diffuseIrradiance ;
      #if USEGI
          irradiance += getIrradiance().rgb ;
      #else
          irradiance += globalUniform.skyExposure * LinearToGammaSpace(textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
      #endif

      fragData.Irradiance = irradiance;


      var diffuseIBL = fragData.Albedo.rgb * irradiance.rgb ;
      // var ambientIBL = kD * fragData.Albedo.rgb * fragData.Ao;
      fragData.EnvColor = materialUniform.envIntensity * envRef  ;

      ORI_FragmentOutput.color = vec4<f32>(0.0);

      #if USE_CLEARCOAT
          for(var i:i32 = i32(start) ; i < i32(end); i = i + 1 )
          {
              let light = getLight(i);
              switch (light.lightType) {
                  case PointLightType: {
                      color += pointLighting(fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
                  }
                  case DirectLightType: {
                      color += directLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness , light , globalUniform.shadowBias) ;
                  }
                  case SpotLightType: {
                      color += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
                  }
                  default: {
                  }
              }
          }
      #endif
    
      // // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
      #if USEGBUFFER
          var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
          normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
      #endif
      
      // ORI_FragmentOutput.color = vec4<f32>(ORI_FragmentOutput.color.xyz,fragData.Albedo.a) ;
      #if USE_WORLDPOS
          ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
      #endif

      #if USEGBUFFER
          ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
          ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
      #endif
      
      // color = pow(color.rgb,vec3<f32>(2.0));

      color += diffuseIBL ;
      // color += ambientIBL ;
      color += fragData.EnvColor * fragData.Ao ;
      color += fragData.Emissive.xyz ;

      //-1 1
      // color = diffuseIBL ;
      ORI_FragmentOutput.color = vec4<f32>(color.rgb,fragData.Albedo.a) ;

      // let gamma = 2.0 ;
      // ORI_FragmentOutput.color = pow(ORI_FragmentOutput.color,vec4(gamma,gamma,gamma,1.0));
  }
  `,Fn=`
    #if USE_CLEARCOAT_ROUGHNESS
    @group(1) @binding(auto)
    var clearCoatRoughnessMapSampler: sampler;
    @group(1) @binding(auto)
    var clearCoatRoughnessMap: texture_2d<f32>;

                fn getClearcoatRoughnees() -> f32{
        let clearcoatRoughness = textureSample(clearCoatRoughnessMap, clearCoatRoughnessMapSampler, ORI_VertexVarying.fragUV0.xy).r;
        return clearcoatRoughness;
    }
    #else
                fn getClearcoatRoughnees() -> f32{
        return 0.0;
    }
    #endif
`,kn=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
        ORI_ShadingInput.Roughness = materialUniform.roughness  ;
        ORI_ShadingInput.Metallic = materialUniform.metallic ;
        ORI_ShadingInput.Specular = 0.5 ;
        ORI_ShadingInput.AmbientOcclusion = materialUniform.ao ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

        ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

        BxDFShading();
    }
`,Gn=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var normalMapSampler: sampler;
    @group(1) @binding(auto)
    var normalMap: texture_2d<f32>;

    #if USE_ARMC
    @group(1) @binding(auto)
    var maskMapSampler: sampler;
    @group(1) @binding(auto)
    var maskMap: texture_2d<f32>;
    #endif

    #if USE_AOTEX
    @group(1) @binding(auto)
    var aoMapSampler: sampler;
    @group(1) @binding(auto)
    var aomapMap: texture_2d<f32>;
    #endif

    @group(1) @binding(auto)
    var emissiveMapSampler: sampler;
    @group(1) @binding(auto)
    var emissiveMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv ) * materialUniform.baseColor ;
    
        // #if USE_ALPHACUT
            // ORI_ShadingInput.BaseColor.a = clamp(ORI_ShadingInput.BaseColor.a, 0.001 , 1.0 );
            if( (ORI_ShadingInput.BaseColor.a - materialUniform.alphaCutoff) <= 0.0 ){
                ORI_FragmentOutput.color = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                discard;
            }
        // #endif

        #if USE_SHADOWMAPING
            directShadowMaping(globalUniform.shadowBias);
            pointShadowMapCompare(globalUniform.pointShadowBias);
        #endif


        // ORI_ShadingInput.BaseColor = vec4<f32>(sRGBToLinear(ORI_ShadingInput.BaseColor.xyz),ORI_ShadingInput.BaseColor.w);
    
        #if USE_ARMC
            var maskTex = textureSample(maskMap, maskMapSampler, uv ) ;

            ORI_ShadingInput.AmbientOcclusion = maskTex.r * materialUniform.ao ; 

            #if USE_AOTEX
                var aoMap = textureSample(aomapMap, aoMapSampler, uv );
                ORI_ShadingInput.AmbientOcclusion = mix(0.0,aoMap.r,materialUniform.ao) ;
            #endif

            ORI_ShadingInput.Roughness = maskTex.g * materialUniform.roughness ;
            ORI_ShadingInput.Metallic =  maskTex.b * materialUniform.metallic ;

        #else
            ORI_ShadingInput.Roughness = materialUniform.roughness ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.AmbientOcclusion =  materialUniform.ao ;
            #if USE_AOTEX
                var aoMap = textureSample(aomapMap, aoMapSampler, ORI_VertexVarying.fragUV0.xy );
                ORI_ShadingInput.AmbientOcclusion = mix(0.0,aoMap.r,materialUniform.ao) ;
            #endif
        #endif

        ORI_ShadingInput.Roughness = clamp(ORI_ShadingInput.Roughness,0.084,1.0);
        ORI_ShadingInput.Specular = 0.5 ;

        var emissiveColor = textureSample(emissiveMap, emissiveMapSampler , ORI_VertexVarying.fragUV0.xy) ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(materialUniform.emissiveColor.rgb * emissiveColor.rgb * materialUniform.emissiveIntensity,1.0);

        var Normal = textureSample(normalMap,normalMapSampler,ORI_VertexVarying.fragUV0).rgb ;
        // Normal.y = 1.0 - Normal.y ;
        // let normal = unPackNormal(Normal,1.0,materialUniform.normalScale) ;
        let normal = unPackNormal(Normal,materialUniform.normalScale) ;  
        ORI_ShadingInput.Normal = normal ;

        BxDFShading();
    }
`,Vn=`
#include "ClusterDebug_frag" 

        fn debugPosition(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,1.0);
        }

        fn debugNormal(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.Normal.xyz,1.0);
        }

        fn debugUV(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.fragUV0.xy,0.0,1.0);
        }

        fn debugColor(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Albedo.rgb,1.0);
        }

        fn debugDiffuse(){
            ORI_FragmentOutput.color = vec4<f32>(1.0/3.1415926 * fragData.Albedo.rgb,1.0);
            // ORI_FragmentOutput.color = vec4<f32>(0.2,0.2,0.2,1.0);
        }

        fn debugAmbient(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Irradiance * fragData.Albedo.rgb,1.0);
        }
        
        fn debugEmissive(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Emissive.rgb,1.0);
        }

        fn debugEnvment(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.EnvColor.rgb,1.0);
        }

        fn debugAo(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Ao),1.0);
        }

        fn debugRoughness(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Roughness),1.0);
        }

        fn debugMetallic(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Metallic),1.0);
        }

        fn debugIrradiance(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Irradiance),1.0);
        }

        fn debugFragmentOut(){
            if(ORI_VertexVarying.fragCoord.x > globalUniform.renderState_split) {
                switch (globalUniform.renderState_right)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugDiffuse();
                  }
                  case 5: {
                    // debugAmbient();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugPosition();
                  }
                  case 14: {
                    #if DEBUG_CLUSTER
                      debugCluster( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 15: {
                    #if DEBUG_CLUSTER
                      debugClusterBox( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 16: {
                    #if DEBUG_CLUSTER
                      debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                      #endif
                  }
                  default: {
                  }
                }
              } else {
                switch (globalUniform.renderState_left)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugDiffuse();
                  }
                  case 5: {
                    // debugAmbient();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugPosition();
                  }
                  case 14: {
                    // debugCluster( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  case 15: {
                    // debugClusterBox( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  case 16: {
                    // debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  default: {
                  }
                }
              }
        }
`,Hn=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct MaterialUniform {
    x:f32,
    y:f32,
    width:f32,
    height:f32,
    };

    struct VertexOutput {
        @location(0) fragUV: vec2<f32>,
        @builtin(position) position: vec4<f32>
    };

    @vertex
    fn main(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) index : u32 ) -> VertexOutput {
        const pos = array(
        vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
        vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
        );
        const uv = array(
        vec2(1.0, 0.0), vec2(1.0, 1.0), vec2(0.0, 1.0), 
        vec2(1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, 0.0),
        );
        let id = u32(index) ;
        var output : VertexOutput;
        output.fragUV = uv[vertexIndex] ;
        output.position = vec4<f32>(pos[vertexIndex] , 0.0, 1.0) ;
        return output ;
    }
`,Xn=`
#include "WorldMatrixUniform"
      #include "GlobalUniform"
   
      struct MaterialUniform {
        x:f32,
        y:f32,
        width:f32,
        height:f32,
      };

      struct VertexOutput {
          @location(0) fragUV: vec2<f32>,
          @builtin(position) member: vec4<f32>
      };

      @vertex
      fn main(@builtin(instance_index) index : u32,@location(0) position: vec3<f32>, @location(1) TEXCOORD_1: vec2<f32>) -> VertexOutput {
          let id = u32(index) ;
          let worldMatrix = models.matrix[id];

          let windowSize = vec2<f32>(globalUniform.windowWidth,globalUniform.windowHeight) ;

        //   let pos = worldMatrix[3].xy ;

          let size = vec2<f32>(worldMatrix[0].x,worldMatrix[1].y) / windowSize ;

          let uv = vec2(((TEXCOORD_1.xy * 2.0) - vec2<f32>(1.0)))  ;// / windowSize * size - offset ;

          return VertexOutput(TEXCOORD_1, vec4<f32>(uv, 0.0, 1.0));
      }
`,Wn=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var color: vec4<f32> = textureSample(baseMap, baseMapSampler, uv );

        return FragmentOutput(color);
    }
`,Yn=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    }; 

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_2d ;

    fn Linear01Depth(  z : f32 ) -> f32
    {
        return 1.0 / (1.0 * z + 5000.0);
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var depth = textureSample(baseMap, baseMapSampler, uv , vec2<i32>(0) ) ;
        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,jn=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_cube ;

    fn uvToXYZ( face : i32 ,  uv : vec2<f32> ) -> vec3<f32>
    {
        var out : vec3<f32> ;
        if(face == 0){
            out = vec3<f32>( 1.0, uv.y, -uv.x);
        }else if(face == 1){
            out = vec3<f32>( -1.0, uv.y, uv.x);
        }else if(face == 2){
            out = vec3<f32>( uv.x, -1.0, uv.y);
        }else if(face == 3){
            out = vec3<f32>( uv.x,  1.0, -uv.y);
        }else if(face == 4){
            out = vec3<f32>( uv.x, uv.y, 1.0);
        }else{	
            out = vec3<f32>( -uv.x, uv.y, -1.0);
        }
        return out ;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var ii = 0.16 ;
        var ouv = vec3<f32>(0.0);
        if(uv.x < ii * 6.0){
            ouv = uvToXYZ(5,uv/ii);
        }
        if(uv.x < ii * 5.0){
            ouv = uvToXYZ(4,uv/ii);
        }
        if(uv.x < ii * 4.0){
            ouv = uvToXYZ(3,uv/ii);
        } 
        if(uv.x < ii * 3.0){
            ouv = uvToXYZ(2,uv/ii);
        }
        if(uv.x < ii * 2.0){
            ouv = uvToXYZ(1,uv/ii);
        }
        if(uv.x < ii * 1.0){
            ouv = uvToXYZ(0,uv/ii);
        }
        var depth = textureSample(baseMap, baseMapSampler, ouv ) ;
        depth = 1.0 - depth; 

        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,wu=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d_array ;

    struct MaterialData{
        index:f32;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
    
        var depth = textureSample(baseMap, baseMapSampler, ouv ) ;
        depth = 1.0 - depth; 

        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,$a=`
    fn getHDRColor(color: vec3<f32>, exposure: f32) -> vec3 < f32 > {
        // var newColor = color * (  1.0 / 255.0 ) ;
        return color * pow(2.4, exposure) ;
    }

    fn lambda2rgb(lambda : f32) -> vec3 < f32 > {
        let ultraviolet = 400.0;
        let infrared = 700.0;

        var a = (lambda - ultraviolet) / (infrared - ultraviolet);
        let c = 10.0;
        var b = vec3<f32>(a) - vec3<f32>(0.75, 0.5, 0.25);
        return max((1.0 - c * b * b), vec3<f32>(0.0));
    }

    fn CEToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        return 1.0 - exp(-adapted_lum * color);
    }

    fn ACESToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        let A = 2.51;
        let B = 0.03;
        let C = 2.43;
        let D = 0.59;
        let E = 0.14;

        var color2 = color * adapted_lum;
        color2 = (color2 * (A * color2 + B)) / (color2 * (C * color2 + D) + E);
        return color2;
    }

    fn gammaToLiner(color: vec4<f32>) -> vec4 < f32 > {
        let gammaCorrect = 2.4;
        var color2 = pow(color, vec4<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma4(color: vec4<f32>) -> vec4 < f32 > {
        let gammaCorrect = 1.0 / 2.4;
        var color2 = pow(color, vec4<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma3(color: vec3<f32>) -> vec3 < f32 > {
        let gammaCorrect = 1.0 / 2.4;
        var color2 = pow(color, vec3<f32>(gammaCorrect));
        return color2 ;
    }

    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3 < f32 > {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r, 0.416666667);
        linRGB.g = pow(linRGB.g, 0.416666667);
        linRGB.b = pow(linRGB.b, 0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    var<private>sRGB_2_LMS_MAT: mat3x3<f32> = mat3x3<f32>(
        17.8824, 43.5161, 4.1193,
        3.4557, 27.1554, 3.8671,
        0.02996, 0.18431, 1.4670,
    );

    var<private>LMS_2_sRGB_MAT: mat3x3<f32> = mat3x3<f32>(
        0.0809, -0.1305, 0.1167,
        -0.0102, 0.0540, -0.1136,
        -0.0003, -0.0041, 0.6935,
    );

    fn sRGB_2_LMS(RGB: vec3<f32>) -> vec3<f32>
    {
        return sRGB_2_LMS_MAT * RGB;
    }

    fn LMS_2_sRGB(LMS: vec3<f32>) -> vec3<f32>
    {
        return LMS_2_sRGB_MAT * LMS;
    }

    fn LinearToSrgbBranchless(lin: vec3<f32>) -> vec3<f32>
    {
        var lin2 = max(vec3<f32>(6.10352e-5), lin);
        return min(lin2 * 12.92, pow(max(lin2, vec3<f32>(0.00313067)), vec3<f32>(1.0 / 2.4)) * vec3<f32>(1.055) - vec3<f32>(0.055));
    }

    fn sRGBToLinear(color : vec3<f32>) -> vec3<f32>
    {
        let color2 = max(vec3<f32>(6.10352e-5), color);
        let c = 0.04045;
        if (color2.r > c && color2.g > c && color2.b > c) {
            return pow(color2 * (1.0 / 1.055) + 0.0521327, vec3<f32>(2.4));
        } else {
            return color2 * (1.0 / 12.92);
        }
    }
`,qn=`
    fn madfrac(A:f32, B:f32)-> f32 {
        return A*B-floor(A*B) ;
    }

    fn sampleRandomDir(count:u32,SAMPLE_COUNT:u32) -> vec3<f32>{
    var ray_dir = sphericalFibonacci(f32((count)), f32(SAMPLE_COUNT) );
    return normalize(ray_dir) ;
    }

    fn sphericalFibonacci( i : f32 ,  n : f32 ) -> vec3<f32>{
        const PHI = sqrt(5.0) * 0.5 + 0.5;
        let phi = 2.0 * PI * madfrac(i, PHI - 1);
        let cosTheta = 1.0 - (2.0 * i + 1.0) * (1.0 / n);
        let sinTheta = sqrt(saturate(1.0 - cosTheta*cosTheta));

        return vec3<f32>(
            cos(phi) * sinTheta,
            sin(phi) * sinTheta,
            cosTheta);

    }
`;class A{static init(){A.register("MathShader",_a),A.register("FastMathShader",Dn),A.register("GlobalUniform",Ms),A.register("WorldMatrixUniform",En),A.register("NormalMap_frag",Rn),A.register("LightingFunction_frag",mn),A.register("PhysicMaterialUniform_frag",gn),A.register("UnLitMaterialUniform_frag",xn),A.register("VideoUniform_frag",yn),A.register("InstanceUniform",Pn),A.register("Inline_vert",bn),A.register("VertexAttributes_vert",vn),A.register("Common_vert",Tn),A.register("Common_frag",wn),A.register("FragmentVarying",In),A.register("ColorPassFragmentOutput",Ln),A.register("LightStruct",pn),A.register("ShadingInput",On),A.register("IESProfiles_frag",An),A.register("ShadowMapping_frag",Un),A.register("Irradiance_frag",Bn),A.register("IrradianceVolumeData_frag",Sn),A.register("BrdfLut_frag",Cn),A.register("EnvMap_frag",Mn),A.register("ColorUtil_frag",$a),A.register("ColorUtil",$a),A.register("BRDF_frag",zn),A.register("BxDF_frag",Nn),A.register("UnLit_frag",_n),A.register("Clearcoat_frag",Fn),A.register("LitShader",kn),A.register("PBRLItShader",Gn),A.register("ClusterDebug_frag",dn),A.register("BxdfDebug_frag",Vn),A.register("GenerayRandomDir",qn),A.register("Quad_vert_wgsl",Xn),A.register("Quad_frag_wgsl",Wn),A.register("Quad_depth2d_frag_wgsl",Yn),A.register("Quad_depthCube_frag_wgsl",jn),A.register("sky_vs_frag_wgsl",xi.sky_vs_frag_wgsl),A.register("sky_fs_frag_wgsl",xi.sky_fs_frag_wgsl),A.register("Bloom_Brightness_frag_wgsl",pr.Bloom_Brightness_frag_wgsl),A.register("Bloom_blur_frag_wgsl",pr.Bloom_blur_frag_wgsl),A.register("Bloom_composite_frag_wgsl",pr.Bloom_composite_frag_wgsl)}static register(e,t){A[e.toLowerCase()]||(A[e.toLowerCase()]=t)}static getShader(e){return A[e.toLowerCase()],A[e.toLowerCase()]}}const ce=class{constructor(e=0,t=0){s(this,"x",0),s(this,"y",0),this.x=e,this.y=t}static getAngle(e,t){return Math.atan2(t.y-e.y,t.x-e.x)}static slerp(e,t,r){let i=new ce,a=e.dot(t);var s,o,n;return(a<0&&(t.x=-t.x,t.y=-t.y,a=-a),.9995<a)?(i.x=e.x+r*(t.x-e.x),i.y=e.y+r*(t.y-e.y)):(s=Math.acos(a),o=Math.sin(s),n=Math.sin((1-r)*s)/o,r=Math.sin(r*s)/o,i.x=n*e.x+r*t.x,i.y=n*e.y+r*t.y),i}static lerp(e,t,r){return ce.HELP_0.copyFrom(e),ce.HELP_1.copyFrom(t),ce.HELP_0.scale(r),ce.HELP_1.scale(1-r),new ce(ce.HELP_0.x+ce.HELP_1.x,ce.HELP_0.y+ce.HELP_1.y)}set(e=0,t=0){this.x=e,this.y=t}distance(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}add(e,t){return(t=t||new ce).x=this.x+e.x,t.y=this.y+e.y,t}sub(e,t){return(t=t||new ce).x=this.x-e.x,t.y=this.y-e.y,t}scale(e){this.x=this.x*e,this.y=this.y*e}multiply(e,t){return(t=t||new ce).x=this.x*e,t.y=this.y*e,t}divide(e,t){return(t=t||new ce).x=this.x/e,t.y=this.y/e,t}neg(e){return(e=e||new ce).x=-e.x,e.y=-e.y,e}abs(){return Math.sqrt(this.x*this.x+this.y*this.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}getAngle(e){return Math.atan2(e.y-this.y,e.x-this.x)}unt(e){e=e||new ce;var t=this.abs();return e.x=this.x/t,e.y=this.y/t,e}angleTo(e){var t=e.x-this.x,e=e.y-this.y;return Math.atan2(e,t)}equals(e){return Math.abs(this.x-e.x)<1e-6&&Math.abs(this.y-e.y)<1e-6}pal(e){var t=this.unt(),e=e.unt();return t.equals(e)?1:t.equals(e.neg())?-1:0}clone(){return new ce(this.x,this.y)}copyFrom(e){return this.x=e.x,this.y=e.y,this}dot(e){return this.x*e.x+this.y*e.y}normalize(){var e=this.abs();this.x=this.x/e,this.y=this.y/e}addInPlace(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}};let J=ce;s(J,"HELP_0",new ce),s(J,"HELP_1",new ce),s(J,"ZERO",new ce(0,0)),s(J,"SAFE_MAX",new ce(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),s(J,"SAFE_MIN",new ce(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER));const pe=class{constructor(e=0,t=0,r=0,i=0){s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"w",1),this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}get height(){return this.w}static crossVectors(e,t,r){r=r||new pe;var i=e.x,a=e.y,e=e.z,s=t.x,o=t.y,t=t.z;return r.x=a*t-e*o,r.y=e*s-i*t,r.z=i*o-a*s,r}static distance(e,t){var r=e.x-t.x,i=e.y-t.y,a=e.z-t.z,e=e.w-t.w;return Math.sqrt(r*r+i*i+a*a+e*e)}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}clone(){return new pe(this.x,this.y,this.z,this.w)}};let X=pe;s(X,"X_AXIS",new pe(1,0,0)),s(X,"Y_AXIS",new pe(0,1,0)),s(X,"Z_AXIS",new pe(0,0,1)),s(X,"HELP_0",new pe),s(X,"HELP_1",new pe),s(X,"HELP_2",new pe),s(X,"EPSILON",1e-5),s(X,"HELP_3",new pe),s(X,"HELP_4",new pe),s(X,"HELP_5",new pe),s(X,"HELP_6",new pe),s(X,"ZERO",new pe),s(X,"ONE",new pe(1,1,1,1)),s(X,"LEFT",new pe(-1,0,0)),s(X,"RIGHT",new pe(1,0,0)),s(X,"UP",new pe(0,-1,0)),s(X,"DOWN",new pe(0,1,0)),s(X,"BACK",new pe(0,0,-1)),s(X,"FORWARD",new pe(0,0,1));var ze=(e=>(e[e.Number=0]="Number",e[e.Vector2=1]="Vector2",e[e.Vector3=2]="Vector3",e[e.Vector4=3]="Vector4",e[e.Color=4]="Color",e[e.Float32Array=5]="Float32Array",e))(ze||{});class ae{constructor(e){s(this,"size"),s(this,"memoryInfo"),s(this,"bindOnChange"),s(this,"_data"),s(this,"_type",ze.Number),this.data=e}get data(){return this._data}set data(e){this._data=e,this._type=ze.Number,e instanceof J?(this.size=2,this._type=ze.Vector2):e instanceof p?(this.size=3,this._type=ze.Vector3):e instanceof X?(this.size=4,this._type=ze.Vector4):e instanceof b?(this.size=4,this._type=ze.Color):e instanceof Float32Array?(this.size=e.length,this._type=ze.Float32Array):(this.size=1,this._type=ze.Number)}get color(){return new b(this._data.r,this._data.g,this._data.b,this._data.a)}set color(e){this._data.r==e.r&&this._data.g==e.g&&this._data.b==e.b&&this._data.a==e.a||(this._data.r=e.r,this._data.g=e.g,this._data.b=e.b,this._data.a=e.a,this.onChange())}get value(){return this._data}set value(e){this._data!=e&&(this._data=e,this.onChange())}get vector2(){return new J(this._data.x,this._data.y)}set vector2(e){this._data.x==e.x&&this._data.y==e.y||(this._data.x=e.x,this._data.y=e.y,this.onChange())}get vector3(){return new p(this._data.x,this._data.y,this._data.z)}set vector3(e){this._data.x==e.x&&this._data.y==e.y&&this._data.z==e.z||(this._data.x=e.x,this._data.y=e.y,this._data.z=e.z,this.onChange())}get vector4(){return new X(this._data.x,this._data.y,this._data.z,this._data.w)}set vector4(e){this._data.x==e.x&&this._data.y==e.y&&this._data.z==e.z&&this._data.w==e.w||(this._data.x=e.x,this._data.y=e.y,this._data.z=e.z,this._data.w=e.w,this.onChange())}onChange(){this.bindOnChange&&this.bindOnChange()}float32Array(e){this._data.set(e),this.onChange()}update(){switch(this._type){case ze.Number:this.memoryInfo.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this._data,!0);break;case ze.Vector2:this.memoryInfo.setVector2(0,this._data);break;case ze.Vector3:this.memoryInfo.setVector3(0,this._data);break;case ze.Vector4:this.memoryInfo.setVector4(0,this._data);break;case ze.Color:this.memoryInfo.setColor(0,this._data);break;case ze.Float32Array:this.memoryInfo.setFloat32Array(0,this._data)}}}let _t={clamp_to_edge:"clamp-to-edge",repeat:"repeat",mirror_repeat:"mirror-repeat"},Tu={zero:"zero",one:"one",src:"src",one_minus_src:"one-minus-src",src_alpha:"src-alpha",one_minus_src_alpha:"one-minus-src-alpha",dst:"dst",one_minus_dst:"one-minus-dst",dst_alpha:"dst-alpha",one_minus_dst_alpha:"one-minus-dst-alpha",src_alpha_saturated:"src-alpha-saturated",constant:"constant",one_minus_constant:"one-minus-constant"};const Cu={srcFactor:"one",dstFactor:"zero",operation:"add"},Mu={compare:"always",failOp:"keep",depthFailOp:"keep",passOp:"keep"};let ti={never:"never",less:"less",equal:"equal",less_equal:"less-equal",greater:"greater",not_equal:"not-equal",greater_equal:"greater-equal",always:"always"},xr={none:"none",front:"front",back:"back"},_i={nearest:"nearest",linear:"linear"},va={point_list:"point-list",line_list:"line-list",line_strip:"line-strip",triangle_list:"triangle-list",triangle_strip:"triangle-strip"},z={r8unorm:"r8unorm",r8snorm:"r8snorm",r8uint:"r8uint",r8sint:"r8sint",r16uint:"r16uint",r16sint:"r16sint",r16float:"r16float",rg8unorm:"rg8unorm",rg8snorm:"rg8snorm",rg8uint:"rg8uint",rg8sint:"rg8sint",r32uint:"r32uint",r32sint:"r32sint",r32float:"r32float",rg16uint:"rg16uint",rg16sint:"rg16sint",rg16float:"rg16float",rgba8unorm:"rgba8unorm",rgba8unorm_srgb:"rgba8unorm-srgb",rgba8snorm:"rgba8snorm",rgba8uint:"rgba8uint",rgba8sint:"rgba8sint",bgra8unorm:"bgra8unorm",bgra8unorm_srgb:"bgra8unorm-srgb",rgb9e5ufloat:"rgb9e5ufloat",rgb10a2unorm:"rgb10a2unorm",rg11b10ufloat:"rg11b10ufloat",rg32uint:"rg32uint",rg32sint:"rg32sint",rg32float:"rg32float",rgba16uint:"rgba16uint",rgba16sint:"rgba16sint",rgba16float:"rgba16float",rgba32uint:"rgba32uint",rgba32sint:"rgba32sint",rgba32float:"rgba32float",stencil8:"stencil8",depth16unorm:"depth16unorm",depth24plus:"depth24plus",depth24plus_stencil8:"depth24plus-stencil8",depth32float:"depth32float",bc1_rgba_unorm:"bc1-rgba-unorm",bc1_rgba_unorm_srgb:"bc1-rgba-unorm-srgb",bc2_rgba_unorm:"bc2-rgba-unorm",bc2_rgba_unorm_srgb:"bc2-rgba-unorm-srgb",bc3_rgba_unorm:"bc3-rgba-unorm",bc3_rgba_unorm_srgb:"bc3-rgba-unorm-srgb",bc4_r_unorm:"bc4-r-unorm",bc4_r_snorm:"bc4-r-snorm",bc5_rg_unorm:"bc5-rg-unorm",bc5_rg_snorm:"bc5-rg-snorm",bc6h_rgb_ufloat:"bc6h-rgb-ufloat",bc6h_rgb_float:"bc6h-rgb-float",bc7_rgba_unorm:"bc7-rgba-unorm",bc7_rgba_unorm_srgb:"bc7-rgba-unorm-srgb",depth24unorm_stencil8:"depth24unorm-stencil8",depth32float_stencil8:"depth32float-stencil8"},ni={uint8x2:"uint8x2",uint8x4:"uint8x4",sint8x2:"sint8x2",sint8x4:"sint8x4",unorm8x2:"unorm8x2",unorm8x4:"unorm8x4",snorm8x2:"snorm8x2",snorm8x4:"snorm8x4",uint16x2:"uint16x2",uint16x4:"uint16x4",sint16x2:"sint16x2",sint16x4:"sint16x4",unorm16x2:"unorm16x2",unorm16x4:"unorm16x4",snorm16x2:"snorm16x2",snorm16x4:"snorm16x4",float16x2:"float16x2",float16x4:"float16x4",float32:"float32",float32x2:"float32x2",float32x3:"float32x3",float32x4:"float32x4",uint32:"uint32",uint32x2:"uint32x2",uint32x3:"uint32x3",uint32x4:"uint32x4",sint32:"sint32",sint32x2:"sint32x2",sint32x3:"sint32x3",sint32x4:"sint32x4"},Pu={vertex:"vertex",instance:"instance"};class he{}s(he,"colorBufferTex_NAME","colorBufferTex"),s(he,"positionBufferTex_NAME","positionBufferTex"),s(he,"normalBufferTex_NAME","normalBufferTex"),s(he,"materialBufferTex_NAME","materialBufferTex"),s(he,"zBufferTexture_NAME","zBufferTexture"),s(he,"zPreDepthTexture_NAME","zPreDepthTexture"),s(he,"outTex_NAME","outTex");let Kn=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
        @location(0) fragUV: vec2<f32>,
            @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main(@builtin(instance_index) index : u32, @location(0) position: vec3<f32>, @location(1) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        let id = u32(index);
        let worldMatrix = models.matrix[id];

        let screenPos = vec2(((TEXCOORD_1 * 2.0) - vec2<f32>(1.0))) * 0.5 ; 
        return VertexOutput(TEXCOORD_1, vec4<f32>(screenPos, 0.0, 1.0));
    }
`,Zn=`
#version 450

layout(location = 0) in vec2 fragUV;

layout(location = 0) out vec4 o_Target;

layout(set = 0, binding = 0) uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
    mat4 cameraWorldMatrix;
    mat4 pvMatrixInv;
    float frame;
    float time;
    float detail;
    float shadowBias;
    float skyExposure;
    float renderPassState;
    float quadScale;

};

layout(set = 2, binding = 0) uniform sampler baseMapSampler;
layout(set = 2, binding = 1) uniform texture2D baseMap;
layout(set = 3, binding = 0) uniform MaterialDataUniform {
    vec4 color;
};

void main() {
        vec2 uv = fragUV.xy;
    uv.y = 1.0 - uv.y;
        vec4 colorTexture = texture(sampler2D(baseMap, baseMapSampler), uv * quadScale) * color;
    o_Target = vec4(colorTexture.rgb, colorTexture.a);

    if (o_Target.r <= 0.5 && o_Target.g <= 0.5 && o_Target.b <= 0.5) {
        discard;
    }
    // float gamma     = 2.2;
    // float exposure  = 1.0;
    // float pureWhite = 1.0;

    // float luminance = dot(colorTexture.rgb, vec3(0.2126, 0.7152, 0.0722));
    // float mappedLuminance = (luminance * (1.0 + luminance/(pureWhite*pureWhite))) / (1.0 + luminance);

    // // Scale color by ratio of average luminances.
    // vec3 mappedColor = (mappedLuminance / luminance) * colorTexture.rgb;

    // // Gamma correction.
    // o_Target = vec4(pow(o_Target.rgb, vec3(1.0/gamma)), 1.0);
};
`;var Ue=(e=>(e[e.Default=1]="Default",e[e.IgnoreDepthPass=2]="IgnoreDepthPass",e[e.Sky=6]="Sky",e[e.Particle=10]="Particle",e[e.SkinnedMesh=16]="SkinnedMesh",e[e.MorphTarget=32]="MorphTarget",e[e.Terrain=64]="Terrain",e[e.UI=128]="UI",e))(Ue||{});class pt{static addMask(e,t){return e|t}static removeMask(e,t){return e&~t}static hasMask(e,t){return(e&t)==t}}const lr=class{constructor(){s(this,"__refection"),s(this,"__size",0)}getValueType(){if(!this.__refection){var e;this.__refection=[];for(const t in this)t.includes("__")||(e=this[t],e={name:t,type:e.constructor.name},this.__refection.push(e))}return this.__refection}static getValueSize(i){switch(i.constructor.name){case"Boolean":case"Number":case"f32":case"i32":case"u32":return 4;case"Float32Array":return 4*i.byteLength;case"Vector2":return 8;case"Vector3":case"Vector4":case"Color":return 16;case"Array":let r=0;for(let e=0,t=i.length;e<t;e++)r+=lr.getValueSize(i[e]);return r}return 0}static Ref(e){return this.Get(e).getValueType()}static Get(e){let t=lr.__cacheStruct.get(e.prototype);return t||(t=new e,lr.__cacheStruct.set(e.prototype,t)),t}static GetSize(e){var t,r=this.Get(e);if(0==r.__size){for(const i in r)-1==i.indexOf("__")&&(t=r[i],r.__size+=lr.getValueSize(t));4<r.__size&&(r.__size=4*Math.ceil(r.__size/4))}return r.__size}};let Bt=lr;s(Bt,"__cacheStruct",new Map);class Qn{constructor(){s(this,"byteOffset"),s(this,"byteSize"),s(this,"offset",0),s(this,"dataBytes")}get x(){return this.dataBytes.getFloat32(0*Float32Array.BYTES_PER_ELEMENT,!0)}set x(e){this.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,e,!0)}get y(){return this.dataBytes.getFloat32(+Float32Array.BYTES_PER_ELEMENT,!0)}set y(e){this.dataBytes.setFloat32(+Float32Array.BYTES_PER_ELEMENT,e,!0)}get z(){return this.dataBytes.getFloat32(2*Float32Array.BYTES_PER_ELEMENT,!0)}set z(e){this.dataBytes.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,e,!0)}get w(){return this.dataBytes.getFloat32(3*Float32Array.BYTES_PER_ELEMENT,!0)}set w(e){this.dataBytes.setFloat32(3*Float32Array.BYTES_PER_ELEMENT,e,!0)}setX(e){this.x=e}setXY(e,t){this.x=e,this.y=t}setXYZ(e,t,r){this.x=e,this.y=t,this.z=r}setXYZW(e,t,r,i){this.x=e,this.y=t,this.z=r,this.w=i}setVector2Array(t){for(let e=0;e<t.length;e++){var r=t[e];this.dataBytes.setFloat32((2*e+0)*Float32Array.BYTES_PER_ELEMENT,r.x,!0),this.dataBytes.setFloat32((2*e+1)*Float32Array.BYTES_PER_ELEMENT,r.y,!0)}}setVector3Array(t){for(let e=0;e<t.length;e++){var r=t[e];this.dataBytes.setFloat32((3*e+0)*Float32Array.BYTES_PER_ELEMENT,r.x,!0),this.dataBytes.setFloat32((3*e+1)*Float32Array.BYTES_PER_ELEMENT,r.y,!0),this.dataBytes.setFloat32((3*e+2)*Float32Array.BYTES_PER_ELEMENT,r.z,!0)}}setVector4Array(t){for(let e=0;e<t.length;e++){var r=t[e];this.dataBytes.setFloat32((4*e+0)*Float32Array.BYTES_PER_ELEMENT,r.x,!0),this.dataBytes.setFloat32((4*e+1)*Float32Array.BYTES_PER_ELEMENT,r.y,!0),this.dataBytes.setFloat32((4*e+2)*Float32Array.BYTES_PER_ELEMENT,r.z,!0),this.dataBytes.setFloat32((4*e+3)*Float32Array.BYTES_PER_ELEMENT,r.w,!0)}}setColorArray(t){for(let e=0;e<t.length;e++){var r=t[e];this.dataBytes.setFloat32((4*e+0)*Float32Array.BYTES_PER_ELEMENT,r.r,!0),this.dataBytes.setFloat32((4*e+1)*Float32Array.BYTES_PER_ELEMENT,r.g,!0),this.dataBytes.setFloat32((4*e+2)*Float32Array.BYTES_PER_ELEMENT,r.b,!0),this.dataBytes.setFloat32((4*e+3)*Float32Array.BYTES_PER_ELEMENT,r.a,!0)}}setInt8(e,t=0){this.dataBytes.setInt8(t*Int8Array.BYTES_PER_ELEMENT,e)}getInt8(e=0){return this.dataBytes.getInt8(e*Int8Array.BYTES_PER_ELEMENT)}setInt16(e,t=0){this.dataBytes.setInt16(t*Int16Array.BYTES_PER_ELEMENT,e,!0)}getInt16(e=0){return this.dataBytes.getInt16(e*Int16Array.BYTES_PER_ELEMENT,!0)}setInt32(e,t=0){this.dataBytes.setInt32(t*Int32Array.BYTES_PER_ELEMENT,e,!0)}getInt32(e=0){return this.dataBytes.getInt32(e*Int32Array.BYTES_PER_ELEMENT,!0)}setFloat(e,t=0){this.dataBytes.setFloat32(t*Float32Array.BYTES_PER_ELEMENT,e,!0)}getFloat(e=0){return this.dataBytes.getFloat32(e*Float32Array.BYTES_PER_ELEMENT,!0)}setUint8(e,t=0){this.dataBytes.setUint8(t*Uint8Array.BYTES_PER_ELEMENT,e)}getUint8(e=0){return this.dataBytes.getUint8(e*Uint8Array.BYTES_PER_ELEMENT)}setUint16(e,t=0){this.dataBytes.setUint16(t*Uint16Array.BYTES_PER_ELEMENT,e,!0)}getUint16(e=0){return this.dataBytes.getUint16(e*Uint16Array.BYTES_PER_ELEMENT,!0)}setUint32(e,t=0){this.dataBytes.setUint32(t*Uint32Array.BYTES_PER_ELEMENT,e,!0)}getUint32(e=0){return this.dataBytes.getUint32(e*Uint32Array.BYTES_PER_ELEMENT,!0)}setArray(t,r){for(let e=0;e<r.length;e++){var i=r[e];this.dataBytes.setFloat32((t+e)*Float32Array.BYTES_PER_ELEMENT,i,!0)}}setFloat32Array(e,t){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Float32Array.BYTES_PER_ELEMENT).set(t)}setArrayBuffer(e,t){t instanceof Uint8Array?this.setUint8Array(e,t):t instanceof Uint16Array?this.setUint16Array(e,t):t instanceof Uint32Array?this.setUint32Array(e,t):t instanceof Int8Array?this.setInt8Array(e,t):t instanceof Int16Array?this.setInt16Array(e,t):t instanceof Int32Array?this.setInt32Array(e,t):t instanceof Float32Array&&this.setFloat32Array(e,t)}setInt8Array(e,t){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int8Array.BYTES_PER_ELEMENT).set(t)}setInt16Array(e,t){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int16Array.BYTES_PER_ELEMENT).set(t)}setInt32Array(e,t){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int32Array.BYTES_PER_ELEMENT).set(t)}setUint8Array(e,t){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint8Array.BYTES_PER_ELEMENT).set(t)}setUint16Array(e,t){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint16Array.BYTES_PER_ELEMENT).set(t)}setUint32Array(e,t){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint32Array.BYTES_PER_ELEMENT).set(t)}setData(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t,!0)}setVector2(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0)}setVector3(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0)}setVector4(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0),this.dataBytes.setFloat32((e+3)*Float32Array.BYTES_PER_ELEMENT,t.w,!0)}setColor(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.r,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.g,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.b,!0),this.dataBytes.setFloat32((e+3)*Float32Array.BYTES_PER_ELEMENT,t.a,!0)}getData(e){return this.dataBytes.getFloat32(e*Float32Array.BYTES_PER_ELEMENT,!0)}writeFloat(e){this.dataBytes.setFloat32(this.offset,e,!0),this.offset+=Float32Array.BYTES_PER_ELEMENT}writeInt8(e){this.dataBytes.setInt8(this.offset,e),this.offset+=Int8Array.BYTES_PER_ELEMENT}writeInt16(e){this.dataBytes.setInt16(this.offset,e,!0),this.offset+=Int16Array.BYTES_PER_ELEMENT}writeInt32(e){this.dataBytes.setInt32(this.offset,e,!0),this.offset+=Int32Array.BYTES_PER_ELEMENT}writeUint8(e){this.dataBytes.setUint8(this.offset,e),this.offset+=Uint8Array.BYTES_PER_ELEMENT}writeUint16(e){this.dataBytes.setUint16(this.offset,e,!0),this.offset+=Uint16Array.BYTES_PER_ELEMENT}writeUint32(e){this.dataBytes.setUint32(this.offset,e,!0),this.offset+=Uint32Array.BYTES_PER_ELEMENT}writeVector2(e){this.writeFloat(e.x),this.writeFloat(e.y)}writeVector3(e){this.writeFloat(e.x),this.writeFloat(e.y),this.writeFloat(e.z)}writeVector4(e){this.writeFloat(e.x),this.writeFloat(e.y),this.writeFloat(e.z),this.writeFloat(e.w)}writeRGBColor(e){this.writeFloat(e.r),this.writeFloat(e.g),this.writeFloat(e.b)}writeArray(t){for(let e=0;e<t.length;e++){var r=t[e];this.writeFloat(r)}}writeFloat32Array(e){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt8Array(e){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt16Array(e){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt32Array(e){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint8Array(e){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint16Array(e){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint32Array(e){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}reset(){this.offset=0}}class ya{constructor(){s(this,"shareDataBuffer"),s(this,"_byteOffset",0)}allocation(e){this.shareDataBuffer&&this.shareDataBuffer.byteLength<e?this._byteOffset=0:this.shareDataBuffer=new ArrayBuffer(e)}allocation_node(e){var t;return this._byteOffset+e>this.shareDataBuffer.byteLength?(console.error("memory not enough!",this._byteOffset,e,this.shareDataBuffer.byteLength),null):((t=new Qn).byteOffset=this._byteOffset,t.byteSize=e,t.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,t.byteSize),this._byteOffset+=t.byteSize,t)}allocation_memory(e){return this._byteOffset+e.byteSize>this.shareDataBuffer.byteLength?(console.error("memory not enough!",this._byteOffset,e.byteSize,this.shareDataBuffer.byteLength),null):(e.byteOffset=this._byteOffset,e.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,e.byteSize),this._byteOffset+=e.byteSize,e)}reset(){this._byteOffset=0}destroy(){this.shareDataBuffer=null,this._byteOffset=0}}class er{constructor(){s(this,"bufferType"),s(this,"buffer"),s(this,"memory"),s(this,"memoryNodes"),s(this,"seek"),s(this,"outFloat32Array"),s(this,"byteSize"),s(this,"usage"),s(this,"visibility",GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE),s(this,"_readBuffer"),s(this,"_readFlag",!1),this.memory=new ya,this.memoryNodes=new Map}debug(){}reset(e=!1,t=0,r){this.seek=0,this.memory.reset(),e&&this.createBuffer(this.usage,t,r)}setBoolean(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(4),this.memoryNodes.set(e,r)),r.setX(t?1:0)}setFloat(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(4),this.memoryNodes.set(e,r)),r.setX(t)}setInt8(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(1),this.memoryNodes.set(e,r)),r.setInt8(t)}setInt16(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(2),this.memoryNodes.set(e,r)),r.setInt16(t)}setInt32(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(4),this.memoryNodes.set(e,r)),r.setInt32(t)}setUint8(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(1),this.memoryNodes.set(e,r)),r.setUint8(t)}setUint16(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(2),this.memoryNodes.set(e,r)),r.setUint16(t)}setUint32(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(4),this.memoryNodes.set(e,r)),r.setUint32(t)}setVector2(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(8),this.memoryNodes.set(e,r)),r.setXY(t.x,t.y)}setVector3(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(12),this.memoryNodes.set(e,r)),r.setXYZ(t.x,t.y,t.z)}setVector4(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(16),this.memoryNodes.set(e,r)),r.setXYZW(t.x,t.y,t.z,t.w)}setVector4Array(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(16*t.length),this.memoryNodes.set(e,r)),r.setVector4Array(t)}setColor(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(16),this.memoryNodes.set(e,r)),r.setXYZW(t.r,t.g,t.b,t.a)}setColorArray(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(16*t.length),this.memoryNodes.set(e,r)),r.setColorArray(t)}setMatrix(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(64),this.memoryNodes.set(e,r)),r.setFloat32Array(0,t.rawData)}setMatrixArray(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(64*t.length),this.memoryNodes.set(e,r));for(let e=0;e<t.length;e++){var i=t[e];r.setFloat32Array(16*e,i.rawData)}}setArray(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,r)),r.setArray(0,t)}setFloat32Array(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,r)),r.setFloat32Array(0,t)}setInt32Array(e,t){let r=this.memoryNodes.get(e);r||(r=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,r)),r.setInt32Array(0,t)}setStruct(e,t,r,i){var a=Bt.Ref(e),e=(Bt.GetSize(e),t),s=this.memoryNodes.get(e);s.reset();let o=r;i&&(o=o[i]);for(let e=0;e<a.length;e++){var n=a[e],h=o[n.name];switch(n.type){case"Boolean":case"Number":s.writeFloat(h);break;case"Float32Array":s.writeFloat32Array(h);break;case"Vector2":s.writeVector2(h);break;case"Vector3":s.writeVector3(h);break;case"Vector4":s.writeVector4(h);break;case"Color":s.writeRGBColor(h);break;case"Array":s.writeArray(h)}}}setStructArray(t,r,i){var a=r.length;for(let e=0;e<a;e++){var s=r[e];this.setStruct(t,e,s,i)}}apply(){E.device.queue.writeBuffer(this.buffer,0,this.memory.shareDataBuffer)}destroy(){this.outFloat32Array=null,this.buffer.destroy(),this.memory.destroy()}createBuffer(e,t,r){var i=E.device;this.byteSize=4*t,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),r&&(this.memory.allocation_node(4*r.length).setArrayBuffer(0,r),this.apply()),this.outFloat32Array=new Float32Array(t)}createBufferByStruct(e,t,r){var i=Bt.GetSize(t),t=i*r,a=E.device;this.buffer=a.createBuffer({size:t,usage:e,mappedAtCreation:!1}),this.memory.allocation(t);for(let e=0;e<r;e++){var s,o=e;this.memoryNodes.get(o)||(s=this.memory.allocation_node(i),this.memoryNodes.set(o,s))}}readBuffer(){return this._readBuffer||(this._readBuffer=E.device.createBuffer({size:this.memory.shareDataBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,mappedAtCreation:!1})),this._readFlag||this.read(),this.outFloat32Array}async read(){this._readFlag=!0;var e=E.device.createCommandEncoder(),e=(e.copyBufferToBuffer(this.buffer,0,this._readBuffer,0,this.memory.shareDataBuffer.byteLength),E.device.queue.submit([e.finish()]),await this._readBuffer.mapAsync(GPUMapMode.READ),this._readBuffer.getMappedRange());this.outFloat32Array.set(new Float32Array(e),0),this._readBuffer.unmap(),this._readFlag=!1}}var Ct=(e=>(e[e.IndicesGPUBuffer=0]="IndicesGPUBuffer",e[e.VertexGPUBuffer=1]="VertexGPUBuffer",e[e.UniformGPUBuffer=2]="UniformGPUBuffer",e[e.StorageGPUBuffer=3]="StorageGPUBuffer",e[e.ComputeGPUBuffer=4]="ComputeGPUBuffer",e[e.MaterialDataUniformGPUBuffer=5]="MaterialDataUniformGPUBuffer",e[e.StructStorageGPUBuffer=6]="StructStorageGPUBuffer",e))(Ct||{});class Se extends er{constructor(e,t=0,r){super(),this.bufferType=Ct.StorageGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|t,e,r)}}class Mt extends er{constructor(e,t){super(),this.bufferType=Ct.UniformGPUBuffer,this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,e,t)}genUniformNodes(){}}let qe=function(e=16,t=16){var r,i,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),s=[];if(t=t||a.length,e)for(r=0;r<e;r++)s[r]=a[0|Math.random()*t];else for(s[8]=s[13]=s[18]=s[23]="-",s[14]="4",r=0;r<36;r++)s[r]||(i=0|16*Math.random(),s[r]=a[19==r?3&i|8:i]);return s.join("")};class Ps{constructor(){s(this,"instanceID"),s(this,"shaderVariant"),s(this,"vsEntryPoint","main"),s(this,"fsEntryPoint","main"),s(this,"bindGroups"),s(this,"shaderReflection"),s(this,"defineValue"),s(this,"constValues"),s(this,"uniforms"),s(this,"_bufferDic"),s(this,"_shaderChange",!1),s(this,"_stateChange",!1),this.instanceID=qe(),this.defineValue={},this.constValues={},this.uniforms={},this._bufferDic=new Map}noticeShaderChange(){this._shaderChange=!0}noticeStateChange(){this._stateChange=!0}setStorageBuffer(e,t){this._bufferDic.has(e)||this._bufferDic.set(e,t)}setStructStorageBuffer(e,t){this._bufferDic.has(e)||this._bufferDic.set(e,t)}setUniformBuffer(e,t){this._bufferDic.has(e)||this._bufferDic.set(e,t)}setDefine(e,t){this.defineValue[e]=t,this.noticeShaderChange()}hasDefine(e){return null!=this.defineValue[e]}deleteDefine(e){delete this.defineValue[e],this.noticeShaderChange()}setUniformFloat(e,t){this.uniforms[e]?this.uniforms[e].value=t:(this.uniforms[e]=new ae(t),this.noticeStateChange())}setUniformVector2(e,t){this.uniforms[e]?this.uniforms[e].vector2=t:this.uniforms[e]=new ae(t)}setUniformVector3(e,t){this.uniforms[e]?this.uniforms[e].vector3=t:this.uniforms[e]=new ae(t)}setUniformVector4(e,t){this.uniforms[e]?this.uniforms[e].vector4=t:this.uniforms[e]=new ae(t)}setUniformColor(e,t){this.uniforms[e]?this.uniforms[e].color=t:this.uniforms[e]=new ae(t)}setUniformArray(e,t){this.uniforms[e]?this.uniforms[e].float32Array(t):this.uniforms[e]=new ae(t)}destroy(){}}var mr=(e=>(e[e.u32=1]="u32",e[e.f32=1]="f32",e[e["vec2<f32>"]=2]="vec2<f32>",e[e["vec3<f32>"]=3]="vec3<f32>",e[e["vec4<f32>"]=4]="vec4<f32>",e[e.float32=1]="float32",e[e.float32x2=2]="float32x2",e[e.float32x3=3]="float32x3",e[e.float32x4=4]="float32x4",e))(mr||{});let Jn=[null,ni.float32,ni.float32x2,ni.float32x3,ni.float32x4];class it{static parse(e,t){return e=this.filterComment(e),e=this.parsePreprocess(new es,e,t),e=this.parseAutoBindingForGroupX(e,1)}static parseComputeShader(e,t){return e=this.filterComment(e),e=this.parsePreprocess(new es,e,t)}static parsePreprocess(e,t,r){var i,a,s=t.indexOf("#");return-1==s?t:(i=t.substring(0,s),a=t.indexOf(`
`,t.lastIndexOf("#")),s=t.substring(s,a),t=t.substring(a),i+this.parsePreprocessCommand(e,s,r)+t)}static parseAutoBindingForGroupX(e,t){let r=0,i="",a=new Map;for(;r<e.length;){if(-1==(h=e.indexOf("@group(",r))){i+=e.substring(r);break}var s,o=e.indexOf(")",h),n=Number.parseInt(e.substring(h+7,o)),h=e.indexOf("@binding(",o),o=e.indexOf(")",h);i+=e.substring(r,h),n==t?a.has(n)?(s=a.get(n)+1,i+=`@binding(${s})`,a.set(n,s)):(i+="@binding(0)",a.set(n,0)):i+=e.substring(h,o+1),r=o+1}return i}static parsePreprocessCommand(i,e,a){let s="",o=e.split(`
`),n=[!1],h=[!1];for(let r=0;r<o.length;r++){let e=o[r],t=n[n.length-1];if(0!=e.trim().indexOf("#"))t||(s+=e+`
`);else{var l,u=e.trim();if(-1!=u.indexOf("#if"))t&&1<n.length?n.push(t):(l=u.substring(3).trim(),t=!this.parseCondition(l,a),n.push(t),h.push(!t));else if(-1!=u.indexOf("#elseif")||-1!=u.indexOf("#else")&&-1!=u.indexOf(" if"))h[h.length-1]?(n.pop(),t=!0,n.push(t)):(n.pop(),(t=n[n.length-1])&&1<n.length?n.push(t):(""==(l=u.substring(u.indexOf("if")+2).trim())&&console.error("preprocess command error, conditions missing: "+u),t=!this.parseCondition(l,a),n.push(t),h.push(!t)));else if(-1!=u.indexOf("#else"))n.pop(),t&&1<n.length&&n[n.length-1]?n.push(t):n.push(!t);else if(-1!=u.indexOf("#endif"))n.pop(),h.pop();else if(-1!=u.indexOf("#include")){let e="",t=u.charAt(u.length-1);if(e=">"==t?this.extract(u,"<",">"):this.extract(u,t,t),!i.includeMap.has(e)){i.includeMap.set(e,!0);var c=A.getShader(e);if(!c)throw`${u} error: '${e}' not found`;c=this.filterComment(c),c=this.parsePreprocess(i,c,a),s+=c+`\r
`}}else{if(-1==u.indexOf("#define "))throw"nonsupport: "+u;{let e=u.substring(u.indexOf("#define ")+8).trim(),t=e.indexOf(" "),r=e,i="";-1!=t&&(r=e.substring(0,t).trim(),i=e.substring(t+1).trim()),a[r]=i}}}}return s}static parseCondition(e,t){t=t[e];return null!=t&&(1==t||0!=t)}static filterComment(i){let a="",s=!0,o=!0;for(let r=0;r<i.length;){let e=s?i.indexOf("//",r):-1,t=o?i.indexOf("/*",r):-1;if(-1==e&&-1==t){a+=i.substring(r);break}s=-1!=e,o=-1!=t,-1!=e&&-1!=t&&(e<t?t=-1:e=-1),-1!=e?(t=i.indexOf(`
`,e),a+=i.substring(r,e),r=-1!=t?t:i.length):-1!=t&&(e=i.indexOf("*/",t),a+=i.substring(r,t),r=e+2)}return a}static extract(e,t,r){t=e.indexOf(t)+t.length,r=e.indexOf(r,t);return e.substring(t,r).trim()}}class es{constructor(){s(this,"includeMap",new Map)}}const qr=class{constructor(){s(this,"attributes",[]),s(this,"vs_variables",[]),s(this,"fs_variables",[]),s(this,"cs_variables",[]),s(this,"groups",[]),s(this,"variables",{}),s(this,"useSplit",!1)}static parser(e,t){t.shaderReflection||(t.shaderReflection=new qr),-1!=e.indexOf("@vertex")?(t.shaderReflection.attributes=this.parserVertexOld(e),t.shaderReflection.vs_variables=this.parserVariables(e)):-1!=e.indexOf("@fragment")?t.shaderReflection.fs_variables=this.parserVariables(e):-1!=e.indexOf("@compute")&&(t.shaderReflection.cs_variables=this.parserVariables(e))}static parser2(e,t){t.shaderReflection||(t.shaderReflection=new qr);var r=t.shaderReflection;-1!=e.indexOf("@vertex")?(r.attributes=this.parserVertex(t.vsEntryPoint,e),r.vs_variables=this.parserVariables(e)):-1!=e.indexOf("@fragment")?r.fs_variables=this.parserVariables(e):-1!=e.indexOf("@compute")&&(r.cs_variables=this.parserVariables(e)),-1!=e.indexOf("splitTexture")&&(r.useSplit=!0)}static combineShaderReflectionVarInfo(e,t){for(const s of t){e.groups[s.group]||(e.groups[s.group]=[]);var r=s;if(e.groups[s.group][s.binding]){var i=e.groups[s.group][s.binding],a=s;if(i.varName!=a.varName&&console.warn(`shader reflection var not match! var name vs : ${i.varName} , fs : `+a.varName),i.varType!=a.varType&&console.error(`shader reflection varType not match! var varType vs : ${i.varType} , fs : `+a.varType),i.dataType!=a.dataType&&console.warn(`shader reflection dataType not match! var dataType vs : ${i.dataType} , fs : `+a.dataType),i.dataIsBuiltinType!=a.dataIsBuiltinType&&console.error(`shader reflection dataIsBuiltinType not match! var dataIsBuiltinType vs : ${i.dataIsBuiltinType} , fs : `+a.dataType),i.dataFields&&a.dataFields||console.warn(`shader reflection dataFields is empty! var dataFields vs : ${i.dataFields} , fs : `+a.dataFields),i.dataFields)for(let e=0;e<i.dataFields.length;e++)i.dataFields[e];if(a.dataFields)for(let e=0;e<a.dataFields.length;e++)a.dataFields[e]}e.groups[s.group][s.binding]=r,e.variables[s.varName]=r}}static final(e){var t=e.shaderReflection;this._shaderReflectionMap.set(e.shaderVariant,t),this.combineShaderReflectionVarInfo(t,t.vs_variables),this.combineShaderReflectionVarInfo(t,t.fs_variables)}static getShaderReflection2(e,t){null!=t.shaderVariant&&(e=it.parse(e,t.defineValue),qr.parser2(e,t))}static poolGetReflection(e){return this._shaderReflectionMap.get(e)}static genShaderVar(e){let t=""+e.vs+e.fs+e.compute;t+="|";for(const r in e.uniforms)t+=r+":";t+="|";for(const i in e.constValues)t+=i+":",t+=e.constValues[i];t+="|";for(const a in e.defines)t+=a+":",t+=e.defines[a];t+="|";for(const s in e.shaderState)t+=s+":",t+=e.shaderState[s]+";";return t}static genShaderVariant(e){let t="";for(const r in e.uniforms)t+=r+":";t+="|";for(const i in e.constValues)t+=i+":",t+=e.constValues[i];t+="|";for(const a in e.defineValue)t+=a+":",t+=e.defineValue[a];return t}static genRenderShaderVariant(e){let t=`RenderShader(${e.vsName},${e.fsName})`;t=(t+="|")+this.genShaderVariant(e)+"|";for(const r in e.shaderState)t+=r+":",t+=e.shaderState[r]+";";return t}static genComputeShaderVariant(e){var t=`ComputeShader(${e.instanceID})`;return(t+="|")+this.genShaderVariant(e)}combine(e){var t=e.shaderReflection,r=e.defines,i={};for(let e=0;e<this.attributes.length;e++){var a=this.attributes[e];r[a.name]&&(i[a.name]=a)}var s=t.attributes.length;for(let e=0;e<s;e++){var o,n=t.attributes[e];i[n.name]?(o=i[n.name]).location==n.location&&o.name!=n.name&&console.log("location must same!"):this.attributes.push(n)}}static parserVariables(s){let o=0,n=[];for(;o<s.length;){var h=s.indexOf("@group(",o);if(h<0)break;var l=s.indexOf(";",h);o=l;let e=s.substring(h,l),t=this.extract(e,"@group(",")"),r=this.extract(e,"@binding(",")"),i="",a="var";-1!=e.indexOf("var<")?(i=this.extract(e,">",":"),a=this.extract(e,"var<",">").replace(",","-").replaceAll(" ","")):i=this.extract(e,"var",":");h=e.substring(e.lastIndexOf(":")+1).trim(),l={group:0,binding:0,varType:"",varName:"",dataType:"",dataIsBuiltinType:!0,dataFields:null};l.group=Number.parseInt(t),l.binding=Number.parseInt(r),l.varType=a,l.varName=i,l.dataType=h,l.dataIsBuiltinType=this.isBuiltinTypes(l.dataType),l.dataIsBuiltinType||(l.dataFields=this.parserStructFields(s,l.dataType)),n.push(l)}return n}static extract(e,t,r){t=e.indexOf(t)+t.length,r=e.indexOf(r,t);return e.substring(t,r).trim()}static isBuiltinTypes(e){switch(e){case"i32":case"u32":case"f32":return!0;default:var t=e.indexOf("<");if(-1!=t)switch(e.substring(0,t)){case"vec2":case"vec3":case"vec4":case"mat3":case"mat4":return!0;case"array":return this.isBuiltinTypes(e.substring(t+1,e.lastIndexOf(">")))}}return!1}static parserStructFields(e,t){let r=[],i=0;for(;i<e.length;){if((o=e.indexOf("struct ",i))<0)break;var a=e.indexOf("{",o);if(i=a,e.substring(o+6,a).trim()===t){var s,o=e.indexOf("{",o),a=e.indexOf("}",o);for(s of e.substring(o+1,a).split(",")){var n=s.indexOf(":");-1!=n&&(n={name:s.substring(0,n).trim(),type:s.substring(n+1).trim()},r.push(n))}break}}return r}static parserVertexOld(e){let r=[],t=e.split("fn main(")[1].split("->")[0],i=t.split("@");if(i&&1<i.length)for(let t=1;t<i.length;t++){let e=i[t].replace(/\s*$/g,"");e=(e=(e=e.replaceAll(",","")).replaceAll(`
`,"")).replaceAll("  "," "),this.parserAttribute(e,r)}else{var a=t.split(":")[1],e=(a=(a=(a=a.replaceAll("  ","")).replaceAll(" ","")).replaceAll(")",""),(a=e.split("struct "+a)[1]).indexOf("{")),s=a.indexOf("}");a=a.slice(e,s),i=a.split("@");for(let t=1;t<i.length;t++){let e=i[t].replace(/\s*$/g,"");e=(e=(e=e.replaceAll(`
`,"")).split(",")[0]).replaceAll("  "," "),this.parserAttribute(e,r)}}return r}static parserVertex(e,t){let r=[],i=t.split(`fn ${e}(`)[1].split("->")[0],a=i.split("@");if(a&&1<a.length)for(let t=1;t<a.length;t++){let e=a[t].replace(/\s*$/g,"");e=(e=(e=e.replaceAll(",","")).replaceAll(`
`,"")).replaceAll("  "," "),this.parserAttribute(e,r)}else{var e=i.split(":")[1],t=(e=(e=(e=e.replaceAll("  ","")).replaceAll(" ","")).replaceAll(")",""),(e=t.split("struct "+e)[1]).indexOf("{")),s=e.indexOf("}");e=e.slice(t,s),a=e.split("@");for(let t=1;t<a.length;t++){let e=a[t].replace(/\s*$/g,"");e=(e=(e=e.replaceAll(`
`,"")).split(",")[0]).replaceAll("  "," "),this.parserAttribute(e,r)}}return r}static parserAttribute(e,t){var r,i,a={name:"",group:0,location:0,type:"",valueType:"",value:0,size:0,format:"float32"};-1!=e.indexOf("builtin")?(a.type="builtin",r=e.match(/\((.+?)\)/g)[0],r=(r=(r=e.match(/\((.+?)\)/g)[0]).replace("(","")).replaceAll(")",""),a.location=parseInt(r),i=e.split(":"),a.name=i[0].split(" ")[1],a.name=a.name.replaceAll("  "," "),a.name=a.name.replaceAll(" ",""),a.valueType=i[1],a.valueType=a.valueType.replaceAll("  "," "),a.valueType=a.valueType.replaceAll(" ",""),a.valueType=a.valueType.replaceAll("\r",""),a.valueType=a.valueType.replaceAll(")",""),a.valueType=a.valueType.replaceAll(")",""),a.size=mr[a.valueType],t.push(a)):-1!=e.indexOf("location")&&(a.type="location",r=e.match(/\((.+?)\)/g)[0],r=(r=(r=e.match(/\((.+?)\)/g)[0]).replace("(","")).replaceAll(")",""),a.location=parseInt(r),i=e.split(":"),a.name=i[0].split(" ")[1],a.name=a.name.replaceAll("  "," "),a.name=a.name.replaceAll(" ",""),a.valueType=i[1],a.valueType=a.valueType.replaceAll("  "," "),a.valueType=a.valueType.replaceAll(" ",""),a.valueType=a.valueType.replaceAll("\r",""),a.valueType=a.valueType.replaceAll(")",""),a.valueType=a.valueType.replaceAll(")",""),a.size=mr[a.valueType],t.push(a)),a.format=Jn[mr[a.valueType]]}};let Ze=qr;s(Ze,"_shaderReflectionMap",new Map);class Ce extends Ps{constructor(e){super(),s(this,"entryPoint","CsMain"),s(this,"workerSizeX",1),s(this,"workerSizeY",0),s(this,"workerSizeZ",0),s(this,"_computePipeline"),s(this,"_csShaderModule"),s(this,"_destCS"),s(this,"_sourceCS"),s(this,"_storageTextureDic"),s(this,"_sampleTextureDic"),s(this,"_groupsShaderReflectionVarInfos"),this._sourceCS=e,Ze.getShaderReflection2(e,this),this._storageTextureDic=new Map,this._sampleTextureDic=new Map}setStorageTexture(e,t){this._storageTextureDic.has(e)||this._storageTextureDic.set(e,t)}setSamplerTexture(e,t){this._sampleTextureDic.set(e,t)}compute(t){this._computePipeline||this.genComputePipeline(),t.setPipeline(this._computePipeline);for(let e=0;e<this.bindGroups.length;++e)t.setBindGroup(e,this.bindGroups[e]);this.workerSizeX&&this.workerSizeY&&this.workerSizeZ?t.dispatchWorkgroups(this.workerSizeX,this.workerSizeY,this.workerSizeZ):this.workerSizeX&&this.workerSizeY?t.dispatchWorkgroups(this.workerSizeX,this.workerSizeY):t.dispatchWorkgroups(this.workerSizeX)}readHeap(){}genGroups(e,t,r=!1){if(!this.bindGroups[e]||r){var i=t[e],a=[];for(let e=0;e<i.length;++e){var s,o,n,h,l=i[e];if(l)switch(l.varType){case"uniform":var u=this._bufferDic.get(l.varName);u?(u={binding:l.binding,resource:{buffer:u.buffer,offset:0,size:u.memory.shareDataBuffer.byteLength}},a.push(u)):console.error(`ComputeShader(${this.instanceID})`,`buffer ${l.varName} is missing!`);break;case"storage-read":case"storage-read_write":var c,u=this._bufferDic.get(l.varName);u?(c={binding:l.binding,resource:{buffer:u.buffer,offset:0,size:u.memory.shareDataBuffer.byteLength}},a.push(c)):console.error(`ComputeShader(${this.instanceID})`,`buffer ${l.varName} is missing!`);break;case"var":"sampler"==l.dataType?(c=l.varName.replace("Sampler",""),(s=this._sampleTextureDic.get(c))?(s={binding:l.binding,resource:s.gpuSampler},a.push(s)):console.error(`ComputeShader(${this.instanceID})`,`texture ${l.varName} is missing! `)):"sampler_comparison"==l.dataType?(s=l.varName.replace("Sampler",""),(o=this._sampleTextureDic.get(s))?(o={binding:l.binding,resource:o.gpuSampler_comparison},a.push(o)):console.error(`ComputeShader(${this.instanceID})`,`texture ${l.varName} is missing! `)):-1!=l.dataType.indexOf("texture_storage")?(o=this._storageTextureDic.get(l.varName))?(n={binding:l.binding,resource:o.getGPUView()},a.push(n)):console.error(`ComputeShader(${this.instanceID})`,`texture ${l.varName} is missing! `):-1!=l.dataType.indexOf("texture")&&((n=this._sampleTextureDic.get(l.varName))?(h={binding:l.binding,resource:n.getGPUView()},a.push(h)):console.error(`ComputeShader(${this.instanceID})`,`texture ${l.varName} is missing! `));break;default:console.error("unprocessed type:",l.varType)}}r=E.device.createBindGroup({layout:this._computePipeline.getBindGroupLayout(e),entries:a});this.bindGroups[e]=r}}genComputePipeline(){this.preCompileShader(this._sourceCS),this.genReflection(),this._computePipeline=E.device.createComputePipeline({layout:"auto",compute:{module:this.compileShader(),entryPoint:this.entryPoint}}),this._groupsShaderReflectionVarInfos=[];var t=this.shaderReflection;this.bindGroups=[];for(let e=0;e<t.groups.length;++e){var r=t.groups[e];this._groupsShaderReflectionVarInfos[e]=r,this.genGroups(e,this._groupsShaderReflectionVarInfos)}}preCompileShader(e){for(const r in this.constValues){var t;Object.prototype.hasOwnProperty.call(this.constValues,r)&&(t=this.constValues[r],e=e.replaceAll("&"+r,t.toString()))}this._destCS=it.parseComputeShader(e,this.defineValue)}compileShader(){var e=E.device.createShaderModule({label:`ComputeShader(${this.instanceID})`,code:this._destCS});return e.getCompilationInfo().then(e=>{0<e.messages.length&&console.log(this._destCS)}),this._csShaderModule=e}genReflection(){this.shaderVariant+=Ze.genComputeShaderVariant(this);var e=Ze.poolGetReflection(this.shaderVariant);e?this.shaderReflection=e:(Ze.getShaderReflection2(this._destCS,this),Ze.combineShaderReflectionVarInfo(this.shaderReflection,this.shaderReflection.cs_variables))}}class mt{static start(e){let t=this.profilerLabelMap.get(e);t||(t={lable:e,start:0,end:0,total:0,count:0,child:new Map},this.profilerLabelMap.set(e,t)),t.start=performance.now(),t.end=performance.now(),t.count=0,t.child.clear()}static end(e){e=this.profilerLabelMap.get(e);e&&(e.end=performance.now(),e.total=e.end-e.start)}static countStart(t,r=""){t=this.profilerLabelMap.get(t);if(t&&(t.count++,""!=r)){let e=t.child.get(r);(e=e||{lable:r,start:0,end:0,total:0,count:0}).start=performance.now(),e.end=performance.now(),e.count=0,t.child.set(r,e)}}static countEnd(t,r){t=this.profilerLabelMap.get(t);if(t&&""!=r){let e=t.child.get(r);(e=e||{lable:r,start:0,end:0,total:0,count:0}).end=performance.now(),e.total=e.end-e.start,e.count++}}static print(e){var t=this.profilerLabelMap.get(e);t&&console.log("performance",e,t.total+" ms")}}s(mt,"profilerLabelMap",new Map);class lt{}s(lt,"AXIS_ANGLE","axisAngle"),s(lt,"EULER_ANGLES","eulerAngles"),s(lt,"QUATERNION","quaternion");const We=class{constructor(e=0,t=0,r=0,i=1){s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"w",1),this.x=e,this.y=t,this.z=r,this.w=i}static identity(){return We._zero}static quaternionToMatrix(e,t){var r=2*e.x,i=2*e.y,a=2*e.z,s=e.x*r,o=e.y*i,n=e.z*a,h=e.x*i,l=e.x*a,u=e.y*a,r=e.w*r,i=e.w*i,e=e.w*a;t.rawData[0]=1-(o+n),t.rawData[1]=h+e,t.rawData[2]=l-i,t.rawData[3]=0,t.rawData[4]=h-e,t.rawData[5]=1-(s+n),t.rawData[6]=u+r,t.rawData[7]=0,t.rawData[8]=l+i,t.rawData[9]=u-r,t.rawData[10]=1-(s+o),t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1}get magnitude(){return Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z)}set(e=0,t=0,r=0,i=1){this.x=e,this.y=t,this.z=r,this.w=i}divide(e){return e instanceof We?new We(this.x/e.x,this.y/e.y,this.z/e.z):(this.x=this.x/e,this.y=this.y/e,this.z=this.z/e,this)}setFromArray(e){return this.x=e[0],this.y=e[1],this.z=e[2],this.w=e[3],this}multiply(e,t){var r=e.w,i=e.x,a=e.y,e=e.z,s=t.w,o=t.x,n=t.y,t=t.z;this.w=r*s-i*o-a*n-e*t,this.x=r*o+i*s+a*t-e*n,this.y=r*n-i*t+a*s+e*o,this.z=r*t+i*n-a*o+e*s}multiplyVector(e,t=null){t=t||new We;var r=e.x,i=e.y,e=e.z;return t.w=-this.x*r-this.y*i-this.z*e,t.x=this.w*r+this.y*e-this.z*i,t.y=this.w*i-this.x*e+this.z*r,t.z=this.w*e+this.x*i-this.y*r,t}fromAxisAngle(e,t){var t=.5*(t*=Math.PI/180),r=Math.sin(t);this.w=Math.cos(t),this.x=e.x*r,this.y=e.y*r,this.z=e.z*r,this.normalize()}toAxisAngle(e){var t=this.x*this.x+this.y*this.y+this.z*this.z,r=0;return 0<t?(r=2*Math.acos(this.w),t=1/Math.sqrt(t),e.x=this.x*t,e.y=this.y*t,e.z=this.z*t):(r=0,e.x=1,e.y=0,e.z=0),r}slerp(e,t,r){var i,a,s=e.w,o=e.x,n=e.y,e=e.z,h=t.w,l=t.x,u=t.y,t=t.z,c=s*h+o*l+n*u+e*t;c<0&&(c=-c,h=-h,l=-l,u=-u,t=-t),c<.95?(c=Math.acos(c),a=1/Math.sin(c),i=Math.sin(c*(1-r))*a,c=Math.sin(c*r)*a,this.w=s*i+h*c,this.x=o*i+l*c,this.y=n*i+u*c,this.z=e*i+t*c):(this.w=s+r*(h-s),this.x=o+r*(l-o),this.y=n+r*(u-n),this.z=e+r*(t-e),a=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z),this.w*=a,this.x*=a,this.y*=a,this.z*=a)}lerp(e,t,r){var i=e.w,a=e.x,s=e.y,e=e.z,o=t.w,n=t.x,h=t.y,t=t.z;i*o+a*n+s*h+e*t<0&&(o=-o,n=-n,h=-h,t=-t),this.w=i+r*(o-i),this.x=a+r*(n-a),this.y=s+r*(h-s),this.z=e+r*(t-e),o=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z),this.w*=o,this.x*=o,this.y*=o,this.z*=o}fromEulerAngles(e,t,r){var e=.5*(e*=te),t=.5*(t*=te),r=.5*(r*=te),i=Math.cos(e),e=Math.sin(e),a=Math.cos(t),t=Math.sin(t),s=Math.cos(r),r=Math.sin(r);return this.w=i*a*s+e*t*r,this.x=e*a*s-i*t*r,this.y=i*t*s+e*a*r,this.z=i*a*r-e*t*s,this}toEulerAngles(e=null){(e=e||new p).x=Math.atan2(2*(this.w*this.x+this.y*this.z),1-2*(this.x*this.x+this.y*this.y));var t=2*(this.w*this.y-this.z*this.x),t=this.clampf(t,-1,1);return e.y=Math.asin(t),e.z=Math.atan2(2*(this.w*this.z+this.x*this.y),1-2*(this.y*this.y+this.z*this.z)),e.x/=te,e.y/=te,e.z/=te,e}setFromRotationMatrix(e){var e=e.rawData,t=e[0],r=e[4],i=e[8],a=e[1],s=e[5],o=e[9],n=e[2],h=e[6],e=e[10],l=t+s+e;return 0<l?(l=.5/Math.sqrt(l+1),this.w=.25/l,this.x=(h-o)*l,this.y=(i-n)*l,this.z=(a-r)*l):s<t&&e<t?(l=2*Math.sqrt(1+t-s-e),this.w=(h-o)/l,this.x=.25*l,this.y=(r+a)/l,this.z=(i+n)/l):e<s?(l=2*Math.sqrt(1+s-t-e),this.w=(i-n)/l,this.x=(r+a)/l,this.y=.25*l,this.z=(o+h)/l):(l=2*Math.sqrt(1+e-t-s),this.w=(a-r)/l,this.x=(i+n)/l,this.y=(o+h)/l,this.z=.25*l),this}getEulerAngles(e){var t,r,i,a,s,o,n;return e=void 0===e?new p:e,i=this.x,a=this.y,s=this.z,n=(n=2*((o=this.w)*a-i*s))<=-.99999?(t=2*Math.atan2(i,o),r=-Math.PI/2,0):.99999<=n?(t=2*Math.atan2(i,o),r=Math.PI/2,0):(t=Math.atan2(2*(o*i+a*s),1-2*(i*i+a*a)),r=Math.asin(n),Math.atan2(2*(o*s+i*a),1-2*(a*a+s*s))),e.set(t,r,n).scaleBy(ri)}normalize(e=1){e/=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);this.x*=e,this.y*=e,this.z*=e,this.w*=e}toString(){return"{x:"+this.x+" y:"+this.y+" z:"+this.z+" w:"+this.w+"}"}fromMatrix(e){e=e.decompose(lt.QUATERNION)[1];this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w}inverse(e=null){e=e||new We;var t=this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z;return 0<t&&(e.w=this.w*(t=1/t),e.x=-this.x*t,e.y=-this.y*t,e.z=-this.z*t),e}clone(){return new We(this.x,this.y,this.z,this.w)}transformVector(e,t=null){var r,i,a,s=e.x,o=e.y,e=e.z;return t=t||new p,a=-this.x*s-this.y*o-this.z*e,r=this.w*s+this.y*e-this.z*o,i=this.w*o-this.x*e+this.z*s,e=this.w*e+this.x*o-this.y*s,t.x=-a*this.x+r*this.w-i*this.z+e*this.y,t.y=-a*this.y+r*this.z+i*this.w-e*this.x,t.z=-a*this.z-r*this.y+i*this.x+e*this.w,t}copyFrom(e){this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w}mul(e,t,r){r=r||new We;return r.x=e.w*t.x+e.x*t.w+e.y*t.z-e.z*t.y,r.y=e.w*t.y+e.y*t.w+e.z*t.x-e.x*t.z,r.z=e.w*t.z+e.z*t.w+e.x*t.y-e.y*t.x,r.w=e.w*t.w-e.x*t.x-e.y*t.y-e.z*t.z,r}clampf(e,t,r){var i;return r<t&&(i=t,t=r,r=i),e<t?t:e<r?e:r}};let j=We;function Eu(e,t,r){var i=2*e.x,a=2*e.y,s=2*e.z,o=e.x*i,n=e.y*a,h=e.z*s,l=e.x*a,u=e.x*s,c=e.y*s,i=e.w*i,a=e.w*a,e=e.w*s,s=r||new p;return s.x=(1-(n+h))*t.x+(l-e)*t.y+(u+a)*t.z,s.y=(l+e)*t.x+(1-(o+h))*t.y+(c-i)*t.z,s.z=(u-a)*t.x+(c+i)*t.y+(1-(o+n))*t.z,s}s(j,"HELP_0",new We),s(j,"HELP_1",new We),s(j,"HELP_2",new We),s(j,"_zero",new We(0,0,0,1)),s(j,"CALCULATION_QUATERNION",new We);class Ii{constructor(e=0){s(this,"_x",0),s(this,"_y",0),s(this,"_z",0),s(this,"_w",0),this.seed=e}get seed(){return this._x}set seed(e){this._x=e,this._y=1812433253*this._x+1,this._z=1812433253*this._y+1,this._w=1812433253*this._z+1}static getFloatFromInt(e){return Math.floor(1/8388607*(8388607&e))}static getByteFromInt(e){return e>>15}clone(){var e=new Ii;return e._x=this._x,e._y=this._y,e._z=this._z,e._w=this._w,e}get(){var e=this._x^this._x<<11;return this._x=this._y,this._y=this._z,this._z=this._w,this._w=this._w^this._w>>19^e^e>>8}getFloat(){return to(this.get())}getSignedFloat(){return 2*this.getFloat()-1}}let ri=180/Math.PI,te=Math.PI/180,Du=2147483647,Ru=-2147483647;function Y(e,t,r){return Math.max(t,Math.min(r,e))}class ht{static gaussFunction(e,t,r,i){e=Math.pow(e-r,2),r=2*Math.pow(i,2),i=Math.pow(Math.E,e/r*-1);return Math.round(i*t)}static computeGaussian(e,t){return 1/Math.sqrt(2*Math.PI*t)*Math.exp(-e*e/(2*t*t))}static gaussCoef(e){e<.5&&(e=.5);var e=Math.exp(.527076)/e,t=Math.exp(-e),r=Math.exp(-2*e),i=(1-t)*(1-t)/(1+2*e*t-r),a=i*(e-1)*t,e=i*(1+e)*t,s=-i*r,t=2*t,r=-r;return new Float32Array([i,a,e,s,t,r,(i+a)/(1-t-r),(e+s)/(1-t-r)])}static clampf(e,t,r){var i;return r<t&&(i=t,t=r,r=i),e<t?t:e<r?e:r}static normalizeAngle(e){for(;180<e;)e-=360;for(;e<-180;)e+=360;return e}static fract(e){return e-Math.floor(e)}static getRandDirXZ(e){var e=e*Math.random(),t=360*Math.random()*te;return{x:Math.cos(t)*e,z:Math.sin(t)*e}}static getRandDirXYZ(e){var e=e*Math.random(),t=360*Math.random()*te,r=Math.cos(t)*e,i=Math.tan(t)*e,t=Math.sin(t)*e;return new p(r,i,t)}static getCycleXYZ(e){var t=e*Math.random(),r=360*Math.random()*te,i=Math.cos(r)*t,e=e*Math.random()-.5*e,r=Math.sin(r)*t;return new p(i,e,r)}static angle(e,t){var r=J.HELP_0,i=J.HELP_1;return r.set(e.x,e.z),i.set(t.x,t.z),Math.acos((r.x*i.x+r.y*i.y)/(r.abs()*i.abs()))}static angle_360(e,t){var r=p.HELP_0;return e.cross(t,r),0<r.z?ht.angle(e,t):360-ht.angle(e,t)}getRotationY(e){return ht.normalizeAngle(Math.atan2(e.z,e.x)*ri)}static fromToRotation(e,t,r=null){r=r||new j;var i=new N;return N.fromToRotation(e,t,i),r.fromMatrix(i),r}static getEularDir_yUp(e){var t=j.HELP_0;return t.fromEulerAngles(0,e,0),t.transformVector(p.Z_AXIS,p.HELP_5),p.HELP_5}static transformVector(e,t,r=null){r=r||new p;var e=e.rawData,i=e[0],a=e[1],s=e[2],o=e[3],n=e[4],h=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],x=e[14],e=e[15],_=t.x,y=t.y,t=t.z;return r.x=i*_+n*y+c*t+g,r.y=a*_+h*y+d*t+v,r.z=s*_+l*y+f*t+x,r.w=o*_+u*y+m*t+e,r}}let ar=function(e,t,r){return e*(1-r)+t*r};function Iu(e,t,r){var i=new p,a=e.x,s=e.y,o=e.z,e=e.w,n=t.x,h=t.y,l=t.z,t=t.w;return i.x=(n-a)*r+a,i.y=(h-s)*r+s,i.z=(l-o)*r+o,i.w=(t-e)*r+e,i}function Lu(e,t,r){var i=new b;return i.r=(1-r)*e.r+r*t.r,i.g=(1-r)*e.g+r*t.g,i.b=(1-r)*e.b+r*t.b,i.a=(1-r)*e.a+r*t.a,i}function Ou(e,t,r){return e+((t-e)*r>>8)&255}let ts=function(e,t,r){var i=r-t;return Math.floor(e/i)%2==0?e%i+t:r-e%i+t},rs=function(e,t,r){return e%(r-t)+t},Au=function(e,t){let r=0;for(var i in e)i==t&&r++;return r};class Uu{constructor(){s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"w",0),s(this,"randSeedList"),this.randSeedList=[]}reset(){this.x=+Math.random(),this.y=+Math.random(),this.z=+Math.random(),this.w=+Math.random();for(let e=this.randSeedList.length=0;e<20;e++)this.randSeedList.push(+Math.random())}}function ke(e,t){return e instanceof p&&t instanceof p||e instanceof j&&t instanceof j?e.x*t.x+e.y*t.y+e.z*t.z:e.x*t.x+e.y*t.y}function Es(e,t){return new p(e.x*t.x,e.y*t.y,e.z*t.z)}function $n(e){return Math.sqrt(e)}function is(e){return $n(ke(e,e))}function eo(e,t){return is(e)>p.EPSILON?e.divide(is(e)):e instanceof J?new J:e instanceof p?new p:e instanceof j?new j:void 0}function to(e){return 1/8388607*(8388607&e)}function Gr(e){return e.getFloat()}function Ae(e,t,r){e=e.getFloat();return t*e+(1-e)*r}function Bu(e,t,r){let i;return t<r?(i=r-t,e.get()%i+t):r<t?(i=t-r,t-e.get()%i):t}function Sa(e){var t=Ae(e,-1,1),e=Ae(e,0,2*Math.PI),r=Math.sqrt(1-t*t),i=r*Math.cos(e),r=r*Math.sin(e);return new p(i,r,t)}function ro(e){var e=Ae(e,0,2*Math.PI),t=Math.cos(e),e=Math.sin(e);return new J(t,e)}function zu(e){let t=new j;return t.x=Ae(e,-1,1),t.y=Ae(e,-1,1),t.z=Ae(e,-1,1),t.w=Ae(e,-1,1),ke(t=eo(t),j.identity())<0?-t:t}function Nu(e){var t=2*Math.PI,r=Ae(e,0,1),i=Ae(e,0,t),e=Ae(e,0,t),t=Math.sqrt(1-r),r=Math.sqrt(r),t=new j(t*Math.sin(i),t*Math.cos(i),r*Math.sin(e),r*Math.cos(e));return ke(t,j.identity())<0?-t:t}function Fu(e,t){return new p(Ae(e,-t.x,t.x),Ae(e,-t.y,t.y),Ae(e,-t.z,t.z))}function io(e){var t=Sa(e);return t.scaleBy(Math.pow(Gr(e),1/3)),t}function ku(e,t){return Es(io(e),t)}function Gu(e,t,r){var i=Sa(e),e=Math.pow(Ae(e,0,1),1/3);return i.scaleBy(t+(r-t)*e),i}function Vu(e){var t=ro(e);return t.multiply(Math.pow(Ae(e,0,1),.5),t),t}function Hu(e,t,r){t=Es(Sa(e),t),e=Math.pow(Ae(e,r,1),1/3);return t.scaleBy(e),t}function Xu(e){let t=e.getFloat(),r=e.getFloat();1<t+r&&(t=1-t,r=1-r);e=1-t-r;return new p(t,r,e)}function Wu(e){return e/360*2*Math.PI}function Yu(e){return 180*e/Math.PI}function ju(e){return Math.sin(e)}function qu(e){return Math.cos(e)}let ao=4919;function Ku(){return++ao}function Zu(e,t,r){var i=e[t],a=e[r];e[t]=a,e[r]=i}function so(e){return Math.floor(e)}function Ds(e){return so(e+.5)}function Qu(e){return e=Math.max(e,0),Ds(65535*(e=Math.min(e,1)))}function Ju(e){return e=Math.max(e,0),Ds(255*(e=Math.min(e,1)))}function no(e){return 0==Math.abs(e)?e:1/Math.sqrt(e)}function $u(e){var t=Rs(e);return e.scaleBy(no(t))}function ec(e,t){return new p(e.y*t.z-e.z*t.y,e.z*t.x-e.x*t.z,e.x*t.y-e.y*t.x)}function Rs(e){return ke(e,e)}function tc(e){return Gr(new Ii(e))}function rc(e,t){t=new Ii(t);e.x=Gr(t),e.y=Gr(t),e.z=Gr(t)}function ic(e,t,r){return e<t?r:r<e?t:e}function Is(e,t){return e-Math.floor(e/t)*t}const oo=1e-6,O=class{constructor(e=0){s(this,"index",0),s(this,"offset",0),s(this,"rawData"),s(this,"_position"),O.useCount>=O.totalCount&&O.allocMatrix(O.totalCount+1e3),this.index=O.useCount,this.offset=O.useCount*O.blockBytes+O.wasmMatrixPtr,O.globalMatrixRef[this.index]=this,O.useCount++,this.rawData=new Float32Array(O.matrixBytes.buffer,this.offset,16),this._position=new p,this.identity()}static allocMatrix(e){this.totalCount=e,O.matrixBytes=new Float32Array(16*e),O.buffer=O.matrixBytes.buffer,O.wasmMatrixPtr=0,this.globalMatrixRef||(this.globalMatrixRef=[]),this.globalMatrixRef.forEach(t=>{var r=t.rawData;t.rawData=new Float32Array(O.matrixBytes.buffer,t.offset,16);for(let e=0;e<r.length;e++)t.rawData[e]=r[e]}),O.help_matrix_0||(O.help_matrix_0=new O),O.help_matrix_1||(O.help_matrix_1=new O),O.help_matrix_2||(O.help_matrix_2=new O),O.helpMatrix||(O.helpMatrix=new O),O.helpMatrix2||(O.helpMatrix2=new O),O._getEulerMatrix||(O._getEulerMatrix=new O),O._getEulerMatrix.identity()}static fromToRotation(e,t,r){return(r=r||new O).transformDir(e,t),r}static getAxisRotation(e,t,r,i){var a,s=new O,i=i*(Math.PI/180),o=Math.cos(i),i=Math.sin(i),n=1-o;return s.rawData[0]=o+e*e*n,s.rawData[5]=o+t*t*n,s.rawData[10]=o+r*r*n,s.rawData[1]=(o=e*t*n)+(a=r*i),s.rawData[4]=o-a,s.rawData[8]=(o=e*r*n)+(a=t*i),s.rawData[2]=o-a,s.rawData[9]=(o=t*r*n)-(a=e*i),s.rawData[6]=o+a,s}static sanitizeEuler(e){O.makePositive(e)}static makePositive(e){var t=2*Math.PI-1e-4;e.x<-1e-4?e.x+=2*Math.PI:e.x>t&&(e.x-=2*Math.PI),e.y<-1e-4?e.y+=2*Math.PI:e.y>t&&(e.y-=2*Math.PI),e.z<-1e-4?e.z+=2*Math.PI:e.z>t&&(e.z-=2*Math.PI)}static matrixToEuler(e,t){return e.get(1,2)<.999?-.999<e.get(1,2)?(t.x=Math.asin(-e.get(1,2)),t.y=Math.atan2(e.get(0,2),e.get(2,2)),t.z=Math.atan2(e.get(1,0),e.get(1,1)),O.sanitizeEuler(t),!0):(t.x=.5*Math.PI,t.y=Math.atan2(e.get(0,1),e.get(0,0)),t.z=0,O.sanitizeEuler(t),!1):(t.x=.5*-Math.PI,t.y=Math.atan2(-e.get(0,1),e.get(0,0)),t.z=0,O.sanitizeEuler(t),!1)}static matrixMultiply(e,t,r){O.wasm.Matrix_Multiply(e.index,t.index,r.index)}static matrixAppend(e,t,r){O.wasm.Matrix_Append(e.index,t.index,r.index)}static matrixRotateY(e,t){O.wasm.Matrix_Append(e,t.index)}static matrixRotate(e,t,r){O.wasm.Matrix_Rotate(e,t,r.index)}lookAt(e,t,r=p.Y_AXIS){var i=this.rawData,t=(t.subtract(e,p.HELP_0),p.HELP_0),a=(t.length<1e-4&&(t.z=1),t.normalize(),r.crossProduct(t,p.HELP_1)),r=(a.length<1e-4&&(.9999<Math.abs(r.z)?t.x+=1e-4:t.z+=1e-4),t.normalize(),r.cross(t,a),a.normalize(),t.crossProduct(a,p.HELP_2));i[0]=a.x,i[1]=r.x,i[2]=t.x,i[3]=0,i[4]=a.y,i[5]=r.y,i[6]=t.y,i[7]=0,i[8]=a.z,i[9]=r.z,i[10]=t.z,i[11]=0,i[12]=-a.dotProduct(e),i[13]=-r.dotProduct(e),i[14]=-t.dotProduct(e),i[15]=1}multiply(e){var t=this.rawData,e=e.rawData,r=O.helpMatrix.rawData;r[0]=t[0]*e[0]+t[1]*e[4]+t[2]*e[8]+t[3]*e[12],r[1]=t[0]*e[1]+t[1]*e[5]+t[2]*e[9]+t[3]*e[13],r[2]=t[0]*e[2]+t[1]*e[6]+t[2]*e[10]+t[3]*e[14],r[3]=t[0]*e[3]+t[1]*e[7]+t[2]*e[11]+t[3]*e[15],r[4]=t[4]*e[0]+t[5]*e[4]+t[6]*e[8]+t[7]*e[12],r[5]=t[4]*e[1]+t[5]*e[5]+t[6]*e[9]+t[7]*e[13],r[6]=t[4]*e[2]+t[5]*e[6]+t[6]*e[10]+t[7]*e[14],r[7]=t[4]*e[3]+t[5]*e[7]+t[6]*e[11]+t[7]*e[15],r[8]=t[8]*e[0]+t[9]*e[4]+t[10]*e[8]+t[11]*e[12],r[9]=t[8]*e[1]+t[9]*e[5]+t[10]*e[9]+t[11]*e[13],r[10]=t[8]*e[2]+t[9]*e[6]+t[10]*e[10]+t[11]*e[14],r[11]=t[8]*e[3]+t[9]*e[7]+t[10]*e[11]+t[11]*e[15],r[12]=t[12]*e[0]+t[13]*e[4]+t[14]*e[8]+t[15]*e[12],r[13]=t[12]*e[1]+t[13]*e[5]+t[14]*e[9]+t[15]*e[13],r[14]=t[12]*e[2]+t[13]*e[6]+t[14]*e[10]+t[15]*e[14],r[15]=t[12]*e[3]+t[13]*e[7]+t[14]*e[11]+t[15]*e[15],t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]}multiplyMatrices(e,t){var e=e.rawData,t=t.rawData,r=this.rawData,i=e[0],a=e[4],s=e[8],o=e[12],n=e[1],h=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],m=e[3],g=e[7],v=e[11],e=e[15],x=t[0],_=t[4],y=t[8],S=t[12],b=t[1],w=t[5],T=t[9],C=t[13],M=t[2],P=t[6],E=t[10],D=t[14],R=t[3],I=t[7],L=t[11],t=t[15];return r[0]=i*x+a*b+s*M+o*R,r[4]=i*_+a*w+s*P+o*I,r[8]=i*y+a*T+s*E+o*L,r[12]=i*S+a*C+s*D+o*t,r[1]=n*x+h*b+l*M+u*R,r[5]=n*_+h*w+l*P+u*I,r[9]=n*y+h*T+l*E+u*L,r[13]=n*S+h*C+l*D+u*t,r[2]=c*x+d*b+f*M+p*R,r[6]=c*_+d*w+f*P+p*I,r[10]=c*y+d*T+f*E+p*L,r[14]=c*S+d*C+f*D+p*t,r[3]=m*x+g*b+v*M+e*R,r[7]=m*_+g*w+v*P+e*I,r[11]=m*y+g*T+v*E+e*L,r[15]=m*S+g*C+v*D+e*t,this}multiplyPoint3(e,t){t=t||new p;var r=this.rawData;return t.x=r[0]*e.x+r[4]*e.y+r[8]*e.z+r[12],t.y=r[1]*e.x+r[5]*e.y+r[9]*e.z+r[13],t.z=r[2]*e.x+r[6]*e.y+r[10]*e.z+r[14],t}multiplyVector4(e,t){t=t||new p;var r=this.rawData,i=e.x,a=e.y,e=e.z,s=r[3]*i+r[7]*a+r[11]*e+r[15];return t.x=(r[0]*i+r[4]*a+r[8]*e+r[12])/(s=s||1),t.y=(r[1]*i+r[5]*a+r[9]*e+r[13])/s,t.z=(r[2]*i+r[6]*a+r[10]*e+r[14])/s,t.w=1,t}perspectiveB(e,t,r,i){e=Math.tan(e*Math.PI/360)*r,t*=e;return this.frustum(-t,t,-e,e,r,i)}transformVector4(e,t){var r=this.rawData,i=(t=t||new p,e.x),a=e.y,s=e.z,e=e.w;return t.x=i*r[0]+a*r[4]+s*r[8]+e*r[12],t.y=i*r[1]+a*r[5]+s*r[9]+e*r[13],t.z=i*r[2]+a*r[6]+s*r[10]+e*r[14],t.w=i*r[3]+a*r[7]+s*r[11]+e*r[15],t}perspectiveMultiplyPoint3(e,t){var r=p.HELP_2,i=this.rawData;return r.x=i[0]*e.x+i[4]*e.y+i[8]*e.z+i[12],r.y=i[1]*e.x+i[5]*e.y+i[9]*e.z+i[13],r.z=i[2]*e.x+i[6]*e.y+i[10]*e.z+i[14],e=i[3]*e.x+i[7]*e.y+i[11]*e.z+i[15],1e-7<Math.abs(e)?(t.x=r.x*(i=1/e),t.y=r.y*i,t.z=r.z*i,!0):(t.x=0,t.y=0,t.z=0,!1)}perspective(e,t,r,i){var a=this.rawData,e=e*te/2,e=Math.cos(e)/Math.sin(e);a[0]=-e/t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=e,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=i/(i-r),a[11]=1,a[12]=0,a[13]=0,a[14]=-r*i/(i-r),a[15]=0}ortho(e,t,r,i){var a=this.rawData;return a[0]=2/e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/t,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1/(i-r),a[11]=0,a[12]=0,a[13]=0,a[14]=r/(r-i),a[15]=1,this}orthoZO(e,t,r,i,a,s){var o=this.rawData,n=1/(e-t),h=1/(r-i),s=1/(a-s);return o[0]=-2*n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*h,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=s,o[11]=0,o[12]=(e+t)*n,o[13]=(i+r)*h,o[14]=a*s,o[15]=1,this}orthoOffCenter(e,t,r,i,a,s){var o=this.rawData;o[0]=2/(t-e),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(i-r),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(s-a),o[11]=0,o[12]=(e+t)/(e-t),o[13]=(i+r)/(r-i),o[14]=a/(a-s),o[15]=1}transformDir(e,t){var r,i,a,s,o,n=this.rawData,h=p.HELP_0,t=(t.crossProduct(e,h),t.dotProduct(e));1-1e-6<t?this.identity():(r=(e=(1-t)/h.dotProduct(h))*h.x,i=e*h.z,a=r*h.y,s=r*h.z,o=i*h.y,n[0]=t+r*h.x,n[1]=a-h.z,n[2]=s+h.y,n[4]=a+h.z,n[5]=t+e*h.y*h.y,n[6]=o-h.x,n[8]=s-h.y,n[9]=o+h.x,n[10]=t+i*h.z,n[3]=0,n[7]=0,n[11]=0,n[15]=1)}append(e){var t=this.rawData,r=t[0],i=t[4],a=t[8],s=t[12],o=t[1],n=t[5],h=t[9],l=t[13],u=t[2],c=t[6],d=t[10],f=t[14],p=t[3],m=t[7],g=t[11],v=t[15];t[0]=r*e.rawData[0]+o*e.rawData[4]+u*e.rawData[8]+p*e.rawData[12],t[1]=r*e.rawData[1]+o*e.rawData[5]+u*e.rawData[9]+p*e.rawData[13],t[2]=r*e.rawData[2]+o*e.rawData[6]+u*e.rawData[10]+p*e.rawData[14],t[3]=r*e.rawData[3]+o*e.rawData[7]+u*e.rawData[11]+p*e.rawData[15],t[4]=i*e.rawData[0]+n*e.rawData[4]+c*e.rawData[8]+m*e.rawData[12],t[5]=i*e.rawData[1]+n*e.rawData[5]+c*e.rawData[9]+m*e.rawData[13],t[6]=i*e.rawData[2]+n*e.rawData[6]+c*e.rawData[10]+m*e.rawData[14],t[7]=i*e.rawData[3]+n*e.rawData[7]+c*e.rawData[11]+m*e.rawData[15],t[8]=a*e.rawData[0]+h*e.rawData[4]+d*e.rawData[8]+g*e.rawData[12],t[9]=a*e.rawData[1]+h*e.rawData[5]+d*e.rawData[9]+g*e.rawData[13],t[10]=a*e.rawData[2]+h*e.rawData[6]+d*e.rawData[10]+g*e.rawData[14],t[11]=a*e.rawData[3]+h*e.rawData[7]+d*e.rawData[11]+g*e.rawData[15],t[12]=s*e.rawData[0]+l*e.rawData[4]+f*e.rawData[8]+v*e.rawData[12],t[13]=s*e.rawData[1]+l*e.rawData[5]+f*e.rawData[9]+v*e.rawData[13],t[14]=s*e.rawData[2]+l*e.rawData[6]+f*e.rawData[10]+v*e.rawData[14],t[15]=s*e.rawData[3]+l*e.rawData[7]+f*e.rawData[11]+v*e.rawData[15]}add(e){var t=this.rawData,r=t[0],i=t[4],a=t[8],s=t[12],o=t[1],n=t[5],h=t[9],l=t[13],u=t[2],c=t[6],d=t[10],f=t[14],p=t[3],m=t[7],g=t[11],v=t[15],x=e.rawData[0],_=e.rawData[4],y=e.rawData[8],S=e.rawData[12],b=e.rawData[1],w=e.rawData[5],T=e.rawData[9],C=e.rawData[13],M=e.rawData[2],P=e.rawData[6],E=e.rawData[10],D=e.rawData[14],R=e.rawData[3],I=e.rawData[7],L=e.rawData[11],e=e.rawData[15];return t[0]=r+x,t[1]=o+b,t[2]=u+M,t[3]=p+R,t[4]=i+_,t[5]=n+w,t[6]=c+P,t[7]=m+I,t[8]=a+y,t[9]=h+T,t[10]=d+E,t[11]=g+L,t[12]=s+S,t[13]=l+C,t[14]=f+D,t[15]=v+e,this}sub(e){var t=this.rawData,r=t[0],i=t[4],a=t[8],s=t[12],o=t[1],n=t[5],h=t[9],l=t[13],u=t[2],c=t[6],d=t[10],f=t[14],p=t[3],m=t[7],g=t[11],v=t[15],x=e.rawData[0],_=e.rawData[4],y=e.rawData[8],S=e.rawData[12],b=e.rawData[1],w=e.rawData[5],T=e.rawData[9],C=e.rawData[13],M=e.rawData[2],P=e.rawData[6],E=e.rawData[10],D=e.rawData[14],R=e.rawData[3],I=e.rawData[7],L=e.rawData[11],e=e.rawData[15];return t[0]=r-x,t[1]=o-b,t[2]=u-M,t[3]=p-R,t[4]=i-_,t[5]=n-w,t[6]=c-P,t[7]=m-I,t[8]=a-y,t[9]=h-T,t[10]=d-E,t[11]=g-L,t[12]=s-S,t[13]=l-C,t[14]=f-D,t[15]=v-e,this}mult(e){var t=this.rawData;return t[0]*=e,t[1]*=e,t[2]*=e,t[3]*=e,t[4]*=e,t[5]*=e,t[6]*=e,t[7]*=e,t[8]*=e,t[9]*=e,t[10]*=e,t[11]*=e,t[12]*=e,t[13]*=e,t[14]*=e,t[15]*=e,this}appendRotation(e,t){t=O.getAxisRotation(t.x,t.y,t.z,e);this.append(t)}createByRotation(e,t){var r=O.helpMatrix,e=e*te,i=Math.sin(e),e=Math.cos(e);1==t.x&&(r.rawData[0]=1,r.rawData[1]=0,r.rawData[2]=0,r.rawData[3]=0,r.rawData[4]=0,r.rawData[5]=e,r.rawData[6]=i,r.rawData[7]=0,r.rawData[8]=0,r.rawData[9]=-i,r.rawData[10]=e,r.rawData[11]=0,r.rawData[12]=0,r.rawData[13]=0,r.rawData[14]=0,r.rawData[15]=1),1==t.y&&(r.rawData[0]=e,r.rawData[1]=0,r.rawData[2]=-i,r.rawData[3]=0,r.rawData[4]=0,r.rawData[5]=1,r.rawData[6]=0,r.rawData[7]=0,r.rawData[8]=i,r.rawData[9]=0,r.rawData[10]=e,r.rawData[11]=0,r.rawData[12]=0,r.rawData[13]=0,r.rawData[14]=0,r.rawData[15]=1),1==t.z&&(r.rawData[0]=e,r.rawData[1]=i,r.rawData[2]=0,r.rawData[3]=0,r.rawData[4]=-i,r.rawData[5]=e,r.rawData[6]=0,r.rawData[7]=0,r.rawData[8]=0,r.rawData[9]=0,r.rawData[10]=1,r.rawData[11]=0,r.rawData[12]=0,r.rawData[13]=0,r.rawData[14]=0,r.rawData[15]=1),this.append(r)}appendScale(e,t,r){O.helpMatrix.createByScale(e,t,r),this.append(O.helpMatrix)}createByScale(e,t,r){var i=this.rawData;i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=t,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=r,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1}appendTranslation(e,t,r){var i=this.rawData;i[12]+=e,i[13]+=t,i[14]+=r}clone(){var e=new O;return e.copyFrom(this),e}copyRowFrom(e,t){var r=this.rawData;switch(e){case 0:r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w;break;case 1:r[4]=t.x,r[5]=t.y,r[6]=t.z,r[7]=t.w;break;case 2:r[8]=t.x,r[9]=t.y,r[10]=t.z,r[11]=t.w;break;case 3:r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=t.w}}copyRowTo(e,t){var r=this.rawData;switch(e){case 0:t.x=r[0],t.y=r[1],t.z=r[2],t.w=r[3];break;case 1:t.x=r[4],t.y=r[5],t.z=r[6],t.w=r[7];break;case 2:t.x=r[8],t.y=r[9],t.z=r[10],t.w=r[11];break;case 3:t.x=r[12],t.y=r[13],t.z=r[14],t.w=r[15]}}copyFrom(e){var t=this.rawData;return t[0]=e.rawData[0],t[1]=e.rawData[1],t[2]=e.rawData[2],t[3]=e.rawData[3],t[4]=e.rawData[4],t[5]=e.rawData[5],t[6]=e.rawData[6],t[7]=e.rawData[7],t[8]=e.rawData[8],t[9]=e.rawData[9],t[10]=e.rawData[10],t[11]=e.rawData[11],t[12]=e.rawData[12],t[13]=e.rawData[13],t[14]=e.rawData[14],t[15]=e.rawData[15],this}copyRawDataTo(e,t=0,r){var i=this.rawData;e[0+t]=i[0],e[1+t]=i[1],e[2+t]=i[2],e[3+t]=i[3],e[4+t]=i[4],e[5+t]=i[5],e[6+t]=i[6],e[7+t]=i[7],e[8+t]=i[8],e[9+t]=i[9],e[10+t]=i[10],e[11+t]=i[11],e[12+t]=i[12],e[13+t]=i[13],e[14+t]=i[14],e[15+t]=i[15]}copyColFrom(e,t){var r=this.rawData;switch(e){case 0:r[0]=t.x,r[4]=t.y,r[8]=t.z,r[12]=t.w;break;case 1:r[1]=t.x,r[5]=t.y,r[9]=t.z,r[13]=t.w;break;case 2:r[2]=t.x,r[6]=t.y,r[10]=t.z,r[14]=t.w;break;case 3:r[3]=t.x,r[7]=t.y,r[11]=t.z,r[15]=t.w}}copyColTo(e,t){var r=this.rawData;switch(e){case 0:t.x=r[0],t.y=r[4],t.z=r[8],t.w=r[12];break;case 1:t.x=r[1],t.y=r[5],t.z=r[9],t.w=r[13];break;case 2:t.x=r[2],t.y=r[6],t.z=r[10],t.w=r[14];break;case 3:t.x=r[3],t.y=r[7],t.z=r[11],t.w=r[15]}}copyToMatrix3D(e){e.rawData=this.rawData.slice(0)}makeRotationFromQuaternion(e){return this.compose(O._zero,e,O._one),this}decompose(t="eulerAngles",e){var r=j.CALCULATION_QUATERNION,e=e||O._prs,i=(this.copyRawDataTo(O.helpMatrix.rawData),O.helpMatrix.rawData),a=e[0],s=(a.x=i[12],a.y=i[13],a.z=i[14],i[12]=0,i[13]=0,i[14]=0,e[2]),o=(s.x=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]),s.y=Math.sqrt(i[4]*i[4]+i[5]*i[5]+i[6]*i[6]),s.z=Math.sqrt(i[8]*i[8]+i[9]*i[9]+i[10]*i[10]),i[0]*(i[5]*i[10]-i[6]*i[9])-i[1]*(i[4]*i[10]-i[6]*i[8])+i[2]*(i[4]*i[9]-i[5]*i[8])<0&&(s.z=-s.z),i[0]/=s.x,i[1]/=s.x,i[2]/=s.x,i[4]/=s.y,i[5]/=s.y,i[6]/=s.y,i[8]/=s.z,i[9]/=s.z,i[10]/=s.z,e[1]);switch(t){case lt.AXIS_ANGLE:o.w=Math.acos((i[0]+i[5]+i[10]-1)/2);var n=Math.sqrt((i[6]-i[9])*(i[6]-i[9])+(i[8]-i[2])*(i[8]-i[2])+(i[1]-i[4])*(i[1]-i[4]));o.x=(i[6]-i[9])/n,o.y=(i[8]-i[2])/n,o.z=(i[1]-i[4])/n;break;case lt.QUATERNION:let e=i[0]+i[5]+i[10];0<e?(o.w=Math.sqrt(1+e)/2,o.x=(i[6]-i[9])/(4*o.w),o.y=(i[8]-i[2])/(4*o.w),o.z=(i[1]-i[4])/(4*o.w)):i[0]>i[5]&&i[0]>i[10]?(o.x=Math.sqrt(1+i[0]-i[5]-i[10])/2,o.w=(i[6]-i[9])/(4*o.x),o.y=(i[1]+i[4])/(4*o.x),o.z=(i[8]+i[2])/(4*o.x)):i[5]>i[10]?(o.y=Math.sqrt(1+i[5]-i[0]-i[10])/2,o.x=(i[1]+i[4])/(4*o.y),o.w=(i[8]-i[2])/(4*o.y),o.z=(i[6]+i[9])/(4*o.y)):(o.z=Math.sqrt(1+i[10]-i[0]-i[5])/2,o.x=(i[8]+i[2])/(4*o.z),o.y=(i[6]+i[9])/(4*o.z),o.w=(i[1]-i[4])/(4*o.z));break;case lt.EULER_ANGLES:0<(e=i[0]+i[5]+i[10])?(r.w=Math.sqrt(1+e)/2,r.x=(i[6]-i[9])/(4*r.w),r.y=(i[8]-i[2])/(4*r.w),r.z=(i[1]-i[4])/(4*r.w)):i[0]>i[5]&&i[0]>i[10]?(r.x=Math.sqrt(1+i[0]-i[5]-i[10])/2,r.w=(i[6]-i[9])/(4*r.x),r.y=(i[1]+i[4])/(4*r.x),r.z=(i[8]+i[2])/(4*r.x)):i[5]>i[10]?(o.y=Math.sqrt(1+i[5]-i[0]-i[10])/2,r.x=(i[1]+i[4])/(4*r.y),r.w=(i[8]-i[2])/(4*r.y),r.z=(i[6]+i[9])/(4*r.y)):(r.z=Math.sqrt(1+i[10]-i[0]-i[5])/2,r.x=(i[8]+i[2])/(4*r.z),r.y=(i[6]+i[9])/(4*r.z),r.w=(i[1]-i[4])/(4*r.z)),r.toEulerAngles(o)}return e[0]=a,e[1]=o,e[2]=s,e}static getEuler(e,t,r=!0,i){return e=e||new p,O._getEulerMatrix.makeRotationFromQuaternion(t).makeEuler(e,r,i),e}compose(e,t,r){var i=this.rawData,a=t.x,s=t.y,o=t.z,t=t.w,n=a+a,h=s+s,l=o+o,u=a*n,c=a*h,a=a*l,d=s*h,s=s*l,o=o*l,n=t*n,h=t*h,t=t*l,l=r.x,f=r.y,r=r.z;return i[0]=(1-(d+o))*l,i[1]=(c+t)*l,i[2]=(a-h)*l,i[3]=0,i[4]=(c-t)*f,i[5]=(1-(u+o))*f,i[6]=(s+n)*f,i[7]=0,i[8]=(a+h)*r,i[9]=(s-n)*r,i[10]=(1-(u+d))*r,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}deltaTransformVector(e,t){t=t||new p;var r=this.rawData,i=e.x,a=e.y,e=e.z;return t.x=i*r[0]+a*r[4]+e*r[8],t.y=i*r[1]+a*r[5]+e*r[9],t.z=i*r[2]+a*r[6]+e*r[10],t.w=i*r[3]+a*r[7]+e*r[11],t}identity(){var e=this.rawData;return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fill(e){var t=this.rawData;t[1]=e,t[2]=e,t[3]=e,t[4]=e,t[6]=e,t[7]=e,t[8]=e,t[9]=e,t[11]=e,t[12]=e,t[13]=e,t[14]=e,t[0]=e,t[5]=e,t[10]=e,t[15]=e}invers33(){var e=this.rawData,t=e[5]*e[10]-e[9]*e[6],r=e[8]*e[6]-e[4]*e[10],i=e[4]*e[9]-e[8]*e[5],a=e[9]*e[2]-e[1]*e[10],s=e[0]*e[10]-e[8]*e[2],o=e[8]*e[1]-e[0]*e[9],n=e[1]*e[6]-e[5]*e[2],h=e[4]*e[2]-e[0]*e[6],l=e[0]*e[5]-e[4]*e[1],u=e[0]*t+e[4]*a+e[8]*n;1e-11<Math.abs(u)&&(e[0]=(u=1/u)*t,e[4]=u*r,e[8]=u*i,e[1]=u*a,e[5]=u*s,e[9]=u*o,e[2]=u*n,e[6]=u*h,e[10]=u*l)}invert(){var e,t,r,i,a,s,o,n,h,l,u,c,d,f,p,m,g=this.determinant,v=1e-11<Math.abs(g),x=this.rawData;return v&&(e=x[0],t=x[4],r=x[8],i=x[12],a=x[1],s=x[5],o=x[9],n=x[13],h=x[2],l=x[6],u=x[10],c=x[14],d=x[3],f=x[7],p=x[11],m=x[15],x[0]=(g=1/g)*(s*(u*m-c*p)-o*(l*m-c*f)+n*(l*p-u*f)),x[1]=-g*(a*(u*m-c*p)-o*(h*m-c*d)+n*(h*p-u*d)),x[2]=g*(a*(l*m-c*f)-s*(h*m-c*d)+n*(h*f-l*d)),x[3]=-g*(a*(l*p-u*f)-s*(h*p-u*d)+o*(h*f-l*d)),x[4]=-g*(t*(u*m-c*p)-r*(l*m-c*f)+i*(l*p-u*f)),x[5]=g*(e*(u*m-c*p)-r*(h*m-c*d)+i*(h*p-u*d)),x[6]=-g*(e*(l*m-c*f)-t*(h*m-c*d)+i*(h*f-l*d)),x[7]=g*(e*(l*p-u*f)-t*(h*p-u*d)+r*(h*f-l*d)),x[8]=g*(t*(o*m-n*p)-r*(s*m-n*f)+i*(s*p-o*f)),x[9]=-g*(e*(o*m-n*p)-r*(a*m-n*d)+i*(a*p-o*d)),x[10]=g*(e*(s*m-n*f)-t*(a*m-n*d)+i*(a*f-s*d)),x[11]=-g*(e*(s*p-o*f)-t*(a*p-o*d)+r*(a*f-s*d)),x[12]=-g*(t*(o*c-n*u)-r*(s*c-n*l)+i*(s*u-o*l)),x[13]=g*(e*(o*c-n*u)-r*(a*c-n*h)+i*(a*u-o*h)),x[14]=-g*(e*(s*c-n*l)-t*(a*c-n*h)+i*(a*l-s*h)),x[15]=g*(e*(s*u-o*l)-t*(a*u-o*h)+r*(a*l-s*h))),v}transformPoint(e,t){var r=this.rawData,i=(t=t||new p,e.x),a=e.y,e=e.z;return t.x=i*r[0]+a*r[4]+e*r[8]+r[12],t.y=i*r[1]+a*r[5]+e*r[9]+r[13],t.z=i*r[2]+a*r[6]+e*r[10]+r[14],t}transformVector(e,t){var r=this.rawData,i=(t=t||new p,e.x),a=e.y,e=e.z;return t.x=i*r[0]+a*r[4]+e*r[8],t.y=i*r[1]+a*r[5]+e*r[9],t.z=i*r[2]+a*r[6]+e*r[10],t}transpose(){var t=this.rawData;for(let e=0;e<O.helpMatrix.rawData.length;e++)O.helpMatrix.rawData[e]=t[e];t[1]=O.helpMatrix.rawData[4],t[2]=O.helpMatrix.rawData[8],t[3]=O.helpMatrix.rawData[12],t[4]=O.helpMatrix.rawData[1],t[6]=O.helpMatrix.rawData[9],t[7]=O.helpMatrix.rawData[13],t[8]=O.helpMatrix.rawData[2],t[9]=O.helpMatrix.rawData[6],t[11]=O.helpMatrix.rawData[14],t[12]=O.helpMatrix.rawData[3],t[13]=O.helpMatrix.rawData[7],t[14]=O.helpMatrix.rawData[11]}get determinant(){var e=this.rawData;return(e[0]*e[5]-e[4]*e[1])*(e[10]*e[15]-e[14]*e[11])-(e[0]*e[9]-e[8]*e[1])*(e[6]*e[15]-e[14]*e[7])+(e[0]*e[13]-e[12]*e[1])*(e[6]*e[11]-e[10]*e[7])+(e[4]*e[9]-e[8]*e[5])*(e[2]*e[15]-e[14]*e[3])-(e[4]*e[13]-e[12]*e[5])*(e[2]*e[11]-e[10]*e[3])+(e[8]*e[13]-e[12]*e[9])*(e[2]*e[7]-e[6]*e[3])}getPosition(e){e=e||new p;var t=this.rawData;return e.x=t[12],e.y=t[13],e.z=t[14],e}get position(){return this._position.set(this.rawData[12],this.rawData[13],this.rawData[14]),this._position}set position(e){var t=this.rawData;t[12]=e.x,t[13]=e.y,t[14]=e.z}get scale(){var e=this.rawData;return new p(e[0],e[5],e[10])}set scale(e){var t=this.rawData;t[0]=e.x,t[5]=e.y,t[10]=e.z}toString(){var e=this.rawData;return"matrix3d("+Math.round(1e3*e[0])/1e3+","+Math.round(1e3*e[1])/1e3+","+Math.round(1e3*e[2])/1e3+","+Math.round(1e3*e[3])/1e3+","+Math.round(1e3*e[4])/1e3+","+Math.round(1e3*e[5])/1e3+","+Math.round(1e3*e[6])/1e3+","+Math.round(1e3*e[7])/1e3+","+Math.round(1e3*e[8])/1e3+","+Math.round(1e3*e[9])/1e3+","+Math.round(1e3*e[10])/1e3+","+Math.round(1e3*e[11])/1e3+","+Math.round(1e3*e[12])/1e3+","+Math.round(1e3*e[13])/1e3+","+Math.round(1e3*e[14])/1e3+","+Math.round(1e3*e[15])/1e3+")"}lerp(e,t,r){this.copyFrom(t).sub(e).mult(r).add(e)}get(e,t){return this.rawData[e+4*t]}set(e,t,r){this.rawData[e+4*t]=r}getMaxScaleOnAxis(){var e=this.rawData,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,e))}translate(e){var t=this.get(0,0)*e.x+this.get(0,1)*e.y+this.get(0,2)*e.z+this.get(0,3),r=this.get(1,0)*e.x+this.get(1,1)*e.y+this.get(1,2)*e.z+this.get(1,3),i=this.get(2,0)*e.x+this.get(2,1)*e.y+this.get(2,2)*e.z+this.get(2,3),e=this.get(3,0)*e.x+this.get(3,1)*e.y+this.get(3,2)*e.z+this.get(3,3);return this.set(0,3,t),this.set(1,3,r),this.set(2,3,i),this.set(3,3,e),this}setTRInverse(e,t){t=t.inverse(),j.quaternionToMatrix(t,this),this.translate(new p(-e.x,-e.y,-e.z))}setScale(e){return this.set(0,0,e.x),this.set(0,1,0),this.set(0,2,0),this.set(0,3,0),this.set(1,0,0),this.set(1,1,e.y),this.set(1,2,0),this.set(1,3,0),this.set(2,0,0),this.set(2,1,0),this.set(2,2,e.z),this.set(2,3,0),this.set(3,0,0),this.set(3,1,0),this.set(3,2,0),this.set(3,3,1),this}makeBasis(e,t,r){return this.setElements(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}makeRotationAxis(e,t){var r=Math.cos(t),t=Math.sin(t),i=1-r,a=e.x,s=e.y,e=e.z,o=i*a,n=i*s;return this.setElements(o*a+r,o*s-t*e,o*e+t*s,0,o*s+t*e,n*s+r,n*e-t*a,0,o*e-t*s,n*e+t*a,i*e*e+r,0,0,0,0,1),this}static transpose(e,t){t=t||new O;var e=e.rawData,r=t.rawData;return r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15],t}static inverse(e,t){t=t||new O;var e=e.rawData,r=t.rawData,i=(r[0]=e[5]*e[10]*e[15]-e[5]*e[14]*e[11]-e[6]*e[9]*e[15]+e[6]*e[13]*e[11]+e[7]*e[9]*e[14]-e[7]*e[13]*e[10],r[1]=-e[1]*e[10]*e[15]+e[1]*e[14]*e[11]+e[2]*e[9]*e[15]-e[2]*e[13]*e[11]-e[3]*e[9]*e[14]+e[3]*e[13]*e[10],r[2]=e[1]*e[6]*e[15]-e[1]*e[14]*e[7]-e[2]*e[5]*e[15]+e[2]*e[13]*e[7]+e[3]*e[5]*e[14]-e[3]*e[13]*e[6],r[3]=-e[1]*e[6]*e[11]+e[1]*e[10]*e[7]+e[2]*e[5]*e[11]-e[2]*e[9]*e[7]-e[3]*e[5]*e[10]+e[3]*e[9]*e[6],r[4]=-e[4]*e[10]*e[15]+e[4]*e[14]*e[11]+e[6]*e[8]*e[15]-e[6]*e[12]*e[11]-e[7]*e[8]*e[14]+e[7]*e[12]*e[10],r[5]=e[0]*e[10]*e[15]-e[0]*e[14]*e[11]-e[2]*e[8]*e[15]+e[2]*e[12]*e[11]+e[3]*e[8]*e[14]-e[3]*e[12]*e[10],r[6]=-e[0]*e[6]*e[15]+e[0]*e[14]*e[7]+e[2]*e[4]*e[15]-e[2]*e[12]*e[7]-e[3]*e[4]*e[14]+e[3]*e[12]*e[6],r[7]=e[0]*e[6]*e[11]-e[0]*e[10]*e[7]-e[2]*e[4]*e[11]+e[2]*e[8]*e[7]+e[3]*e[4]*e[10]-e[3]*e[8]*e[6],r[8]=e[4]*e[9]*e[15]-e[4]*e[13]*e[11]-e[5]*e[8]*e[15]+e[5]*e[12]*e[11]+e[7]*e[8]*e[13]-e[7]*e[12]*e[9],r[9]=-e[0]*e[9]*e[15]+e[0]*e[13]*e[11]+e[1]*e[8]*e[15]-e[1]*e[12]*e[11]-e[3]*e[8]*e[13]+e[3]*e[12]*e[9],r[10]=e[0]*e[5]*e[15]-e[0]*e[13]*e[7]-e[1]*e[4]*e[15]+e[1]*e[12]*e[7]+e[3]*e[4]*e[13]-e[3]*e[12]*e[5],r[11]=-e[0]*e[5]*e[11]+e[0]*e[9]*e[7]+e[1]*e[4]*e[11]-e[1]*e[8]*e[7]-e[3]*e[4]*e[9]+e[3]*e[8]*e[5],r[12]=-e[4]*e[9]*e[14]+e[4]*e[13]*e[10]+e[5]*e[8]*e[14]-e[5]*e[12]*e[10]-e[6]*e[8]*e[13]+e[6]*e[12]*e[9],r[13]=e[0]*e[9]*e[14]-e[0]*e[13]*e[10]-e[1]*e[8]*e[14]+e[1]*e[12]*e[10]+e[2]*e[8]*e[13]-e[2]*e[12]*e[9],r[14]=-e[0]*e[5]*e[14]+e[0]*e[13]*e[6]+e[1]*e[4]*e[14]-e[1]*e[12]*e[6]-e[2]*e[4]*e[13]+e[2]*e[12]*e[5],r[15]=e[0]*e[5]*e[10]-e[0]*e[9]*e[6]-e[1]*e[4]*e[10]+e[1]*e[8]*e[6]+e[2]*e[4]*e[9]-e[2]*e[8]*e[5],e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12]);for(let e=0;e<16;e++)r[e]/=i;return t}makeEuler(e,t,r="XYZ"){var i=this.rawData,a=i[0],s=i[4],o=i[8],n=i[1],h=i[5],l=i[9],u=i[2],c=i[6],d=i[10];switch(r){case"XYZ":e.y=Math.asin(Y(o,-1,1)),Math.abs(o)<.9999999?(e.x=Math.atan2(-l,d),e.z=Math.atan2(-s,a)):(e.x=Math.atan2(c,h),e.z=0);break;case"YXZ":e.x=Math.asin(-Y(l,-1,1)),Math.abs(l)<.9999999?(e.y=Math.atan2(o,d),e.z=Math.atan2(n,h)):(e.y=Math.atan2(-u,a),e.z=0);break;case"ZXY":e.x=Math.asin(Y(c,-1,1)),Math.abs(c)<.9999999?(e.y=Math.atan2(-u,d),e.z=Math.atan2(-s,h)):(e.y=0,e.z=Math.atan2(n,a));break;case"ZYX":e.y=Math.asin(-Y(u,-1,1)),Math.abs(u)<.9999999?(e.x=Math.atan2(c,d),e.z=Math.atan2(n,a)):(e.x=0,e.z=Math.atan2(-s,h));break;case"YZX":e.z=Math.asin(Y(n,-1,1)),Math.abs(n)<.9999999?(e.x=Math.atan2(-l,h),e.y=Math.atan2(-u,a)):(e.x=0,e.y=Math.atan2(o,d));break;case"XZY":e.z=Math.asin(-Y(s,-1,1)),Math.abs(s)<.9999999?(e.x=Math.atan2(c,h),e.y=Math.atan2(o,a)):(e.x=Math.atan2(-l,d),e.y=0)}return t&&e.multiplyScalar(ri),e}frustum(e,t,r,i,a,s){var o=this.rawData;return o[0]=2*a/(t-e),o[1]=0,o[2]=(t+e)/(t-e),o[3]=0,o[4]=0,o[5]=2*a/(i-r),o[6]=(i+r)/(i-r),o[7]=0,o[8]=0,o[9]=0,o[10]=-(s+a)/(s-a),o[11]=-2*s*a/(s-a),o[12]=0,o[13]=0,o[14]=-1,o[15]=0,this}setElements(e,t,r,i,a,s,o,n,h,l,u,c,d,f,p,m){var g=this.rawData;return g[0]=e,g[4]=t,g[8]=r,g[12]=i,g[1]=a,g[5]=s,g[9]=o,g[13]=n,g[2]=h,g[6]=l,g[10]=u,g[14]=c,g[3]=d,g[7]=f,g[11]=p,g[15]=m,this}makeMatrix44ByQuaternion(e,t,r){this.identity(),j.quaternionToMatrix(r,this),this.appendTranslation(e.x,e.y,e.z),this.appendScale(t.x,t.y,t.z)}};let N=O;function lo(t,r,i){for(let e=0;e<4;e++)i.rawData[e]=t.rawData[e]*r.rawData[0]+t.rawData[e+4]*r.rawData[1]+t.rawData[e+8]*r.rawData[2]+t.rawData[e+12]*r.rawData[3],i.rawData[e+4]=t.rawData[e]*r.rawData[4]+t.rawData[e+4]*r.rawData[5]+t.rawData[e+8]*r.rawData[6]+t.rawData[e+12]*r.rawData[7],i.rawData[e+8]=t.rawData[e]*r.rawData[8]+t.rawData[e+4]*r.rawData[9]+t.rawData[e+8]*r.rawData[10]+t.rawData[e+12]*r.rawData[11],i.rawData[e+12]=t.rawData[e]*r.rawData[12]+t.rawData[e+4]*r.rawData[13]+t.rawData[e+8]*r.rawData[14]+t.rawData[e+12]*r.rawData[15]}function ha(e,t,r,i){var i=i.rawData,a=.5*(e.x*te),s=.5*(e.y*te),e=.5*(e.z*te),o=Math.cos(a),a=Math.sin(a),n=Math.cos(s),s=Math.sin(s),h=Math.cos(e),e=Math.sin(e),l=(p=a*n*h-o*s*e)+p,u=(g=o*s*h+a*n*e)+g,c=(v=o*n*e-a*s*h)+v,d=p*l,f=p*u,p=p*c,m=g*u,g=g*c,v=v*c,n=(o=o*n*h+a*s*e)*l,h=o*u,a=o*c,s=r.x,e=r.y,l=r.z;i[0]=(1-(m+v))*s,i[1]=(f+a)*s,i[2]=(p-h)*s,i[3]=0,i[4]=(f-a)*e,i[5]=(1-(d+v))*e,i[6]=(g+n)*e,i[7]=0,i[8]=(p+h)*l,i[9]=(g-n)*l,i[10]=(1-(d+m))*l,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1}function ho(e,t,r){var e=e.rawData,r=r.rawData,i=e[0],a=e[4],s=e[8],o=e[12],n=e[1],h=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],m=e[3],g=e[7],v=e[11],e=e[15];r[0]=i*t.rawData[0]+n*t.rawData[4]+c*t.rawData[8]+m*t.rawData[12],r[1]=i*t.rawData[1]+n*t.rawData[5]+c*t.rawData[9]+m*t.rawData[13],r[2]=i*t.rawData[2]+n*t.rawData[6]+c*t.rawData[10]+m*t.rawData[14],r[3]=i*t.rawData[3]+n*t.rawData[7]+c*t.rawData[11]+m*t.rawData[15],r[4]=a*t.rawData[0]+h*t.rawData[4]+d*t.rawData[8]+g*t.rawData[12],r[5]=a*t.rawData[1]+h*t.rawData[5]+d*t.rawData[9]+g*t.rawData[13],r[6]=a*t.rawData[2]+h*t.rawData[6]+d*t.rawData[10]+g*t.rawData[14],r[7]=a*t.rawData[3]+h*t.rawData[7]+d*t.rawData[11]+g*t.rawData[15],r[8]=s*t.rawData[0]+l*t.rawData[4]+f*t.rawData[8]+v*t.rawData[12],r[9]=s*t.rawData[1]+l*t.rawData[5]+f*t.rawData[9]+v*t.rawData[13],r[10]=s*t.rawData[2]+l*t.rawData[6]+f*t.rawData[10]+v*t.rawData[14],r[11]=s*t.rawData[3]+l*t.rawData[7]+f*t.rawData[11]+v*t.rawData[15],r[12]=o*t.rawData[0]+u*t.rawData[4]+p*t.rawData[8]+e*t.rawData[12],r[13]=o*t.rawData[1]+u*t.rawData[5]+p*t.rawData[9]+e*t.rawData[13],r[14]=o*t.rawData[2]+u*t.rawData[6]+p*t.rawData[10]+e*t.rawData[14],r[15]=o*t.rawData[3]+u*t.rawData[7]+p*t.rawData[11]+e*t.rawData[15]}function ac(e,t){var r=t.x,i=t.y,a=t.z,t=t.w,s=e.rawData,o=2*r*i,n=2*r*a,h=2*r*t,l=2*i*a,u=2*i*t,c=2*a*t,r=r*r,i=i*i,a=a*a,t=t*t;return s[0]=r-i-a+t,s[4]=o-c,s[8]=n+u,s[12]=0,s[1]=o+c,s[5]=i-r-a+t,s[9]=l-h,s[13]=0,s[2]=n-u,s[6]=l+h,s[10]=-r-i+a+t,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1,e}function sc(e,t){var t=t.rawData,r=Math.sin(e),e=Math.cos(e);return t[0]=e,t[1]=0,t[2]=-r,t[3]=0,t[8]=r,t[9]=0,t[10]=e,t[11]=0,t}function nc(e,t,r){var i=t.x,a=t.y,t=t.z,s=Math.hypot(i,a,t);if(s<oo)return null;i*=s=1/s,a*=s,t*=s;var o,s=Math.sin(e),n=a*i*(o=1-(e=Math.cos(e)))+t*s,h=t*i*o-a*s,l=i*a*o-t*s,u=a*a*o+e,c=t*a*o+i*s,d=i*t*o+a*s,a=a*t*o-i*s,s=t*t*o+e,t=r.rawData;return t[0]=i*i*o+e,t[1]=n,t[2]=h,t[3]=0,t[4]=l,t[5]=u,t[6]=c,t[7]=0,t[8]=d,t[9]=a,t[10]=s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function as(e,t,r){var e=e.rawData,i=e[0],a=e[1],s=e[2],o=e[3],n=e[4],h=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],m=e[12],g=e[13],v=e[14],e=e[15],t=t.rawData,r=r.rawData,x=t[0],_=t[1],y=t[2],S=t[3];return r[0]=x*i+_*n+y*c+S*m,r[1]=x*a+_*h+y*d+S*g,r[2]=x*s+_*l+y*f+S*v,r[3]=x*o+_*u+y*p+S*e,x=t[4],_=t[5],y=t[6],S=t[7],r[4]=x*i+_*n+y*c+S*m,r[5]=x*a+_*h+y*d+S*g,r[6]=x*s+_*l+y*f+S*v,r[7]=x*o+_*u+y*p+S*e,x=t[8],_=t[9],y=t[10],S=t[11],r[8]=x*i+_*n+y*c+S*m,r[9]=x*a+_*h+y*d+S*g,r[10]=x*s+_*l+y*f+S*v,r[11]=x*o+_*u+y*p+S*e,x=t[12],_=t[13],y=t[14],S=t[15],r[12]=x*i+_*n+y*c+S*m,r[13]=x*a+_*h+y*d+S*g,r[14]=x*s+_*l+y*f+S*v,r[15]=x*o+_*u+y*p+S*e,r}s(N,"blockBytes",64),s(N,"block",16),s(N,"totalCount",0),s(N,"maxCount",3e5),s(N,"useCount",0),s(N,"buffer"),s(N,"wasmMatrixPtr",0),s(N,"matrixBytes"),s(N,"globalMatrixRef"),s(N,"wasm"),s(N,"help_matrix_0"),s(N,"help_matrix_1"),s(N,"help_matrix_2"),s(N,"helpMatrix"),s(N,"helpMatrix2"),s(N,"_getEulerMatrix"),s(N,"_zero",new p(0,0,0)),s(N,"_one",new p(1,1,1)),s(N,"_prs",[new p,new p,new p]);var Pe=(e=>(e[e.None=0]="None",e[e.PointLight=1]="PointLight",e[e.DirectionLight=2]="DirectionLight",e[e.SpotLight=3]="SpotLight",e[e.SkyLight=4]="SkyLight",e))(Pe||{});class vi extends Bt{constructor(){super(...arguments),s(this,"index",-1),s(this,"lightType",-1),s(this,"radius",.5),s(this,"linear",1),s(this,"lightPosition",new p),s(this,"lightMatrixIndex",-1),s(this,"direction",new p),s(this,"quadratic",.032),s(this,"lightColor",new b(1,1,1,1)),s(this,"intensity",1),s(this,"innerAngle",0),s(this,"outerAngle",1),s(this,"range",100),s(this,"castShadowIndex",-1),s(this,"lightTangent",p.FORWARD),s(this,"iesPofiles",-1)}}s(vi,"lightSize",24);const Dt=class{static init(){Dt.componentsUpdateList=new Map,Dt.componentsLateUpdateList=new Map,Dt.componentsBeforeUpdateList=new Map,Dt.componentsComputeList=new Map,Dt.waitStartComponent=new Map,Dt.graphicComponent=new Map}};let se=Dt;s(se,"componentsUpdateList"),s(se,"componentsLateUpdateList"),s(se,"componentsBeforeUpdateList"),s(se,"componentsComputeList"),s(se,"waitStartComponent"),s(se,"graphicComponent");class ve{constructor(){s(this,"object3D",null),s(this,"eventDispatcher"),s(this,"_enable",!0),s(this,"__isStart",!1),this.eventDispatcher=new br}get transform(){return this.object3D.transform}set enable(e){this._enable!=e&&(this._enable=e,this._enable?this.onEnable():this.onDisable&&this.onDisable())}get enable(){return this._enable}__init(e){this.init(e)}__start(){this.start&&this.transform&&this.transform.scene3D&&0==this.__isStart&&(this.start(),this.__isStart=!0),this.onEnable&&this.transform&&this.transform.scene3D&&this.onEnable(),this.onUpdate&&this._onUpdate(this.onUpdate.bind(this)),this.onLateUpdate&&this._onLateUpdate(this.onLateUpdate.bind(this)),this.onBeforeUpdate&&this._onBeforeUpdate(this.onBeforeUpdate.bind(this)),this.onCompute&&this._onCompute(this.onCompute.bind(this)),this.onGraphic&&this._onGraphic(this.onGraphic.bind(this))}__stop(){this.transform&&this.transform.scene3D&&this.onDisable(),this._onUpdate(null),this._onLateUpdate(null),this._onBeforeUpdate(null),this._onCompute(null),this._onGraphic(null)}init(e){}start(){}stop(){}cloneTo(e){}_onUpdate(e){null!=e?se.componentsUpdateList.set(this,e):se.componentsUpdateList.delete(this)}_onLateUpdate(e){null!=e?se.componentsLateUpdateList.set(this,e):se.componentsLateUpdateList.delete(this)}_onBeforeUpdate(e){null!=e?se.componentsBeforeUpdateList.set(this,e):se.componentsBeforeUpdateList.delete(this)}_onCompute(e){null!=e?se.componentsComputeList.set(this,e):se.componentsComputeList.delete(this)}_onGraphic(e){null!=e?se.graphicComponent.set(this,e):se.graphicComponent.delete(this)}destroy(){this.enable=!1,this.stop(),this._onBeforeUpdate(null),this._onUpdate(null),this._onLateUpdate(null),this.onEnable=null,this.onDisable=null,this.onUpdate=null,this.onLateUpdate=null,this.onBeforeUpdate=null,this.onCompute=null,this.onGraphic=null}}s(ve,"waitStartComponent",new Map),s(ve,"graphicComponent",new Map);class ra{constructor(){s(this,"value",0),s(this,"inv_base",0)}static get(e,t){let r=0,i=1/t;for(;0<e;)r+=e%t*i,e/=t,i/=t;return r}getBase(e,t){let r=this.inv_base=1/t;for(;0<e;)this.value+=r*(e%t),e/=t,r*=this.inv_base}next(){var r=1-this.value-1e-7;if(this.inv_base<r)this.value+=this.inv_base;else{let e=this.inv_base,t;for(;t=e,(e*=this.inv_base)>=r;);this.value+=t+e-1}}get(){return this.value}}const Wt=class{constructor(e,t){s(this,"origin",new p),s(this,"length",Number.MAX_VALUE),s(this,"_vector",new p),s(this,"_dir",new p),s(this,"_v0",new p),s(this,"_v1",new p),s(this,"_v2",new p),s(this,"_E1",new p),s(this,"_E2",new p),s(this,"_P",new p),s(this,"_T",new p),s(this,"_Q",new p),this.origin.copyFrom(e||new p),this._dir.copyFrom(t||new p),this._dir.normalize()}get direction(){return this._dir}set direction(e){this._dir.copyFrom(e),this._dir.normalize()}clone(){return new Wt(this.origin,this.direction)}intersectsBox(e){return null!==this.intersectBox(e,this._vector)}intersectBox(e,t){let r,i,a,s,o,n;var h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,c=this.origin;return i=0<=h?(r=(e.min.x-c.x)*h,(e.max.x-c.x)*h):(r=(e.max.x-c.x)*h,(e.min.x-c.x)*h),s=0<=l?(a=(e.min.y-c.y)*l,(e.max.y-c.y)*l):(a=(e.max.y-c.y)*l,(e.min.y-c.y)*l),r>s||a>i||((a>r||r!=r)&&(r=a),(s<i||i!=i)&&(i=s),n=0<=u?(o=(e.min.z-c.z)*u,(e.max.z-c.z)*u):(o=(e.max.z-c.z)*u,(e.min.z-c.z)*u),r>n)||o>i||((o>r||r!=r)&&(r=o),(i=n<i||i!=i?n:i)<0)?null:this.at(0<=r?r:i,t)}at(e,t){return t||(console.warn("at() target is now required"),t=new p),t.copy(this.direction).multiplyScalar(e).add(this.origin)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this._dir.copy(e._dir),this.length=e.length,this}setApproxDirection(e){this._dir=e.normalize()}setOrigin(e){this.origin.copyFrom(e)}getOrigin(){return this.origin}getPoint(e){return this._dir.scaleBy(e),this.origin.add(this._dir)}sqrDistToPoint(e){var t=this._dir,r=ke(e.subtract(this.origin),t),t=ke(t,t),r=this.getPoint(r/t);return Rs(e.subtract(r))}applyMatrix(e){this.origin=e.transformPoint(this.origin),this._dir=e.transformVector(this._dir)}pointInTriangle(e,t,r,i){var a=this._v0,s=this._v1,o=this._v2,i=(i.subtract(t,a),r.subtract(t,s),e.subtract(t,o),p.dot(a,a)),r=p.dot(a,s),e=p.dot(a,o),t=p.dot(s,s),a=p.dot(s,o),s=1/(i*t-r*r),o=(t*e-r*a)*s,t=(i*a-r*e)*s;return 0<=o&&0<=t&&o+t<1}intersectTriangle(e,t,r){var i=r.v1,a=r.v2,s=r.v3;a.subtract(i,this._E1),s.subtract(i,this._E2),t.cross(this._E2,this._P);let o=this._E1.dotProduct(this._P);return 0<o?e.subtract(i,this._T):(i.subtract(e,this._T),o=-o),o<1e-4||(r.u=this._T.dotProduct(this._P),r.u<0)||r.u>o||(this._T.cross(this._E1,this._Q),r.v=t.dotProduct(this._Q),r.v<0)||r.u+r.v>o?null:(a=new p,r.t0=r.t=this._E2.dotProduct(this._Q),s=1/o,r.t*=s,r.u*=s,r.v*=s,a.x=e.x+r.t*t.x,a.y=e.y+r.t*t.y,a.z=e.z+r.t*t.z,a)}intersectSphere(e,t,r,i){var r=e.subtract(r),a=p.dot(t,t),s=2*p.dot(r,t),r=s*s-4*a*(p.dot(r,r)-i*i),i=p.HELP_3;return r<0||(s=(-s-Math.sqrt(r))/(2*a))<0?null:(i.x=e.x+s*t.x,i.y=e.y+s*t.y,i.z=e.z+s*t.z,i)}intersectionSegment(e,t,r){var i,a,s=this.origin,o=p.HELP_0,n=p.HELP_1,h=p.HELP_2,l=p.HELP_3,n=(t.subtract(e,o),this._dir.scaleToRef(Wt._rayl,h),s.add(h,n),e.subtract(s,l),p.dot(o,o)),s=p.dot(o,h),u=p.dot(h,h),c=p.dot(o,l),d=p.dot(h,l),f=n*u-s*s,m=f,g=f,u=(f<Wt._smallnum?(i=0,m=1,a=d,g=u):(a=n*d-s*c,(i=s*d-u*c)<0?(i=0,a=d,g=u):m<i&&(i=m,a=d+s,g=u)),a<0?-c<(a=0)?i=0:n<-c?i=m:(i=-c,m=n):g<a&&(a=g,-c+s<0?i=0:n<-c+s?i=m:(i=-c+s,m=n)),f=Math.abs(i)<Wt._smallnum?0:i/m,d=Math.abs(a)<Wt._smallnum?0:a/g,p.HELP_4),c=(h.scaleToRef(d,u),p.HELP_5),s=(o.scaleToRef(f,c),c.add(l,c),p.HELP_6);return c.subtract(u,s),0<d&&d<=this._dir.length&&s.lengthSquared<r*r?((n=new p).copyFrom(t.subtract(e)),n.scaleBy(f),n.add(e,n),{out:n,length:c.length}):{out:null,length:-1}}get_vec(e,t){var r=p.HELP_1;return r.x=e.x-t.x,r.y=e.y-t.y,r.z=e.z-t.z,r}};let At=Wt;s(At,"_rayl",1e9),s(At,"_smallnum",1e-8);class yi{constructor(e=0,t=0,r=0,i=0){s(this,"x"),s(this,"y"),s(this,"w"),s(this,"h"),this.x=e,this.y=t,this.w=r,this.h=i}get width(){return this.w}set width(e){this.w=e}get height(){return this.h}set height(e){this.h=e}static pointInRect(e,t,r,i,a,s){return!(e<r||a<e||t<i||s<t)}clone(){return new yi(this.x,this.y,this.w,this.h)}copyFrom(e){this.x=e.x,this.y=e.y,this.w=e.w,this.h=e.h}copyTo(e){e.copyFrom(this)}inner(e,t){return!(e<this.x||e>this.x+this.width||t<this.y||t>this.y+this.height)}equal(e){return!(this.x!=e.x||this.y!=e.y||this.width!=e.width||this.height!=e.height)}equalArea(e,t,r,i){return!(this.x!=e||this.y!=t||this.width!=r||this.height!=i)}equalInnerArea(e){var t=this.x,r=this.y,i=this.x+this.width,a=this.y+this.height,s=e.x,o=e.y,n=e.x+e.width,e=e.y+e.height;return Math.max(t,s)<=Math.min(i,n)&&Math.max(r,o)<=Math.min(a,e)}innerArea(e,t){t=t||new yi;var r=this.x,i=this.y,a=this.x+this.width,s=this.y+this.height,o=e.x,n=e.y,h=e.x+e.width,e=e.y+e.height,i=Math.max(i,n),n=Math.min(s,e),s=Math.max(r,o),e=Math.min(h,a);return 0<=i&&0<=n&&0<=n-i&&0<e-s?(t.x=s,t.y=i,t.width=e-s,t.height=n-i):(t.x=0,t.y=0,t.width=0,t.height=0),t}setTo(e,t,r,i){this.x=e,this.y=t,this.width=r,this.height=i}}class uo{constructor(){s(this,"viewProj",new N),s(this,"planes"),s(this,"corners"),s(this,"_centerSize"),this._centerSize=new p,this.planes=[],this.corners=[];for(var e=0;e<6;e++)this.planes[e]=new p;for(e=0;e<8;e++)this.corners[e]=new p}genBox(i){let a=0,s=9999999,o=9999999,n=9999999,h=-9999999,l=-9999999,u=-9999999;for(let r=0;r<2;++r)for(let t=0;t<2;++t)for(let e=0;e<2;++e){var c=this.corners[a];c.set(2*r-1,2*t-1,e,1),i.transformVector4(c,c),c.div(c.w,c),a++,s=Math.min(c.x,s),o=Math.min(c.y,o),n=Math.min(c.z,n),h=Math.max(c.x,h),l=Math.max(c.y,l),u=Math.max(c.z,u)}return this._centerSize.x=h-s,this._centerSize.y=l-o,this._centerSize.x=u-n,{minX:s,minY:o,minZ:n,maxX:h,maxY:l,maxZ:u}}setFrustumCorners(i){let a=0;for(let r=0;r<2;++r)for(let t=0;t<2;++t)for(let e=0;e<2;++e){var s=this.corners[a];s.set(2*r-1,2*t-1,e,1),i.transformVector4(s,s),s.div(s.w,s),a++}}update(e){var e=e.rawData,t=(this.planes[0].x=e[3]-e[0],this.planes[0].y=e[7]-e[4],this.planes[0].z=e[11]-e[8],this.planes[0].w=e[15]-e[12],Math.sqrt(this.planes[0].x*this.planes[0].x+this.planes[0].y*this.planes[0].y+this.planes[0].z*this.planes[0].z));this.planes[0].x/=t,this.planes[0].y/=t,this.planes[0].z/=t,this.planes[0].w/=t,this.planes[1].x=e[3]+e[0],this.planes[1].y=e[7]+e[4],this.planes[1].z=e[11]+e[8],this.planes[1].w=e[15]+e[12],t=Math.sqrt(this.planes[1].x*this.planes[1].x+this.planes[1].y*this.planes[1].y+this.planes[1].z*this.planes[1].z),this.planes[1].x/=t,this.planes[1].y/=t,this.planes[1].z/=t,this.planes[1].w/=t,this.planes[2].x=e[3]+e[1],this.planes[2].y=e[7]+e[5],this.planes[2].z=e[11]+e[9],this.planes[2].w=e[15]+e[13],t=Math.sqrt(this.planes[2].x*this.planes[2].x+this.planes[2].y*this.planes[2].y+this.planes[2].z*this.planes[2].z),this.planes[2].x/=t,this.planes[2].y/=t,this.planes[2].z/=t,this.planes[2].w/=t,this.planes[3].x=e[3]-e[1],this.planes[3].y=e[7]-e[5],this.planes[3].z=e[11]-e[9],this.planes[3].w=e[15]-e[13],t=Math.sqrt(this.planes[3].x*this.planes[3].x+this.planes[3].y*this.planes[3].y+this.planes[3].z*this.planes[3].z),this.planes[3].x/=t,this.planes[3].y/=t,this.planes[3].z/=t,this.planes[3].w/=t,this.planes[4].x=e[3]-e[2],this.planes[4].y=e[7]-e[6],this.planes[4].z=e[11]-e[10],this.planes[4].w=e[15]-e[14],t=Math.sqrt(this.planes[4].x*this.planes[4].x+this.planes[4].y*this.planes[4].y+this.planes[4].z*this.planes[4].z),this.planes[4].x/=t,this.planes[4].y/=t,this.planes[4].z/=t,this.planes[4].w/=t,this.planes[5].x=e[3]+e[2],this.planes[5].y=e[7]+e[6],this.planes[5].z=e[11]+e[10],this.planes[5].w=e[15]+e[14],t=Math.sqrt(this.planes[5].x*this.planes[5].x+this.planes[5].y*this.planes[5].y+this.planes[5].z*this.planes[5].z),this.planes[5].x/=t,this.planes[5].y/=t,this.planes[5].z/=t,this.planes[5].w/=t}containsPoint(e){for(var t=0;t<6;t++)if(this.planes[t].x*e.x+this.planes[t].y*e.y+this.planes[t].z*e.z+this.planes[t].w<=0)return!1;return!0}containsSphere(e){let t=e.bound,r=0,i,a,s=e.transform.worldPosition,o=t.radius,n=t.center.x+s.x,h=t.center.y+s.y,l=t.center.z+s.z,u=this.planes,c;for(a=0;a<6;a++){if((i=(c=u[a]).x*n+c.y*h+c.z*l+c.w)<=-o)return 0;o<i&&r++}return 6===r?2:1}containsBox(e){let t=e.bound,r=0,i,a,s=e.transform.worldPosition,o=Math.max(t.size.x*e.transform.scaleX,t.size.y*e.transform.scaleY,t.size.z*e.transform.scaleZ),n=t.center.x+s.x,h=t.center.y+s.y,l=t.center.z+s.z,u=this.planes,c;for(a=0;a<6;a++){if((i=(c=u[a]).x*n+c.y*h+c.z*l+c.w)<=-o)return 0;o<i&&r++}return 6===r?2:1}}var xe=(e=>(e[e.ortho=0]="ortho",e[e.perspective=1]="perspective",e[e.shadow=2]="shadow",e))(xe||{});class ii extends ve{constructor(){super(),s(this,"fov",1),s(this,"name"),s(this,"aspect",1),s(this,"near",1),s(this,"far",5e3),s(this,"viewPort",new yi),s(this,"frustum"),s(this,"isShadowCamera",!1),s(this,"_projectionMatrixInv",new N),s(this,"_projectionMatrix",new N),s(this,"_viewMatrix",new N),s(this,"_unprojection",new N),s(this,"_pvMatrixInv",new N),s(this,"_pvMatrix",new N),s(this,"_halfw"),s(this,"_halfh"),s(this,"_ray"),s(this,"lookTarget"),s(this,"type",xe.perspective),s(this,"cubeShadowCameras",[]),s(this,"_haltonSeq"),s(this,"_jitterOffsetList"),s(this,"_useJitterProjection",!1),s(this,"_jitterFrameIndex",0),s(this,"_sampleIndex",0),s(this,"_jitterX",0),s(this,"_jitterY",0)}get projectionMatrix(){return this._projectionMatrix}init(){super.init(),this._ray=new At,this.frustum=new uo,this.viewPort.x=0,this.viewPort.y=0,this.viewPort.w=E.presentationSize[0],this.viewPort.h=E.presentationSize[1],this.lookTarget=new p(0,0,0)}perspective(e,t,r,i){this.fov=e,this.aspect=t,this.near=r,this.far=i,this._projectionMatrix.perspective(e,t,r,i),this.type=xe.perspective}ortho(e,t,r,i){this.near=Math.max(r,.1),this.far=i,this._projectionMatrix.ortho(e,t,r,i),this.type=xe.ortho}orthoOffCenter(e,t,r,i,a,s){this.near=Math.max(a,.01),this.far=s,this._projectionMatrix.orthoOffCenter(e,t,r,i,a,s),this.type=xe.ortho}orthoZo(e,t,r,i,a,s){this.near=Math.max(a,.01),this.far=s,this._projectionMatrix.orthoZO(e,t,r,i,a,s),this.type=xe.ortho}get viewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.invert(),this._viewMatrix}get shadowViewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.appendScale(1,1,1),this._viewMatrix.invert(),this._viewMatrix}object3DToScreenRay(e,t=null){return t=t||new p(0,0,0,1),this._halfw=.5*this.viewPort.width,this._halfh=.5*this.viewPort.height,ht.transformVector(this.viewMatrix,e,t),this.project(t,t),t.x=this._halfw+t.x*this._halfw,t.y=this.viewPort.height-(this._halfh-t.y*this._halfh),t}screenRayToObject3D(e,t=null){t=t||new p,this._halfw=.5*this.viewPort.width,this._halfh=.5*this.viewPort.height;var r=e.x,i=e.y;return t.x=r/this.viewPort.width-.25,t.y=i/this.viewPort.height-.25,this.unProject(t.x,t.y,e.z,t),t}get pvMatrix(){return as(this._projectionMatrix,this.viewMatrix,this._pvMatrix),this._pvMatrix}get pvMatrix2(){return as(this._projectionMatrix,this.transform.worldMatrix,this._pvMatrix),this._pvMatrix}get pvMatrixInv(){var e=this._pvMatrixInv.copyFrom(this.pvMatrix);return e.invert(),e}get projectionMatrixInv(){return this._projectionMatrixInv.copyFrom(this._projectionMatrix),this._projectionMatrixInv.invert(),this._projectionMatrixInv}unProject(e,t,r,i){return(i=i||new p).x=e,i.y=-t,i.z=r,i.w=1,i.x*=r,i.y*=r,this._unprojection.copyFrom(this._projectionMatrix),this._unprojection.invert(),ht.transformVector(this._unprojection,i,i),i.z=r,i}project(e,t){return this._projectionMatrix.perspectiveMultiplyPoint3(e,t),t.x=t.x/t.w,t.y=-t.y/t.w,t.z=e.z,t}screenPointToRay(e,t){let r=this._ray,i=Ie.UnProjection(e,t,.01,this),a=Ie.UnProjection(e,t,1,this);return a=a.subtract(i).normalize(),r.origin.copyFrom(i),r.direction=a,r}screenPointToWorld(e,t,r){return Ie.UnProjection(e,t,r,this)}worldToScreenPoint(e,t){return Ie.Projection(e,this,t)}lookAt(e,t,r=p.Y_AXIS){this.transform.lookAt(e,t,r),t&&this.lookTarget.copyFrom(t)}resetProjectMatrix(){this.perspective(this.fov,this.aspect,this.near,this.far)}onUpdate(){this.type==xe.perspective&&(this.aspect=E.aspect,this.resetProjectMatrix()),this._useJitterProjection&&this.getJitteredProjectionMatrix(),this.frustum.update(this.pvMatrix)}get jitterFrameIndex(){return this._jitterFrameIndex}get jitterX(){return this._jitterX}get jitterY(){return this._jitterY}enableJitterProjection(e){this._jitterFrameIndex=0,this._useJitterProjection=e,this._haltonSeq||(this._haltonSeq=new ra),this._jitterOffsetList=[];for(let e=0;e<8;e++){var t=this.generateRandomOffset();this._jitterOffsetList.push(t)}this._jitterOffsetList.reverse()}generateRandomOffset(){var e=new J(ra.get(1+(1023&this._sampleIndex),2)-.5,ra.get(1+(1023&this._sampleIndex),3)-.5);return 8<=++this._sampleIndex&&(this._sampleIndex=0),e}getJitteredProjectionMatrix(){var e=_.setting.render.postProcessing.taa,t=this._projectionMatrix,r=e.temporalJitterScale,e=this._jitterFrameIndex%e.jitterSeedCount,i=this._jitterOffsetList[e].x*r,e=this._jitterOffsetList[e].y*r,r=t.get(0,2),a=t.get(1,2);this._jitterX=i/this.viewPort.width,this._jitterY=e/this.viewPort.height,r+=this._jitterX,a+=this._jitterY,t.set(0,2,r),t.set(1,2,a),this._jitterFrameIndex++}getCastShadowLightSpaceMatrix(e,t){var r=this.frustum,i=this.projectionMatrixInv,a=this.transform.worldMatrix,i=(N.helpMatrix.copyFrom(i),N.helpMatrix.multiply(a),r.setFrustumCorners(N.helpMatrix),r.corners),s=p.HELP_6;s.set(0,0,0);for(const d of i)s.add(d,s);s.div(i.length,s);a=p.HELP_5;a.copyFrom(s),p.HELP_0.copyFrom(t),a.add(p.HELP_0,a),e.lookAt(a,s,p.UP);let o=Number.MAX_VALUE,n=-Number.MAX_VALUE,h=Number.MAX_VALUE,l=-Number.MAX_VALUE,u=Number.MAX_VALUE,c=-Number.MAX_VALUE;for(const f of i)o=Math.min(o,f.x),n=Math.max(n,f.x),h=Math.min(h,f.y),l=Math.max(l,f.y),u=Math.min(u,f.z),c=Math.max(c,f.z);r=_.setting.shadow.shadowQuality;u<0?u*=r:u/=r,c<0?c/=r:c*=r,e.orthoOffCenter(o,n,h,l,u,c)}getWorldDirection(e){e=e||new p,this.transform.updateWorldMatrix();var t=this.transform._worldMatrix.rawData;return e.set(-t[8],-t[9],-t[10]).normalize()}}const Kr=class extends ve{constructor(){super(),s(this,"eventPositionChange",new st(Kr.POSITION_ONCHANGE)),s(this,"eventRotationChange",new st(Kr.ROTATION_ONCHANGE)),s(this,"eventScaleChange",new st(Kr.SCALE_ONCHANGE)),s(this,"onPositionChange"),s(this,"onRotationChange"),s(this,"onScaleChange"),s(this,"_scene3d"),s(this,"_parent"),s(this,"_localPos"),s(this,"_localRot"),s(this,"_localRotQuat"),s(this,"_localScale"),s(this,"_forward",new p),s(this,"_back",new p),s(this,"_right",new p),s(this,"_left",new p),s(this,"_up",new p),s(this,"_down",new p),s(this,"_worldMatrix"),s(this,"_localChange",!0),s(this,"_targetPos"),this.worldMatrix=new N(!1),this._localPos=new p,this._localRot=new p,this._localRotQuat=new j,this._localScale=new p(1,1,1)}get targetPos(){return this._targetPos}set targetPos(e){this._targetPos=e}get parent(){return this._parent}set parent(e){e=(this._parent=e)?e.scene3D:null;e?(this._scene3d=e,this.object3D.components.forEach(e=>{this.object3D.appendLateStart(e)})):this.object3D.components.forEach(e=>{e.__stop()}),this.object3D.entityChildren.forEach(e=>{e.transform.parent=this})}set enable(t){this.transform._scene3d&&t?super.enable=!0:super.enable=!1,this.object3D.entityChildren.forEach(e=>{e.transform.enable=t})}get enable(){return this._enable}get scene3D(){return this._scene3d}set scene3D(e){this._scene3d=e}get view3D(){return this._scene3d&&this._scene3d.view?this._scene3d.view:null}awake(){}start(){}stop(){}notifyLocalChange(){this._localChange=!0;var r=this.object3D.entityChildren;for(let e=0,t=r.length;e<t;e++)r[e].transform.notifyLocalChange()}get up(){return this.worldMatrix.transformVector(p.UP,this._up),this._up}set up(e){this._up.copyFrom(e),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get down(){return this.worldMatrix.transformVector(p.DOWN,this._down),this._down}set down(e){this._down.copyFrom(e),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get forward(){return this.worldMatrix.transformVector(p.FORWARD,this._forward),this._forward}set forward(e){this._forward.copyFrom(e),ht.fromToRotation(p.FORWARD,this._forward,j.HELP_0),this.transform.localRotQuat=j.HELP_0,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get back(){return this.worldMatrix.transformVector(p.BACK,this._back),this._back}set back(e){this._back.copyFrom(e),ht.fromToRotation(p.BACK,this._back,j.HELP_0),this.transform.localRotQuat=j.HELP_0,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get left(){return this.worldMatrix.transformVector(p.neg_X_AXIS,this._left),this._left}set left(e){this._left.copyFrom(e),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get right(){return this.worldMatrix.transformVector(p.X_AXIS,this._right),this._right}set right(e){this._right.copyFrom(e),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotQuat(){return this._localRotQuat}set localRotQuat(e){this._localRotQuat=e,this._localRotQuat.getEulerAngles(this._localRot),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}notifyChange(){this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get worldMatrix(){return this.updateWorldMatrix(),this._worldMatrix}set worldMatrix(e){this._worldMatrix=e}updateWorldMatrix(e=!1){(this._localChange||e)&&(this.parent?(ha(this._localRot,this._localPos,this.localScale,this._worldMatrix),ho(this._worldMatrix,this.parent.worldMatrix,this._worldMatrix)):ha(this._localRot,this._localPos,this.localScale,this._worldMatrix),this._localChange=!1)}lookTarget(e,t=p.UP){var r=this.transform.worldPosition;this.lookAt(r,e,t)}lookAt(e,t,r=p.UP){this._targetPos=t.clone(),this._localPos.copyFrom(e),this.notifyLocalChange(),N.helpMatrix.lookAt(e,t,r),N.helpMatrix.invert();e=N.helpMatrix.decompose(lt.QUATERNION);j.CALCULATION_QUATERNION.x=e[1].x,j.CALCULATION_QUATERNION.y=e[1].y,j.CALCULATION_QUATERNION.z=e[1].z,j.CALCULATION_QUATERNION.w=e[1].w,j.CALCULATION_QUATERNION.toEulerAngles(this._localRot),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange),this.onPositionChange&&this.onPositionChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}destroy(){this.parent&&this.parent.object3D&&(this.parent.object3D.removeChild(this.object3D),this.scene3D=null,this.localPosition=null,this.localRotQuat=null,this.localRotation=null,this.localScale=null,this._worldMatrix=null),super.destroy()}decomposeFromMatrix(e,t="eulerAngles"){e=e.decompose(t),t=this.transform;return t.localRotQuat.copyFrom(e[1]),t.localRotQuat=t.localRotQuat,t.localPosition.copyFrom(e[0]),t.localPosition=t.localPosition,t.localScale.copyFrom(e[2]),t.localScale=t.localScale,this.updateWorldMatrix(),this}cloneTo(e){e.transform.localPosition.copyFrom(this.localPosition),e.transform.localRotation.copyFrom(this.localRotation),e.transform.localScale.copyFrom(this.localScale)}set x(e){this._localPos.x!=e&&(this._localPos.x=e,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get x(){return this._localPos.x}set y(e){this._localPos.y!=e&&(this._localPos.y=e,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get y(){return this._localPos.y}set z(e){this._localPos.z!=e&&(this._localPos.z=e,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get z(){return this._localPos.z}set scaleX(e){this._localScale.x!=e&&(this._localScale.x=e,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleX(){return this._localScale.x}set scaleY(e){this._localScale.y!=e&&(this._localScale.y=e,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleY(){return this._localScale.y}set scaleZ(e){this._localScale.z!=e&&(this._localScale.z=e,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleZ(){return this._localScale.z}set rotationX(e){this._localRot.x!=e&&(this._localRot.x=e,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationX(){return this._localRot.x}set rotationY(e){this._localRot.y!=e&&(this._localRot.y=e,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationY(){return this._localRot.y}set rotationZ(e){this._localRot.z!=e&&(this._localRot.z=e,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationZ(){return this._localRot.z}get worldPosition(){return this._localChange&&this.updateWorldMatrix(),this._worldMatrix.position}set localPosition(e){this.x=e.x,this.y=e.y,this.z=e.z,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get localPosition(){return this._localPos}set localRotation(e){this.rotationX=e.x,this.rotationY=e.y,this.rotationZ=e.z,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotation(){return this._localRot}set localScale(e){this.scaleX=e.x,this.scaleY=e.y,this.scaleZ=e.z,this.notifyLocalChange(),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get localScale(){return this._localScale}};let Fe=Kr;s(Fe,"LIMIT",1),s(Fe,"COMPONENT_NAME","UUTransform"),s(Fe,"COMPONENT_TYPE","Transform"),s(Fe,"POSITION_ONCHANGE","POSITION_ONCHANGE"),s(Fe,"ROTATION_ONCHANGE","ROTATION_ONCHANGE"),s(Fe,"SCALE_ONCHANGE","SCALE_ONCHANGE"),s(Fe,"PARENT_ONCHANGE","PARENT_ONCHANGE"),s(Fe,"CHILDREN_ONCHANGE","CHILDREN_ONCHANGE"),s(Fe,"ADD_ONCHANGE","ADD_ONCHANGE");var Si=(e=>(e[e.None=2]="None",e[e.StaticBatch=4]="StaticBatch",e[e.DynamicBatch=8]="DynamicBatch",e))(Si||{});class ss{static addMask(e,t){return e|t}static removeMask(e,t){return e&~t}static hasMask(e,t){return 0!=(e&t)}}class je{constructor(e,t){s(this,"center"),s(this,"extents"),s(this,"max"),s(this,"min"),s(this,"size"),this.center=e,this.extents=new p(t.x/2,t.y/2,t.z/2),this.size=t,this.max=this.center.add(this.extents),this.min=this.center.subtract(this.extents)}setFromMinMax(e,t){this.size=t.subtract(e),this.center=this.size.div(2).add(e),this.extents=new p(this.size.x/2,this.size.y/2,this.size.z/2),this.min=e,this.max=t}setFromCenterAndSize(e,t){this.size=t,this.center=e,this.extents=new p(this.size.x/2,this.size.y/2,this.size.z/2),this.min=new p(this.center.x+-this.extents.x,this.center.y+-this.extents.y,this.center.z+-this.extents.z),this.max=new p(this.center.x+this.extents.x,this.center.y+this.extents.y,this.center.z+this.extents.z)}containsFrustum(e,t){return t.containsBox(e)}merge(e){e.min.x<this.min.x&&(this.min.x=e.min.x),e.min.y<this.min.y&&(this.min.y=e.min.y),e.min.z<this.min.z&&(this.min.z=e.min.z),e.max.x>this.max.x&&(this.max.x=e.max.x),e.max.y>this.max.y&&(this.max.y=e.max.y),e.max.z>this.max.z&&(this.max.z=e.max.z),this.size.x=e.max.x-e.min.x,this.size.y=e.max.y-e.min.y,this.size.z=e.max.z-e.min.z,this.extents.x=.5*this.size.x,this.extents.y=.5*this.size.y,this.extents.z=.5*this.size.z,this.center.x=this.extents.x+e.min.x,this.center.y=this.extents.y+e.min.y,this.center.z=this.extents.z+e.min.z}intersects(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}intersectsSphere(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}intersectsBox(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}static intersectRay(e,t){let r=0,i=Number.MAX_VALUE,a=1/e.direction.x,s=1/e.direction.y,o=1/e.direction.z,n=e.origin,h=e.direction.x,l=e.direction.y,u=e.direction.z,c=t.min,d=t.max,f,p;return p=0<=h?(f=(c.x-n.x)*a,(d.x-n.x)*a):(f=(d.x-n.x)*a,(c.x-n.x)*a),f>r&&(r=f),p<i&&(i=p),p=0<=l?(f=(c.y-n.y)*s,(d.y-n.y)*s):(f=(d.y-n.y)*s,(c.y-n.y)*s),f>r&&(r=f),p<i&&(i=p),p=0<=u?(f=(c.z-n.z)*o,(d.z-n.z)*o):(f=(d.z-n.z)*o,(c.z-n.z)*o),f>r&&(r=f),(i=p<i?p:i)>=r}equals(e){return this.center.equals(e.center)&&this.extents.equals(e.extents)}expandByPoint(e){e.x<this.min.x&&(this.min.x=e.x),e.x>this.max.x&&(this.max.x=e.x),e.y<this.min.y&&(this.min.y=e.y),e.y>this.max.y&&(this.max.y=e.y),e.z<this.min.z&&(this.min.z=e.z),e.z>this.max.z&&(this.max.z=e.z)}static fromPoints(e){for(var t=new je(new p,new p),r=0;r<e.length;r++)t.expandByPoint(e[r]);return t}calculateTransform(e){}clone(){return new je(this.center.clone(),this.size.clone())}intersectsRay(e,t){throw new Error("Method not implemented.")}containsPoint(e){return this.min.x<=e.x&&this.max.x>=e.x&&this.min.y<=e.y&&this.max.y>=e.y&&this.min.z<=e.z&&this.max.z>=e.z}getBoundVertex(){var e=new p(this.min.x,this.min.y,this.min.z),t=new p(this.max.x,this.min.y,this.min.z),r=new p(this.max.x,this.min.y,this.max.z),i=new p(this.min.x,this.min.y,this.max.z),a=new p(this.min.x,this.max.y,this.min.z),s=new p(this.max.x,this.max.y,this.min.z),o=new p(this.max.x,this.max.y,this.max.z),n=new p(this.min.x,this.max.y,this.max.z);return[r.x,r.y,r.z,1,i.x,i.y,i.z,1,e.x,e.y,e.z,1,t.x,t.y,t.z,1,r.x,r.y,r.z,1,e.x,e.y,e.z,1,o.x,o.y,o.z,1,r.x,r.y,r.z,1,t.x,t.y,t.z,1,s.x,s.y,s.z,1,o.x,o.y,o.z,1,t.x,t.y,t.z,1,n.x,n.y,n.z,1,o.x,o.y,o.z,1,s.x,s.y,s.z,1,a.x,a.y,a.z,1,n.x,n.y,n.z,1,s.x,s.y,s.z,1,i.x,i.y,i.z,1,n.x,n.y,n.z,1,a.x,a.y,a.z,1,e.x,e.y,e.z,1,i.x,i.y,i.z,1,a.x,a.y,a.z,1,o.x,o.y,o.z,1,n.x,n.y,n.z,1,i.x,i.y,i.z,1,i.x,i.y,i.z,1,r.x,r.y,r.z,1,o.x,o.y,o.z,1,t.x,t.y,t.z,1,e.x,e.y,e.z,1,a.x,a.y,a.z,1,s.x,s.y,s.z,1,t.x,t.y,t.z,1,a.x,a.y,a.z,1]}}class co extends br{constructor(){super(),s(this,"name",""),s(this,"_uuid",""),s(this,"_renderLayer",Si.None),s(this,"transform"),s(this,"renderNode"),s(this,"entityChildren"),s(this,"components"),s(this,"bound"),s(this,"waitDisposeComponents"),s(this,"_dispose",!1),this.entityChildren=[],this.components=new Map,this.waitDisposeComponents=[],this._uuid=qe()}get uuid(){return this._uuid}get renderLayer(){return this._renderLayer}set renderLayer(t){for(let e=0;e<this.entityChildren.length;e++)this.entityChildren[e].renderLayer=t;this._renderLayer=t}getObjectByName(r){if(0<=r.indexOf("/")){let e=r.split("/"),t=this;for(;0<e.length&&t;){var i=e.shift();if(!(t=t.getChildByName(i,!1)))return null}return t}return this.getChildByName(r,!1)}get numChildren(){return this.entityChildren.length}addChild(e){return null==e?new console.error("child is null!"):e===this?new console.error("child is self!"):-1==this.entityChildren.indexOf(e)?(e.transform.parent&&e.transform.parent.object3D.removeChild(e),e.transform.parent=this.transform,this.entityChildren.push(e),e.transform.notifyLocalChange(),e):null}removeChild(e){var t;return null===e?new console.error("remove child is null!"):e===this?new console.error("add child is self!"):void(-1!=(t=this.entityChildren.indexOf(e))&&(this.entityChildren.splice(t,1),e.transform.parent=null))}removeAllChild(){for(;0<this.numChildren;)this.removeChild(this.entityChildren[0])}removeSelf(){return this.removeFromParent()}removeChildByIndex(e){0<=e&&e<this.entityChildren.length?this.removeChild(this.entityChildren[e]):console.error("remove child by index , index out of range")}hasChild(e){return-1!=this.entityChildren.indexOf(e)}removeFromParent(){var e=this.transform.parent;return e&&e.object3D&&e.object3D.removeChild(this),this}getChildByIndex(e){let t=null;return t=e<this.entityChildren.length?this.entityChildren[e]:t}getChildByName(e,t=!0){let r=null;for(const i of this.entityChildren){if(i.name==e)return r=i;if(t&&(r=i.getChildByName(e,t)))return r}return r}update(){}dispose(){this._dispose=!0}instantiate(){return null}waitUpdate(){this._dispose?(this.transform.parent&&this.transform.parent.object3D.removeChild(this),this.components.forEach((e,t)=>{e.enable=!1,e.destroy()}),this.components.clear()):se.waitStartComponent.forEach((e,t)=>{e.forEach(e=>{e.__start()}),se.waitStartComponent.delete(t)})}genBounds(){this.bound||(this.bound=new je(p.ZERO.clone(),p.ONE.clone()));for(const e of this.entityChildren)e.bound&&this.bound.merge(e.bound);return this.bound}destroy(){this.transform.parent=null,this.components.forEach(e=>{e.destroy()}),this.components.clear()}}class ee extends co{constructor(){super(),s(this,"_isScene3D"),s(this,"prefabRef"),this.transform=this.addComponent(Fe)}get isScene3D(){return this._isScene3D}forChild(t){this.entityChildren.forEach(e=>{t(e),e.forChild(t)})}addComponent(e,t){var r=e.name;return this.components.has(r)?null:((e=new e).object3D=this,e.__init(t),this.components.set(r,e),this.appendLateStart(e),e)}appendLateStart(e){var t=se.waitStartComponent.get(this);t?-1==t.indexOf(e)&&t.push(e):se.waitStartComponent.set(this,[e])}getOrAddComponent(e){let t=e.name,r=this.components.get(t);return r=r||this.addComponent(e)}removeComponent(e){var t,e=e.name;this.components.has(e)&&(t=this.components.get(e),this.components.delete(e),t.__stop(),t.destroy())}hasComponent(e){e=e.name;return this.components.has(e)}getComponent(e){e=e.name;return this.components.get(e)}getComponentFromParent(e){return this.parent?this.parent.object3D.getComponent(e)||this.parent.object3D.getComponentFromParent(e):null}getComponentsInChild(t){var r=[],e=t.name,e=this.components.get(e);e&&r.push(e);for(let e=0;e<this.entityChildren.length;e++){var i=this.entityChildren[e].getComponentsInChild(t);r.push(...i)}return r}getComponents(r,i,a){i=i||[];var e=this.getComponent(r);e&&(e.enable||a)&&i.push(e);for(let e=0,t=this.entityChildren.length;e<t;e++){var s=this.entityChildren[e];s&&s instanceof ee&&s.getComponents(r,i,a)}return i}getComponentsExt(e,t,r){t=t||[];var i=e.name,i=this.components.get(i);if(i&&(i.enable||r))t.push(i);else for(const a of this.entityChildren)a instanceof ee&&a.getComponentsExt(e,t,r);return t}clone(){return this.instantiate()}instantiate(){let r=new ee;return r.name=this.name+"_clone",this.entityChildren.forEach((e,t)=>{e=e.instantiate();r.addChild(e)}),this.components.forEach((e,t)=>{e.cloneTo(r)}),r}get localPosition(){return this.transform.localPosition}set localPosition(e){this.transform.localPosition=e}get localRotation(){return this.transform.localRotation}set localRotation(e){this.transform.localRotation=e}get localScale(){return this.transform.localScale}set localScale(e){this.transform.localScale=e}get localQuaternion(){return this.transform.localRotQuat}set localQuaternion(e){this.transform.localRotQuat=e}notifyChange(){this.transform.notifyChange()}get parent(){return this.transform.parent}get parentObject(){return this.transform.parent.object3D}set x(e){this.transform.x=e}get x(){return this.transform.x}set y(e){this.transform.y=e}get y(){return this.transform.y}set z(e){this.transform.z=e}get z(){return this.transform.z}set scaleX(e){this.transform.scaleX=e}get scaleX(){return this.transform.scaleX}set scaleY(e){this.transform.scaleY=e}get scaleY(){return this.transform.scaleY}set scaleZ(e){this.transform.scaleZ=e}get scaleZ(){return this.transform.scaleZ}set rotationX(e){this.transform.rotationX=e}get rotationX(){return this.transform.rotationX}set rotationY(e){this.transform.rotationY=e}get rotationY(){return this.transform.rotationY}set rotationZ(e){this.transform.rotationZ=e}get rotationZ(){return this.transform.rotationZ}fixedUpdate(){}lateUpdate(){}traverse(r){r(this);for(let e=0,t=this.entityChildren.length;e<t;e++){var i=this.entityChildren[e];i instanceof ee&&i.traverse(r)}}destroy(){super.destroy()}}class Ie{static createCamera3DObject(e,t){return this.createCamera3D(null,e,t)}static createCamera3D(e,t,r){return e=e||new ee,t&&t.addChild(e),r&&(e.name=r),e.getOrAddComponent(ii)}static UnProjection(e,t,r=1,i){var e=new p(e,t,0),t=p.HELP_0,a=E.canvas.offsetLeft,s=E.canvas.offsetTop,o=E.canvas.clientWidth,n=E.canvas.clientHeight,a=(t.x=2*((e.x-a)/o-.5),t.y=2*-((e.y-s)/n-.5),t.z=r,new p(0,0,0)),o=N.helpMatrix2,e=(o.copyFrom(i.projectionMatrix),o.invert(),N.helpMatrix);return e.identity(),e.multiply(o),e.multiply(i.transform.worldMatrix),e.perspectiveMultiplyPoint3(t,a),a}static Projection(e,t,r){var r=r||new p(0,0,0),i=N.helpMatrix,t=(i.copyFrom(t.viewMatrix),i.multiply(t.projectionMatrix),i.perspectiveMultiplyPoint3(e,r),E.canvas.clientWidth/2),i=E.canvas.clientHeight/2;return r.x=r.x*t+t,r.y=i-r.y*i,r}static UnProjection2(e,t,r,i,a){var a=a||new p(0,0,0),s=N.helpMatrix,i=(s.copyFrom(i.pvMatrixInv),E.canvas.clientWidth/2),o=E.canvas.clientHeight/2;return a.x=(e-i)/i,a.y=(o-t)/o,a.z=r,s.perspectiveMultiplyPoint3(a,a),a}}class kt{static init(){this.directionLightList=new Map,this.pointLightList=new Map}static getShadowLightList(t){if(!t.transform.view3D)return null;if(t.lightData.lightType==Pe.DirectionLight){let e=this.directionLightList.get(t.transform.view3D.scene);return e||(e=[],this.directionLightList.set(t.transform.view3D.scene,e)),e}if(t.lightData.lightType==Pe.PointLight){let e=this.pointLightList.get(t.transform.view3D.scene);return e||(e=[],this.pointLightList.set(t.transform.view3D.scene,e)),e}if(t.lightData.lightType==Pe.SpotLight){let e=this.pointLightList.get(t.transform.view3D.scene);return e||(e=[],this.pointLightList.set(t.transform.view3D.scene,e)),e}}static getShadowLightWhichScene(t,e){if(e==Pe.DirectionLight){let e=this.directionLightList.get(t);return e||(e=[],this.directionLightList.set(t,e)),e}if(e==Pe.PointLight){let e=this.pointLightList.get(t);return e||(e=[],this.pointLightList.set(t,e)),e}}static getDirectShadowLightWhichScene(e){let t=this.directionLightList.get(e);return t||(t=[],this.directionLightList.set(e,t)),t}static getPointShadowLightWhichScene(e){let t=this.pointLightList.get(e);return t||(t=[],this.pointLightList.set(e,t)),t}static addShadowLight(t){if(!t.transform.view3D)return null;if(t.lightData.lightType==Pe.DirectionLight){let e=this.directionLightList.get(t.transform.view3D.scene);return e||(e=[],this.directionLightList.set(t.transform.view3D.scene,e)),t.lightData.lightType!=Pe.DirectionLight||t.shadowCamera||(t.shadowCamera=Ie.createCamera3DObject(null,"shadowCamera"),t.shadowCamera.name=qe(),t.shadowCamera.isShadowCamera=!0,t.shadowCamera.orthoOffCenter(_.setting.shadow.shadowBound,-_.setting.shadow.shadowBound,_.setting.shadow.shadowBound,-_.setting.shadow.shadowBound,1,5e4)),-1==e.indexOf(t)&&(e.length<8&&(t.lightData.castShadowIndex=e.length),e.push(t)),e}if(t.lightData.lightType==Pe.PointLight){let e=this.pointLightList.get(t.transform.view3D.scene);return e||(e=[],this.pointLightList.set(t.transform.view3D.scene,e)),-1==e.indexOf(t)&&(e.length<8&&(t.lightData.castShadowIndex=e.length),e.push(t)),e}if(t.lightData.lightType==Pe.SpotLight){let e=this.pointLightList.get(t.transform.view3D.scene);return e||(e=[],this.pointLightList.set(t.transform.view3D.scene,e)),-1==e.indexOf(t)&&(e.length<8&&(t.lightData.castShadowIndex=e.length),e.push(t)),e}}static removeShadowLight(e){var t,r;return e.transform.view3D?e.lightData.lightType==Pe.DirectionLight?((r=this.directionLightList.get(e.transform.view3D.scene))&&-1!=(t=r.indexOf(e))&&r.splice(t,1),r):e.lightData.lightType==Pe.PointLight?((t=this.pointLightList.get(e.transform.view3D.scene))&&-1!=(r=t.indexOf(e))&&t.splice(r,1),t):void 0:null}}s(kt,"directionLightList"),s(kt,"pointLightList");class Li{static getGlobalDataBindGroupLayout(){var e;return this._globalDataBindGroupLayout||((e=[]).push({binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}),e.push({binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),this._globalDataBindGroupLayout=E.device.createBindGroupLayout({entries:e})),this._globalDataBindGroupLayout}}s(Li,"_globalDataBindGroupLayout");class fo{constructor(e){s(this,"uuid"),s(this,"usage"),s(this,"globalBindGroup"),s(this,"uniformGPUBuffer"),s(this,"matrixBindGroup"),s(this,"uniformByteLength"),s(this,"matrixesByteLength"),this.uuid=qe(),this.usage=GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.uniformGPUBuffer=new Mt(688),this.uniformGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBindGroup=e,this.createBindGroup()}createBindGroup(){this.uniformByteLength=this.uniformGPUBuffer.memory.shareDataBuffer.byteLength,this.matrixesByteLength=N.blockBytes*N.totalCount,this.globalBindGroup=E.device.createBindGroup({label:"global_bindGroupLayout",layout:Li.getGlobalDataBindGroupLayout(),entries:[{binding:0,resource:{buffer:this.uniformGPUBuffer.buffer,offset:0,size:this.uniformByteLength}},{binding:1,resource:{buffer:this.matrixBindGroup.matrixBufferDst.buffer,offset:0,size:this.matrixesByteLength}}]})}setCamera(t){t.transform.updateWorldMatrix(!0),this.uniformGPUBuffer.setMatrix("_projectionMatrix",t.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",t.viewMatrix),this.uniformGPUBuffer.setMatrix("_cameraWorldMatrix",t.transform.worldMatrix),this.uniformGPUBuffer.setMatrix("_projectionMatrixInv",t.projectionMatrixInv);var r=new Float32Array(128);for(let e=0;e<8;e++){var i=kt.getDirectShadowLightWhichScene(t.transform.scene3D);e<i.length?(i=i[e].shadowCamera.pvMatrix.rawData,r.set(i,16*e)):r.set(t.transform.worldMatrix.rawData,16*e)}this.uniformGPUBuffer.setFloat32Array("_shadowCamera",r),this.uniformGPUBuffer.setVector3("CameraPos",t.transform.worldPosition),this.uniformGPUBuffer.setFloat("Time.frame",de.frame),this.uniformGPUBuffer.setFloat("Time.time",de.frame),this.uniformGPUBuffer.setFloat("Time.detail",de.delta),this.uniformGPUBuffer.setFloat("EngineSetting.Shadow.shadowBias",_.setting.shadow.shadowBias),this.uniformGPUBuffer.setFloat("skyExposure",_.setting.sky.skyExposure),this.uniformGPUBuffer.setFloat("EngineSetting.Render.renderPassState",_.setting.render.renderPassState),this.uniformGPUBuffer.setFloat("EngineSetting.Render.quadScale",_.setting.render.quadScale),this.uniformGPUBuffer.setFloat("EngineSetting.Render.hdrExposure",_.setting.render.hdrExposure),this.uniformGPUBuffer.setInt32("renderState_left",_.setting.render.renderState_left),this.uniformGPUBuffer.setInt32("renderState_right",_.setting.render.renderState_right),this.uniformGPUBuffer.setFloat("renderState_split",_.setting.render.renderState_split);var e=_.inputSystem.mouseX*E.pixelRatio*E.super,a=_.inputSystem.mouseY*E.pixelRatio*E.super;this.uniformGPUBuffer.setFloat("mouseX",e),this.uniformGPUBuffer.setFloat("mouseY",a),this.uniformGPUBuffer.setFloat("windowWidth",E.windowWidth),this.uniformGPUBuffer.setFloat("windowHeight",E.windowHeight),this.uniformGPUBuffer.setFloat("near",t.near),this.uniformGPUBuffer.setFloat("far",t.far),this.uniformGPUBuffer.setFloat("EngineSetting.Shadow.pointShadowBias",_.setting.shadow.pointShadowBias),this.uniformGPUBuffer.setFloat("shadowMapSize",_.setting.shadow.shadowSize),this.uniformGPUBuffer.setFloat("shadowSoft",_.setting.shadow.shadowSoft),this.uniformGPUBuffer.apply()}setShadowCamera(e){e.transform.updateWorldMatrix(!0),this.uniformGPUBuffer.setMatrix("_projectionMatrix",e.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",e.viewMatrix),this.uniformGPUBuffer.setMatrix("_pvMatrix",e.pvMatrix),this.uniformGPUBuffer.apply()}addUniformNode(){}writeBuffer(){var e=N.matrixBytes;let t=e.byteLength,r=0;for(;r<t;){var i=Math.min(32e4,t-r);E.device.queue.writeBuffer(this.matrixBindGroup.matrixBufferDst.buffer,r,e.buffer,e.byteOffset+r,i),r+=i}}}class po{constructor(){s(this,"debugX",0),s(this,"debugY",0),s(this,"debugZ",0),s(this,"probesBufferData"),s(this,"probesBuffer"),s(this,"isVolumeFrameChange",!0),s(this,"irradianceVolumeBuffer"),this.irradianceVolumeBuffer=new Se(80),this.fillIrradianceData()}fillIrradianceData(){this.irradianceVolumeBuffer.setFloat("orientationIndex",0),this.irradianceVolumeBuffer.setFloat("hysteresis",0),this.irradianceVolumeBuffer.setFloat("OctRTSideSize",0),this.irradianceVolumeBuffer.setFloat("OctRTMaxSize",0),this.irradianceVolumeBuffer.setFloat("startX",0),this.irradianceVolumeBuffer.setFloat("startY",0),this.irradianceVolumeBuffer.setFloat("startZ",0),this.irradianceVolumeBuffer.setFloat("ProbeSpace",0),this.irradianceVolumeBuffer.setFloat("probeXCount",0),this.irradianceVolumeBuffer.setFloat("probeYCount",0),this.irradianceVolumeBuffer.setFloat("probeZCount",0),this.irradianceVolumeBuffer.setFloat("maxDistance",0),this.irradianceVolumeBuffer.setFloat("depthSharpness",0),this.irradianceVolumeBuffer.setFloat("ProbeSourceTextureSize",0),this.irradianceVolumeBuffer.setFloat("ProbeSize",0),this.irradianceVolumeBuffer.setFloat("bounceIntensity",0),this.irradianceVolumeBuffer.setFloat("probeRoughness",0),this.irradianceVolumeBuffer.setFloat("normalBias",0),this.irradianceVolumeBuffer.setFloat("irradianceChebyshevBias",0),this.irradianceVolumeBuffer.setFloat("rayNumber",0),this.irradianceVolumeBuffer.setFloat("irradianceDistanceBias",0),this.irradianceVolumeBuffer.setFloat("indirectIntensity",0),this.irradianceVolumeBuffer.setFloat("ddgiGamma",0),this.irradianceVolumeBuffer.setFloat("lerpHysteresis",0),this.irradianceVolumeBuffer.setFloat("debugX",this.debugX),this.irradianceVolumeBuffer.setFloat("debugY",this.debugY),this.irradianceVolumeBuffer.setFloat("debugZ",this.debugZ),this.irradianceVolumeBuffer.apply()}}let mo=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(0) fragUV: vec2<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${Re.getMorphTargetShaderBinding(2,1)}
#endif

#if USE_SKELETON
    ${Ri.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
  @builtin(instance_index) index : u32,
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
  @location(2) uv: vec2<f32>,
  @location(3) TEXCOORD_1: vec2<f32>,

  #if USE_TANGENT
      @location(4) TANGENT: vec4<f32>,
      #if USE_SKELETON
          @location(5) joints0: vec4<f32>,
          @location(6) weights0: vec4<f32>,
          #if USE_JOINT_VEC8
          @location(7) joints1: vec4<f32>,
          @location(8) weights1: vec4<f32>,
      #endif
      #elseif USE_MORPHTARGETS
          ${Re.getMorphTargetAttr(5)}
      #endif
  #elseif USE_SKELETON
      @location(4) joints0: vec4<f32>,
      @location(5) weights0: vec4<f32>,
      #if USE_JOINT_VEC8
      @location(6) joints1: vec4<f32>,
      @location(7) weights1: vec4<f32>,
      #endif
  #elseif USE_MORPHTARGETS
     ${Re.getMorphTargetAttr(4)}
  #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;
    var vertexNormal = vertex.normal.xyz;

    #if USE_MORPHTARGETS
     ${Re.getMorphTargetCalcVertex()}    
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;
    return VertexOutput(vertex.uv, vPos );  
}
`,go=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(0) fragUV: vec2<f32>,
    @location(1) worldPos: vec3<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${Re.getMorphTargetShaderBinding(2,1)}
##endif
 
#if USE_SKELETON
    ${Ri.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
  @builtin(instance_index) index : u32,
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
  @location(2) uv: vec2<f32>,
  @location(3) TEXCOORD_1: vec2<f32>,

  #if USE_TANGENT
      @location(4) TANGENT: vec4<f32>,
      #if USE_SKELETON
          @location(5) joints0: vec4<f32>,
          @location(6) weights0: vec4<f32>,
          #if USE_JOINT_VEC8
          @location(7) joints1: vec4<f32>,
          @location(8) weights1: vec4<f32>,
      #endif
      #elseif USE_MORPHTARGETS
         ${Re.getMorphTargetAttr(5)}
      #endif
  #elseif USE_SKELETON
      @location(4) joints0: vec4<f32>,
      @location(5) weights0: vec4<f32>,
      #if USE_JOINT_VEC8
      @location(6) joints1: vec4<f32>,
      @location(7) weights1: vec4<f32>,
      #endif
  #elseif USE_MORPHTARGETS
      ${Re.getMorphTargetAttr(4)}
  #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;

    #if USE_MORPHTARGETS
        ${Re.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;
    return VertexOutput(vertex.uv, worldPos.xyz , vPos ); 
}
`,Ls=`
#if USE_ALPHACUT
@group(1) @binding(0)
var baseMapSampler: sampler;
@group(1) @binding(1)
var baseMap: texture_2d<f32>;
#endif

struct FragmentOutput {
  @location(0) o_Target: vec4<f32>,
  @builtin(frag_depth) out_depth: f32
};

struct MaterialUniform {
lightWorldPos: vec3<f32>,
cameraFar: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;

@fragment
fn main(@location(0) fragUV: vec2<f32> , @location(1) worldPos:vec3<f32> ) -> FragmentOutput {
var distance = length(worldPos.xyz - materialUniform.lightWorldPos ) ;
distance = distance / materialUniform.cameraFar ;

#if USE_ALPHACUT
  let Albedo = textureSample(baseMap,baseMapSampler,fragUV);
  var fragOut:FragmentOutput; 
  if(Albedo.w > 0.5){
    fragOut = FragmentOutput(vec4<f32>(0.0),distance);
  }
//   if(Albedo.w > 0.5){
//     fragOut = FragmentOutput(vec4<f32>(0.0),distance);
//   }else{
//     discard;
//   }
  return fragOut ;
#else
    fragOut = FragmentOutput(vec4<f32>(0.0),distance);
#endif
}
`;const bt=class{static getMipmapPipeline(e){let t=e.format,r=E.device,i=bt.pipelineCache[e.format],a;return i||(a=r.createShaderModule({code:bt.mipmapShader}),e=r.createBindGroupLayout({entries:[{binding:0,visibility:e.visibility,sampler:e.samplerBindingLayout},{binding:1,visibility:e.visibility,texture:e.textureBindingLayout}]}),e=E.device.createPipelineLayout({bindGroupLayouts:[e]}),i=C.createPipeline({layout:e,vertex:{module:a,entryPoint:"vertexMain"},fragment:{module:a,entryPoint:"fragmentMain",targets:[{format:t}]}}),bt.pipelineCache[t]=i),i}static webGPUGenerateMipmap(t){var e,r=E.device,i=t.textureDescriptor;bt.pipeline||(e=r.createShaderModule({code:`
        var<private> pos : array<vec2<f32>, 4> = array<vec2<f32>, 4>(
          vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0),
          vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0));

        struct VertexOutput {
          @builtin(position) position : vec4<f32>,
          @location(0) texCoord : vec2<f32>
        };

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
          var output : VertexOutput;
          output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
          output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
          return output;
        }

        @binding(0) @group(0) var imgSampler : sampler;
        @binding(1) @group(0) var img : texture_2d<f32>;

        @fragment
        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
          var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
          return outColor;
        }
      `}),bt.pipeline=r.createRenderPipeline({layout:"auto",vertex:{module:e,entryPoint:"vertexMain"},fragment:{module:e,entryPoint:"fragmentMain",targets:[{format:i.format}]},primitive:{topology:"triangle-strip",stripIndexFormat:"uint32"}}));let a,s=(a="rgba16float"==t.format?r.createSampler({minFilter:"nearest",magFilter:"linear"}):r.createSampler({minFilter:"linear",magFilter:"linear"}),t.getGPUTexture().createView({baseMipLevel:0,mipLevelCount:1}));var o=C.beginCommandEncoder();for(let e=1;e<i.mipLevelCount;++e){var n=t.getGPUTexture().createView({baseMipLevel:e,mipLevelCount:1}),h=o.beginRenderPass({colorAttachments:[{view:n,clearValue:[0,0,0,0],loadOp:"clear",storeOp:"store"}]}),l=r.createBindGroup({layout:bt.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:a},{binding:1,resource:s}]});h.setPipeline(bt.pipeline),h.setBindGroup(0,l),h.draw(4),h.end(),s=n}C.endCommandEncoder(o)}};let nt=bt;s(nt,"mipmapShader",`
    var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));
      struct VertexOutput {
        @builtin(position) position : vec4<f32>;
        @location(0) texCoord : vec2<f32>;
      };
      @vertex
      fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
        var output : VertexOutput;
        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
        return output;
      }
      @binding(0) @group(0) var imgSampler : sampler;
      @binding(1) @group(0) var img : texture_2d<f32>;
      @fragment
      fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
        var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
        return outColor ;
      }`),s(nt,"pipelineCache",{}),s(nt,"pipeline");class Ke{constructor(e=32,t=32,r=1){s(this,"name"),s(this,"url"),s(this,"gpuTexture"),s(this,"pid"),s(this,"view"),s(this,"gpuSampler"),s(this,"gpuSampler_comparison"),s(this,"format"),s(this,"usage"),s(this,"width",4),s(this,"height",4),s(this,"depthOrArrayLayers",1),s(this,"numberLayer",1),s(this,"viewDescriptor"),s(this,"textureDescriptor"),s(this,"visibility",GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT),s(this,"textureBindingLayout",{viewDimension:"2d",multisampled:!1}),s(this,"samplerBindingLayout",{type:"filtering"}),s(this,"sampler_comparisonBindingLayout",{type:"comparison"}),s(this,"flipY"),s(this,"isVideoTexture"),s(this,"_useMipmap",!1),s(this,"_textureChange",!1),s(this,"_sourceImageData"),s(this,"mipmapCount",1),s(this,"_stateChangeRef",new Map),s(this,"_addressModeU"),s(this,"_addressModeV"),s(this,"_addressModeW"),s(this,"_magFilter"),s(this,"_minFilter"),s(this,"_mipmapFilter"),s(this,"_lodMinClamp"),s(this,"_lodMaxClamp"),s(this,"_compare"),s(this,"_maxAnisotropy"),this.width=e,this.height=t,this.numberLayer=r,this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.addressModeU=_t.repeat,this.addressModeV=_t.repeat,this.visibility=GPUShaderStage.FRAGMENT}init(){var e=this;return e.internalCreateBindingLayoutDesc&&e.internalCreateBindingLayoutDesc(),e.internalCreateTexture&&e.internalCreateTexture(),e.internalCreateView&&e.internalCreateView(),e.internalCreateSampler&&e.internalCreateSampler(),this}createTextureDescriptor(e,t,r,i,a=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING,s=1,o=0){this.width=e,this.height=t,this.format=i,this.usage=a,this.textureDescriptor={size:[e,t,s],mipLevelCount:r,format:i,usage:a,label:""+(this.name+this.width+this.height+this.format)},0<o&&(this.textureDescriptor.sampleCount=o),this.viewDescriptor=1<s?{dimension:"2d-array"}:{dimension:this.textureBindingLayout.viewDimension}}generate(e){let t=32,r=32;"width"in e&&(t=e.width,r=e.height),(t<32||r<32)&&console.log(e.name+"Size must be greater than 32!"),this.width=t,this.height=r,this.visibility=GPUShaderStage.FRAGMENT,this.createTexture(e)}createTexture(e){this._sourceImageData=e,this.updateTextureDescription(),this.updateGPUTexture();e=E.device;this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),this.useMipmap&&nt.webGPUGenerateMipmap(this)}get useMipmap(){return this._useMipmap}set useMipmap(e){var t;e?(this.samplerBindingLayout.type="filtering",0==this._useMipmap&&this._sourceImageData&&(this._useMipmap=!0,this.updateTextureDescription(),this.updateGPUTexture(),t=E.device,this.gpuTexture instanceof GPUTexture&&t.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),nt.webGPUGenerateMipmap(this))):(this.samplerBindingLayout.type="non-filtering",1==this._useMipmap&&this._sourceImageData&&(this._useMipmap=!1,this.updateTextureDescription(),this.updateGPUTexture(),t=E.device,this.gpuTexture instanceof GPUTexture)&&t.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height])),this._textureChange=!0,this._useMipmap=e,this.noticeChange()}updateTextureDescription(){this.mipmapCount=Math.floor(this.useMipmap?Math.log2(Math.min(this.width,this.height)):1),this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format)}updateGPUTexture(){this.gpuTexture&&this.gpuTexture instanceof GPUTexture&&this.gpuTexture.destroy(),this.gpuTexture=null,this.view=null,this.gpuTexture=this.getGPUTexture()}getGPUTexture(){return this.gpuTexture||(this.gpuTexture=E.device.createTexture(this.textureDescriptor)),this.gpuTexture}getGPUView(e=0){return this.view||(this.gpuTexture=this.getGPUTexture(),this.gpuTexture instanceof GPUTexture&&(this.view=this.gpuTexture.createView(this.viewDescriptor))),this.view}bindStateChange(e,t){this._stateChangeRef.set(t,e)}unBindStateChange(e){this._stateChangeRef.delete(e)}noticeChange(){this.gpuSampler=E.device.createSampler(this),this._stateChangeRef.forEach((e,t)=>{e()})}destoryView(){return this.view=null,this}destroy(){this.gpuTexture instanceof GPUTexture&&this.gpuTexture.destroy(),this._stateChangeRef.clear()}get addressModeU(){return this._addressModeU}set addressModeU(e){this._addressModeU!=e&&(this._addressModeU=e,this.noticeChange())}get addressModeV(){return this._addressModeV}set addressModeV(e){this._addressModeV!=e&&(this._addressModeV=e,this.noticeChange())}get addressModeW(){return this._addressModeW}set addressModeW(e){this._addressModeW!=e&&(this._addressModeW=e,this.noticeChange())}get magFilter(){return this._magFilter}set magFilter(e){this._magFilter!=e&&(this._magFilter=e,this.noticeChange())}get minFilter(){return this._minFilter}set minFilter(e){this._minFilter!=e&&(this._minFilter=e,this.noticeChange())}get mipmapFilter(){return this._mipmapFilter}set mipmapFilter(e){this._mipmapFilter!=e&&(this._mipmapFilter=e,this.noticeChange())}get lodMinClamp(){return this._lodMinClamp}set lodMinClamp(e){this._lodMinClamp!=e&&(this._lodMinClamp=e,this.noticeChange())}get lodMaxClamp(){return this._lodMaxClamp}set lodMaxClamp(e){this._lodMaxClamp!=e&&(this._lodMaxClamp=e,this.noticeChange())}get compare(){return this._compare}set compare(e){this._compare!=e&&(this._compare=e,this.noticeChange())}get maxAnisotropy(){return this._maxAnisotropy}set maxAnisotropy(e){this._maxAnisotropy!=e&&(this._maxAnisotropy=e,this.noticeChange())}}class xo extends Ke{constructor(e,t,r){super(e,t,r),s(this,"_bitmapTextures"),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=z.rgba8unorm,this.mipmapCount=1,this._bitmapTextures=[],this.init()}setTextures(t){for(let e=this._bitmapTextures.length=0;e<t.length;e++){var r=t[e];this.addTexture(r)}}addTexture(e){e.width==this.width&&e.height==this.height||console.error("bitmap texture muse match bitmapTextureArray size!"),-1==this._bitmapTextures.indexOf(e)&&(e.pid=this._bitmapTextures.length,this._bitmapTextures.push(e),this.updateTexture())}removeTexture(e){e=this._bitmapTextures.indexOf(e);if(-1!=e){this._bitmapTextures.splice(e,1);for(let e=0;e<this._bitmapTextures.length;e++)this._bitmapTextures[e].pid=e}}updateTexture(){var t=C.beginCommandEncoder();for(let e=0;e<this._bitmapTextures.length;e++){var r=this._bitmapTextures[e];t.copyTextureToTexture({texture:r.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:e}},{width:this.width,height:this.height,depthOrArrayLayers:1})}C.endCommandEncoder(t)}internalCreateBindingLayoutDesc(){this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.minFilter=_i.linear,this.magFilter=_i.linear}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=E.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=E.device.createSampler(this)}}const Rt=class{constructor(){s(this,"_iesTexture"),s(this,"index",0)}generateIES(e){}set IESTexture(e){(this._iesTexture=e).addressModeU=_t.repeat,e.addressModeV=_t.repeat,e.addressModeW=_t.repeat,-1==Rt.ies_list.indexOf(this)&&(this.index=Rt.ies_list.length,Rt.ies_list.push(this),Rt.iesTexture||Rt.create(e.width,e.height),Rt.iesTexture.addTexture(e))}get IESTexture(){return this._iesTexture}static create(e,t){this.iesTexture=new xo(e,t,48)}};let Lt=Rt;s(Lt,"use",!1),s(Lt,"iesTexture"),s(Lt,"ies_list",[]);var H=(e=>(e.position="position",e.normal="normal",e.uv="uv",e.TANGENT="TANGENT",e.TEXCOORD_1="TEXCOORD_1",e.TEXCOORD_2="TEXCOORD_2",e.color="color",e.joints0="joints0",e.joints1="joints1",e.weights0="weights0",e.weights1="weights1",e.indices="indices",e.vIndex="vIndex",e.a_morphPositions_0="a_morphPositions_0",e))(H||{}),ge=(e=>(e[e.NONE=0]="NONE",e[e.ABOVE=1]="ABOVE",e[e.ALPHA=2]="ALPHA",e[e.NORMAL=3]="NORMAL",e[e.ADD=4]="ADD",e[e.BELOW=5]="BELOW",e[e.ERASE=6]="ERASE",e[e.MUL=7]="MUL",e[e.SCREEN=8]="SCREEN",e[e.DIVD=9]="DIVD",e[e.SOFT_ADD=10]="SOFT_ADD",e))(ge||{}),_o=(e=>(e[e.src_a=0]="src_a",e[e.dest_a=1]="dest_a",e))(_o||{});class Os{static getBlend(e){var t={color:{srcFactor:"src-alpha",dstFactor:"one"},alpha:{srcFactor:"one",dstFactor:"one"}};switch(e){case 0:t.color.srcFactor="one",t.color.dstFactor="zero",t.color.operation="add";break;case 1:t.color.srcFactor="one-minus-src-alpha",t.color.dstFactor="dst-alpha",t.color.operation="add";break;case 4:t.color.srcFactor="one",t.color.dstFactor="one",t.color.operation="add",t.alpha.srcFactor="one",t.alpha.dstFactor="one",t.alpha.operation="add";break;case 2:t.color.srcFactor="src-alpha",t.color.dstFactor="one-minus-src-alpha";break;case 5:t.color.srcFactor="one-minus-src-alpha",t.color.dstFactor="one",t.color.operation="add";break;case 6:t.color.srcFactor="zero",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 7:t.color.srcFactor="dst",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 3:t.color.srcFactor="one",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 10:t.color.srcFactor="one",t.color.dstFactor="one",t.color.operation="max",t.alpha.srcFactor="one",t.alpha.dstFactor="one",t.alpha.operation="add";break;case 8:t.color.srcFactor="one",t.color.dstFactor="one-minus-src",t.color.operation="add"}return t}}class oi{constructor(e=0,t="\0"){s(this,"Type",0),s(this,"Line",0),s(this,"Colume",0),s(this,"Literal",""),this.Type=e,this.Literal=t}isTypeEqual(e){return this.Type==e}isLiteralEqual(e){return this.Literal==e}isBuiltinType(){return 33<this.Type&&this.Type<101}isDataType(){return 1==this.Type||this.isBuiltinType()}isOperation(){return 102<this.Type&&this.Type<127}isAssignOperation(){return 128<this.Type&&this.Type<133}get nOperationPriorityLevel(){switch(this.Type){case 26:case 27:return 1;case 125:return 2;case 110:case 114:return 3;case 105:case 106:return 4;case 103:case 104:return 5;case 115:case 116:return 6;case 119:case 120:case 122:case 123:return 7;case 121:case 124:return 8;case 111:return 9;case 113:return 10;case 112:return 11;case 107:return 12;case 109:return 13;case 108:return 14;case 24:return 15;case 126:case 129:case 130:case 131:case 132:return 16}return 99}}var x=(e=>(e[e.EOF=0]="EOF",e[e.IDENT=1]="IDENT",e[e.VOID=2]="VOID",e[e.CONST=3]="CONST",e[e.LAYOUT=4]="LAYOUT",e[e.PRECISION=5]="PRECISION",e[e.ATTRIBUTE=6]="ATTRIBUTE",e[e.UNIFORM=7]="UNIFORM",e[e.VARYING=8]="VARYING",e[e.INVARIANT=9]="INVARIANT",e[e.IN=10]="IN",e[e.OUT=11]="OUT",e[e.INOUT=12]="INOUT",e[e.IF=13]="IF",e[e.ELSE=14]="ELSE",e[e.FOR=15]="FOR",e[e.WHILE=16]="WHILE",e[e.DO=17]="DO",e[e.BREAK=18]="BREAK",e[e.RETURN=19]="RETURN",e[e.CONTINUE=20]="CONTINUE",e[e.STRUCT=21]="STRUCT",e[e.COMMA=22]="COMMA",e[e.COLON=23]="COLON",e[e.QUEMARK=24]="QUEMARK",e[e.SEMICOLON=25]="SEMICOLON",e[e.LEFTSAMLL=26]="LEFTSAMLL",e[e.RIGHTSAMLL=27]="RIGHTSAMLL",e[e.LEFTMEDI=28]="LEFTMEDI",e[e.RIGHTMEDI=29]="RIGHTMEDI",e[e.LEFTBIG=30]="LEFTBIG",e[e.RIGHTBIG=31]="RIGHTBIG",e[e.LITERAL=32]="LITERAL",e[e.BeginBuiltinType=33]="BeginBuiltinType",e[e.INT=34]="INT",e[e.INT_ARRAY=35]="INT_ARRAY",e[e.UINT=36]="UINT",e[e.UINT_ARRAY=37]="UINT_ARRAY",e[e.BOOL=38]="BOOL",e[e.BOOL_ARRAY=39]="BOOL_ARRAY",e[e.FLOAT=40]="FLOAT",e[e.FLOAT_ARRAY=41]="FLOAT_ARRAY",e[e.DOUBLE=42]="DOUBLE",e[e.DOUBLE_ARRAY=43]="DOUBLE_ARRAY",e[e.VEC2=44]="VEC2",e[e.VEC2_ARRAY=45]="VEC2_ARRAY",e[e.VEC3=46]="VEC3",e[e.VEC3_ARRAY=47]="VEC3_ARRAY",e[e.VEC4=48]="VEC4",e[e.VEC4_ARRAY=49]="VEC4_ARRAY",e[e.BVEC2=50]="BVEC2",e[e.BVEC2_ARRAY=51]="BVEC2_ARRAY",e[e.BVEC3=52]="BVEC3",e[e.BVEC3_ARRAY=53]="BVEC3_ARRAY",e[e.BVEC4=54]="BVEC4",e[e.BVEC4_ARRAY=55]="BVEC4_ARRAY",e[e.IVEC2=56]="IVEC2",e[e.IVEC2_ARRAY=57]="IVEC2_ARRAY",e[e.IVEC3=58]="IVEC3",e[e.IVEC3_ARRAY=59]="IVEC3_ARRAY",e[e.IVEC4=60]="IVEC4",e[e.IVEC4_ARRAY=61]="IVEC4_ARRAY",e[e.UVEC2=62]="UVEC2",e[e.UVEC2_ARRAY=63]="UVEC2_ARRAY",e[e.UVEC3=64]="UVEC3",e[e.UVEC3_ARRAY=65]="UVEC3_ARRAY",e[e.UVEC4=66]="UVEC4",e[e.UVEC4_ARRAY=67]="UVEC4_ARRAY",e[e.MAT2x2=68]="MAT2x2",e[e.MAT2x2_ARRAY=69]="MAT2x2_ARRAY",e[e.MAT2x3=70]="MAT2x3",e[e.MAT2x3_ARRAY=71]="MAT2x3_ARRAY",e[e.MAT2x4=72]="MAT2x4",e[e.MAT2x4_ARRAY=73]="MAT2x4_ARRAY",e[e.MAT3x2=74]="MAT3x2",e[e.MAT3x2_ARRAY=75]="MAT3x2_ARRAY",e[e.MAT3x3=76]="MAT3x3",e[e.MAT3x3_ARRAY=77]="MAT3x3_ARRAY",e[e.MAT3x4=78]="MAT3x4",e[e.MAT3x4_ARRAY=79]="MAT3x4_ARRAY",e[e.MAT4x2=80]="MAT4x2",e[e.MAT4x2_ARRAY=81]="MAT4x2_ARRAY",e[e.MAT4x3=82]="MAT4x3",e[e.MAT4x3_ARRAY=83]="MAT4x3_ARRAY",e[e.MAT4x4=84]="MAT4x4",e[e.MAT4x4_ARRAY=85]="MAT4x4_ARRAY",e[e.SAMPLER=86]="SAMPLER",e[e.SAMPLER_1D=87]="SAMPLER_1D",e[e.SAMPLER_2D=88]="SAMPLER_2D",e[e.SAMPLER_3D=89]="SAMPLER_3D",e[e.SAMPLER_CUBE=90]="SAMPLER_CUBE",e[e.SAMPLER_SHADOW=91]="SAMPLER_SHADOW",e[e.SAMPLER_1D_SHADOW=92]="SAMPLER_1D_SHADOW",e[e.SAMPLER_2D_SHADOW=93]="SAMPLER_2D_SHADOW",e[e.TEXTURE_1D=94]="TEXTURE_1D",e[e.TEXTURE_1D_ARRAY=95]="TEXTURE_1D_ARRAY",e[e.TEXTURE_2D=96]="TEXTURE_2D",e[e.TEXTURE_2D_ARRAY=97]="TEXTURE_2D_ARRAY",e[e.TEXTURE_3D=98]="TEXTURE_3D",e[e.TEXTURE_CUBE=99]="TEXTURE_CUBE",e[e.TEXTURE_CUBE_ARRAY=100]="TEXTURE_CUBE_ARRAY",e[e.EndBuiltinType=101]="EndBuiltinType",e[e.BeginOperation=102]="BeginOperation",e[e.ADD=103]="ADD",e[e.SUB=104]="SUB",e[e.MUL=105]="MUL",e[e.DIV=106]="DIV",e[e.AND=107]="AND",e[e.OR=108]="OR",e[e.XOR=109]="XOR",e[e.NOT=110]="NOT",e[e.BITAND=111]="BITAND",e[e.BITOR=112]="BITOR",e[e.BITXOR=113]="BITXOR",e[e.BITNOT=114]="BITNOT",e[e.BITSHIFT_L=115]="BITSHIFT_L",e[e.BITSHIFT_R=116]="BITSHIFT_R",e[e.INC=117]="INC",e[e.DEC=118]="DEC",e[e.GREATER=119]="GREATER",e[e.GREATEREQUAL=120]="GREATEREQUAL",e[e.EQUAL=121]="EQUAL",e[e.LESS=122]="LESS",e[e.LESSEQUAL=123]="LESSEQUAL",e[e.NOTEQUAL=124]="NOTEQUAL",e[e.DOT=125]="DOT",e[e.ASSIGN=126]="ASSIGN",e[e.EndOperation=127]="EndOperation",e[e.BeginAssignOperation=128]="BeginAssignOperation",e[e.ADDASSIGN=129]="ADDASSIGN",e[e.SUBASSIGN=130]="SUBASSIGN",e[e.MULASSIGN=131]="MULASSIGN",e[e.DIVASSIGN=132]="DIVASSIGN",e[e.EndAssignOperation=133]="EndAssignOperation",e))(x||{});class Vr{constructor(e){s(this,"_char"),s(this,"_line"),s(this,"_column"),s(this,"_source"),s(this,"_currPosition"),s(this,"_nextPosition"),this.reset(e)}reset(e){this._char="",this._line=0,this._column=0,this._source=e,this._currPosition=0,this._nextPosition=0}get source(){return this._source}getChar(){return this._char}get currPosition(){return this._currPosition}peekChar(){return this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition]}readChar(){this._char=this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition],this._char!==`
`?this._column++:(this._line++,this._column=0),this._currPosition=this._nextPosition,this._nextPosition++}readCharAndSkipWhitespace(){this.readChar(),this.skipWhitespace()}readIdentifier(){for(var e=this._currPosition;this.isIdentifier(this._char);)this.readChar();return this._source.substring(e,this._currPosition)}isIdentifier(e){e=e.charCodeAt(0);return 97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57||95==e}skipWhitespace(){for(;this.IsWhitespace(this._char);)this.readChar()}IsWhitespace(e){return" "===e||"\t"===e||"\r"===e||e===`
`}skipComment(){for(;this._char!==`
`&&"\0"!==this._char;)this.readChar();this.skipWhitespace()}skipMultilineComment(){if("/"===this._char||"*"===this.peekChar()){this.readChar(),this.readChar();for(let e=1;0<e&&"\0"!==this._char;){if(this.readChar(),"/"===this._char&&"*"===this.peekChar()){e++,this.readChar();continue}if("*"===this._char&&"/"===this.peekChar()){e--,this.readChar();continue}}this.readChar(),this.readChar(),this.skipWhitespace()}}isDigit(e){e=e.charCodeAt(0);return 48<=e&&e<=57}readNumber(){for(var e=this._currPosition;this.isDigit(this._char);)this.readChar();if("."===this._char)for(this.readChar();this.isDigit(this._char);)this.readChar();return this._source.substring(e,this._currPosition)}readValue(){return this.isDigit(this._char)?this.readNumber():this.readIdentifier()}readLine(){var e=this._currPosition,t=this._source.indexOf(`
`,this._currPosition);return-1==t&&(t=this._source.length),this._line++,this._column=0,this._currPosition=t,this._nextPosition=t+1,this._source.substring(e,t+1)}}class vo extends Vr{constructor(e){super(e.source),s(this,"_tokenPosition",0),s(this,"_tokens",[]),this.parse()}skipToken(e){this._tokenPosition+=e}peekToken(e){return this._tokenPosition+e>=this._tokens.length?new oi(x.EOF,"\0"):this._tokens[this._tokenPosition+e]}GetNextToken(){var e;return this._tokenPosition>=this._tokens.length?new oi(x.EOF,"\0"):(e=this._tokens[this._tokenPosition],this._tokenPosition++,e)}get currTokenPosition(){return this._tokenPosition}parse(){var e;for(this.readChar(),this._tokens=new Array;e=this.nextToken(),this._tokens.push(e),e.Type!=x.EOF;);}nextToken(){if(this.skipWhitespace(),"/"===this._char){if("/"===this.peekChar())return this.skipComment(),this.nextToken();if("*"===this.peekChar())return this.skipMultilineComment(),this.nextToken()}var e=new oi;switch(e.Line=this._line,e.Colume=this._column,this._char){case"\0":e.Type=x.EOF,e.Literal="EOF";break;case".":e.Type=x.DOT,e.Literal=".";break;case",":e.Type=x.COMMA,e.Literal=",";break;case":":e.Type=x.COLON,e.Literal=":";break;case"?":e.Type=x.QUEMARK,e.Literal="?";break;case";":e.Type=x.SEMICOLON,e.Literal=";";break;case"(":e.Type=x.LEFTSAMLL,e.Literal="(";break;case")":e.Type=x.RIGHTSAMLL,e.Literal=")";break;case"[":e.Type=x.LEFTMEDI,e.Literal="[";break;case"]":e.Type=x.RIGHTMEDI,e.Literal="]";break;case"{":e.Type=x.LEFTBIG,e.Literal="{";break;case"}":e.Type=x.RIGHTBIG,e.Literal="}";break;case"+":"+"===this.peekChar()?(this.readChar(),e.Type=x.INC,e.Literal="++"):"="===this.peekChar()?(this.readChar(),e.Type=x.ADDASSIGN,e.Literal="+="):(e.Type=x.ADD,e.Literal="+");break;case"-":"-"===this.peekChar()?(this.readChar(),e.Type=x.DEC,e.Literal="--"):"="===this.peekChar()?(this.readChar(),e.Type=x.SUBASSIGN,e.Literal="-="):(e.Type=x.SUB,e.Literal="-");break;case"*":"="===this.peekChar()?(this.readChar(),e.Type=x.MULASSIGN,e.Literal="*="):(e.Type=x.MUL,e.Literal="*");break;case"/":"="===this.peekChar()?(this.readChar(),e.Type=x.DIVASSIGN,e.Literal="/="):(e.Type=x.DIV,e.Literal="/");break;case"&":"&"===this.peekChar()?(this.readChar(),e.Type=x.AND,e.Literal="&&"):(e.Type=x.BITAND,e.Literal="&");break;case"|":"|"===this.peekChar()?(this.readChar(),e.Type=x.OR,e.Literal="||"):(e.Type=x.BITOR,e.Literal="&");break;case"^":e.Type=x.BITXOR,e.Literal="^";break;case"!":"="===this.peekChar()?(this.readChar(),e.Type=x.NOTEQUAL,e.Literal="!="):(e.Type=x.NOT,e.Literal="!");break;case">":"="===this.peekChar()?(this.readChar(),e.Type=x.GREATEREQUAL,e.Literal=">="):">"===this.peekChar()?(this.readChar(),e.Type=x.BITSHIFT_R,e.Literal=">>"):(e.Type=x.GREATER,e.Literal=">");break;case"=":"="===this.peekChar()?(this.readChar(),e.Type=x.EQUAL,e.Literal="=="):(e.Type=x.ASSIGN,e.Literal="=");break;case"<":"="===this.peekChar()?(this.readChar(),e.Type=x.LESSEQUAL,e.Literal="<="):"<"===this.peekChar()?(this.readChar(),e.Type=x.BITSHIFT_L,e.Literal="<<"):(e.Type=x.LESS,e.Literal="<");break;default:return this.isDigit(this._char)?this.readDecimal():(e.Literal=this.readIdentifier(),e.Type=this.lookupIdentifier(e.Literal),"["==this.getChar()&&"]"==this.peekChar()&&e.isBuiltinType()&&(e.Type++,e.Literal+="[]",this.readChar(),this.readChar()),e)}return this.readChar(),e}readDecimal(){var e=new oi,t=(e.Line=this._line,e.Colume=this._column,e.Type=x.LITERAL,this.readNumber());return"e"===this._char?(e.Literal=t+this._char,this.readChar(),e.Literal+=this._char,this.readChar(),e.Literal+=this.readNumber(),e.Type=x.LITERAL):"u"===this._char?(this.readChar(),e.Type=x.LITERAL,e.Literal=t+"u"):"f"===this._char?(this.readChar(),e.Type=x.LITERAL,e.Literal=t+"f"):(e.Type=x.LITERAL,e.Literal=t),e}lookupIdentifier(e){switch(e){case"void":return x.VOID;case"int":return x.INT;case"uint":return x.UINT;case"bool":case"true":case"false":return x.BOOL;case"float":return x.FLOAT;case"vec2":return x.VEC2;case"vec3":return x.VEC3;case"vec4":return x.VEC4;case"bvec2":return x.BVEC2;case"bvec3":return x.BVEC3;case"bvec4":return x.BVEC4;case"ivec2":return x.IVEC2;case"ivec3":return x.IVEC3;case"ivec4":return x.IVEC4;case"uvec2":return x.UVEC2;case"uvec3":return x.UVEC3;case"uvec4":return x.UVEC4;case"mat2":case"mat2x2":return x.MAT2x2;case"mat2x3":return x.MAT2x3;case"mat2x4":return x.MAT2x4;case"mat3":return x.MAT3x3;case"mat3x2":return x.MAT3x2;case"mat3x3":return x.MAT3x3;case"mat3x4":return x.MAT3x4;case"mat4":return x.MAT4x4;case"mat4x2":return x.MAT4x2;case"mat4x3":return x.MAT4x3;case"mat4x4":return x.MAT4x4;case"sampler":return x.SAMPLER;case"sampler1D":return x.SAMPLER_1D;case"sampler2D":return x.SAMPLER_2D;case"sampler3D":return x.SAMPLER_3D;case"samplerCube":return x.SAMPLER_CUBE;case"samplerShadow":return x.SAMPLER_SHADOW;case"sampler1DShadow":return x.SAMPLER_1D_SHADOW;case"sampler2DShadow":return x.SAMPLER_2D_SHADOW;case"texture1D":return x.TEXTURE_1D;case"texture2D":return x.TEXTURE_2D;case"texture3D":return x.TEXTURE_3D;case"textureCube":return x.TEXTURE_CUBE;case"texture1DArray":return x.TEXTURE_1D_ARRAY;case"texture2DArray":return x.TEXTURE_2D_ARRAY;case"textureCubeArray":return x.TEXTURE_CUBE_ARRAY;case"const":return x.CONST;case"layout":return x.LAYOUT;case"precision":return x.PRECISION;case"attribute":return x.ATTRIBUTE;case"uniform":return x.UNIFORM;case"varying":return x.VARYING;case"invariant":return x.INVARIANT;case"in":return x.IN;case"out":return x.OUT;case"inout":return x.INOUT;case"if":return x.IF;case"else":return x.ELSE;case"for":return x.FOR;case"while":return x.WHILE;case"do":return x.DO;case"break":return x.BREAK;case"return":return x.RETURN;case"continue":return x.CONTINUE;case"struct":return x.STRUCT}return x.IDENT}}class yo{constructor(){s(this,"name",""),s(this,"value",""),s(this,"args",[])}}class So extends Vr{constructor(e){super(e),s(this,"_result"),s(this,"_skipLine"),s(this,"_definitionTables"),this._result="",this._skipLine=!1,this._definitionTables=new Map,this.parse()}parse(){for(this.readChar();"\0"!==this._char;){if(this.skipWhitespace(),"/"===this._char){if("/"===this.peekChar()){this.skipComment();continue}if("*"===this.peekChar()){this.skipMultilineComment();continue}}if("#"===this._char){this.readCharAndSkipWhitespace();var e=this.readIdentifier();switch(e){case"version":this.readLine().trim();break;case"define":this.readCharAndSkipWhitespace();var t=this.readIdentifier();if("("===this.getChar()){var r=new yo;if(this.readCharAndSkipWhitespace(),")"!==this.getChar())do{var i=this.readIdentifier()}while(r.args.push(i),this.skipWhitespace(),","===this.getChar()&&this.readCharAndSkipWhitespace(),")"!==this.getChar());this.readCharAndSkipWhitespace(),r.name=t,r.value=this.readLine().trim(),this._definitionTables.set(t,r),this.readCharAndSkipWhitespace()}else{let e=this.readLine().trim();"="==e[0]&&(e=e.substring(1)),this._definitionTables.set(t,e)}break;case"if":t=this.readLine().trim();"0"==t||"false"==t?this._skipLine=!0:!this._definitionTables.has(t)||"0"!=(t=this._definitionTables.get(t))&&"false"!=t||(this._skipLine=!0);break;case"ifdef":this.readCharAndSkipWhitespace();var a=this.readIdentifier();this._skipLine=!this._definitionTables.has(a);break;case"else":this._skipLine=!this._skipLine;break;case"endif":this._skipLine=!1;break;default:throw"Unknown preprocessing command:"+e}}else{var s=this.readLine();if(!this._skipLine){for(var o of this._definitionTables.keys()){var n=s.indexOf(o);if(-1!=n){var h=this._definitionTables.get(o);if("string"==typeof h)s=s.replace(o,h);else{var l=h,u=new Vr(s.substring(n+o.length));if(u.readCharAndSkipWhitespace(),"("===u.getChar()){u.readCharAndSkipWhitespace();for(let e=1;"\0"!==u.getChar()&&0<e;){switch(u.getChar()){case"(":e++;break;case")":e--}u.readCharAndSkipWhitespace()}}h=n+o.length+u.currPosition,o=s.substring(n,h).trim();if(0<l.args.length){let t=[],e=o.substring(o.indexOf("(")+1,o.lastIndexOf(")")).trim(),r=(0<e.length&&(t=this.parseArgs(e)),l.value.substring(l.value.indexOf("(")));for(let e=0;e<l.args.length;e++)r=r.replace(l.args[e],t[e]);r=l.value.substring(0,l.value.indexOf("("))+r,s=s.replace(o,r)}else s=s.replace(o,l.value)}}}this._result+=s}this.readChar()}}}get source(){return this._result}parseArgs(e){let t=[],r=0,i=new Vr(e),a=i.currPosition;if(i.readCharAndSkipWhitespace(),"\0"!==i.getChar())for(i.readCharAndSkipWhitespace();"\0"!==i.getChar();){switch(i.getChar()){case"(":r++;break;case")":r--;break;case",":var s;0==r&&(s=e.substring(a,i.currPosition),t.push(s),a=i.currPosition+1)}i.readCharAndSkipWhitespace()}var o;return a<i.currPosition&&(o=e.substring(a,i.currPosition),t.push(o)),t}}class bo{constructor(e){s(this,"result"),s(this,"ASTRoot"),s(this,"_syntax"),this.result="",this._syntax=e,this.ASTRoot=e.ASTRoot}generateWGSL(){var e,t,r,i,a,s,o=new As,n=new Mo,h=[],l=[],u=[];for(e of this.ASTRoot.nodes)if(e instanceof Ai)if("in"==e.scope)if(e.nodes[0]instanceof _e){o.layoutsIn.push(e);var c=new os;c.name=e.nodes[0].name,c.type=e.nodes[0].type,c.locationID=Number.parseInt(e.qualifier.get("location")),n.inputAttribute.push(c)}else{if(!e.qualifier.has("local_size_x"))throw"not impl";o.workGroupSize=e}else if("out"==e.scope){if(o.layoutsOut.push(e),!(e.nodes[0]instanceof _e))throw"not impl";c=new os;c.name=e.nodes[0].name,c.type=e.nodes[0].type,c.locationID=Number.parseInt(e.qualifier.get("location")),n.outputAttribute.push(c)}else if("uniform"==e.scope)if(l.push(e),e.nodes[0]instanceof _e){var d=new ns;d.name=e.nodes[0].name,d.type=e.nodes[0].type,d.setID=Number.parseInt(e.qualifier.get("set")),d.bindingID=Number.parseInt(e.qualifier.get("binding")),n.uniformInfo.push(d)}else{if(!(e.nodes[0]instanceof zt))throw"not impl";d=new ns;d.name="unif"+n.uniformInfo.length.toString(),d.type=e.nodes[0].name,d.setID=Number.parseInt(e.qualifier.get("set")),d.bindingID=Number.parseInt(e.qualifier.get("binding")),n.uniformInfo.push(d)}else"buffer"==e.scope&&h.push(e);else u.push(e);o.stage="fragment";let f=0,p=new Vr(""),m=this._syntax.lexer.source,g=new Map;for(;-1!=(f=m.indexOf("gl_",f));){p.reset(m.substring(f,f+32)),p.readChar();var v=p.readIdentifier();if(f+=v.length,!g.has(v))switch(g.set(v,v),v){case"gl_InstanceID":o.stage="vertex",o.builtinIn.push("@builtin(instance_index) gl_InstanceID: u32");break;case"gl_Position":o.stage="vertex",o.builtinOut.push("@builtin(position) gl_Position: vec4<f32>"),o.addIdentifier("gl_Position","stout.gl_Position");break;case"gl_VertexIndex":o.stage="vertex",o.builtinIn.push("@builtin(vertex_index) gl_VertexIndex: u32");break;case"gl_FrontFacing":o.stage="fragment",o.builtinIn.push("@builtin(front_facing) gl_FrontFacing: bool");break;case"gl_FragDepth":o.stage="fragment",o.builtinOut.push("@builtin(frag_depth) gl_FragDepth: f32"),o.addIdentifier("gl_FragDepth","stout.gl_FragDepth");break;case"gl_WorkGroupID":o.stage="compute",o.builtinIn.push("@builtin(workgroup_id) gl_WorkGroupID: vec3<u32>");break;case"gl_NumWorkGroups":o.stage="compute",o.builtinIn.push("@builtin(num_workgroups) gl_NumWorkGroups: vec3<u32>");break;case"gl_LocalInvocationID":o.stage="compute",o.builtinIn.push("@builtin(local_invocation_id) gl_LocalInvocationID: vec3<u32>");break;case"gl_LocalInvocationIndex":o.stage="compute",o.builtinIn.push("@builtin(local_invocation_index) gl_LocalInvocationIndex: u32");break;case"gl_GlobalInvocationID":o.stage="compute",o.builtinIn.push("@builtin(global_invocation_id) gl_GlobalInvocationID: vec3<u32>");break;default:throw"Unprocessed built-in variables: "+v}}for(t of l)t.nodes[0]instanceof zt&&(n.sourceCode+=t.nodes[0].formatToWGSL(o,0),n.sourceCode+=`\r
`);for(r of l)n.sourceCode+=r.formatToWGSL(o,0);n.sourceCode+=`\r
`;for(i of h)i.nodes[0]instanceof zt&&(n.sourceCode+=i.nodes[0].formatToWGSL(o,0),n.sourceCode+=`\r
`);for(a of h)n.sourceCode+=a.formatToWGSL(o,0);n.sourceCode+=`\r
`;for(s of u)n.sourceCode+=s.formatToWGSL(o,0),s instanceof _e&&(n.sourceCode+=`;\r
`);return n}}class As{constructor(e){s(this,"_stage","fragment"),s(this,"_builtinIn",[]),s(this,"_builtinOut",[]),s(this,"_layoutsIn",[]),s(this,"_layoutsOut",[]),s(this,"_layoutUniformCount",0),s(this,"_workGroupSize"),s(this,"_parentContext"),s(this,"_identifierEnv",new Map),this._parentContext=e}get stage(){return null!=this.parentContext?this.parentContext.stage:this._stage}set stage(e){null!=this.parentContext&&(this.parentContext.stage=e),this._stage=e}get builtinIn(){return null!=this.parentContext?this.parentContext.builtinIn:this._builtinIn}get builtinOut(){return null!=this.parentContext?this.parentContext.builtinOut:this._builtinOut}get layoutsIn(){return null!=this.parentContext?this.parentContext.layoutsIn:this._layoutsIn}get layoutsOut(){return null!=this.parentContext?this.parentContext.layoutsOut:this._layoutsOut}get layoutUniformCount(){return null!=this.parentContext?this.parentContext.layoutUniformCount:this._layoutUniformCount}set layoutUniformCount(e){null!=this.parentContext?this.parentContext.layoutUniformCount=e:this._layoutUniformCount=e}get workGroupSize(){return null!=this.parentContext?this.parentContext.workGroupSize:this._workGroupSize}set workGroupSize(e){null!=this.parentContext&&(this.parentContext.workGroupSize=e),this._workGroupSize=e}get parentContext(){return this._parentContext}findIdentifier(e){return this._identifierEnv.has(e)?this._identifierEnv.get(e):null!=this._parentContext?this._parentContext.findIdentifier(e):e}addIdentifier(e,t){this._identifierEnv.set(e,t)}hasIdentifier(e){return this._identifierEnv.has(e)}}class le{constructor(){s(this,"nodes",[])}addNode(e){this.nodes.push(e)}formatToWGSL(e,t){return""}}class zt extends le{constructor(e){super(),s(this,"name",""),s(this,"fields",[]),this.name=e}static parse(e){if(e.peekToken(0).Type!=x.IDENT||e.peekToken(1).Type!=x.LEFTBIG)throw"Error parsing structure: Unexpected character";var t=new zt(e.peekToken(0).Literal);for(e.skipToken(2);e.peekToken(0).Type!=x.RIGHTBIG;){var r=_e.parse(e);t.fields.push(r)}return e.peekToken(0).Type==x.RIGHTBIG&&e.skipToken(1),e.peekToken(0).Type==x.SEMICOLON&&e.skipToken(1),t}formatToWGSL(e,t){let r="",i=t<=0?"":"    ".repeat(t);r+=i+"struct "+this.name+` {\r
`;for(var a of this.fields)a.arraySize.nodes.length<=0?r+=i+"  "+a.name+": "+at(a.type)+`,\r
`:a.arraySize.nodes[0]instanceof Vt?r+=i+"  "+a.name+": array<"+at(a.type)+", "+a.arraySize.nodes[0].value+`>,\r
`:r+=i+"  "+a.name+": array<"+at(a.type)+", "+a.arraySize.nodes[0].formatToWGSL(e,0)+`>,\r
`;return r+=i+`};\r
`}}class ba extends le{constructor(e,t,r,i){super(),s(this,"name"),s(this,"args"),s(this,"body"),s(this,"returnType"),this.name=e,this.args=t,this.body=r,this.returnType=i}static parse(e){if(!e.peekToken(0).isBuiltinType()&&e.peekToken(0).Type!=x.VOID||e.peekToken(1).Type!=x.IDENT||e.peekToken(2).Type!=x.LEFTSAMLL)throw"Error parsing function: Unexpected character";var t=e.peekToken(0).Literal,r=e.peekToken(1).Literal,i=(e.skipToken(2),new Array);if(e.peekToken(0).Type!=x.LEFTSAMLL)throw"Error parsing function parameter list: Unexpected character";for(e.skipToken(1);e.peekToken(0).Type!=x.EOF;){if(e.peekToken(0).Type==x.RIGHTSAMLL){e.skipToken(1);break}e.peekToken(0).Type!=x.INOUT&&e.peekToken(0).Type!=x.IN&&e.peekToken(0).Type!=x.OUT||e.skipToken(1);var a=_e.parse(e);i.push(a),e.peekToken(0).Type==x.COMMA&&e.skipToken(1)}var s=gt.parse(e);return new ba(r,i,s,t)}formatToWGSL(t,e){let r="",i=e<=0?"":"    ".repeat(e),a,s=0<t.layoutsOut.length||0<t.builtinOut.length;switch(t.stage){case"compute":a="ComputeOutput";break;case"vertex":a="VertexOutput";break;case"fragment":a="FragmentOutput";break;default:a="StructOutput"}if("main"==this.name&&s){r+="struct "+a+` {\r
`;for(var o of t.layoutsOut){var n;o.nodes[0]instanceof _e&&(n=o.nodes[0],1==o.qualifier.size&&o.qualifier.has("location")&&(r+="  @location("+o.qualifier.get("location")+") "),r+=n.name+": "+at(n.type)+`,\r
`,t.addIdentifier(n.name,"stout."+n.name))}var h;for(h of t.builtinOut)r+="  "+h+`,\r
`;r+=`};\r
\r
`}let l="";if("main"==this.name&&(null!=t.workGroupSize?l+="@"+t.stage+" "+t.workGroupSize.formatToWGSL(t,0)+` \r
`:l+="@"+t.stage+`\r
`),t=new As(t),l+=i+"fn "+this.name+"(","main"!=this.name){for(let e=0;e<this.args.length;e++){var u=this.args[e];0<e&&(l+=", "),l+=u.name+": "+at(u.type),t.addIdentifier(u.name,u.name)}l+=") -> "+at(this.returnType)}else{var c,d=t.layoutsIn;for(let e=0;e<d.length;e++){var f,p=d[e];0<e?l+=`,\r
    `:l+=`\r
    `,p.nodes[0]instanceof _e&&(f=p.nodes[0],1==p.qualifier.size&&p.qualifier.has("location")&&(l+="@location("+p.qualifier.get("location")+") "),l+=f.name+": "+at(f.type),t.addIdentifier(f.name,f.name))}0<d.length&&(l+=`,\r
    `);for(c of t.builtinIn)l+=c+`,\r
    `;l+=s?") -> "+a:") "}let m="";"main"==this.name&&s&&(m+="    var stout: "+a+` ;\r
`);for(var g of this.body.nodes)m+=g.formatToWGSL(t,e+1),g instanceof wr||g instanceof yr||g instanceof vr||(m+=`;\r
`);return"main"==this.name&&s&&(m+=`    return stout;\r
`),r=(r=(r+=l+` {\r
`)+m)+(i+`}\r
`)+`\r
`}}class wa extends le{constructor(){super(),s(this,"args",[])}static parse(e){if(e.peekToken(0).Type!=x.LEFTSAMLL)throw"Error parsing function argument table: Unexpected character";e.skipToken(1);for(var t=new wa;e.peekToken(0).Type!=x.EOF;){if(e.peekToken(0).Type==x.RIGHTSAMLL){e.skipToken(1);break}var r=q.parse(e);t.args.push(r),e.peekToken(0).Type==x.COMMA&&e.skipToken(1)}return t}}class _r extends le{constructor(e,t){super(),s(this,"name"),s(this,"args"),this.name=e,this.args=t}static parse(e){var t;if(e.peekToken(0).isDataType()&&e.peekToken(1).Type==x.LEFTSAMLL)return t=e.peekToken(0).Literal,e.skipToken(1),e=wa.parse(e),new _r(t,e);throw"Error parsing function argument table: Unexpected character"}formatToWGSL(t,e){let r="",i=e<=0?"":"    ".repeat(e);if("texture"==this.name&&this.args.args[0].nodes[0]instanceof _r){var a=this.args.args[0].nodes[0];if("sampler2D"==a.name){r+=i+"textureSample(";for(let e=0;e<a.args.args.length;e++){var s=a.args.args[e];0<e&&(r+=", "),r+=s.formatToWGSL(t,0)}for(let e=1;e<this.args.args.length;e++){var o=this.args.args[e];0<e&&(r+=", "),r+=o.formatToWGSL(t,0)}return r+=")"}}r+=i+at(this.name)+"(";for(let e=0;e<this.args.args.length;e++){var n=this.args.args[e];0<e&&(r+=", "),r+=n.formatToWGSL(t,0)}return r+=")"}}class _e extends le{constructor(e,t,r=new q){super(),s(this,"type"),s(this,"name"),s(this,"arraySize"),s(this,"hasIn"),s(this,"hasOut"),s(this,"hasConst"),this.type=e,this.name=t,this.hasIn=!1,this.hasOut=!1,this.hasConst=!1,this.arraySize=r}static parse(e){let t=new _e("",""),r=e.peekToken(0);if(r.Type==x.CONST)e.skipToken(1),t.hasConst=!0;else if(r.Type==x.IN)e.skipToken(1),t.hasIn=!0;else if(r.Type==x.OUT)e.skipToken(1),t.hasOut=!0;else if(r.Type==x.INOUT)e.skipToken(1),t.hasIn=!0,t.hasOut=!0;else if(!r.isDataType())throw"Error parsing declaration expression: Unexpected character("+r.Literal+")";if((r=e.peekToken(0)).isDataType()&&e.peekToken(1).Type==x.LEFTMEDI){if(t.type=r.Literal,e.skipToken(2),t.arraySize=q.parse(e),e.peekToken(0).Type==x.RIGHTMEDI&&e.skipToken(1),e.peekToken(0).Type!=x.IDENT)throw"Unexpected";t.name=e.peekToken(0).Literal,e.skipToken(1)}else if(r.isDataType()&&e.peekToken(1).Type==x.IDENT&&e.peekToken(2).Type==x.LEFTMEDI)t.type=e.peekToken(0).Literal,t.name=e.peekToken(1).Literal,e.skipToken(3),e.peekToken(0).Type!=x.RIGHTMEDI&&(t.arraySize=q.parse(e),e.peekToken(0).Type!=x.RIGHTMEDI)||e.skipToken(1);else{if(!r.isDataType()||e.peekToken(1).Type!=x.IDENT)throw"Error parsing declaration expression: Unexpected character("+r.Literal+")";t.type=e.peekToken(0).Literal,t.name=e.peekToken(1).Literal,e.skipToken(2)}var i,a,s;if((r=e.peekToken(0)).Type==x.SEMICOLON)e.skipToken(1);else if(r.Type!=x.RIGHTSAMLL)if(r.Type==x.ASSIGN)i=e.peekToken(0),e.skipToken(1),a=new Gt(t.name),s=q.parse(e),e.peekToken(0).Type==x.SEMICOLON&&e.skipToken(1),t.addNode(new Jt(i,a,s));else{if(r.Type!=x.COMMA)throw"Error parsing declaration expression: Unexpected character("+e.peekToken(0).Literal+")";for(;e.peekToken(0).Type==x.COMMA&&e.peekToken(1).Type==x.IDENT;){var o=new _e(t.type,e.peekToken(1).Literal);t.addNode(o),e.skipToken(2),e.peekToken(0).Type==x.ASSIGN&&(e.skipToken(-1),o.addNode(q.parse(e)))}}return t}formatToWGSL(e,t){let r="",i=t<=0?"":"    ".repeat(t);if(this.hasConst?r+=i+"let ":r+=i+"var ",e.addIdentifier(this.name,this.name),this.arraySize.nodes.length<=0?r+=this.name+": "+at(this.type):this.arraySize.nodes[0]instanceof Vt?r+=this.name+": array<"+at(this.type)+", "+this.arraySize.nodes[0].value+">":r+=this.name+": array<"+at(this.type)+", "+this.arraySize.nodes[0].formatToWGSL(e,0)+">",0<this.nodes.length&&this.nodes[0]instanceof Jt)r+=" = "+this.nodes[0].rightValue.formatToWGSL(e,0);else if(0<this.nodes.length&&this.nodes[0]instanceof q&&this.nodes[0].nodes[0]instanceof Jt)r+=" = "+this.nodes[0].nodes[0].rightValue.formatToWGSL(e,0);else if(0<this.nodes.length&&this.nodes[0]instanceof _e){r+=`;\r
`;for(var a of this.nodes)r+=a.formatToWGSL(e,t)+`;\r
`}else r+=`;\r
`;return r}}class vr extends le{constructor(e,t,r,i){super(),s(this,"expression1"),s(this,"condition"),s(this,"expression2"),s(this,"loopBody"),this.expression1=e,this.condition=t,this.expression2=r,this.loopBody=i}static parse(a){if(a.peekToken(0).Type!=x.FOR||a.peekToken(1).Type!=x.LEFTSAMLL)throw"Error parsing for loop: Unexpected character";{a.skipToken(2);let e;a.peekToken(0).Type==x.SEMICOLON?(a.skipToken(1),e=new q):(a.peekToken(0).isDataType()&&a.peekToken(1).Type==x.IDENT&&a.peekToken(2).Type==x.ASSIGN?(e=new _e(a.peekToken(0).Literal,a.peekToken(1).Literal),a.skipToken(1),e.addNode(q.parse(a))):e=q.parse(a),a.peekToken(0).Type==x.SEMICOLON&&a.skipToken(1));let t;a.peekToken(0).Type==x.SEMICOLON?(a.skipToken(1),t=new q):(t=q.parse(a),a.peekToken(0).Type==x.SEMICOLON&&a.skipToken(1));let r;a.peekToken(0).Type==x.SEMICOLON?(a.skipToken(1),r=new q):(r=q.parse(a),a.peekToken(0).Type==x.SEMICOLON&&a.skipToken(1)),a.peekToken(0).Type==x.RIGHTSAMLL&&a.skipToken(1);let i;return i=a.peekToken(0).Type==x.LEFTBIG?gt.parse(a):new gt,new vr(e,t,r,i)}}formatToWGSL(e,t){let r="",i=t<=0?"":"    ".repeat(t);r=(r=(r=(r+=i+"for (")+this.expression1.formatToWGSL(e,0)+"; ")+this.condition.formatToWGSL(e,0)+"; ")+this.expression2.formatToWGSL(e,0)+")"+` { \r
`;for(var a of this.loopBody.nodes)r+=a.formatToWGSL(e,t+1),a instanceof wr||a instanceof yr||a instanceof vr||(r+=`;\r
`);return r+=i+`} \r
`}}class yr extends le{constructor(e,t){super(),s(this,"conditionExpr"),s(this,"loopBody"),this.conditionExpr=e,this.loopBody=t}static parse(e){var t;if(e.peekToken(0).Type==x.WHILE)return e.skipToken(1),e.peekToken(0).Type==x.LEFTSAMLL&&e.skipToken(1),t=q.parse(e),e.peekToken(0).Type==x.RIGHTSAMLL&&e.skipToken(1),e=gt.parse(e),new yr(t,e);throw"Error parsing while loop: Unexpected character"}formatToWGSL(e,t){let r="",i=t<=0?"":"    ".repeat(t);r=(r+=i+`loop {\r
`)+i+"    if ("+this.conditionExpr.formatToWGSL(e,0)+`) { break; }\r
\r
`;for(var a of this.loopBody.nodes)r+=a.formatToWGSL(e,t+1),a instanceof wr||a instanceof yr||a instanceof vr||(r+=`;\r
`);return r+=i+`}\r
`}}class oc extends le{constructor(){super()}}class wr extends le{constructor(e,t,r){super(),s(this,"conditionExpr"),s(this,"trueBranch"),s(this,"falseBranch"),this.conditionExpr=e,this.trueBranch=t,this.falseBranch=r}static parse(i){if(i.peekToken(0).Type!=x.IF)throw"Error parsing IF branch statement: Unexpected character";{i.skipToken(1),i.peekToken(0).Type==x.LEFTSAMLL&&i.skipToken(1);let e=q.parse(i),t,r=new gt;if(i.peekToken(0).Type==x.RIGHTSAMLL&&i.skipToken(1),i.peekToken(0).Type==x.LEFTBIG?t=gt.parse(i):(t=new gt,i.peekToken(0).Type==x.RETURN?t.addNode(Oi.parse(i)):t.addNode(q.parse(i))),i.peekToken(0).Type==x.ELSE){if(i.skipToken(1),i.peekToken(0).Type!=x.LEFTBIG)throw"not impl";r=gt.parse(i)}return new wr(e,t,r)}}formatToWGSL(e,t){let r="",i=t<=0?"":"    ".repeat(t);r+=i+"if ("+this.conditionExpr.formatToWGSL(e,0)+`) {\r
`;for(var a of this.trueBranch.nodes)r+=a.formatToWGSL(e,t+1)+`;\r
`;if(0<this.falseBranch.nodes.length){r+=i+`} else {\r
`;for(var s of this.falseBranch.nodes)r+=s.formatToWGSL(e,t+1)+`;\r
`}return r+=i+`}\r
`}}class q extends le{constructor(){super()}static parse(e){let t=new Array,r=new Array,i=0;for(;e.peekToken(0).Type!=x.EOF;){var a,s,o,n=e.peekToken(0);if(n.Type==x.SEMICOLON||n.Type==x.RIGHTMEDI||n.Type==x.COMMA||n.Type==x.COLON||n.Type==x.RIGHTBIG)break;if(n.isOperation())n.isOperation()&&(n.Type==x.INC||n.Type==x.DEC?(a=n,e.skipToken(1),s=q.parse(e),r.push(new Nr(a,void 0,s))):(0<t.length&&(t[t.length-1].nOperationPriorityLevel<=n.nOperationPriorityLevel?q.unionOperation(t,r):0<t.length&&"-"==t[t.length-1].Literal&&(a=t.pop(),s=r.pop(),r.push(new Nr(a,void 0,s)))),t.push(n),e.skipToken(1)));else if(n.Type==x.LITERAL)r.push(new Vt(n.Literal)),e.skipToken(1);else if(n.Type==x.LEFTSAMLL)i++,t.push(n),e.skipToken(1);else if(n.Type==x.RIGHTSAMLL){if(i<=0)break;for(i--;q.unionOperation(t,r););t[t.length-1].Type==x.LEFTSAMLL&&(t.pop(),(o=new wo).addNode(r.pop()),r.push(o)),e.skipToken(1)}else if(n.Type==x.IDENT)e.peekToken(1).Type==x.INC||e.peekToken(1).Type==x.DEC?(o=e.peekToken(1),h=new Gt(n.Literal),r.push(new Nr(o,h,void 0)),e.skipToken(2)):e.peekToken(1).Type==x.LEFTSAMLL?r.push(_r.parse(e)):e.peekToken(1).Type==x.DOT?r.push(wi.parse(e)):e.peekToken(1).Type!=x.LEFTMEDI?(r.push(new Gt(n.Literal)),e.skipToken(1)):r.push(Sr.parse(e));else if(n.isBuiltinType()&&e.peekToken(1).Type==x.LEFTSAMLL)r.push(_r.parse(e));else if(n.isAssignOperation()){var h=n,l=(e.skipToken(1),r.pop()),u=q.parse(e);r.push(new Jt(h,l,u))}else if(n.Type==x.LEFTBIG&&(e.peekToken(1).Type==x.LITERAL||e.peekToken(1).Type==x.SUB&&e.peekToken(2).Type==x.LITERAL))r.push(bi.parse(e));else if(n.Type==x.QUEMARK){0<t.length&&t[t.length-1].nOperationPriorityLevel<=n.nOperationPriorityLevel&&q.unionOperation(t,r),e.skipToken(1);var l=r.pop(),u=q.parse(e),c=(e.peekToken(0).Type==x.COLON&&e.skipToken(1),q.parse(e));if(r.push(new To(l,u,c)),e.peekToken(-1).Type==x.SEMICOLON)break}else{if(n.Type!=x.LEFTMEDI)throw"An unexpected character";e.skipToken(1);c=q.parse(e),n=(e.peekToken(0).Type==x.RIGHTMEDI&&e.skipToken(1),r.pop());r.push(new Sr(n,c))}}for(;0<t.length&&q.unionOperation(t,r););var d;if(t.length<=0&&1==r.length)return(d=new q).addNode(r.pop()),d;throw"Error parsing expression: Unexpected character("+e.peekToken(0).Literal+")"}formatToWGSL(e,t){return this.nodes[0].formatToWGSL(e,t)}static unionOperation(e,t){var r,i;return e.length<0||t.length<2?0<e.length&&"-"==e[e.length-1].Literal&&(r=e.pop(),i=t.pop(),t.push(new Nr(r,void 0,i)),!0):!!e[e.length-1].isOperation()&&(r=t.pop(),i=e.pop(),e=t.pop(),i.Type==x.DOT?t.push(new wi(e,r)):t.push(new Jt(i,e,r)),!0)}}class wo extends le{constructor(){super()}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+"("+this.nodes[0].formatToWGSL(e,0)+")"}}class Gt extends le{constructor(e){super(),s(this,"name"),this.name=e}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+e.findIdentifier(this.name)}}class Vt extends le{constructor(e){super(),s(this,"value"),this.value=e}static parse(e){var t,r=e.peekToken(0);if(r.Type==x.SUB&&e.peekToken(1).Type==x.LITERAL)return t=new Vt("-"+e.peekToken(1).Literal),e.skipToken(2),t;if(r.Type==x.LITERAL)return t=new Vt(r.Literal),e.skipToken(1),t;throw"Error parsing literal constants: Unexpected characters("+r.Literal+")"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.value}}class bi extends Vt{constructor(e){super(""),s(this,"arrayValue"),this.arrayValue=e}static parse(e){if(e.peekToken(0).Type==x.LEFTBIG&&e.peekToken(1).Type==x.LITERAL||e.peekToken(0).Type==x.LEFTBIG&&e.peekToken(1).Type==x.SUB&&e.peekToken(2).Type==x.LITERAL){e.skipToken(1);for(var t=[];e.peekToken(0).Type!=x.RIGHTBIG;)if(e.peekToken(0).Type==x.LEFTSAMLL)t.push(bi.parse(e));else{if(t.push(Vt.parse(e)),e.peekToken(0).Type!=x.COMMA){if(e.peekToken(0).Type!=x.RIGHTBIG)throw"Error parsing array constants: Unexpected characters";e.skipToken(1);break}e.skipToken(1)}return new bi(t)}throw"Error parsing array constants: Unexpected characters"}formatToWGSL(t,e){let r="",i=e<=0?"":"    ".repeat(e);this.arrayValue[0].value.includes(".")?r+=i+"array<f32, "+this.arrayValue.length.toString()+">(":r+=i+"array<i32, "+this.arrayValue.length.toString()+">(";for(let e=0;e<this.arrayValue.length;e++)0<e&&(r+=", "),r+=this.arrayValue[e].formatToWGSL(t,0);return r+=")"}}class lc extends le{constructor(){super()}}class hc extends le{constructor(){super()}}class Ta extends le{constructor(){super()}static parse(e){if(e.peekToken(0).Type==x.CONTINUE&&e.peekToken(1).Type==x.SEMICOLON)return e.skipToken(2),new Ta;throw"Error parsing continue: Unexpected character"}formatToWGSL(e,t){var r="";return r+=(t<=0?"":"    ".repeat(t))+"continue"}}class Oi extends le{constructor(e){super(),s(this,"value"),this.value=e}static parse(e){var t;if(e.peekToken(0).Type==x.RETURN)return e.skipToken(1),t=q.parse(e),e.peekToken(0).Type==x.SEMICOLON&&e.skipToken(1),new Oi(t);throw"Error parsing return expression: Unexpected character"}formatToWGSL(e,t){var r="";return r+=(t<=0?"":"    ".repeat(t))+"return "+this.value.formatToWGSL(e,0)}}class Nr extends le{constructor(e,t,r){super(),s(this,"op"),s(this,"leftValue"),s(this,"rightValue"),this.op=e,this.leftValue=t,this.rightValue=r}formatToWGSL(e,t){let r="",i=t<=0?"":"    ".repeat(t);return"++"==this.op.Literal||"--"==this.op.Literal?null!=this.leftValue?(t=this.leftValue.formatToWGSL(e,0),r+=i+t+" = "+t+" "+this.op.Literal[0]+" 1"):(t=this.rightValue.formatToWGSL(e,0),r+=i+t+" = "+t+" "+this.op.Literal[0]+" 1"):null!=this.leftValue?r+=i+this.leftValue.formatToWGSL(e,0)+this.op.Literal:r+=i+this.op.Literal+this.rightValue.formatToWGSL(e,0),r}}class Jt extends le{constructor(e,t,r){super(),s(this,"op"),s(this,"leftValue"),s(this,"rightValue"),this.op=e,this.leftValue=t,this.rightValue=r}formatToWGSL(e,t){var r="";return r+=(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+" "+this.op.Literal+" "+this.rightValue.formatToWGSL(e,0)}}class To extends le{constructor(e,t,r){super(),s(this,"condition"),s(this,"expression1"),s(this,"expression2"),this.condition=e,this.expression1=t,this.expression2=r}static parse(e){throw"Error parsing ternary operation expression: Unexpected character"}formatToWGSL(e,t){return""}}class wi extends le{constructor(e,t){super(),s(this,"leftValue"),s(this,"rightValue"),this.leftValue=e,this.rightValue=t}static parse(e){var t,r;if(e.peekToken(0).Type==x.IDENT&&e.peekToken(1).Type==x.DOT&&e.peekToken(2).Type==x.IDENT)return t=new Gt(e.peekToken(0).Literal),r=new Gt(e.peekToken(2).Literal),e.skipToken(3),new wi(t,r);throw"Error parsing selection expression: Unexpected character"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+"."+this.rightValue.formatToWGSL(e,0)}}class Sr extends le{constructor(e,t){super(),s(this,"leftValue"),s(this,"indexValue"),this.leftValue=e,this.indexValue=t}static parse(t){if(t.peekToken(0).Type!=x.IDENT||t.peekToken(1).Type!=x.LEFTMEDI)throw"Error parsing index expression: Unexpected character";{var r=new Gt(t.peekToken(0).Literal),i=(t.skipToken(2),q.parse(t));t.peekToken(0).Type==x.RIGHTMEDI&&t.skipToken(1);let e=new Sr(r,i);for(;t.peekToken(0).Type==x.LEFTMEDI;)t.skipToken(1),i=q.parse(t),t.peekToken(0).Type==x.RIGHTMEDI&&t.skipToken(1),e=new Sr(e,i);return e}}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+"["+this.indexValue.formatToWGSL(e,0)+"]"}}class gt extends le{constructor(){super()}static parse(t){if(t.peekToken(0).Type!=x.LEFTBIG)throw"Error parsing block: Unexpected symbol";t.skipToken(1);var r=new gt;for(let e=1;0<e&&t.peekToken(0).Type!=x.EOF;){var i=t.peekToken(0);if(i.Type==x.LEFTBIG)e++,t.skipToken(1);else if(i.Type==x.RIGHTBIG)e--,t.skipToken(1);else if(i.Type==x.SEMICOLON)t.skipToken(1);else if(i.isDataType()&&t.peekToken(1).Type==x.IDENT)r.addNode(_e.parse(t));else if(i.Type==x.CONST&&t.peekToken(1).isDataType()&&t.peekToken(2).Type==x.IDENT)r.addNode(_e.parse(t));else if(i.Type==x.IDENT&&t.peekToken(1).Type==x.ASSIGN)r.addNode(q.parse(t)),t.peekToken(0).Type==x.SEMICOLON&&t.skipToken(1);else if(i.Type==x.IDENT&&t.peekToken(1).Type==x.LEFTMEDI){var a=Sr.parse(t);t.peekToken(0).Type==x.ASSIGN?(s=t.peekToken(0),o=(t.skipToken(1),q.parse(t)),t.peekToken(0).Type==x.RIGHTMEDI&&t.skipToken(1),r.addNode(new Jt(s,a,o))):r.addNode(a)}else if(i.Type==x.IDENT&&t.peekToken(1).Type==x.DOT){var s=q.parse(t);r.addNode(s)}else if(i.Type==x.IDENT&&t.peekToken(1).isAssignOperation()){var o=t.peekToken(1),a=new Gt(i.Literal),n=(t.skipToken(2),q.parse(t));t.peekToken(0).Type==x.SEMICOLON&&t.skipToken(1),r.addNode(new Jt(o,a,n))}else if(i.Type!=x.IDENT||t.peekToken(1).Type!=x.INC&&t.peekToken(1).Type!=x.DEC||t.peekToken(2).Type!=x.SEMICOLON)if(i.Type==x.RETURN)r.addNode(Oi.parse(t));else if(i.Type==x.CONTINUE)r.addNode(Ta.parse(t));else if(i.Type==x.WHILE)r.addNode(yr.parse(t));else if(i.Type==x.FOR)r.addNode(vr.parse(t));else if(i.Type==x.IF)r.addNode(wr.parse(t));else{if(i.Type!=x.IDENT||t.peekToken(1).Type!=x.LEFTSAMLL)throw"Error parsing block: Unexpected symbol("+i.Literal+")";r.addNode(_r.parse(t)),t.peekToken(0).Type==x.SEMICOLON&&t.skipToken(0)}else{n=t.peekToken(1);r.addNode(new Nr(n,new Gt(i.Literal),void 0)),t.skipToken(3)}}return r}}class Ca extends le{constructor(e,t){super(),s(this,"type"),s(this,"qualifier"),this.type=t,this.qualifier=e}static parse(e){var t;if(e.peekToken(0).Type==x.PRECISION&&e.peekToken(1).Type==x.IDENT&&e.peekToken(2).isBuiltinType())return t=new Ca(e.peekToken(1).Literal,e.peekToken(2).Literal),e.skipToken(3),e.peekToken(0).Type==x.SEMICOLON&&e.skipToken(1),t;throw"Error parsing precision qualifier: Unexpected character"}formatToWGSL(e,t){return""}}class Ai extends le{constructor(){super(),s(this,"scope",""),s(this,"qualifier",new Map)}addQualifier(e,t=""){this.qualifier.set(e,t)}static parse(e){if(e.peekToken(0).Type!=x.LAYOUT||e.peekToken(1).Type!=x.LEFTSAMLL)throw"Error parsing layout qualifier: Unexpected symbol";var t,r=new Ai;e.skipToken(2);do{if(e.peekToken(0).Type==x.IDENT)if(e.peekToken(1).Type==x.ASSIGN&&e.peekToken(2).Type==x.LITERAL){var i=e.peekToken(0).Literal,a=e.peekToken(2).Literal;if(r.addQualifier(i,a),e.skipToken(3),e.peekToken(0).Type==x.COMMA){e.skipToken(1);continue}e.peekToken(0).Line=0}else{if(e.peekToken(1).Type==x.RIGHTSAMLL){i=e.peekToken(0).Literal;r.addQualifier(i,""),e.skipToken(1);break}if(e.peekToken(1).Type==x.COMMA){a=e.peekToken(0).Literal;r.addQualifier(a,""),e.skipToken(2);continue}}}while(e.peekToken(0).Type!=x.RIGHTSAMLL);if(e.peekToken(0).Type==x.RIGHTSAMLL&&e.skipToken(1),r.scope=e.peekToken(0).Literal,e.skipToken(1),e.peekToken(0).Type==x.SEMICOLON)return e.skipToken(1),r;if(e.peekToken(0).isBuiltinType()&&e.peekToken(1).Type==x.IDENT&&e.peekToken(2).Type==x.SEMICOLON)return t=new _e(e.peekToken(0).Literal,e.peekToken(1).Literal),r.addNode(t),e.skipToken(3),r;if(e.peekToken(0).Type==x.IDENT&&e.peekToken(1).Type==x.LEFTBIG)return t=zt.parse(e),r.addNode(t),e.peekToken(0).Type==x.IDENT&&e.peekToken(1).Type==x.SEMICOLON&&(t.addNode(new _e(t.name,e.peekToken(0).Literal)),e.skipToken(2)),r;throw"Error parsing layout qualifier type: Unexpected symbol("+e.peekToken(0).Literal+")"}formatToWGSL(t,e){let r="";if(1==this.qualifier.size&&this.qualifier.has("location"))r+="@location("+this.qualifier.get("location")+") ";else if(2==this.qualifier.size&&this.qualifier.has("set")&&this.qualifier.has("binding"))r+="@group("+this.qualifier.get("set")+") @binding("+this.qualifier.get("binding")+") ";else if(1<=this.qualifier.size&&this.qualifier.has("binding"))r+="@group(0) @binding("+this.qualifier.get("binding")+") ";else if(1==this.qualifier.size&&this.qualifier.has("push_constant"))r+="@push_constant ";else if(1<=this.qualifier.size&&this.qualifier.has("local_size_x"))r=(r=(r=(r+="@workgroup_size(")+(this.qualifier.get("local_size_x")+", "))+(this.qualifier.has("local_size_y")?this.qualifier.get("local_size_y")+", ":"1, "))+(this.qualifier.has("local_size_z")?this.qualifier.get("local_size_z")+"":"1")+")";else if(this.nodes.length<=0)return"";var i=this.nodes[0];if(i instanceof _e){switch(i.type){case"sampler":case"texture2D":r+="var ";break;default:"buffer"==this.scope?"compute"==t.stage?r+="var<storage, read_write> ":r+="var<storage, read> ":r+="var<"+this.scope+"> "}t.addIdentifier(i.name,i.name),r+=i.name+": "+at(i.type)+`;\r
`}else if(i instanceof zt)if("buffer"==this.scope?"compute"==t.stage?r+="var<storage, read_write> ":r+="var<storage, read> ":r+="var<"+this.scope+"> ",i.nodes.length<=0){let e="unif"+t.layoutUniformCount.toString();for(;t.hasIdentifier(e);)t.layoutUniformCount++,e="unif"+t.layoutUniformCount.toString();for(var a of i.fields)t.addIdentifier(a.name,e+"."+a.name);r+=e+": "+i.name+`;\r
`,t.layoutUniformCount++}else{i=i.nodes[0];r+=i.name+": "+i.type+`;\r
`}return r}}function at(e){switch(e){case"int":return"i32";case"int[]":return"array<i32>";case"uint":return"u32";case"uint[]":return"array<u32>";case"float":return"f32";case"float[]":return"array<f32>";case"vec2":return"vec2<f32>";case"vec3":return"vec3<f32>";case"vec4":return"vec4<f32>";case"vec2[]":return"array<vec2<f32>>";case"vec3[]":return"array<vec3<f32>>";case"vec4[]":return"array<vec4<f32>>";case"ivec2":return"vec2<i32>";case"ivec3":return"vec3<i32>";case"ivec4":return"vec4<i32>";case"ivec2[]":return"array<vec2<i32>>";case"ivec3[]":return"array<vec3<i32>>";case"ivec4[]":return"array<vec4<i32>>";case"mat2":case"mat2x2":return"mat2x2<f32>";case"mat2x3":return"mat2x3<f32>";case"mat2x4":return"mat2x4<f32>";case"mat2[]":case"mat2x2[]":return"array<mat2x2<f32>>";case"mat2x3[]":return"array<mat2x3<f32>>";case"mat2x4[]":return"array<mat2x4<f32>>";case"mat3":return"mat3x3<f32>";case"mat3x2":return"mat3x2<f32>";case"mat3x3":return"mat3x3<f32>";case"mat3x4":return"mat3x4<f32>";case"mat3[]":return"array<mat3x3<f32>>";case"mat3x2[]":return"array<mat3x2<f32>>";case"mat3x3[]":return"array<mat3x3<f32>>";case"mat3x4[]":return"array<mat3x4<f32>>";case"mat4":return"mat4x4<f32>";case"mat4x2":return"mat4x2<f32>";case"mat4x3":return"mat4x3<f32>";case"mat4x4":return"mat4x4<f32>";case"mat4[]":return"array<mat4x4<f32>>";case"mat4x2[]":return"array<mat4x2<f32>>";case"mat4x3[]":return"array<mat4x3<f32>>";case"mat4x4[]":return"array<mat4x4<f32>>";case"texture2D":return"texture_2d<f32>"}return e}class Co{constructor(e){s(this,"_lexer"),s(this,"_rootNode"),this._lexer=e,this._rootNode=new le,this.parse()}get lexer(){return this._lexer}parse(){for(;this.peekToken(0).Type!==x.EOF;){var e;this.peekToken(0).Type==x.SEMICOLON?this.skipToken(1):null!==(e=this.parseStatement())&&this._rootNode.addNode(e)}}parseStatement(){var e=this.peekToken();if(e.Type==x.LAYOUT&&this.peekToken(1).Type==x.LEFTSAMLL)return Ai.parse(this._lexer);if(e.Type==x.STRUCT)return this.skipToken(1),zt.parse(this._lexer);if((e.isBuiltinType()||e.Type==x.VOID)&&this.peekToken(1).Type==x.IDENT&&this.peekToken(2).Type==x.LEFTSAMLL)return ba.parse(this._lexer);if(e.Type==x.CONST&&this.peekToken(1).isDataType())return _e.parse(this._lexer);if(e.isDataType()&&this.peekToken(1).Type==x.IDENT)return _e.parse(this._lexer);if(e.Type==x.OUT&&this.peekToken(1).isDataType()&&this.peekToken(2).Type==x.IDENT)return _e.parse(this._lexer);if(e.Type==x.PRECISION)return Ca.parse(this._lexer);throw"Error parsing statement: Unexpected character"}skipToken(e){this._lexer.skipToken(e)}peekToken(e=0){return this._lexer.peekToken(e)}getNextToken(){return this._lexer.GetNextToken()}get ASTRoot(){return this._rootNode}}class ua{static convertGLSL(e){e=new So(e),e=new vo(e),e=new Co(e);return new bo(e).generateWGSL()}}s(ua,"VertexShader","VertexShader"),s(ua,"FragmentShader","FragmentShader");class ns{constructor(){s(this,"setID",0),s(this,"bindingID",0),s(this,"name",""),s(this,"type","")}}class os{constructor(){s(this,"name",""),s(this,"type",""),s(this,"locationID",0),s(this,"builtinName","")}isBuiltinAttribute(){return""!=this.builtinName}}class Mo{constructor(){s(this,"uniformInfo",[]),s(this,"inputAttribute",[]),s(this,"outputAttribute",[]),s(this,"sourceCode","")}}var ct=(e=>(e[e.vertex=0]="vertex",e[e.fragment=1]="fragment",e[e.computer=2]="computer",e))(ct||{});class Po{constructor(){s(this,"blendMode",ge.NONE),s(this,"depthCompare",ti.less),s(this,"depthWriteEnabled",!0),s(this,"frontFace","ccw"),s(this,"cullMode",xr.back),s(this,"topology",va.triangle_list),s(this,"depthBias",10),s(this,"useLight",!1),s(this,"useProbe",!1),s(this,"acceptGI",!1),s(this,"acceptShadow",!1),s(this,"castShadow",!1),s(this,"castReflection",!1),s(this,"receiveEnv",!1),s(this,"renderLayer",1e3),s(this,"renderOrder",0),s(this,"unclippedDepth",!1),s(this,"multisample",0),s(this,"label"),s(this,"useZ",!0),s(this,"splitTexture",!1)}setFromMapValues(e){e.has("blendMode")&&(this.blendMode=this.convertBlendMode(e.get("blendMode"))),e.has("depthCompare")&&(this.depthCompare=e.get("depthCompare")),e.has("depthWriteEnabled")&&(this.depthWriteEnabled=e.get("depthWriteEnabled")),e.has("frontFace")&&(this.frontFace=e.get("frontFace")),e.has("cullMode")&&(this.cullMode=e.get("cullMode")),e.has("topology")&&(this.topology=e.get("topology")),e.has("depthBias")&&(this.depthBias=e.get("depthBias")),e.has("useLight")&&(this.useLight=e.get("useLight")),e.has("useProbe")&&(this.useProbe=e.get("useProbe")),e.has("acceptGI")&&(this.acceptGI=e.get("acceptGI")),e.has("acceptShadow")&&(this.acceptShadow=e.get("acceptShadow")),e.has("castShadow")&&(this.castShadow=e.get("castShadow")),e.has("receiveEnv")&&(this.receiveEnv=e.get("receiveEnv")),e.has("renderLayer")&&(this.renderLayer=e.get("renderLayer")),e.has("renderOrder")&&(this.renderOrder=e.get("renderOrder")),e.has("unclippedDepth")&&(this.unclippedDepth=e.get("unclippedDepth")),e.has("multisample")&&(this.multisample=e.get("multisample")),e.has("label")&&(this.label=e.get("label")),e.has("useZ")&&(this.useZ=e.get("useZ"))}convertBlendMode(e){switch(e){case"ABOVE":return ge.ABOVE;case"ALPHA":return ge.ALPHA;case"NORMAL":return ge.NORMAL;case"ADD":return ge.ADD;case"BELOW":return ge.BELOW;case"ERASE":return ge.ERASE;case"MUL":return ge.MUL;case"SCREEN":return ge.SCREEN;case"DIVD":return ge.DIVD;case"SOFT_ADD":return ge.SOFT_ADD}return ge.NONE}}class Eo extends er{constructor(){super(),s(this,"uniformNodes",[]),s(this,"_onChange",!0),this.bufferType=Ct.MaterialDataUniformGPUBuffer}initDataUniform(e){let t=0;for(const s in this.uniformNodes=e){var r=e[s];r||console.error(s,"is empty"),t+=4*r.size}t=256*Math.floor(t/256+1),this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,t/4);for(const o in e){var i=e[o],a=(i||console.error(o,"is empty"),this.memory.allocation_node(4*i.size));i.memoryInfo=a,i.bindOnChange=()=>this.onChange()}}onChange(){this._onChange=!0}apply(){if(0!=this.uniformNodes.length&&this._onChange){for(const e in this.uniformNodes)this.uniformNodes[e].update();super.apply(),this._onChange=!1}}}class dt{static init(){this.renderShaderModulePool=new Map,this.renderShader=new Map}}s(dt,"renderShaderModulePool"),s(dt,"renderShader");class Jr extends Ps{constructor(e,t){super(),s(this,"useRz",!1),s(this,"vsName"),s(this,"fsName"),s(this,"shaderState"),s(this,"textures"),s(this,"pipeline"),s(this,"bindGroupLayouts"),s(this,"materialDataUniformBuffer"),s(this,"_sourceVS"),s(this,"_sourceFS"),s(this,"_destVS"),s(this,"_destFS"),s(this,"_vsShaderModule"),s(this,"_fsShaderModule"),s(this,"_textureGroup",-1),s(this,"_textureChange",!1),s(this,"_vs_limit",[]),s(this,"_fs_limit",[]),s(this,"_cs_limit",[]),s(this,"_groupsShaderReflectionVarInfos"),s(this,"_passShaderCache",new Map),this.vsName=e.toLowerCase(),this.fsName=t.toLowerCase(),this.vsName in A||console.error("Shader Not Register, Please Register Shader!",this.vsName),this.fsName in A||console.error("Shader Not Register, Please Register Shader!",this.fsName),A[this.vsName]&&(this._sourceVS=A[this.vsName]),A[this.fsName]&&(this._sourceFS=A[this.fsName]),this.textures={},this.bindGroups=[],this.shaderState=new Po,this.materialDataUniformBuffer=new Eo,this.materialDataUniformBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this._bufferDic.set("global",this.materialDataUniformBuffer),this._bufferDic.set("materialUniform",this.materialDataUniformBuffer)}get cullMode(){return this.shaderState.cullMode}set cullMode(e){this.shaderState.cullMode!=e&&(this._stateChange=!0),this.shaderState.cullMode=e}get frontFace(){return this.shaderState.frontFace}set frontFace(e){this.shaderState.frontFace!=e&&(this._stateChange=!0),this.shaderState.frontFace=e}get depthBias(){return this.shaderState.depthBias}set depthBias(e){this.shaderState.depthBias!=e&&(this._stateChange=!0),this.shaderState.depthBias=e}get topology(){return this.shaderState.topology}set topology(e){this.shaderState.topology!=e&&(this._stateChange=!0),this.shaderState.topology=e}get blendMode(){return this.shaderState.blendMode}set blendMode(e){this.shaderState.blendMode!=e&&(this._stateChange=!0),this.shaderState.blendMode=e}get depthCompare(){return this.shaderState.depthCompare}set depthCompare(e){this.shaderState.depthCompare!=e&&(this._stateChange=!0),this.shaderState.depthCompare=e}static createShader(e,t){e=new Jr(e,t);return dt.renderShader.set(e.instanceID,e),e.instanceID}static destroyShader(e){dt.renderShader.has(e)&&(dt.renderShader.get(e).destroy(),dt.renderShader.delete(e))}static getShader(e){return dt.renderShader.get(e)}setPassShader(e,t){this._passShaderCache.set(e,t)}getPassShader(e){return this._passShaderCache.get(e)}setShaderEntry(e="",t=""){this.vsEntryPoint=e,this.fsEntryPoint=t}setTexture(e,t){t&&this.textures[e]!=t&&(this.textures[e]&&this.textures[e].unBindStateChange(this),this._textureChange=!0,(this.textures[e]=t).bindStateChange(()=>{this._textureChange=!0},this))}getTexture(e){return this.textures[e]}genRenderPipeline(e,t){var r=this.createGroupLayouts();this.createPipeline(e,t,r)}reBuild(e,t){this.compileShader(ct.vertex,this._destVS,t),this.compileShader(ct.fragment,this._destFS,t),this.genRenderPipeline(e,t)}apply(e,t,r,i){this.materialDataUniformBuffer.apply(),this._textureChange&&-1!=this._textureGroup&&(this._textureChange=!1,this.genGroups(this._textureGroup,this.shaderReflection.groups,!0)),this._stateChange&&(this._shaderChange&&(this.preCompile(e),this._shaderChange=!1),this.reBuild(e,r),this._stateChange=!1,i)&&i()}preCompile(e){this.preDefine(e),this.preCompileShader(ct.vertex,this._sourceVS.concat()),this.preCompileShader(ct.fragment,this._sourceFS.concat()),this.genReflection()}applyPostDefine(e,t){return"pixel"==_.setting.pick.mode&&(this.defineValue.USE_WORLDPOS=!0),1<t.outAttachments.length?(this.defineValue.USE_WORLDPOS=!0,this.defineValue.USEGBUFFER=!0):(this.defineValue.USE_WORLDPOS=!1,this.defineValue.USEGBUFFER=!1),_.setting.material.materialChannelDebug&&(this.defineValue.USE_DEBUG=!0),this.shaderState.useLight?this.defineValue.USE_LIGHT=!0:this.defineValue.USE_LIGHT=!1,it.parse(e,this.defineValue)}setBindGroup(e,t){this.bindGroups[e]=t}setDefault(){this.setUniformFloat("shadowBias",35e-5),this.setUniformVector4("transformUV1",new X(0,0,1,1)),this.setUniformVector4("transformUV2",new X(0,0,1,1)),this.setUniformColor("baseColor",new b),this.setUniformColor("emissiveColor",new b(1,1,1)),this.setUniformVector4("materialF0",new X(.04,.04,.04,1)),this.setUniformFloat("envIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("roughness",1),this.setUniformFloat("metallic",0),this.setUniformFloat("ao",1),this.setUniformFloat("roughness_min",0),this.setUniformFloat("roughness_max",1),this.setUniformFloat("metallic_min",0),this.setUniformFloat("metallic_max",1),this.setUniformFloat("emissiveIntensity",0),this.setUniformFloat("alphaCutoff",0),this.setUniformFloat("ior",1.5),this.setUniformFloat("clearcoatFactor",0),this.setUniformFloat("clearcoatRoughnessFactor",0),this.setUniformColor("clearcoatColor",new b(1,1,1)),this.setUniformFloat("clearcoatWeight",0)}destroy(){this.bindGroups.length=0,this._passShaderCache.clear(),this.shaderState=null,this.textures=null,this.pipeline=null,this.bindGroupLayouts=null,this._sourceVS=null,this._sourceFS=null,this._destVS=null,this._destFS=null,this._vsShaderModule=null,this._fsShaderModule=null,this.materialDataUniformBuffer.destroy(),this.materialDataUniformBuffer=null}checkBuffer(e,t){}preCompileShader(e,t,r){let i=t;var a;-1!=i.indexOf("version ")&&(t=ua.convertGLSL(i),i=t.sourceCode);for(const s in this.constValues)Object.prototype.hasOwnProperty.call(this.constValues,s)&&(a=this.constValues[s],i=i.replaceAll("&"+s,a.toString()));switch(e){case ct.vertex:this._destVS=i;break;case ct.fragment:this._destFS=i}}compileShader(e,t,r){let i=t,a=(i=this.applyPostDefine(i,r),t);for(var s in this.defineValue)a+=`${s}=${this.defineValue[s]},`;let o=dt.renderShaderModulePool.get(a);switch(o||(i=this.applyPostDefine(i,r),(o=E.device.createShaderModule({label:e==ct.vertex?this.vsName:this.fsName,code:i})).getCompilationInfo().then(e=>{0<e.messages.length&&(console.log(i),console.log(e))}),dt.renderShaderModulePool.set(a,o)),e){case ct.vertex:this._vsShaderModule=o,this._destVS=i;break;case ct.fragment:this._fsShaderModule=o,this._destFS=i}}getGroupLayout(t,r){var i=[];for(let e=0;e<r.length;e++){var a=r[e];if(a)if("uniform"==a.varType){this._bufferDic.has(a.varName)||console.error(`not set ${a.varName} buffer`);var s=this._bufferDic.get(a.varName).visibility,s={binding:a.binding,visibility:s,buffer:{type:"uniform"}};i.push(s)}else if("storage-read"==a.varType){this._bufferDic.has(a.varName)||console.error(`not set ${a.varName} buffer`);var s=this._bufferDic.get(a.varName).visibility,o={binding:a.binding,visibility:s,buffer:{type:"read-only-storage"}};i.push(o)}else if("var"==a.varType)switch(a.dataType){case"sampler":var n=a.varName.replace("Sampler",""),n=this.textures[n]||_.res.redTexture,n={binding:a.binding,visibility:n.visibility,sampler:n.samplerBindingLayout};i.push(n),this._textureGroup=t;break;case"sampler_comparison":var n=a.varName.replace("Sampler",""),h=this.textures[n]||_.res.redTexture,h={binding:a.binding,visibility:h.visibility,sampler:h.sampler_comparisonBindingLayout};i.push(h),this._textureGroup=t;break;case"texture_2d<f32>":case"texture_2d_array<f32>":case"texture_cube<f32>":case"texture_depth_2d":case"texture_depth_2d_array":case"texture_depth_cube":case"texture_depth_cube_array":var h=this.textures[a.varName]||_.res.redTexture,l={binding:a.binding,visibility:h.visibility,texture:h.textureBindingLayout};i.push(l),this._textureGroup=t;break;case"texture_external":var l=this.textures[a.varName]||_.res.redTexture,u={binding:a.binding,visibility:l.visibility,externalTexture:{}};i.push(u),this._textureGroup=t;break;default:var u=this.textures[a.varName]||_.res.redTexture,c={binding:a.binding,visibility:u.visibility,texture:u.textureBindingLayout};i.push(c),this._textureGroup=t}else console.error("bind group can't empty")}return i}genGroups(e,t,r=!1){if(!this.bindGroups[e]||r){var i=t[e],a=[];for(let e=0;e<i.length;e++){var s=i[e];if(s)if("uniform"==s.varType){var o=this._bufferDic.get(s.varName);if(o){if(o.bufferType==Ct.MaterialDataUniformGPUBuffer){var n=[];for(let e=0;e<s.dataFields.length;e++){var h=s.dataFields[e];this.uniforms[h.name]||console.error(`shader-${this.vsName}:${this.fsName} ${h.name}is empty`),n.push(this.uniforms[h.name])}this.materialDataUniformBuffer.initDataUniform(n)}var l={binding:s.binding,resource:{buffer:o.buffer,offset:0,size:o.memory.shareDataBuffer.byteLength}};a.push(l),this.checkBuffer(s.varName,o)}else console.error(`shader${this.vsName}-`+this.fsName,`buffer ${s.varName} is missing!`)}else if("storage-read"==s.varType){l=this._bufferDic.get(s.varName);l?(o={binding:s.binding,resource:{buffer:l.buffer,offset:0,size:l.memory.shareDataBuffer.byteLength}},a.push(o),this.checkBuffer(s.varName,l)):console.error(`buffer ${s.varName} is missing!`)}else if("var"==s.varType)if("sampler"==s.dataType){let e=s.varName.replace("Sampler",""),t=this.textures[e];t||(t=_.res.blackTexture,this.setTexture(e,t)),t?(u={binding:s.binding,resource:t.gpuSampler},a.push(u)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${s.varName} is missing! `)}else if("sampler_comparison"==s.dataType){var u=s.varName.replace("Sampler",""),c=this.textures[u];c?(c={binding:s.binding,resource:c.gpuSampler_comparison},a.push(c)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${s.varName} is missing! `)}else{let e=this.textures[s.varName];e||(e=_.res.whiteTexture,this.setTexture(s.varName,e)),e?(c={binding:s.binding,resource:e.getGPUView()},a.push(c)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${s.varName} is missing! `)}}r=E.device.createBindGroup({layout:this.bindGroupLayouts[e],entries:a});this.bindGroups[e]=r}}createPipeline(e,t,r){var i=this.shaderState,a=t.outAttachments,r=(-1!=t.outColor&&(a[t.outColor].blend=Os.getBlend(i.blendMode)),{label:this.vsName+"|"+this.fsName,layout:r,primitive:{topology:i.topology,cullMode:i.cullMode,frontFace:i.frontFace},vertex:void 0});""!=this.vsEntryPoint&&(r.vertex={module:this._vsShaderModule,entryPoint:this.vsEntryPoint,buffers:e.vertexBuffer.vertexBufferLayouts}),""!=this.fsEntryPoint&&(r.fragment={module:this._fsShaderModule,entryPoint:this.fsEntryPoint,targets:a}),0<i.multisample&&(r.multisample={count:i.multisample}),(t.zPreTexture||t.depthTexture)&&(i.blendMode,ge.NONE,_.setting.render.zPrePass&&t.zPreTexture&&i.useZ?r.depthStencil={depthWriteEnabled:i.depthWriteEnabled,depthCompare:i.depthCompare,format:t.zPreTexture.format}:(r.depthStencil={depthWriteEnabled:i.depthWriteEnabled,depthCompare:i.depthCompare,format:t.depthTexture.format},this.useRz)),this.pipeline=C.createPipeline(r)}createGroupLayouts(){this._groupsShaderReflectionVarInfos=[];var t=this.shaderReflection;this.bindGroupLayouts=[Li.getGlobalDataBindGroupLayout()];for(let e=1;e<t.groups.length;e++){var r,i=t.groups[e];i?(r=this.getGroupLayout(e,i),this._groupsShaderReflectionVarInfos[e]=i,i=E.device.createBindGroupLayout({entries:r,label:`vs${this.vsName} fs`+this.fsName}),this.bindGroupLayouts[e]=i):console.error("can't set empty group!",e)}var e=E.device.createPipelineLayout({bindGroupLayouts:this.bindGroupLayouts});return this._groupsShaderReflectionVarInfos[0],this._groupsShaderReflectionVarInfos[1]&&this.genGroups(1,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[2]&&this.genGroups(2,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[3]&&this.genGroups(3,this._groupsShaderReflectionVarInfos),e}preDefine(e){var t=e.hasAttribute(H.joints0),r=e.hasAttribute(H.a_morphPositions_0),i=e.hasAttribute(H.TANGENT),e=e.hasAttribute(H.color),a=this.shaderState.acceptGI,s=this.shaderState.useLight;this.defineValue.USE_SKELETON=t,this.defineValue.USE_MORPHTARGETS=r,this.defineValue.USE_TANGENT=i,this.defineValue.USE_GI=a,this.defineValue.USE_CASTSHADOW=this.shaderState.castShadow,this.defineValue.USE_SHADOWMAPING=this.shaderState.acceptShadow,this.defineValue.USE_LIGHT=s,this.defineValue.USE_VERTXCOLOR=e,this.defineValue.USE_PCF_SHADOW="PCF"==_.setting.shadow.type,this.defineValue.USE_HARD_SHADOW="HARD"==_.setting.shadow.type,this.defineValue.USE_SOFT_SHADOW="SOFT"==_.setting.shadow.type,this.defineValue.USE_IES_PROFILE=Lt.use}genReflection(){this.shaderVariant+=Ze.genRenderShaderVariant(this);var e=Ze.poolGetReflection(this.shaderVariant);e?this.shaderReflection=e:(e=it.parse(this._destVS,this.defineValue),e=it.parse(e,this.defineValue),Ze.getShaderReflection2(e,this),e=it.parse(this._destFS,this.defineValue),e=it.parse(e,this.defineValue),Ze.getShaderReflection2(e,this),Ze.final(this)),this.shaderState.splitTexture=this.shaderReflection.useSplit}}class Do{constructor(){s(this,"renderPasses"),s(this,"enable",!0),s(this,"renderShader"),s(this,"_shaderID"),s(this,"_sort",3e3),s(this,"_transparent",!1)}get sort(){return this._sort}set sort(e){this._sort=e}get shaderID(){return this._shaderID}set shaderID(e){this._shaderID=e}setShader(e,t){return this._shaderID=Jr.createShader(e,t),this.renderShader=this.getShader(),this.renderShader.setDefault(),this.renderShader}getShader(){return Jr.getShader(this._shaderID)}get blendMode(){return this.renderShader.blendMode}set blendMode(e){this.renderShader.blendMode=e}get transparent(){return this._transparent}set transparent(e){this._transparent=e}get frontFace(){return this.renderShader.frontFace}set frontFace(e){this.renderShader.frontFace=e}get doubleSide(){return this.renderShader.cullMode==xr.none}set doubleSide(e){this.renderShader.cullMode=e?xr.none:this.renderShader.cullMode}get cullMode(){return this.renderShader.cullMode}set cullMode(e){this.renderShader.cullMode=e||this.renderShader.cullMode}get depthBias(){return this.renderShader.depthBias}set depthBias(e){this.renderShader.depthBias=e}get depthCompare(){return this.renderShader.depthCompare}set depthCompare(e){this.renderShader.depthCompare=e||this.renderShader.depthCompare}destroy(){this.renderShader.destroy(),this.renderShader=null,this.renderPasses.forEach((t,e)=>{for(let e=0;e<t.length;e++)t[e].destroy();t.length=0}),this.renderPasses.clear(),this.renderPasses=null}clone(){return null}debug(){throw new Error("Method not implemented.")}}function uc(e,t){}class ut extends Do{constructor(){super(),s(this,"name"),s(this,"instanceID"),s(this,"isPassMaterial",!1),s(this,"receiveEnv",!0),s(this,"_normalMapYFlip"),this.instanceID=qe(),this.renderPasses=new Map}get shaderState(){return this.renderShader.shaderState}set shaderState(e){this.renderShader.shaderState=e}get normalMapYFlip(){return this._normalMapYFlip}set normalMapYFlip(e){(this._normalMapYFlip=e)&&this.renderShader.setDefine("USE_NORMALFILPY",!0)}set shadowMap(e){this.renderShader.setTexture("shadowMap",e)}set envMap(e){this.renderShader.setTexture("envMap",e)}set baseMap(e){this.renderShader.setTexture("baseMap",e),this.notifyPropertyChange("baseMap",e)}get baseMap(){return this.renderShader.textures.baseMap}get normalMap(){return this.renderShader.textures.normalMap}set normalMap(e){this.renderShader.setTexture("normalMap",e),this.notifyPropertyChange("normalMap",e)}get emissiveMap(){return this.renderShader.textures.emissiveMap}get emissiveColor(){return this.renderShader.uniforms.emissiveColor.color}set emissiveColor(e){this.renderShader.setUniformColor("emissiveColor",e),this.notifyPropertyChange("emissiveColor",e)}set emissiveIntensity(e){this.renderShader.setUniformFloat("emissiveIntensity",e),this.notifyPropertyChange("emissiveIntensity",e)}get emissiveIntensity(){return this.renderShader.uniforms.emissiveIntensity.value}set emissiveMap(e){this.renderShader.setTexture("emissiveMap",e),this.notifyPropertyChange("emissiveMap",e)}get envIntensity(){return this.renderShader.uniforms.envIntensity.value}set envIntensity(e){"envIntensity"in this.renderShader.uniforms&&(this.renderShader.uniforms.envIntensity.value=e),this.notifyPropertyChange("envIntensity",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set normalScale(e){"normalScale"in this.renderShader.uniforms&&(this.renderShader.uniforms.envIntensity.value=e),this.notifyPropertyChange("normalScale",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}set alphaCutoff(e){"alphaCutoff"in this.renderShader.uniforms&&((this.renderShader.uniforms.alphaCutoff.value=e)<1&&0!=e?(this.renderShader.setDefine("USE_ALPHACUT",!0),console.log("USE_ALPHACUT")):this.renderShader.setDefine("USE_ALPHACUT",!1),this.notifyPropertyChange("alphaCutoff",e))}get irradianceMap(){return this.renderShader.textures.irradianceMap}set irradianceMap(e){this.renderShader.setTexture("irradianceMap",e),this.notifyPropertyChange("irradianceMap",e)}get irradianceDepthMap(){return this.renderShader.textures.irradianceDepthMap}set irradianceDepthMap(e){this.renderShader.setTexture("irradianceDepthMap",e),this.notifyPropertyChange("irradianceDepthMap",e)}get baseColor(){return this.renderShader.uniforms.baseColor.color}set baseColor(e){this.renderShader.setUniformColor("baseColor",e),this.notifyPropertyChange("baseColor",e)}get uvTransform_1(){return this.renderShader.uniforms.transformUV1.vector4}set uvTransform_1(e){this.renderShader.uniforms.transformUV1.vector4=e,this.notifyPropertyChange("transformUV1",e)}get uvTransform_2(){return this.renderShader.uniforms.transformUV2.vector4}set uvTransform_2(e){this.renderShader.uniforms.transformUV2.vector4=e,this.notifyPropertyChange("uvTransform_2",e)}notifyPropertyChange(e,t){}setDefine(e,t){this.renderShader.setDefine(e,!0)}hasPass(e){return this.renderPasses.has(e)}addPass(e,t,r=-1){this.renderPasses.has(e)||this.renderPasses.set(e,[]);e=this.renderPasses.get(e);return-1==e.indexOf(t)&&(-1==r?e.push(t):e.splice(r,-1,t)),e}removePass(e,t){this.renderPasses.has(e)&&t<(e=this.renderPasses.get(e)).length&&e.splice(t,1)}destroy(){super.destroy()}clone(){return null}}class Ro extends ut{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,A.register("castPointShadowMap_vert",go),A.register("shadowCastMap_frag",Ls);var e=this.setShader("castPointShadowMap_vert","shadowCastMap_frag");e.setShaderEntry("main","main"),e.setUniformFloat("cameraFar",5e3),e.setUniformVector3("lightWorldPos",p.ZERO),e.shaderState.receiveEnv=!1}}class Io extends ut{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,A.register("shadowCastMap_vert",mo),A.register("shadowCastMap_frag",Ls);var e=this.setShader("shadowCastMap_vert","shadowCastMap_frag");e.setShaderEntry("main"),e.setUniformFloat("cameraFar",5e3),e.setUniformVector3("lightWorldPos",p.ZERO),e.shaderState.receiveEnv=!1}}let Lo=`
    #include "GlobalUniform"

    struct VertexOutput {
        @location(0) vID: f32 ,
        @location(1) vPos: vec3<f32> ,
        @builtin(position) member: vec4<f32>
    };

    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;

    var<private> worldMatrix: mat4x4<f32>;

    #if USE_MORPHTARGETS
        ${Re.getMorphTargetShaderBinding(1,0)}
    #endif

    #if USE_SKELETON
        ${Ri.groupBindingAndFunctions(1,0)}
    #endif

    @vertex
    fn main(
        @builtin(instance_index) index : u32,
        @location(0) position: vec3<f32>,
        @location(1) normal: vec3<f32>,
        @location(2) uv: vec2<f32>,
        @location(3) TEXCOORD_1: vec2<f32>,

    #if USE_TANGENT
        @location(4) TANGENT: vec4<f32>,
        #if USE_SKELETON
            @location(5) joints0: vec4<f32>,
            @location(6) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(7) joints1: vec4<f32>,
                @location(8) weights1: vec4<f32>,
            #endif
        #elseif USE_MORPHTARGETS
            ${Re.getMorphTargetAttr(5)}
        #endif
    #elseif USE_SKELETON
        @location(4) joints0: vec4<f32>,
        @location(5) weights0: vec4<f32>,
        #if USE_JOINT_VEC8
            @location(6) joints1: vec4<f32>,
            @location(7) weights1: vec4<f32>,
        #endif
    #elseif USE_MORPHTARGETS
        ${Re.getMorphTargetAttr(4)}
    #endif
    ) -> VertexOutput {
    worldMatrix = models.matrix[index];

    var vertexPosition = position;
    var vertexNormal = normal;
    #if USE_MORPHTARGETS
        ${Re.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
            worldMatrix *= getSkeletonWorldMatrix_8(joints0, weights0, joints1, weights1);
        #else
            worldMatrix *= getSkeletonWorldMatrix_4(joints0, weights0);
        #endif
    #endif

        
        let wPos = worldMatrix * vec4<f32>(vertexPosition.xyz, 1.0);
        var fixProjMat = globalUniform.projMat ;
        // fixProjMat[2].z = -1.0 ;//99999.0 / (99999.0 - 1.0) ;
        // fixProjMat[3].z = 0.0 ;//(-1.0 * 99999.0) / (99999.0 - 1.0) ;
        var rzMatrix : mat4x4<f32> ;
        rzMatrix[0] = vec4<f32>(1.0,0.0,0.0,0.0) ; 
        rzMatrix[1] = vec4<f32>(0.0,1.0,0.0,0.0) ; 
        rzMatrix[2] = vec4<f32>(0.0,0.0,1.0,0.0) ; 
        rzMatrix[3] = vec4<f32>(0.0,0.0,0.0,1.0) ; 
        // rzMatrix[2].z = (-globalUniform.near * globalUniform.far) / (globalUniform.far - globalUniform.near) ;
        // rzMatrix[3].z = globalUniform.far / (globalUniform.far - globalUniform.near) ;
        var clipPos:vec4<f32> = fixProjMat * globalUniform.viewMat * rzMatrix * wPos ;
        // clipPos.z = clipPos.z + (clipPos.z / clipPos.w + globalUniform.near / clipPos.w + 0.002 / clipPos.w) * (globalUniform.near / globalUniform.far) ; 
        // clipPos.z = depthToLinear01(clipPos.z / clipPos.w) ; 
        return VertexOutput(f32(index) , wPos.xyz, clipPos);
    }

    fn depthToLinear01(depth:f32) -> f32 {
        let a = 1.0 / (globalUniform.near - globalUniform.far);
        return (globalUniform.near*globalUniform.far*a) / (depth + globalUniform.far * a) ;
    }
`,Oo=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    @fragment
    fn main(@location(0) vID: f32, @location(1) vPos:vec3<f32>) -> FragmentOutput {
        var op = vec4<f32>( vPos, vID);
        return FragmentOutput(op);
    }
`;class Ao extends ut{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,A.register("ZPass_shader_vs",Lo),A.register("ZPass_shader_fs",Oo);var e=this.setShader("ZPass_shader_vs","ZPass_shader_fs");e.useRz=!0,e.shaderState.receiveEnv=!1}}class Uo extends ut{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,A.register("gbuffer_vs",ys),A.register("gbuffer_fs",ys),this.setShader("gbuffer_vs","gbuffer_fs").setShaderEntry("VertMain","FragMain"),this.shaderState.cullMode="none",this.renderShader.setUniformColor("baseColor",new b),this.renderShader.setUniformColor("emissiveColor",new b),this.renderShader.setUniformFloat("emissiveIntensity",1),this.renderShader.setUniformFloat("normalScale",1),this.renderShader.setUniformFloat("alphaCutoff",1),this.blendMode=ge.NONE,this.renderShader.setTexture("normalMap",_.res.normalTexture)}set shadowMap(e){}set envMap(e){}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set alphaCutoff(e){this.renderShader.setUniformFloat("alphaCutoff",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}}class Bo extends ut{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,A.register("SkyGBuffer_fs",Eh);var e=this.setShader("sky_vs_frag_wgsl","SkyGBuffer_fs"),e=(e.setUniformFloat("exposure",1),e.setUniformFloat("roughness",0),this.shaderState);e.frontFace="ccw",e.cullMode=xr.front,e.depthWriteEnabled=!1,e.depthCompare=ti.less}get exposure(){return this.renderShader.uniforms.exposure.value}set exposure(e){this.renderShader.setUniformFloat("exposure",e)}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){this.renderShader.setUniformFloat("roughness",e)}set shadowMap(e){}set envMap(e){}set emissiveIntensity(e){this.renderShader.setUniformFloat("emissiveIntensity",e)}get emissiveIntensity(){return this.renderShader.uniforms.emissiveIntensity.value}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set alphaCutoff(e){this.renderShader.setUniformFloat("alphaCutoff",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}}var oe=(e=>(e[e.COLOR=1]="COLOR",e[e.NORMAL=2]="NORMAL",e[e.POSITION=4]="POSITION",e[e.GRAPHIC=8]="GRAPHIC",e[e.GI=16]="GI",e[e.Cluster=32]="Cluster",e[e.SHADOW=64]="SHADOW",e[e.POINT_SHADOW=128]="POINT_SHADOW",e[e.POST=256]="POST",e[e.DEPTH=512]="DEPTH",e[e.REFLECTION=1024]="REFLECTION",e))(oe||{});class ${}s($,"GLTF_NODE_INDEX_PROPERTY"),s($,"BASE_COLOR_UNIFORM","u_baseColorFactor"),s($,"BASE_COLOR_TEXTURE_UNIFORM","u_baseColorSampler"),s($,"METALROUGHNESS_UNIFORM","u_metallicRoughnessValues"),s($,"METALROUGHNESS_TEXTURE_UNIFORM","u_metallicRoughnessSampler"),s($,"NORMAL_TEXTURE_UNIFORM","u_normalSampler"),s($,"NORMAL_SCALE_UNIFORM","u_normalScale"),s($,"EMISSIVE_TEXTURE_UNIFORM","u_emissiveSampler"),s($,"EMISSIVE_FACTOR_UNIFORM","u_emissiveFactor"),s($,"OCCLUSION_TEXTURE_UNIFORM","u_occlusionSampler"),s($,"OCCLUSION_FACTOR_UNIFORM","u_occlusionFactor"),s($,"MAX_MORPH_TARGETS",8),s($,"MORPH_POSITION_PREFIX","a_morphPositions_"),s($,"MORPH_NORMAL_PREFIX","a_morphNormals_"),s($,"MORPH_TANGENT_PREFIX","a_morphTangents_"),s($,"MORPH_WEIGHT_UNIFORM","u_morphWeights"),s($,"SCENE_ROOT_SKELETON","SCENE_ROOT"),s($,"IDENTITY_INVERSE_BIND_MATRICES","IDENTITY_IBM"),s($,"JOINT_MATRICES_UNIFORM","u_jointMatrix"),s($,"ALPHA_CUTOFF_UNIFORM","u_alphaCutoff");class li{static createGIPass(e,t){var r,i,a;pt.hasMask(e.rendererMask,Ue.Sky)?((r=new Bo).baseMap=t.baseMap,i=t,(a=r.getShader()).shaderState.cullMode=i.getShader().cullMode,a.shaderState.frontFace=i.getShader().frontFace,t.addPass(oe.GI,r,0),r.renderShader.preCompile(e.geometry)):this.castGBufferPass(e,t)}static castGBufferPass(r,i){for(let t=0;t<r.materials.length;t++){var a,s,o,n=r.materials[t];let e=n.renderShader.getPassShader(oe.GI);e||(a=(e=new Uo).renderShader,e.baseColor=n.baseColor,e.baseMap=n.baseMap,e.normalMap=n.normalMap,e.envIntensity=n.envIntensity,e.emissiveMap=n.emissiveMap,e.emissiveColor=n.emissiveColor,e.emissiveIntensity=n.emissiveIntensity,e.alphaCutoff=n.alphaCutoff,s=r.materials[0],(o=e.getShader()).shaderState.cullMode=s.getShader().cullMode,o.shaderState.frontFace=s.getShader().frontFace,a.preCompile(r.geometry),n.renderShader.setPassShader(oe.GI,e)),i.addPass(oe.GI,e,t)}}static createShadowPass(t,e){let r=pt.hasMask(t.rendererMask,Ue.SkinnedMesh),i=t.geometry.hasAttribute("TANGENT"),a=t.geometry.hasAttribute($.MORPH_POSITION_PREFIX+"0"),s=t.geometry.hasAttribute($.MORPH_NORMAL_PREFIX+"0"),o=e.renderShader.getPassShader(oe.SHADOW);if(!o){(o=new Io).baseMap=t.materials[0].baseMap,o.alphaCutoff=t.materials[0].alphaCutoff,o.setDefine("USE_ALPHACUT",t.materials[0].alphaCutoff<1);for(let e=0;e<1;e++){var n=o.renderShader;i&&n.setDefine("USE_TANGENT",i),r&&n.setDefine("USE_SKELETON",r),a&&n.setDefine("USE_MORPHTARGETS",a),s&&n.setDefine("USE_MORPHNORMALS",s),n.shaderState.cullMode="front",n.preCompile(t.geometry)}e.renderShader.setPassShader(oe.SHADOW,o)}e.addPass(oe.SHADOW,o,0);let h=e.renderShader.getPassShader(oe.POINT_SHADOW);if(!h){(h=new Ro).baseMap=t.materials[0].baseMap,h.alphaCutoff=t.materials[0].alphaCutoff,h.setDefine("USE_ALPHACUT",t.materials[0].alphaCutoff<1);for(let e=0;e<1;e++){var l=h.renderShader;i&&l.setDefine("USE_TANGENT",i),r&&l.setDefine("USE_SKELETON",r),a&&l.setDefine("USE_MORPHTARGETS",a),s&&l.setDefine("USE_MORPHNORMALS",s),l.shaderState.cullMode="front",l.preCompile(t.geometry)}e.renderShader.setPassShader(oe.POINT_SHADOW,h)}e.addPass(oe.POINT_SHADOW,h,0)}static createReflectionPass(e,t){}static createDepthPass(t,e){var r=e.renderShader.getPassShader(oe.DEPTH);if(!r){var i=new Ao,a=t.materials[0],s=(i.baseMap=a.baseMap,t.geometry.hasAttribute("TANGENT")),o=t.geometry.hasAttribute($.MORPH_POSITION_PREFIX+"0"),n=t.geometry.hasAttribute($.MORPH_NORMAL_PREFIX+"0"),h=pt.hasMask(t.rendererMask,Ue.SkinnedMesh),l=i.getShader();l.shaderState.cullMode=a.getShader().cullMode,l.shaderState.frontFace=a.getShader().frontFace;for(let e=0;e<1;e++){var u=i.getShader();s||u.setDefine("USE_TANGENT",s),h&&u.setDefine("USE_SKELETON",h),o&&u.setDefine("USE_MORPHTARGETS",o),n&&u.setDefine("USE_MORPHNORMALS",n),u.preCompile(t.geometry)}e.renderShader.setPassShader(oe.DEPTH,i)}e.addPass(oe.DEPTH,r,0)}}class ai extends ve{constructor(){super(),s(this,"instanceCount",0),s(this,"lodLevel",0),s(this,"alwaysRender",!1),s(this,"renderOrder",0),s(this,"instanceID"),s(this,"drawType",0),s(this,"_geometry"),s(this,"_materials",[]),s(this,"_castShadow",!0),s(this,"_castReflection",!1),s(this,"_castGI",!1),s(this,"_rendererMask",Ue.Default),s(this,"_inRenderer",!1),s(this,"_readyPipeline",!1),s(this,"_combineShaderRefection"),s(this,"_ignoreEnvMap"),s(this,"_ignorePrefilterMap"),this.rendererMask=Ue.Default}get geometry(){return this._geometry}set geometry(e){this._geometry=e}addMask(e){this._rendererMask=pt.addMask(this.rendererMask,e)}removeMask(e){this._rendererMask=pt.removeMask(this.rendererMask,e)}hasMask(e){return pt.hasMask(this.rendererMask,e)}get rendererMask(){return this._rendererMask}set rendererMask(e){this._rendererMask=e}get materials(){return this._materials}set materials(t){this._materials=t;let r=!1,i=0;for(let e=0;e<t.length;e++){var a=t[e];a.transparent&&(r=!0,i=i>a.sort?i:a.sort)}this.renderOrder=r?this.renderOrder:i,this._readyPipeline||this.initPipeline()}init(){this.instanceID=qe()}addRendererMask(e){this._rendererMask=pt.addMask(this._rendererMask,e)}removeRendererMask(e){this._rendererMask=pt.removeMask(this._rendererMask,e)}onEnable(){this._readyPipeline||this.initPipeline(),V.instance.addRenderNode(this.transform.scene3D,this)}onDisable(){V.instance.removeRenderNode(this.transform.scene3D,this)}selfCloneMaterials(e){var r=[];for(let e=0,t=this.materials.length;e<t;e++){var i=this.materials[e].clone();r.push(i)}return this.materials=r,this._readyPipeline=!1,this.initPipeline(),this}initPipeline(){if(this._geometry&&0<this._materials.length){for(let e=0;e<this._materials.length;e++){var r=this._materials[e],i=r.addPass(oe.COLOR,r);for(let e=0;e<i.length;e++){var a=i[e],a=Jr.getShader(a.shaderID);a.shaderReflection||a.preCompile(this._geometry),this._geometry.generate(a.shaderReflection)}this.object3D.bound=this._geometry.bounds}this._readyPipeline=!0;let t=0;for(let e=0;e<this.materials.length;e++){var s=this.materials[e];s.transparent,t=s.transparent?t>s.sort?t:s.sort:Math.max(t-3e3,0),this.castNeedPass(s.getShader())}this.renderOrder=t,this.enable&&this.transform&&this.transform.scene3D&&V.instance.addRenderNode(this.transform.scene3D,this)}}castNeedPass(e){if(this.castGI)for(let e=0;e<this.materials.length;e++){var t=this.materials[e];li.createGIPass(this,t)}if(this.castShadow)for(let e=0;e<this.materials.length;e++){var r=this.materials[e];r.shaderState.castShadow&&li.createShadowPass(this,r)}if(this.castReflection)for(let e=0;e<this.materials.length;e++){var i=this.materials[e];i.shaderState.castShadow&&li.createShadowPass(this,i)}if(!pt.hasMask(this.rendererMask,Ue.IgnoreDepthPass)&&_.setting.render.zPrePass&&e.shaderState.useZ)for(let e=0;e<this.materials.length;e++){var a=this.materials[e];li.createDepthPass(this,a)}else for(let e=0;e<this.materials.length;e++)this.materials[e].removePass(oe.DEPTH,0)}get castShadow(){return this._castShadow}set castShadow(e){this._castShadow=e}get castGI(){return this._castGI}set castGI(e){this._castGI=e}get castReflection(){return this._castReflection}set castReflection(e){this._castReflection=e}renderPass(t,r,i){var a=this;for(let e=0;e<a.materials.length;e++){var s=a.materials[e].renderPasses.get(r);if(s&&0!=s.length){C.bindGeometryBuffer(i.encoder,a._geometry);var o=a.object3D.transform._worldMatrix;for(let e=0;e<s.length;e++)if(s&&0!=s.length){var n=s[e];if(n.enable){var n=n.renderShader,h=(n.shaderState.splitTexture&&(i.endRenderPass(),be.WriteSplitColorTexture(a.instanceID),i.beginRenderPass(),C.bindCamera(i.encoder,t.camera),C.bindGeometryBuffer(i.encoder,a._geometry)),C.bindPipeline(i.encoder,n),a._geometry.subGeometries);for(let e=0;e<h.length;e++){var l=h[e].lodLevels[a.lodLevel];0<a.instanceCount?C.drawIndexed(i.encoder,l.indexCount,a.instanceCount,l.indexStart,0,0):C.drawIndexed(i.encoder,l.indexCount,1,l.indexStart,0,o.index)}}}}}}renderPass2(e,t,r,i,a,s=0){if(this.enable){this.nodeUpdate(e,t,r,i);for(let e=0;e<this.materials.length;e++){var o=this.materials[e].renderPasses.get(t);if(!o||0==o.length)return;if(o[e].enable){var n=this.object3D.transform._worldMatrix;if(2==this.drawType)for(let e=0;e<o.length;e++){var h=o[e].renderShader;C.bindPipeline(a,h),C.draw(a,6,1,0,n.index)}else{C.bindGeometryBuffer(a,this._geometry);for(let e=0;e<o.length;e++){var l=o[e].renderShader,u=(C.bindPipeline(a,l),this._geometry.subGeometries);for(let e=0;e<u.length;e++){var c=u[e].lodLevels[this.lodLevel];C.drawIndexed(a,c.indexCount,1,c.indexStart,0,n.index)}}}}}}}recordRenderPass2(e,t,r,i,a,s=0){if(this.enable){this.nodeUpdate(e,t,r,i);for(let e=0;e<this.materials.length;e++){var o=this.materials[e].renderPasses.get(t);if(!o||0==o.length)return;var n=this.object3D.transform._worldMatrix;for(let e=0;e<o.length;e++){var h=o[e].renderShader,l=(C.bindPipeline(a,h),this._geometry.subGeometries);for(let e=0;e<l.length;e++){var u=l[e].lodLevels[this.lodLevel];C.drawIndexed(a,u.indexCount,1,u.indexStart,0,n.index)}}}}}noticeShaderChange(){this.enable&&this.onEnable()}nodeUpdate(t,r,i,a){for(let e=0;e<this.materials.length;e++){var s=this.materials[e].renderPasses.get(r);if(s)for(let e=0;e<s.length;e++){var o,n,h=s[e],l=h.renderShader;l.shaderState.splitTexture&&(o=be.CreateSplitTexture(this.instanceID),l.setTexture("splitTexture_Map",o)),(this._ignoreEnvMap||l.setTexture("envMap",t.scene.envMap),this._ignorePrefilterMap||l.setTexture("prefilterMap",t.scene.envMap),l.pipeline)?l.apply(this._geometry,h,i,()=>this.noticeShaderChange()):(o=_.res.getTexture("BRDFLUT"),l.setTexture("brdflutMap",o),_.getRenderJob(t).shadowMapPassRenderer.depth2DTextureArray&&l.setTexture("shadowMap",_.getRenderJob(t).shadowMapPassRenderer.depth2DTextureArray),l.setTexture("pointShadowMap",_.getRenderJob(t).pointLightShadowRenderer.cubeTextureArray),(n=Lt.iesTexture)&&l.setTexture("iesTextureArrayMap",n),i.irradianceBuffer&&0<i.irradianceBuffer.length&&(l.setTexture("irradianceMap",i.irradianceBuffer[0]),l.setTexture("irradianceDepthMap",i.irradianceBuffer[1])),(n=Be.getLightEntries(t.scene))&&(l.setStorageBuffer("lightBuffer",n.storageGPUBuffer),n.irradianceVolume)&&l.setStructStorageBuffer("irradianceData",n.irradianceVolume.irradianceVolumeBuffer),a&&(l.setStorageBuffer("clustersUniform",a.clustersUniformBuffer),l.setStorageBuffer("lightAssignBuffer",a.lightAssignBuffer),l.setStorageBuffer("assignTable",a.assignTableBuffer),l.setStorageBuffer("clusterBuffer",a.clusterBuffer)),l.apply(this._geometry,h,i))}}}}let zo=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexAttributes {
        @location(0) position: vec4<f32>,
        @location(1) color: vec4<f32>,
    }

    struct VertexOutput {
        @location(0) varying_WPos: vec4<f32>,
        @location(1) varying_Color: vec4<f32>,
        @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main( vertex:VertexAttributes ) -> VertexOutput {
        var worldMatrix = models.matrix[u32(vertex.position.w)];
        var worldPos = (worldMatrix * vec4<f32>(vertex.position.xyz, 1.0));
        var viewPosition = ((globalUniform.viewMat) * worldPos);
        var clipPosition = globalUniform.projMat * viewPosition;

        var ORI_VertexOut: VertexOutput; 
        ORI_VertexOut.varying_WPos = worldPos;
        ORI_VertexOut.varying_Color = vertex.color;
        ORI_VertexOut.member = clipPosition;
        return ORI_VertexOut;
    }
`,No=`
    struct FragmentOutput {
        @location(0) color: vec4<f32>,
        // #if USE_WORLDPOS
            @location(1) worldPos: vec4<f32>,
        // #endif
        // #if USEGBUFFER
            @location(2) worldNormal: vec4<f32>,
            @location(3) material: vec4<f32>
        // #endif
    };

    @fragment
    fn main(  
        @location(0) vWorldPos: vec4<f32>,
        @location(1) varying_Color: vec4<f32>,
    ) -> FragmentOutput {
        var result: FragmentOutput;

        // #if USE_WORLDPOS
            result.worldPos = vWorldPos;
        // #endif

        // #if USEGBUFFER
            // result.worldNormal = vec4<f32>(0.0, 0.0, 0.0, 1.0); 
            result.material = vec4<f32>(0.0, 1.0, 0.0, 0.0);
        // #endif

        result.color = varying_Color;
        return result;
    }
`;class Fo{constructor(e,t){s(this,"mCount"),s(this,"mBatchSize"),s(this,"mBatchCount"),s(this,"mMinIndexCount"),s(this,"mOffset"),s(this,"mIndexBuffer"),s(this,"mDataBuffer"),s(this,"mBatchBuffers"),s(this,"mVertexShader"),s(this,"mFragmentShader"),s(this,"mRenderPipeline"),s(this,"mRenderPipelineLayout"),s(this,"mVertexBufferLayout"),s(this,"mGPUPrimitiveTopology"),this.mMinIndexCount=e,this.mGPUPrimitiveTopology=t,this.mBatchSize=Math.trunc(65536/this.mMinIndexCount),this.init()}reset(){this.mCount=0,this.mOffset=0,this.mBatchCount=0}addShapeData(e){let t=e.shapeData;for(;0<t.length;){if(this.mOffset>=this.mDataBuffer.length&&this.flush(),this.mOffset+t.length<=this.mDataBuffer.length){this.mDataBuffer.set(t,this.mOffset),this.mOffset+=t.length;break}var r=this.mDataBuffer.length-this.mOffset;this.mDataBuffer.set(t.slice(0,r),this.mOffset),this.mOffset+=r,t=t.slice(r)}}flush(){if(0<this.mOffset){let e;this.mBatchCount<this.mBatchBuffers.length?e=this.mBatchBuffers[this.mBatchCount]:(e=E.device.createBuffer({size:this.mDataBuffer.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.mBatchBuffers.push(e)),E.device.queue.writeBuffer(e,0,this.mDataBuffer,0,this.mOffset),this.mCount+=this.mOffset/8,this.mBatchCount++,this.mOffset=0}}render(e,t){var r=E.device;if(this.mRenderPipeline||(i=e.outAttachments,-1!=e.outColor&&(i[e.outColor].blend=Os.getBlend(ge.NONE)),this.mRenderPipelineLayout=r.createPipelineLayout({bindGroupLayouts:[Li.getGlobalDataBindGroupLayout()]}),r={label:"Graphic3DFixedRenderPipeline",layout:this.mRenderPipelineLayout,vertex:{module:this.mVertexShader,entryPoint:"main",buffers:[this.mVertexBufferLayout]},fragment:{module:this.mFragmentShader,entryPoint:"main",targets:i},primitive:{topology:this.mGPUPrimitiveTopology,cullMode:xr.back,frontFace:"ccw"}},e.depthTexture&&(r.depthStencil={depthWriteEnabled:!0,depthCompare:ti.less_equal,format:e.depthTexture.format}),this.mRenderPipeline=C.createPipeline(r)),this.flush(),0<this.mBatchCount){t.setPipeline(this.mRenderPipeline),t.setIndexBuffer(this.mIndexBuffer,"uint16");var i=this.mCount/this.mMinIndexCount;for(let e=Math.trunc(i/this.mBatchSize)-1;0<=e;e--)t.setVertexBuffer(0,this.mBatchBuffers[e]),t.drawIndexed(this.mMinIndexCount*this.mBatchSize,1,0,0,0);0!=(i%=this.mBatchSize)&&(t.setVertexBuffer(0,this.mBatchBuffers[this.mBatchCount-1]),t.drawIndexed(this.mMinIndexCount*i,1,0,0,0))}}init(){var e=E.device,t=new Uint16Array(4*(Math.trunc(this.mMinIndexCount*this.mBatchSize/4)+1));for(let e=0;e<t.length;e++)t[e]=e;this.mIndexBuffer=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.mIndexBuffer,0,t),this.mVertexBufferLayout={arrayStride:32,stepMode:"vertex",attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}]},this.mBatchBuffers=[],this.mDataBuffer=new Float32Array(8*t.length),this.mBatchBuffers.push(e.createBuffer({size:this.mDataBuffer.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.mVertexShader=this.createShaderModule("Graphic3DFixedRenderPipeline.vs",it.parse(zo,{})),this.mFragmentShader=this.createShaderModule("Graphic3DFixedRenderPipeline.fs",it.parse(No,{})),this.reset()}createShaderModule(e,t){e=E.device.createShaderModule({label:e,code:t});return e.getCompilationInfo().then(e=>{0<e.messages.length&&(console.log(t),console.log(e))}),e}}class Nt{}s(Nt,"ShapeVertexSize",8);class ls{constructor(e){s(this,"uuid"),s(this,"type"),s(this,"color"),s(this,"count",0),s(this,"shapeData"),s(this,"dirtyData",!1),s(this,"memoryDataIndex",-1),s(this,"transformIndex"),this.transformIndex=e}buildAxis(e=new p(0,0,0),t=10){this.buildLines([e,new p(e.x+t,e.y,e.z)],b.hexRGBColor(b.RED)),this.buildLines([e,new p(e.x,e.y+t,e.z)],b.hexRGBColor(b.GREEN)),this.buildLines([e,new p(e.x,e.y,e.z+t)],b.hexRGBColor(b.BLUE))}buildLines(r,e=b.COLOR_WHITE){if(!(r.length<2))if(2==r.length)this.fillShapeData(r,e);else{var i=new Array(r.length+r.length-2);for(let e=1,t=0;e<r.length;++e)i[t++]=r[e-1],i[t++]=r[e];this.fillShapeData(i,e)}}buildArcLine(t,r,i,e,a=16,s=p.Y_AXIS,o=b.COLOR_WHITE){var n=(e-i)*te,h=(i*=te,[]);for(let e=0;e<=a;++e){1<e&&h.push(h[h.length-1]);var l=n*(e/a)+i,u=r*Math.cos(l),c=r*Math.sin(l);switch(s){case p.X_AXIS:h.push(t.add(new p(0,u,c)));break;case p.Y_AXIS:h.push(t.add(new p(u,0,c)));break;default:p.Z_AXIS;h.push(t.add(new p(u,c,0)))}}this.fillShapeData(h,o)}buildCircle(t,r,i=32,a=p.Y_AXIS,e=b.COLOR_WHITE){var s=[];for(let e=0;e<=i;++e){var o=2*Math.PI*e/i,n=r*Math.cos(o),h=r*Math.sin(o);switch(a){case p.X_AXIS:s.push(t.add(new p(0,n,h)));break;case p.Y_AXIS:s.push(t.add(new p(n,0,h)));break;default:p.Z_AXIS;s.push(t.add(new p(n,h,0)))}0<e&&s.push(s[s.length-1])}s.push(s[0]),this.fillShapeData(s,e)}fillShapeData(t,r){this.shapeData?this.count+Nt.ShapeVertexSize*t.length>=this.shapeData.length&&((e=new Float32Array(this.shapeData.length+Nt.ShapeVertexSize*t.length)).set(this.shapeData),this.shapeData=e):this.shapeData=new Float32Array(Nt.ShapeVertexSize*t.length);var e,i=this.shapeData;for(let e=0;e<t.length;++e){var a=t[e];i[this.count++]=a.x,i[this.count++]=a.y,i[this.count++]=a.z,i[this.count++]=this.transformIndex,r instanceof b?(i[this.count++]=r.r,i[this.count++]=r.g,i[this.count++]=r.b,i[this.count++]=r.a):(a=r[e],i[this.count++]=a.r,i[this.count++]=a.g,i[this.count++]=a.b,i[this.count++]=a.a)}this.dirtyData=!0}reset(){this.count=0}}class Ma extends ai{constructor(e,t){super(),s(this,"shapes"),s(this,"mDirtyData",!1),s(this,"mMinIndexCount"),s(this,"mGPUPrimitiveTopology"),s(this,"mRenderPipeline"),this.alwaysRender=!0,this.mMinIndexCount=e,this.mGPUPrimitiveTopology=t,this.shapes=new Map,this.addRendererMask(Ue.Particle)}fillShapData(e,t,r,i){this.mDirtyData=!0,this.shapes.has(e)?(a=this.shapes.get(e)).shapeData.length<Nt.ShapeVertexSize*i.length&&(a.shapeData=new Float32Array(Nt.ShapeVertexSize*i.length)):((a=new ls(this.transform._worldMatrix.index)).type=t,a.color=r,a.shapeData=new Float32Array(Nt.ShapeVertexSize*i.length));var a,s=a.shapeData,o=this.transform._worldMatrix.index;for(let e=0,t=0;e<i.length;++e){var n=i[e];s[t++]=n.x,s[t++]=n.y,s[t++]=n.z,s[t++]=o,s[t++]=r.r,s[t++]=r.g,s[t++]=r.b,s[t++]=r.a}this.shapes.set(e,a)}init(){super.init(),this.castGI=!1,this.castShadow=!1,this.mRenderPipeline=new Fo(this.mMinIndexCount,this.mGPUPrimitiveTopology)}removeShape(e){this.shapes.has(e)&&(this.mDirtyData=!0,this.shapes.delete(e))}initPipeline(){this.object3D.bound=new je(p.ZERO,p.MAX),this._readyPipeline=!0}nodeUpdate(e,t,r,i){this.mDirtyData&&(this.mRenderPipeline.reset(),this.shapes.forEach((e,t)=>{this.mRenderPipeline.addShapeData(e)}),this.mDirtyData=!1)}renderPass2(e,t,r,i,a,s=0){this.mRenderPipeline.render(r,a)}allocGraphics3DShape(e,t){let r;return this.shapes.has(e)?(r=this.shapes.get(e)).reset():((r=new ls(t)).uuid=e,r.type="line",r.color=b.COLOR_WHITE,this.shapes.set(r.uuid,r)),this.mDirtyData=!0,r}}class ko{constructor(){s(this,"opaqueList",[]),s(this,"transparentList",[]),s(this,"offset",0),s(this,"sky")}clean(){this.opaqueList.length=0,this.transparentList.length=0,this.offset=0}}class hs{constructor(){s(this,"renderGroup"),this.renderGroup=new Map}collect_add(t){let e="",r="";e+=t.geometry.uuid;for(let e=0;e<t.materials.length;e++){var i=t.materials[e];r+=i.renderShader.shaderVariant}var a=e+r;this.renderGroup.has(a)||this.renderGroup.set(a,{bundleMap:new Map,key:a,renderNodes:[]}),-1==this.renderGroup.get(a).renderNodes.indexOf(t)&&this.renderGroup.get(a).renderNodes.push(t)}}const Xa=class{constructor(){s(this,"_sceneLights"),s(this,"_source_opaqueRenderNodes"),s(this,"_source_transparentRenderNodes"),s(this,"_graphics"),s(this,"_op_renderGroup"),s(this,"_tr_renderGroup"),s(this,"state",{giLightingChange:!0}),s(this,"sky"),s(this,"_collectInfo"),this._sceneLights=new Map,this._source_opaqueRenderNodes=new Map,this._source_transparentRenderNodes=new Map,this._graphics=[],this._op_renderGroup=new Map,this._tr_renderGroup=new Map,this._collectInfo=new ko}static get instance(){return this._instance||(this._instance=new Xa),this._instance}getPashList(e,t){return t.renderOrder<3e3?this._source_opaqueRenderNodes.get(e):3e3<=t.renderOrder?this._source_transparentRenderNodes.get(e):void 0}sortRenderNode(t,r){for(let e=t.length-1;0<e;e--)if(t[e].renderOrder<r.renderOrder)return void t.push(r);t.push(r)}addRenderNode(e,t){var r;e&&(t.hasMask(Ue.Sky)?this.sky=t:t instanceof Ma?-1==this._graphics.indexOf(t)&&this._graphics.push(t):ss.hasMask(t.object3D.renderLayer,Si.None)?(this.removeRenderNode(e,t),t.renderOrder<3e3?(this._source_opaqueRenderNodes.has(e)||this._source_opaqueRenderNodes.set(e,[]),this._source_opaqueRenderNodes.get(e).push(t)):3e3<=t.renderOrder&&(this._source_transparentRenderNodes.has(e)||this._source_transparentRenderNodes.set(e,[]),this._source_transparentRenderNodes.get(e).push(t)),-1==(r=this.getPashList(e,t)).indexOf(t)&&this.sortRenderNode(r,t)):(this.removeRenderNode(e,t),t.renderOrder<3e3?(this._op_renderGroup.has(e)||this._op_renderGroup.set(e,new hs),this._op_renderGroup.get(e).collect_add(t)):3e3<=t.renderOrder&&(this._tr_renderGroup.has(e)||this._tr_renderGroup.set(e,new hs),this._tr_renderGroup.get(e).collect_add(t))),t.object3D.renderNode=t)}removeRenderNode(e,t){t.hasMask(Ue.Sky)?this.sky=null:ss.hasMask(t.object3D.renderLayer,Si.None)&&(e=this.getPashList(e,t))&&-1!=(t=e.indexOf(t))&&e.splice(t,1)}addLight(e,t){this._sceneLights.has(e)?-1==this._sceneLights.get(e).indexOf(t)&&this._sceneLights.get(e).push(t):this._sceneLights.set(e,[t])}removeLight(e,t){this._sceneLights.has(e)&&-1!=(t=(e=this._sceneLights.get(e)).indexOf(t))&&e.splice(t,1)}getLights(e){return this._sceneLights.get(e)||[]}getRenderNodes(e){this._collectInfo.clean(),this._collectInfo.sky=this.sky;var t=this._source_opaqueRenderNodes.get(e),t=(t&&(this._collectInfo.opaqueList=t.concat(),this._collectInfo.offset=t.length),this._source_transparentRenderNodes.get(e));return t&&(this._collectInfo.transparentList=t.concat()),this._collectInfo}getOpRenderGroup(e){return this._op_renderGroup.get(e)}getTrRenderGroup(e){return this._tr_renderGroup.get(e)}getGraphicList(){return this._graphics}};let V=Xa;s(V,"_instance");class Go{constructor(){s(this,"storageGPUBuffer"),s(this,"irradianceVolume"),s(this,"_lightList",[]),this.storageGPUBuffer=new Se(vi.lightSize*_.setting.light.maxLight,GPUBufferUsage.COPY_SRC),this.irradianceVolume=new po;for(let e=0;e<_.setting.light.maxLight;e++){var t=this.storageGPUBuffer.memory.allocation_node(4*vi.lightSize);this._lightList.push(t)}this.storageGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(e){var t=V.instance.getLights(e.scene);for(let e=0;e<t.length;e++){var r=t[e].lightData;this.writeLightBytes(r,this._lightList[e])}this.storageGPUBuffer.apply()}writeLightBytes(e,t){t.offset=0,t.writeFloat(e.index),t.writeInt32(e.lightType),t.writeFloat(e.radius),t.writeFloat(e.linear),t.writeVector3(e.lightPosition),t.writeFloat(e.lightMatrixIndex),t.writeVector3(e.direction),t.writeFloat(e.quadratic),t.writeRGBColor(e.lightColor),t.writeFloat(e.intensity),t.writeFloat(e.innerAngle),t.writeFloat(e.outerAngle),t.writeFloat(e.range),t.writeInt32(e.castShadowIndex),t.writeVector3(e.lightTangent),t.writeFloat(-1)}}class Vo{constructor(){s(this,"uuid"),s(this,"index"),s(this,"usage"),s(this,"groupBufferSize"),s(this,"matrixBufferDst"),this.uuid=qe(),this.groupBufferSize=0,this.usage=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.cacheWorldMatrix()}cacheWorldMatrix(){this.groupBufferSize=N.maxCount*N.blockBytes,this.matrixBufferDst=new Se(this.groupBufferSize/4),this.matrixBufferDst.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBufferDst.buffer.label=this.groupBufferSize.toString()}writeBuffer(){var e=N.matrixBytes;let t=e.byteLength,r=0;for(;r<t;){var i=Math.min(32e4,t-r);E.device.queue.writeBuffer(this.matrixBufferDst.buffer,r,e.buffer,e.byteOffset+r,i),r+=i}}}class Be{static init(){this.modelMatrixBindGroup=new Vo,this._cameraBindGroups=new Map,this._lightEntriesMap=new Map}static getCameraGroup(e){let t=this._cameraBindGroups.get(e);return t||(t=new fo(this.modelMatrixBindGroup),this._cameraBindGroups.set(e,t)),e.isShadowCamera?t.setShadowCamera(e):t.setCamera(e),t}static getLightEntries(e){var t;return e||console.log("getLightEntries scene is null"),this._lightEntriesMap.get(e)||(t=new Go,this._lightEntriesMap.set(e,t)),this._lightEntriesMap.get(e)}}s(Be,"_cameraBindGroups"),s(Be,"_lightEntriesMap"),s(Be,"modelMatrixBindGroup");const hr=class{static bindPipeline(t,r){if(hr.lastShader!=r){hr.lastShader=r,hr.lastPipeline!=r.pipeline&&(hr.lastPipeline=r.pipeline,t.setPipeline(r.pipeline));for(let e=1;e<r.bindGroups.length;e++){var i=r.bindGroups[e];i&&t.setBindGroup(e,i)}}}static bindCamera(e,t){t=Be.getCameraGroup(t);e.setBindGroup(0,t.globalBindGroup)}static bindGeometryBuffer(t,e){if(this.lastGeometry!=e){(this.lastGeometry=e).indicesBuffer&&t.setIndexBuffer(e.indicesBuffer.indicesGPUBuffer.buffer,e.indicesBuffer.indicesFormat);var r=e.vertexBuffer.vertexGPUBuffer,i=e.vertexBuffer.vertexBufferLayouts;for(let e=0;e<i.length;e++){var a=i[e];t.setVertexBuffer(e,r.buffer,a.offset,a.size)}}}static cleanCache(){this.lastGeometry=null,this.lastPipeline=null,this.lastShader=null}static createPipeline(e){return mt.countStart("GPUContext","pipeline"),E.device.createRenderPipeline(e)}static beginCommandEncoder(){return mt.countStart("GPUContext","beginCommandEncoder"),this.LastCommand&&E.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=E.device.createCommandEncoder(),this.LastCommand}static endCommandEncoder(e){this.LastCommand==e&&(E.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=null,mt.countStart("GPUContext","endCommandEncoder"))}static recordBundleEncoder(e){return E.device.createRenderBundleEncoder(e)}static beginRenderPass(e,t){var r;if(this.cleanCache(),this.renderPassCount++,(this.lastRenderPassState=t).renderTargets&&0<t.renderTargets.length)for(let e=0;e<t.renderTargets.length;++e){var i=t.renderTargets[e],a=t.renderPassDescriptor.colorAttachments[e];0<t.multisample&&1==t.renderTargets.length?(a.view=t.multiTexture.createView(),a.resolveTarget=i.getGPUView()):a.view=i.getGPUTexture().createView()}else(r=t.renderPassDescriptor.colorAttachments[0])&&(0<t.multisample?(r.view=t.multiTexture.createView(),r.resolveTarget=E.context.getCurrentTexture().createView()):r.view=E.context.getCurrentTexture().createView());return e.beginRenderPass(t.renderPassDescriptor)}static drawIndexed(e,t,r,i,a,s){e.drawIndexed(t,r,i,a,s),this.drawCount++}static draw(e,t,r,i,a){e.draw(t,r,i,a),this.drawCount++}static endPass(e){e.insertDebugMarker("end"),e.end()}static computeCommand(e,t){var r=e.beginComputePass();for(let e=0;e<t.length;e++)t[e].compute(r);r.end()}};let C=hr;s(C,"lastGeometry"),s(C,"lastPipeline"),s(C,"lastShader"),s(C,"drawCount",0),s(C,"renderPassCount",0),s(C,"geometryCount",0),s(C,"pipelineCount",0),s(C,"matrixCount",0),s(C,"lastRenderPassState"),s(C,"LastCommand");class us{constructor(){s(this,"source"),s(this,"input"),s(this,"output")}reset(e){this.input&&this.input.destroy(),this.output&&this.output.destroy(),this.input=this.output=null,this.source=e}apply(e){var t;this.source&&(this.input||(t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.input=new Se(this.source.length,t,this.source),this.input.apply()),this.output||(t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,this.output=new Se(3*e,t),this.output.apply()))}}class Ho{constructor(){s(this,"enable"),s(this,"morphTargetsRelative"),s(this,"MaxMorphTargetCount",64),s(this,"_computeConfigArray"),s(this,"_computeConfigBuffer"),s(this,"_morphInfluenceArray"),s(this,"_morphInfluenceBuffer"),s(this,"_positionAttrDataGroup"),s(this,"_normalAttrDataGroup"),s(this,"_isInfluenceDirty"),s(this,"_morphTargetCount"),s(this,"_totalVertexCount"),s(this,"_computeShader"),s(this,"_computeShaders"),s(this,"_computeWorkGroupXY",1),s(this,"_collectMorphTargetData"),this._isInfluenceDirty=!0,this.generateGPUBuffer(),this._positionAttrDataGroup=new us,this._normalAttrDataGroup=new us}initMorphTarget(e){this._collectMorphTargetData=this.collectMorphTargetList(e),this._computeShader&&this._computeShader.destroy();e=Re.CsMain;this._computeShader=new Ce(e),this._collectMorphTargetData.mergedNormal?this._computeShader.setDefine("USE_MORPHNORMALS",!0):this._computeShader.deleteDefine("USE_MORPHNORMALS"),this._computeShaders=[this._computeShader],this._isInfluenceDirty=!0,this._morphTargetCount=this._collectMorphTargetData.mtCount,this._totalVertexCount=this._collectMorphTargetData.vCount,this._morphInfluenceArray.fill(0),this._computeWorkGroupXY=this.calcWorkGroup(this._totalVertexCount),this._positionAttrDataGroup.reset(this._collectMorphTargetData.mergedPos),this._normalAttrDataGroup.reset(this._collectMorphTargetData.mergedNormal)}applyRenderShader(e){this.uploadMorphTargetBuffer(),this.uploadConfigGBuffer(),e.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),e.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&e.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)}computeMorphTarget(e){this.uploadConfigGBuffer(),this.uploadMorphTargetBuffer(),this._computeShader.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),this._computeShader.setStorageBuffer("morphTargetInfluence",this._morphInfluenceBuffer),this._computeShader.setStorageBuffer("morphTargetPositions",this._positionAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&(this._computeShader.setStorageBuffer("morphTargetNormals",this._normalAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)),this._computeShader.workerSizeX=this._computeWorkGroupXY,this._computeShader.workerSizeY=this._computeWorkGroupXY,this._computeShader.workerSizeZ=1,C.computeCommand(e,this._computeShaders)}updateInfluence(e,t){this._isInfluenceDirty=!0,this._morphInfluenceArray[e]=t}collectMorphTargetList(e){var r=this.collectAttribute("a_morphPositions_",e),i=r.length,a=r[0].data.length/3,s=new Float32Array(a*i*3);{let t=0;for(let e=0;e<i;e++){var o=r[e];s.set(o.data,t),t+=o.data.length}}let n=this.collectAttribute("a_morphNormals_",e),h;if(n&&0<n.length){let t=0;h=new Float32Array(a*i*3);for(let e=0;e<i;e++){var l=n[e];h.set(l.data,t),t+=l.data.length}}return{mtCount:i,vCount:a,mergedPos:s,mergedNormal:h}}collectAttribute(t,r){var i=[];for(let e=0;e<this.MaxMorphTargetCount;e++){var a=t+e,a=r.getAttribute(a);if(!a)break;i[e]=a}return i}uploadConfigGBuffer(){if(this._isInfluenceDirty){let t=0;for(let e=0;e<this._morphTargetCount;e++)t+=this._morphInfluenceArray[e];this._morphInfluenceBuffer.setFloat32Array("data",this._morphInfluenceArray),this._morphInfluenceBuffer.apply(),this._computeConfigArray[0]=this.morphTargetsRelative?1:1-t,this._computeConfigArray[1]=this._morphTargetCount,this._computeConfigArray[2]=this._totalVertexCount,this._computeConfigArray[3]=this._computeWorkGroupXY,this._computeConfigBuffer.setFloat32Array("data",this._computeConfigArray),this._computeConfigBuffer.apply(),this._isInfluenceDirty=!1}}calcWorkGroup(e){e=Math.ceil(Math.sqrt(e)),e=Math.ceil(Math.log2(e));return Math.pow(2,e)}uploadMorphTargetBuffer(){this._positionAttrDataGroup.output||this._positionAttrDataGroup.apply(this._totalVertexCount),this._normalAttrDataGroup.output||this._normalAttrDataGroup.apply(this._totalVertexCount)}generateGPUBuffer(){this._computeConfigArray=new Float32Array(4),this._computeConfigBuffer=new Mt(4),this._morphInfluenceArray=new Float32Array(this.MaxMorphTargetCount);var e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this._morphInfluenceBuffer=new Se(this.MaxMorphTargetCount,e)}}class Le extends ai{constructor(){super(),s(this,"receiveShadow"),s(this,"morphData")}onEnable(){super.onEnable()}onDisable(){super.onDisable()}get geometry(){return this._geometry}set geometry(e){var t=null!=(this._geometry=e).morphTargetDictionary;t&&(this.morphData||(this.morphData=new Ho),this.morphData.morphTargetsRelative=e.morphTargetsRelative,this.morphData.initMorphTarget(e)),this.morphData&&(this.morphData.enable=t),this.morphData&&this.morphData.enable?this.addRendererMask(Ue.MorphTarget):this.removeRendererMask(Ue.MorphTarget),this._readyPipeline&&this.initPipeline()}get material(){return this._materials[0]}set material(e){this.materials=[e]}setMorphInfluence(e,t){this.morphData&&this.morphData.enable&&0<=(e=this._geometry.morphTargetDictionary[e])&&this.morphData.updateInfluence(e,t)}setMorphInfluenceIndex(e,t){this.morphData&&this.morphData.enable&&0<=e&&this.morphData.updateInfluence(e,t)}onCompute(e,t){this.morphData&&this.morphData.enable&&this.morphData.computeMorphTarget(t)}nodeUpdate(e,t,r,i){if(this.morphData&&this.morphData.enable)for(let e=0;e<this.materials.length;e++){var a=this.materials[e].renderPasses.get(t);if(a)for(let e=0;e<a.length;e++){var s=a[e].renderShader;this.morphData.applyRenderShader(s)}}super.nodeUpdate(e,t,r,i)}cloneTo(e){e=e.addComponent(Le);e.geometry=this.geometry,e.material=this.material,e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask}drawWireFrame(){this.object3D.transform.worldPosition}}class Xo{constructor(){s(this,"label",""),s(this,"customSize",!1),s(this,"zPreTexture",null),s(this,"depthTexture",null),s(this,"outAttachments"),s(this,"outColor",-1),s(this,"renderTargets"),s(this,"rtTextureDescripts"),s(this,"irradianceBuffer"),s(this,"multisample",0),s(this,"multiTexture"),s(this,"depthViewIndex",0),s(this,"depthCleanValue",0),s(this,"isOutTarget",!0),s(this,"camera3D"),s(this,"rtFrame"),s(this,"renderPassDescriptor"),s(this,"renderBundleEncoderDescriptor"),s(this,"depthLoadOp")}getLastRenderTexture(){return this.renderTargets&&0<this.renderTargets.length?this.renderTargets[0]:_.res.redTexture}}const ur=class{static createRendererPassState(t,e=null){var r=new Xo;if(r.label=t.label,r.customSize=t.customSize,r.rtFrame=t,r.zPreTexture=t.zPreTexture,r.depthTexture=t.depthTexture,r.depthViewIndex=t.depthViewIndex,r.isOutTarget=t.isOutTarget,r.depthCleanValue=t.depthCleanValue,r.depthLoadOp=t.depthLoadOp,t&&0<t.attachments.length){r.renderTargets=t.attachments,r.rtTextureDescripts=t.rtDescriptors,r.renderPassDescriptor=ur.getRenderPassDescriptor(r),r.renderBundleEncoderDescriptor=ur.getRenderBundleDescriptor(r),r.outAttachments=[];for(let e=0;e<t.attachments.length;e++){var i=t.attachments[e];r.outAttachments[e]={format:i.format},-1!=i.name.indexOf(he.colorBufferTex_NAME)&&(r.outColor=e)}}else r.renderPassDescriptor=ur.getRenderPassDescriptor(r,e),r.renderBundleEncoderDescriptor=ur.getRenderBundleDescriptor(r),r.outAttachments=[{format:z.bgra8unorm}],r.outColor=0;return r}static getRenderPassDescriptor(t,e=null){E.device,E.presentationSize;var r,i=[];if(t.renderTargets&&0<t.renderTargets.length){t.renderTargets[0].width,t.renderTargets[0].height;for(let e=0;e<t.renderTargets.length;e++){var a=t.renderTargets[e],s=t.rtTextureDescripts[e];i.push({view:a.getGPUView(),resolveTarget:void 0,loadOp:s.loadOp,clearValue:s.clearValue,storeOp:s.storeOp})}}else t.customSize||(r=E.canvasConfig&&E.canvasConfig.alpha?[1,1,1,0]:[0,0,0,1],1==t.isOutTarget&&i.push({view:void 0,resolveTarget:void 0,loadOp:E.canvasConfig&&E.canvasConfig.alpha||null!=e?"load":"clear",clearValue:r,storeOp:"store"}));let o=null;return o=t.depthTexture||t.zPreTexture?(t.zPreTexture&&(t.depthTexture=t.zPreTexture),{label:t.label+" renderPassDescriptor zPreTexture"+(t.zPreTexture?"load":"clear"),colorAttachments:i,depthStencilAttachment:{view:t.depthTexture.getGPUView(),depthLoadOp:t.zPreTexture?"load":t.depthLoadOp,depthClearValue:t.zPreTexture?1:t.depthCleanValue,depthStoreOp:"store"}}):{colorAttachments:i,label:"renderPassDescriptor not writeDepth"},this.renderPassDescriptorCount++,o}static getRenderBundleDescriptor(t){E.presentationSize;var r=[];if(t.renderTargets&&0<t.renderTargets.length){t.renderTargets[0].width,t.renderTargets[0].height;for(let e=0;e<t.renderTargets.length;e++){var i=t.renderTargets[e];r.push(i.format)}}let e=null;return e=t.depthTexture?{colorFormats:r,depthStencilFormat:t.depthTexture.format}:{colorFormats:r},this.renderPassDescriptorCount++,e}};let De=ur;s(De,"bindGroupDescriptorCount",0),s(De,"bindTextureDescriptorCount",0),s(De,"renderPassDescriptorCount",0),s(De,"pipelineDescriptorCount",0);class cs extends er{constructor(e){super(),s(this,"node"),this.bufferType=Ct.VertexGPUBuffer,this.createVertexBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX,e)}createVertexBuffer(e,t){var r=E.device;this.byteSize=t*Float32Array.BYTES_PER_ELEMENT,this.usage=e,this.buffer&&this.destroy(),this.buffer=r.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),this.node=this.memory.allocation_node(this.byteSize)}}var Et=(e=>(e[e.split=0]="split",e[e.compose=1]="compose",e))(Et||{});class Wo{constructor(){s(this,"vertexCount",0),s(this,"vertexGPUBuffer"),s(this,"geometryType",Et.compose),s(this,"_vertexBufferLayouts"),s(this,"_attributeSlotLayouts"),s(this,"_attributeLocation"),this._vertexBufferLayouts=[],this._attributeLocation={},this._attributeSlotLayouts=[]}get vertexBufferLayouts(){return this._vertexBufferLayouts}createVertexBuffer(e,t){switch(this.geometryType){case Et.split:this.createSplitVertexBuffer(e,t);break;case Et.compose:this.createComposeVertexBuffer(e,t)}}createSplitVertexBuffer(t,r){let i=0;for(let e=0;e<r.attributes.length;e++){var a=r.attributes[e];if("index"!=a.name){this._attributeLocation[a.name]=a.location;var s={name:a.name,format:a.format,offset:0,shaderLocation:a.location,stride:mr[a.format]};this._attributeSlotLayouts[a.location]=[s];let e=t.get(a.name);e||(e={attribute:a.name,data:new Float32Array(a.size*this.vertexCount)},t.set(a.name,e));s=e.data.length/s.stride;0!=this.vertexCount&&this.vertexCount!=s&&console.error(" vertex count not match attribute count"),this.vertexCount=s,this._vertexBufferLayouts[a.location]={name:a.name,arrayStride:4*a.size,stepMode:"vertex",attributes:this._attributeSlotLayouts[a.location],offset:4*i,size:this.vertexCount*a.size*4},i+=this.vertexCount*a.size}}this.vertexGPUBuffer=new cs(i)}createComposeVertexBuffer(t,r){this._attributeSlotLayouts[0]=[];let i=0;for(let e=0;e<r.attributes.length;e++){var a=r.attributes[e];if("index"!=a.name){this._attributeLocation[a.name]=a.location;var s={name:a.name,format:a.format,offset:4*i,shaderLocation:a.location,stride:mr[a.format]};this._attributeSlotLayouts[0][a.location]=s;let e=t.get(a.name);e||(e={attribute:a.name,data:new Float32Array(a.size*this.vertexCount)},t.set(a.name,e));s=e.data.length/s.stride;0!=this.vertexCount&&this.vertexCount!=s&&console.error(" vertex count not match attribute count"),this.vertexCount=s,i+=a.size}}this._vertexBufferLayouts[0]={name:"composeStruct",arrayStride:4*i,stepMode:"vertex",attributes:this._attributeSlotLayouts[0],offset:0,size:this.vertexCount*i*4},this.vertexGPUBuffer=new cs(this.vertexCount*i)}upload(e,r){switch(this.geometryType){case Et.split:var t=this._attributeLocation[e],t=this._vertexBufferLayouts[t];this.vertexGPUBuffer.node.setFloat32Array(t.offset/4,r.data);break;case Et.compose:for(let t=0;t<this.vertexCount;t++){var i=this._attributeSlotLayouts[0][this._attributeLocation[e]];for(let e=0;e<i.stride;e++){var a=r.data[t*i.stride+e],s=t*(this._vertexBufferLayouts[0].arrayStride/4)+i.offset/4+e;this.vertexGPUBuffer.node.setFloat(a,s)}}}this.vertexGPUBuffer.apply()}updateAttributes(n){switch(this.geometryType){case Et.split:for(let e=0;e<this._vertexBufferLayouts.length;e++){var t=this._vertexBufferLayouts[e],r=n.get(t.name);this.vertexGPUBuffer.node.setFloat32Array(t.offset/4,r.data)}break;case Et.compose:for(let o=0;o<this.vertexCount;o++)this._attributeSlotLayouts.forEach(t=>{for(let e=0;e<t.length;e++){var r=t[e],i=n.get(r.name);for(let e=0;e<r.stride;e++){var a=i.data[o*r.stride+e],s=o*(this._vertexBufferLayouts[0].arrayStride/4)+r.offset/4+e;this.vertexGPUBuffer.node.setFloat(a,s)}}})}this.vertexGPUBuffer.apply()}compute(){}}class Yo extends er{constructor(e){super(),s(this,"indicesNode"),this.bufferType=Ct.IndicesGPUBuffer,this.createIndicesBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX|GPUBufferUsage.INDIRECT,e)}createIndicesBuffer(e,t){var r=E.device;this.byteSize=4*t.length,this.usage=e,this.buffer&&this.destroy(),this.buffer=r.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),t&&(this.indicesNode=this.memory.allocation_node(4*t.length),this.indicesNode.setArrayBuffer(0,t),this.apply())}}class jo{constructor(){s(this,"uuid",""),s(this,"name"),s(this,"indicesGPUBuffer"),s(this,"indicesFormat","uint16"),s(this,"indicesCount",0)}createIndicesBuffer(e){e.data instanceof Uint16Array?this.indicesFormat="uint16":e.data instanceof Uint32Array&&(this.indicesFormat="uint32"),this.indicesCount=e.data.length,this.indicesGPUBuffer=new Yo(e.data)}upload(e){this.indicesGPUBuffer.indicesNode.setArrayBuffer(0,e),this.indicesGPUBuffer.apply()}compute(){}}class qo{constructor(){s(this,"lodLevels")}}class tr{constructor(){s(this,"uuid"),s(this,"name"),s(this,"subGeometries",[]),s(this,"morphTargetsRelative"),s(this,"morphTargetDictionary"),s(this,"bounds"),s(this,"_attributeMap"),s(this,"_attributes"),s(this,"_indicesBuffer"),s(this,"_vertexBuffer"),this.uuid=qe(),this._attributeMap=new Map,this._attributes=[],this.bounds=new je(new p,new p(1,1,1)),this.bounds.min.x=Number.MAX_VALUE,this.bounds.min.y=Number.MAX_VALUE,this.bounds.min.z=Number.MAX_VALUE,this.bounds.max.x=-Number.MAX_VALUE,this.bounds.max.y=-Number.MAX_VALUE,this.bounds.max.z=-Number.MAX_VALUE,this._vertexBuffer=new Wo}get indicesBuffer(){return this._indicesBuffer}get vertexBuffer(){return this._vertexBuffer}get vertexAttributes(){return this._attributes}get vertexAttributeMap(){return this._attributeMap}get geometryType(){return this._vertexBuffer.geometryType}set geometryType(e){this._vertexBuffer.geometryType=e}updateBounds(e,t){this.bounds.setFromMinMax(e,t)}addSubGeometry(...e){var t=new qo;t.lodLevels=e,this.subGeometries.push(t)}generate(e){this._indicesBuffer.upload(this.getAttribute(H.indices).data),this._vertexBuffer.createVertexBuffer(this._attributeMap,e),this._vertexBuffer.updateAttributes(this._attributeMap)}setIndices(e){this._attributeMap.has(H.indices)||(e={attribute:H.indices,data:e},this._attributeMap.set(H.indices,e),this._indicesBuffer=new jo,this._indicesBuffer.createIndicesBuffer(e))}setAttribute(e,t){e==H.indices?this.setIndices(t):(this._attributeMap.set(e,{attribute:e,data:t}),this._attributes.push(e))}getAttribute(e){return this._attributeMap.get(e)}hasAttribute(e){return this._attributeMap.has(e)}genWireframe(){var e=this.getAttribute("position"),t=this.getAttribute("indices");if(t&&e&&0<t.data.length){var r=e.data,i=[];for(let e=0;e<t.data.length/3;e++){var a=t.data[3*e+0],s=t.data[3*e+1],o=t.data[3*e+2],a=new p(r[3*a+0],r[3*a+1],r[3*a+2]),s=new p(r[3*s+0],r[3*s+1],r[3*s+2]),o=new p(r[3*o+0],r[3*o+1],r[3*o+2]);i.push(a,s),i.push(s,o),i.push(o,a)}return i}return null}compute(){this._indicesBuffer&&this._indicesBuffer.compute(),this._vertexBuffer&&this._vertexBuffer.compute()}isPrimitive(){return!1}}class Ko extends tr{constructor(e,t,r=1,i=1,a=p.Y_AXIS){super(),s(this,"width"),s(this,"height"),s(this,"segmentW"),s(this,"segmentH"),s(this,"up"),this.width=e,this.height=t,this.segmentW=r,this.segmentH=i,this.up=a,this.buildGeometry(this.up)}buildGeometry(e){for(var t,r,i,a=this.segmentW+1,s=(this.segmentH,this.bounds=new je(p.ZERO.clone(),new p(this.width,1,this.height)),u=this.segmentH*this.segmentW*6,(this.segmentW+1)*(this.segmentH+1)),o=new Float32Array(3*s),n=new Float32Array(3*s),h=new Float32Array(2*s),l=new Uint16Array(this.segmentW*this.segmentH*2*3),u=0,c=0,d=0,f=0,m=0;m<=this.segmentH;++m)for(var g=0;g<=this.segmentW;++g){switch(t=(g/this.segmentW-.5)*this.width,r=(m/this.segmentH-.5)*this.height,e){case p.Y_AXIS:o[c++]=t,o[c++]=0,o[c++]=r,n[d++]=0,n[d++]=1,n[d++]=0;break;case p.Z_AXIS:o[c++]=t,o[c++]=-r,o[c++]=0,n[d++]=0,n[d++]=0,n[d++]=-1;break;case p.X_AXIS:o[c++]=0,o[c++]=t,o[c++]=r,n[d++]=1,n[d++]=0,n[d++]=0;break;default:o[c++]=t,o[c++]=0,o[c++]=r,n[d++]=0,n[d++]=1,n[d++]=0}h[f++]=g/this.segmentW,h[f++]=m/this.segmentH,g!=this.segmentW&&m!=this.segmentH&&(l[u++]=(i=g+m*a)+1,l[u++]=i,l[u++]=i+a,l[u++]=i+1,l[u++]=i+a,l[u++]=i+a+1)}this.setIndices(l),this.setAttribute(H.position,o),this.setAttribute(H.normal,n),this.setAttribute(H.uv,h),this.setAttribute(H.TEXCOORD_1,h),this.addSubGeometry({indexStart:0,indexCount:l.length,vertexStart:0,index:0})}}class Pa extends ee{constructor(e="QuadGlsl_vs",t="QuadGlsl_fs",r,i,a=0,o=!1){super(),s(this,"width",128),s(this,"height",128),s(this,"quadRenderer"),s(this,"material"),s(this,"uniforms"),s(this,"rendererPassState");var n=r?r.attachments:[],e=(A.register("QuadGlsl_vs",Kn),A.register("QuadGlsl_fs",Zn),this.material=new ut,this.material.setShader(e,t),this.material.getShader()),t=(this.material.blendMode=ge.NONE,e.shaderState);t.frontFace="cw",t.depthWriteEnabled=!1,t.depthCompare=ti.always,t.multisample=a,this.uniforms=e.uniforms=i||{color:new ae(new b)},this.quadRenderer=this.addComponent(Le),this.quadRenderer.material=this.material,this.quadRenderer.castGI=!1,this.quadRenderer.castShadow=!1,this.quadRenderer.drawType=o?2:0,this.quadRenderer.geometry=new Ko(100,100,1,1),this.quadRenderer.__start(),this.quadRenderer._enable=!0,this.quadRenderer.onEnable(),this.colorTexture=_.res.blackTexture,e.setUniformFloat("x",0),e.setUniformFloat("y",0),e.setUniformFloat("width",100),e.setUniformFloat("height",100),this.rendererPassState=De.createRendererPassState(r,"load"),0<t.multisample&&(this.rendererPassState.multisample=t.multisample,this.rendererPassState.multiTexture=E.device.createTexture({size:{width:E.presentationSize[0],height:E.presentationSize[1]},sampleCount:t.multisample,format:0<n.length?n[0].format:E.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}))}set colorTexture(e){this.material.baseMap=e}renderTarget(e,t,r){var i=e.camera,r=C.beginRenderPass(r,t.rendererPassState);C.bindCamera(r,i),t.quadRenderer.nodeUpdate(e,oe.COLOR,t.rendererPassState,null),t.quadRenderer.renderPass2(e,oe.COLOR,t.rendererPassState,null,r),C.endPass(r)}renderToViewQuad(e,t,r,i){var a=e.camera,i=(t.colorTexture=i,C.beginRenderPass(r,t.rendererPassState));C.bindCamera(i,a),t.quadRenderer.nodeUpdate(e,oe.COLOR,t.rendererPassState,null),t.quadRenderer.renderPass2(e,oe.COLOR,t.rendererPassState,null,i),C.endPass(i)}}class ne extends Ke{constructor(e,t,r=z.rgba8unorm,i,a,o=1,n=0,h){super(e,t,o),s(this,"resolveTarget");var l=E.device;this.name=qe(),this.usage=null!=a?a:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST,this.createTextureDescriptor(e,t,1,r,this.usage,o,n),this.useMipmap=!1,this.visibility=GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,r==z.rgba32float?(this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.gpuSampler=l.createSampler({})):r==z.depth32float?(this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison",this.textureBindingLayout.sampleType="depth",this.gpuSampler=E.device.createSampler({}),this.gpuSampler_comparison=E.device.createSampler({compare:"less",label:"sampler_comparison"})):r==z.depth24plus?(this.samplerBindingLayout={type:"filtering"},this.sampler_comparisonBindingLayout={type:"comparison"},this.textureBindingLayout.sampleType="depth",this.gpuSampler=E.device.createSampler({}),this.gpuSampler_comparison=E.device.createSampler({compare:"less",label:"sampler_comparison"})):(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float",0<n&&(this.textureBindingLayout.multisampled=!0),this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.maxAnisotropy=16,this.addressModeU=_t.clamp_to_edge,this.addressModeV=_t.clamp_to_edge,this.gpuSampler=l.createSampler(this))}create(e,t,r=0){var i=E.device,a=4*e,s=new Float32Array(e*t*4),o=i.createBuffer({size:s.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),i=(i.queue.writeBuffer(o,0,s),C.beginCommandEncoder());i.copyBufferToTexture({buffer:o,bytesPerRow:a},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),C.endCommandEncoder(i)}readTextureToImage(){var e=E.device,t=E.windowWidth,r=E.windowHeight,i=new Float32Array(t*r*4),e=e.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});C.beginCommandEncoder().copyTextureToBuffer({texture:this.getGPUTexture()},{buffer:e},[t,r]),e.getMappedRange(0,i.byteLength)}}class fe{constructor(){s(this,"storeOp","store"),s(this,"loadOp","clear"),s(this,"clearValue",[0,0,0,0])}}class Ve{constructor(e,t,r,i,a=!0){s(this,"label"),s(this,"customSize",!1),s(this,"attachments"),s(this,"rtDescriptors"),s(this,"zPreTexture"),s(this,"depthTexture"),s(this,"depthViewIndex",0),s(this,"depthCleanValue",1),s(this,"depthLoadOp","clear"),s(this,"isOutTarget",!0),this.attachments=e,this.rtDescriptors=t,this.depthTexture=r,this.zPreTexture=i,this.isOutTarget=a}clone2Frame(t){t.attachments.push(...this.attachments.concat());for(let e=0;e<this.rtDescriptors.length;e++){var r=this.rtDescriptors[e],i=new fe;i.loadOp=r.loadOp,i.storeOp=r.storeOp,i.clearValue=r.clearValue,t.rtDescriptors.push(i)}t.depthTexture=this.depthTexture,t.zPreTexture=this.zPreTexture,t.customSize=this.customSize}clone(){var e=new Ve([],[]);return this.clone2Frame(e),e}}const Zr=class{static init(){this.rtTextureMap=new Map,this.rtViewQuad=new Map}static createRTTexture(e,t,r,i,a=!1,s=0){let o=this.rtTextureMap.get(e);return o||((o=e==he.colorBufferTex_NAME?new ne(t,r,i,a,void 0,1,s,!1):new ne(t,r,i,a,void 0,1,s,!0)).name=e,Zr.rtTextureMap.set(e,o)),o}static createRTTextureArray(e,t,r,i,a=1,s=!1,o=0){let n=this.rtTextureMap.get(e);return n||((n=new ne(t,r,i,s,void 0,a,o)).name=e,Zr.rtTextureMap.set(e,n)),n}static createViewQuad(e,t,r,i,a,s=0){i=new Ve([i],[new fe]),t=new Pa(t,r,i,a,s);return Zr.rtViewQuad.set(e,t),t}static getTexture(e){return this.rtTextureMap.get(e)}static CreateSplitTexture(e){let t=this.getTexture(he.colorBufferTex_NAME),r=this.getTexture(e+"_split");return r=r||this.createRTTexture(e+"_split",t.width,t.height,t.format,!1)}static WriteSplitColorTexture(e){var t=this.getTexture(he.colorBufferTex_NAME),e=this.getTexture(e+"_split"),r=C.beginCommandEncoder();r.copyTextureToTexture({texture:t.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:e.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{width:e.width,height:e.height,depthOrArrayLayers:1}),C.endCommandEncoder(r)}};let be=Zr;s(be,"rtTextureMap"),s(be,"rtViewQuad");class vt{constructor(){s(this,"enable",!0),s(this,"postRenderer"),s(this,"rtViewQuad"),s(this,"virtualTexture"),this.rtViewQuad=new Map,this.virtualTexture=new Map}createRTTexture(e,t,r,i,a=!1,s=0){t=be.createRTTexture(e,t,r,i,a,s);return t.name=e,this.virtualTexture.set(e,t),t}createViewQuad(e,t,r,i,a=0){t=be.createViewQuad(e,"Quad_vert_wgsl",t,r,i,a);return this.rtViewQuad.set(e,t),t}getOutTexture(){let e,t=C.lastRenderPassState.renderTargets;return e=0<t.length?t[0]:be.getTexture(he.colorBufferTex_NAME)}autoSetColorTexture(e,t){var r=this.getOutTexture();t.setSamplerTexture(e,r)}compute(e){}onAttach(e){}onDetach(e){}render(i,a){this.compute(i),this.rtViewQuad.forEach((e,t)=>{var r=C.lastRenderPassState.getLastRenderTexture();e.renderToViewQuad(i,e,a,r)})}destroy(){this.postRenderer=null;for(let e=0;e<this.rtViewQuad.size;e++)this.rtViewQuad.values[e].destroy();this.rtViewQuad.clear(),this.rtViewQuad=null;for(let e=0;e<this.virtualTexture.size;e++)this.virtualTexture.values[e].destroy()}}class fs extends vt{constructor(){super();var e=E.presentationSize,t=(be.createRTTexture(he.colorBufferTex_NAME,e[0],e[1],z.rgba16float,!1),A.register("FXAA_Shader",Oh),{u_texel:new ae(new J(1/e[0],1/e[1])),u_strength:new ae(4)}),e=this.createRTTexture("FXAAPost",e[0],e[1],z.rgba16float);this.createViewQuad("fxaa","FXAA_Shader",e,t)}onAttach(e){_.setting.render.postProcessing.fxaa.enable=!0}onDetach(e){_.setting.render.postProcessing.fxaa.enable=!1}}class Zo{constructor(e){s(this,"command"),s(this,"encoder"),s(this,"rendererPassStates"),s(this,"rtFrame"),this.rtFrame=e,this.rendererPassStates=[]}clean(){this.rendererPassStates.length=0,C.cleanCache()}beginContinueRendererPassState(){if(0<this.rendererPassStates.length){var e=this.rtFrame.clone();for(const t of e.rtDescriptors)t.loadOp="load";e.depthLoadOp="load";var e=De.createRendererPassState(e);return this.rendererPassStates.push(e),e}return e=De.createRendererPassState(this.rtFrame),this.rendererPassStates.push(e),e}get rendererPassState(){return this.rendererPassStates[this.rendererPassStates.length-1]}beginRenderPass(){this.beginContinueRendererPassState(),this.begineNewCommand(),this.beginNewEncoder()}endRenderPass(){this.endEncoder(),this.endCommand()}begineNewCommand(){return this.command=C.beginCommandEncoder(),this.command}endCommand(){C.endCommandEncoder(this.command),this.command=null}beginNewEncoder(){return this.encoder=C.beginRenderPass(this.command,this.rendererPassState),this.encoder}endEncoder(){C.endPass(this.encoder),this.encoder=null}}class Tr extends br{constructor(){super(),s(this,"rendererPassState"),s(this,"splitRendererPassState"),s(this,"useRenderBundle",!1),s(this,"debugViewQuads"),s(this,"debugTextures"),s(this,"renderContext"),s(this,"_rendererType"),s(this,"_rtFrame"),this.debugTextures=[],this.debugViewQuads=[]}get passType(){return this._rendererType}set passType(e){this._rendererType=e}setRenderStates(e){if(this._rtFrame=e){this.rendererPassState=De.createRendererPassState(e);var t=e.clone();t.depthLoadOp="load";for(const r of t.rtDescriptors)r.loadOp="load";this.splitRendererPassState=De.createRendererPassState(t)}this.renderContext=new Zo(e)}setIrradiance(e,t){this.rendererPassState.irradianceBuffer=[e,t]}beforeCompute(e,t){}lateCompute(e,t){}render(e,t,r,i=!1){C.cleanCache();var a=e.camera,s=e.scene,s=(this.rendererPassState.camera3D=a,V.instance.getRenderNodes(s)),o=this.renderBundleOp(e,s,t),n=i?[]:this.renderBundleTr(e,s,t),h=C.beginCommandEncoder(),l=C.beginRenderPass(h,this.rendererPassState),o=(0<o.length&&l.executeBundles(o),!i&&V.instance.sky&&(C.bindCamera(l,a),V.instance.sky.renderPass2(e,this._rendererType,this.rendererPassState,r,l)),this.drawRenderNodes(e,l,h,s.opaqueList,t),C.endPass(l),C.endCommandEncoder(h),C.beginCommandEncoder()),r=C.beginRenderPass(o,this.rendererPassState);0<n.length&&r.executeBundles(n),i||(C.bindCamera(r,a),this.drawRenderNodes(e,r,o,s.transparentList,t)),C.endPass(r),C.endCommandEncoder(o)}nodeUpload(e,t,r){}occlusionRenderNodeTest(e,t,r){return!r||0<r.occlusionRenderNodeTest(e)}renderOp(e,t,r,i,a){}renderTr(e,t,r,i,a){}renderBundleOp(i,e,t,a){var s=V.instance.getOpRenderGroup(i.scene);if(s){let r=[];return s.renderGroup.forEach(e=>{var t;e.bundleMap.has(this._rendererType)?r.push(e.bundleMap.get(this._rendererType)):(t=C.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordRenderBundleNode(i,t,e.renderNodes,a),t=t.finish(),e.bundleMap.set(this._rendererType,t),r.push(t))}),r}return[]}renderBundleTr(i,e,t,a){var s=V.instance.getTrRenderGroup(i.scene);if(s){let r=[];return s.renderGroup.forEach(e=>{var t;e.bundleMap.has(this._rendererType)?r.push(e.bundleMap.get(this._rendererType)):(t=C.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordRenderBundleNode(i,t,e.renderNodes,a),t=t.finish(),e.bundleMap.set(this._rendererType,t),r.push(t))}),r}return[]}recordRenderBundleNode(t,r,i,a){C.bindCamera(r,t.camera),C.bindGeometryBuffer(r,i[0].geometry);for(let e=0;e<i.length;++e){var s=i[e];s.transform.worldMatrix.index,s.transform.enable&&s.recordRenderPass2(t,this._rendererType,this.rendererPassState,a,r)}}drawRenderNodes(t,r,e,i,a,s){C.bindCamera(r,t.camera);for(let e=_.setting.render.drawOpMin;e<Math.min(i.length,_.setting.render.drawOpMax);++e){var o=i[e];a.renderCommitTesting(t.camera,o)&&o.transform.enable&&o.enable&&o.renderPass2(t,this._rendererType,this.rendererPassState,s,r)}}setDebugTexture(i){for(let r=0;r<i.length;r++){let e=i[r],t="Quad_frag_wgsl";switch(e.format){case z.rgba8sint:case z.rgba8uint:case z.rgba8unorm:case z.rgba16float:case z.rgba32float:t="Quad_frag_wgsl";break;case z.depth24plus:case z.depth32float:t="Quad_depth2d_frag_wgsl","cube"==e.textureBindingLayout.viewDimension&&(t="Quad_depthCube_frag_wgsl")}var a=new Pa("Quad_vert_wgsl",t,new Ve([],[]));this.debugTextures.push(i[r]),this.debugViewQuads.push(a)}}}class Qo extends Tr{constructor(){super(),this.passType=oe.COLOR}render(t,e,r,i=!1){this.renderContext.clean();var a=t.scene,s=t.camera,o=(this.rendererPassState.camera3D=s,V.instance.getRenderNodes(a)),n=this.renderBundleOp(t,o,e),h=i?[]:this.renderBundleTr(t,o,e),l=(mt.start("colorPass Renderer"),mt.start("ColorPass Draw Opaque"),this.renderContext.beginRenderPass(),this.renderContext.command,this.renderContext.encoder),u=(C.bindCamera(l,s),0<n.length&&(V.instance.getOpRenderGroup(a).renderGroup.forEach(t=>{for(let e=0;e<t.renderNodes.length;e++)t.renderNodes[e].transform.updateWorldMatrix()}),l.executeBundles(n)),!i&&V.instance.sky&&(C.bindCamera(l,s),V.instance.sky.renderPass2(t,this._rendererType,this.rendererPassState,r,l)),C.bindCamera(l,s),this.drawNodes(t,this.renderContext,o.opaqueList,e,r),this.renderContext.endRenderPass(),mt.end("ColorPass Draw Opaque"),mt.start("ColorPass Draw Transparent"),this.renderContext.beginRenderPass(),this.renderContext.command,this.renderContext.encoder),c=(0<h.length&&u.executeBundles(h),i||(C.bindCamera(u,s),this.drawNodes(t,this.renderContext,o.transparentList,e,r)),V.instance.getGraphicList());for(let e=0;e<c.length;e++){var d=c[e];d.transform.worldMatrix.index,d.nodeUpdate(t,this._rendererType,this.splitRendererPassState,r),d.renderPass2(t,this._rendererType,this.splitRendererPassState,r,u)}this.renderContext.endRenderPass(),mt.end("ColorPass Draw Transparent"),mt.end("colorPass Renderer")}drawNodes(t,e,r,i,a){for(let e=_.setting.render.drawOpMin;e<Math.min(r.length,_.setting.render.drawOpMax);++e){var s=r[e];s.transform.enable&&s.enable&&(s.nodeUpdate(t,this._rendererType,this.rendererPassState,a),s.renderPass(t,this.passType,this.renderContext))}}occlusionRenderNodeTest(e,t,r){return 0<r.zDepthRenderNodeTest(t)}}const Yt=class extends Ve{constructor(){super([],[])}crateGBuffer(e,t,r){var i=this.attachments,a=this.rtDescriptors,s=be.createRTTexture(e+he.colorBufferTex_NAME,t,r,z.rgba16float,!1),o=be.createRTTexture(e+he.positionBufferTex_NAME,t,r,z.rgba16float,!1),n=be.createRTTexture(e+he.normalBufferTex_NAME,t,r,z.rgba8unorm,!1),e=be.createRTTexture(e+he.materialBufferTex_NAME,t,r,z.rgba8unorm,!1),s=(i.push(s),i.push(o),i.push(n),i.push(e),new fe),o=(s.loadOp="clear",new ne(t,r,"depth24plus",!1));o.name="depthTexture",(new fe).loadOp="load",this.depthTexture=o,a.push(s),a.push(new fe),a.push(new fe),a.push(new fe)}getColorMap(){return this.attachments[0]}getPositionMap(){return this.attachments[1]}getNormalMap(){return this.attachments[2]}getMaterialMap(){return this.attachments[3]}static getGBufferFrame(e){let t;var r;return Yt.gBufferMap.has(e)?t=Yt.gBufferMap.get(e):(t=new Yt,r=E.presentationSize,t.crateGBuffer(e,r[0],r[1]),Yt.gBufferMap.set(e,t)),t}clone(){var e=new Yt;return this.clone2Frame(e),e}};let Qe=Yt;s(Qe,"gBufferMap",new Map);class Jo{constructor(){s(this,"frustumCullingList"),s(this,"zVisibleList"),s(this,"_renderList"),this._renderList=new Map}occlusionRenderNodeTest(e){return _.setting.occlusionQuery.enable?this.frustumCullingList?this.frustumCullingList[e]:0:1}zDepthRenderNodeTest(e){return this.zVisibleList?this.zVisibleList[e]:0}update(r,e){let i=this._renderList.get(r);i||(i=new Map,this._renderList.set(r,i)),i.clear();var a=V.instance.getRenderNodes(e);for(let t=0;t<a.opaqueList.length;t++){var s=a.opaqueList[t];let e=0;(e=s.enable&&s.transform.enable&&s.object3D.bound?s.object3D.bound.containsFrustum(s.object3D,r.frustum):e)&&i.set(s,e)}for(let t=0;t<a.transparentList.length;t++){var o=a.transparentList[t];let e=0;(e=o.enable&&o.transform.enable&&o.object3D.bound?o.object3D.bound.containsFrustum(o.object3D,r.frustum):e)&&i.set(o,e)}}renderCommitTesting(e,t){return!!this._renderList.get(e)&&0<this._renderList.get(e).get(t)}}class Hr extends er{constructor(e,t){super(),this.bufferType=Ct.ComputeGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,e,t)}}class $o{constructor(e,t){s(this,"clusterBuffer"),s(this,"lightAssignBuffer"),s(this,"assignTableBuffer"),s(this,"clustersUniformBuffer"),this.clusterBuffer=new Hr(2*e*4),this.clustersUniformBuffer=new Mt(10),this.clustersUniformBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.lightAssignBuffer=new Hr(e*t),this.lightAssignBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.assignTableBuffer=new Hr(4*e),this.assignTableBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(e,t,r,i,a,s,o,n,h,l){this.clustersUniformBuffer.setFloat("clusterTileX",i),this.clustersUniformBuffer.setFloat("clusterTileY",a),this.clustersUniformBuffer.setFloat("clusterTileZ",s),this.clustersUniformBuffer.setFloat("numLights",o),this.clustersUniformBuffer.setFloat("maxNumLightsPerCluster",n),this.clustersUniformBuffer.setFloat("near",h),this.clustersUniformBuffer.setFloat("far",l),this.clustersUniformBuffer.setFloat("screenWidth",e),this.clustersUniformBuffer.setFloat("screenHeight",t),this.clustersUniformBuffer.setFloat("clusterPix",r),this.clustersUniformBuffer.apply()}}let el=`
  #include "GlobalUniform"

        struct ClusterBox{
            minPoint:vec4<f32>,
            maxPoint:vec4<f32>
        }

        struct ClustersUniform{
            clusterTileX:f32,
            clusterTileY:f32,
            clusterTileZ:f32,
            numLights:f32,
            maxNumLightsPerCluster:f32,
            near:f32,
            far:f32,
            screenWidth:f32,
            screenHeight:f32,
        }
     
        @group(0) @binding(1) var<uniform> clustersUniform : ClustersUniform;
        @group(0) @binding(2) var<storage,read_write> clusterBuffer : array<ClusterBox>;


        var<private> clusterTileX:f32 ;
        var<private> clusterTileY:f32 ;
        var<private> clusterTileZ:f32 ;
        fn convertNDCToView( v4:vec4<f32> ) -> vec4<f32> {
            var v = globalUniform.pvMatrixInv * v4 ;
            v = v / v.w ;
            return v ;
        }

        fn gridToIndex(i:vec3<u32>) -> u32{
            return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
        }

        fn ScreenToView(screen : vec4<f32>) -> vec4<f32> {
            let texCoord = screen.xy / vec2<f32>(clustersUniform.screenWidth, clustersUniform.screenHeight);
            let clip = vec4<f32>(vec2<f32>(texCoord.x, 1.0 - texCoord.y) * 2.0 - vec2<f32>(1.0, 1.0), screen.z, screen.w);
            return convertNDCToView(clip);
          }

        fn LineIntersectionToZPlane( eye:vec3<f32> , ndcPoint :vec3<f32> , z:f32) -> vec3<f32>
        {
            var normal = vec3<f32>(0.0, 0.0, 1.0);
            var dir = ndcPoint - eye;
            var t = (z - dot(normal, eye)) / dot(normal, dir);
            var result = eye + t * dir;
            return result;
        }

        // @compute @workgroup_size(2,2,1)
        @compute @workgroup_size(16,12,1)
        fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
            // let i = local_invocation_id.x ;
            // let j = local_invocation_id.y ;

            let i = local_invocation_id.x ;
            let j = local_invocation_id.y ;
            let k = workgroup_id.x ;

            clusterTileX = clustersUniform.clusterTileX;
            clusterTileY = clustersUniform.clusterTileY;
            clusterTileZ = clustersUniform.clusterTileZ;

            let clusterGrid = vec3<u32>(i,j,k);
            let tileIndex = gridToIndex(clusterGrid);
            let eyePos = vec3<f32>(0.0, 0.0, 0.0);

            let tx = clusterTileX;
            let ty = clusterTileY;
            let tz = clusterTileZ ;
            let near = clustersUniform.near ;
            let far = clustersUniform.far ;

            let titleSize = vec2<f32>( clustersUniform.screenWidth / tx ,  clustersUniform.screenHeight / ty ) ;

            var maxPointSs = vec4<f32>(vec2<f32>(f32(i) + 1.0, f32(j) + 1.0) * titleSize, 0.0, 1.0);
	        var minPointSs = vec4<f32>(vec2<f32>(f32(i) , f32(j)) * titleSize, 0.0, 1.0);

            var maxPointVs = ScreenToView(maxPointSs).xyz;
	        var minPointVs = ScreenToView(minPointSs).xyz;
 
            var tileNear = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, f32(k) / clustersUniform.clusterTileZ);
	        var tileFar = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, (f32(k) + 1.0) / clustersUniform.clusterTileZ);

            var minPointNear = LineIntersectionToZPlane(eyePos, minPointVs, tileNear);
            var minPointFar = LineIntersectionToZPlane(eyePos, minPointVs, tileFar);
            var maxPointNear = LineIntersectionToZPlane(eyePos, maxPointVs, tileNear);
            var maxPointFar = LineIntersectionToZPlane(eyePos, maxPointVs, tileFar);

            var minPointAABB = min(min(minPointNear, minPointFar), min(maxPointNear, maxPointFar));
            var maxPointAABB = max(max(minPointNear, minPointFar), max(maxPointNear, maxPointFar));

            var clusterBox : ClusterBox ;
            clusterBox.minPoint = vec4<f32>(minPointAABB,f32(tileIndex)) ;
            clusterBox.maxPoint = vec4<f32>(maxPointAABB,f32(tileIndex)) ;
            clusterBuffer[tileIndex] = clusterBox;
        }
`,tl=`
#include "GlobalUniform"

struct ClusterBox{
    minPoint:vec4<f32>,
    maxPoint:vec4<f32>
}

struct Light {
    index:f32,
    lightType:i32,
    radius:f32,
    linear:f32,

    position:vec3<f32>,
    lightMatrixIndex:f32,

    direction:vec3<f32>,
    quadratic:f32,

    lightColor:vec3<f32>,
    intensity:f32,

    innerCutOff :f32,
    outerCutOff:f32,
    range :f32,
    castShadow:f32,

    lightTangent:vec3<f32>,
    ies:f32,
};

struct LightIndex
{
    count:f32,
    start:f32,
    empty0:f32,
    empty1:f32,
};

struct ClustersUniform{
    clusterTileX:f32,
    clusterTileY:f32,
    clusterTileZ:f32,
    numLights:f32,
    maxNumLightsPerCluster:f32,
    near:f32,
    far:f32,
    screenWidth:f32,
    screenHeight:f32,
    clusterPix:f32, 
}

struct Uniforms {
    matrix : array<mat4x4<f32>>
};



var<private> clusterTileX:f32 ;
var<private> clusterTileY:f32 ;
var<private> clusterTileZ:f32 ;

@group(0) @binding(1) var<storage, read> models : Uniforms;
@group(0) @binding(2) var<uniform> clustersUniform : ClustersUniform;
@group(0) @binding(3) var<storage,read> clusterBuffer : array<ClusterBox>;
@group(0) @binding(4) var<storage,read> lightBuffer : array<Light>;
@group(0) @binding(5) var<storage,read_write> lightAssignBuffer : array<f32>;
@group(0) @binding(6) var<storage,read_write> assignTable : array<LightIndex>;

fn gridToIndex(i:vec3<u32>) -> u32{
    return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
}

fn GetSqdisPointAABB( pos:vec3<f32>,  clusterIndex:u32 ) -> f32
{
    var sqDistance = 0.0;
    let cluster = clusterBuffer[clusterIndex];
    for (var i = 0u; i < 3u; i+=1u)
    {
        var v = pos[i];
        if (v < cluster.minPoint[i])
        {
            let diff = cluster.minPoint[i] - v;
            sqDistance += diff * diff;
        }

        if (v > cluster.maxPoint[i])
        {
            let diff =  v - cluster.maxPoint[i];
            sqDistance += diff * diff;
        }
    }
    return sqDistance;
}

fn TestSphereAABB( lightIndex:i32 ,  clusterIndex : u32 ) -> bool
{
    let light = lightBuffer[lightIndex];
    let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
    var radius = light.range * 2.0 ;
    let spherePos =  globalUniform.viewMat * vec4<f32>(lightPos.xyz, 1.0) ;
    let sqDistance = GetSqdisPointAABB(spherePos.xyz , clusterIndex);
    return sqDistance <= (radius*radius);
}



@compute @workgroup_size(16,12,1)
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
    clusterTileX = clustersUniform.clusterTileX;
    clusterTileY = clustersUniform.clusterTileY;
    clusterTileZ = clustersUniform.clusterTileZ;
    // cluster ID 
    let i = local_invocation_id.x ;
    let j = local_invocation_id.y ;
    let k = workgroup_id.x ;

    var clusterId_3D = vec3<u32>(i,j,k);
    var clusterId_1D = gridToIndex(clusterId_3D);

    var startIndex = i32(clusterId_1D) * i32(clustersUniform.maxNumLightsPerCluster) ;
    var endIndex = startIndex;

    for(var lightID = 0 ; lightID < i32(clustersUniform.numLights) ; lightID+=1)
    {
        if(!TestSphereAABB(lightID, clusterId_1D)) {
           continue;
        };
        lightAssignBuffer[endIndex] = f32(lightID);
        endIndex += 1 ;
    }

    // workgroupBarrier();

    var idx: LightIndex;
    idx.count = f32(endIndex-startIndex);
    idx.start = f32(startIndex);
    assignTable[clusterId_1D] = idx;
}
`;class rl extends Tr{constructor(e){super(),s(this,"clusterTileX",16),s(this,"clusterTileY",12),s(this,"clusterTileZ",24),s(this,"maxNumLights",128),s(this,"maxNumLightsPerCluster",100),s(this,"clusterPix",1),s(this,"clusterLightingBuffer"),s(this,"_clusterGenerateCompute"),s(this,"_clusterLightingCompute"),s(this,"_createGrid",!1),this.passType=oe.Cluster,this.initCompute(e)}initCompute(e){this._clusterGenerateCompute=new Ce(el),this._clusterLightingCompute=new Ce(tl);var t=E.presentationSize,r=this.clusterTileX*this.clusterTileY*this.clusterTileZ,i=e.camera,a=i.near,s=i.far,r=(this.clusterLightingBuffer=new $o(r,this.maxNumLightsPerCluster),this.clusterLightingBuffer.update(t[0],t[1],this.clusterPix,this.clusterTileX,this.clusterTileY,this.clusterTileZ,this.maxNumLights,this.maxNumLightsPerCluster,a,s),Be.getCameraGroup(i)),t=(this._clusterGenerateCompute.setUniformBuffer("globalUniform",r.uniformGPUBuffer),this._clusterLightingCompute.setUniformBuffer("globalUniform",r.uniformGPUBuffer),this._clusterGenerateCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterGenerateCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer),Be.getLightEntries(e.scene));this._clusterLightingCompute.setStorageBuffer("models",Be.modelMatrixBindGroup.matrixBufferDst),this._clusterLightingCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterLightingCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer),this._clusterLightingCompute.setStorageBuffer("lightBuffer",t.storageGPUBuffer),this._clusterLightingCompute.setStorageBuffer("lightAssignBuffer",this.clusterLightingBuffer.lightAssignBuffer),this._clusterLightingCompute.setStorageBuffer("assignTable",this.clusterLightingBuffer.assignTableBuffer),this.debug(e)}render(e,t){var r=e.camera,e=e.scene,r=(r.near,r.far,V.instance.getLights(e)),e=(E.presentationSize,this.clusterLightingBuffer.clustersUniformBuffer.setFloat("numLights",r.length),this.clusterLightingBuffer.clustersUniformBuffer.apply(),this._clusterGenerateCompute.workerSizeX=this.clusterTileZ,this._clusterLightingCompute.workerSizeX=this.clusterTileZ,C.beginCommandEncoder());C.computeCommand(e,[this._clusterGenerateCompute,this._clusterLightingCompute]),C.endCommandEncoder(e)}debug(e){}}class Xr{static genMeshBounds(e){var t=this.genMeshMinVector,r=this.genMeshMaxVector,i=this.genMeshVectorList8,a=new p(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),s=a.clone().mul(-1),o=new je(p.ZERO,p.ZERO),a=(o.setFromMinMax(a.clone(),s.clone()),e.getComponents(Le));for(const h of a)if(h&&h.geometry){var n=h.object3D.transform.worldMatrix;t.copy(h.geometry.bounds.min),r.copy(h.geometry.bounds.max),i[0].set(t.x,t.y,t.z),i[1].set(t.x,t.y,r.z),i[2].set(t.x,r.y,t.z),i[3].set(t.x,r.y,r.z),i[4].set(r.x,t.y,t.z),i[5].set(r.x,t.y,r.z),i[6].set(r.x,r.y,t.z),i[7].set(r.x,r.y,r.z);for(const l of i)n.transformPoint(l,l),o.expandByPoint(l)}return o.setFromMinMax(o.min,o.max),o}}s(Xr,"genMeshMinVector",p.ZERO.clone()),s(Xr,"genMeshMaxVector",p.ZERO.clone()),s(Xr,"genMeshVectorList8",[new p,new p,new p,new p,new p,new p,new p,new p]);class il extends Ma{constructor(){super(3,va.triangle_list)}}class al extends Ma{constructor(){super(2,va.line_list)}}class sl extends ee{constructor(){super(),s(this,"mLineRender"),s(this,"mFillRender"),this.mLineRender=this.addComponent(al),this.mFillRender=this.addComponent(il)}drawAxis(e,t=new p(0,0,0),r=10){this.createCustomShape(e).buildAxis(t,r)}drawLines(e,t,r=b.COLOR_WHITE){this.createCustomShape(e).buildLines(t,r)}drawCurve(e,t,r=10,i=.5,a=b.COLOR_WHITE){var s=[],o=new p,n=new p;for(let e=0;e<t.length-1;++e){s.push(t[e]);var h=t[Math.max(e-1,0)],l=t[e],u=t[e+1],c=t[Math.min(e+2,t.length-1)];u.subtract(h,o).multiplyScalar(i/3).add(l,o),l.subtract(c,n).multiplyScalar(i/3).add(u,n),s.push(...this.calculateBezierCurve(l,o,n,u,r))}s.push(t[t.length-1]),this.drawLines(e,s,a)}calculateBezierCurve(t,r,i,a,s){var o=new Array(s);for(let e=0;e<s;++e){var n=(e+1)/(s+1),h=1-n,l=t.mul(h*h*h),u=r.mul(3*n*h*h),h=i.mul(3*n*n*h),n=a.mul(n*n*n);o[e]=l.add(u).add(h).add(n)}return o}drawRect(e,t,r,i,a=b.COLOR_WHITE){this.drawLines(e,[t,new p(t.x+r,t.y,t.z),new p(t.x+r,t.y+i,t.z),new p(t.x,t.y+i,t.z),t],a)}drawCircle(e,t,r,i=32,a=p.Y_AXIS,s=b.COLOR_WHITE){this.createCustomShape(e).buildCircle(t,r,i,a,s)}drawSector(e,t,r,i,a,s=16,o=p.Y_AXIS,n=b.COLOR_WHITE){var h=(a-i)*te,l=(i*=te,[]);l.push(t);for(let e=0;e<=s;++e){0<e&&l.push(l[l.length-1]);var u=h*(e/s)+i,c=r*Math.cos(u),d=r*Math.sin(u);switch(o){case p.X_AXIS:l.push(t.add(new p(0,c,d)));break;case p.Y_AXIS:l.push(t.add(new p(c,0,d)));break;default:p.Z_AXIS;l.push(t.add(new p(c,d,0)))}}l.push(l[l.length-1]),l.push(t),this.mLineRender.fillShapData(e,"line",n,l)}drawArcLine(e,t,r,i,a,s=16,o=p.Y_AXIS,n=b.COLOR_WHITE){this.mLineRender.allocGraphics3DShape(e,this.transform._worldMatrix.index).buildArcLine(t,r,i,a,s,o,n)}createCustomShape(e,t=this.transform){return this.mLineRender.allocGraphics3DShape(e,t._worldMatrix.index)}drawBox(e,t,r,i=b.COLOR_WHITE){var a=[];a.push(t),a.push(new p(r.x,t.y,t.z)),a.push(a[a.length-1]),a.push(new p(r.x,r.y,t.z)),a.push(a[a.length-1]),a.push(new p(t.x,r.y,t.z)),a.push(a[a.length-1]),a.push(t),a.push(a[a.length-1]),a.push(new p(t.x,t.y,r.z)),a.push(a[a.length-1]),a.push(new p(r.x,t.y,r.z)),a.push(a[a.length-1]),a.push(new p(r.x,r.y,r.z)),a.push(a[a.length-1]),a.push(new p(t.x,r.y,r.z)),a.push(a[a.length-1]),a.push(new p(t.x,t.y,r.z)),a.push(new p(t.x,r.y,t.z)),a.push(new p(t.x,r.y,r.z)),a.push(new p(r.x,r.y,t.z)),a.push(new p(r.x,r.y,r.z)),a.push(new p(r.x,t.y,t.z)),a.push(new p(r.x,t.y,r.z)),this.mLineRender.fillShapData(e,"line",i,a)}drawFillRect(e,t,r,i,a=b.COLOR_WHITE){this.mFillRender.fillShapData(e,"fill",a,[t,new p(t.x+r,t.y,t.z),new p(t.x+r,t.y+i,t.z),new p(t.x+r,t.y+i,t.z),new p(t.x,t.y+i,t.z),t])}drawFillCircle(e,t,r,i=32,a=p.Y_AXIS,s=b.COLOR_WHITE){var o=[];o.push(t);for(let e=0;e<=i;++e){2<=e&&(o.push(t),o.push(o[o.length-2]));var n=2*Math.PI*e/i,h=r*Math.cos(n),l=r*Math.sin(n);switch(a){case p.X_AXIS:o.push(t.add(new p(0,h,l)));break;case p.Y_AXIS:o.push(t.add(new p(h,0,l)));break;default:p.Z_AXIS;o.push(t.add(new p(h,l,0)))}}this.mFillRender.fillShapData(e,"fill",s,o)}drawMeshWireframe(e,t,r,i=b.COLOR_WHITE){t&&this.createCustomShape(e,r||this.transform).fillShapeData(t.genWireframe(),i)}drawFillSector(e,t,r,i,a,s=16,o=p.Y_AXIS,n=b.COLOR_WHITE){var h=(a-i)*te,l=(i*=te,[]);l.push(t);for(let e=0;e<=s;++e){2<=e&&(l.push(t),l.push(l[l.length-2]));var u=h*(e/s)+i,c=r*Math.cos(u),d=r*Math.sin(u);switch(o){case p.X_AXIS:l.push(t.add(new p(0,c,d)));break;case p.Y_AXIS:l.push(t.add(new p(c,0,d)));break;default:p.Z_AXIS;l.push(t.add(new p(c,d,0)))}}this.mFillRender.fillShapData(e,"fill",n,l)}drawBoundingBox(e,t,r=b.COLOR_WHITE){this.drawBox(e,t.min,t.max,r)}drawCameraFrustum(e,t=b.COLOR_WHITE){var r,i,a,s,o,n,h,l,u,c;e.type==xe.perspective?(i=(n=Math.tan(e.fov/2*te))*e.aspect,u=(h=e.transform._worldMatrix).transformVector(new p(-i,-n,1)),c=h.transformVector(new p(-i,n,1)),l=h.transformVector(new p(i,-n,1)),h=h.transformVector(new p(i,n,1)),i=e.far,n=e.near,r=e.transform.worldPosition,s=(new p).copyFrom(u).multiplyScalar(i).add(r),o=(new p).copyFrom(c).multiplyScalar(i).add(r),a=(new p).copyFrom(l).multiplyScalar(i).add(r),i=(new p).copyFrom(h).multiplyScalar(i).add(r),u=(new p).copyFrom(u).multiplyScalar(n).add(r),c=(new p).copyFrom(c).multiplyScalar(n).add(r),l=(new p).copyFrom(l).multiplyScalar(n).add(r),h=(new p).copyFrom(h).multiplyScalar(n).add(r),(n=this.createCustomShape("CameraFrustum_"+e.object3D.uuid)).buildLines([c,o],t),n.buildLines([u,s],t),n.buildLines([h,i],t),n.buildLines([l,a],t),n.buildLines([o,i,a,s,o],t),n.buildLines([c,h,l,u,c],t)):e.type==xe.ortho&&(e.viewPort,e.viewPort.height,i=(r=e.transform.worldMatrix).transformVector(new p(-.5*e.viewPort.width,.5*e.viewPort.height,e.far)),a=r.transformVector(new p(-.5*e.viewPort.width,-.5*e.viewPort.height,e.far)),s=r.transformVector(new p(.5*e.viewPort.width,.5*e.viewPort.height,e.far)),o=r.transformVector(new p(.5*e.viewPort.width,-.5*e.viewPort.height,e.far)),n=r.transformVector(new p(-.5*e.viewPort.width,.5*e.viewPort.height,e.near)),h=r.transformVector(new p(-.5*e.viewPort.width,-.5*e.viewPort.height,e.near)),l=r.transformVector(new p(.5*e.viewPort.width,.5*e.viewPort.height,e.near)),u=r.transformVector(new p(.5*e.viewPort.width,-.5*e.viewPort.height,e.near)),(c=this.createCustomShape("CameraFrustum_"+e.object3D.uuid)).buildLines([n,i],t),c.buildLines([h,a],t),c.buildLines([l,s],t),c.buildLines([u,o],t),c.buildLines([i,s,o,a,i],t),c.buildLines([n,l,u,h,n],t))}drawObjectBoundingBox(e,t=b.COLOR_WHITE){var r=Xr.genMeshBounds(e);this.drawBox("Bounds_"+e.uuid,r.min,r.max,t)}Clear(e){this.mLineRender.shapes.has(e)?this.mLineRender.removeShape(e):this.mFillRender.shapes.has(e)&&this.mFillRender.removeShape(e)}ClearAll(){this.mLineRender.shapes.clear(),this.mFillRender.shapes.clear()}ChangeColor(e,t){var r;if(this.mLineRender.shapes.has(e))r=this.mLineRender.shapes.get(e);else{if(!this.mFillRender.shapes.has(e))return;r=this.mFillRender.shapes.get(e)}var i=r.shapeData;for(let e=0;e<i.length;e+=Nt.ShapeVertexSize)i[e+4]=t.r,i[e+5]=t.g,i[e+6]=t.b,i[e+7]=t.a}}class nl extends ee{constructor(e=.001,t=1e4,r=90,i=!1){super(),s(this,"up_camera"),s(this,"down_camera"),s(this,"left_camera"),s(this,"right_camera"),s(this,"front_camera"),s(this,"back_camera"),this.initCubeCamera(e,t,r,i)}set label(e){this.up_camera.name=e+"up",this.down_camera.name=e+"down",this.left_camera.name=e+"left",this.right_camera.name=e+"right",this.front_camera.name=e+"front",this.back_camera.name=e+"back"}initCubeCamera(e,t,r=90,i=!1){this.up_camera=Ie.createCamera3DObject(this,"up"),this.down_camera=Ie.createCamera3DObject(this,"down"),this.left_camera=Ie.createCamera3DObject(this,"left"),this.right_camera=Ie.createCamera3DObject(this,"right"),this.front_camera=Ie.createCamera3DObject(this,"front"),this.back_camera=Ie.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=i,this.down_camera.isShadowCamera=i,this.left_camera.isShadowCamera=i,this.right_camera.isShadowCamera=i,this.front_camera.isShadowCamera=i,this.back_camera.isShadowCamera=i;this.up_camera.perspective(r,1,e,t),this.up_camera.lookAt(p.ZERO,p.UP,p.DOWN),this.up_camera.object3D.scaleX=-1,this.up_camera.object3D.rotationY=180,this.down_camera.perspective(r,1,e,t),this.down_camera.lookAt(p.ZERO,p.DOWN,p.DOWN),this.down_camera.object3D.scaleX=-1,this.down_camera.object3D.rotationY=180,this.left_camera.perspective(r,1,e,t),this.left_camera.lookAt(p.ZERO,p.LEFT),this.left_camera.object3D.scaleX=-1,this.right_camera.perspective(r,1,e,t),this.right_camera.lookAt(p.ZERO,p.RIGHT),this.right_camera.object3D.scaleX=-1,this.front_camera.perspective(r,1,e,t),this.front_camera.lookAt(p.ZERO,p.FORWARD),this.front_camera.object3D.scaleX=-1,this.back_camera.perspective(r,1,e,t),this.back_camera.lookAt(p.ZERO,p.BACK),this.back_camera.object3D.scaleX=-1,this.up_camera.type=xe.shadow,this.down_camera.type=xe.shadow,this.left_camera.type=xe.shadow,this.right_camera.type=xe.shadow,this.front_camera.type=xe.shadow,this.back_camera.type=xe.shadow}}class Us extends Ke{constructor(e,t,r){super(e,t,r),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=z.depth32float,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="cube-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:6*this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=E.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"cube-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=E.device.createSampler({minFilter:_i.linear,magFilter:_i.linear}),this.gpuSampler_comparison=E.device.createSampler({compare:"less",label:"sampler_comparison"})}}class ol extends Tr{constructor(){super(),s(this,"shadowPassCount"),s(this,"_forceUpdate",!1),s(this,"_shadowCameraDic"),s(this,"shadowCamera"),s(this,"cubeTextureArray"),s(this,"colorTexture"),s(this,"shadowSize",1024),this.passType=oe.POINT_SHADOW,this._shadowCameraDic=new Map,this.cubeTextureArray=new Us(this.shadowSize,this.shadowSize,8),this.colorTexture=new ne(this.shadowSize,this.shadowSize,z.bgra8unorm,!1)}getShadowCamera(t,r){let e;if(this._shadowCameraDic.has(r))e=this._shadowCameraDic.get(r);else{var i=new nl(t.camera.near,t.camera.far,90,!0),a=(i.label=r.name,[]),s=[];for(let e=0;e<6;e++){var o=new ne(this.shadowSize,this.shadowSize,this.cubeTextureArray.format,!1),n=new Ve([this.colorTexture],[new fe]),n=(o.name="shadowDepthTexture_"+r.name+e+"_face",n.depthTexture=o,n.label="shadowRender",n.customSize=!0,De.createRendererPassState(n));s[e]=n,a[e]=o,_.getRenderJob(t).postRenderer.setDebugTexture([o]),_.getRenderJob(t).debug()}e={cubeCamera:i,depthTexture:a,rendererPassState:s},this._shadowCameraDic.set(r,e)}return e}render(t,r){if(_.setting.shadow.enable){this.shadowPassCount=0,t.camera;var i=t.scene,a=V.instance.getRenderNodes(i),s=kt.getPointShadowLightWhichScene(i),o=s.length;for(let e=0;e<o;e++){var n=s[e];if(n.lightData.lightType!=Pe.DirectionLight&&-1<n.lightData.castShadowIndex&&(n.needUpdateShadow||this._forceUpdate||de.frame<5||n.realTimeShadow)){n.needUpdateShadow=!1;var h=this.getShadowCamera(t,n),l=n.transform.worldPosition,u=(h.cubeCamera.x=l.x,h.cubeCamera.y=l.y,h.cubeCamera.z=l.z,h.cubeCamera.transform.updateWorldMatrix(!0),r.update(h.cubeCamera.right_camera,i),this.renderSceneOnce(0,h,t,h.cubeCamera.right_camera,a,r),r.update(h.cubeCamera.left_camera,i),this.renderSceneOnce(1,h,t,h.cubeCamera.left_camera,a,r),r.update(h.cubeCamera.up_camera,i),this.renderSceneOnce(2,h,t,h.cubeCamera.up_camera,a,r),r.update(h.cubeCamera.down_camera,i),this.renderSceneOnce(3,h,t,h.cubeCamera.down_camera,a,r),r.update(h.cubeCamera.front_camera,i),this.renderSceneOnce(4,h,t,h.cubeCamera.front_camera,a,r),r.update(h.cubeCamera.back_camera,i),this.renderSceneOnce(5,h,t,h.cubeCamera.back_camera,a,r),C.beginCommandEncoder());for(let e=0;e<6;e++)u.copyTextureToTexture({texture:h.depthTexture[e].getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.cubeTextureArray.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:6*n.shadowIndex+e}},{width:this.shadowSize,height:this.shadowSize,depthOrArrayLayers:1});C.endCommandEncoder(u)}}this._forceUpdate=!1}}renderSceneOnce(e,t,r,i,a,s){this.rendererPassState=t.rendererPassState[e];t=C.beginCommandEncoder(),e=C.beginRenderPass(t,this.rendererPassState);e.setViewport(0,0,this.shadowSize,this.shadowSize,0,1),e.setScissorRect(0,0,this.shadowSize,this.shadowSize),i.onUpdate(),i.transform.updateWorldMatrix(!0),this.drawShadowRenderNodes(r,i,e,a.opaqueList,s),this.drawShadowRenderNodes(r,i,e,a.transparentList,s),C.endPass(e),C.endCommandEncoder(t)}drawShadowRenderNodes(t,r,i,a,s){C.bindCamera(i,r);for(let e=_.setting.render.drawOpMin;e<Math.min(a.length,_.setting.render.drawOpMax);++e){var o=a[e];if(o.transform.worldMatrix.index,o.transform.enable&&s.renderCommitTesting(r,o)&&o.enable){o.nodeUpdate(t,this._rendererType,this.rendererPassState);for(let e=0;e<o.materials.length;e++){var n=o.materials[e].renderPasses.get(this._rendererType);if(n&&0!=n.length){C.bindGeometryBuffer(i,o.geometry);var h=o.object3D.transform._worldMatrix;for(let e=0;e<n.length;e++){var l=n[e].renderShader,u=(l.setUniformFloat("cameraFar",r.far),l.setUniformVector3("lightWorldPos",r.transform.worldPosition),l.materialDataUniformBuffer.apply(),C.bindPipeline(i,l),o.geometry.subGeometries);for(let e=0;e<u.length;e++){var c=u[e].lodLevels[o.lodLevel];C.drawIndexed(i,c.indexCount,1,c.indexStart,0,h.index)}}}}}}}}class Bs extends Ke{constructor(e,t,r=z.depth32float){super(e,t,4),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=r,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=E.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=E.device.createSampler({}),this.gpuSampler_comparison=E.device.createSampler({compare:"less",label:"sampler_comparison"})}}class ll extends Tr{constructor(){super(),s(this,"shadowPassCount"),s(this,"depth2DTextureArray"),s(this,"rendererPassStates"),s(this,"_forceUpdate",!1),this.passType=oe.SHADOW,this.setShadowMap(_.setting.shadow.shadowSize),_.setting.shadow.debug&&this.debug()}debug(){}setShadowMap(t){this.rendererPassStates=[],this.depth2DTextureArray=new Bs(t,t);for(let e=0;e<8;e++){var r=new Ve([],[]),i=new ne(t,t,z.depth32float,!1),i=(i.name="shadowDepthTexture_"+e,r.depthTexture=i,r.label="shadowRender",r.customSize=!0,r.depthCleanValue=1,De.createRendererPassState(r));this.rendererPassStates[e]=i}}render(t,r){if(_.setting.shadow.enable){var i=t.camera,e=t.scene;if(this.shadowPassCount=0,_.setting.shadow.needUpdate&&de.frame%_.setting.shadow.updateFrameRate==0){i.transform.updateWorldMatrix();var a=kt.getDirectShadowLightWhichScene(e);for(let e=0;e<a.length;e++){var s,o,n,h=a[e];h.lightData.lightType==Pe.DirectionLight&&(this.rendererPassState=this.rendererPassStates[h.shadowIndex],(h.castShadow&&h.needUpdateShadow||this._forceUpdate||h.castShadow&&_.setting.shadow.autoUpdate)&&(h.needUpdateShadow=!1,s=Y(_.setting.shadow.shadowFar,i.near,i.far),o=p.HELP_4,(n=p.HELP_5).copy(i.lookTarget),o.copy(h.direction),o.normalize(),p.distance(i.transform.worldPosition,n),o.scaleBy(-s),o.add(n,o),h.shadowCamera.transform.lookAt(o,n),s=_.setting.shadow.shadowBound,o=_.setting.shadow.shadowBound,h.shadowCamera.orthoOffCenter(s/-2,s/2,o/-2,o/2,i.near,i.far),this.renderShadow(t,h.shadowCamera,r)),(n=C.beginCommandEncoder()).copyTextureToTexture({texture:this.rendererPassStates[h.shadowIndex].depthTexture.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.depth2DTextureArray.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:h.shadowIndex}},{width:_.setting.shadow.shadowSize,height:_.setting.shadow.shadowSize,depthOrArrayLayers:1}),C.endCommandEncoder(n))}this._forceUpdate=!1}}}beforeCompute(){}renderShadow(e,t,r){var i=V.instance.getRenderNodes(e.scene),a=C.beginCommandEncoder(),s=C.beginRenderPass(a,this.rendererPassState),r=(t.transform.updateWorldMatrix(),r.update(t,e.scene),C.bindCamera(s,t),this.renderShadowBundleOp(e,t)),o=this.renderShadowBundleTr(e,t);0<r.length&&s.executeBundles(r),this.drawShadowRenderNodes(e,t,s,i.opaqueList),0<o.length&&s.executeBundles(o),this.drawShadowRenderNodes(e,t,s,i.transparentList),C.endPass(s),C.endCommandEncoder(a)}renderShadowBundleOp(i,a){var e=V.instance.getOpRenderGroup(i.scene);if(e){let r=[];return e.renderGroup.forEach(e=>{var t;e.bundleMap.has(this._rendererType)?r.push(e.bundleMap.get(this._rendererType)):(t=C.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordShadowRenderBundleNode(i,a,t,e.renderNodes),t=t.finish(),e.bundleMap.set(this._rendererType,t),r.push(t))}),r}return[]}renderShadowBundleTr(i,a){var e=V.instance.getTrRenderGroup(i.scene);if(e){let r=[];return e.renderGroup.forEach(e=>{var t;e.bundleMap.has(this._rendererType)?r.push(e.bundleMap.get(this._rendererType)):(t=C.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordShadowRenderBundleNode(i,a,t,e.renderNodes),t=t.finish(),e.bundleMap.set(this._rendererType,t),r.push(t))}),r}return[]}recordShadowRenderBundleNode(t,e,r,i,a){C.bindCamera(r,e),C.bindGeometryBuffer(r,i[0].geometry);for(let e=0;e<i.length;++e){var s=i[e];s.transform.worldMatrix.index,s.transform.enable&&s.recordRenderPass2(t,this._rendererType,this.rendererPassState,a,r)}}drawShadowRenderNodes(t,e,r,i,a){C.bindCamera(r,e);for(let e=_.setting.render.drawOpMin;e<Math.min(i.length,_.setting.render.drawOpMax);++e){var s=i[e];s.transform.enable&&s.enable&&s.renderPass2(t,this._rendererType,this.rendererPassState,a,r)}}}class hl extends Tr{constructor(){super(),s(this,"zBufferTexture"),s(this,"useRenderBundle",!1),s(this,"shadowPassCount"),s(this,"zCullingCompute"),this.passType=oe.DEPTH;var e=E.presentationSize,t=(this.zBufferTexture=be.createRTTexture(he.zBufferTexture_NAME,Math.floor(+e[0]),Math.floor(+e[1]),z.rgba16float,!1),new fe),t=(t.clearValue=[0,0,0,0],t.loadOp="clear",new Ve([this.zBufferTexture],[new fe],be.createRTTexture(he.zPreDepthTexture_NAME,Math.floor(e[0]),Math.floor(e[1]),z.depth32float,!1),null,!0));this.setRenderStates(t)}lateCompute(e,t){}render(e,t){}}class ul{constructor(){s(this,"map"),s(this,"passRendererList"),this.map=new Map,this.passRendererList=[]}addRenderer(e){this.map.has(e.passType)?console.error("same renderer pass repeat!"):(this.map.set(e.passType,e),e.passType<=8&&this.addPassRenderer(e))}getRenderer(e){return this.map.get(e)}addPassRenderer(e){this.passRendererList.push(e)}getAllRenderer(){return this.map}getAllPassRenderer(){return this.passRendererList}}class cl extends Tr{constructor(){super(),s(this,"finalQuadView"),s(this,"postList"),this._rendererType=oe.POST,this.postList=[],this.initRenderer()}initRenderer(){A.register("FullQuad_vert_wgsl",Hn),this.finalQuadView=new Pa("Quad_vert_wgsl","Quad_frag_wgsl",new Ve([],[]),null,null,!1)}attachPost(e,t){-1==(t.postRenderer=this).postList.indexOf(t)&&(this.postList.push(t),t.onAttach(e))}detachPost(e,t){var r=this.postList.indexOf(t);return 0<=r&&(this.postList.splice(r,1),t.onDetach(e),t.postRenderer=null),0<=r}render(t){var r=C.beginCommandEncoder();for(let e=0;e<this.postList.length;e++){var i=this.postList[e];i.enable&&i.render(t,r)}var e=C.lastRenderPassState.getLastRenderTexture();this.finalQuadView.renderToViewQuad(t,this.finalQuadView,r,e),this.debugViewQuads.length&&0<=(e=_.setting.render.debugQuad)&&this.debugViewQuads[e].renderToViewQuad(t,this.debugViewQuads[e],r,this.debugTextures[e]),C.endCommandEncoder(r)}}class fl{constructor(e){s(this,"rendererMap"),s(this,"shadowMapPassRenderer"),s(this,"pointLightShadowRenderer"),s(this,"postRenderer"),s(this,"clusterLightingRender"),s(this,"occlusionSystem"),s(this,"depthPassRenderer"),s(this,"colorPassRenderer"),s(this,"pauseRender",!1),s(this,"pickFire"),s(this,"graphic3D"),s(this,"_view"),this._view=e,kt.init(),this.rendererMap=new ul,this.occlusionSystem=new Jo,this.clusterLightingRender=new rl(e),this.rendererMap.addRenderer(this.clusterLightingRender),this.graphic3D=new sl,e&&this.graphic3D&&e.scene.addChild(this.graphic3D),_.setting.render.zPrePass&&(this.depthPassRenderer=new hl,this.rendererMap.addRenderer(this.depthPassRenderer)),this.shadowMapPassRenderer=new ll,this.pointLightShadowRenderer=new ol}get view(){return this._view}set view(e){this._view=e}start(){}stop(){}pause(){this.pauseRender=!0}resume(){this.pauseRender=!1}enablePost(e){this.postRenderer=new cl,this.postRenderer.setRenderStates(e),this.rendererMap.addRenderer(this.postRenderer)}addPost(e){return this.postRenderer||this.enablePost(Qe.getGBufferFrame("ColorPassGBuffer")),e instanceof vt&&this.postRenderer.attachPost(this.view,e),e}removePost(t){if(t instanceof vt)this.postRenderer.detachPost(this.view,t);else for(let e=0;e<t.length;e++)this.postRenderer.detachPost(this.view,t[e])}render(e){let r=this._view,i=(this.view.scene.waitUpdate(),se.componentsBeforeUpdateList.forEach((e,t)=>{t.enable&&e()}),Be.getLightEntries(r.scene).update(r),Be.modelMatrixBindGroup.writeBuffer(),e&&e(),se.componentsUpdateList.forEach((e,t)=>{t.enable&&e()}),C.beginCommandEncoder());se.componentsComputeList.forEach((e,t)=>{t.enable&&e(r,i)}),C.endCommandEncoder(i),this.occlusionSystem.update(r.camera,r.scene),this.renderFrame(r),this.postRenderer&&0<this.postRenderer.postList.length&&this.postRenderer.render(r),r.scene.envMapChange=!1,se.componentsLateUpdateList.forEach((e,t)=>{t.enable&&e()})}renderFrame(t){this.clusterLightingRender.render(t,this.occlusionSystem),this.shadowMapPassRenderer&&_.setting.shadow.enable&&this.shadowMapPassRenderer.render(t,this.occlusionSystem),this.pointLightShadowRenderer&&this.pointLightShadowRenderer.render(t,this.occlusionSystem),this.depthPassRenderer&&(this.depthPassRenderer.beforeCompute(t,this.occlusionSystem),this.depthPassRenderer.render(t,this.occlusionSystem),this.depthPassRenderer.lateCompute(t,this.occlusionSystem));var r=this.rendererMap.getAllPassRenderer();for(let e=0;e<r.length;e++){var i=r[e];i.beforeCompute(t,this.occlusionSystem),i.render(t,this.occlusionSystem,this.clusterLightingRender.clusterLightingBuffer),i.lateCompute(t,this.occlusionSystem)}}debug(){}}class ds extends fl{constructor(e){super(e)}start(){super.start();var e=Qe.getGBufferFrame("ColorPassGBuffer"),t=[],r=new Qo;_.setting.render.zPrePass&&(e.zPreTexture=this.depthPassRenderer.rendererPassState.depthTexture),r.setRenderStates(e),this.postRenderer&&this.postRenderer.setDebugTexture(t),this.rendererMap.addRenderer(r),_.setting.render.debug&&this.debug()}debug(){}}class dl{constructor(){s(this,"_factor"),s(this,"_doubleFactor"),this._factor=1,this._doubleFactor=2}get accelerateInterpolator(){return this._factor}set accelerateInterpolator(e){this._factor=e,this._doubleFactor=2*this._factor}getInterpolation(e){return 1==this._factor?e*e:Math.pow(e,this._doubleFactor)}}class pl{constructor(){s(this,"_factor",1)}get decelerateInterpolator(){return this._factor}set decelerateInterpolator(e){this._factor=e}getInterpolation(e){let t;return t=1==this._factor?1-(1-e)*(1-e):1-Math.pow(1-e,2*this._factor)}}class ml{constructor(){s(this,"_factor",1)}getInterpolation(e){return Math.cos((e+1)*Math.PI)/2+.5}}class gl{getInterpolation(e){return e}}class xl{getInterpolation(e){return 4.9*e+4.9*e}}class rt{constructor(){}static bounce(e){return e*e*9.8}getInterpolation(e){return(e*=1.1226)<.3535?rt.bounce(e):e<.7408?rt.bounce(e-.54719)+.7:e<.9644?rt.bounce(e-.8526)+.9:rt.bounce(e-1.0435)+.95}getBounceInterpolation(e){return e<.5?rt.bounce(e):rt.bounce(e-1)}geJumpUp(e,t){return t<.5?e*(t/=.5)-rt.bounce(t):t<.8?.3*(e*(t=(t-.5)/(.8-.5))-rt.bounce(t)):t<1?.15*(e*(t=(t-.8)/(1-.8))-rt.bounce(t)):e*t-rt.bounce(t)}}class _l{constructor(){s(this,"_tension"),this._tension=2}get anticipateInterpolator(){return this._tension}set anticipateInterpolator(e){this._tension=e}getInterpolation(e){return e*e*((this._tension+1)*e-this._tension)}}class Ti{constructor(){s(this,"_tension"),this._tension=1.5}anticipateOvershootInterpolator(e){this._tension=1.5*e}anticipateOvershootInterpolator2(e,t){this._tension=e*t}getInterpolation(e){return e<.5?.5*Ti.a(2*e,this._tension):.5*(Ti.o(2*e-2,this._tension)+2)}static a(e,t){return e*e*((t+1)*e-t)}static o(e,t){return e*e*((t+1)*e+t)}}class vl{constructor(e){s(this,"_cycles"),this._cycles=e}getInterpolation(e){return Math.sin(2*this._cycles*Math.PI*e)}}class yl{constructor(){s(this,"_tension"),this._tension=2}getInterpolation(e){return--e*e*((this._tension+1)*e+this._tension)+1}}var zs=(e=>(e[e.AccelerateInterpolator=0]="AccelerateInterpolator",e[e.DecelerateInterpolator=1]="DecelerateInterpolator",e[e.AccelerateDecelerateInterpolator=2]="AccelerateDecelerateInterpolator",e[e.LinearInterpolator=3]="LinearInterpolator",e[e.BounceInterpolator=4]="BounceInterpolator",e[e.AnticipateInterpolator=5]="AnticipateInterpolator",e[e.AnticipateOvershootInterpolator=6]="AnticipateOvershootInterpolator",e[e.CycleInterpolator=7]="CycleInterpolator",e[e.OvershootInterpolator=8]="OvershootInterpolator",e[e.JumperInterpolator=9]="JumperInterpolator",e))(zs||{});const jt=class{constructor(){s(this,"complete",!1),s(this,"onComplete"),s(this,"onProgress"),s(this,"target"),s(this,"property"),s(this,"targetProperty"),s(this,"durtion"),s(this,"interpolatorEnum"),s(this,"delayTime",0),s(this,"_interpolator"),s(this,"_ct",0),s(this,"_p",0)}static to(e,t,r,i=0){var a=new jt;return a.target=e,a.property=t,a.durtion=r,a.interpolatorEnum=i,a.start(),a.delayTime=t.delayTime||0,t.onComplete&&(a.onComplete=t.onComplete),t.onProgress&&(a.onProgress=t.onProgress),this.interpolators.push(a),a}static tick(e){var t;for(t of jt.interpolators)t.complete?jt.remove(t,!0):t.tick(e)}static remove(e,t){var r=jt.interpolators,i=r.indexOf(e);-1!=i&&r.splice(i,1),t&&e.dispose()}start(){for(var e in window.AccelerateInterpolator=dl,window.DecelerateInterpolator=pl,window.AccelerateDecelerateInterpolator=ml,window.LinearInterpolator=gl,window.BounceInterpolator=rt,window.AnticipateInterpolator=_l,window.AnticipateOvershootInterpolator=Ti,window.CycleInterpolator=vl,window.OvershootInterpolator=yl,window.JumperInterpolator=xl,this._interpolator=new window[zs[this.interpolatorEnum]],this.targetProperty={},this.property)this.targetProperty[e]=this.target[e]}tick(e){if(this.delayTime<=0){this._p=Math.min(this._ct/this.durtion,1);var t,r,i,a=this._interpolator.getInterpolation(this._p),s=this.property,o=this.target,n=this.targetProperty;for(i in s)r=s[i],t=n[i],o[i]=t+(r-t)*a;null!=this.onProgress&&this.onProgress(this._p),this._ct>=this.durtion&&(this.complete=!0,null!=this.onComplete)&&this.onComplete(this.target),this._ct+=e}else this.delayTime-=e}dispose(){this.onComplete=null,this.onProgress=null,this.target=null,this.property=null,this.targetProperty=null,this.interpolatorEnum=null,this._interpolator=null,jt.remove(this)}};let pi=jt;s(pi,"interpolators",[]);class Ge{static hasString(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r;return-1}static getEllipsis(e,t=4){let r=e;return r=r.length>t?r.slice(0,t)+"...":r}static getURLName(e){e=e.split("/");let t=e[e.length-1];return t=t.split(".")[0]}static getFileFormat(e){var t=e.lastIndexOf("."),r=e.length;return-1!==e.indexOf("?",++t)&&(r=e.indexOf("?",t)),e.substr(t,r-t).toLowerCase()}static readLineProperty(e,a){e.trim().split(" ").forEach((e,t)=>{var r,i,e=e.split("=");1<e.length&&(r=e[0],i=e[1],Object.prototype.hasOwnProperty.call(a,r))&&(-1==i.indexOf('"')?a[r]=parseFloat(e[1]):a[r]=i.replace('"',"").replace('"',""))})}static getPath(e){var t=e.lastIndexOf("/");return e.substring(0,++t)}static normalizePath(e){return e.replaceAll("//","/").replaceAll("\\","/")}static getStringList(e,t=";"){return e.split(t)}static formatTime(e){var e=e/1e3/60,t=Math.floor(e),e=Math.floor(e-t);return[t.toString(),e.toString()]}static trim(e){return e.replace(/^\s+/g,"").replace(/\s+$/g,"")}static isEmpty(e){return!e||"u"<typeof e||null==e||"string"==typeof e&&""===this.trim(e)||"null"===e}static strCut(e,t){if(2*e.length<=t)return e;for(var r=0,i="",a=0;a<e.length;a++)if(i+=e.charAt(a),128<e.charCodeAt(a)){if(t<=(r+=2))return i.substring(0,i.length-1)+"..."}else if(t<=(r+=1))return i.substring(0,i.length-2)+"...";return i}static toQueryPair(e,t,r=!1){return e+"="+(r?encodeURIComponent(t):t)}static stringFormat(t,...r){if(0===arguments.length)throw new Error("please give arg at least one !");if(2===arguments.length&&"object"==typeof arguments[1])for(var e in arguments[1]){var i=new RegExp("({"+e+"})","g");t=t.replace(i,arguments[1][e])}else for(let e=0;e<r.length;e++){if(null==r[e])return t;var a=new RegExp("({["+e+"]})","g");t=t.replace(a,r[e])}return t}static parseJson2String(e,t){let r=null,s="",o=0;return(t=t||{}).newlineAfterColonIfBeforeBraceOrBracket=!0===t.newlineAfterColonIfBeforeBraceOrBracket,t.spaceAfterColon=!1!==t.spaceAfterColon,"string"==typeof e&&(e=JSON.parse(e)),e=JSON.stringify(e),r=/([\{\}])/g,e=e.replace(r,`\r
$1\r
`),r=/([\[\]])/g,e=e.replace(r,`\r
$1\r
`),r=/(\,)/g,e=e.replace(r,`$1\r
`),r=/(\r\n\r\n)/g,e=e.replace(r,`\r
`),r=/\r\n\,/g,e=e.replace(r,","),t.newlineAfterColonIfBeforeBraceOrBracket||(r=/\:\r\n\{/g,e=e.replace(r,":{"),r=/\:\r\n\[/g,e=e.replace(r,":[")),t.spaceAfterColon&&(r=/\:/g,e=e.replace(r,":")),e.split(`\r
`).forEach(function(e,t){let r=0,i=0,a="";for(e.match(/\{$/)||e.match(/\[$/)?i=1:e.match(/\}/)||e.match(/\]/)?0!==o&&--o:i=0,r=0;r<o;r++)a+="    ";s+=a+e+`\r
`,o+=i}),s}static compareVersion(t,r){t=t.split("."),r=r.split(".");for(var i=Math.max(t.length,r.length);t.length<i;)t.push("0");for(;r.length<i;)r.push("0");for(let e=0;e<i;e++){var a=parseInt(t[e]),s=parseInt(r[e]);if(s<a)return 1;if(a<s)return-1}return 0}static buildRandomCode(){let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r=t.length,i="";for(let e=0;e<26;e++){var a=Math.floor(Math.random()*r);i+=t.charAt(a)}return(new Date).getTime()+"-"+i}static UUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}static stringToHash(t){let r=0;if(0!=t.length)for(let e=0;e<t.length;e++){var i=t.charCodeAt(e);r=(r<<5)-r+i,r&=r}return r}static parseUrl(e,t){return t.match(/^(blob|http|https):/)?t:e+t}}s(Ge,"_filterChar",[" ","  ",";",`
`,"\r","\t",`
`,"\r","\t"]);class Ht extends Ke{constructor(e=!0){super(),s(this,"_source"),s(this,"imageData"),this.useMipmap=e}get source(){return this._source}set source(e){this._source=e,this._source instanceof HTMLImageElement?this._source.decode().then(async()=>{var e;this._source instanceof HTMLImageElement&&(e=await createImageBitmap(this._source,{imageOrientation:this.flipY?"flipY":"from-image"}),this.generate(e))}):(this._source instanceof HTMLCanvasElement||this._source instanceof ImageBitmap)&&this.generate(this._source)}async load(e,t){var r,i;return-1!=e.indexOf(";base64")?(r=document.createElement("img"),i=e.indexOf("data:image"),i=e.substring(i,e.length),r.src=i,await r.decode(),r.width=Math.max(r.width,32),r.height=Math.max(r.height,32),i=await createImageBitmap(r,{resizeWidth:r.width,resizeHeight:r.height,imageOrientation:this.flipY?"flipY":"from-image"}),this.format=z.rgba8unorm,this.generate(i)):(r=await fetch(e,{headers:Object.assign({Accept:"image/avif,image/webp,*/*"},null==t?void 0:t.headers)}),i=await gr.read(e,r,t),r=new Blob([i],{type:"image/jpeg"}),i=null,await this.loadFromBlob(r)),this.name=Ge.getURLName(e),!0}async loadFromBlob(e){this.imageData=e;let t=await createImageBitmap(e,{imageOrientation:this.flipY?"flipY":"from-image"});var r;return(t.width<32||t.height<32)&&(e=Math.max(t.width,32),r=Math.max(t.height,32),t=await createImageBitmap(t,{resizeWidth:e,resizeHeight:r,imageOrientation:this.flipY?"flipY":"from-image"})),this.format=z.rgba8unorm,this.generate(t),!0}}class gr{constructor(){s(this,"baseUrl",""),s(this,"initUrl"),s(this,"_progress",0)}async loadBinData(i,a){return this.baseUrl=Ge.getPath(i),this.initUrl=i,new Promise(async(t,r)=>{fetch(i,{headers:null==a?void 0:a.headers}).then(async e=>{if(!e.ok)throw Error("request rejected with status "+e.status);e=(await gr.read(i,e,a)).buffer;t(e)}).catch(e=>{a.onError&&a.onError(e),r(e)})})}async loadAsyncBitmapTexture(e,t){this.baseUrl=Ge.getPath(e),this.initUrl=e;var r=new Ht;return r.url=e,r.name=Ge.getURLName(e),await r.load(e,t),_.res.addTexture(e,r),r}async loadJson(i,a){return this.baseUrl=Ge.getPath(i),this.initUrl=i,new Promise(async(t,r)=>{fetch(i,{headers:null==a?void 0:a.headers}).then(async e=>{if(!e.ok)throw Error("request rejected with status"+e.status);e=await gr.read(i,e,a),e=new TextDecoder("utf-8").decode(e);t(JSON.parse(e))}).catch(e=>{a.onError&&a.onError(e),r(e)})})}async loadTxt(i,a){return this.baseUrl=Ge.getPath(i),new Promise(async(t,r)=>{fetch(i).then(async e=>{if(!e.ok)throw Error("request rejected with status"+e.status);e=await gr.read(i,e,a),e=new TextDecoder("utf-8").decode(e);t({data:e})}).catch(e=>{a.onError&&a.onError(e),r(e)})})}static async read(t,e,r){var i,a=e.body.getReader(),s=+e.headers.get("Content-Length");let o=0,n=[],h=[];for(;;){var{done:l,value:u}=await a.read();if(l){0<s&&r&&r.onComplete&&r.onComplete.call(this,t);break}n.push(u),o+=u.length,0<s?r&&r.onProgress&&r.onProgress.call(this,o,s,t):h.push(u.length)}if(0<h.length)for(let e=0;e<n.length;e++)console.log(h[e]),r&&r.onProgress&&r.onProgress.call(this,h[e],o,t),h[e]==o&&r&&r.onComplete&&r.onComplete.call(this,t);let c=new Uint8Array(o),d=0;for(i of n)c.set(i,d),d+=i.length;return c}}class ot extends gr{async load(a,s,o,n){switch(s.format){case"bin":return new Promise(async(r,t)=>{this.loadBinData(a,o).then(async e=>{var t=new s;if(t.userData=n,t.baseUrl=this.baseUrl,t.initUrl=a,await t.parseBuffer(e),!t.verification())throw new Error("parser error");r(t)}).catch(e=>{t(e)})});case"json":return new Promise((r,t)=>{this.loadJson(a,o).then(async e=>{var t=new s;t.userData=n,t.baseUrl=this.baseUrl,t.initUrl=a,t.loaderFunctions=o,await t.parserJson(e),r(t)}).catch(e=>{t(e)})});case"text":return new Promise((r,i)=>{this.loadTxt(a,o).then(async e=>{var t=new s;t.userData=n,t.baseUrl=this.baseUrl,t.initUrl=a,t.loaderFunctions=o,e.data?(await t.parserString(e.data),r(t)):i("text load is empty!")}).catch(e=>{i(e)})})}}}class rr{constructor(){s(this,"baseUrl"),s(this,"initUrl"),s(this,"loaderFunctions"),s(this,"userData"),s(this,"data")}parserString(e){}parserJson(e){}parseBuffer(e){}parserTexture(e){throw this.parserError("Method not implemented.",-1)}parse(e){}verification(e){throw this.parserError("Method not implemented.",-1)}parserError(e,t){console.error(`error id:${t} `+e)}}s(rr,"format","bin");class ca{constructor(){s(this,"asset"),s(this,"accessors"),s(this,"buffers"),s(this,"bufferViews"),s(this,"materials"),s(this,"meshes"),s(this,"nodes"),s(this,"scene",0),s(this,"scenes"),s(this,"textures"),s(this,"cameras"),s(this,"skins"),s(this,"resources"),s(this,"images"),s(this,"samplers"),s(this,"animations"),s(this,"extensions")}}class cc{constructor(){s(this,"nodes")}}class fc{constructor(){s(this,"name"),s(this,"type"),s(this,"color"),s(this,"intensity"),s(this,"range"),s(this,"spot"),s(this,"isParsed")}}class dc{constructor(){s(this,"name"),s(this,"rotation"),s(this,"scale"),s(this,"translation"),s(this,"children"),s(this,"matrix"),s(this,"mesh",-1),s(this,"isParsed"),s(this,"dnode"),s(this,"camera"),s(this,"skin"),s(this,"nodeId"),s(this,"primitives"),s(this,"extensions"),s(this,"light")}}class pc{constructor(){s(this,"attributes"),s(this,"indices"),s(this,"material"),s(this,"mode"),s(this,"name"),s(this,"targets"),s(this,"extensions"),s(this,"morphTargetsRelative")}}class mc{constructor(){s(this,"name"),s(this,"primitives"),s(this,"isParsed"),s(this,"dprimitives"),s(this,"weights"),s(this,"extras")}}class gc{constructor(){s(this,"bufferView"),s(this,"componentType"),s(this,"count"),s(this,"type"),s(this,"max"),s(this,"min"),s(this,"isParsed"),s(this,"daccessor"),s(this,"normalized"),s(this,"sparse"),s(this,"byteOffset"),s(this,"computeResult")}}const Sl=window.SharedArrayBuffer?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof window.SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer},Ea=5120,$r=5121,Da=5122,Ra=5123,Ia=5124,La=5125,Oa=5126,bl=32819,wl=32820,Tl=33635,Cl=5131,Ml=33640,Pl=35899,El=35902,Dl=36269,Rl=34042,Ns={};{const Pra=Ns;Pra[Ea]=Int8Array,Pra[$r]=Uint8Array,Pra[Da]=Int16Array,Pra[Ra]=Uint16Array,Pra[Ia]=Int32Array,Pra[La]=Uint32Array,Pra[Oa]=Float32Array,Pra[bl]=Uint16Array,Pra[wl]=Uint16Array,Pra[Tl]=Uint16Array,Pra[Cl]=Uint16Array,Pra[Ml]=Uint32Array,Pra[Pl]=Uint32Array,Pra[El]=Uint32Array,Pra[Dl]=Uint32Array,Pra[Rl]=Uint32Array}function xc(e){switch(e){case Int8Array:return Ea;case Uint8Array:case Uint8ClampedArray:return $r;case Int16Array:return Da;case Uint16Array:return Ra;case Int32Array:return Ia;case Uint32Array:return La;case Float32Array:return Oa;default:throw new Error("unsupported typed array type")}}function _c(e){if(e instanceof Int8Array)return Ea;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return $r;if(e instanceof Int16Array)return Da;if(e instanceof Uint16Array)return Ra;if(e instanceof Int32Array)return Ia;if(e instanceof Uint32Array)return La;if(e instanceof Float32Array)return Oa;throw new Error("unsupported typed array type")}function ps(e){e=Ns[e];if(e)return e;throw new Error("unkonw gl type")}function vc(e,t=Float32Array){return Sl(e)?e:new t(e)}class Ci{static async apply(t,r){if(r.extensions){const a=r.extensions.KHR_draco_mesh_compression;if(a){let e=this._workers.get(t.gltf),i=(e||(e=new Worker(await this.initDecoder()),this._workers.set(t.gltf,e)),e.postMessage({type:"init",decoderConfig:{}}),t.parseBufferView(a.bufferView));return i.result||(r=await new Promise((t,r)=>{e.onmessage=e=>{e=e.data;"decode"==e.type?t(e.result):"error"==e.type&&r(e.error)},e.postMessage({type:"decoder",buffer:i,attributes:a.attributes},[i])}),i.result=r),i.result}}}static unload(e){var t=this._workers.get(e);t&&(t.terminate(),this._workers.delete(e))}static async initDecoder(){var e;return this._workerCode||(e=await(new ot).loadTxt("https://cdn.orillusion.com/draco_decoder_gltf.js"),e=new Blob([e.data,"",`(${Il})()`],{type:"application/javascript"}),this._workerCode=URL.createObjectURL(e)),this._workerCode}}function Il(){let r,i;onmessage=e=>{var t=e.data;switch(t.type){case"init":r=t.decoderConfig,i=new Promise((t,e)=>{r.onModuleLoaded=e=>{t({draco:e})},DracoDecoderModule(r)});break;case"decoder":const _=t.buffer,y=t.attributes;i.then(e=>{var t=e.draco,r=new t.Decoder,e=new t.DecoderBuffer;e.Init(new Int8Array(_),_.byteLength);let i,a;try{var s=r.GetEncodedGeometryType(e),o=(s==t.TRIANGULAR_MESH?(a=new t.Mesh,i=r.DecodeBufferToMesh(e,a)):self.postMessage(new Error("INVALID_GEOMETRY_TYPE:"+s)),i.ok()||self.postMessage(new Error("DracoDecode:"+i.error_msg())),{});for(const x in y){var n=r.GetAttributeByUniqueId(a,y[x]),h=n.num_components(),l=a.num_points()*h,u=l*Float32Array.BYTES_PER_ELEMENT,c=t.DT_FLOAT32,d=t._malloc(u),f=(r.GetAttributeDataArrayForAllPoints(a,n,c,u,d),new Float32Array(t.HEAPF32.buffer,d,l).slice());t._free(d),o[x]={data:f,numComponents:h,normalize:!1}}var p=3*a.num_faces(),m=4*p,g=t._malloc(m),v=(r.GetTrianglesUInt32Array(a,m,g),new Uint32Array(t.HEAPF32.buffer,g,p).slice());t._free(g),o.indices={data:v,numComponents:1,normalize:!1},self.postMessage({type:"decode",result:o})}catch(e){self.postMessage({type:"error",error:e.message})}finally{t.destroy(a),t.destroy(r),t.destroy(e)}})}}}s(Ci,"_workerCode"),s(Ci,"_workers",new Map);class Ll{constructor(e){s(this,"gltf"),this.gltf=e}parse(e){var t,r,i,a,s,o,n,h=this.gltf.cameras[e];return h?(h.isParsed||(h.isParsed=!0,h.dcamera=!1,{name:t,type:r,perspective:o,orthographic:i}=h,"perspective"===r&&o?({aspectRatio:o,yfov:a,zfar:n,znear:s}=o,h.dcamera=Object.assign({},{name:t,type:r,yfov:a,znear:s,aspectRatio:o,zfar:n})):"orthographic"===r&&i&&({xmag:a,ymag:s,zfar:o,znear:n}=i,h.dcamera=Object.assign({},{name:t,type:r,xmag:a,ymag:s,zfar:o,znear:n}))),h.dcamera):this.errorMiss("camera",e)}errorMiss(e,t){throw new Error(e+t)}}const Wa=class extends rr{constructor(){super(...arguments),s(this,"_gltf")}async parserJson(e){this._gltf=new ca,this._gltf={...this._gltf,...e},this._gltf.resources={},await Promise.all([this.load_gltf_bin(),this.load_gltf_textures()]);let t=new da,r=await t.parse(this.initUrl,this._gltf,this._gltf.scene);return t.destory(),t=null,r?(this.data=r.rootNode,r.rootNode):this._gltf=null}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}static getMeshNameCounter(){return function(){return"GLTF_NO_NAME_PRIMITIVE_"+Wa._counter++}}static getModelNameCounter(){let e=0;return function(){return"GLTF_NO_NAME_MESH_"+e++}}static getTexCoordDefine(e){return"UV_NUM "+e}static getVertexColorDefine(e){return"HAS_VERTEXCOLOR "+e}static getBaseColorTextureDefine(){return"HAS_BASECOLORMAP"}static getMetalRoughnessDefine(){return"HAS_METALROUGHNESSMAP"}static getNormalMapDefine(){return"HAS_NORMALMAP"}static getEmissiveMapDefine(){return"HAS_EMISSIVEMAP"}static getOcclusionMapDefine(){return"HAS_OCCLUSIONMAP"}static getMorphTargetsDefine(e){return"MORPH_TARGET_NUM "+e}static getMorphtargetPositionDefine(){return"HAS_MORPH_POSITION"}static getMorphtargetNormalDefine(){return"HAS_MORPH_NORMAL"}static getMorphtargetTangentDefine(){return"HAS_MORPH_TANGENT"}static getJointsNumDefine(e){return"JOINTS_NUM "+e}static getJointVec8Define(){return"JOINT_VEC8"}static getHasNormalDefine(){return"HAS_NORMAL"}static getHasTangentDefine(){return"HAS_TANGENT"}static getHasNormalMapDefine(){return"HAS_NORMAL_MAP"}static getAlphaMaskDefine(){return"ALPHA_MASK"}static getAlphaBlendDefine(){return"ALPHA_BLEND"}async load_gltf_bin(){if(this._gltf.buffers&&0<this._gltf.buffers.length){var t=[];for(let e=0;e<this._gltf.buffers.length;e++){const i=this._gltf.buffers[e];if("data:"!==i.uri.substring(0,5)){let e=Ge.parseUrl(this.baseUrl,i.uri);null!=(r=this.loaderFunctions)&&r.onUrl&&(e=await this.loaderFunctions.onUrl(e));var r=(new ot).loadBinData(e,this.loaderFunctions).then(e=>{this._gltf.resources[i.uri]=e});t.push(r)}}await Promise.all(t)}}async load_gltf_textures(){if(this._gltf,this._gltf.images){var t=[];for(let e=0;e<this._gltf.images.length;e++){const i=this._gltf.images[e];if(i.uri){let e=Ge.parseUrl(this.baseUrl,i.uri);null!=(r=this.loaderFunctions)&&r.onUrl&&(e=await this.loaderFunctions.onUrl(e));var r=(new ot).loadAsyncBitmapTexture(e,this.loaderFunctions).then(e=>{e.name=Ge.getURLName(i.uri),this._gltf.resources[e.name]=e});t.push(r)}}await Promise.all(t)}}};let Ee=Wa;s(Ee,"format","json"),s(Ee,"_counter",0),s(Ee,"defaultMaterial",{name:"GLTF_DEFAULT_MATERIAL",alphaCutoff:.33,alphaMode:"MASK",pbrMetallicRoughness:{name:"GLTF_DEFAULT_MATERIAL",defines:[],doubleSided:!1,baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1,emissiveFactor:[0,0,0]}});class Ol{constructor(e){s(this,"gltf"),s(this,"subParser"),this.gltf=e.gltf,this.subParser=e}async parse(e){var n=this.gltf.meshes[e];if(!n)return this.errorMiss("mesh",e);if(!n.isParsed){var o=n.primitives,h=n.extras,l=[];for(let s=0;s<o.length;s++){var u,c=o[s],{attributes:d,indices:f,material:p,mode:m,targets:g,extensions:v}=c;let e=n.name;for(u in d)e+=u;e=e+("indices:"+f)+("material:"+p);const _={attribArrays:{indices:[]},weights:[],defines:[],material:null,drawMode:null,meshName:null,modelName:null,morphTargetsRelative:!1,targetNames:h?h.targetNames:null};let t=!1,r=0,i=!1,a;v&&v.KHR_draco_mesh_compression&&(a=await Ci.apply(this.subParser,c));for(const y in d){var x=a?a[y]:this.parseAccessor(d[y]);if(x){let e;switch(y){case"POSITION":e=H.position;break;case"NORMAL":e=H.normal,t=!0;break;case"TEXCOORD_0":e=H.uv,r++;break;case"JOINTS_0":e=H.joints0;break;case"JOINTS_1":e=H.joints1,i=!0;break;case"WEIGHTS_0":e=H.weights0;break;case"WEIGHTS_1":e=H.weights1;break;default:e=y}_.attribArrays[e]=x}}t&&_.defines.push(Ee.getHasNormalDefine()),r&&_.defines.push(Ee.getTexCoordDefine(r)),i&&_.defines.push(Ee.getJointVec8Define()),void 0!==f&&(v=a?a.indices:this.parseAccessor(f))&&(_.attribArrays.indices=v);c=await this.parseMaterial(p);if(c&&(_.material=c,_.defines=_.defines.concat(c.defines)),_.drawMode=void 0===m?4:m,_.meshName=()=>e,_.modelName=n.name||Ee.getModelNameCounter(),g){_.defines.push(Ee.getMorphTargetsDefine(g.length));let a=!(_.morphTargetsRelative=!0),s=!1,o=!1;for(let i=0;i<g.length;i++){const S=g[i];Object.keys(S).forEach(t=>{var r=this.parseAccessor(S[t]);if(r){let e;switch(t){case"POSITION":e=$.MORPH_POSITION_PREFIX+i,a=!0;break;case"NORMAL":e=$.MORPH_NORMAL_PREFIX+i,s=!0;break;case"TANGENT":e=$.MORPH_TANGENT_PREFIX+i,o=!0;break;default:e=!1}e?_.attribArrays[e]=r:console.error("glTF has unsupported morph target attribute "+t)}})}a&&_.defines.push(Ee.getMorphtargetPositionDefine()),s&&_.defines.push(Ee.getMorphtargetNormalDefine()),o&&_.defines.push(Ee.getMorphtargetTangentDefine()),_.weights=n.weights||new Array(g.length).fill(0)}l.push(_)}n.dprimitives=l,n.isParsed=!0}return n.dprimitives}parseAccessor(e){return this.subParser.parseAccessor(e)}parseMaterial(e){return this.subParser.parseMaterial(e)}errorMiss(e,t){throw new Error(e+t)}}class Al{constructor(e){s(this,"gltf"),s(this,"subParser"),this.gltf=e.gltf,this.subParser=e}async parse(e){let t;if(!(t=null==e?Ee.defaultMaterial:this.gltf.materials[e]))return this.errorMiss("material",e);if(t.isParsed)return t.dmaterial;let{name:r,pbrMetallicRoughness:i,normalTexture:a,occlusionTexture:s,emissiveTexture:o,emissiveFactor:n,alphaMode:h,alphaCutoff:l,doubleSided:u,extensions:c}=t;var d,f,p,m,g,e={name:r,defines:[],doubleSided:!!u,baseColorFactor:[1,1,1,1],emissiveFactor:null,alphaCutoff:0,enableBlend:!1,baseColorTexture:null,metallicRoughnessTexture:null,normalTexture:null,occlusionTexture:null,emissiveTexture:null,transformUV1:null,transformUV2:null,extensions:null};return i?({baseColorFactor:f,metallicFactor:p,roughnessFactor:g,baseColorTexture:m,metallicRoughnessTexture:d}=i,Object.assign(e,{baseColorFactor:f||[1,1,1,1],metallicFactor:void 0===p?1:p,roughnessFactor:void 0===g?.15:g}),m&&((f=m.extensions)&&(p=f.KHR_texture_transform)&&(e.transformUV1=new X(p.offset?p.offset[0]:0,p.offset?p.offset[1]:0,p.scale?p.scale[0]:1,p.scale?p.scale[1]:1)),g=await this.parseTexture(m.index),e.baseColorTexture=g||_.res.redTexture),d&&(f=await this.parseTexture(d.index),e.metallicRoughnessTexture=f||_.res.blackTexture)):Object.assign(e,{baseColorFactor:[1,1,1,1],metallicFactor:0,roughnessFactor:.5}),(h=e.baseColorFactor&&e.baseColorFactor[3]<1?"MASK"===h?"MASK":"BLEND":h)&&"OPAQUE"!==h&&("MASK"===h&&(e.defines.push(Ee.getAlphaMaskDefine()),e.alphaCutoff=void 0===l?.5:l),"BLEND"===h)&&(e.defines.push(Ee.getAlphaBlendDefine()),e.enableBlend=!0),a&&(p=await this.parseTexture(a.index),e.normalTexture=p||_.res.normalTexture),s&&(m=await this.parseTexture(s.index))&&(e.occlusionTexture=m),n&&(e.emissiveFactor=n),o&&(g=await this.parseTexture(o.index),e.emissiveTexture=g||_.res.blackTexture),c&&(e.extensions=c),t.isParsed=!0,t.dmaterial=e}async parseTexture(e){return this.subParser.parseTexture(e)}errorMiss(e,t){throw new Error(e+t)}}class Ul{constructor(e){s(this,"gltf"),s(this,"subParser"),this.gltf=e.gltf,this.subParser=e}parse(t){var r=this.gltf.skins[t];if(!r)return this.errorMiss("skin",t);if(!r.isParsed){var{name:i,joints:a,inverseBindMatrices:s,skeleton:o}=r;if(!a)return this.errorMiss("skin.joints",t);r.isParsed=!0,r.dskin=!1;let e={name:i,skeleton:null,inverseBindMatrices:null,joints:a,defines:[Ee.getJointsNumDefine(a.length)]};if(o)e.skeleton=o;else{var n=-1;for(let e=0;e<this.gltf.nodes.length;e++)if("root"==this.gltf.nodes[e].name){n=e;break}-1==n&&(n=(t=this.gltf.scenes[this.gltf.scene]).nodes[t.nodes.length-1]),e.skeleton=n}if(e.inverseBindMatrices=$.IDENTITY_INVERSE_BIND_MATRICES,void 0!==s){i=this.parseAccessor(s);if(i){var h=i.data,l=[];for(let e=0;e<h.length;e+=16)l.push(h.slice(e,e+16));e.inverseBindMatrices=l}else e=null}r.dskin=e}return r.dskin}parseAccessor(e){return this.subParser.parseAccessor(e)}errorMiss(e,t){throw new Error(e+t)}}class Bl{constructor(e=""){s(this,"name",""),s(this,"index",0),s(this,"parent",null),s(this,"children",[]),s(this,"scale",new p),s(this,"rotation",new j),s(this,"translation",new p),this.name=e}}class zl{constructor(e=[]){s(this,"joints"),this.joints=e}get numJoint(){return this.joints.length}addJoint(e){e.index=this.joints.push(e)-1}getJointName(e){return this.joints[e].name}getJointParentIndex(e){e=this.joints[e];return e.parent?e.parent.index:-1}getJointByName(e){for(var t of this.joints)if(t.name==e)return t;return null}}class ms{constructor(e,t=!1){s(this,"index"),s(this,"worldMatrix"),this.index=e,this.worldMatrix=new N(!t)}}class Mi{constructor(t,r=!1){s(this,"time"),s(this,"_skeleton"),s(this,"_jointsPose"),s(this,"mJointMatrixIndexTable"),this._skeleton=t,this._jointsPose=new Array(t.numJoint),this.mJointMatrixIndexTable=new Array(t.numJoint);for(let e=0;e<t.numJoint;e++){var i=new ms(e,r);this._jointsPose[e]=i,this.mJointMatrixIndexTable[e]=i.worldMatrix.index}}buildSkeletonPose(t){var r=new p,i=new j,a=new p,s=new Array(this._skeleton.numJoint);this.time=0<t[11]?t[11]:t[24];for(let e=0;e<this._skeleton.numJoint;e++){var o=12*e*4,o=new Float32Array(t.buffer,t.byteOffset+o,12),n=new N,o=(r.set(o[0],o[1],o[2]),i.set(o[4],o[5],o[6],o[7]),a.set(o[8],o[9],o[10]),ha(i.getEulerAngles(),a,r,n),s[e]=n,new ms(e)),h=this._skeleton.getJointParentIndex(e);h<0?o.worldMatrix.copyFrom(n):lo(this._jointsPose[h].worldMatrix,n,o.worldMatrix),this._jointsPose[e]=o}}get numJoint(){return this._skeleton.numJoint}get joints(){return this._jointsPose}get jointMatrixIndexTable(){return this.mJointMatrixIndexTable}lerp(t,r,i){for(let e=0;e<this._jointsPose.length;e++){var a=t._jointsPose[e],s=r._jointsPose[e];this._jointsPose[e].worldMatrix.lerp(a.worldMatrix,s.worldMatrix,i)}}copyFrom(t){for(let e=0;e<this._jointsPose.length;e++)this._jointsPose[e].worldMatrix.copyFrom(t._jointsPose[e].worldMatrix)}reset(){for(let e=0;e<this._jointsPose.length;e++)this._jointsPose[e].worldMatrix.identity()}}class Nl extends st{constructor(e,t){super(),s(this,"skeletonAnimation"),this.type=e,this.time=t}}class Aa{constructor(e,t,r,i){if(s(this,"name",""),s(this,"_skeleton"),s(this,"_skeletonPoses"),s(this,"_animationClipData"),s(this,"_events"),this.name=e,this._skeleton=t,this._animationClipData=i,0<r&&i){this._skeletonPoses=new Array(r);var a=12*t.numJoint;for(let e=0;e<r;e++){var o=a*e*4,o=new Float32Array(i.buffer,o,a),n=new Mi(t);n.buildSkeletonPose(o),this._skeletonPoses[e]=n}}}get totalTime(){return this._skeletonPoses[this._skeletonPoses.length-1].time}get frameRate(){return this.totalTime/this._skeletonPoses.length}get skeleton(){return this._skeleton}get numFrame(){return this._skeletonPoses.length-1}get animationClipData(){return this._animationClipData}getSkeletonPose(e){return this._skeletonPoses[e]}getLerpSkeletonPose(e,t,r,i){e=this.getSkeletonPose(e),t=this.getSkeletonPose(t);return i.lerp(e,t,r),i}createSubClip(e,t,r){var e=new Aa(e,this._skeleton,0,null),t=Math.max(Math.floor(t/this.frameRate),0),r=Math.min(Math.floor(r/this.frameRate),this._skeletonPoses.length-1),i=(e._skeletonPoses=this._skeletonPoses.slice(t,r),12*this._skeleton.numJoint*4);return this._animationClipData=new Float32Array(this._animationClipData,t*i,(r-t)*i),e}addEvent(e,t){this._events||(this._events=new Array),this._events.push(new Nl(e,t))}removeEvent(t){this._events&&(this._events=this._events.filter(e=>e.type!=t))}getEvents(){return this._events}}class gs{constructor(e){s(this,"gltf"),s(this,"subParser"),this.gltf=e.gltf,this.subParser=e}parse(e){var t=new zl;return this.buildSkeleton(t,void 0,e),t}parseSkeletonAnimation(e,t){for(var r,i=this.subParser.parseAccessor(t.samplers[0].input).data.length,a=12*e.numJoint,s=new Float32Array(a*i),o=0;o<e.numJoint;o++)for(var n=0;n<i;n++)s[(p=a*n+12*o)+0]=1,s[p+1]=1,s[p+2]=1,s[p+3]=1;for(r of t.channels){var h=t.samplers[r.sampler],l=this.subParser.parseAccessor(h.input),u=this.subParser.parseAccessor(h.output),h=r.target.node,c=r.target.path,h=this.gltf.nodes[h];if(h){var d=e.getJointByName(h.name);switch(c){case"scale":for(n=0;n<i;n++){var f=n*u.numComponents;s[(p=a*n+12*d.index)+0]=u.data[f+0],s[p+1]=u.data[f+1],s[p+2]=u.data[f+2],s[p+3]=1}break;case"rotation":for(n=0;n<i;n++){f=n*u.numComponents;s[(p=a*n+12*d.index+4)+0]=u.data[f+0],s[p+1]=u.data[f+1],s[p+2]=u.data[f+2],s[p+3]=u.data[f+3]}break;case"translation":for(n=0;n<i;n++){var p,f=n*u.numComponents;s[(p=a*n+12*d.index+8)+0]=u.data[f+0],s[p+1]=u.data[f+1],s[p+2]=u.data[f+2],s[p+3]=l.data[n*l.numComponents]}}}}return new Aa(t.name,e,i,s)}buildSkeleton(e,t,r,i=0){var a=this.gltf.nodes[r],s=(a.name||(a.name="Node_"+r),new Bl(a.name));if(s.parent=t,a.scale&&s.scale.set(a.scale[0],a.scale[1],a.scale[2]),a.rotation&&s.rotation.set(a.rotation[0],a.rotation[1],a.rotation[2],a.rotation[3]),a.translation&&s.translation.set(a.translation[0],a.translation[1],a.translation[2]),e.addJoint(s),a.children)for(var o of a.children)this.buildSkeleton(e,s,o,i+1)}}class Fl{constructor(e){s(this,"loop",!0),s(this,"speed",1),s(this,"t",0),s(this,"time",0),s(this,"weight",0),s(this,"currFrame",0),s(this,"lastFrame",-1),s(this,"nextFrame",0),s(this,"clip"),s(this,"animation"),s(this,"_isEnd",!1),s(this,"_currSkeletonPose"),this.clip=e,this._currSkeletonPose=new Mi(this.clip.skeleton)}reset(){this.time=0,this.weight=0,this._isEnd=!1}get name(){return this.clip.name}get currSkeletonPose(){return this._currSkeletonPose}update(e){this.time=(this.time+e*this.speed)%this.clip.totalTime;e=this.time/this.clip.frameRate;if(this.currFrame=Math.trunc(e),this.t=e-this.currFrame,this.currFrame<0&&(this.currFrame=this.clip.numFrame+this.currFrame),0<=this.time?this.nextFrame=(this.currFrame+1)%this.clip.numFrame:(this.nextFrame=this.currFrame-1,this.nextFrame<0&&(this.nextFrame=this.clip.numFrame+this.nextFrame),this.t=1-this.t),this._isEnd)this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1;else if(this.currFrame!=this.lastFrame){e=this.speed<0?0:this.clip.numFrame,e=(this.currFrame==e&&(this.loop?(this.currFrame=0,this.nextFrame=1,this.time=this.t=0):(this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1,this._isEnd=!0)),this.clip.getEvents());if(e)for(var t of e){var r=Math.floor(t.time/this.clip.frameRate),r=Math.min(r,this.clip.numFrame);if(Math.max(r,0)==this.currFrame){t.skeletonAnimation=this.animation,this.animation.eventDispatcher.dispatchEvent(t);break}}this.lastFrame=this.currFrame}this.clip.getLerpSkeletonPose(this.currFrame,this.nextFrame,this.t,this._currSkeletonPose)}}class $t extends ve{constructor(){super(),s(this,"isPlaying",!0),s(this,"timeScale",1),s(this,"_skeleton"),s(this,"_clips",[]),s(this,"_clipStates",new Map),s(this,"_mixSkeletonPose"),s(this,"_mixTempSkeletonPose"),s(this,"_currentClipState"),s(this,"_bindList",[]),s(this,"_jointMatrixIndexTableBuffer"),s(this,"_crossFadeState")}start(){}get currName(){return this._currentClipState?this._currentClipState.name:""}set skeleton(e){this._skeleton=e,this._mixSkeletonPose=new Mi(this._skeleton,!0),this._mixTempSkeletonPose=new Mi(this._skeleton);e=new Float32Array(this._mixSkeletonPose.jointMatrixIndexTable);this._jointMatrixIndexTableBuffer=new Se(4*this._skeleton.numJoint,0,e),this._jointMatrixIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get skeleton(){return this._skeleton}get finalSkeletonPose(){return this._mixSkeletonPose}get jointMatrixIndexTableBuffer(){return this._jointMatrixIndexTableBuffer}getJointIndexTable(t){var r=new Array;for(let e=0;e<t.length;e++){var i=t[e],i=this._skeleton.getJointByName(i);r[e]=i?i.index:-1}return r}addAnimationClip(e){var t;this._clipStates.has(e.name)||(this._clips.push(e),((t=new Fl(e)).animation=this)._clipStates.set(e.name,t),this._currentClipState)||this.setCurrentClipState(t)}getAnimationClip(e){e=this.getAnimationClipState(e);return e?e.clip:null}getAnimationClips(){return this._clips}getAnimationClipState(e){return this._clipStates.has(e)?this._clipStates.get(e):null}getAnimationClipStates(){return this._clipStates}pause(){this.isPlaying=!1}resume(){this.isPlaying=!0}play(e,t=1,r=!1){return this._currentClipState&&this._currentClipState.name==e?(r&&this._currentClipState.reset(),!1):!!(r=this.getAnimationClipState(e))&&(r.speed=t,r.reset(),this._clipStates.forEach((e,t)=>{e.weight=0}),this.setCurrentClipState(r),!0)}crossFade(e,t){t<.01?this.play(e):this._currentClipState.name!=e&&(e=this.getAnimationClipState(e))&&(e.reset(),this._crossFadeState?(this._crossFadeState.inClip&&(this._crossFadeState.inClip.weight=0),this._crossFadeState.outClip&&(this._crossFadeState.outClip.weight=0),this._crossFadeState.reset(e,this._currentClipState,t)):this._crossFadeState=new kl(e,this._currentClipState,t),this._currentClipState=e)}setAnimIsLoop(e,t){this._clipStates.has(e)&&(this._clipStates.get(e).loop=t)}addJointBind(e,t){this._bindList.push({jointName:e,obj:t})}removeJointBind(t){for(let e=0;e<this._bindList.length;e++)if(this._bindList[e].obj==t){this._bindList.splice(e,1);break}}onUpdate(){if(this.isPlaying){let r=.001*de.delta*this.timeScale;this._crossFadeState&&this._crossFadeState.update(r);var i=0,a=[];if(this._clipStates.forEach((e,t)=>{0<e.weight&&(e.update(r),i+=e.weight,a.push(e))}),0<a.length){this._mixSkeletonPose.copyFrom(a[0].currSkeletonPose);for(var e=1;e<a.length;++e){var t=a[e];this._mixTempSkeletonPose.lerp(this._mixSkeletonPose,t.currSkeletonPose,t.weight/i),this._mixSkeletonPose.copyFrom(this._mixTempSkeletonPose)}}}}cloneTo(e){var t=e.addComponent($t);t.skeleton=this.skeleton;for(var r=0;r<this._clips.length;++r)t.addAnimationClip(this._clips[r])}setCurrentClipState(e){this._currentClipState!=e&&(this._currentClipState=e,this._currentClipState.weight=1)}}class kl{constructor(e,t,r){s(this,"inClip"),s(this,"outClip"),s(this,"currentTime"),s(this,"crossFadeTime"),this.reset(e,t,r)}reset(e,t,r){this.inClip=e,this.outClip=t,this.currentTime=0,this.crossFadeTime=r}update(e){this.inClip&&this.outClip&&(this.currentTime+=e,this.inClip.weight=Math.min(Math.abs(this.currentTime%this.crossFadeTime)/this.crossFadeTime,1),this.outClip.weight=1-this.inClip.weight,Math.abs(this.currentTime)>=this.crossFadeTime)&&(this.inClip.weight=1,this.outClip.weight=0,this.inClip=null,this.outClip=null)}}class fa{static add(e){-1==this.list.indexOf(e)&&this.list.push(e)}static remove(e){e=this.list.indexOf(e);-1!=e&&this.list.splice(e,1)}}s(fa,"list",[]);class Ua extends ve{constructor(){super(),s(this,"name"),s(this,"size",1),s(this,"lightData"),s(this,"dirFix",1),s(this,"bindOnChange"),s(this,"needUpdateShadow",!0),s(this,"realTimeShadow",!0),s(this,"_castGI",!1),s(this,"_castShadow",!1),s(this,"_iesPofiles")}init(){this.transform.object3D.bound=new je(new p,new p),this.lightData=new vi,this.lightData.lightMatrixIndex=this.transform.worldMatrix.index}onChange(){this.bindOnChange&&this.bindOnChange(),this.transform.object3D.bound.setFromCenterAndSize(this.transform.worldPosition,new p(this.size,this.size,this.size)),this._castGI&&(V.instance.state.giLightingChange=!0),this._castShadow?(this.needUpdateShadow=!0,kt.addShadowLight(this)):kt.removeShadowLight(this)}start(){this.transform.onScaleChange=()=>this.onScaleChange(),this.transform.onRotationChange=()=>this.onRotChange(),this.onRotChange(),this.onScaleChange()}onRotChange(){1==this.dirFix?this.lightData.direction.copyFrom(this.transform.forward):this.lightData.direction.copyFrom(this.transform.back),this.lightData.lightTangent.copyFrom(this.transform.up),this.onChange()}onScaleChange(){this.onChange()}onEnable(){this.onChange(),V.instance.addLight(this.transform.scene3D,this)}onDisable(){this.onChange(),V.instance.removeLight(this.transform.scene3D,this)}set iesPofile(e){this._iesPofiles=e,this.lightData.iesPofiles=e.index,Lt.use=!0,this.onChange()}get iesPofile(){return this._iesPofiles}get r(){return this.lightData.lightColor.r}set r(e){this.lightData.lightColor.r=e,this.onChange()}get g(){return this.lightData.lightColor.g}set g(e){this.lightData.lightColor.g=e,this.onChange()}get b(){return this.lightData.lightColor.b}set b(e){this.lightData.lightColor.b=e,this.onChange()}get lightColor(){return this.lightData.lightColor}set lightColor(e){this.lightData.lightColor=e,this.onChange()}get intensity(){return this.lightData.intensity}set intensity(e){this.lightData.intensity=e,this.onChange()}get castShadow(){return 0<=this.lightData.castShadowIndex}get shadowIndex(){return this.lightData.castShadowIndex}set castShadow(e){e&&this.onChange()}get castGI(){return this._castGI}set castGI(e){e?fa.add(this):fa.remove(this),(this._castGI=e)&&this.onChange()}get direction(){return this.lightData.direction}destroy(){this.lightData=null,this.bindOnChange=null,this.transform.eventDispatcher.removeEventListener(Fe.ROTATION_ONCHANGE,this.onRotChange,this),this.transform.eventDispatcher.removeEventListener(Fe.SCALE_ONCHANGE,this.onScaleChange,this),super.destroy()}}class Gl extends Ua{constructor(){super(),s(this,"shadowCamera")}init(){super.init(),""==this.object3D.name&&(this.object3D.name="DirectionLight_"+qe()),this.radius=9999999,this.lightData.lightType=Pe.DirectionLight,this.lightData.linear=0}start(){super.start(),this.castGI=!0}get radius(){return this.lightData.range}set radius(e){this.lightData.range=e,this.onChange()}get indirect(){return this.lightData.quadratic}set indirect(e){this.lightData.quadratic=e,this.onChange()}set castShadow(e){e!=this._castShadow&&this.onChange(),this._castShadow=e}get castShadow(){return 0<=this.lightData.castShadowIndex}debug(){}}class Vl extends Ua{constructor(){super()}init(){super.init(),this.lightData.lightType=Pe.PointLight,""==this.object3D.name&&(this.object3D.name="PointLight"+qe())}get range(){return this.lightData.range}set range(e){this.lightData.range=e,this.onChange()}get at(){return this.lightData.linear}set at(e){this.lightData.linear=e,this.onChange()}get radius(){return this.lightData.radius}set radius(e){this.lightData.radius=e,this.onChange()}get quadratic(){return this.lightData.quadratic}set quadratic(e){this.lightData.quadratic=e,this.onChange()}set castShadow(e){e!=this._castShadow&&this.onChange(),this._castShadow=e}start(){this.transform.rotationX=90,super.start()}onUpdate(){this.transform.updateWorldMatrix(!0)}onGraphic(e){e=_.getRenderJob(e).graphic3D.createCustomShape("PointLight_"+this.object3D.uuid,this.transform);e.buildAxis(),e.buildCircle(p.ZERO,this.range,32,p.X_AXIS),e.buildCircle(p.ZERO,this.range,32,p.Y_AXIS),e.buildCircle(p.ZERO,this.range,32,p.Z_AXIS)}debug(){}debugDraw(e){}}class Hl extends Ua{constructor(){super()}init(){super.init(),this.lightData.lightType=Pe.SpotLight,""==this.object3D.name&&(this.object3D.name="SpotLight"+qe())}get innerAngle(){return this.lightData.innerAngle/this.lightData.outerAngle*100}set innerAngle(e){this.lightData.innerAngle=Y(e,0,100)/100*this.lightData.outerAngle,this.onChange()}get outerAngle(){return this.lightData.outerAngle*ri*2}set outerAngle(e){this.lightData.outerAngle=Y(e,1,179)*te*.5,this.onChange()}get radius(){return this.lightData.radius}set radius(e){this.lightData.radius=e,this.onChange()}get range(){return this.lightData.range}set range(e){this.lightData.range=e,this.onChange()}get at(){return this.lightData.linear}set at(e){this.lightData.linear=e,this.onChange()}set castShadow(e){e!=this._castShadow&&this.onChange(),this._castShadow=e}start(){super.start(),this.lightData.lightType=Pe.SpotLight}onUpdate(){this.transform.updateWorldMatrix(!0)}onGraphic(e){var e=_.getRenderJob(e).graphic3D.createCustomShape("SpotLight_"+this.object3D.uuid,this.transform),t=this.range,r=this.outerAngle/2,i=(e.buildAxis(),(90-r)*te),a=t*Math.cos(i),s=t*Math.sin(i);e.buildLines([p.ZERO,new p(0,a,s)]),e.buildLines([p.ZERO,new p(a,0,s)]),i=(90+r)*te,a=t*Math.cos(i),s=t*Math.sin(i),e.buildLines([p.ZERO,new p(0,a,s)]),e.buildLines([p.ZERO,new p(a,0,s)]),e.buildArcLine(p.ZERO,t,90-r,90+r,16,p.X_AXIS),e.buildArcLine(p.ZERO,t,90-r,90+r,16,p.Y_AXIS),e.buildCircle(new p(0,0,t*Math.sin(i)),t*Math.cos(i),32,p.Z_AXIS)}debug(){}debugDraw(e){}}class Ba extends Le{constructor(){super(),s(this,"skinJointsName"),s(this,"mInverseBindMatrixData"),s(this,"mInverseBindMatrixBuffer"),s(this,"mSkeletonAnimation"),s(this,"mJointIndexTableBuffer"),this.addRendererMask(Ue.SkinnedMesh)}start(){var e;super.start(),this.skeletonAnimation=this.object3D.getComponent($t),this.skeletonAnimation||(0<(e=this.object3D.parentObject.parentObject.getComponentsInChild($t)).length&&(this.skeletonAnimation=e[0]),this.skeletonAnimation)||(this.skeletonAnimation=this.object3D.getComponentFromParent($t))}onEnable(){super.onEnable()}get skeletonAnimation(){return this.mSkeletonAnimation}set skeletonAnimation(e){(this.mSkeletonAnimation=e)&&!this.mJointIndexTableBuffer&&(e=this.mSkeletonAnimation.getJointIndexTable(this.skinJointsName),this.mJointIndexTableBuffer=new Se(4*e.length,0,new Float32Array(e)),this.mJointIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE)}get skinInverseBindMatrices(){return this.mInverseBindMatrixData}set skinInverseBindMatrices(t){this.mInverseBindMatrixData=t;var r=new Float32Array(16*t.length);for(let e=0;e<t.length;e++){var i=16*e,a=t[e];r.set(a,i)}this.mInverseBindMatrixBuffer=new Se(r.byteLength,0,r),this.mInverseBindMatrixBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get inverseBindMatrixBuffer(){return this.mInverseBindMatrixBuffer}get jointIndexTableBuffer(){return this.mJointIndexTableBuffer.buffer}cloneTo(e){e=e.addComponent(Ba);e.geometry=this.geometry,e.material=this.material.clone(),e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask,e.skinJointsName=this.skinJointsName,e.skinInverseBindMatrices=this.skinInverseBindMatrices,e.mJointIndexTableBuffer=this.mJointIndexTableBuffer}nodeUpdate(e,t,r,i){for(let e=0;e<this.materials.length;e++){var a=this.materials[e].renderPasses.get(t);if(a)for(let e=0;e<a.length;e++){var s=a[e].renderShader;s.pipeline||(s.setStorageBuffer("jointsMatrixIndexTable",this.mSkeletonAnimation.jointMatrixIndexTableBuffer),s.setStorageBuffer("jointsInverseMatrix",this.mInverseBindMatrixBuffer),s.setStorageBuffer("jointsIndexMapingTable",this.mJointIndexTableBuffer))}}super.nodeUpdate(e,t,r,i)}}class Ui extends ut{get uvTransform_1(){return this.renderShader.uniforms.transformUV1.vector4}set uvTransform_1(e){this.renderShader.setUniformVector4("transformUV1",e)}get uvTransform_2(){return this.renderShader.uniforms.transformUV2.vector4}set uvTransform_2(e){this.renderShader.setUniformVector4("transformUV2",e)}get materialF0(){return this.renderShader.uniforms.materialF0.vector4}set materialF0(e){this.renderShader.setUniformVector4("materialF0",e)}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){this.renderShader.setUniformFloat("roughness",e)}get metallic(){return this.renderShader.uniforms.metallic.value}set metallic(e){this.renderShader.setUniformFloat("metallic",e)}get ao(){return this.renderShader.uniforms.ao.value}set ao(e){this.renderShader.setUniformFloat("ao",e)}get metallic_min(){return this.renderShader.uniforms.metallic_min.value}set metallic_min(e){this.renderShader.setUniformFloat("metallic_min",e)}get metallic_max(){return this.renderShader.uniforms.metallic_max.value}set metallic_max(e){this.renderShader.setUniformFloat("metallic_max",e)}get roughness_min(){return this.renderShader.uniforms.roughness_min.value}set roughness_min(e){this.renderShader.setUniformFloat("roughness_min",e)}get roughness_max(){return this.renderShader.uniforms.roughness_max.value}set roughness_max(e){this.renderShader.setUniformFloat("roughness_max",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get maskMap(){return this.renderShader.textures.maskMap}set maskMap(e){this.renderShader.setDefine("USE_ARMC",!0),this.renderShader.setTexture("maskMap",e)}set aoMap(e){e&&(this.renderShader.setTexture("aoMap",e),e!=_.res.whiteTexture)&&this.renderShader.setDefine("USE_AOTEX",!0)}get aoMap(){return this.renderShader.textures.aoMap}set clearCoatRoughnessMap(e){e&&(this.renderShader.setTexture("clearCoatRoughnessMap",e),this.renderShader.setDefine("USE_CLEARCOAT_ROUGHNESS",!0))}get clearCoatRoughnessMap(){return this.renderShader.textures.clearCoatRoughnessMap}get brdfLUT(){return this.renderShader.textures.brdfLUT}set brdfLUT(e){this.renderShader.setTexture("brdfLUT",e),this.renderShader.setTexture("brdflutMap",e)}get emissiveMap(){return this.renderShader.textures.emissiveMap}set emissiveMap(e){this.renderShader.setTexture("emissiveMap",e)}set envIntensity(e){this.renderShader.setUniformFloat("envIntensity",e)}get envIntensity(){return this.renderShader.uniforms.envIntensity.value}set ior(e){this.renderShader.setUniformFloat("ior",e)}get ior(){return this.renderShader.uniforms.ior.value}useCleanCoat(){this.renderShader.setDefine("USE_CLEARCOAT",!0)}set clearcoatFactor(e){this.renderShader.setUniformFloat("clearcoatFactor",e)}get clearcoatFactor(){return this.renderShader.uniforms.clearcoatFactor.value}set clearcoatRoughnessFactor(e){this.renderShader.setUniformFloat("clearcoatRoughnessFactor",e)}get clearcoatRoughnessFactor(){return this.renderShader.uniforms.clearcoatRoughnessFactor.value}set clearcoatWeight(e){this.renderShader.setUniformFloat("clearcoatWeight",e)}get clearcoatWeight(){return this.renderShader.uniforms.clearcoatWeight.value}set clearcoatColor(e){this.renderShader.setUniformColor("clearcoatColor",e)}get clearcoatColor(){return this.renderShader.uniforms.clearcoatColor.color}debug(){}}const Ya=class extends Ui{constructor(){super(),this.setShader("PBRLItShader","PBRLItShader");var e=this.getShader(),e=(e.setShaderEntry("VertMain","FragMain"),e.setDefine("USE_BRDF",!0),e.setDefine("USE_NORMALFILPY",_.setting.material.normalYFlip),e.shaderState),e=(e.acceptShadow=!0,e.castShadow=!0,e.receiveEnv=!0,e.acceptGI=!0,e.useLight=!0,_.res.getTexture("BRDFLUT"));this.brdfLUT=e,this.baseMap=_.res.whiteTexture,this.normalMap=_.res.normalTexture,this.emissiveMap=_.res.blackTexture}clone(){console.log("clone LitMaterial "+this.name);var e=new Ya;return e.baseMap=this.baseMap,e.normalMap=this.normalMap,e.aoMap=this.aoMap,this.maskMap&&(e.maskMap=this.maskMap),e.emissiveMap=this.emissiveMap,this.uvTransform_1&&(e.uvTransform_1=(new X).copyFrom(this.uvTransform_1)),this.uvTransform_2&&(e.uvTransform_2=(new X).copyFrom(this.uvTransform_2)),e.baseColor=this.baseColor.clone(),e.emissiveColor=this.emissiveColor.clone(),this.materialF0&&(e.materialF0=(new X).copyFrom(this.materialF0)),e.envIntensity=this.envIntensity,e.normalScale=this.normalScale,e.roughness=this.roughness,e.metallic=this.metallic,e.ao=this.ao,e.roughness_min=this.roughness_min,e.roughness_max=this.roughness_max,e.metallic_min=this.metallic_min,e.metallic_max=this.metallic_max,e.emissiveIntensity=this.emissiveIntensity,e.alphaCutoff=this.alphaCutoff,e.ior=this.ior,e.clearcoatFactor=this.clearcoatFactor,e.clearcoatRoughnessFactor=this.clearcoatRoughnessFactor,e}debug(){}};let Wr=Ya;s(Wr,"count",0);class Xl{static apply(e,t,r){var i=t.extensions;i&&i.KHR_materials_clearcoat&&(r.setDefine("USE_CLEARCOAT",!0),"clearcoatFactor"in(i=i.KHR_materials_clearcoat)&&(t.clearcoatFactor=i.clearcoatFactor,r.clearcoatFactor=t.clearcoatFactor),"clearcoatRoughnessFactor"in i)&&(t.clearcoatRoughnessFactor=i.clearcoatRoughnessFactor,r.clearcoatRoughnessFactor=t.clearcoatRoughnessFactor)}}class Wl{static apply(e,t,r){t=t.extensions;t&&t.KHR_materials_emissive_strength?(r.emissiveIntensity=.5*t.KHR_materials_emissive_strength.emissiveStrength,r.emissiveMap==_.res.blackTexture&&(r.emissiveMap=_.res.whiteTexture)):r.emissiveIntensity=1}}class Yl{static apply(e,t,r){t=t.extensions;t&&t.KHR_materials_unlit?r.supportLight=!0:r.supportLight=!1}}class jl{constructor(e){s(this,"gltf"),s(this,"subParser"),s(this,"_testCount",8),s(this,"_hasCastShadow",!1),this.gltf=e.gltf,this.subParser=e}async convertNodeToObject3D(e,t){var r,i=new ee;if(i.name=e.name,i[$.GLTF_NODE_INDEX_PROPERTY]=e.nodeId,e.nodeObj=i,e.matrix&&(e.translation=[0,0,0],e.rotation=[0,0,0,1],e.scale=[1,1,1]),e.translation&&(i.transform.x=e.translation[0],i.transform.y=e.translation[1],i.transform.z=e.translation[2]),e.rotation&&((r=new j).setFromArray(e.rotation),i.transform.localRotQuat=r),e.scale&&(i.transform.scaleX=e.scale[0],i.transform.scaleY=e.scale[1],i.transform.scaleZ=e.scale[2]),t.addChild(i),e.light&&this.convertLight(e,i),e.primitives&&this.convertprimitives(e,i),e.skeleton){var a=i.addComponent($t);if(a){a.skeleton=this.subParser.parseSkeleton(e.skeleton.skeleton);for(let e=0;e<this.gltf.animations.length;e++){var s=this.gltf.animations[e],s=(s.name||(s.name=e.toString()),this.subParser.parseSkeletonAnimation(a.skeleton,s));a.addAnimationClip(s)}}}return i}convertLight(e,t){switch(e.light.type){case"directional":var r=t.addComponent(Gl);t.name=e.light.name,r.intensity=.1*e.light.intensity,r.radius=Number.MAX_SAFE_INTEGER,r.dirFix=-1,this._hasCastShadow||(this._hasCastShadow=!0,r.castShadow=this._hasCastShadow),r.lightColor=e.light.color?new b(e.light.color[0],e.light.color[1],e.light.color[2]):new b(1,1,1,1),r.debug();break;case"point":0<this._testCount&&((r=t.addComponent(Vl)).name=e.light.name,r.intensity=e.light.intensity?8*e.light.intensity*2:1,r.radius=8,r.at=2,r.range=e.light.range||8,r.lightColor=e.light.color?new b(e.light.color[0],e.light.color[1],e.light.color[2]):new b(1,1,1,1)),this._testCount--;break;case"spot":r=t.addComponent(Hl);r.name=e.light.name,r.intensity=5*e.light.intensity,r.radius=1,r.dirFix=-1,r.at=2,r.range=e.light.range||8,r.outerAngle=e.light.spot.outerConeAngle*ri,r.lightColor=e.light.color?new b(e.light.color[0],e.light.color[1],e.light.color[2]):new b(1,1,1,1)}}convertprimitives(a,s){for(let i=0;i<a.primitives.length;i++){var o,n,h,l,u,c,d=a.primitives[i],f=(d.modelName,d.material);null==f.name&&(f.name=qe());let t,r="matkey_"+f.name;if(f&&this.gltf.resources[r])t=this.gltf.resources[r];else{let e=t=new Wr;(this.gltf.resources[r]=e).name=f.name,d.material&&({baseColorTexture:f,baseColorFactor:p,metallicFactor:w,roughnessFactor:m,doubleSided:T,metallicRoughnessTexture:E,normalTexture:P,occlusionTexture:o,emissiveTexture:n,emissiveFactor:h,enableBlend:l,alphaCutoff:c}=d.material,u=e=this.applyMaterialExtensions(d.material,e),"enableBlend"in d.material&&(d.material.enableBlend?u.blendMode=ge.NORMAL:u.blendMode=ge.NONE,d.material.defines)&&-1!=d.material.defines.indexOf("ALPHA_BLEND")&&(u.blendMode=ge.ALPHA,u.transparent=!0),"alphaCutoff"in d.material&&0<c&&(u.alphaCutoff=c,u.blendMode=ge.NORMAL,u.transparent=!0),d.material.transformUV1&&(u.uvTransform_1=d.material.transformUV1),d.material.transformUV2&&(u.uvTransform_2=d.material.transformUV2),u.baseColor=new b(p[0],p[1],p[2],p[3]),u.roughness=m,u.metallic=w,u.doubleSide=T,f&&(u.baseMap=f),P&&(u.normalMap=P),E&&(u.maskMap=E),o&&E!=o&&(u.aoMap=o),n&&(u.emissiveMap=n),h&&(0<h[0]||0<h[1]||0<h[2])&&(u.emissiveMap&&u.emissiveMap==_.res.blackTexture&&(u.emissiveMap=_.res.whiteTexture),c=h[3]||1,u.emissiveColor=new b(h[0],h[1],h[2],c),u.emissiveIntensity=1),_.setting.material.materialDebug)&&u.debug()}var{attribArrays:p,modelName:m}=d;let e;if(!p.indices.data){var g=[],v=p.position.data.length/3/3;for(let e=0;e<v;e++){var x=3*e;g.push(2+x),g.push(0+x),g.push(1+x)}p.indices={data:new Uint8Array(g),normalize:!1,numComponents:1}}if(!p.normal){var y=[],S=p.position.data.length/3;for(let e=0;e<S;e++)y.push(0),y.push(0),y.push(0);p.normal={data:new Float32Array(y),normalize:!1,numComponents:3}}if(p.indices.data&&3<p.indices.data.length){var w=d.meshName(),T=(this.gltf.resources[w]?e=this.gltf.resources[w]:(e=e||this.createGeometryBase(w,p,d),this.gltf.resources[w]=e),new ee);if(T.name=m+i,this.gltf.animations&&null!=p[H.joints0]){e=e||this.createGeometryBase(m,p,d),this.gltf.resources[w]=e;f=this.gltf.nodes[a.skin.skeleton];if(f.dnode&&f.dnode.nodeObj){var C=f.dnode.nodeObj.addComponent($t);if(C){C.skeleton=this.subParser.parseSkeleton(a.skin.skeleton);for(let e=0;e<this.gltf.animations.length;e++){var M=this.gltf.animations[e],M=(M.name||(M.name=e.toString()),this.subParser.parseSkeletonAnimation(C.skeleton,M));C.addAnimationClip(M)}}}else f.dnode.skeleton=a.skin;var P=T.addComponent(Ba);P.castShadow=!0,P.castGI=!0,P.geometry=e,P.material=t,P.skinJointsName=this.parseSkinJoints(a.skin),P.skinInverseBindMatrices=a.skin.inverseBindMatrices}else{e=e||this.createGeometryBase(m,p,d),(this.gltf.resources[w]=e).hasAttribute(H.joints0)&&e.vertexAttributeMap.delete(H.joints0);var E=T.addComponent(Le);E.castShadow=!0,E.castGI=!0,E.geometry=e,E.material=t}a.skin&&a.skin.defines,s.addChild(T)}}}createGeometryBase(e,t,r){var i=new tr,a=(i.name=e,i.morphTargetsRelative=r.morphTargetsRelative,r.targetNames);if(a&&0<a.length){var s=i.morphTargetDictionary={};for(let e=0;e<a.length;e++)s[a[e]]=e}if(i.morphTargetDictionary){var o=t.position.data.length/3,n=new Float32Array(o);for(let e=0;e<o;e++)n[e]=e;t.vIndex={data:n,normalize:!1,numComponents:1}}for(const l in t){var h=t[l];i.setAttribute(l,h.data)}e=i.getAttribute(H.indices);return i.addSubGeometry({indexStart:0,indexCount:e.data.length,vertexStart:0,index:0}),i}applyMaterialExtensions(e,t){return Xl.apply(this.gltf,e,t),Yl.apply(this.gltf,e,t),Wl.apply(this.gltf,e,t),t}parseSkinJoints(e){var t,r=[];for(t of e.joints){var i=this.gltf.nodes[t];r.push(i.name)}return r}}class da{constructor(){s(this,"currentSceneName"),s(this,"gltf"),s(this,"initUrl"),s(this,"_generator"),s(this,"_version"),s(this,"_BASE64_MARKER",";base64,"),s(this,"_cameraParser",null),s(this,"_meshParser",null),s(this,"_materialParser",null),s(this,"_skinParser",null),s(this,"_skeletonParser",null),s(this,"_converter",null)}get version(){return this.version||(this.gltf?this.gltf.asset?(this._version=this.gltf.asset.version,this.gltf.asset.minVersion&&(this._version+="\r minVersion"+this.gltf.asset.minVersion),this.version):this.errorMiss("asset"):(console.warn("glTF not loaded."),null))}async parse(e,t,r){this.gltf=t,this.initUrl=e;var{version:t,generator:e}=this.gltf.asset;return this._generator=e,"2.0"!==t?(console.error("GLTFParser only support glTF 2.0 for now! Received glTF version: "+this.version),!1):(e={nodes:await this.parseScene(r),animations:this.parseAnimations(),name:this.currentSceneName},this.convertToNode(e))}destory(){Ci.unload(this.gltf),this.gltf=null}async parseScene(e){var e=e||this.gltf.scene||0,t=this.gltf.scenes[e];if("u"<typeof t)return this.errorMiss("scene",e);this.currentSceneName=t.name||"GLTF_NO_NAME_SCENE";var r=[],i=t.nodes;for(let e=0;e<i.length;e++){var a=await this.parseNode(i[e]);a&&r.push(a)}return r}async parseNode(e){var t=this.gltf.nodes[e];if(!t)return this.errorMiss("node",e);if(!t.isParsed){var{name:r,matrix:i,translation:a,rotation:s,scale:o}=t,n={name:r,matrix:i,translation:a,rotation:s,scale:o,nodeId:e,camera:null,primitives:null,skin:null,children:null,light:null};if(void 0!==t.camera&&(n.camera=this.parseCamera(t.camera)),void 0!==t.mesh&&(n.primitives=await this.parseMesh(t.mesh)),void 0!==t.extensions&&this.applyNodeExtensions(t,n),void 0!==t.skin&&(r=this.parseSkin(t.skin))&&(n.skin=r),n.children=[],t.children)for(let e=0;e<t.children.length;e++)n.children.push(await this.parseNode(t.children[e]));t.dnode=n,t.isParsed=!0}return t.dnode}errorMiss(e,t){throw new Error(e+t)}parseCamera(e){return this._cameraParser||(this._cameraParser=new Ll(this.gltf)),this._cameraParser.parse(e)}async parseMesh(e){return this._meshParser||(this._meshParser=new Ol(this)),this._meshParser.parse(e)}async parseTexture(e){var t,r,i,a=this.gltf.textures[e];return a&&!a.dtexture&&(a&&null!=a.source?(t=this.gltf.images[a.source]).uri?(i=t.uri,i=Ge.getURLName(i),a.dtexture=this.gltf.resources[i]):t.bufferView?(i=this.parseBufferView(t.bufferView),r=new Ht,i=new Blob([i],{type:t.mimeType}),await r.loadFromBlob(i),a.dtexture=r):a.dtexture=this.gltf.resources[t.name]:a.name&&(i=Ge.getURLName(a.name),a.dtexture=this.gltf.resources[i])),a.dtexture||console.log("miss texture , please check texture!",e,a),a.dtexture}async parseMaterial(e){return this._materialParser||(this._materialParser=new Al(this)),this._materialParser.parse(e)}parseAnimations(){return[]}async parseObject3D(e,t){return this._converter||(this._converter=new jl(this)),this._converter.convertNodeToObject3D(e,t)}parseSkeleton(e){return this._skeletonParser||(this._skeletonParser=new gs(this)),this._skeletonParser.parse(e)}parseSkeletonAnimation(e,t){return this._skeletonParser||(this._skeletonParser=new gs(this)),this._skeletonParser.parseSkeletonAnimation(e,t)}async trivarse(t,r){for(let e=0;e<r.length;e++){var i=await this.parseObject3D(r[e],t);await this.trivarse(i,r[e].children)}}async convertToNode(e){var t=new ee,r=(t.name=e.name,e.nodes);e.animations;return await this.trivarse(t,r),{rootNode:t,textures:[],animations:void 0,cameras:[]}}parseSkin(e){return this._skinParser||(this._skinParser=new Ul(this)),this._skinParser.parse(e)}parseAccessor(i){var a=this.gltf.accessors[i];if(!a)return this.errorMiss("accessor",i);if(!a.isParsed){a.isParsed=!0,a.daccessor=!1;var i=!!a.normalized,s=this.gltf.bufferViews[a.bufferView],o=s&&s.byteStride,n=ps(a.componentType);let t=1;switch(a.type){case"SCALAR":t=1;break;case"VEC2":t=2;break;case"VEC3":t=3;break;case"VEC4":case"MAT2":t=4;break;case"MAT3":t=9;break;case"MAT4":t=16;break;default:t=0}if(0===t)return console.error("glTF has unknown data type in accessor: "+a.type),!1;var h=t*n.BYTES_PER_ELEMENT;let e;if(void 0!==s){if(!(e=this.parseBufferView(a.bufferView)))return a.daccessor}else e=new Uint8Array(h*a.count).buffer;let r=this.getTypedArrayFromArrayBuffer(e,o,a.byteOffset||0,n,t,a.count);if(a.sparse){var{count:s,indices:h,values:o}=a.sparse,l=(r=new n(r),h.byteOffset||0),u=this.gltf.bufferViews[h.bufferView],c=ps(h.componentType),h=this.parseBufferView(h.bufferView),d=this.getTypedArrayFromArrayBuffer(h,u.byteStride,l,c,1,s),h=o.byteOffset||0,u=this.gltf.bufferViews[o.bufferView],l=this.parseBufferView(o.bufferView),f=this.getTypedArrayFromArrayBuffer(l,u.byteStride,h,n,t,s);for(let e=0;e<d.length;e++)r.set(f.slice(e*t,e*t+t),d[e]*t)}a.computeResult={typedArray:r,arrayType:n,numComponents:t},a.daccessor={data:r,numComponents:t,normalize:i}}return a.daccessor}getTypedArrayFromArrayBuffer(e,r,i,a,s,o){let n;var t=s*a.BYTES_PER_ELEMENT;if(r&&t!==r){n=new a(s*o);for(let t=0;t<o;t++){var h=new a(e,i+t*r,s);for(let e=0;e<s;e++)n[t*s+e]=h[e]}}else n=new a(e,i,o*s);return n}parseBufferView(e){var t,r,i,a=this.gltf.bufferViews[e];return a?(!a.isParsed&&(a.isParsed=!0,a.dbufferView=!1,i=this.parseBuffer(a.buffer))&&({byteOffset:t,byteLength:r}=a,i=new Uint8Array(i,t||0,r),a.dbufferView=new Uint8Array(i).buffer),a.dbufferView):this.errorMiss("bufferView",e)}parseBuffer(e){var t=this.gltf.buffers[e];if(!t)return this.errorMiss("buffer",e);if(!t.isParsed)if(t.isParsed=!0,t.dbuffer=!1,"data:"!==t.uri.substring(0,5)){var r=t.uri,i=this.gltf.resources[r];i?i.byteLength===t.byteLength?t.dbuffer=this.gltf.resources[r]:console.error(`load gltf resource "${r}" at buffers[${e} failed, ArrayBuffer.byteLength not equals buffer's byteLength]`):console.error(`load gltf resource "${r}" at buffers[${e}] failed`)}else{var i=t.uri.indexOf(this._BASE64_MARKER)+this._BASE64_MARKER.length,a=window.atob(t.uri.substring(i)),s=new Uint8Array(a.length);for(let e=0;e<a.length;e++)s[e]=a.charCodeAt(e);t.dbuffer=s.buffer}return t.dbuffer}getLight(e){return this.gltf.extensions.KHR_lights_punctual.lights[e]}applyNodeExtensions(e,t){e=e.extensions;e.KHR_lights_punctual&&this.gltf.extensions.KHR_lights_punctual&&(t.light=this.getLight(e.KHR_lights_punctual.light))}}class ql{constructor(){s(this,"magic"),s(this,"version"),s(this,"length")}}class Kl{constructor(){s(this,"chunkLength"),s(this,"chunkType"),s(this,"chunkData")}}class za extends rr{constructor(){super(...arguments),s(this,"_gltf")}async parseBuffer(e){var t=new Uint8Array(e),e=(t.pos=0,this.parseHeader(t));if(1179937895!=e.magic)return console.error("invalid GLB file"),!1;if(2!==e.version)return console.error("GLBParser only support glTF 2.0 for now! Received glTF version: "+e.version),!1;for(var r=[];t.pos<t.length;){var i=this.parseChunk(t);r.push(i)}if(1313821514!=r[0].chunkType)return console.error("invalid GLBChunk"),!1;let a=performance.now(),s="",o=r[0].chunkData;for(let e=0;e<o.length;e+=65535){var n=o.length-e,n=Math.min(n,65535),n=o.subarray(e,e+n);s+=String.fromCharCode(...n)}console.log(performance.now()-a);e=JSON.parse(s);this._gltf=new ca,this._gltf={...this._gltf,...e},this._gltf.resources={};for(let e=0;e<this._gltf.buffers.length;e++){var h=this._gltf.buffers[e];h.isParsed=!0,h.dbuffer=r[e+1].chunkData.buffer}if(this._gltf.images)for(let e=0;e<this._gltf.images.length;e++){var l=this._gltf.images[e],u=(l.name=l.name||"bufferView_"+l.bufferView.toString(),this._gltf.bufferViews[l.bufferView]),c=this._gltf.buffers[u.buffer],c=new Uint8Array(c.dbuffer,u.byteOffset,u.byteLength),u=new Blob([c],{type:l.mimeType}),c=new Ht;await c.loadFromBlob(u),c.name=l.name,this._gltf.resources[l.name]=c}e=await(new da).parse(this.initUrl,this._gltf,this._gltf.scene);return e?(this.data=e.rootNode,e.rootNode):null}async parseJsonAndBuffer(e,t){this._gltf=new ca,this._gltf={...this._gltf,...e},this._gltf.resources={};e=this._gltf.buffers[0];if(e.isParsed=!0,e.dbuffer=t,this._gltf.images)for(let e=0;e<this._gltf.images.length;e++){var r=this._gltf.images[e],i=(r.name=r.name||"bufferView_"+r.bufferView.toString(),this._gltf.bufferViews[r.bufferView]),a=this._gltf.buffers[i.buffer],a=new Uint8Array(a.dbuffer,i.byteOffset,i.byteLength),i=new Blob([a],{type:r.mimeType}),a=new Ht;await a.loadFromBlob(i),a.name=r.name,this._gltf.resources[r.name]=a}e=await(new da).parse(this.initUrl,this._gltf,this._gltf.scene);return e?(this.data=e.rootNode,e.rootNode):null}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}parseHeader(e){var t=e.pos,r=new ql,t=new Uint32Array(e.buffer,t,3);return e.pos+=t.byteLength,r.magic=t[0],r.version=t[1],r.length=t[2],r}parseChunk(e){var t=e.pos,r=new Kl,i=new Uint32Array(e.buffer,t,2),t=e.pos+=i.byteLength,a=(r.chunkLength=i[0],r.chunkType=i[1],r.chunkData=new Uint8Array(e.buffer,t,r.chunkLength),new Uint8Array(r.chunkLength));for(let e=0;e<r.chunkLength;e++)a[e]=r.chunkData[e];return r.chunkData=a,e.pos+=r.chunkLength,r}}s(za,"format","bin");class Fs extends rr{constructor(){super(...arguments),s(this,"textData",""),s(this,"source_vertices"),s(this,"source_normals"),s(this,"source_tangents"),s(this,"source_textureCoords"),s(this,"matLibs"),s(this,"geometrys"),s(this,"activeGeo"),s(this,"facesMaterialsIndex"),s(this,"mtl"),s(this,"mtlUrl")}async parserString(e){return this.source_vertices=[],this.source_normals=[],this.source_tangents=[],this.source_textureCoords=[],this.matLibs={},this.geometrys={},this.textData=e,await Promise.all([this.parserOBJ(),this.loadMTL()]),this.parser_mesh(),"null"}applyVector2(e,t,r){t[e]&&0<t[e].length?(r.push(t[e][0]),r.push(t[e][1])):(r.push(0),r.push(0))}applyVector3(e,t,r){r.push(t[e][0]),r.push(t[e][1]),r.push(t[e][2])}applyVector4(e,t,r){r.push(t[e][0]),r.push(t[e][1]),r.push(t[e][2]),r.push(t[e][3])}async loadMTL(){let e=await(new ot).loadTxt(this.baseUrl+this.mtlUrl),t=e.data,r,i=t.split(`\r
`);for(let t=0;t<i.length;t++){let e=i[t];var a=e.indexOf("#"),a=(e=(e=-1!=a?e.substring(0,a):e).trim()).split(/\s+/);"newmtl"===a[0]?(r={name:a[1]},this.matLibs[a[1]]=r):-1!=a[0].indexOf("map_")?(r[a[0]]=a[1],r.textures||(r.textures=[a[a.length-1]]),r.textures.push(a[a.length-1])):2==a.length?r[a[0]]=Number(a[1]):3==a.length?r[a[0]]=[Number(a[1]),Number(a[2])]:4==a.length&&(r[a[0]]=[Number(a[1]),Number(a[2]),Number(a[3])])}for(const n in this.matLibs){var s=this.matLibs[n];if(s.textures&&0<s.textures.length)for(let e=0;e<s.textures.length;e++){var o=Ge.normalizePath(this.baseUrl+s.textures[e]);await _.res.loadTexture(o)}}return!0}async load_textures(){}parserLine(e){var t=e.indexOf("#"),r=(-1!=t&&(-1!=e.indexOf("# object")&&(i=(r=e.split(/\s+/))[1],a=r[2],this.activeGeo={type:i,name:a[1],source_mat:"",source_faces:[]},this.geometrys[a]=this.activeGeo),e=e.substring(0,t)),(e=e.trim()).split(/\s+/));if("v"===r[0]){var i=[Number(r[1]),Number(r[2]),Number(r[3]),r[4]?1:Number(r[4])];this.source_vertices.push(i)}else if("vt"===r[0]){var a=[Number(r[1]),Number(r[2]),r[3]?1:Number(r[3])];this.source_textureCoords.push(a)}else if("vn"===r[0]){t=[Number(r[1]),Number(r[2]),Number(r[3])];this.source_normals.push(t)}else if("f"===r[0]){for(var s={indices:[],texture:[],normal:[]},o=1;o<r.length;++o){var n=r[o].indexOf("//"),h=r[o].split(/\W+/);0<n?(s.indices.push(h[0]),s.normal.push(h[1])):1===h.length?s.indices.push(h[0]):2===h.length?(s.indices.push(h[0]),s.texture.push(h[1])):3===h.length&&(s.indices.push(h[0]),s.texture.push(h[1]),s.normal.push(h[2]))}this.activeGeo.source_faces.push(s)}else"usemtl"===r[0]?this.activeGeo.source_mat=r[1]:"mtllib"===r[0]&&(this.mtlUrl=r[1])}async parserOBJ(){var t=this.textData.split(`\r
`);for(let e=0;e<t.length;e++){var r=t[e];this.parserLine(r)}return!(this.textData="")}async parser_mesh(){for(const v in this.geometrys){var r=this.geometrys[v];r.vertex_arr=[],r.normal_arr=[],r.uv_arr=[],r.indeice_arr=[];let t=0;for(let e=0;e<r.source_faces.length;e++){var i=r.source_faces[e],a=parseInt(i.indices[0])-1,s=parseInt(i.indices[1])-1,o=parseInt(i.indices[2])-1,n=parseInt(i.normal[0])-1,h=parseInt(i.normal[1])-1,l=parseInt(i.normal[2])-1,u=parseInt(i.texture[0])-1,c=parseInt(i.texture[1])-1,d=parseInt(i.texture[2])-1;this.applyVector3(a,this.source_vertices,r.vertex_arr),this.applyVector3(n,this.source_normals,r.normal_arr),this.applyVector2(u,this.source_textureCoords,r.uv_arr),r.indeice_arr[t]=t++,this.applyVector3(s,this.source_vertices,r.vertex_arr),this.applyVector3(h,this.source_normals,r.normal_arr),this.applyVector2(c,this.source_textureCoords,r.uv_arr),r.indeice_arr[t]=t++,this.applyVector3(o,this.source_vertices,r.vertex_arr),this.applyVector3(l,this.source_normals,r.normal_arr),this.applyVector2(d,this.source_textureCoords,r.uv_arr),r.indeice_arr[t]=t++,3<i.indices.length&&(s=parseInt(i.indices[3])-1,h=parseInt(i.normal[3])-1,c=parseInt(i.texture[3])-1,this.applyVector3(a,this.source_vertices,r.vertex_arr),this.applyVector3(n,this.source_normals,r.normal_arr),this.applyVector2(u,this.source_textureCoords,r.uv_arr),r.indeice_arr[t]=t++,this.applyVector3(o,this.source_vertices,r.vertex_arr),this.applyVector3(l,this.source_normals,r.normal_arr),this.applyVector2(d,this.source_textureCoords,r.uv_arr),r.indeice_arr[t]=t++,this.applyVector3(s,this.source_vertices,r.vertex_arr),this.applyVector3(h,this.source_normals,r.normal_arr),this.applyVector2(c,this.source_textureCoords,r.uv_arr),r.indeice_arr[t]=t++)}var e=new ee;for(const x in this.geometrys){var f=this.geometrys[x],p=new tr,m=(p.setIndices(new Uint32Array(f.indeice_arr)),p.setAttribute(H.position,new Float32Array(f.vertex_arr)),p.setAttribute(H.normal,new Float32Array(f.normal_arr)),p.setAttribute(H.uv,new Float32Array(f.uv_arr)),p.setAttribute(H.TEXCOORD_1,new Float32Array(f.uv_arr)),p.addSubGeometry({indexStart:0,indexCount:f.indeice_arr.length,vertexStart:0,index:0}),new Wr),f=this.matLibs[f.source_mat],f=(m.baseMap=_.res.getTexture(Ge.normalizePath(this.baseUrl+f.map_Kd)),new ee),g=f.addComponent(Le);g.geometry=p,g.material=m,e.addChild(f)}this.data=e}}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(Fs,"format","text");let Zl=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        var srcId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x * 2u), i32(GlobalInvocationID.y * 2u));
        textureStore(outputTexture, dstId, textureLoad(inputTexture, srcId, 0));
    }
`,Ql=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    fn repeat_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = max + id;
        }
        if (id >= max) {
            ret = id - max;
        }
        return ret;
    }

    fn clamp_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = 0;
        }
        if (id >= max) {
            ret = max - 1;
        }
        return ret;
    }

    fn blur(idx: u32) -> vec4 < f32 > {
        var id: vec2<i32>;
        id.y = i32(idx) / size.srcWidth;
        id.x = i32(idx) - i32(id.y) * size.srcWidth;
        var _BlurSpread: i32 = 1;
        var result = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        let g: array < f32, 3u > = array<f32, 3u > (0.4026, 0.2442, 0.0545);
        var uv: vec2<i32>;
        for(var h: i32 = 0; h< 5; h = h + 1) {
        let offsetU: i32 = (h - 2) * _BlurSpread;
        uv.x = id.x + offsetU;
        uv.x = clamp_i32(uv.x, size.srcWidth);
        for (var v: i32 = 0; v < 5; v = v + 1) {
            let offsetV: i32 = (v - 2) * _BlurSpread;
            uv.y = id.y + offsetV;
            uv.y = clamp(uv.y, 0, size.srcHeight);
            let weightU: i32 = abs(h - 2);
            let weightV: i32 = abs(v - 2);
            let resultWeight: f32 = g[weightU] * g[weightV];
            var colorf32: vec4<f32> = textureLoad(inputTexture, uv, 0);
            let sampleColor: vec4<f32> = vec4<f32>(colorf32 * resultWeight);
            result = result + sampleColor;
        }
    }

    return result;
    }

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        let srcIdx = i32(uv.y) * size.srcWidth + i32(uv.x);
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        textureStore(outputTexture, dstId, blur(u32(srcIdx)));
    }
`;class Jl{static blurImageFromTexture(e,t,r,i){var a=E.device,i=i?Ql:Zl,i=a.createComputePipeline({layout:"auto",compute:{module:a.createShaderModule({code:i}),entryPoint:"main"}}),s=a.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),o=(a.queue.writeBuffer(s,0,new Uint32Array([e.width,e.height,t,r])),a.createTexture({size:[t,r,1],mipLevelCount:1,format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,label:"blurImageFromTexture"})),e=[{binding:0,resource:{buffer:s,size:16}},{binding:1,resource:e.gpuTexture.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})},{binding:2,resource:o.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})}],a=a.createBindGroup({layout:i.getBindGroupLayout(0),entries:e}),e=C.beginCommandEncoder(),n=e.beginComputePass();return n.setPipeline(i),n.setBindGroup(0,a),n.dispatchWorkgroups(Math.floor(t/8),Math.floor(r/8)),n.end(),C.endCommandEncoder(e),s.destroy(),o}}class Na extends Ke{constructor(){super(4,4),s(this,"width",4),s(this,"height",4),s(this,"depthOrArrayLayers",6),s(this,"visibility",GPUShaderStage.FRAGMENT),s(this,"textureBindingLayout",{viewDimension:"cube",multisampled:!1}),s(this,"samplerBindingLayout",{type:"filtering"}),this.addressModeU=_t.clamp_to_edge,this.addressModeV=_t.clamp_to_edge,this.addressModeW=_t.clamp_to_edge,this.magFilter=this.minFilter="linear",this.mipmapFilter="linear",this.visibility=GPUShaderStage.FRAGMENT}createTextureDescriptor(e,t,r,i,a=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT,s=1){this.width=e,this.height=t,this.format=i,this.usage=a,this.textureDescriptor={size:{width:e,height:t,depthOrArrayLayers:6},mipLevelCount:r,format:i,usage:a,dimension:"2d"},this.viewDescriptor=1<s?{dimension:"cube-array"}:{dimension:this.textureBindingLayout.viewDimension}}}const ja=class{static createFace(e,t,r,i){var a=E.device,s=(null==this.pipeline&&(this.pipeline=a.createComputePipeline({layout:"auto",compute:{module:a.createShaderModule({code:ja.createCube}),entryPoint:"main"}})),this.pipeline),e=(this.configBuffer||(this.configBuffer=a.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.configBuffer,0,new Uint32Array([e,0,0,0])),this.blurSettingBuffer||(this.blurSettingBuffer=a.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([0,0,0,0])),[{binding:0,resource:{buffer:this.configBuffer,size:16}},{binding:1,resource:r.getGPUView()},{binding:2,resource:i.getGPUView()}]),r=a.createBindGroup({layout:s.getBindGroupLayout(0),entries:e}),i=C.beginCommandEncoder(),a=i.beginComputePass();a.setPipeline(s),a.setBindGroup(0,r),a.dispatchWorkgroups(t/8,t/8),a.end(),C.endCommandEncoder(i)}};let Xt=ja;s(Xt,"createCube",`

struct SettingUniform {
  faceIndex : i32,
  srcHeight : i32,
  dstWidth : i32,
  dstHeight : i32
};

@group(0) @binding(0) var<uniform> settingUniform : SettingUniform;
@group(0) @binding(1) var inputTex : texture_2d<f32>;
@group(0) @binding(2) var outTex : texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
  let coord = vec2<i32>(GlobalInvocationID.xy);
  
  let outTexSize = textureDimensions(outTex).xy;
  let outTexel = 1.0 / vec2<f32>(outTexSize - 1);
  
  let uv_0 = vec2<f32>(coord) * outTexel;
  var oc = samplePixel(settingUniform.faceIndex, uv_0);
  textureStore(outTex, coord, oc);
}

fn samplePixel(face:i32, uv01:vec2<f32>) -> vec4<f32> {
    let rectangle_v2_f32 = round(vec2<f32>(0.25, 0.33333) * vec2<f32>(textureDimensions(inputTex).xy));
    let rectangle = vec2<i32>(rectangle_v2_f32);
    
    var offsetIndex = vec2<i32>(0);
    if(face == 0){
        offsetIndex.x = 2;
        offsetIndex.y = 1;
    }else if(face == 1){
        offsetIndex.x = 0;
        offsetIndex.y = 1;
    }else if(face == 2){
        offsetIndex.x = 1;
        offsetIndex.y = 0;
    }else if(face == 3){
        offsetIndex.x = 1;
        offsetIndex.y = 2;
    }else if(face == 4){
        offsetIndex.x = 1;
        offsetIndex.y = 1;
    }else if(face == 5){
        offsetIndex.x = 3;
        offsetIndex.y = 1;
    }
    
    let coordOffset = rectangle * offsetIndex;
    let coordIndex = vec2<i32>(vec2<f32>(rectangle - 1) * uv01);
    var oc = textureLoad(inputTex, coordOffset + coordIndex, 0);
    return oc;
}
`),s(Xt,"configBuffer",null),s(Xt,"blurSettingBuffer",null),s(Xt,"pipeline");class xs extends Na{constructor(){super(),s(this,"_images"),s(this,"_url"),this.useMipmap=!0}generateImages(t){var e=E.device;this.width=this.height=32,"width"in t[0]&&(this.width=this.height=t[0].width);let r=Math.min(this.width,this.height);for(this.mipmapCount=1;16<r;)r/=2,this.mipmapCount++;this.textureBindingLayout.viewDimension="cube",this.samplerBindingLayout.type="filtering",this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format),this.textureDescriptor.size={width:this.width,height:this.height,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuTexture=e.createTexture(this.textureDescriptor);let i=[],a=void i,s=this.width,o=this.height;if(t[0]instanceof Ke){for(let e=0;e<6;e++){var n=t[e];i[e]=n.getGPUTexture()}this.uploadMipmapGPUTexture(0,this.width,this.width,i)}else{this.uploadBaseImages(this.width,t);for(let e=0;e<6;e++){var h=new Ht(!1);h.format=this.format,h.source=t[e],i[e]=h.getGPUTexture()}}for(let e=1;e<this.mipmapCount;e++){a=i,i=[];var l={width:s,height:o,gpuTexture:null};s/=2,o/=2;for(let e=0;e<6;e++)l.gpuTexture=a[e],i[e]=Jl.blurImageFromTexture(l,s,o,!1);this.uploadMipmapGPUTexture(e,s,o,i)}this.gpuSampler=e.createSampler(this)}uploadBaseImages(t,r){var i=E.device,e=C.beginCommandEncoder();for(let e=0;e<6;e++)i.queue.copyExternalImageToTexture({source:r[e]},{texture:this.gpuTexture,mipLevel:0,origin:{x:0,y:0,z:e}},{width:t,height:t,depthOrArrayLayers:1});C.endCommandEncoder(e)}uploadMipmapGPUTexture(t,r,i,a){var s=C.beginCommandEncoder();for(let e=0;e<6;e++)s.copyTextureToTexture({texture:a[e],mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.gpuTexture,mipLevel:t,origin:{x:0,y:0,z:e}},{width:r,height:i,depthOrArrayLayers:1});C.endCommandEncoder(s)}get images(){return this._images}set images(e){if(this._images=e,this._images[0]instanceof HTMLImageElement){let r=[],i=6,a=this;for(let e=0;e<6;e++)!function(e,t){t.decode().then(async()=>{r[e]=await createImageBitmap(t),0==--i&&a.generateImages(r)})}(e,this._images[e])}else(this._images instanceof HTMLCanvasElement||this._images instanceof ImageBitmap)&&this.generateImages(this._images)}async load(t){this._url=t;let r=6,i=[],a=(this.format=z.rgba8unorm,this);for(let e=0;e<6;e++){{s=void 0;o=void 0;n=void 0;var s=e;var o=t[e];var n=document.createElement("img");if(n.src=o,n.setAttribute("crossOrigin",""),await n.decode(),i[s]=await createImageBitmap(n),0==--r)a.generateImages(i)}await 0}return!0}async loadStd(e){this._url=e,this.format=z.rgba8unorm;var t=document.createElement("img"),r=(t.src=e,t.setAttribute("crossOrigin",""),await t.decode(),new Ht(!1)),i=(r.name=Ge.getURLName(e),r.format="rgba8unorm",r.source=await createImageBitmap(t),Math.round(Math.log2(r.width/4))),i=Math.pow(2,i),a=(this.width=this.height=i,[]);for(let e=0;e<6;e++){var s=new ne(i,i,this.format,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING);s.name="face "+e,a.push(s),Xt.createFace(e,this.width,r,s)}return this.generateImages(a),!0}}var $l=(e=>(e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Bottom=2]="Bottom",e[e.Top=3]="Top",e[e.Back=4]="Back",e[e.Front=5]="Front",e))($l||{});class ks{static getRotationToFace(e){var t=j.identity().clone(),r=new p,i=(new N).identity(),a=new p;switch(e){case 3:r.set(0,-1,0),a.set(0,0,-1);break;case 2:r.set(0,1,0),a.set(0,0,1);break;case 1:r.set(1,0,0),a.set(0,1,0);break;case 0:r.set(-1,0,0),a.set(0,1,0);break;case 4:r.set(0,0,-1),a.set(0,1,0);break;case 5:return j.identity()}return i.lookAt(new p,r,a),t.setFromRotationMatrix(i),t}}let eh=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
  @group(0) @binding(2) var inputTexSampler : sampler;
  @group(0) @binding(3) var inputTex : texture_2d<f32>;

  @group(1) @binding(0) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;

  fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
      var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
      //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
      uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
      uv = uv + vec2<f32>(0.5);
      uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
      return uv;
  }


  fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
      let x:f32 = position.x;
      let y:f32 = position.y;
      let z:f32 = position.z;

      let qx:f32 = q.x;
      let qy:f32 = q.y;
      let qz:f32 = q.z;
      let qw:f32 = q.w;

      let ix:f32 = qw * x + qy * z - qz * y;
      let iy:f32 = qw * y + qz * x - qx * z;
      let iz:f32 = qw * z + qx * y - qy * x;
      let iw:f32 = -qx * x - qy * y - qz * z;

      var ret: vec3<f32>;
      ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

      return ret;
  }

  fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
      var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
      var halfSize:f32 = f32(size.dstWidth / 2);
      var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
      worldDirection = normalize(worldDirection);
      worldDirection = applyQuaternion(worldDirection, quaternion);
      return worldDirection;
  }

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let coord = vec2<i32>(GlobalInvocationID.xy);
    let quaternion = faceRotation[GlobalInvocationID.z];
    var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
    let uv_f32:vec2<f32> = SampleSphericalMap(worldDirection);
    let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
    textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
  }
`,th=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage, read> tex_in: array<vec4<f32>>;
  @group(0) @binding(2) var outputBuffer : texture_storage_2d<rgba16float, write>;

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let fragCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
    var oc:vec4<f32> = tex_in[fragCoord.y * size.srcWidth + fragCoord.x] / 256.0;
    var e = pow(2.0, oc.w * 255.0 - 128.0);
    oc = oc * e;
    oc = scaleByThreshold(oc, 40.0);
    textureStore(outputBuffer, fragCoord , vec4<f32>(oc.xyz, 1.0) );
  }

  fn scaleByThreshold(color:vec4<f32>, threshold:f32) -> vec4<f32>{
    var oc = color;
    let brightness = length(vec3<f32>(oc.xyz));
    var scale = brightness / threshold;
    if(scale > 1.0){
        scale = 1.0 / pow(scale, 0.7);
        oc = oc * scale;
    }
    oc.a = 1.0;
    return oc;
  }
`;const Ne=class{static convertRGBE2RGBA(e,t){var r=E.device,i=r.createComputePipeline({layout:"auto",compute:{module:r.createShaderModule({code:th}),entryPoint:"main"}}),a=r.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),s=(r.queue.writeBuffer(a,0,new Uint32Array([e.width,e.height,e.width,e.height])),r.createBuffer({size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),s=(r.queue.writeBuffer(s,0,t),[{binding:0,resource:{buffer:a,size:16}},{binding:1,resource:{buffer:s,size:t.byteLength}},{binding:2,resource:e.getGPUView()}]),t=r.createBindGroup({layout:i.getBindGroupLayout(0),entries:s}),r=C.beginCommandEncoder(),s=r.beginComputePass();s.setPipeline(i),s.setBindGroup(0,t),s.dispatchWorkgroups(Math.floor(e.width/8),Math.floor(e.height/8)),s.end(),C.endCommandEncoder(r),a.destroy()}static makeTextureCube(e,t,r){var i=E.device,a=(Ne.makeFaceTexturePipeline||(Ne.makeFaceTexturePipeline=i.createComputePipeline({layout:"auto",compute:{module:i.createShaderModule({code:eh}),entryPoint:"main"}})),Ne.makeFaceTexturePipeline);Ne.configBuffer||(Ne.configBuffer=i.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),i.queue.writeBuffer(Ne.configBuffer,0,new Uint32Array([e.width,e.height,t,t]));if(!Ne.quaternionBuffer){Ne.quaternionBuffer=i.createBuffer({size:576,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});var s=new Float32Array(24);for(let e=0;e<6;e++){var o=ks.getRotationToFace(e);s[4*e+0]=o.x,s[4*e+1]=o.y,s[4*e+2]=o.z,s[4*e+3]=o.w}i.queue.writeBuffer(Ne.quaternionBuffer,0,s)}var e=[{binding:0,resource:{buffer:Ne.configBuffer,size:16}},{binding:1,resource:{buffer:Ne.quaternionBuffer,size:96}},{binding:2,resource:e.gpuSampler},{binding:3,resource:e.getGPUView()}],r=[{binding:0,resource:r}],e=i.createBindGroup({layout:a.getBindGroupLayout(0),entries:e}),i=i.createBindGroup({layout:a.getBindGroupLayout(1),entries:r}),r=C.beginCommandEncoder(),n=r.beginComputePass();n.setPipeline(a),n.setBindGroup(0,e),n.setBindGroup(1,i),n.dispatchWorkgroups(t/8,t/8,6),n.end(),C.endCommandEncoder(r)}};let wt=Ne,rh=(s(wt,"makeFaceTexturePipeline"),s(wt,"configBuffer"),s(wt,"quaternionBuffer"),`
    struct ImageSize {
        srcWidth : i32,
        srcHeight : i32,
        dstWidth : i32,
        dstHeight : i32
    };
    
    @group(0) @binding(0) var<uniform> size : ImageSize;
    @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
    @group(0) @binding(2) var inputTexSampler : sampler;
    @group(0) @binding(3) var inputTex : texture_2d<f32>;
    
    @group(1) @binding(0) var<uniform> blurSetting : vec4<f32>;
    @group(1) @binding(1) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;
    
    var<private> PI: f32 = 3.14159265359;
    
    fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
        let x:f32 = position.x;
        let y:f32 = position.y;
        let z:f32 = position.z;
    
        let qx:f32 = q.x;
        let qy:f32 = q.y;
        let qz:f32 = q.z;
        let qw:f32 = q.w;
    
        let ix:f32 = qw * x + qy * z - qz * y;
        let iy:f32 = qw * y + qz * x - qx * z;
        let iz:f32 = qw * z + qx * y - qy * x;
        let iw:f32 = -qx * x - qy * y - qz * z;
    
        var ret: vec3<f32>;
        ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    
        return ret;
    }
    
    fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
        var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
        var halfSize:f32 = f32(size.dstWidth / 2);
        var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
        worldDirection = normalize(worldDirection);
        worldDirection = applyQuaternion(worldDirection, quaternion);
        return worldDirection;
    }
    
    fn VanDerCorpus(n0:u32, base0:u32) -> f32
    {
        var n = n0;
        var base = base0;
        var invBase:f32 = 1.0 / f32(base);
        var denom:f32   = 1.0;
        var result:f32  = 0.0;
    
        for(var i:u32 = 0u; i < 32u; i = i + 1u)
        {
            if(n > 0u)
            {
                denom   = f32(n) % 2.0;
                result = result + denom * invBase;
                invBase = invBase / 2.0;
                n       = u32(f32(n) / 2.0);
            }
        }
    
        return result;
    }
    
    fn HammersleyNoBitOps(i:u32, N:u32) -> vec2<f32>
    {
        return vec2(f32(i)/f32(N), VanDerCorpus(i, 2u));
    }
    
    fn hammersley( i : u32 ,  N : u32 ) -> vec2<f32>
    {
        // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
        var bits = (i << 16u) | (i >> 16u);
        bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
        bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
        bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
        bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
        var rdi = f32(bits) * 2.3283064365386963e-10;
        return vec2<f32>(f32(i) /f32(N), rdi);
    }
    
    fn ImportanceSampleGGX( Xi:vec2<f32>, N:vec3<f32>, roughness:f32) ->vec3<f32>
    {
        var a = roughness*roughness;
    
        var phi = 2.0 * PI * Xi.x;
        var cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
        var sinTheta = sqrt(1.0 - cosTheta*cosTheta);
    
        // from spherical coordinates to cartesian coordinates
        var H:vec3<f32>;
        H.x = cos(phi) * sinTheta;
        H.y = sin(phi) * sinTheta;
        H.z = cosTheta;
    
        // from tangent-space vector to world-space sample vector
        var up:vec3<f32>;
        if(abs(N.z) < 0.999)
        {
            up = vec3<f32>(0.0, 0.0, 1.0);
        }
        else
        {
            up = vec3<f32>(1.0, 0.0, 0.0);
        }
        var tangent:vec3<f32>  = normalize(cross(up, N));
        var bitangent:vec3<f32> = cross(N, tangent);
        var sampleVec:vec3<f32> = tangent * H.x + bitangent * H.y + N * H.z;
        return normalize(sampleVec);
    }
    
    fn multiSample(localPos:vec3<f32>, roughness:f32) -> vec4<f32>
    {
        var N: vec3<f32> = normalize(localPos);
        var R: vec3<f32> = N;
        var V: vec3<f32> = R;
    
        let SAMPLE_COUNT:u32 = 1024u;
        var totalWeight:f32 = 0.0;
        var prefilteredColor:vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
        for(var i:u32 = 0u; i < SAMPLE_COUNT; i = i + 1u)
        {
            var Xi:vec2<f32> = hammersley(i, SAMPLE_COUNT);
            var H :vec3<f32> = ImportanceSampleGGX(Xi, N, roughness);
            var L :vec3<f32> = normalize(2.0 * dot(V, H) * H - V);
    
            var NdotL:f32 = max(dot(N, L), 0.0);
            if(NdotL > 0.0)
            {
                var att = 1.0 ;//( f32(SAMPLE_COUNT - i) / f32(SAMPLE_COUNT)) ;
    
                prefilteredColor = prefilteredColor + sampleColor(L).rgb * NdotL;
                prefilteredColor = prefilteredColor * att ;
                totalWeight      = totalWeight + NdotL;
            }
        }
        prefilteredColor = prefilteredColor / totalWeight;
    
        return vec4<f32>(prefilteredColor, 1.0);
    }
    
    fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
        var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
        //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
        uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
        uv = uv + vec2<f32>(0.5);
        uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
        return uv;
    }
    
    fn sampleColor(d:vec3<f32>) -> vec4<f32>
    {
        let uv_f32:vec2<f32> = SampleSphericalMap(d);
        let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
        //let dir = vec3<f32>(-d.x, -d.y, d.z);
        //var oc:vec4<f32> = textureSampleLevel(cubeMap, cubeMapSampler, dir, 0.0);
        return oc;
    }
    
    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        let coord = vec2<i32>(GlobalInvocationID.xy);
        let quaternion = faceRotation[GlobalInvocationID.z];
        var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
        var oc:vec4<f32> = multiSample(worldDirection, blurSetting.x);
        textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
    }

`);class sr{static importantSample(e,t,r,i){var a=E.device,s=(null==this.pipeline&&(this.pipeline=a.createComputePipeline({layout:"auto",compute:{module:a.createShaderModule({code:rh}),entryPoint:"main"}})),this.pipeline);this.configBuffer||(this.configBuffer=a.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.configBuffer,0,new Uint32Array([e.width,e.height,t,t]));if(!this.quaternionBuffer){this.quaternionBuffer=a.createBuffer({size:576,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});var o=new Float32Array(24);for(let e=0;e<6;e++){var n=ks.getRotationToFace(e);o[4*e+0]=n.x,o[4*e+1]=n.y,o[4*e+2]=n.z,o[4*e+3]=n.w}a.queue.writeBuffer(this.quaternionBuffer,0,o)}this.blurSettingBuffer||(this.blurSettingBuffer=a.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([r,0,0,0]));r=e.erpTexture,e=[{binding:0,resource:{buffer:this.configBuffer,size:16}},{binding:1,resource:{buffer:this.quaternionBuffer,size:96}},{binding:2,resource:r.gpuSampler},{binding:3,resource:r.getGPUView()}],r=[{binding:0,resource:{buffer:this.blurSettingBuffer,size:16}},{binding:1,resource:i}],i=a.createBindGroup({layout:s.getBindGroupLayout(0),entries:e}),e=a.createBindGroup({layout:s.getBindGroupLayout(1),entries:r}),a=C.beginCommandEncoder(),r=a.beginComputePass();r.setPipeline(s),r.setBindGroup(0,i),r.setBindGroup(1,e),r.dispatchWorkgroups(t/8,t/8,6),r.end(),C.endCommandEncoder(a)}}s(sr,"configBuffer",null),s(sr,"quaternionBuffer",null),s(sr,"blurSettingBuffer",null),s(sr,"pipeline");class Gs extends Ke{constructor(){super(32,32,null)}create(e=32,t=32,r=null,i=!0){this.width=e,this.height=t;var a=E.device,s=4*e*2,i=(this.format=z.rgba16float,this.useMipmap=i,this.updateTextureDescription(),this.updateGPUTexture(),a.createBuffer({size:r.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),r=(a.queue.writeBuffer(i,0,r),C.beginCommandEncoder());return r.copyBufferToTexture({buffer:i,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),C.endCommandEncoder(r),this.useMipmap||(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float"),this.gpuSampler=a.createSampler(this),this}async load(e,t){return(await(new ot).load(e,Fa,t)).getHDRTexture()}}const Vs=new Float32Array(1),ih=new Int32Array(Vs.buffer);let Fr=function(e){Vs[0]=e;e=ih[0];let t=e>>16&32768,r=e>>12&2047;var i=e>>23&255;return i<103||(142<i?t=t|31744|((255==i?1:0)&&8388607&e):i<114?(r|=2048,t|=(r>>114-i)+(r>>113-i&1)):t=(t|=i-112<<10|r>>1)+(1&r)),t};var ah=(e=>(e[e.RGBE_RETURN_FAILURE=-1]="RGBE_RETURN_FAILURE",e[e.rgbe_read_error=1]="rgbe_read_error",e[e.rgbe_write_error=2]="rgbe_write_error",e[e.rgbe_format_error=3]="rgbe_format_error",e[e.rgbe_memory_error=4]="rgbe_memory_error",e))(ah||{});class _s{constructor(){s(this,"valid"),s(this,"string"),s(this,"comments"),s(this,"programtype"),s(this,"format"),s(this,"gamma"),s(this,"exposure"),s(this,"width"),s(this,"height")}}class Fa extends rr{constructor(){super(...arguments),s(this,"_rgbeArray"),s(this,"_width"),s(this,"_height"),s(this,"_RGBE_RETURN_FAILURE",-1),s(this,"_parserType",z.rgba8uint)}parseBuffer(e){var e=new Uint8Array(e),t=(e.pos=0,this.paserHeader(e));if(t instanceof _s){var r=this._width=t.width,t=this._height=t.height,e=this.parserPixel(e.subarray(e.pos),r,t);if(e instanceof Uint8Array)return this._rgbeArray=e,this._parserType,void(this.data=void 0)}return null}verification(){if(this.data&&this.data instanceof Ke)return!0;if(this._rgbeArray)return!0;throw new Error("Method not implemented.")}getTexture(){return this.data}getCubeTexture(){var e=this._width/4;return(new ei).createFromHDRData(e,{width:this._width,height:this._height,array:this._rgbeArray})}getHDRTexture(){return(new Gs).create(this._width,this._height,this._rgbeArray)}parseError(e,t){switch(e){case 1:console.error("Read Error: "+(t||""));break;case 2:console.error("Write Error: "+(t||""));break;case 3:console.error("Bad File Format: "+(t||""));break;default:console.error("Error: "+(t||""))}return-1}parserBlock(e,t,r){t=t||1024;let i=e.pos,a=-1,s=0,o="",n=String.fromCharCode.apply(null,new Uint16Array(e.subarray(i,i+128)));for(;(a=n.indexOf(`
`))<0&&s<t&&i<e.byteLength;)o+=n,s+=n.length,i+=128,n+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(i,i+128)));return-1<a&&(!1!==r&&(e.pos+=s+a+1),o+n.slice(0,a))}paserHeader(e){var t=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,r=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*FORMAT=(\S+)\s*$/,a=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,s=new _s;let o,n;if(e.pos>=e.byteLength||!(o=this.parserBlock(e)))return this.parseError(1,"no header found");if(!(n=o.match(/^#\?(\S+)/)))return this.parseError(3,"bad initial token");for(s.valid|=1,s.programtype=n[1],s.string+=o+`
`;!1!==(o=this.parserBlock(e));)if(s.string+=o+`
`,"#"===o.charAt(0))s.comments+=o+`
`;else if((n=o.match(t))&&(s.gamma=Math.floor(10*parseFloat(n[1]))/10),(n=o.match(r))&&(s.exposure=Math.floor(10*parseFloat(n[1]))/10),(n=o.match(i))&&(s.valid|=2,s.format=n[1]),(n=o.match(a))&&(s.valid|=4,s.height=parseInt(n[1],10),s.width=parseInt(n[2],10)),2&s.valid&&4&s.valid)break;return 2&s.valid?4&s.valid?s:(this.parseError(3,"missing image size specifier"),null):(this.parseError(3,"missing format specifier"),null)}parserPixel(e,t,r){var i=t;if(i<8||32767<i||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(i!==(e[2]<<8|e[3]))return this.parseError(3,"wrong scanline width");var a=new Uint8Array(4*t*r);if(!a.length)return this.parseError(4,"unable to allocate buffer space");let s=0,o=0;var n=4*i,h=new Uint8Array(4),l=new Uint8Array(n);let u=r;for(;0<u&&o<e.byteLength;){if(o+4>e.byteLength)return this.parseError(1,"");if(h[0]=e[o++],h[1]=e[o++],h[2]=e[o++],h[3]=e[o++],2!=h[0]||2!=h[1]||(h[2]<<8|h[3])!=i)return this.parseError(3,"bad rgbe scanline format");let t=0,r;for(;t<n&&o<e.byteLength;){var c=128<(r=e[o++]);if(c&&(r-=128),0===r||t+r>n)return this.parseError(3,"bad scanline data");if(c){var d=e[o++];for(let e=0;e<r;e++)l[t++]=d}else l.set(e.subarray(o,o+r),t),t+=r,o+=r}var f=i;for(let e=0;e<f;e++){var p=0;a[s]=l[e+0],p+=i,a[s+1]=l[e+p],p+=i,a[s+2]=l[e+p],p+=i,a[s+3]=l[e+p],s+=4}u--}return a}rbgeToFloat(e,t,r,i){var a=e[t+3],a=Math.pow(2,a-128)/255;r[i+0]=e[t+0]*a,r[i+1]=e[t+1]*a,r[i+2]=e[t+2]*a,r[i+3]=1}rbgeToHalfFloat(e,t,r,i){var a=e[t+3],a=Math.pow(2,a-128)/255;r[i+0]=Fr(e[t+0]*a),r[i+1]=Fr(e[t+1]*a),r[i+2]=Fr(e[t+2]*a),r[i+3]=Fr(1)}}s(Fa,"format","bin");class ei extends Na{constructor(){super(),s(this,"faceTextureRef"),s(this,"_url"),this.faceTextureRef={},this.useMipmap=!0,this.format=z.rgba16float}createFromHDRData(e,t){var r=new ne(t.width,t.height,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),t=new Float32Array(t.array);return wt.convertRGBE2RGBA(r,t),this.createFromTexture(e,r),this}createFromTexture(e,t){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let r=this.width;for(this.mipmapCount=1;16<r;)r/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=E.device.createSampler(this),this.uploadErpTexture(t),this}uploadErpTexture(e){var t=this.getGpuSource(0);return wt.makeTextureCube(e,this.width,t.v),this.generateMipmap(e),this}uploadTexture(e,t){e=this.getGpuSource(e);return wt.makeTextureCube(t,this.width,e.v),this}getGpuSource(e){let t=this.faceTextureRef[e];return t||(t={t:this.getGPUTexture(),v:this.getGPUTexture().createView({format:this.format,dimension:"2d-array",baseMipLevel:e,mipLevelCount:1,arrayLayerCount:6})},this.faceTextureRef[e]=t),t}generateMipmap(e){let t=1;for(;t<this.mipmapCount;)this.generateMipmapAtLevel(t,e),t++}generateMipmapAtLevel(e,t,r=3){var i=this.width/Math.pow(2,e),t={width:i,height:i,erpTexture:t},a=(e+1)/this.mipmapCount,a=Math.pow(a,r),r=this.getGpuSource(e);sr.importantSample(t,i,a,r.v)}async load(e,t){return this._url=e,(await(new ot).load(e,Fa,t)).getCubeTexture()}}function sh(e){return(new TextDecoder).decode(e)}class ka{constructor(e,t,r,i){s(this,"buffer"),s(this,"binOffset"),s(this,"binLength"),s(this,"header"),this.buffer=e,this.binOffset=t+r,this.binLength=i;let a=null;a=0!==r?(i=new Uint8Array(e,t,r),JSON.parse(sh(i))):{},this.header=a}getKeys(){return Object.keys(this.header)}getData(r,i,a=null,s=null){var o=this.header;if(!(r in o))return null;o=o[r];if(o instanceof Object){if(Array.isArray(o))return o;{var{buffer:n,binOffset:h,binLength:l}=this,u=o.byteOffset||0,c=o.type||s,a=o.componentType||a;if("type"in o&&s&&o.type!==s)throw new Error("FeatureTable: Specified type does not match expected type.");let e;switch(c){case"SCALAR":e=1;break;case"VEC2":e=2;break;case"VEC3":e=3;break;case"VEC4":e=4;break;default:throw new Error(`FeatureTable : Feature type not provided for "${r}".`)}let t;var d=h+u,f=i*e;switch(a){case"BYTE":t=new Int8Array(n,d,f);break;case"UNSIGNED_BYTE":t=new Uint8Array(n,d,f);break;case"SHORT":t=new Int16Array(n,d,f);break;case"UNSIGNED_SHORT":t=new Uint16Array(n,d,f);break;case"INT":t=new Int32Array(n,d,f);break;case"UNSIGNED_INT":t=new Uint32Array(n,d,f);break;case"FLOAT":t=new Float32Array(n,d,f);break;case"DOUBLE":t=new Float64Array(n,d,f);break;default:throw new Error(`FeatureTable : Feature component type not provided for "${r}".`)}if(d+f*t.BYTES_PER_ELEMENT>h+l)throw new Error("FeatureTable: Feature data read outside binary body length.");return t}}return o}}class Hs extends ka{constructor(e,t,r,i,a){super(e,r,i,a),s(this,"batchSize"),this.batchSize=t}getData(e,t=null,r=null){return super.getData(e,this.batchSize,t,r)}}function Xs(e){let t;if(t=e instanceof DataView?e:new DataView(e),"{"===String.fromCharCode(t.getUint8(0)))return null;let r="";for(let e=0;e<4;e++)r+=String.fromCharCode(t.getUint8(e));return r}class nh{async parse(e){var t=new DataView(e),r=Xs(t),r=(console.assert("b3dm"===r),t.getUint32(4,!0)),i=(console.assert(1===r),t.getUint32(8,!0)),a=(console.assert(i===e.byteLength),t.getUint32(12,!0)),s=t.getUint32(16,!0),o=t.getUint32(20,!0),t=t.getUint32(24,!0),n=e.slice(28,28+a+s),n=new ka(n,0,a,s),a=28+a+s,s=e.slice(a,a+o+t),s=new Hs(s,n.getData("BATCH_LENGTH"),0,o,t),a=a+o+t;return{version:r,featureTable:n,batchTable:s,glbBytes:new Uint8Array(e,a,i-a)}}}const cr=class extends nh{constructor(){super(),s(this,"adjustmentTransform"),s(this,"gltfBuffer"),this.adjustmentTransform=(new N).identity(),cr.tempMatrix||(cr.tempMatrix=(new N).identity())}async parse(e){var e=await super.parse(e),t=(this.gltfBuffer=e.glbBytes.slice().buffer,await(new js).parseBinary(this.gltfBuffer)),{batchTable:e,featureTable:r}=e,i=r.getData("RTC_CENTER"),i=(i&&(t.x+=i[0],t.y+=i[1],t.z+=i[2]),t.getComponent(Fe)),a=(i.updateWorldMatrix(),cr.tempMatrix),a=(a.compose(i.localPosition,i.localRotQuat,i.localScale),a.multiply(this.adjustmentTransform),a.decompose(lt.QUATERNION));return i.localRotQuat.copyFrom(a[1]),i.localRotQuat=i.localRotQuat,i.localPosition.copyFrom(a[0]),i.localPosition=i.localPosition,i.localScale.copyFrom(a[2]),i.localScale=i.localScale,i.updateWorldMatrix(),t.batchTable=e,t.featureTable=r,t}static decodeText(r){if(typeof TextDecoder<"u")return(new TextDecoder).decode(r);let i="";for(let e=0,t=r.length;e<t;e++)i+=String.fromCharCode(r[e]);try{return decodeURIComponent(escape(i))}catch{return i}}};let Ft=cr;s(Ft,"tempMatrix");class Ws extends rr{async parseBuffer(e){var t=new Ft;t.adjustmentTransform=this.userData,this.data=await t.parse(e)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(Ws,"format","bin");const Ys="glTF",Ar=12,vs={JSON:1313821514,BIN:5130562},pa={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class oh{constructor(e){s(this,"name"),s(this,"content"),s(this,"body"),s(this,"header"),this.name=pa.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,Ar);if(this.header={magic:Ft.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ys)throw new Error("GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("GLTFLoader: Legacy binary file detected.");var r=this.header.length-Ar,i=new DataView(e,Ar);let a=0;for(;a<r;){var o,n=i.getUint32(a,!0),h=(a+=4,i.getUint32(a,!0));a+=4,h===vs.JSON?(o=new Uint8Array(e,Ar+a,n),this.content=Ft.decodeText(o)):h===vs.BIN&&(o=Ar+a,this.body=e.slice(o,o+n)),a+=n}if(null===this.content)throw new Error("GLTFLoader: JSON content not found.")}}class js{constructor(){s(this,"_binary")}async parseBinary(e){this._binary=e;e={};let t,r;if(Ft.decodeText(new Uint8Array(this._binary,0,4))===Ys){try{r=e[pa.KHR_BINARY_GLTF]=new oh(this._binary)}catch{return}t=e[pa.KHR_BINARY_GLTF].content}else t=Ft.decodeText(new Uint8Array(this._binary));e=JSON.parse(t);return this.parseGLB(e,r.body)}async parseGLB(e,t){return(new za).parseJsonAndBuffer(e,t)}}class lh{async parse(e){var t=new DataView(e),r=Xs(t),r=(console.assert("i3dm"===r),t.getUint32(4,!0)),i=(console.assert(1===r),t.getUint32(8,!0)),a=(console.assert(i===e.byteLength),t.getUint32(12,!0)),s=t.getUint32(16,!0),o=t.getUint32(20,!0),n=t.getUint32(24,!0),t=(t.getUint32(28,!0),e.slice(32,32+a+s)),t=new ka(t,0,a,s),a=32+a+s,s=e.slice(a,a+o+n),s=new Hs(s,t.getData("INSTANCES_LENGTH"),0,o,n),a=a+o+n;return{version:r,featureTable:t,batchTable:s,glbBytes:new Uint8Array(e,a,i-a)}}}class hh extends ee{constructor(e,t,r){super(),s(this,"_geometry"),s(this,"_material"),s(this,"_instanceList"),this._geometry=e,this._material=t,this._instanceList=[];for(let e=0;e<r;e++){var i=new ee,a=i.addComponent(Le);a.geometry=this._geometry,a.material=this._material,this.addChild(i),this._instanceList.push(i)}}setMatrixAt(e,t){e=this._instanceList[e],t=t.decompose(lt.QUATERNION),e=e.transform;return e.localRotQuat.copyFrom(t[1]),e.localRotQuat=e.localRotQuat,e.localPosition.copyFrom(t[0]),e.localPosition=e.localPosition,e.localScale.copyFrom(t[2]),e.localScale=e.localScale,this}}const qa=class extends lh{constructor(){super(),s(this,"adjustmentTransform"),s(this,"_gltfBuffer"),this.adjustmentTransform=(new N).identity()}async parse(e){var e=await super.parse(e),t=(this._gltfBuffer=e.glbBytes.slice().buffer,await(new js).parseBinary(this._gltfBuffer)),{batchTable:e,featureTable:r}=e;const i=this.adjustmentTransform,a=r.getData("INSTANCES_LENGTH"),s=r.getData("POSITION",a,"FLOAT","VEC3"),o=r.getData("NORMAL_UP",a,"FLOAT","VEC3"),n=r.getData("NORMAL_RIGHT",a,"FLOAT","VEC3"),h=r.getData("SCALE_NON_UNIFORM",a,"FLOAT","VEC3"),l=r.getData("SCALE",a,"FLOAT","SCALAR"),u=new Map,c=[],d=(t.traverse(e=>{var t,r;(r=e?e.getComponent(Le):null)&&({geometry:r,material:t}=r,(r=new hh(r,t,a)).localPosition=r.localPosition.copy(e.localPosition),r.localRotation=r.localRotation.copy(e.localRotation),r.localScale=r.localScale.copy(e.localScale),c.push(r),u.set(e,r))}),new p);for(let e=0;e<a;e++)d.x+=s[3*e+0]/a,d.y+=s[3*e+1]/a,d.z+=s[3*e+2]/a;u.forEach((e,t)=>{var r=t.parent?t.parentObject:null;r&&(r.removeChild(t),r.addChild(e),e.transform.updateWorldMatrix(),e.transform.worldMatrix.transformVector4(d,e.localPosition))});var f=qa;for(let r=0;r<a;r++){f.tempMat.identity(),f.tempPos.set(s[3*r+0]-d.x,s[3*r+1]-d.y,s[3*r+2]-d.z),o?(f.tempUp.set(o[3*r+0],o[3*r+1],o[3*r+2]),f.tempRight.set(n[3*r+0],n[3*r+1],n[3*r+2]),f.tempRight.cross(f.tempUp,f.tempFwd).normalize(),f.tempMat.makeBasis(f.tempRight,f.tempUp,f.tempFwd),f.tempQuat.setFromRotationMatrix(f.tempMat)):f.tempQuat.set(0,0,0,1),l?f.tempSca.setScalar(l[r]):h?f.tempSca.set(h[3*r+0],h[3*r+1],h[3*r+2]):f.tempSca.set(1,1,1),f.tempMat.compose(f.tempPos,f.tempQuat,f.tempSca),f.tempMat.multiplyMatrices(f.tempMat,i);for(let e=0,t=c.length;e<t;e++)c[e].setMatrixAt(r,f.tempMat)}return t.batchTable=e,t.featureTable=r,t}};let ft=qa;s(ft,"tempFwd",new p),s(ft,"tempUp",new p),s(ft,"tempRight",new p),s(ft,"tempPos",new p),s(ft,"tempQuat",new j),s(ft,"tempSca",new p),s(ft,"tempMat",new N);class qs extends rr{async parseBuffer(e){var t=new ft;t.adjustmentTransform=this.userData,this.data=await t.parse(e)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(qs,"format","bin");class uh extends Na{constructor(){super(),s(this,"_faceTextureRef"),s(this,"_url"),this._faceTextureRef={},this.useMipmap=!0,this.format=z.rgba16float}get ldrImageUrl(){return this._url}async load(e,t){this._url=e;var r=new Ht(!1);return await r.load(e,t),this.createFromLDRTexture(r),this}createFromLDRTexture(e){var t=Math.log2(e.width/4),t=Math.pow(2,Math.round(t));return this.createFromTexture(t,e),this}createFromTexture(e,t){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let r=this.width;for(this.mipmapCount=1;16<r;)r/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=E.device.createSampler(this),this.uploadErpTexture(t),this}uploadErpTexture(e){var t=this.getGpuSource(0);return wt.makeTextureCube(e,this.width,t.v),this.generateMipmap(e),this}getGpuSource(e){let t=this._faceTextureRef[e];return t||(t={t:this.getGPUTexture(),v:this.getGPUTexture().createView({format:this.format,dimension:"2d-array",baseMipLevel:e,mipLevelCount:1,arrayLayerCount:6})},this._faceTextureRef[e]=t),t}generateMipmap(e){let t=1;for(;t<this.mipmapCount;)this.generateMipmapAtLevel(t,e),t++}generateMipmapAtLevel(e,t,r=3){var i=this.width/Math.pow(2,e),t={width:i,height:i,erpTexture:t},a=(e+1)/this.mipmapCount,a=Math.pow(a,r),r=this.getGpuSource(e);sr.importantSample(t,i,a,r.v)}}let ch=`
var<private>PI: f32 = 3.141592653589793;

// fn saturate( x : f32 ) -> f32 {
//     return clamp(x, 0.0, 1.0);
// }

fn hammersley(i : u32, N : u32) -> vec2<f32>
{
    // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
    var bits = (i << 16u) | (i >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    var rdi = f32(bits) * 2.3283064365386963e-10;
    return vec2<f32>(f32(i) / f32(N), rdi);
}

fn G_Smith(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var k = (roughness * roughness) / 2.0;
    var GGXL = NoL / (NoL * (1.0 - k) + k);
    var GGXV = NoV / (NoV * (1.0 - k) + k);
    return GGXL * GGXV;
}

fn V_SmithGGXCorrelated(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var a2 = pow(roughness, 4.0);
    var GGXV = NoL * sqrt(NoV * NoV * (1.0 - a2) + a2);
    var GGXL = NoV * sqrt(NoL * NoL * (1.0 - a2) + a2);
    return 0.5 / (GGXV + GGXL);
}


// Based on Karis 2014
fn importanceSampleGGX(Xi: vec2<f32>, roughness: f32, N: vec3<f32>) -> vec3<f32>
{
    var a = roughness * roughness;
    // Sample in spherical coordinates
    var Phi = 2.0 * PI * Xi.x;
    var CosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a * a - 1.0) * Xi.y));
    var SinTheta = sqrt(1.0 - CosTheta * CosTheta);
    // Construct tangent space vector
    var H: vec3<f32>;
    H.x = SinTheta * cos(Phi);
    H.y = SinTheta * sin(Phi);
    H.z = CosTheta;

    // Tangent to world space
    var UpVector = vec3<f32>(1.0, 0.0, 0.0);
    if (abs(N.z) < 0.999) {
        UpVector = vec3<f32>(0.0, 0.0, 1.0);
    }
    var TangentX = normalize(cross(UpVector, N));
    var TangentY = cross(N, TangentX);
    return TangentX * H.x + TangentY * H.y + N * H.z;
}


// Karis 2014
fn integrateBRDF(roughness: f32, NoV: f32) -> vec2<f32>
{
    var V: vec3<f32>;
    V.x = sqrt(1.0 - NoV * NoV); // sin
    V.y = 0.0;
    V.z = NoV; // cos

    // N points straight upwards for this integration
    var N = vec3<f32>(0.0, 0.0, 1.0);

    var A = 0.0;
    var B = 0.0;
    var numSamples = 1024u;

    for (var i = 0u; i < numSamples; i += 1u) {
        var Xi = hammersley(i, numSamples);
        // Sample microfacet direction
        var H = importanceSampleGGX(Xi, roughness, N);

        // Get the light direction
        var L = 2.0 * dot(V, H) * H - V;

        var NoL = saturate(dot(N, L));
        var NoH = saturate(dot(N, H));
        var VoH = saturate(dot(V, H));

        if (NoL > 0.0) {
            var V_pdf = V_SmithGGXCorrelated(NoV, NoL, roughness) * VoH * NoL / NoH;
            var Fc = pow(1.0 - VoH, 5.0);
            A += (1.0 - Fc) * V_pdf;
            B += Fc * V_pdf;
        }
    }

    return 4.0 * vec2<f32>(A, B) / f32(numSamples);
}

@group(0) @binding(0) var brdflutTexture: texture_storage_2d<rgba8unorm, write>;
@compute @workgroup_size(8, 8, 1)
// fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
fn CsMain(@builtin(global_invocation_id) global_invocation_id : vec3<u32>){
    var fragCoord = vec2<u32>(global_invocation_id.x, global_invocation_id.y);

    var fragColor = vec4<f32>(0.0);
    // Output to screen
    var res = integrateBRDF(f32(fragCoord.y + 1u) / 256.0, f32(fragCoord.x + 1u) / 256.0);
    fragColor = vec4<f32>(res.x, res.y, 0.0, 1.0);

    textureStore(brdflutTexture, vec2<i32>(fragCoord.xy), fragColor);
}
`;class fh{constructor(){s(this,"compute"),this.compute=new Ce(ch)}generateBRDFLUTTexture(){var e=new ne(256,256,z.rgba8unorm,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),t=(this.compute.setStorageTexture("brdflutTexture",e),this.compute.workerSizeX=32,this.compute.workerSizeY=32,C.beginCommandEncoder());return C.computeCommand(t,[this.compute]),C.endCommandEncoder(t),e}}class dh extends Ke{constructor(){super(...arguments),s(this,"_dataBuffer")}create(e,t,r,i=!1){var a=E.device,s=256*Math.ceil(4*e/256),o=(this.format=z.rgba8unorm,this.mipmapCount=Math.floor(i?Math.log2(e):1),this.createTextureDescriptor(e,t,this.mipmapCount,this.format),this._dataBuffer=a.createBuffer({size:r.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),a=(a.queue.writeBuffer(o,0,r),C.beginCommandEncoder());return a.copyBufferToTexture({buffer:o,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),C.endCommandEncoder(a),i&&nt.webGPUGenerateMipmap(this),this}updateTexture(e,t,r){var i=E.device,a=256*Math.ceil(4*e/256),s=(this.mipmapCount=Math.floor(Math.log2(e)),this._dataBuffer&&this._dataBuffer.destroy(),this._dataBuffer=null,this._dataBuffer=i.createBuffer({size:r.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),r=(i.queue.writeBuffer(s,0,r),C.beginCommandEncoder());r.copyBufferToTexture({buffer:s,bytesPerRow:a},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),C.endCommandEncoder(r),this.gpuSampler=i.createSampler(this),1<this.mipmapCount&&nt.webGPUGenerateMipmap(this)}}class ph{constructor(){s(this,"_texturePool"),s(this,"_materialPool"),s(this,"_prefabPool"),s(this,"_gltfPool"),s(this,"normalTexture"),s(this,"maskTexture"),s(this,"whiteTexture"),s(this,"blackTexture"),s(this,"redTexture"),s(this,"blueTexture"),s(this,"greenTexture"),s(this,"yellowTexture"),s(this,"grayTexture"),s(this,"defaultSky"),this._texturePool=new Map,this._materialPool=new Map,this._prefabPool=new Map,this._gltfPool=new Map,this.initDefault()}getGltf(e){return this._gltfPool.get(e)}addTexture(e,t){this._texturePool.set(e,t)}getTexture(e){return this._texturePool.get(e)}addMat(e,t){return this._materialPool.set(e,t)}getMat(e){return this._materialPool.get(e)}addPrefab(e,t){this._prefabPool.set(e,t)}getPrefab(e){return this._prefabPool.get(e).instantiate()}async loadGltf(e,t){if(this._prefabPool.has(e))return this._prefabPool.get(e);let r,i=e.substring(e.lastIndexOf(".")).toLowerCase(),a=new ot;t=(r=".gltf"==i?await a.load(e,Ee,t):await a.load(e,za,t)).data;return this._prefabPool.set(e,t),this._gltfPool.set(e,r.gltf),t}async loadObj(e,t){if(this._prefabPool.has(e))return this._prefabPool.get(e);let r,i=e.substring(e.lastIndexOf(".")).toLowerCase(),a=new ot;t=(r=".obj"==i?await a.load(e,Fs,t):r).data;return this._prefabPool.set(e,t),t}async loadB3DM(e,t,r){return this._prefabPool.has(e)?this._prefabPool.get(e):(t=(await(new ot).load(e,Ws,t,r)).data,this._prefabPool.set(e,t),t)}async loadI3DM(e,t,r){return this._prefabPool.has(e)?this._prefabPool.get(e):(t=(await(new ot).load(e,qs,t,r)).data,this._prefabPool.set(e,t),t)}async loadTexture(e,t,r){var i;return this._texturePool.has(e)?this._texturePool.get(e):((i=new Ht).flipY=r,await i.load(e,t),this._texturePool.set(e,i),i)}async loadHDRTexture(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let r=new Gs;return r=await r.load(e,t),this._texturePool.set(e,r),r}async loadHDRTextureCube(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let r=new ei;return r=await r.load(e,t),this._texturePool.set(e,r),r}async loadLDRTextureCube(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let r=new uh;return r=await r.load(e,t),this._texturePool.set(e,r),r}async loadTextureCubeMaps(e){var t=e[0];return this._texturePool.has(t)?this._texturePool.get(t):(await(t=new xs).load(e),this._texturePool.set(e[0],t),t)}async loadTextureCubeStd(e,t){var r;return this._texturePool.has(e)?this._texturePool.get(e):(await(r=new xs).loadStd(e),r)}async loadJSON(e,t){return(new ot).loadJson(e,t).then(async e=>e).catch(e=>{console.log(e)})}createTexture(e,t,r,i,a,s,o){var n=new Uint8Array(4096),e=(this.fillColor(n,e,t,r,i,a,s),new dh);return e.name=o,e.create(16,16,n,!0),o&&this.addTexture(o,e),e}fillColor(r,i,a,s,o,n,h){for(let t=0;t<i;t++)for(let e=0;e<a;e++){var l=e*i+t;r[4*l+0]=s,r[4*l+1]=o,r[4*l+2]=n,r[4*l+3]=h}}initDefault(){this.normalTexture=this.createTexture(32,32,127.5,127.5,255,255,"default-normalTexture"),this.maskTexture=this.createTexture(32,32,255,127.5,0,255,"default-maskTexture"),this.whiteTexture=this.createTexture(32,32,255,255,255,255,"default-whiteTexture"),this.blackTexture=this.createTexture(32,32,0,0,0,255,"default-blackTexture"),this.redTexture=this.createTexture(32,32,255,0,0,255,"default-redTexture"),this.blueTexture=this.createTexture(32,32,0,0,255,255,"default-blueTexture"),this.greenTexture=this.createTexture(32,32,0,255,0,255,"default-greenTexture"),this.yellowTexture=this.createTexture(32,32,0,255,255,255,"default-yellowTexture"),this.grayTexture=this.createTexture(32,32,128,128,128,255,"default-grayTexture");var e=(new fh).generateBRDFLUTTexture();e.name="BRDFLUT";this.addTexture("BRDFLUT",e),this.defaultSky=new ei,this.defaultSky.createFromTexture(128,this.blackTexture)}}class _{static get frameRate(){return this._frameRate}static set frameRate(e){this._frameRate=e,this._frameRateValue=1/e,360<=e&&(this._frameRateValue=0)}static get size(){return E.presentationSize}static get aspect(){return E.aspect}static get width(){return E.windowWidth}static get height(){return E.windowHeight}static async init(e={}){console.log("engine version",cn),this.setting={...this.setting,...e.engineSetting},await E.init(e.canvasConfig),se.init(),A.init(),dt.init(),Be.init(),be.init(),this.res=new ph,this._beforeRender=e.beforeRender,this._renderLoop=e.renderLoop,this._lateRender=e.lateRender,this.inputSystem=new un,this.inputSystem.initCanvas(E.canvas)}static startRenderView(e){this.renderJobs||(this.renderJobs=new Map),this.views=[e];var t=new ds(e);return this.renderJobs.set(e,t),t.addPost(new fs),t.start(),this.render(0),t}static startRenderViews(t){this.renderJobs||(this.renderJobs=new Map),this.views=t;for(let e=0;e<t.length;e++){var r=t[e],i=new ds(r);this.renderJobs.set(r,i),i.addPost(new fs),i.start()}this.render(0)}static getRenderJob(e){return this.renderJobs.get(e)}static render(e){this._isRun||(this._deltaTime=e-this._time,this._time=e,0<this._frameRateValue?(this._frameTimeCount+=.001*this._deltaTime,this._frameTimeCount>=.95*this._frameRateValue&&(this._frameTimeCount=0,this.updateFrame(e))):this.updateFrame(e)),requestAnimationFrame(e=>this.render(e))}static updateFrame(e){de.delta=e-de.time,de.time=e,de.frame+=1,pi.tick(de.delta),this._beforeRender&&this._beforeRender(),this.renderJobs.forEach((e,t)=>{e.render(this._renderLoop)}),this._lateRender&&this._lateRender()}static pause(){this._isRun=!0}static resume(){this._isRun=!1}}s(_,"res"),s(_,"inputSystem"),s(_,"views"),s(_,"_frameRateValue",0),s(_,"_frameRate",360),s(_,"_isRun",!1),s(_,"_frameTimeCount",0),s(_,"_deltaTime",0),s(_,"_time",0),s(_,"setting",{occlusionQuery:{enable:!0,debug:!1},pick:{enable:!0,mode:"bound",detail:"mesh"},render:{debug:!1,renderPassState:4,renderState_left:5,renderState_right:5,renderState_split:.5,quadScale:1,hdrExposure:1.5,debugQuad:-1,maxPointLight:1e3,maxDirectLight:4,maxSportLight:1e3,drawOpMin:0,drawOpMax:Number.MAX_SAFE_INTEGER,drawTrMin:0,drawTrMax:Number.MAX_SAFE_INTEGER,zPrePass:!1,gi:!1,postProcessing:{globalFog:{debug:!1,enable:!1,fogType:0,height:100,start:400,end:0,density:.02,ins:1,fogColor:new b(84/255,90/255,239/255,1)},ssao:{enable:!1,radius:.15,bias:-.1,aoPower:2,debug:!0},outline:{enable:!1,strength:1,groupCount:4,outlinePixel:2,fadeOutlinePixel:4,useAddMode:!1,debug:!0},taa:{enable:!1,jitterSeedCount:8,blendFactor:.1,sharpFactor:.6,sharpPreBlurFactor:.5,temporalJitterScale:.13,debug:!0},gtao:{enable:!1,darkFactor:1,maxDistance:5,maxPixel:50,rayMarchSegment:6,multiBounce:!1,usePosFloat32:!0,blendColor:!0,debug:!0},ssr:{enable:!1,pixelRatio:1,fadeEdgeRatio:.2,rayMarchRatio:.5,fadeDistanceMin:600,fadeDistanceMax:2e3,roughnessThreshold:.5,powDotRN:.2,mixThreshold:.1,debug:!0},bloom:{enable:!1,blurX:4,blurY:4,intensity:.25,brightness:1.3,debug:!1},fxaa:{enable:!1},depthOfView:{enable:!1,iterationCount:3,pixelOffset:1,near:150,far:300}}},shadow:{enable:!0,type:"HARD",shadowBias:.00204,pointShadowBias:.002,shadowQuality:2.5,shadowBound:50,shadowSize:2048,pointShadowSize:1024,shadowSoft:.005,shadowNear:1,shadowFar:2e3,needUpdate:!0,autoUpdate:!0,updateFrameRate:2,debug:!1},sky:{type:"HDRSKY",sky:null,skyExposure:1,defaultFar:1e6,defaultNear:1},light:{maxLight:1024},material:{materialChannelDebug:!1,materialDebug:!1}}),s(_,"_beforeRender"),s(_,"_renderLoop"),s(_,"_lateRender"),s(_,"renderJobs");let yc=`
#include "GlobalUniform"

struct UniformData {
  radius: f32 ,
  bias: f32,
  aoPower: f32 ,
  blurSize: f32 ,
};

// @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
@group(0) @binding(0) var<uniform> uniformData: UniformData;
@group(0) @binding(1) var colorMap : texture_2d<f32>;
// @group(0) @binding(2) var ssaoMapSampler : sampler;
@group(0) @binding(2) var ssaoMap : texture_2d<f32>;
@group(0) @binding(3) var outTex : texture_storage_2d<rgba16float, write>;

@compute @workgroup_size( 8 , 8 )
fn CsMain( @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
  var fragCoord = vec2<i32>( globalInvocation_id.xy );

  var texSize = vec2<f32>(textureDimensions(ssaoMap).xy);
  var texCoord = vec2<f32>(fragCoord) / texSize ;

  let blurSize = i32(uniformData.blurSize);

  var result = vec4<f32>(0.0) ;
  var ii = 0.0 ;
  for (var i = -2; i < 2 ; i+=1) {
     for (var j = -2; j < 2 ; j+=1) {
        var offset = vec2<i32>( i , j ) ;
        result += textureLoad(ssaoMap, fragCoord + offset, 0 );
        // result += textureSampleLevel(ssaoMap,ssaoMapSampler, vec2<f32>( fragCoord + offset) / texSize , 0.0 );
        ii += 1.0 ;
     }
  }
  var fResult = result.r / ii ;
  var color = textureLoad(colorMap, fragCoord , 0 );
  textureStore(outTex, fragCoord , vec4(color.rgb * fResult,1.0) );
}
`,mh=`
#include "GlobalUniform"

  struct BlurSetting{
    near: f32,
    far: f32,
    pixelOffset: f32,
  }

  @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
  @group(0) @binding(1) var<uniform> blurSetting: BlurSetting;

  @group(0) @binding(2) var positionBufferTex : texture_2d<f32>;
  @group(0) @binding(3) var normalBufferTex : texture_2d<f32>;
  @group(0) @binding(4) var inTexSampler : sampler;
  @group(0) @binding(5) var inTex : texture_2d<f32>;
  @group(0) @binding(6) var outTex : texture_storage_2d<rgba16float, write>;

  var<private> cameraPosition: vec3<f32>;
  var<private> texSize: vec2<u32>;
  var<private> fragCoord: vec2<i32>;
  var<private> texelSize: vec2<f32>;

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    fragCoord = vec2<i32>( globalInvocation_id.xy );
    texSize = textureDimensions(inTex).xy;
    texelSize = 1.0 / vec2<f32>(texSize - 1);
    if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
        return;
    }
    cameraPosition = vec3<f32>(standUniform.cameraWorldMatrix[3].xyz);
    let wPosition:vec3<f32> = textureLoad(positionBufferTex, fragCoord , 0).xyz;
    var distance = length(wPosition - cameraPosition);
    var oc:vec4<f32> = textureLoad(inTex, fragCoord, 0);
    if(distance > blurSetting.near){
        let normal = textureLoad(normalBufferTex, fragCoord, 0);
        var pixelScale = 0.5;
        if(normal.w > 0.5){
            distance = min(distance, blurSetting.far);
            pixelScale = (distance - blurSetting.near) / (blurSetting.far - blurSetting.near);
        }
        oc = mixBlurColor(oc, fragCoord, blurSetting.pixelOffset, pixelScale);
    }
    textureStore(outTex, fragCoord, oc);
  }

  fn mixBlurColor(orginColor:vec4<f32>, coord:vec2<i32>, pixelOffset:f32, scale:f32) -> vec4<f32> {

    let uv = vec2<f32>(coord);
    var uv0 = (uv + scale * vec2<f32>( pixelOffset,  pixelOffset)) * texelSize;
    var uv1 = (uv + scale * vec2<f32>(-pixelOffset,  pixelOffset)) * texelSize;
    var uv2 = (uv + scale * vec2<f32>(-pixelOffset, -pixelOffset)) * texelSize;
    var uv3 = (uv + scale * vec2<f32>( pixelOffset, -pixelOffset)) * texelSize;

    uv0.x = processUVEdge(uv0.x);
    uv0.y = processUVEdge(uv0.y);
    uv1.x = processUVEdge(uv1.x);
    uv1.y = processUVEdge(uv1.y);
    uv2.x = processUVEdge(uv2.x);
    uv2.y = processUVEdge(uv2.y);
    uv3.x = processUVEdge(uv3.x);
    uv3.y = processUVEdge(uv3.y);

    var ob = vec4<f32>(0.0);
    ob += textureSampleLevel(inTex, inTexSampler, uv0, 0.0);
    ob += textureSampleLevel(inTex, inTexSampler, uv1, 0.0);
    ob += textureSampleLevel(inTex, inTexSampler, uv2, 0.0);
    ob += textureSampleLevel(inTex, inTexSampler, uv3, 0.0);
    return mix(orginColor, ob * 0.25, scale);
  }

  fn processUVEdge(v: f32) -> f32{
      var value = v;
      if(value < 0.0){
        value = - value;
      }else if(value > 1.0){
        value = 2.0 - value;
      }
      return value;
  }
`,gh=`
    #include "GlobalUniform"
    
    struct GTAO{
      maxDistance: f32,
      maxPixel: f32,
      darkFactor: f32,
      rayMarchSegment: f32,
      cameraNear: f32,
      cameraFar: f32,
      viewPortWidth: f32,
      viewPortHeight: f32,
      multiBounce: f32,
      blendColor: f32,
      slot1: f32,
      slot2: f32,
    }

    @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
    @group(0) @binding(1) var<uniform> gtaoData: GTAO;
    @group(0) @binding(2) var<storage, read_write> directions : array<vec2<f32>>;
    @group(0) @binding(3) var<storage, read_write> aoBuffer : array<f32>;

    @group(0) @binding(4) var posTex : texture_2d<f32>;
    @group(0) @binding(5) var normalTex : texture_2d<f32>;
    @group(0) @binding(6) var inTex : texture_2d<f32>;
    @group(0) @binding(7) var outTex : texture_storage_2d<rgba16float, write>;
    
    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;
    var<private> wPosition: vec3<f32>;
    var<private> wNormal: vec4<f32>;
    var<private> maxPixelScaled: f32;
    
    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
      fragCoord = vec2<i32>( globalInvocation_id.xy );
      texSize = textureDimensions(inTex).xy;
      if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
          return;
      }
      wNormal = textureLoad(normalTex, fragCoord, 0);
      wNormal = vec4<f32>(wNormal.rgb,wNormal.w) ;
      var oc = textureLoad(inTex, fragCoord, 0);
      let index = fragCoord.x + fragCoord.y * i32(texSize.x);
      let lastFactor = aoBuffer[index];
      var newFactor = 0.0;
      if(wNormal.w < 0.5){//sky
          
      }else{
          wPosition = textureLoad(posTex, fragCoord, 0).xyz;
          let ndc = standUniform.projMat * standUniform.viewMat * vec4<f32>(wPosition, 1.0);
          let ndcZ = ndc.z / ndc.w;
          maxPixelScaled = calcPixelByNDC(ndcZ);
          newFactor = rayMarch();
      }
      
      var factor:f32 = mix(lastFactor, newFactor, 0.6);
      aoBuffer[index] = factor;
      factor = blurFactor(factor);
      factor = 1.0 - factor * gtaoData.darkFactor;
      var gtao = vec3<f32>(factor);
      if(gtaoData.multiBounce > 0.5){
          gtao = MultiBounce(factor, oc.xyz);
      }
      
      var outColor = gtao;
      if(gtaoData.blendColor > 0.5){
          outColor = oc.xyz * gtao;
      }
      textureStore(outTex, fragCoord , vec4<f32>(outColor, oc.w));
    }
    
    fn MultiBounce(AO:f32, Albedo:vec3<f32>) -> vec3<f32>
    {
        var A = 2 * Albedo - 0.33;
        var B = -4.8 * Albedo + 0.64;
        var C = 2.75 * Albedo + 0.69;
        return max(vec3<f32>(AO), ((AO * A + B) * AO + C) * AO);
    }
    
    fn calcPixelByNDC(ndcZ:f32) -> f32{
      let nearAspect = gtaoData.cameraNear / (gtaoData.cameraFar - gtaoData.cameraNear);
      let aspect = (1.0 + nearAspect) / (ndcZ + nearAspect);
      var viewPortMax = max(gtaoData.viewPortWidth, gtaoData.viewPortHeight);
      var maxPixel = min(viewPortMax, gtaoData.maxPixel * aspect);
      maxPixel = max(0.1, maxPixel);
      return maxPixel;
    }
    
    fn blurFactor(centerFactor:f32) -> f32{
      var coord0 = clamp(fragCoord + vec2<i32>(1, 0) , vec2<i32>(0), vec2<i32>(texSize - 1));
      var coord1 = clamp(fragCoord + vec2<i32>(-1, 0), vec2<i32>(0), vec2<i32>(texSize - 1));
      var coord2 = clamp(fragCoord + vec2<i32>(0, 1) , vec2<i32>(0), vec2<i32>(texSize - 1));
      var coord3 = clamp(fragCoord + vec2<i32>(0, -1), vec2<i32>(0), vec2<i32>(texSize - 1));
      var index0 = coord0.x + coord0.y * i32(texSize.x);
      var index1 = coord1.x + coord1.y * i32(texSize.x);
      var index2 = coord2.x + coord2.y * i32(texSize.x);
      var index3 = coord3.x + coord3.y * i32(texSize.x);
      let factor0:f32 = aoBuffer[index0];
      let factor1:f32 = aoBuffer[index1];
      let factor2:f32 = aoBuffer[index2];
      let factor3:f32 = aoBuffer[index3];
      var factor = 0.25 * (factor0 + factor1 + factor2 + factor3);
      factor = mix(factor, centerFactor, 0.8);
      return factor;
    }
    
    fn rayMarch() -> f32{
      let originNormal = normalize(vec3<f32>(wNormal.xyz) * 2.0 - 1.0);
      let stepPixel = maxPixelScaled / gtaoData.rayMarchSegment;
      var totalWeight:f32 = 0.001;
      var darkWeight:f32 = 0.0;
      for(var i:i32 = 0; i < 8; i += 1){
          let dirVec2 = directions[i];
          for(var j:f32 = 1.1; j < maxPixelScaled; j += stepPixel){
              var sampleCoord = vec2<i32>(dirVec2 * j) + fragCoord;
              sampleCoord = clamp(sampleCoord, vec2<i32>(0), vec2<i32>(texSize - 1));
              let samplePosition = textureLoad(posTex, sampleCoord, 0).xyz;
              let distanceVec2 = samplePosition - wPosition;
              let distance = length(distanceVec2);
              if(distance < gtaoData.maxDistance){
                  let sampleDir = normalize(distanceVec2);
                  var factor = max(0.0, dot(sampleDir, originNormal) - 0.1);
                  factor *= 1.0 - distance / gtaoData.maxDistance;
                  darkWeight += factor;
                  totalWeight += 1.0;
              }
          }
      }
      
      return darkWeight/totalWeight ;
    }
  `,xh=`
    @group(0) @binding(0) var textureR : texture_2d<f32>;
    @group(0) @binding(1) var textureG : texture_2d<f32>;
    @group(0) @binding(2) var textureB : texture_2d<f32>;
    @group(0) @binding(3) var textureA : texture_2d<f32>;
    @group(0) @binding(4) var outTex : texture_storage_2d<rgba8unorm, write>;

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        let size = textureDimensions(outTex);
        let fragCoord : vec2<i32> = vec2<i32>(GlobalInvocationID.xy); 
        var uv:vec2<f32>;
        uv.x = f32(fragCoord.x)/f32(size.x);
        uv.y = f32(fragCoord.y)/f32(size.y);
        var oc:vec4<f32> = textureSampleLevel(atlasTexture, atlasTextureSampler, targetUV, 0.0);

        let sizeR = textureDimensions(textureR);
        let sizeG = textureDimensions(textureG);
        let sizeB = textureDimensions(textureB);
        let sizeA = textureDimensions(textureA);
        
        var tr = textureLoad(textureR, vec2<i32>(uv * sizeR) , 0 ) ;
        var tg = textureLoad(textureG, vec2<i32>(uv * sizeG) , 0 ) ;
        var tb = textureLoad(textureB, vec2<i32>(uv * sizeB) , 0 ) ;
        var ta = textureLoad(textureA, vec2<i32>(uv * sizeA) , 0 ) ;

        let color = vec4<f32>(tr,tg,tb,ta);
        textureStore(outTex, fragCoord , vec4(color));
    }

`,Sc=`
  #include "MathShader"
  #include "IrradianceVolumeData_frag"

  struct IrradianceField {
      probeStartPosition: vec4<f32>,
      probeCounts:vec4<f32>,
      probeStep:f32,
      irradianceTextureWidth:f32,
      irradianceTextureHeight:f32,
      irradianceProbeSideLength:f32,
  };

  @group(0) @binding(0) var outputBuffer : texture_storage_2d<rgba16float, write>;
  @group(0) @binding(1) var<storage,read> uniformData : IrradianceVolumeData ;

  @group(1) @binding(0) var normalMapSampler : sampler;
  @group(1) @binding(1) var normalMap : texture_2d<f32>;

  @group(1) @binding(2) var colorMapSampler : sampler;
  @group(1) @binding(3) var colorMap : texture_2d<f32>;

  @group(1) @binding(4) var litMapSampler : sampler;
  @group(1) @binding(5) var litMap : texture_2d<f32>;

  @group(1) @binding(6) var irradianceMapSampler : sampler;
  @group(1) @binding(7) var irradianceMap : texture_2d<f32>;

  var<private> wsn:vec3<f32>;
  var<private> ulitColor:vec4<f32>;
  var<private> litColor:vec4<f32>;
  var<private> irradianceFieldSurface : IrradianceField ;
  var<private> probeID:u32;

  var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

  fn getIrradianceFieldSurface() -> IrradianceField{
    let data = uniformData;
    irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
    irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
    irradianceFieldSurface.probeStep = data.ProbeSpace;
    irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
    irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
    irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
    return irradianceFieldSurface;
  }

  fn rotateDir(n:vec3<f32>) -> vec3<f32>{
     return normalize(applyQuaternion(-n, quaternion));
  }

  fn sampleLitColor(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(litMap, litMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(litMap, uv, 0);
      return oc;
  }

  fn sampleNormal(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(normalMap, normalMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(normalMap, uv, 0);
      return oc;
  }

  fn sampleColor(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(colorMap, colorMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(colorMap, uv, 0);
      return oc;
  }

  fn sampleProbe(fragCoord:vec2<u32>){
    var uv = vec2<i32>(i32(fragCoord.x), i32(fragCoord.y)) ;

    litColor = sampleLitColor(uv);

    var normalMap = sampleNormal(uv);
    wsn = normalMap.xyz * 2.0 - 1.0;

    ulitColor = sampleColor(uv);
  }

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    getIrradianceFieldSurface();
    var fragCoord = vec2<u32>( globalInvocation_id.x, globalInvocation_id.y);
    probeID = globalInvocation_id.z;
    fragCoord = fragCoord + getCoordOffset(probeID);

    sampleProbe(fragCoord);

    let irradiance = getIrradianceColor();
    let result = blendIrradianceColor(irradiance);
    textureStore(outputBuffer, vec2<i32>(fragCoord), result);
  }

  fn blendIrradianceColor(irradiance:vec4<f32>) -> vec4<f32>{
     var bounceColor = irradiance * ulitColor;
     let bounceIntensity = getBounceIntensity(uniformData.bounceIntensity);
     let conservation1 = 1.0 / sqrt((1.0 + bounceIntensity * 0.55));
     let conservation2 = 1.0 / sqrt((1.0 + bounceIntensity));
     var result = litColor * conservation2 + bounceColor * sqrt(bounceIntensity) * conservation1;
     return vec4<f32>(result.xyz, litColor.w);
  }

  fn getBounceIntensity(intensity:f32) -> f32 {
    var value = clamp(intensity, 0.0, 1.0) * 10.0;
    return value;
  }

  fn getCoordOffset(id:u32) -> vec2<u32>{
      var fullCol = u32(uniformData.ProbeSourceTextureSize / uniformData.ProbeSize);
      var offsetSampleUv = vec2<u32>( (id / fullCol) * 6u , id % fullCol) * u32(uniformData.ProbeSize);
      return offsetSampleUv;
  }

  fn getIrradianceColor() -> vec4<f32>{
     var probeIrradiance: vec4<f32> = vec4<f32>(0.0);
     if(length(wsn) > 0.01){
       probeIrradiance = getIrrdiaceIndex(i32(probeID), wsn);
     }
     return probeIrradiance;
  }

  n getIrrdiaceIndex(index:i32, wsn:vec3<f32>) -> vec4<f32>{
    var wsN = rotateDir(wsn.xyz);
    var texCoord:vec2<f32> = textureCoordFromDirection(wsN,
      index,
      irradianceFieldSurface.irradianceTextureWidth,
      irradianceFieldSurface.irradianceTextureHeight,
      irradianceFieldSurface.irradianceProbeSideLength);

    var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, texCoord, 0.0).xyz;
    return vec4<f32>(probeIrradiance, 1.0);
  }

  fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
  {
      var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
      uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
      uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
      return uv ;
  }

  fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
  {
      var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
      var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
      var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
      var offsetZ = probeID / blockCount ;

      var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

      var blockOffset = vec2<f32>(0.0);
      blockOffset.x = f32(offsetX) * size;
      blockOffset.y = f32(offsetY) * size + f32(offsetZ) * f32(irradianceFieldSurface.probeCounts.z) * size;

      let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
      var probeCounts:vec3<f32> = vec3<f32>(irradianceFieldSurface.probeCounts.xyz);

      var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
      var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

      pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

      return pixelCoord + 1.0 ;
  }

  fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
  {
    var pixelCoord = pixelCoord0;
    let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
    let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
    let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
    let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
    let col:i32 = pixelCoord.y / pixelCountYMax;

    pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
    pixelCoord.y = pixelCoord.y % pixelCountYMax;

    return pixelCoord;
  }
`,_h=`
   struct OutlineSettingData{
      strength: f32,
      useAddMode: f32,
      outlinePixel: f32,
      fadeOutlinePixel: f32,
      lowTexWidth: f32,
      lowTexHeight: f32,
      slot0: f32,
      slot1: f32,
   }

   @group(0) @binding(0) var<uniform> outlineSetting: OutlineSettingData;
   @group(0) @binding(1) var inTex : texture_2d<f32>;
   @group(0) @binding(2) var lowTexSampler : sampler;
   @group(0) @binding(3) var lowTex : texture_2d<f32>;
   @group(0) @binding(4) var outlineTex : texture_storage_2d<rgba16float, write>;
   
   var<private> texSize: vec2<u32>;
   var<private> fragCoord: vec2<i32>;

   @compute @workgroup_size( 8 , 8 , 1 )
   fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
   {
      fragCoord = vec2<i32>( globalInvocation_id.xy );
      texSize = textureDimensions(outlineTex).xy;
      if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
         return;
      }

      let uv01 = vec2<f32>(fragCoord) / (vec2<f32>(texSize) - 1.0);
      let outLineColor = textureSampleLevel(lowTex, lowTexSampler, uv01, 0.0) * outlineSetting.strength;
      var newOC = textureLoad(inTex, fragCoord, 0);
      var blendColor:vec3<f32> = vec3<f32>(0.0);
      if(outlineSetting.useAddMode > 0.5){
         blendColor = vec3<f32>(newOC.xyz) + vec3<f32>(outLineColor.xyz) * outLineColor.w;
      }else{
         blendColor = mix(vec3<f32>(newOC.xyz), vec3<f32>(outLineColor.xyz), outLineColor.w);
      }
      textureStore(outlineTex, fragCoord , vec4<f32>(blendColor, newOC.w));
   }
`,vh=`
  struct OutlineSettingData{
    strength: f32,
    useAddMode: f32,
    outlinePixel: f32,
    fadeOutlinePixel: f32,
    lowTexWidth: f32,
    lowTexHeight: f32,
    slot0: f32,
    slot1: f32,
  }

  struct OutlineSlotData{
    color: vec3<f32>,
    count: f32,
  }

  struct OutlineWeightData{
    slotIndex:f32,
    outerSlotIndex:f32,
    entityIndex:f32,
    weight:f32
  }

  struct OutlineEntities{
    list: array<f32, 16u>,
  }

  @group(0) @binding(0) var<uniform> outlineSetting: OutlineSettingData;
  @group(0) @binding(1) var<storage, read_write> slotsBuffer : array<OutlineSlotData>;
  @group(0) @binding(2) var<storage, read_write> weightBuffer : array<OutlineWeightData>;
  @group(0) @binding(3) var<storage, read_write> entitiesBuffer : array<OutlineEntities>;
  @group(0) @binding(4) var indexTexture : texture_2d<f32>;

  var<private> texSize: vec2<u32>;
  var<private> lowSize: vec2<i32>;
  var<private> fragCoord: vec2<i32>;
  var<private> fragCoordLow: vec2<i32>;
  var<private> coordIndex: i32;

  var<private> fragOutline: OutlineWeightData;

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    fragCoordLow = vec2<i32>( globalInvocation_id.xy );
    fragCoord = fragCoordLow * 2;
    texSize = textureDimensions(indexTexture).xy;
    lowSize = vec2<i32>(i32(outlineSetting.lowTexWidth), i32(outlineSetting.lowTexHeight));

    if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
        return;
    }
    if(fragCoordLow.x >= lowSize.x || fragCoordLow.y >= lowSize.y){
        return;
    }
    
    coordIndex = fragCoordLow.x + fragCoordLow.y * lowSize.x;
    fragOutline = weightBuffer[coordIndex];
    var wPos = textureLoad(indexTexture, fragCoord, 0 ) ;
    
    fragOutline.entityIndex = round(wPos.w);
    fragOutline.slotIndex = -1.0;
    fragOutline.outerSlotIndex = -1.0;
    fragOutline.weight = 0.0;
    
    if(fragOutline.entityIndex >= 0.0){
      fragOutline.slotIndex = f32(matchOutlineSlot());
    }
    weightBuffer[coordIndex] = fragOutline;
  }

  fn matchOutlineSlot() -> i32
  {
    for(var i:i32 = 0; i < 8; i ++){
        var slotData:OutlineSlotData = slotsBuffer[i];
        var entities:array<f32, 16u> = entitiesBuffer[i].list;
        let count:i32 = i32(slotData.count);
        for(var j:i32 = 0; j < count; j ++){
            var outlineIndex = entities[j];
            if(abs(fragOutline.entityIndex - outlineIndex) < 0.1){ 
                return i;
            }
        }
    }
    return -1;
  }
`,yh=`
    struct OutlineSettingData{
        strength: f32,
        useAddMode: f32,
        outlinePixel: f32,
        fadeOutlinePixel: f32,
        lowTexWidth: f32,
        lowTexHeight: f32,
        slot0: f32,
        slot1: f32,
    }
    
    struct OutlineSlotData{
        color: vec3<f32>,
        count: f32,
    }
    
    struct OutlineWeightData{
        slotIndex:f32,
        outerSlotIndex:f32,
        entityIndex:f32,
        weight:f32
    }

    @group(0) @binding(0) var<uniform> outlineSetting: OutlineSettingData;
    @group(0) @binding(1) var<storage, read_write> slotsBuffer : array<OutlineSlotData>;
    @group(0) @binding(2) var<storage, read_write> weightBuffer : array<OutlineWeightData>;
    @group(0) @binding(3) var<storage, read_write> oldOutlineColor : array<vec4<f32>>;
    @group(0) @binding(4) var lowTex : texture_storage_2d<rgba16float, write>;
    
    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;
    var<private> coordIndex: i32;
    var<private> fragOutline: OutlineWeightData;
    
    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
        fragCoord = vec2<i32>( globalInvocation_id.xy );
        texSize = textureDimensions(lowTex).xy;
        if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
            return;
        }
        
        coordIndex = fragCoord.x + fragCoord.y * i32(texSize.x);
        fragOutline = weightBuffer[coordIndex];
        
        var blendColor = vec3<f32>(0.0);
        var newOC = vec4<f32>(0.0);
        
        calcOutline();
        let outerSlotIndex:i32 = i32(round(fragOutline.outerSlotIndex));
        if(outerSlotIndex >= 0){
            let outLineColor = slotsBuffer[outerSlotIndex].color;
            newOC = vec4<f32>(outLineColor, fragOutline.weight);
        }
        
        let coordIndex0 = fragCoord.x + 1 + (fragCoord.y - 1) * i32(texSize.x);
        let coordIndex1 = fragCoord.x - 1 + (fragCoord.y - 1) * i32(texSize.x);
        let coordIndex2 = fragCoord.x + (fragCoord.y + 1) * i32(texSize.x);

        let oldOC = oldOutlineColor[coordIndex];
        let oldOC0 = oldOutlineColor[coordIndex0];
        let oldOC1 = oldOutlineColor[coordIndex1];
        let oldOC2 = oldOutlineColor[coordIndex2];
        
        newOC = mix((oldOC + oldOC0 + oldOC1 + oldOC2) * 0.25, newOC, 0.4);
        
        oldOutlineColor[coordIndex] = newOC;
        textureStore(lowTex, fragCoord, newOC);
    }
    
    fn calcOutline()
    {
        let outlinePixel = outlineSetting.outlinePixel;
        let fadeOutlinePixel = outlineSetting.fadeOutlinePixel;
        let pixelRadius = outlinePixel + fadeOutlinePixel;
        let minX = max(0.0, f32(fragCoord.x) - pixelRadius);
        let maxX = min(f32(texSize.x), f32(fragCoord.x) + pixelRadius);
        let minY = max(0.0, f32(fragCoord.y) - pixelRadius);
        let maxY = min(f32(texSize.y), f32(fragCoord.y) + pixelRadius);
        var coordTemp_f32 = vec2<f32>(0.0);
        var coordCurrent_f32 = vec2<f32>(fragCoord);
        var tempCoordIndex = 0;
        var tempWeightData: OutlineWeightData;
        for(var x:f32 = minX; x < maxX; x += 1.0){
            for(var y:f32 = minY; y < maxY; y += 1.0){
                coordTemp_f32.x = x;
                coordTemp_f32.y = y;
                let distanceToOuter = length(coordTemp_f32 - coordCurrent_f32);
                if(distanceToOuter < pixelRadius){
                    var coord_i32 = vec2<i32>(coordTemp_f32);
                    tempCoordIndex = coord_i32.x + coord_i32.y * i32(texSize.x);
                    tempWeightData = weightBuffer[tempCoordIndex];
                    let outlineGap = abs(tempWeightData.slotIndex - fragOutline.slotIndex);
                    if(outlineGap > 0.1){
                        if(tempWeightData.slotIndex > fragOutline.slotIndex){
                            if(abs(tempWeightData.slotIndex - fragOutline.outerSlotIndex) < 0.1){
                                fragOutline.weight = max(fragOutline.weight, calcWeight(pixelRadius, distanceToOuter, outlinePixel));
                                fragOutline.outerSlotIndex = tempWeightData.slotIndex;
                                weightBuffer[tempCoordIndex] = tempWeightData;
                            }else if(tempWeightData.slotIndex > fragOutline.outerSlotIndex){
                                fragOutline.weight = calcWeight(pixelRadius, distanceToOuter, outlinePixel);
                                fragOutline.outerSlotIndex = tempWeightData.slotIndex;
                                weightBuffer[tempCoordIndex] = tempWeightData;
                            }
                        }
                    }
                }
            }
        }
    }
    
    fn calcWeight(radius:f32, distance0:f32, outlinePixel:f32) -> f32{
        let distance = distance0 - outlinePixel;
        if(distance < 0.0){
            return 1.0;
        }
        var ret = 1.0 - distance / (radius - outlinePixel);
        return ret;
    }
`,Sh=`
    struct GlobalUniform {
        projMat: mat4x4<f32>,
        viewMat: mat4x4<f32>,
        cameraWorldMatrix: mat4x4<f32>,
        pvMatrixInv : mat4x4<f32>,
        shadowMatrix: array<mat4x4<f32>,8>,
        CameraPos: vec3<f32>,
        
        frame: f32,
        time: f32,
        delta: f32,
        shadowBias: f32,
        skyExposure: f32,
        renderPassState:f32,
        quadScale: f32,
        hdrExposure: f32,
        
        renderState_left: i32,
        renderState_right: i32,
        renderState_split: f32,

        mouseX: f32,
        mouseY: f32,
        windowWidth: f32,
        windowHeight: f32,

        near: f32,
        far: f32,

        pointShadowBias: f32,
        shadowMapSize: f32,
        shadowSoft: f32,
    };

    struct PickResult{
        pick_meshID:f32,
        pick_meshID2:f32,
        pick_UV:vec2<f32>,
        pick_Position:vec4<f32>,
        pick_Normal:vec4<f32>,
        pick_Tangent:vec4<f32>,
    }

    @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
    @group(0) @binding(1) var<storage,read_write> outBuffer: PickResult;
    @group(0) @binding(2) var visibleMap : texture_2d<f32>;

    @compute @workgroup_size( 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
    var result:PickResult ;
    // result.pick_meshID
    let texSize = textureDimensions(visibleMap).xy;
    let screenPoint = vec2<f32>(standUniform.mouseX/standUniform.windowWidth,standUniform.mouseY/standUniform.windowHeight);

    let mouseUV = screenPoint * vec2<f32>(texSize.xy); 
    let info = textureLoad(visibleMap, vec2<i32>(mouseUV) , 0);

    outBuffer.pick_meshID = f32(info.w) ;
    outBuffer.pick_meshID2 = f32(info.w) ;
    outBuffer.pick_Tangent = vec4<f32>(2.0,2.0,2.0,2.0) ;
    outBuffer.pick_UV = vec2<f32>(standUniform.mouseX,standUniform.mouseY) ;
    outBuffer.pick_Position = vec4<f32>(info.xyzw) ;
    outBuffer.pick_Normal = vec4<f32>(info.xyzw) ;
    }
`,bc=`
#include "GlobalUniform"
  struct UniformData {
    radius: f32 ,
    bias: f32,
    aoPower: f32 ,
    blurSize: f32 ,
  };

  @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
  @group(0) @binding(1) var<uniform> uniformData: UniformData;
  @group(0) @binding(2) var<storage,read> sampleData: array<vec4<f32>>;

  // @group(0) @binding(3) var colorMap : texture_2d<f32>;
  @group(0) @binding(3) var positionMap : texture_2d<f32>;
  @group(0) @binding(4) var normalMap : texture_2d<f32>;

  @group(0) @binding(5) var noiseMapSampler: sampler;
  @group(0) @binding(6) var noiseMap : texture_2d<f32>;

  @group(0) @binding(7) var outTex : texture_storage_2d<rgba16float, write>;

  var<private> kernelSize: i32 = 32 ;

  @compute @workgroup_size( 8 , 8 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    var fragCoord = vec2<i32>( globalInvocation_id.xy );

    var texSize = textureDimensions(positionMap).xy;
    var texCoord = vec2<f32>(fragCoord) / vec2<f32>(texSize);

    var fragColor = vec4<f32>(1.0);

    var viewMat = standUniform.viewMat  ;
    // var color = textureLoad(colorMap, fragCoord , 0 ) ;
    var wPos = textureLoad(positionMap, fragCoord , 0 ) ;

    var fragPosition = viewMat * vec4<f32>(wPos.xyz,1.0);
    fragPosition = vec4(fragPosition.xyz / fragPosition.w,1.0) ;

    var texNormal = textureLoad(normalMap, fragCoord , 0 ) ;
    var sampleNormal = texNormal.xyz ;
    sampleNormal = sampleNormal * 2.0 - 1.0;
    var fragNormal = viewMat * vec4<f32>((sampleNormal.xyz),0.0);

    var pes = vec2<f32>(texSize.xy) / 4.0 ;
    var noiseTex:vec4<f32> = textureSampleLevel(noiseMap, noiseMapSampler, texCoord * pes , 0.0);
    var randomVec  = (viewMat * vec4<f32>(normalize(noiseTex.xyz),0.0)).xyz;

    var tangent = normalize(randomVec - fragNormal.xyz * dot(randomVec , fragNormal.xyz));
    var bTangent = cross(fragNormal.xyz, tangent) + 0.0001 ;
    var tbn = mat3x3<f32>(tangent, bTangent, fragNormal.xyz);

    var offset:vec4<f32>;
    var samplePos :vec3<f32>;
    var offsetPosition:f32;
    var sample_depth_v:vec4<f32>;
    var occlusion:f32 = 0.0;
    var rangeCheck:f32 = 0.0 ;
    var radius:f32 = uniformData.radius * 32.0 * fragPosition.z ;

    for(var i:i32 = 0; i < 32 ; i = i + 1 ){
      samplePos  = (tbn * sampleData[i].xyz ) ;
      samplePos  = fragPosition.xyz + samplePos * radius ;

      offset = vec4(samplePos, 1.0);
      offset = standUniform.projMat * offset;

      var off = offset.xyz / offset.w;
      off = (off.xyz * 0.5 ) + 0.5 ;
      off.y = 1.0 - off.y ;
      var offsetUV = vec2<i32>(off.xy * vec2<f32>(texSize.xy));

      sample_depth_v = textureLoad(positionMap, offsetUV.xy , 0 ) ;
      sample_depth_v = vec4<f32>((viewMat * vec4<f32>(sample_depth_v.xyz,1.0)).xyz,1.0);
      offsetPosition = sample_depth_v.z / sample_depth_v.w ;

      rangeCheck = smoothstep(0.0, 1.0, radius / abs(offsetPosition - fragPosition.z ));
      // rangeCheck = smoothstep(0.0, 1.0, radius / uniformData.bias);

      var a = 1.0 ;
      if(offsetPosition >= (samplePos.z + uniformData.bias)){
        a = 0.0 ;
      }
      a = a * rangeCheck ;
      occlusion = occlusion + a ;
    }

    occlusion = 1.0 - ( occlusion / f32(kernelSize) * texNormal.w );
    occlusion = pow(occlusion, uniformData.aoPower) ;

    // color = color * occlusion ;

    textureStore(outTex, fragCoord , vec4(occlusion));
  }
`,bh=`
@group(0) @binding(0) var<storage, read_write> rayTraceBuffer : array<RayTraceRetData>;
  @group(0) @binding(1) var colorMap : texture_2d<f32>;
  @group(0) @binding(2) var ssrMapSampler : sampler;
  @group(0) @binding(3) var ssrMap : texture_2d<f32>;
  @group(0) @binding(4) var outTex : texture_storage_2d<rgba16float, write>;

  var<private> colorTexSize: vec2<u32>;
  var<private> ssrTexSize: vec2<u32>;
  var<private> fragCoord: vec2<i32>;
  var<private> ssrCoord: vec2<i32>;

  struct RayTraceRetData{
    skyColor:vec3<f32>,
    roughness:f32,

    hitCoord:vec2<f32>,
    alpha:f32,
    fresnel:f32,
  }
  
  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    fragCoord = vec2<i32>( globalInvocation_id.xy );
    colorTexSize = textureDimensions(colorMap).xy;
    ssrTexSize = textureDimensions(ssrMap).xy;
    if(fragCoord.x >= i32(colorTexSize.x) || fragCoord.y >= i32(colorTexSize.y)){
        return;
    }
    let scale:f32 = f32(ssrTexSize.x) / f32(colorTexSize.x);
    ssrCoord = vec2<i32>(vec2<f32>(fragCoord.xy) * scale);
    let index = ssrCoord.x + ssrCoord.y * i32(ssrTexSize.x);
    let hitData = rayTraceBuffer[index];
    var color = textureLoad(colorMap, fragCoord , 0);
    var uv01 = vec2<f32>(f32(fragCoord.x), f32(fragCoord.y));
    uv01 = uv01 / vec2<f32>(colorTexSize - 1);
    
    var ssrColor = textureSampleLevel(ssrMap, ssrMapSampler, uv01, 0.0);
    var tc = mix(color, ssrColor, hitData.fresnel) ;
    var outColor = tc ;
    outColor.a = color.a ; 
    textureStore(outTex, fragCoord , outColor );
  }

`,wh=`
  struct SSRUniformData {
    ssrBufferSizeX: f32,
    ssrBufferSizeY: f32,
    colorMapSizeX: f32,
    colorMapSizeY: f32,

    fadeEdgeRatio: f32,
    rayMarchRatio: f32,
    fadeDistanceMin: f32,
    fadeDistanceMax: f32,
    
    mixThreshold: f32,
    roughnessThreshold: f32,
    reflectionRatio: f32,
    powDotRN: f32,

    randomSeedX: f32,
    randomSeedY: f32,
    slot1: f32,
    slot2: f32,
  };

  struct RayTraceRetData{
    skyColor:vec3<f32>,
    roughness:f32,

    hitCoord:vec2<f32>,
    alpha:f32,
    fresnel:f32,
  }

  @group(0) @binding(0) var<uniform> ssrUniform: SSRUniformData;
  @group(0) @binding(1) var<storage, read_write> rayTraceBuffer : array<RayTraceRetData>;
  @group(0) @binding(2) var<storage, read_write> ssrColorData : array<vec4<f32>>;
  @group(0) @binding(3) var<storage, read_write> historyPosition : array<vec4<f32>>;

  @group(0) @binding(4) var colorMap: texture_2d<f32>;
  @group(0) @binding(5) var outTex : texture_storage_2d<rgba16float, write>;

  var<private> ssrBufferCoord: vec2<i32>;
  var<private> colorTexSize: vec2<i32>;
  var<private> bufferData: RayTraceRetData;
  var<private> ssrBufferSize: vec2<i32>;
  var<private> coordIndex: i32;

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    ssrBufferCoord = vec2<i32>( globalInvocation_id.xy );
    ssrBufferSize = vec2<i32>(i32(ssrUniform.ssrBufferSizeX), i32(ssrUniform.ssrBufferSizeY));
    colorTexSize = vec2<i32>(i32(ssrUniform.colorMapSizeX), i32(ssrUniform.colorMapSizeY));

    if(ssrBufferCoord.x >= ssrBufferSize.x || ssrBufferCoord.y >= ssrBufferSize.y){
        return;
    }

    coordIndex = ssrBufferCoord.x + ssrBufferCoord.y * ssrBufferSize.x;
    bufferData = rayTraceBuffer[coordIndex];
    var oc = vec4<f32>(0.0, 0.0, 0.0, -1.0);
    
    var mixFactor = historyPosition[coordIndex].w;
    
    if(bufferData.alpha >= 0.0 && bufferData.roughness < ssrUniform.roughnessThreshold){
      let roughness = clamp(bufferData.roughness, 0.0, 1.0);
      let prefilterColor = bufferData.skyColor;
      var ssrColor = textureLoad(colorMap, vec2<i32>(bufferData.hitCoord), 0);
      ssrColor.w = bufferData.alpha;
      oc = ssrColor;
    }
    let skyColor = vec4<f32>(bufferData.skyColor, 1.0);
    oc = mix(oc, skyColor, 1.0 - bufferData.alpha);
    
    let lastColor = ssrColorData[coordIndex];
    var newColor = mix(oc, lastColor, mixFactor);
    newColor.w = oc.w;
    
    ssrColorData[coordIndex] = newColor;
    
    textureStore(outTex, ssrBufferCoord , newColor);
  }
`,Th=`
  #include "GlobalUniform"

  struct SSRUniformData {
    ssrBufferSizeX: f32,
    ssrBufferSizeY: f32,
    colorMapSizeX: f32,
    colorMapSizeY: f32,

    fadeEdgeRatio: f32,
    rayMarchRatio: f32,
    fadeDistanceMin: f32,
    fadeDistanceMax: f32,
    
    mixThreshold: f32,
    roughnessThreshold: f32,
    reflectionRatio: f32,
    powDotRN: f32,

    randomSeedX: f32,
    randomSeedY: f32,
    slot1: f32,
    slot2: f32,
  };

  struct HitData{
    hitPos:vec3<f32>,
    hitNormal:vec3<f32>,
    fadeAlpha:vec4<f32>,
    hitCoord:vec2<i32>,
    hitResult:i32,
    hitSky:i32,
  };

  struct RayTraceRetData{
    skyColor:vec3<f32>,
    roughness:f32,

    hitCoord:vec2<f32>,
    alpha:f32,
    fresnel:f32,
  }

  @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
  @group(0) @binding(1) var<uniform> ssrUniform: SSRUniformData;
  @group(0) @binding(2) var<storage, read_write> rayTraceBuffer : array<RayTraceRetData>;
  @group(0) @binding(4) var<storage, read_write> historyPosition : array<vec4<f32>>;

  @group(0) @binding(5) var zBufferTexture : texture_2d<f32>;
  @group(0) @binding(6) var normalBufferTex : texture_2d<f32>;
  @group(0) @binding(7) var materialBufferTex : texture_2d<f32>;
  @group(0) @binding(8) var prefilterMapSampler: sampler;
  @group(0) @binding(9) var prefilterMap: texture_cube<f32>;

  var<private> rayOrigin: vec3<f32>;
  var<private> rayDirection: vec3<f32>;
  var<private> cameraPosition: vec3<f32>;
  var<private> reflectionDir: vec3<f32>;
  var<private> colorTexSize: vec2<i32>;
  var<private> fragCoordColor: vec2<i32>;
  var<private> ssrBufferCoord: vec2<i32>;
  var<private> ssrBufferSize: vec2<i32>;
  var<private> hitData: HitData;
  var<private> rayTraceRet: RayTraceRetData;
  var<private> worldPosition: vec3<f32>;
  var<private> worldNormal: vec3<f32>;
  var<private> roughness: f32;
  var<private> fresnel: f32;

  var<private> historyPos: vec3<f32>;
  var<private> coordIndex: i32;

  var <private> PI: f32 = 3.14159;

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    ssrBufferCoord = vec2<i32>( globalInvocation_id.xy);
    ssrBufferSize = vec2<i32>(i32(ssrUniform.ssrBufferSizeX), i32(ssrUniform.ssrBufferSizeY));
    if(ssrBufferCoord.x >= ssrBufferSize.x || ssrBufferCoord.y >= ssrBufferSize.y){
        return;
    }
    coordIndex = ssrBufferCoord.x + ssrBufferCoord.y * ssrBufferSize.x;

    colorTexSize = vec2<i32>(i32(ssrUniform.colorMapSizeX), i32(ssrUniform.colorMapSizeY));
    fragCoordColor = convertColorCoordFromSSRCoord(ssrBufferCoord);

    hitData.fadeAlpha = vec4<f32>(0.0);
    hitData.hitCoord = vec2<i32>(0);
    hitData.hitResult = 0;
    hitData.hitNormal = vec3<f32>(0.0, 1.0, 0.0);
    hitData.hitSky = 1;

    worldPosition = textureLoad(zBufferTexture, fragCoordColor , 0).xyz;
    historyPos = historyPosition[coordIndex].xyz;
    
    var mixFactor = 0.2;
    if(length(historyPos - worldPosition) < ssrUniform.mixThreshold){
        mixFactor = 0.9;
    }
    historyPosition[coordIndex] = vec4<f32>(worldPosition, mixFactor);
    
    let normal_v4 = textureLoad(normalBufferTex, fragCoordColor , 0);
    worldNormal = normalize(vec3<f32>(normal_v4.xyz) * 2.0 - 1.0);
    let materialData = textureLoad(materialBufferTex, fragCoordColor , 0 );
    let roughness = materialData.g * (1.0 - materialData.b);
    fresnel = (1.0 - roughness) * ssrUniform.reflectionRatio;

    cameraPosition = vec3<f32>(standUniform.cameraWorldMatrix[3].xyz);
    rayOrigin = vec3<f32>(worldPosition.xyz);

    rayDirection = normalize(vec3<f32>(worldPosition.xyz - cameraPosition));
    
    var randomSeed = fract(ssrUniform.randomSeedX + worldPosition.x);
    rand_seed.x = randomSeed;
    rand_seed.y = fract(ssrUniform.randomSeedY + worldPosition.y + worldPosition.z);
    randomSeed = rand();
    
    let normalRandom = makeRandomDirection(worldNormal, u32(randomSeed * 256.0), 256, roughness);
    
    reflectionDir = normalize(reflect(rayDirection, normalRandom));

    if(normal_v4.w > 0.5 && roughness < ssrUniform.roughnessThreshold){
      let uvOrigin = vec2<f32>(f32(fragCoordColor.x), f32(fragCoordColor.y));
      let rayMarchPosition = rayOrigin + reflectionDir * 100.0;
      var uvRayMarch = standUniform.projMat * (standUniform.viewMat * vec4<f32>(rayMarchPosition, 1.0));
      var uvOffset = (vec2<f32>(uvRayMarch.xy / uvRayMarch.w) + 1.0) * 0.5;
      uvOffset.y = 1.0 - uvOffset.y;
      uvOffset = uvOffset * vec2<f32>(colorTexSize - 1) - uvOrigin;
      uvOffset = normalize(uvOffset);

      rayTrace(uvOffset);
      if(hitData.hitResult == 1){
          hidingArtifact();
          rayTraceRet.alpha = hitData.fadeAlpha.x * hitData.fadeAlpha.y * hitData.fadeAlpha.z * hitData.fadeAlpha.w;
          if(hitData.hitSky == 1){
            rayTraceRet.alpha = 0.0;
          }
      }else{
        rayTraceRet.alpha = 0.0;
      }
      rayTraceRet.skyColor = getSkyColor();
    }else{
      rayTraceRet.alpha = -1.0;
      rayTraceRet.skyColor = vec3<f32>(0.0);
    }

    rayTraceRet.roughness = roughness;
    rayTraceRet.fresnel = fresnel;
    rayTraceRet.hitCoord = vec2<f32>(hitData.hitCoord);

    let index:i32 = ssrBufferCoord.x + ssrBufferCoord.y * ssrBufferSize.x;
    rayTraceBuffer[index] = rayTraceRet;
  }

  fn makeRandomDirection(srcDirection:vec3<f32>, i:u32, SAMPLE_COUNT:u32, roughness:f32) -> vec3<f32>
  {
    var N: vec3<f32> = normalize(srcDirection);
    var Xi:vec2<f32> = hammersley(i, SAMPLE_COUNT);
    return ImportanceSampleGGX(Xi, N, roughness);
  }

  fn hammersley( i : u32 ,  N : u32 ) -> vec2<f32>
  {
    // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
    var bits = (i << 16u) | (i >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    var rdi = f32(bits) * 2.3283064365386963e-10;
    return vec2<f32>(f32(i) /f32(N), rdi);
  }

  fn ImportanceSampleGGX( Xi:vec2<f32>, N:vec3<f32>, roughness:f32) ->vec3<f32>
  {
    var a = roughness*roughness;

    var phi = 2.0 * PI * Xi.x;
    var cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
    var sinTheta = sqrt(1.0 - cosTheta*cosTheta);

    // from spherical coordinates to cartesian coordinates
    var H:vec3<f32>;
    H.x = cos(phi) * sinTheta;
    H.y = sin(phi) * sinTheta;
    H.z = cosTheta;

    // from tangent-space vector to world-space sample vector
  var up:vec3<f32>;
    if(abs(N.z) < 0.999)
    {
        up = vec3<f32>(0.0, 0.0, 1.0);
    }
    else
    {
        up = vec3<f32>(1.0, 0.0, 0.0);
    }
  var tangent:vec3<f32>  = normalize(cross(up, N));
  var bitangent:vec3<f32> = cross(N, tangent);
  var sampleVec:vec3<f32> = tangent * H.x + bitangent * H.y + N * H.z;
  return normalize(sampleVec);
  }

  var<private> rand_seed :vec2<f32> = vec2<f32>(0.0);
  fn rand() -> f32 {
    rand_seed.x = fract(cos(dot(rand_seed, vec2<f32>(23.14077926, 232.61690225))) * 136.8168);
    rand_seed.y = fract(cos(dot(rand_seed, vec2<f32>(54.47856553, 345.84153136))) * 534.7645);
    return rand_seed.y;
  }

  fn getSkyColor() -> vec3<f32>{
    let calcRoughness = clamp(roughness, 0.0, 1.0);
    let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
    var prefilterColor = textureSampleLevel(prefilterMap, prefilterMapSampler, reflectionDir, calcRoughness * MAX_REFLECTION_LOD);
    return LinearToGammaSpace(vec3<f32>(prefilterColor.xyz)) * standUniform.skyExposure;
  }

  fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
      var linRGB1 = max(linRGB, vec3<f32>(0.0));
      linRGB1 = pow(linRGB1, vec3<f32>(0.4166666567325592));
      return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
  }

  fn convertColorCoordFromSSRCoord(coord:vec2<i32>) -> vec2<i32>{
    let color_ssr_ratio = ssrUniform.colorMapSizeX / ssrUniform.ssrBufferSizeX;
    let targetCoord = vec2<f32>(coord) * color_ssr_ratio;
    return vec2<i32>(targetCoord);
  }

  fn hidingArtifact(){
    let texSizeF32 = vec2<f32>(f32(colorTexSize.x), f32(colorTexSize.y));
    let halfTexSizeF32 = texSizeF32 * 0.5;

    //near screen edge
    var distance2Center = abs(vec2<f32>(f32(hitData.hitCoord.x), f32(hitData.hitCoord.y)) - halfTexSizeF32);
    let halfEdgeSize:f32 = min(texSizeF32.x, texSizeF32.y) * clamp(0.01, ssrUniform.fadeEdgeRatio, 1.0) * 0.5;
    var distance2Edge = min(vec2<f32>(halfEdgeSize), halfTexSizeF32 - distance2Center);
    var ratioXY = distance2Edge / halfEdgeSize;
    hitData.fadeAlpha.x = sqrt(ratioXY.x * ratioXY.y);

    //back face hit
    var backFaceBias = max(0.0, dot(hitData.hitNormal, -reflectionDir));
    hitData.fadeAlpha.y = pow(backFaceBias, max(0.0001, ssrUniform.powDotRN));

    //screen distance ratio
    let maxLength = max(f32(colorTexSize.x), f32(colorTexSize.y)) * ssrUniform.rayMarchRatio;
    let screenPointer = hitData.hitCoord - fragCoordColor;
    var screenDistance = length(vec2<f32>(f32(screenPointer.x), f32(screenPointer.y)));
    screenDistance = clamp(screenDistance / maxLength, 0.0, 1.0);
    hitData.fadeAlpha.z = 1.0 - screenDistance;

    //position distance ratio
    var fadeDistance = length(vec3<f32>(hitData.hitPos - cameraPosition));
    var dFar = ssrUniform.fadeDistanceMax;
    var dNear = ssrUniform.fadeDistanceMin;
    dFar = max(1.0, dFar);
    dNear = clamp(dNear, 0.001, dFar - 0.001);
    fadeDistance = clamp(fadeDistance, dNear, dFar);
    fadeDistance = (fadeDistance - dNear) / (dFar - dNear);
    hitData.fadeAlpha.w = 1.0 - fadeDistance;
  }

  fn rayTrace(rayMarchDir:vec2<f32>){
    let stepLength = 4.0;
    let maxLength = max(f32(colorTexSize.x), f32(colorTexSize.y)) * ssrUniform.rayMarchRatio;
    for(var i:f32 = 1.0; i < maxLength; i = i + stepLength){
        let offsetFloat32 = i * rayMarchDir;
        var uv = fragCoordColor + vec2<i32>(i32(offsetFloat32.x), i32(offsetFloat32.y));
        let hitRet = rayInterestScene(uv);
        if(hitRet > 0){
          hitData.hitResult = hitRet;
          break;
        }
    }
    if(hitData.hitResult == 1){
        let fromUV = hitData.hitCoord;
        for(var i:f32 = -stepLength; i <= 0.0; i = i + 1.0){
          let offsetFloat32 = i * rayMarchDir;
          var uv = fromUV + vec2<i32>(i32(offsetFloat32.x), i32(offsetFloat32.y));
          let hitRet = rayInterestScene(uv);
          if(hitRet == 1){
            let WN = textureLoad(normalBufferTex, hitData.hitCoord , 0 );
            if(WN.w > 0.5){
                hitData.hitSky = 0;
            }
            let normal = vec3<f32>(WN.xyz) * 2.0 - 1.0;
            hitData.hitNormal = normalize(vec3<f32>(normal.xyz));
            break;
          }
        }
    }
  }

  fn rayInterestScene(uv:vec2<i32>) -> i32 {
    if(uv.x < 0 || uv.y < 0 || uv.x >= colorTexSize.x || uv.y >= colorTexSize.y){
      return 2;
    }else{
      let hitPos = textureLoad(zBufferTexture, uv , 0 );
      let testDir = normalize(vec3<f32>(hitPos.xyz - rayOrigin));
      let cosValue = dot(reflectionDir, testDir);

      if(cosValue > 0.9996){
        let cross1 = cross(reflectionDir, -rayDirection);
        let cross2 = cross(reflectionDir, testDir);
        if(dot(cross1, cross2) > 0.0){
          hitData.hitPos = vec3<f32>(hitPos.xyz);
          hitData.hitCoord = uv;
          return 1;
        }
      }
    }
    return 0;
  }
`,Ch=`
    @group(0) @binding(0) var<storage, read_write> preColor : array<vec4<f32>>;
    @group(0) @binding(1) var preColorTex : texture_storage_2d<rgba16float, write>;

    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;
    var<private> coordIndex: i32;
    
    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
      fragCoord = vec2<i32>( globalInvocation_id.xy );
      texSize = textureDimensions(preColorTex).xy;
      if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
          return;
      }
      coordIndex = fragCoord.x + fragCoord.y * i32(texSize.x);
      textureStore(preColorTex, fragCoord , preColor[coordIndex]);
    }
 `,Mh=`
    struct TAAData{
      preProjMatrix: mat4x4<f32>,
      preViewMatrix: mat4x4<f32>,
      jitterFrameIndex: f32,
      blendFactor: f32,
      sharpFactor: f32,
      sharpPreBlurFactor: f32,
      jitterX: f32,
      jitterY: f32,
      slot0: f32,
      slot1: f32,
    }
    @group(0) @binding(0) var<uniform> taaData: TAAData;
    @group(0) @binding(1) var inTex : texture_2d<f32>;
    @group(0) @binding(2) var outTex : texture_storage_2d<rgba16float, write>;

    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;

    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
      fragCoord = vec2<i32>( globalInvocation_id.xy );
      texSize = textureDimensions(outTex).xy;
      if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
          return;
      }
      
      let c0 = textureLoad(inTex, vec2<i32>(fragCoord.x, fragCoord.y - 1), 0);
      let c1 = textureLoad(inTex, vec2<i32>(fragCoord.x, fragCoord.y + 1), 0);
      let c2 = textureLoad(inTex, vec2<i32>(fragCoord.x - 1, fragCoord.y), 0);
      let c3 = textureLoad(inTex, vec2<i32>(fragCoord.x + 1, fragCoord.y), 0);
      
      var roundColor = (c0 + c1 + c2 + c3) * 0.25;
      let originColor = textureLoad(inTex, fragCoord, 0);
      let blurColor = mix(roundColor, originColor, taaData.sharpPreBlurFactor);
      var oc = (originColor - blurColor * taaData.sharpFactor) / (1.0 - taaData.sharpFactor);
      oc = clamp(oc, vec4<f32>(0.0), oc);
      textureStore(outTex, fragCoord , oc);
    }
`,Ph=`
#include "GlobalUniform"

struct TAAData{
  preProjMatrix: mat4x4<f32>,
  preViewMatrix: mat4x4<f32>,
  jitterFrameIndex: f32,
  blendFactor: f32,
  sharpFactor: f32,
  sharpPreBlurFactor: f32,
  jitterX: f32,
  jitterY: f32,
  slot0: f32,
  slot1: f32,
}

@group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
@group(0) @binding(1) var<uniform> taaData: TAAData;
@group(0) @binding(2) var<storage, read_write> preColorBuffer : array<vec4<f32>>;

@group(0) @binding(3) var preColorTexSampler : sampler;
@group(0) @binding(4) var preColorTex : texture_2d<f32>;
@group(0) @binding(5) var posTex : texture_2d<f32>;
@group(0) @binding(6) var inTexSampler : sampler;
@group(0) @binding(7) var inTex : texture_2d<f32>;
@group(0) @binding(8) var outTex : texture_storage_2d<rgba16float, write>;

var<private> texSize: vec2<u32>;
var<private> fragCoord: vec2<i32>;
var<private> coordIndex: i32;
var<private> color_min: vec4<f32>;
var<private> color_max: vec4<f32>;
var<private> color_avg: vec4<f32>;
var<private> re_proj_uv01: vec2<f32>;
var<private> FLT_EPS:f32 = 5.960464478e-8;  // 2^-24, machine epsilon: 1 + EPS = 1 (half of the ULP for 1.0f)

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
  fragCoord = vec2<i32>( globalInvocation_id.xy );
  texSize = textureDimensions(inTex).xy;
  if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
      return;
  }
  let frame = standUniform.frame;
  coordIndex = fragCoord.x + fragCoord.y * i32(texSize.x);
  
  let oc = blendColor();
  preColorBuffer[coordIndex] = oc;
  textureStore(outTex, fragCoord , oc);
}

fn blendColor() -> vec4<f32>
{
  var preCoord = fragCoord;
  var mixWeight = 1.0;
  re_proj_uv01 = vec2<f32>(0.0);
  var reProjectionCoord:vec2<f32> = vec2<f32>(fragCoord);
  //var jitterUVOffset = 0.5 * vec2<f32>(taaData.jitterX, -taaData.jitterY);
  if(taaData.jitterFrameIndex > 0.5){
      var wPos = textureLoad(posTex, fragCoord, 0);
      let ndc = taaData.preProjMatrix * (taaData.preViewMatrix * vec4<f32>(wPos.xyz, 1.0));
      re_proj_uv01 = vec2<f32>(ndc.x, -ndc.y) / ndc.w;
      re_proj_uv01 = (re_proj_uv01 + 1.0) * 0.5;
      
      if(re_proj_uv01.x >= 0.0 && re_proj_uv01.x <= 1.0 && re_proj_uv01.y >= 0.0 && re_proj_uv01.y <= 1.0){
          mixWeight = taaData.blendFactor;
          //reProjectionCoord = re_proj_uv01 + jitterUVOffset;
          reProjectionCoord.x = re_proj_uv01.x * f32(texSize.x - 1);
          reProjectionCoord.y = re_proj_uv01.y * f32(texSize.y - 1);
          preCoord = vec2<i32>(reProjectionCoord);
      }else{ 
          //outside of screen
          mixWeight = 1.0;
      }
  }
  
  var curUV01 = vec2<f32>(fragCoord) / vec2<f32>(texSize - 1);
  //curUV01 += jitterUVOffset;
  
  let curColor = textureSampleLevel(inTex, inTexSampler, curUV01, 0.0);
  
  let preIndex = preCoord.x + preCoord.y * i32(texSize.x);
  var preColor = textureSampleLevel(preColorTex, preColorTexSampler, re_proj_uv01, 0.0);
  
  //minmax9(fragCoord);
  minmax4(fragCoord);
  
  preColor = clip_aabb(color_min.xyz, color_max.xyz, color_avg, preColor);
  var outColor = mix(preColor, curColor, mixWeight);

  return outColor;
}

fn clampCoord(coord0:vec2<i32>) -> vec2<i32>{
  return clamp(coord0, vec2<i32>(0), vec2<i32>(texSize - 1));
}

fn minmax4(coord:vec2<i32>) {
      let uv0 = clampCoord(vec2<i32>(coord.x - 1, coord.y));
      let uv1 = clampCoord(vec2<i32>(coord.x, coord.y - 1));
      let uv2 = clampCoord(vec2<i32>(coord.x, coord.y + 1));
      let uv3 = clampCoord(vec2<i32>(coord.x + 1, coord.y));
      
      let c0 = textureLoad(inTex, uv0, 0);
      let c1 = textureLoad(inTex, uv1, 0);
      let c2 = textureLoad(inTex, uv2, 0);
      let c3 = textureLoad(inTex, uv3, 0);
      
      color_min = min(c0, min(c1, min(c2, c3)));
      color_max = max(c0, max(c1, max(c2, c3)));
      color_avg = (c0 + c1 + c2 + c3) * 0.25;
  }
  
 fn minmax9(coord:vec2<i32>) {
      let uv0 = clampCoord(vec2<i32>(coord.x - 1, coord.y - 1));
      let uv1 = clampCoord(vec2<i32>(coord.x - 1, coord.y));
      let uv2 = clampCoord(vec2<i32>(coord.x - 1, coord.y + 1));
      let uv3 = clampCoord(vec2<i32>(coord.x, coord.y - 1));
      let uv4 = clampCoord(vec2<i32>(coord.x, coord.y));
      let uv5 = clampCoord(vec2<i32>(coord.x, coord.y + 1));
      let uv6 = clampCoord(vec2<i32>(coord.x + 1, coord.y - 1));
      let uv7 = clampCoord(vec2<i32>(coord.x + 1, coord.y));
      let uv8 = clampCoord(vec2<i32>(coord.x + 1, coord.y + 1));
      
      let ctl = textureLoad(inTex, uv0, 0);
      let ctc = textureLoad(inTex, uv1, 0);
      let ctr = textureLoad(inTex, uv2, 0);
      let cml = textureLoad(inTex, uv3, 0);
      let cmc = textureLoad(inTex, uv4, 0);
      let cmr = textureLoad(inTex, uv5, 0);
      let cbl = textureLoad(inTex, uv6, 0);
      let cbc = textureLoad(inTex, uv7, 0);
      let cbr = textureLoad(inTex, uv8, 0);
      
      color_min = min(ctl, min(ctc, min(ctr, min(cml, min(cmc, min(cmr, min(cbl, min(cbc, cbr))))))));
      color_max = max(ctl, max(ctc, max(ctr, max(cml, max(cmc, max(cmr, max(cbl, max(cbc, cbr))))))));
      color_avg = (ctl + ctc + ctr + cml + cmc + cmr + cbl + cbc + cbr) / 9.0;
  }
  
  fn clip_aabb(aabb_max:vec3<f32>, aabb_min:vec3<f32>, color_avg:vec4<f32>, input_texel:vec4<f32>) -> vec4<f32>
  {
      var p_clip:vec3<f32> = 0.5 * (aabb_max + aabb_min);
      var e_clip:vec3<f32> = 0.5 * (aabb_max - aabb_min) + FLT_EPS;
      var v_clip:vec4<f32> = input_texel - vec4<f32>(p_clip, color_avg.w);
      var v_unit:vec3<f32> = v_clip.xyz / e_clip;
      var a_unit:vec3<f32> = abs(v_unit);
      var ma_unit:f32 = max(a_unit.x, max(a_unit.y, a_unit.z));

      if (ma_unit > 1.0){
          return vec4<f32>(p_clip, color_avg.w) + v_clip / ma_unit;
      }else{
          return input_texel;
      }
  }`,wc=`
struct ConstUniform {
    projMat: mat4x4<f32>,
    viewMat: mat4x4<f32>,
    cameraWorldMatrix: mat4x4<f32>,
    pvMatrixInv : mat4x4<f32>,
    shadowMatrix: array<mat4x4<f32>,8>,
    CameraPos: vec3<f32>,
    
    frame: f32,
    time: f32,
    delta: f32,
    shadowBias: f32,
    skyExposure: f32,
    renderPassState:f32,
    quadScale: f32,
    hdrExposure: f32,
    
    renderState_left: i32,
    renderState_right: i32,
    renderState_split: f32,

    mouseX: f32,
    mouseY: f32,
    windowWidth: f32,
    windowHeight: f32,

    near: f32,
    far: f32,

    pointShadowBias: f32,
    shadowMapSize: f32,
    shadowSoft: f32,
}

struct RenderBound{
    index:f32,
}

struct Uniforms {
    matrix : array<mat4x4<f32>>
};

@group(0) @binding(0) var<storage, read> models : Uniforms;
@group(0) @binding(1) var<uniform> standUniform: ConstUniform;
@group(0) @binding(2) var<storage, read> planes: array<vec4<f32>,7>;
@group(0) @binding(3) var<storage, read> cullingList: array<RenderBound>;
@group(0) @binding(4) var<storage,read_write> outBuffer: array<f32>;


var<private> boundPoints : array<vec4<f32>,8> ;   

fn IsInClipSpace( coord : vec4<f32> ) -> bool {
    return -coord.w <= coord.x && coord.x <= coord.w
        && -coord.w <= coord.y && coord.y <= coord.w
        && -coord.w <= coord.z && coord.z <= coord.w;
}

fn IsOutsideThePlane( plane: vec4<f32>, pointPosition : vec3<f32> ) -> bool{
    if(dot(plane.xyz, pointPosition) + plane.w > 0.0){
        return true;
    }
    return false;
}

fn containsBox( size:vec3<f32> , center:vec3<f32> ) -> f32 {
    var c = 0.0 ;
    var d = 0.0 ;

    var r = max(size.x, size.y);
    var sr = max(r , size.z);
    var scx = center.x;
    var scy = center.y;
    var scz = center.z;

    for(var p:i32 = 0; p < 6 ; p = p + 1 ){
        var plane = planes[p];
        d = plane.x * scx + plane.y * scy + plane.z * scz + plane.w;
        if (d <= -sr) {
        return 0.0;
        }
        if (d > sr) {
        c+=1.0;
        }
    }

    if( c >= 6.0 ){
        return 2.0 ;
    }else{
        return 1.0 ;
    }
}

@compute @workgroup_size( 128 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
    let id = globalInvocation_id.x ;
    if(id + 1u > u32(planes[6].x) ){
        outBuffer[id] = f32(0.0); 
        return ;
    }

    let renderBound = cullingList[id];
    let boundID = i32(renderBound.index) ;
    var plane = planes[0];

    let worldMatrix = models.matrix[boundID];
    let projMat = standUniform.projMat ;

    let const_boundMin : vec3<f32> = vec3<f32>(-0.5,-0.5,-0.5) ;   
    let const_boundMax : vec3<f32> = vec3<f32>(0.5,0.5,0.5) ;   

    let boundMin = worldMatrix * vec4<f32>(const_boundMin, 1.0);
    let boundMax = worldMatrix * vec4<f32>(const_boundMax, 1.0);

    let size = abs( boundMax.xyz - boundMin.xyz ) * 0.65 ;
    let center = worldMatrix[3].xyz ;

    var isIn :f32 = 0.0 ;

    isIn = containsBox(size,center);

    outBuffer[id] = f32(isIn); 
}
`,ys=`
#include "Common_vert"
#include "FragmentVarying"
#include "GlobalUniform"

struct FragmentOutput {
    @location(0) o_Position: vec4<f32>,
    @location(1) o_Normal: vec4<f32>,
    @location(2) o_Color: vec4<f32>
};

struct MaterialUniform {
    baseColor: vec4<f32>,
    emissiveColor: vec4<f32>,
    emissiveIntensity: f32,
    normalScale: f32,
    alphaCutoff: f32
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;

@group(1) @binding(auto)
var baseMapSampler: sampler;
@group(1) @binding(auto)
var baseMap: texture_2d<f32>;

@group(1) @binding(auto)
var normalMapSampler: sampler;
@group(1) @binding(auto)
var normalMap: texture_2d<f32>;

@group(1) @binding(auto)
var emissiveMapSampler: sampler;
@group(1) @binding(auto)
var emissiveMap: texture_2d<f32>;

fn vert(inputData:VertexAttributes) -> VertexOutput {
    ORI_Vert(inputData) ;
    return ORI_VertexOut ;
}

var<private> ORI_FragmentOutput: FragmentOutput;
var<private> ORI_VertexVarying: FragmentVarying;

@fragment
fn FragMain(vertex_varying:FragmentVarying) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    var texColor = textureSample(baseMap, baseMapSampler, ORI_VertexVarying.fragUV0.xy );

    var emissive = textureSample(emissiveMap, emissiveMapSampler, ORI_VertexVarying.fragUV0.xy ).rgb ;
    let intensity = materialUniform.emissiveIntensity * materialUniform.emissiveColor.a ;
    emissive = emissive.rgb * materialUniform.emissiveColor.rgb ;
    emissive = convertToHDRRGB(emissive,intensity);

    if (materialUniform.alphaCutoff-texColor.w > 0.0) {
        discard ;
    }

    var o_Position = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,emissive.r) ;
    var o_Normal = vec4<f32>((ORI_VertexVarying.vWorldNormal.xyz * 0.5 + 0.5 ),emissive.g) ;
    var o_Color = vec4<f32>((texColor * materialUniform.baseColor).rgb , emissive.b )  ;
    return FragmentOutput(o_Position,o_Normal,vec4<f32>(o_Color));
}

fn convertToHDRRGB( color : vec3<f32> , ins:f32 ) -> vec3<f32> {
    var hdrColor = vec3<f32>(0.0,0.0,0.0);
    hdrColor.r = color.r * pow(2.4, ins);
    hdrColor.g = color.g * pow(2.4, ins);
    hdrColor.b = color.b * pow(2.4, ins);
    return hdrColor;
}
`,Eh=`
#include "GlobalUniform"

struct uniformData {
    exposure: f32,
    roughness: f32
};

struct FragmentOutput {
    @location(0) o_Position: vec4<f32>,
    @location(1) o_Normal: vec4<f32>,
    @location(2) o_Color: vec4<f32>
};

@group(1) @binding(4)
var baseMapSampler: sampler;
@group(1) @binding(5)
var baseMap: texture_cube<f32>;

@group(2) @binding(0)
var<uniform> global: uniformData;

fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
    var linRGB1: vec3<f32>;
    linRGB1 = linRGB;
    linRGB1 = max(linRGB1, vec3<f32>(0.0, 0.0, 0.0));
    linRGB1.x = pow(linRGB1.x, 0.4166666567325592);
    linRGB1.y = pow(linRGB1.y, 0.4166666567325592);
    linRGB1.z = pow(linRGB1.z, 0.4166666567325592);
    return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
}

@fragment
fn main(@location(0) fragUV: vec2<f32>, @location(1) vWorldPos: vec4<f32>, @location(2) vWorldNormal: vec3<f32>) -> FragmentOutput {
    let maxLevel: u32 = textureNumLevels(baseMap);
    let textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
    let o_Color = 0.618 * vec4<f32>(LinearToGammaSpace(textureColor) * globalUniform.skyExposure , 1.0);
    let o_Normal = vec4(vWorldNormal,1.0) ;
    let o_Position = vec4<f32>(vWorldPos.xyz,100000.0) ;
    return FragmentOutput(o_Position,o_Normal,o_Color);
}
`,Dh=`
    @group(0) @binding(0) var<storage,read_write> visibleBuffer: array<f32>;
    @group(0) @binding(1) var zBufferTexture : texture_2d<f32>;

    @compute @workgroup_size(8, 8, 1)
    fn CsMain( @builtin(global_invocation_id) globalInvocation_id : vec3<u32> ) {
        var fragCoord = vec2<i32>( globalInvocation_id.xy );
        let md = textureLoad(zBufferTexture,fragCoord,0);

        let meshID = i32(floor( md.w + 0.1 ));
        if (meshID >= 0) {
            visibleBuffer[meshID] = 1.0 ;
        }
    }
`,Tc=`
    #include "FragmentVarying"
    #include "FragmentOutput.wgsl"
    #include "GlobalUniform"
    #include "Lit_Parmers.wgsl"
    #include "PBRLit.wgsl"

    var<private> ORI_FragmentOutput: FragmentOutput;
    var<private> ORI_VertexVarying: FragmentVarying;
    var<private> ORI_ShadingInput: ShadingStruct;

    @fragment
    fn FragMain( vertex_varying:FragmentVarying ) -> FragmentOutput {
        ORI_VertexVarying = vertex_varying;
        ORI_FragmentOutput.color = vec4<f32>(1.0, 0.0, 0.0, 1.0);

        #if USE_WORLDPOS
        ORI_FragmentOutput.worldPos = ORI_VertexVarying.vWorldPos;
        #endif
        #if USEGBUFFER
        ORI_FragmentOutput.worldNormal = vec4<f32>(ORI_VertexVarying.vWorldNormal,1.0); 
        ORI_FragmentOutput.material = vec4<f32>(0.0,1.0,0.0,0.0);
        #endif

        frag();

        #if USE_DEBUG
        debugFragmentOut();
        #endif
        return ORI_FragmentOutput ;
    }
`,Cc=`
    struct FragmentOutput {
        @location(0) color: vec4<f32>,
        #if USE_WORLDPOS
            @location(1) worldPos: vec4<f32>,
        #endif
        #if USEGBUFFER
            @location(2) worldNormal: vec4<f32>,
            @location(3) material: vec4<f32>
        #endif
    };
`,Mc=`
    struct LightData {
        index:f32,
        lightType:i32,
        radius:f32,
        linear:f32,
        
        position:vec3<f32>,
        lightMatrixIndex:f32,

        direction:vec3<f32>,
        quadratic:f32,

        lightColor:vec3<f32>,
        intensity:f32,

        innerCutOff :f32,
        outerCutOff:f32,
        range :f32,
        castShadow:i32,

        lightTangent:vec3<f32>,
        ies:f32,
    };

    const PointLightType = 1;
    const DirectLightType = 2;
    const SpotLightType = 3;

    struct ClusterBox {
        minPoint:vec4<f32>,
        maxPoint:vec4<f32>
    };

    struct LightIndex {
            count:f32,
            start:f32,
            empty0:f32,
            empty1:f32,
    };

    struct ClustersUniform {
        clusterTileX:f32,
        clusterTileY:f32,
        clusterTileZ:f32,
        numLights:f32,
        maxNumLightsPerCluster:f32,
        near:f32,
        far:f32,
        screenWidth:f32,
        screenHeight:f32,
        clusterPix:f32, 
    };

    @group(2) @binding(1)
    var<storage,read> lightBuffer: array<LightData>;
    @group(2) @binding(2)
    var<uniform> clustersUniform : ClustersUniform;
    @group(2) @binding(3)
    var<storage,read> lightAssignBuffer : array<f32>;
    @group(2) @binding(4)
    var<storage,read> assignTable : array<LightIndex>;
    #if DEBUG_CLUSTER
        @group(2) @binding(5)
        var<storage,read> clusterBuffer : array<ClusterBox>;
    #endif

    fn getLight( index:i32 ) -> LightData {
        let lightId = i32(lightAssignBuffer[index]);
        var lightData = lightBuffer[lightId];
        return lightData ;
    }

    fn linear01Depth(depth : f32) -> f32 {
        return globalUniform.far * globalUniform.near / fma(depth, globalUniform.near-globalUniform.far, globalUniform.far);
    }

    fn getTile(fragCoord : vec4<f32>) -> vec3<u32> {
        var coord = fragCoord ; 
        coord.z = linear01Depth(coord.z) ; 

        let sliceScale = f32(clustersUniform.clusterTileZ) / log2(globalUniform.far / globalUniform.near);
        let sliceBias = -(f32(clustersUniform.clusterTileZ) * log2(globalUniform.near) / log2(globalUniform.far / globalUniform.near));
        let zTile = u32(max(log2(coord.z) * sliceScale + sliceBias, 0.0));
        return vec3<u32>(u32(coord.x / (clustersUniform.screenWidth / f32(clustersUniform.clusterTileX))),
                            u32(coord.y / (clustersUniform.screenHeight / f32(clustersUniform.clusterTileY))),
                            zTile);
    }

    fn getCluster(fragCoord : vec4<f32>) -> LightIndex {
        let tile = getTile(fragCoord);
        let id = tile.x +
            tile.y * u32(clustersUniform.clusterTileX) +
            tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
        return assignTable[id];
    }

    #if DEBUG_CLUSTER
        fn getClusterIndex(fragCoord : vec4<f32>) -> u32 {
            let tile = getTile(fragCoord);
            let id = tile.x +
                tile.y * u32(clustersUniform.clusterTileX) +
                tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
            return id;
            // return 0u ;
        }
    #endif
`,Pc=`
#version 450
layout(location = 0) in vec3 position;
layout(location = 1) in vec3 normal;
layout(location = 2) in vec2 uv;

layout(location = 0) out vec2 fragUV;
layout(location = 1) out vec4 vWorldPos;
layout(location = 2) out vec3 vWorldNormal;

layout(set = 0, binding = 0) 
uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
};

layout(set = 1, binding = 0) 
buffer Uniforms {
    mat4[] modeMat;
};

 mat4 inverse( in mat4 m ){
    return mat4(
        m[0][0], m[1][0], m[2][0], 0.0,
        m[0][1], m[1][1], m[2][1], 0.0,
        m[0][2], m[1][2], m[2][2], 0.0,
        -dot(m[0].xyz,m[3].xyz),
        -dot(m[1].xyz,m[3].xyz),
        -dot(m[2].xyz,m[3].xyz),
        1.0 );
}

void main(){
    fragUV = uv;
    mat4 modelMat = modeMat[gl_InstanceID]; 
    mat4 vm = viewMat * modelMat;
	mat3 normalMatrix = mat3(vm[0].xyz,vm[1].xyz,vm[2].xyz);
	vec3 eNormal = normalize( normalMatrix * normal );
    
    vWorldPos = modelMat * vec4(position.xyz,1.0) ;

    mat4 fixedViewMat = viewMat ;
    fixedViewMat[3] = vec4(0.0,0.0,-8.0,1.0);
    vec4 mvPosition = modelMat * vec4( position.xyz, 1.0 );
    gl_Position = projMat * fixedViewMat * mvPosition;
}

`,Ec=`
#version 450

layout(location = 0) in vec2 fragUV;
layout(location = 1) in vec4 vWorldPos;
layout(location = 2) in vec3 vWorldNormal;

layout(location = 0) out vec4 o_Target;

layout(set = 2, binding = 0) 
uniform sampler baseMapSampler;
layout(set = 2, binding = 1) 
uniform texture2D baseMap;

layout(set = 3, binding = 0) uniform uniformData {
    vec3 eyesPos;
    float exposure;
    float roughness;
};

vec3 LinearToGammaSpace(in vec3 linRGB)
{
    vec3 _linRGB = vec3(linRGB) ;
    _linRGB = max(linRGB, vec3(0.0, 0.0, 0.0));
    _linRGB.r = pow(linRGB.r,0.416666667);
    _linRGB.g = pow(linRGB.g,0.416666667);
    _linRGB.b = pow(linRGB.b,0.416666667);
    return max(1.055 * _linRGB - 0.055, vec3(0.0));
}

void main(){
    int maxMipLevel = textureQueryLevels(baseMap, fragUV).x ;
    vec4 textureColor = textureCubeLod( sampler2D(baseMap, baseMapSampler), normalize(vWorldPos.xyz), roughness * float(maxMipLevel) ) ;
    o_Target = vec4(LinearToGammaSpace(textureColor.rgb),1.0) * exposure ;
}

`,Dc=`
#version 450

layout(location = 0) in vec2 fragUV;

layout(location = 0) out vec4 o_Target;

layout(set = 0, binding = 0) uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
    mat4 cameraWorldMatrix ;
    mat4 pvMatrixInv ;
    float frame;
    float time;
    float detail;
    float shadowBias;
    float skyExposure;
    float renderPassState;
    float quadScale;
    float intensity;
};

layout(set = 2, binding = 0) uniform sampler baseMapSampler;
layout(set = 2, binding = 1) uniform texture2D baseMap;

layout(set = 2, binding = 2) uniform sampler lutMapSample;
layout(set = 2, binding = 3) uniform texture2D lutMap;

layout(set = 3, binding = 0) uniform UniformData{
    float intensity ;
};

void main() {
    vec2 uv = fragUV.xy;
    uv.y = 1.0 - uv.y;
    vec4 col = texture(sampler2D(baseMap, baseMapSampler), uv * quadScale);
    // vec3 col = vec3(pow(base.xyz,vec3(1.0/2.2)));

    float Bcolor = col.b * 63.0;
	vec2 quad1;
    quad1.y = floor(floor(Bcolor) / 8.0);
    quad1.x = floor(Bcolor) - (quad1.y * 8.0);

    vec2 quad2;
    quad2.y = floor(ceil(Bcolor) / 8.0);
    quad2.x = ceil(Bcolor) - (quad2.y * 8.0);

    const float tmp = (0.125-(0.5/512.0)) ;
    const float tmp2 = 0.5/512.0 ;

    vec2 uv1;
    vec2 uv2;
	uv1.x = ((quad1.x)*0.125)+ tmp2 + (tmp* col.r);
	uv1.y = (((quad1.y)*0.125) + tmp2 + (tmp* col.g));

	uv2.x = ((quad2.x)*0.125)+ tmp2 + (tmp* col.r);
	uv2.y = (((quad2.y)*0.125)+ tmp2 + (tmp* col.g));

    vec4 color1 = texture(sampler2D(lutMap, lutMapSample), uv1);
    vec4 color2 = texture(sampler2D(lutMap, lutMapSample), uv2);

    vec4 newColor = mix(color1, color2, fract(Bcolor));
    // vec3 outC = pow(newColor.xyz,vec3(2.2));

    o_Target = vec4(newColor.rgb, col.a );
    // o_Target = vec4(1.0);
}
`;class Ks{}s(Ks,"Ori_AllShader",`
        #include "Common_vert"
        #include "Common_frag"
        #include "BxDF_frag"

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData) ;
            return ORI_VertexOut ;
        }

        fn frag(){
            ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
            ORI_ShadingInput.Roughness = materialUniform.roughness  ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.Specular = 0.5 ;
            ORI_ShadingInput.AmbientOcclusion = materialUniform.ao ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

            ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

            #if USE_SHADOWMAPING
                directShadowMaping(globalUniform.shadowBias);
                pointShadowMapCompare(globalUniform.pointShadowBias);
            #endif

            BxDFShading();
        }
    `);let Rh=`
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    // @group(1) @binding(auto)
    // var noes_MapSampler: sampler;
    // @group(1) @binding(auto)
    // var noes_Map: texture_2d<f32>;

    @group(1) @binding(auto)
    var splitTexture_MapSampler: sampler;
    @group(1) @binding(auto)
    var splitTexture_Map: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var screenUV = ORI_VertexVarying.fragPosition.xy / ORI_VertexVarying.fragPosition.w;
        screenUV = (screenUV.xy + 1.0) * 0.5;
        screenUV.y = 1.0 - screenUV.y;

        screenUV.x = clamp(sin(screenUV.x * 1.0),0.0,1.0) ;
        screenUV.y = clamp(sin(screenUV.y * 1.0),0.0,1.0) ;
        // screenUV.y = cos(ORI_VertexVarying.fragPosition.y/7.15);

        let frameMap = textureSample(splitTexture_Map,splitTexture_MapSampler,screenUV);
        // let noesMap = textureSample(noes_Map,noes_MapSampler,screenUV);

        ORI_ShadingInput.BaseColor = vec4<f32>( frameMap.rgb , 1.0) ;
        UnLit();
    }
`;class Pi{}s(Pi,"lambert_frag_wgsl",`
    #include "FragmentOutput.wgsl"
    #include "LighStruct"
    #include "ColorUtil_frag"

    @group(2) @binding(4)
    var baseMapSampler: sampler;
    @group(2) @binding(5)
    var baseMap: texture_2d<f32>;

    struct StandMaterial {
        transformUV1:vec4<f32>,
        transformUV2:vec4<f32>,
        baseColor: vec4<f32>,
        dirLight: vec4<f32>,
        dirLightColor: vec4<f32>,
        alphaCutoff: f32,
        shadowBias: f32,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: StandMaterial;

    fn frag(){
        var baseColor = materialUniform.baseColor;
        var alphaCutoff = materialUniform.alphaCutoff;
        var shadowBias = materialUniform.shadowBias;
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * vUv0 + transformUV1.xy;
        var baseMap = textureSample(baseMap, baseMapSampler, uv).xyz;

        let viewDir = normalize(globalUniform.cameraWorldMatrix[3].xyz - vWorldPos.xyz) ;

        let lightIndex = getCluster(builtin_fragCoord);
        let start = max(lightIndex.start, 0.0);
        let count = max(lightIndex.count, 0.0);
        let end = max(start + count , 0.0);
        var color = vec3<f32>(0.0);
        for(var i:i32 = i32(start) ; i < i32(end); i = i + 1 )
        {
          let light = getLight(i) ;
          switch (light.lightType) {
            case PointLightType: {
              let lightingColor = lambert_pointLight( baseMap , viewDir,vWorldNormal,vWorldPos.xyz,light);
              color += lightingColor ;
            }
            case DirectLightType: {
              let lightingColor = lambert_directLight( baseMap , viewDir,vWorldNormal,light.direction,light.lightColor,light.intensity);
              color += lightingColor ;
            }
            case SpotLightType: {

            }
            default: {
            }
          }
        }

        ORI_FragmentOutput.color = vec4<f32>(color, 1.0);
    }
    `),s(Pi,"lambert_vert_wgsl",`
      #include "Common_vert"

      fn vert(){

      }
    `);let Rc=`
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;


    struct MaterialUniform {
        baseColor:vec4<f32>,
        lineWeight:f32
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;

    fn vert(vertex:VertexAttributes) -> VertexOutput {
        var vertexPosition = vertex.position;
        var vertexNormal = vertex.normal;

                #if USE_MORPHTARGETS
                    vertexPosition = vertexPosition * morphTargetData.morphBaseInfluence + vertex.a_morphPositions_0 * morphTargetData.morphInfluence0;
                    #if USE_MORPHNORMALS
                        vertexNormal = vertexNormal * morphTargetData.morphBaseInfluence + vertex.a_morphNormals_0 * morphTargetData.morphInfluence0;
                    #endif
                #endif

                #if USE_SKELETON
                    #if USE_JOINT_VEC8
                        let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
                        ORI_MATRIX_M *= skeletonNormal ;
                        // vertexNormal = vec4<f32>(vec4<f32>(vertexNormal,0.0) * skeletonNormal).xyz; 
                    #else
                        let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
                        ORI_MATRIX_M *= skeletonNormal ;
                        // vertexNormal = vec4<f32>(vec4<f32>(vertexNormal,0.0) * skeletonNormal).xyz; 
                    #endif
                #endif


                #if USE_TANGENT
                    ORI_VertexOut.varying_Tangent = vertex.TANGENT ;
                #endif

                ORI_NORMALMATRIX = transpose(inverse( mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ));

                let worldNormal = normalize(ORI_NORMALMATRIX * vertexNormal.xyz) ;

                vertexPosition = vertexPosition + worldNormal * materialUniform.lineWeight ;

                var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));
                var viewPosition = ORI_MATRIX_V * worldPos;
                var clipPosition = ORI_MATRIX_P * viewPosition ;

                ORI_VertexOut.varying_UV0 = vertex.uv.xy ;
                ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;
                ORI_VertexOut.varying_ViewPos = viewPosition / viewPosition.w;
                ORI_VertexOut.varying_Clip = clipPosition ;
                ORI_VertexOut.varying_WPos = worldPos ;
                ORI_VertexOut.varying_WPos.w = f32(vertex.index);
                ORI_VertexOut.varying_WNormal = worldNormal ;
                ORI_VertexOut.member = clipPosition ;


        return ORI_VertexOut ;
    }

    fn frag(){
        let color = textureSample(baseMap,baseMapSampler,ORI_VertexVarying.fragUV0) ;
        ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
        ORI_ShadingInput.Roughness = 0.5  ;
        ORI_ShadingInput.Metallic = 0.5 ;
        ORI_ShadingInput.Specular = 0.5 ;
        ORI_ShadingInput.AmbientOcclusion = 1.0 ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);
        ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;
        UnLit();
    }
`,Ih=`
        #include "Common_vert"
        #include "Common_frag"
        #include "BxDF_frag"

        @group(1) @binding(auto)
        var rtColorTex: texture_2d<f32>;

        @group(1) @binding(auto)
        var baseMapSampler: sampler;
        @group(1) @binding(auto)
        var baseMap: texture_2d<f32>;

        @group(1) @binding(auto)
        var normalMapSampler: sampler;
        @group(1) @binding(auto)
        var normalMap: texture_2d<f32>;

        @group(1) @binding(auto)
        var displaceMapSampler: sampler;
        @group(1) @binding(auto)
        var displaceMap: texture_2d<f32>;

        @group(1) @binding(auto)
        var aoMapSampler: sampler;
        @group(1) @binding(auto)
        var aoMap: texture_2d<f32>;
 
        @group(1) @binding(auto)
        var reflectMapSampler: sampler;
        @group(1) @binding(auto)
        var reflectMap: texture_2d<f32>;

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData) ;
            // let displaceDimensions = textureDimensions(displaceMap) ;
            // let displace = textureGather(0,displaceMap,displaceMapSampler,inputData.uv) ;
            // ORI_VertexOut.member.y += displace.r * 10.0;
            return ORI_VertexOut ;
        }

        fn frag(){
            var screenUV = ORI_VertexVarying.fragPosition.xy / ORI_VertexVarying.fragPosition.w;
            screenUV = (screenUV.xy + 1.0) * 0.5;
            screenUV.y = 1.0 - screenUV.y;

            let FrameMap = textureSample(rtColorTex,baseMapSampler,screenUV);

            let Albedo = textureSample(baseMap,baseMapSampler,ORI_VertexVarying.fragUV0);
            var Normal = textureSample(normalMap,normalMapSampler,ORI_VertexVarying.fragUV0).rgb ;
            Normal.y = 1.0 - Normal.y ;
            let Displace = textureSample(displaceMap,displaceMapSampler,ORI_VertexVarying.fragUV0).rgb ;
            let Ao = textureSample(aoMap,aoMapSampler,ORI_VertexVarying.fragUV0).r ;
            let ReflectMap = 1.0 - textureSample(reflectMap,reflectMapSampler,ORI_VertexVarying.fragUV0).r ;

            ORI_ShadingInput.BaseColor = FrameMap * materialUniform.baseColor * vec4<f32>(LinearToGammaSpace(Albedo.rgb),1.0);
            ORI_ShadingInput.Roughness = ReflectMap * materialUniform.roughness  ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.Specular = 0.5 ;
            ORI_ShadingInput.AmbientOcclusion = Ao * materialUniform.ao ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

            let normal = unPackRGNormal(Normal,Displace.r*materialUniform.normalScale,1.0) ;
            ORI_ShadingInput.Normal = normal ;

            BxDFShading();
        }
    `,Lh=`
        #include "Common_vert"
        #include "Common_frag"
        #include "UnLit_frag"

        @group(1) @binding(auto) var pointShadowMapSampler: sampler;
        @group(1) @binding(auto) var pointShadowMap: texture_depth_cube ;

        struct MaterialUniform {
            center: vec3<f32>,
        };
      
        @group(2) @binding(0)
        var<uniform> materialUniform: MaterialUniform;

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData) ;
            return ORI_VertexOut ;
        }
 
        fn frag(){

            var center = materialUniform.center ; 

            var dir = normalize(ORI_VertexVarying.vWorldPos.xyz - center) ;
            var depth = textureSample(pointShadowMap,pointShadowMapSampler,dir.xyz) ;
            depth = depth * globalUniform.far ;

            ORI_ShadingInput.BaseColor = vec4<f32>(depth*255.0,0.0,0.0,1.0)  ;
            UnLit();
        }
    `,Zs=`
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 
        let color = textureSample(baseMap,baseMapSampler,uv) ;
        if(color.w < 0.5){
            discard ;
        }
        
        ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
        UnLit();
    }
`,Ic=`
    struct MaterialUniform{
       #if USE_BRDF
        #include "PhysicMaterialUniform_frag"
       #endif

       #if USE_ColorLit
       #endif

       #if USE_UnLit
       #endif
    }

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;
`,Oh=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> varying_uv: vec2<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    struct MaterialUniform{
        u_texel: vec2<f32>,
        u_strength: f32,
    }

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;


    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3<f32> {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r,0.416666667);
        linRGB.g = pow(linRGB.g,0.416666667);
        linRGB.b = pow(linRGB.b,0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    fn texture2D( uv:vec2<f32> , offset:vec2<f32> ) -> vec4<f32> {
        return textureSample(baseMap, baseMapSampler, uv.xy + offset ).rgba ;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var v_vTexcoord = fragUV ;
        // v_vTexcoord.x = 1.0 - v_vTexcoord.x ;
        v_vTexcoord.y = 1.0 - v_vTexcoord.y ;

        var reducemul = 1.0 / 8.0;
        var reducemin = 1.0 / 128.0;

        var basecol = texture2D(v_vTexcoord , vec2<f32>(0.0)).rgba;
        var baseNW = texture2D(v_vTexcoord , -materialUniform.u_texel).rgb;
        var baseNE = texture2D(v_vTexcoord , vec2<f32>(materialUniform.u_texel.x, -materialUniform.u_texel.y)).rgb;
        var baseSW = texture2D(v_vTexcoord , vec2<f32>(-materialUniform.u_texel.x, materialUniform.u_texel.y)).rgb;
        var baseSE = texture2D(v_vTexcoord , materialUniform.u_texel ).rgb;

        // var gray = vec3<f32>(0.299, 0.587, 0.114);
        var gray = vec3<f32>(0.213, 0.715, 0.072);
        var monocol = dot(basecol.rgb, gray);
        var monoNW = dot(baseNW, gray);
        var monoNE = dot(baseNE, gray);
        var monoSW = dot(baseSW, gray);
        var monoSE = dot(baseSE, gray);

        var monomin = min(monocol, min(min(monoNW, monoNE), min(monoSW, monoSE)));
        var monomax = max(monocol, max(max(monoNW, monoNE), max(monoSW, monoSE)));

        var dir = vec2<f32>(-((monoNW + monoNE) - (monoSW + monoSE)), ((monoNW + monoSW) - (monoNE + monoSE)));
        var dirreduce = max((monoNW + monoNE + monoSW + monoSE) * reducemul * 0.25, reducemin);
        var dirmin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirreduce);
        dir = min(vec2<f32>(materialUniform.u_strength), max(vec2<f32>(-materialUniform.u_strength), dir * dirmin)) * materialUniform.u_texel;

        var resultA = 0.5 * (texture2D(v_vTexcoord , dir * -0.166667).rgb  +
                            texture2D(v_vTexcoord , dir * 0.166667).rgb);
        var resultB = resultA * 0.5 + 0.25 * (texture2D( v_vTexcoord , dir * -0.5).rgb +
                                            texture2D( v_vTexcoord , dir * 0.5).rgb);
        var monoB = dot(resultB.rgb, gray);
        
        var color:vec3<f32> ;
        if(monoB < monomin || monoB > monomax) {
            color = resultA ;//* v_vColour;
        } else {
            color = resultB ;//* v_vColour;
        }
        return FragmentOutput(vec4<f32>(color.rgb,basecol.a));
    }
`,Ah=`
struct FragmentOutput {
    @location(0) o_Target: vec4<f32>
};

${Ms}

#include "FastMathShader" 

struct UniformData {
    fogColor : vec4<f32>,
    fogType : f32 ,
    height : f32 , 
    start: f32,
    end: f32,
    density : f32 ,
    ins : f32 ,
};

@group(1) @binding(0)
var positionMapSampler: sampler;
@group(1) @binding(1)
var positionMap: texture_2d<f32>;

@group(1) @binding(2)
var colorMapSampler: sampler;
@group(1) @binding(3)
var colorMap: texture_2d<f32>;

@group(1) @binding(4)
var normalMapSampler: sampler;
@group(1) @binding(5)
var normalMap: texture_2d<f32>;


@group(2) @binding(0)
var<uniform> global : UniformData;
var<private> varying_uv: vec2<f32>;

@fragment
fn main(@location(0) fragUV: vec2<f32>,
@builtin(position) coord: vec4<f32>) -> FragmentOutput {
    var texCoord = fragUV ;
    texCoord.y = 1.0 - texCoord.y ;

    var cameraPos = globalUniform.cameraWorldMatrix[3].xyz  ;

    var texPosition = textureSample(positionMap, positionMapSampler ,texCoord) ;
    var texNormal = textureSample(normalMap, normalMapSampler,texCoord) ;
    var texColor = textureSample(colorMap, colorMapSampler ,texCoord) ;

    let dis = texNormal.w * distance(cameraPos,texPosition.xyz);
    let height = texPosition.y ;

    // var heightFactor = computeFog((dis + height) / 2.0 );
    var heightFactor = computeFog((dis));
    // visible test
    if(texNormal.w<=0.5){
        return FragmentOutput(vec4<f32>(texColor.rgb,texColor.a));
    }else{
        // var emissive = mix( global.fogColor.rgb , texColor.rgb , global.ins * heightFactor );
        var emissive = mix( texColor.rgb , global.fogColor.rgb , clamp(global.ins * heightFactor,0.0,1.0) );
        return FragmentOutput(vec4<f32>(emissive.rgb,texColor.a));
    }
  }

  fn computeFog(z:f32) -> f32 {
    var fog = 0.0;
    if( global.fogType == 0.0 ){
        fog = (global.end - z) / (global.end - global.start);
    }else if(global.fogType == 1.0 ){
        fog = exp2(-global.density * z);
    }else if(global.fogType == 2.0 ){
        fog = global.density * z;
        fog = exp2(-fog * fog);
    }
    return max(fog,0.0);
  }
`;class Qs{}s(Qs,"cs",`
    struct UniformData {
        width: f32,
        height: f32,
        sunU: f32,
        sunV: f32,
        eyePos: f32,
        sunRadius: f32,         // = 500.0;
        sunRadiance: f32,       // = 20.0;
        mieG: f32,              // = 0.76;
        mieHeight: f32,         // = 1200;
        sunBrightness: f32,     // = 1.0;
        displaySun: f32,        // > 0.5: true
      };

      @group(0) @binding(0) var<uniform> uniformBuffer: UniformData;
      @group(0) @binding(1) var outTexture : texture_storage_2d<rgba16float, write>;

      var<private> uv01: vec2<f32>;
      var<private> fragCoord: vec2<i32>;
      var<private> texSizeF32: vec2<f32>;

      var<private> PI:f32 = 3.1415926535;
      var<private> PI_2:f32 = 0.0;
      var<private> EPSILON:f32 = 0.00001;
      var<private> SAMPLES_NUMS:i32 = 16;

      var<private> transmittance:vec3<f32>;
      var<private> insctrMie:vec3<f32>;
      var<private> insctrRayleigh:vec3<f32>;

      @compute @workgroup_size( 8 , 8 , 1 )
      fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
      {
        fragCoord = vec2<i32>(globalInvocation_id.xy);
        texSizeF32 = vec2<f32>( uniformBuffer.width, uniformBuffer.height);
        uv01 = vec2<f32>(globalInvocation_id.xy) / texSizeF32;
        uv01.y = 1.0 - uv01.y - EPSILON;
        PI_2 = PI * 2.0;
        textureStore(outTexture, fragCoord , mainImage(uv01));//vec4(uv01, 0.0, 1.0));
      }

      struct ScatteringParams
      {
        sunRadius:f32,
        sunRadiance:f32,

        mieG:f32,
        mieHeight:f32,

        rayleighHeight:f32,

        waveLambdaMie:vec3<f32>,
        waveLambdaOzone:vec3<f32>,
        waveLambdaRayleigh:vec3<f32>,

        earthRadius:f32,
        earthAtmTopRadius:f32,
        earthCenter:vec3<f32>,
      }

      fn ComputeSphereNormal(coord:vec2<f32>, phiStart:f32, phiLength:f32, thetaStart:f32, thetaLength:f32) -> vec3<f32>
      {
        var normal:vec3<f32>;
        normal.x = -sin(thetaStart + coord.y * thetaLength) * sin(phiStart + coord.x * phiLength);
        normal.y = -cos(thetaStart + coord.y * thetaLength);
        normal.z = -sin(thetaStart + coord.y * thetaLength) * cos(phiStart + coord.x * phiLength);
        return normalize(normal);
      }

      fn ComputeRaySphereIntersection(position:vec3<f32>, dir:vec3<f32>, center:vec3<f32>, radius:f32) -> vec2<f32>
      {
        var origin:vec3<f32> = position - center;
        var B = dot(origin, dir);
        var C = dot(origin, origin) - radius * radius;
        var D = B * B - C;

        var minimaxIntersections:vec2<f32>;
        if (D < 0.0)
        {
          minimaxIntersections = vec2<f32>(-1.0, -1.0);
        }
        else
        {
          D = sqrt(D);
          minimaxIntersections = vec2<f32>(-B - D, -B + D);
        }

        return minimaxIntersections;
      }

      fn ComputeWaveLambdaRayleigh(lambda: vec3<f32>) -> vec3<f32>
      {
        var n:f32 = 1.0003;
        var N:f32 = 2.545E25;
        var pn:f32 = 0.035;
        var n2:f32 = n * n;
        var pi3:f32 = PI * PI * PI;
        var rayleighConst:f32 = (8.0 * pi3 * pow(n2 - 1.0,2.0)) / (3.0 * N) * ((6.0 + 3.0 * pn) / (6.0 - 7.0 * pn));
        return vec3<f32>(rayleighConst) / (lambda * lambda * lambda * lambda);
      }

      fn ComputePhaseMie(theta: f32, g:f32) -> f32
      {
        var g2 = g * g;
        return (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * saturate(theta), 1.5) / (4.0 * PI);
      }

      fn ComputePhaseRayleigh(theta: f32) -> f32
      {
        var theta2 = theta * theta;
        return (theta2 * 0.75 + 0.75) / (4.0 * PI);
      }

      fn ChapmanApproximation(X: f32, h: f32, cosZenith: f32) -> f32
      {
        var c = sqrt(X + h);
        var c_exp_h = c * exp(-h);

        if (cosZenith >= 0.0)
        {
          return c_exp_h / (c * cosZenith + 1.0);
        }
        else
        {
          var x0 = sqrt(1.0 - cosZenith * cosZenith) * (X + h);
          var c0 = sqrt(x0);

          return 2.0 * c0 * exp(X - x0) - c_exp_h / (1.0 - c * cosZenith);
        }
      }

      fn GetOpticalDepthSchueler(h: f32, H: f32, earthRadius: f32, cosZenith: f32) -> f32
      {
        return H * ChapmanApproximation(earthRadius / H, h / H, cosZenith);
      }

      fn GetTransmittance(setting: ScatteringParams, L:vec3<f32>, V: vec3<f32>) -> vec3<f32>
      {
        var ch = GetOpticalDepthSchueler(L.y, setting.rayleighHeight, setting.earthRadius, V.y);
        return exp(-(setting.waveLambdaMie + setting.waveLambdaRayleigh) * ch);
      }

      fn ComputeOpticalDepth(setting: ScatteringParams, samplePoint: vec3<f32>, V: vec3<f32>, L: vec3<f32>, neg: f32) -> vec2<f32>
      {
        var rl = length(samplePoint);
        var h = rl - setting.earthRadius;
        var r: vec3<f32> = samplePoint / rl;

        var cos_chi_sun = dot(r, L);
        var cos_chi_ray = dot(r, V * neg);

        var opticalDepthSun = GetOpticalDepthSchueler(h, setting.rayleighHeight, setting.earthRadius, cos_chi_sun);
        var opticalDepthCamera = GetOpticalDepthSchueler(h, setting.rayleighHeight, setting.earthRadius, cos_chi_ray) * neg;

        return vec2<f32>(opticalDepthSun, opticalDepthCamera);
      }

      fn AerialPerspective(setting:ScatteringParams, start: vec3<f32>, end: vec3<f32>, V: vec3<f32>, L: vec3<f32>, infinite:i32)
      {
        var inf_neg:f32 = 1.0;
        if( infinite == 0){
          inf_neg = -1.0;
        }

        var sampleStep: vec3<f32> = (end - start) / f32(SAMPLES_NUMS);
        var samplePoint: vec3<f32> = end - sampleStep;
        var sampleLambda: vec3<f32> = setting.waveLambdaMie + setting.waveLambdaRayleigh + setting.waveLambdaOzone;

        var sampleLength:f32 = length(sampleStep);

        var scattering:vec3<f32> = vec3<f32>(0.0);
        var lastOpticalDepth:vec2<f32> = ComputeOpticalDepth(setting, end, V, L, inf_neg);

        for (var i:i32 = 1; i < SAMPLES_NUMS; i = i + 1)
        {
          var opticalDepth: vec2<f32> = ComputeOpticalDepth(setting, samplePoint, V, L, inf_neg);

          var segment_s: vec3<f32> = exp(-sampleLambda * (opticalDepth.x + lastOpticalDepth.x));
          var segment_t: vec3<f32> = exp(-sampleLambda * (opticalDepth.y - lastOpticalDepth.y));

          transmittance *= segment_t;

          scattering = scattering * segment_t;
          scattering += exp(-(length(samplePoint) - setting.earthRadius) / setting.rayleighHeight) * segment_s;

          lastOpticalDepth = opticalDepth;
          samplePoint = samplePoint - sampleStep;
        }

        insctrMie = scattering * setting.waveLambdaMie * sampleLength;
        insctrRayleigh = scattering * setting.waveLambdaRayleigh * sampleLength;
      }

      fn ComputeSkyboxChapman(setting: ScatteringParams, eye:vec3<f32>, V:vec3<f32>, L:vec3<f32>) -> f32
      {
        var neg:i32 = 1;
        var outerIntersections: vec2<f32> = ComputeRaySphereIntersection(eye, V, setting.earthCenter, setting.earthAtmTopRadius);
        if (outerIntersections.y < 0.0){
          return 0.0;
        }
        var innerIntersections: vec2<f32> = ComputeRaySphereIntersection(eye, V, setting.earthCenter, setting.earthRadius);
        if (innerIntersections.x > 0.0)
        {
          neg = 0;
          outerIntersections.y = innerIntersections.x;
        }

        let eye0 = eye - setting.earthCenter;

        var start : vec3<f32> = eye0 + V * max(0.0, outerIntersections.x);
        var end : vec3<f32>= eye0 + V * outerIntersections.y;

        AerialPerspective(setting, start, end, V, L, neg);

        //bool intersectionTest = innerIntersections.x < 0.0 && innerIntersections.y < 0.0;
        //return intersectionTest ? 1.0 : 0.0;

        if(innerIntersections.x < 0.0 && innerIntersections.y < 0.0){
          return 1.0;
        }
        return 0.0;
      }

      fn ComputeSkyInscattering(setting: ScatteringParams, eye: vec3<f32>, V: vec3<f32>, L: vec3<f32>) -> vec4<f32>
      {
        transmittance = vec3<f32>(1.0);
        insctrMie = vec3<f32>(0.0);
        insctrRayleigh = vec3<f32>(0.0);
        var intersectionTest:f32 = ComputeSkyboxChapman(setting, eye, V, L);

        var phaseTheta = dot(V, L);
        var phaseMie = ComputePhaseMie(phaseTheta, setting.mieG);
        var phaseRayleigh = ComputePhaseRayleigh(phaseTheta);
        var phaseNight = 1.0 - saturate(transmittance.x * EPSILON);

        var insctrTotalMie: vec3<f32> = insctrMie * phaseMie;
        var insctrTotalRayleigh: vec3<f32> = insctrRayleigh * phaseRayleigh;

        var sky: vec3<f32> = (insctrTotalMie + insctrTotalRayleigh) * setting.sunRadiance;
        if(uniformBuffer.displaySun > 0.5){
          var angle:f32 = saturate((1.0 - phaseTheta) * setting.sunRadius);
          var cosAngle:f32 = cos(angle * PI * 0.5);
          var edge:f32 = 0.0;
          if(angle >= 0.9){
            edge = smoothstep(0.9, 1.0, angle);
          }

          var limbDarkening: vec3<f32> = GetTransmittance(setting, -L, V);
          limbDarkening *= pow(vec3<f32>(cosAngle), vec3<f32>(0.420, 0.503, 0.652)) * mix(vec3<f32>(1.0), vec3<f32>(1.2,0.9,0.5), edge) * intersectionTest;
          sky += limbDarkening * uniformBuffer.sunBrightness;
        }
        return vec4<f32>(sky, phaseNight * intersectionTest);
      }

      fn TonemapACES(x: vec3<f32>) -> vec3<f32>
      {
        var A:f32 = 2.51f;
        var B:f32 = 0.03f;
        var C:f32 = 2.43f;
        var D:f32 = 0.59f;
        var E:f32 = 0.14f;
        return (x * (A * x + B)) / (x * (C * x + D) + E);
      }

      fn noise(uv:vec2<f32>) -> f32
      {
        return fract(dot(sin(vec3<f32>(uv.xyx) * vec3<f32>(uv.xyy) * 1024.0), vec3<f32>(341896.483, 891618.637, 602649.7031)));
      }

      fn mainImage( uv:vec2<f32> ) -> vec4<f32>
      {
        let eyePosition = uniformBuffer.eyePos;
        var sun = vec2<f32>(uniformBuffer.sunU, uniformBuffer.sunV);
        var V: vec3<f32> = ComputeSphereNormal(uv, 0.0, PI_2, 0.0, PI);
        var L: vec3<f32> = ComputeSphereNormal(vec2<f32>(sun.x, sun.y), 0.0, PI_2, 0.0, PI);

        var setting: ScatteringParams;
        setting.sunRadius = uniformBuffer.sunRadius;//500.0;
        setting.sunRadiance = uniformBuffer.sunRadiance;//20.0;
        setting.mieG = uniformBuffer.mieG;//0.76;
        setting.mieHeight = uniformBuffer.mieHeight;// 1200.0;
        setting.rayleighHeight = 8000.0;
        setting.earthRadius = 6360000.0;
        setting.earthAtmTopRadius = 6420000.0;
        setting.earthCenter = vec3<f32>(0, -setting.earthRadius, 0);
        setting.waveLambdaMie = vec3<f32>(0.0000002);

        // wavelength with 680nm, 550nm, 450nm
        setting.waveLambdaRayleigh = ComputeWaveLambdaRayleigh(vec3<f32>(0.000000680, 0.000000550, 0.000000450));

        // see https://www.shadertoy.com/view/MllBR2
        setting.waveLambdaOzone = vec3<f32>(1.36820899679147, 3.31405330400124, 0.13601728252538) * 0.0000006 * 2.504;

        var eye:vec3<f32> = vec3<f32>(0,eyePosition,0);
        var sky0:vec4<f32> = ComputeSkyInscattering(setting, eye, V, L);
        var sky = vec3<f32>(sky0.rgb);

        // sky = TonemapACES(sky.rgb * 2.0);
        // sky = pow(sky.rgb, vec3<f32>(2.4)); // gamma
        // sky.rgb += noise(uv*iTime) / 255.0; // dither

        var fragColor:vec4<f32> = vec4<f32>(sky, 1.0);
        return fragColor;
      }
    `);class Uh{constructor(){s(this,"sunRadius",500),s(this,"sunRadiance",10),s(this,"mieG",.76),s(this,"mieHeight",1200),s(this,"eyePos",1500),s(this,"sunX",.55),s(this,"sunY",.54),s(this,"sunBrightness",1),s(this,"displaySun",!0),s(this,"defaultTextureCubeSize",512),s(this,"defaultTexture2DSize",1024)}}class Bh extends ei{constructor(e){return super(),s(this,"_internalTexture"),s(this,"_cubeSize"),s(this,"setting"),this.setting=e,this._cubeSize=e.defaultTextureCubeSize,this._internalTexture=new zh(e.defaultTexture2DSize,.5*e.defaultTexture2DSize),this._internalTexture.update(this.setting),this.createFromTexture(this._cubeSize,this._internalTexture),this}get texture2D(){return this._internalTexture}apply(){return this._internalTexture.update(this.setting),this.uploadErpTexture(this._internalTexture),this}}class zh extends ne{constructor(e,t){super(e,t,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),s(this,"_computeShader"),s(this,"_uniformBuffer"),this.initCompute(e,t)}initCompute(e,t){this._uniformBuffer=new Mt(64),this._uniformBuffer.apply(),this._computeShader=new Ce(Qs.cs),this._computeShader.setUniformBuffer("uniformBuffer",this._uniformBuffer),this._computeShader.setStorageTexture("outTexture",this),this._computeShader.workerSizeX=e/8,this._computeShader.workerSizeY=t/8}update(e){this._uniformBuffer.setFloat("width",this.width),this._uniformBuffer.setFloat("height",this.height),this._uniformBuffer.setFloat("sunU",e.sunX),this._uniformBuffer.setFloat("sunV",e.sunY),this._uniformBuffer.setFloat("eyePos",e.eyePos),this._uniformBuffer.setFloat("sunRadius",e.sunRadius),this._uniformBuffer.setFloat("sunRadiance",e.sunRadiance),this._uniformBuffer.setFloat("mieG",e.mieG),this._uniformBuffer.setFloat("mieHeight",e.mieHeight),this._uniformBuffer.setFloat("sunBrightness",e.sunBrightness),this._uniformBuffer.setFloat("displaySun",e.displaySun?1:0),this._uniformBuffer.apply();e=C.beginCommandEncoder();return C.computeCommand(e,[this._computeShader]),C.endCommandEncoder(e),this}}class Nh extends ut{constructor(){super(),s(this,"transparency"),s(this,"metallic"),this.setShader("sky_vs_frag_wgsl","sky_fs_frag_wgsl"),this.getShader().setUniformVector3("eyesPos",new p),this.getShader().setUniformFloat("exposure",1),this.getShader().setUniformFloat("roughness",0);var e=this.getShader().shaderState;e.frontFace="cw",e.cullMode=xr.back,e.depthWriteEnabled=!1,e.depthCompare=ti.less}set envMap(e){}set shadowMap(e){}get exposure(){return _.setting.sky.skyExposure}set exposure(e){_.setting.sky.skyExposure=e}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){"roughness"in this.renderShader.uniforms&&(this.renderShader.uniforms.roughness.value=e)}}class Fh extends tr{constructor(e,t,r,i,a,o,n){super(),s(this,"shape_vertices",[]),s(this,"shape_indices",[]),s(this,"radius"),s(this,"widthSegments"),s(this,"heightSegments"),s(this,"phiStart"),s(this,"phiLength"),s(this,"thetaStart"),s(this,"thetaLength"),this.radius=e,this.widthSegments=t,this.heightSegments=r,this.phiStart=i,this.phiLength=a,this.thetaStart=o,this.thetaLength=n,this.buildGeometry()}buildGeometry(){var e,t=0,r=this.heightSegments,i=this.widthSegments,a=this.radius,s=(r+1)*(i+1);let o=new Float32Array(3*s),n=new Float32Array(3*s),h=new Float32Array(2*s),l=new Uint16Array(i*r*2*3),u=0,c=0,d=0;for(e=0;e<=r;++e)for(var f=Math.PI*e/r,p=-a*Math.cos(f),m=a*Math.sin(f),g=0;g<=i;++g){var v,x=2*Math.PI*g/i,_=m*Math.cos(x),x=m*Math.sin(x),y=1/Math.sqrt(_*_+x*x+p*p);o[u++]=_,o[u++]=x,o[u++]=p,n[c++]=_*y,n[c++]=x*y,n[c++]=p*y,h[d++]=g/i,h[d++]=e/r,0<g&&0<e&&(x=(_=(i+1)*e+g)-1,y=(i+1)*(e-1)+g-1,v=(i+1)*(e-1)+g,e==r?(l[t++]=_,l[t++]=y,l[t++]=v):1==e?(l[t++]=_,l[t++]=x,l[t++]=y):(l[t++]=_,l[t++]=x,l[t++]=y,l[t++]=_,l[t++]=y,l[t++]=v))}this.setIndices(l),this.setAttribute(H.position,o),this.setAttribute(H.normal,n),this.setAttribute(H.uv,h),this.setAttribute(H.TEXCOORD_1,h),this.addSubGeometry({indexStart:0,indexCount:l.length,vertexStart:0,index:0})}}class Js extends Le{constructor(){super(),s(this,"skyMaterial"),this.castShadow=!1,this.castGI=!0,this.addRendererMask(Ue.Sky),this.alwaysRender=!0}init(){super.init(),this.object3D.bound=new je(p.ZERO.clone(),p.MAX),this.geometry=new Fh(_.setting.sky.defaultFar,20,20),this.skyMaterial||(this.skyMaterial=new Nh)}onEnable(){this._readyPipeline?(this.castNeedPass(this.materials[0].getShader()),!this._inRenderer&&this.transform.scene3D&&((V.instance.sky=this)._inRenderer=!0)):this.initPipeline()}onDisable(){this._inRenderer&&this.transform.scene3D&&(this._inRenderer=!1,V.instance.sky=null)}renderPass2(e,t,r,i,a,s=!1){this.transform.updateWorldMatrix(),super.renderPass2(e,t,r,i,a,s)}set map(e){this.skyMaterial.baseMap=e,null==this.skyMaterial.name&&(this.skyMaterial.name="skyMaterial"),this.material=this.skyMaterial}get map(){return this.skyMaterial.baseMap}get exposure(){return this.skyMaterial.exposure}set exposure(e){this.skyMaterial&&(this.skyMaterial.exposure=e)}get roughness(){return this.skyMaterial.roughness}set roughness(e){this.skyMaterial&&(this.skyMaterial.roughness=e)}}class Lc extends Js{constructor(){super(...arguments),s(this,"_atmosphericScatteringSky")}get sunX(){return this._atmosphericScatteringSky.setting.sunX}set sunX(e){this._atmosphericScatteringSky.setting.sunX=e,this._atmosphericScatteringSky.apply()}get sunY(){return this._atmosphericScatteringSky.setting.sunY}set sunY(e){this._atmosphericScatteringSky.setting.sunY=e,this._atmosphericScatteringSky.apply()}get eyePos(){return this._atmosphericScatteringSky.setting.eyePos}set eyePos(e){this._atmosphericScatteringSky.setting.eyePos=e,this._atmosphericScatteringSky.apply()}get sunRadius(){return this._atmosphericScatteringSky.setting.sunRadius}set sunRadius(e){this._atmosphericScatteringSky.setting.sunRadius=e,this._atmosphericScatteringSky.apply()}get sunRadiance(){return this._atmosphericScatteringSky.setting.sunRadiance}set sunRadiance(e){this._atmosphericScatteringSky.setting.sunRadiance=e,this._atmosphericScatteringSky.apply()}get sunBrightness(){return this._atmosphericScatteringSky.setting.sunBrightness}set sunBrightness(e){this._atmosphericScatteringSky.setting.sunBrightness=e,this._atmosphericScatteringSky.apply()}get displaySun(){return this._atmosphericScatteringSky.setting.displaySun}set displaySun(e){this._atmosphericScatteringSky.setting.displaySun=e,this._atmosphericScatteringSky.apply()}init(){super.init(),this._atmosphericScatteringSky=new Bh(new Uh)}start(){var e=this.transform.scene3D;this.map=this._atmosphericScatteringSky,e.envMap=this._atmosphericScatteringSky,super.start()}onEnable(){}onDisable(){}debug(){}}var kh=(e=>(e[e.Normal=0]="Normal",e[e.BillboardY=9]="BillboardY",e[e.BillboardXYZ=10]="BillboardXYZ",e))(kh||{});class $s extends ve{constructor(){super(),s(this,"type"),s(this,"camera"),s(this,"_cameraDirection"),this._cameraDirection=new p}onUpdate(){super.onUpdate(),this.enable&&this.transform.view3D.camera&&this.updateBillboardMatrix()}updateBillboardMatrix(){var e=this.transform.view3D.camera;this._cameraDirection.copyFrom(e.transform.back),10==this.type?this._cameraDirection.normalize().multiplyScalar(100):9==this.type&&(this._cameraDirection.y=0,this._cameraDirection.normalize().multiplyScalar(100)),this.transform.lookAt(p.ZERO,this._cameraDirection,e.transform.up)}cloneTo(e){e.addComponent($s).type=this.type}}var si=(e=>(e[e.None=0]="None",e[e.Box=1]="Box",e[e.Capsule=2]="Capsule",e[e.Sphere=3]="Sphere",e[e.Mesh=4]="Mesh",e))(si||{});class Bi{constructor(){s(this,"_center"),s(this,"_size"),s(this,"_halfSize"),s(this,"_shapeType",0),this._center=new p,this._size=new p,this._halfSize=new p}get shapeType(){return this._shapeType}setFromCenterAndSize(e,t){return e&&this._center.copy(e),t&&this._size.copy(t),this}get center(){return this._center}set center(e){this._center.copy(e)}get size(){return this._size}set size(e){this._size.copy(e),this._halfSize.copy(e).multiplyScalar(.5)}get halfSize(){return this._halfSize}rayPick(e,t){return null}}const fr=class extends Bi{constructor(){super(),s(this,"_pickRet"),s(this,"box"),this._shapeType=si.Box,this.box=new je(new p,new p)}rayPick(e,t){this.box.setFromCenterAndSize(this.center,this.size);var r=fr.helpMatrix,t=(r.copyFrom(t).invert(),fr.helpRay.copy(e)),e=(t.applyMatrix(r),t.intersectBox(this.box,fr.v3_help_0));return e?(this._pickRet||(this._pickRet={intersect:!1,intersectPoint:new p,distance:0}),this._pickRet.intersect=!0,this._pickRet.intersectPoint=e,this._pickRet.distance=p.distance(t.origin,fr.v3_help_0),this._pickRet):null}};let ir=fr;s(ir,"v3_help_0",new p),s(ir,"helpMatrix",new N),s(ir,"helpRay",new At);class Gh extends ve{constructor(){super(),s(this,"_shape"),this._shape=new ir}start(){"pixel"==_.setting.pick.mode&&this.transform.scene3D.view.pickFire.mouseEnableMap.set(this.transform.worldMatrix.index,this)}get shape(){return this._shape}set shape(e){this._shape=e}rayPick(e){return this._enable?this._shape.rayPick(e,this.transform.worldMatrix):null}destroy(){"pixel"==_.setting.pick.mode&&this.transform.scene3D.view.pickFire.mouseEnableMap.delete(this.transform.worldMatrix.index),super.destroy()}}var Vh=(e=>(e[e.PingPong=0]="PingPong",e[e.Repeat=1]="Repeat",e[e.Clamp=2]="Clamp",e))(Vh||{});class Ss{constructor(e=0,t=0){s(this,"serializedVersion","2"),s(this,"time"),s(this,"value"),s(this,"inSlope",0),s(this,"outSlope",0),s(this,"tangentMode",0),this.time=e,this.value=t}unSerialized(e){this.serializedVersion=e.serializedVersion,this.time=e.time,this.value=e.value,this.tangentMode=e.tangentMode,this.inSlope="Infinity"==e.inSlope?NaN:e.inSlope,this.outSlope="Infinity"==e.outSlope?NaN:e.outSlope}unSerialized2(e){this.serializedVersion=e.serializedVersion,this.time=e.time,this.value=e.value,this.tangentMode=e.tangentMode,this.inSlope="Infinity"==e.inTangent?NaN:e.inTangent,this.outSlope="Infinity"==e.outTangent?NaN:e.outTangent}}class en{constructor(){s(this,"index"),s(this,"time"),s(this,"timeEnd"),s(this,"coeff",[])}}class ma{constructor(t,e=1,r=1){if(s(this,"_totalTime",1),s(this,"_cache",new en),s(this,"_cacheOut",{lhsIndex:0,rhsIndex:0}),s(this,"_InvalidateCache",!1),s(this,"curve",[]),s(this,"serializedVersion"),s(this,"preWarpMode"),s(this,"postWarpMode"),s(this,"rotationOrder"),t)for(let e=0;e<t.length;e++){var i=t[e];this.addKeyFrame(i)}this.preWarpMode=e,this.postWarpMode=r}get totalTime(){return this._totalTime}get first(){return this.curve[0]}get last(){return this.curve[this.curve.length-1]}addKeyFrame(e){-1==this.curve.indexOf(e)&&this.curve.push(e),this.calcTotalTime()}removeKeyFrame(e){e=this.curve.indexOf(e);-1!=e&&this.curve.splice(e,1),this.calcTotalTime()}calculateCacheData(e,t,r,i=0){var a,s,o,n=this.curve,h=n[t],n=n[r];e.index=t,e.time=h.time+i,e.timeEnd=n.time+i,e.index=t,r=n.time-h.time,r=Math.max(r,1e-4),i=n.value-h.value,t=h.outSlope,o=n.inSlope,e.coeff[0]=((s=t*r)+(o=o*r)-i-i)*(a=1/(r*r))/r,e.coeff[1]=(i+i+i-s-s-o)*a,e.coeff[2]=t,e.coeff[3]=h.value,this.setupStepped(e.coeff,h,n)}getValue(e){return e=this.wrapTime(e),this.findCurve(e,this._cacheOut),this.calculateCacheData(this._cache,this._cacheOut.lhsIndex,this._cacheOut.rhsIndex,0),this.evaluateCache(this._cache,e)}getKeyCount(){return this.curve.length}getKey(e){return this.curve[e]}unSerialized(t){this.preWarpMode=t.m_PreInfinity,this.postWarpMode=t.m_PostInfinity,this.rotationOrder=t.m_RotationOrder;var r=t.m_Curve.length;for(let e=0;e<r;e++)this.curve[e]=new Ss,this.curve[e].unSerialized(t.m_Curve[e.toString()]);return this.calcTotalTime(),this}unSerialized2(e){this.preWarpMode=e.preWrapMode,this.postWarpMode=e.postWrapMode;var t=e.keyFrames||e.keys,r=t.length;for(let e=0;e<r;e++)this.curve[e]=new Ss,this.curve[e].unSerialized2(t[e.toString()]);return this.calcTotalTime(),this}wrapTime(e){var t=this.curve,r=t[0].time,t=t[t.length-1].time;return e<r?e=2==this.preWarpMode?r:(0==this.preWarpMode?ts:rs)(e,r,t):t<e&&(e=2==this.postWarpMode?t:(0==this.postWarpMode?ts:rs)(e,r,t)),e}evaluateCache(e,t){t-=e.time;return t*(t*(t*e.coeff[0]+e.coeff[1])+e.coeff[2])+e.coeff[3]}findCurve(t,r){var i=this.curve;for(let e=1;e<i.length;e++){var a=i[e-1],s=i[e];a.time<=t&&s.time>t&&(r.lhsIndex=e-1,r.rhsIndex=e)}}setupStepped(e,t,r){(isNaN(t.outSlope)||isNaN(r.inSlope))&&(e[0]=0,e[1]=0,e[2]=0,e[3]=t.value)}invalidateCache(){this._InvalidateCache=!0}calcTotalTime(){let e=0;for(var t of this.curve)e=Math.max(e,t.time);this._totalTime=e}static scaleCurveValue(t,r){if(!t._InvalidateCache)for(let e=0;e<t.curve.length;e++){var i=t.curve[e];i.value*=r,i.inSlope*=r,i.outSlope*=r}t.invalidateCache()}}class Hh extends ma{constructor(){super(),s(this,"attribute",""),s(this,"propertyList"),s(this,"path")}unSerialized(e){var{attribute:t,path:r}=e;return this.attribute=t,this.path=r,this.propertyList=t.split("."),super.unSerialized(e.curve),this}}class Xh{constructor(){s(this,"curve",{})}}var kr=(e=>(e[e.Default=0]="Default",e[e.Clamp=1]="Clamp",e[e.Once=1]="Once",e[e.Loop=2]="Loop",e[e.PingPong=4]="PingPong",e[e.ClampForever=8]="ClampForever",e))(kr||{});class Oc{constructor(){s(this,"name"),s(this,"objAnimClip"),s(this,"totalTime",0),s(this,"time",0),s(this,"_stopTime",0),s(this,"_loopTime"),s(this,"_wrapMode"),s(this,"_sampleRate")}get wrapMode(){return this._wrapMode||(this._wrapMode=0),this._wrapMode}set wrapMode(e){this._wrapMode=e}parser(e){this.objAnimClip={};var t=e.AnimationClip,{m_Name:e,m_AnimationClipSettings:r,m_WrapMode:i,m_SampleRate:a}=t;this.name=e,this._wrapMode=i,this._sampleRate=a,this._loopTime=r.m_LoopTime;for(const h in t.m_EditorCurves)if(Object.prototype.hasOwnProperty.call(t.m_EditorCurves,h)){var s=t.m_EditorCurves[h],o=s.attribute,n=new Hh;n.unSerialized(s),this.totalTime=Math.max(this.totalTime,n.totalTime);let e=this.objAnimClip[s.path];e||(e=new Xh,this.objAnimClip[s.path]=e),e.curve[o]=n}}}class Ut{}s(Ut,"property",{"m_LocalPosition.x":"localPosition.x","m_LocalPosition.y":"localPosition.y","m_LocalPosition.z":"localPosition.z","m_LocalRotation.x":"localQuaternion.x","m_LocalRotation.y":"localQuaternion.y","m_LocalRotation.z":"localQuaternion.z","m_LocalRotation.w":"localQuaternion.w","localEulerAnglesRaw.x":"localRotation.x","localEulerAnglesRaw.y":"localRotation.y","localEulerAnglesRaw.z":"localRotation.z","m_LocalEulerAngles.x":"localRotation.x","m_LocalEulerAngles.y":"localRotation.y","m_LocalEulerAngles.z":"localRotation.z","m_LocalScale.x":"localScale.x","m_LocalScale.y":"localScale.y","m_LocalScale.z":"localScale.z","m_Color.r":"r","m_Color.g":"g","m_Color.b":"b","m_Color.a":"alpha","field of view":"camera3D.fov",m_IsActive:"visible",m_Sprite:"texture",m_FlipX:"flipX",m_FlipY:"flipY"}),s(Ut,"property_quaternion",{"m_LocalRotation.x":!0,"m_LocalRotation.y":!0,"m_LocalRotation.z":!0,"m_LocalRotation.w":!0}),s(Ut,"property_scale",{"m_LocalPosition.x":-1,"m_LocalPosition.y":1,"m_LocalPosition.z":1,"localEulerAnglesRaw.x":-1,"localEulerAnglesRaw.y":1,"localEulerAnglesRaw.z":1,"m_LocalEulerAngles.x":-1,"m_LocalEulerAngles.y":1,"m_LocalEulerAngles.z":1,"m_LocalRotation.x":-1,"m_LocalRotation.y":1,"m_LocalRotation.z":1,"m_LocalRotation.w":-1,"m_LocalScale.x":1,"m_LocalScale.y":1,"m_LocalScale.z":1,"m_Color.r":1,"m_Color.g":1,"m_Color.b":1,"m_Color.a":1,"field of view":1,m_IsActive:1,m_Sprite:1}),s(Ut,"property_offset",{"m_LocalPosition.x":0,"m_LocalPosition.y":0,"m_LocalPosition.z":0,"localEulerAnglesRaw.x":0,"localEulerAnglesRaw.y":0,"localEulerAnglesRaw.z":0,"m_LocalEulerAngles.x":0,"m_LocalEulerAngles.y":0,"m_LocalEulerAngles.z":0,"m_LocalRotation.x":0,"m_LocalRotation.y":0,"m_LocalRotation.z":0,"m_LocalRotation.w":0,"m_LocalScale.x":0,"m_LocalScale.y":0,"m_LocalScale.z":0,"field of view":0,"m_Color.r":0,"m_Color.g":0,"m_Color.b":0,"m_Color.a":0,m_IsActive:0,m_Sprite:0});const Ei=class{constructor(e){s(this,"_propertyAnimClip"),s(this,"_target"),s(this,"_animation"),s(this,"_propertyCache"),s(this,"_bindObjects",[]),s(this,"_currentClip"),s(this,"_frame",0),s(this,"_time",0),s(this,"_isPlaying",!0),s(this,"speed",1),this._target=e.object3D,this._animation=e,this._propertyAnimClip={},this._propertyCache={}}get object3D(){return this._target}get time(){return this._time}get currentClip(){return this._currentClip}getClip(e){return this._propertyAnimClip[e]}addClip(r){for(const s in(this._propertyAnimClip[r.name]=r).objAnimClip){let e=r.objAnimClip[s],t=this._target;t=""==s?this._target:this._target.getObjectByName(s);var i=e.curve;for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var a=Ut.property[o].split(".");if(t){-1==this._bindObjects.indexOf(t)&&this._bindObjects.push(t),null==this._propertyCache[s]&&(this._propertyCache[s]={}),this._propertyCache[s][o]={value:t[a[0]],property:a[1]};for(let e=1;e<a.length-1;e++)this._propertyCache[s][o]={value:t[a[e]],property:a[e+1]}}}}return this}play(e,t=!0){var r=this._propertyAnimClip[e];return r?(this._isPlaying=!0,!t&&this._currentClip&&this._currentClip.name==e||(this._time=0),this._currentClip=r,this._currentClip):null}stop(){return this._isPlaying=!1,this}toggle(){return this._isPlaying=!this._isPlaying,this}get isPlaying(){return this._isPlaying}update(e,t){e*=.001,t*=.001,this._currentClip&&this._frame!=e&&this._isPlaying&&(this._frame=e,e=this._time,this._time=this.calcTime(e+t*this.speed),this.validProperty(),this._currentClip.wrapMode!=kr.Loop&&this._currentClip.wrapMode!=kr.Default&&(0<this.speed?this._time>=this._currentClip.totalTime:this._time<=0)&&(this._isPlaying=!1,this._animation.statusCall(Ei.Complete,e,this._time)),this._animation.statusCall(Ei.Seek,e,this._time))}seek(e){return this._time=this.calcTime(e),this.validProperty(),this}calcTime(e){return e=this._currentClip.wrapMode==kr.Loop||this._currentClip.wrapMode==kr.Default?Is(e,this._currentClip.totalTime):Y(e,0,this._currentClip.totalTime)}validProperty(){if(this._target)for(const n in this._currentClip.objAnimClip){let e=this._currentClip.objAnimClip[n],t=!1,r=e.curve;for(const h in r){var i,a,s;Object.prototype.hasOwnProperty.call(r,h)&&(s=r[h],i=this._propertyCache[n][h],a=Ut.property_scale[h],t=t||Ut.property_quaternion[h],s=s.getValue(this._time)*a+Ut.property_offset[h],i.value[i.property]=s)}var o;t&&(o=this._target.transform,N.getEuler(o.localRotation,o.localRotQuat,!0,"YXZ"))}for(var e of this._bindObjects)e.transform.notifyChange()}};let Kt=Ei;s(Kt,"Complete",0),s(Kt,"Seek",1);class Ac{constructor(){s(this,"clipName"),s(this,"data"),s(this,"time")}}class nr extends st{constructor(e,t){super(t),s(this,"animation"),s(this,"frame"),this.animation=e}}s(nr,"SEEK","SEEK"),s(nr,"COMPLETE","COMPLETE");class tn extends ve{constructor(){super(),s(this,"_animator"),s(this,"_clips",[]),s(this,"defaultClip"),s(this,"autoPlay"),s(this,"_seekEvent"),s(this,"_completeEvent"),s(this,"_keyFrameList"),this._seekEvent=new nr(this,nr.SEEK),this._completeEvent=new nr(this,nr.COMPLETE),this._keyFrameList={}}registerEventKeyFrame(e){let t=this._keyFrameList[e.clipName];null==t&&(this._keyFrameList[e.clipName]=t=[]),t.push(e)}init(){this._animator=new Kt(this)}onUpdate(){this.enable&&this._animator&&this._animator.update(de.time,de.delta)}appendClip(e){this._clips.push(e),this._animator.addClip(e)}statusCall(e,t,r){if(e==Kt.Complete)this.eventDispatcher.dispatchEvent(this._completeEvent);else if(e==Kt.Seek&&t!=r){e=this._keyFrameList[this.currentClip.name];if(e)for(var i of e)i.time>t&&i.time<=r&&(this._seekEvent.data=this._seekEvent.frame=i,this.eventDispatcher.dispatchEvent(this._seekEvent))}}set speed(e){this._animator.speed=e}get speed(){return this._animator.speed}stop(){this._animator&&this._animator.stop()}toggle(){this._animator&&this._animator.toggle()}getClip(e){return this._animator?this._animator.getClip(e):null}get currentClip(){return this._animator?this._animator.currentClip:null}get time(){return this._animator.time}seek(e){this._animator&&this._animator.seek(e)}play(e,t=!0){return this._animator?this._animator.play(e,t):null}start(){super.start(),this.autoPlay&&this.play(this.defaultClip)}cloneTo(e){var r=e.addComponent(tn);r.autoPlay=this.autoPlay,r.defaultClip=this.defaultClip;for(let e=0,t=this._clips.length;e<t;e++)r.appendClip(this._clips[e])}}class Uc extends ve{constructor(){super(...arguments),s(this,"_targetRenderers",{}),s(this,"_vec3",new p),s(this,"_matrix4",new N),s(this,"_quaternion",new j)}init(e){for(const r of this.fetchMorphRenderers(this.object3D)){pt.hasMask(r.rendererMask,Ue.MorphTarget)&&r.selfCloneMaterials("MORPH_TARGET_UUID");for(const i in r.geometry.morphTargetDictionary){var t=this._targetRenderers[i]||[];t.push(r),this._targetRenderers[i]=t}}}getMorphRenderersByKey(e){return this._targetRenderers[e]}cloneMorphRenderers(){var e,t={};for(e in this._targetRenderers)t[e]=this._targetRenderers[e];return t}applyBlendShape(e,t,r=1){if(e)for(var i in this._vec3.setFromArray(e.transform.transform[3]),this._vec3.multiplyScalar(r),this.object3D.transform.localPosition=this._vec3,this._vec3.setFromArray(e.transform.transform[2]),this._matrix4.copyColFrom(2,this._vec3),this._vec3.setFromArray(e.transform.transform[1]),this._matrix4.copyColFrom(1,this._vec3),this._vec3.setFromArray(e.transform.transform[0]),this._matrix4.copyColFrom(0,this._vec3),this._matrix4.transpose(),this._quaternion.fromMatrix(this._matrix4),this.object3D.localQuaternion=this._quaternion,t){var a=this._targetRenderers[i],s=t[i],s=e.texture[s];this.applyMorphTargetInfluence(i,s,a)}else console.warn("blendShape is null")}applyMorphTargetInfluence(e,t,r){for(var i of r)i.setMorphInfluence(e,t)}fetchMorphRenderers(e){var t,r=[];for(t of e.getComponentsInChild(Le))t.hasMask(Ue.MorphTarget)&&r.push(t);return r}}class Bc{constructor(){s(this,"texture"),s(this,"transform")}}class zc{constructor(e,t){s(this,"_computePipeline"),s(this,"_computeBindGroup");var r=E.device;this._computePipeline=r.createComputePipeline({layout:"auto",compute:{module:r.createShaderModule({code:e}),entryPoint:"CsMain"}}),this._computeBindGroup=r.createBindGroup({layout:this._computePipeline.getBindGroupLayout(0),entries:t})}compute(e,t,r,i){e=e.beginComputePass();return e.setPipeline(this._computePipeline),e.setBindGroup(0,this._computeBindGroup),e.dispatchWorkgroups(t,r,i),e.end(),this}}class Nc extends ya{constructor(){super(),s(this,"numJoint"),s(this,"numState"),s(this,"time"),s(this,"weight"),s(this,"argumentsData"),s(this,"_isDirty",!1),s(this,"_argumentsBuffer"),s(this,"_argumentsBufferEntries"),this.allocationMemorySet([{name:"numJoint",data:[0]},{name:"numState",data:[0]},{name:"retain1",data:[0]},{name:"retain2",data:[0]},{name:"time",data:[0,0]},{name:"weight",data:[0,0]}]),this.generateGPUBuffer()}getGPUBuffer(){return this._argumentsBuffer}getGPUBindGroupEntry(){return this._argumentsBufferEntries}updateGPUBuffer(){return this._isDirty&&(this._isDirty=!1,E.device.queue.writeBuffer(this._argumentsBuffer,0,this.shareDataBuffer)),this}allocationMemorySet(t){this.argumentsData={};let r=0;for(let e=0;e<t.length;e++){var i=t[e];r+=i.data.length}this.allocation(4*r);for(let e=0;e<t.length;e++){var a=t[e],s=a.name;this.argumentsData[s]=this.allocation_node(4*a.data.length),this[s]=this.argumentsData[s]}}generateGPUBuffer(){var e=E.device;this._argumentsBuffer=e.createBuffer({size:this.shareDataBuffer.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!1}),this._argumentsBufferEntries={binding:0,resource:{buffer:this._argumentsBuffer,offset:0,size:this.shareDataBuffer.byteLength}}}}class Fc extends ya{constructor(){super(),s(this,"numJoint"),s(this,"numFrame"),s(this,"retain0"),s(this,"retain1"),s(this,"argumentsData"),s(this,"_isDirty",!1),s(this,"_argumentsBuffer"),s(this,"_argumentsBufferEntries"),this.allocationMemorySet([{name:"numJoint",data:[0]},{name:"numFrame",data:[0]},{name:"retain0",data:[0]},{name:"retain1",data:[0]}]),this.generateGPUBuffer()}getGPUBuffer(){return this._argumentsBuffer}getGPUBindGroupEntry(){return this._argumentsBufferEntries}updateGPUBuffer(){this._isDirty&&(this._isDirty=!1,E.device.queue.writeBuffer(this._argumentsBuffer,0,this.shareDataBuffer))}allocationMemorySet(t){this.argumentsData={};let r=0;for(let e=0;e<t.length;e++){var i=t[e];r+=i.data.length}this.allocation(4*r);for(let e=0;e<t.length;e++){var a=t[e],s=a.name;this.argumentsData[s]=this.allocation_node(4*a.data.length),this[s]=this.argumentsData[s]}}generateGPUBuffer(){var e=E.device;this._argumentsBuffer=e.createBuffer({size:this.shareDataBuffer.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!1}),this._argumentsBufferEntries={binding:0,resource:{buffer:this._argumentsBuffer,offset:0,size:this.shareDataBuffer.byteLength}}}}let kc=`
  ${_a}

  struct Arguments {
    numJoint: f32,
    numState: f32,
    retain1: f32,
    retain2: f32,
    time: vec2<f32>,
    weight: vec2<f32>,
  };

  struct JointData {
    scale: vec4<f32>,
    rotation: vec4<f32>,
    translation: vec4<f32>,
  };

  @group(0) @binding(0) var<storage, read_write> args: Arguments;
  @group(0) @binding(1) var<storage, read_write> jointsFinalMatrix: array<mat4x4<f32>>;
  @group(0) @binding(2) var<storage, read_write> jointsWorldMatrix: array<mat4x4<f32>>;

  @compute @workgroup_size(1)
  fn CsMain(@builtin(workgroup_id) workgroup_id: vec3<u32>, @builtin(local_invocation_index) local_index: u32) {
    let numJoint = i32(args.numJoint);
    let numState = i32(args.numState);
    let nJointIndex = i32(workgroup_id.x);

    jointsFinalMatrix[nJointIndex] = mixMatrix4x4(jointsWorldMatrix[0 * numJoint + nJointIndex], jointsWorldMatrix[1 * numJoint + nJointIndex], args.time[0]) * args.weight[0];

    for (var i = 1; i < numState; i++) {
      jointsFinalMatrix[nJointIndex] += mixMatrix4x4(jointsWorldMatrix[(i * 2 + 0) * numJoint + nJointIndex], jointsWorldMatrix[(i * 2 + 1) * numJoint + nJointIndex], args.time[i]) * args.weight[i];
    }
  }
`,Gc=`
  ${_a}

  struct Arguments {
    numJoint: f32,
    numFrame: f32,
    retain0: f32,
    retain1: f32,
  };

  struct JointData {
    scale: vec4<f32>,
    rotation: vec4<f32>,
    translation: vec4<f32>,
  };

  @group(0) @binding(0) var<storage, read_write> args: Arguments;
  @group(0) @binding(1) var<storage, read_write> jointsKeyframe: array<JointData>;
  @group(0) @binding(2) var<storage, read_write> jointsWorldMatrix: array<mat4x4<f32>>;
  @group(0) @binding(3) var<storage, read_write> jointsParentIndex: array<f32>;

  @compute @workgroup_size(1)
  fn CsMain(@builtin(workgroup_id) workgroup_id: vec3<u32>, @builtin(local_invocation_index) local_index: u32) {
    let numJoint = i32(args.numJoint);
    let nFrameIndex = i32(workgroup_id.x);
    for (var nJointIndex = 0; nJointIndex < numJoint; nJointIndex++) {
      let dataIndex = nFrameIndex * numJoint + nJointIndex;
      let joint = jointsKeyframe[dataIndex];
      let jointLocalMatrix = MakeMatrix4x4(joint.scale.xyz, joint.rotation, joint.translation.xyz);

      let nParentIndex = i32(jointsParentIndex[nJointIndex]);
      if (nParentIndex < 0) {
        jointsWorldMatrix[dataIndex] = jointLocalMatrix;
      } else {
        jointsWorldMatrix[dataIndex] = jointsWorldMatrix[nFrameIndex * numJoint + nParentIndex] * jointLocalMatrix;
      }
    }
  }
`;class Vc extends ve{constructor(){super(),s(this,"context"),s(this,"gain"),this.context=new AudioContext,this.gain=this.context.createGain(),this.gain.connect(this.context.destination)}start(){}onUpdate(){var e,t,r,i,a;this.context&&(e=this.context.listener,t=this.object3D.transform.worldPosition,r=this.object3D.transform.forward,i=this.object3D.transform.up,isNaN(r.x)||(e.positionX?(a=this.context.currentTime,e.positionX.linearRampToValueAtTime(t.x,a),e.positionY.linearRampToValueAtTime(t.y,a),e.positionZ.linearRampToValueAtTime(t.z,a),e.forwardX.linearRampToValueAtTime(r.x,a),e.forwardY.linearRampToValueAtTime(r.y,a),e.forwardZ.linearRampToValueAtTime(r.z,a),e.upX.linearRampToValueAtTime(i.x,a),e.upY.linearRampToValueAtTime(i.y,a),e.upZ.linearRampToValueAtTime(i.z,a)):(e.setPosition(t.x,t.y,t.z),e.setOrientation(r.x,r.y,r.z,i.x,i.y,i.z))))}destroy(){this.gain.disconnect(),this.context.close(),super.destroy()}}class Zt extends ut{constructor(){super(),A.register("UnLitShader",Zs);var e=this.setShader("UnLitShader","UnLitShader"),t=(e.setShaderEntry("VertMain","FragMain"),e.setUniformVector4("transformUV1",new X(0,0,1,1)),e.setUniformVector4("transformUV2",new X(0,0,1,1)),e.setUniformColor("baseColor",new b),e.setUniformFloat("alphaCutoff",.5),e.shaderState);t.acceptShadow=!1,t.receiveEnv=!1,t.acceptGI=!1,t.useLight=!1,e.setUniformColor("ccc",new b(1,0,0,1)),this.baseMap=_.res.whiteTexture}set envMap(e){}set shadowMap(e){}debug(){}}class mi extends tr{constructor(e=1,t=1,r=1){super(),s(this,"width"),s(this,"height"),s(this,"depth"),this.width=e,this.height=t,this.depth=r,this.initVertex()}initVertex(){var e=this.width/2,t=this.height/2,r=this.depth/2,e=(this.bounds=new je(p.ZERO.clone(),new p(this.width,this.height,this.depth)),new Float32Array([-e,t,r,e,t,r,e,t,-r,-e,t,-r,-e,t,r,e,t,-r,e,-t,r,-e,-t,r,-e,-t,-r,e,-t,-r,e,-t,r,-e,-t,-r,-e,-t,r,-e,t,r,-e,t,-r,-e,-t,-r,-e,-t,r,-e,t,-r,e,t,r,e,-t,r,e,-t,-r,e,t,-r,e,t,r,e,-t,-r,e,t,r,-e,t,r,-e,-t,r,-e,-t,r,e,-t,r,e,t,r,e,-t,-r,-e,-t,-r,-e,t,-r,e,t,-r,e,-t,-r,-e,t,-r])),t=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),r=new Float32Array([1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0]),i=[0,2,1,3,5,4,6,8,7,9,11,10,12,14,13,15,17,16,18,20,19,21,23,22,24,26,25,27,29,28,30,32,31,33,35,34],a=new Uint16Array(i.reverse());this.setIndices(a),this.setAttribute(H.position,e),this.setAttribute(H.normal,t),this.setAttribute(H.uv,r),this.setAttribute(H.TEXCOORD_1,r),this.addSubGeometry({indexStart:0,indexCount:i.length,vertexStart:0,index:0})}}class Wh extends ve{constructor(){super(),s(this,"listener",null),s(this,"context",null),s(this,"gainNode",null),s(this,"source",null),s(this,"_options",{loop:!0,volume:1}),s(this,"playing",!1),s(this,"_currentTime",0),s(this,"_buffer",null)}setLister(e){return this.listener=e,this.context=e.context,this.gainNode=this.context.createGain(),this.gainNode.connect(this.listener.gain),this.context.addEventListener("statechange",()=>{var e;"closed"===(null==(e=this.context)?void 0:e.state)&&(console.warn("AudioListener removed"),this.stop(),null!=(e=this.gainNode)&&e.disconnect(),this.listener=null,this.context=null,this.gainNode=null)}),this}async load(e,t={}){Object.assign(this._options,t);t=await(await fetch(e)).arrayBuffer();this._buffer=await(null==(e=this.context)?void 0:e.decodeAudioData(t))}async loadBuffer(e,t={}){Object.assign(this._options,t),this._buffer=await(null==(t=this.context)?void 0:t.decodeAudioData(e))}play(){var e;return this.context?this.playing?console.warn("Audio is alredy playing"):this._buffer?((e=this.context.createBufferSource()).buffer=this._buffer,e.loop=this._options.loop,this.source=e,this.connect(),this.source.start(0,this._currentTime),this.setVolume(this._options.volume),this.playing=!0):console.warn("Audio is not ready"):console.warn("no audio source yet"),this}pause(){var e;return this.playing?(this._currentTime=(null==(e=this.context)?void 0:e.currentTime)||0,null!=(e=this.source)&&e.stop(),null!=(e=this.source)&&e.disconnect(),this.playing=!1):console.warn("Audio is not playing"),this}stop(){return this.pause(),this._currentTime=0,this}setVolume(e){var t;return this.context?null!=(t=this.gainNode)&&t.gain.setTargetAtTime(e,this.context?this.context.currentTime:0,.01):console.warn("no audio source yet"),this}connect(){var e;null!=(e=this.source)&&e.connect(this.gainNode)}onUpdate(){super.onUpdate()}destroy(){var e;this.stop(),null!=(e=this.gainNode)&&e.disconnect(),super.destroy()}}class Hc extends Wh{constructor(){super(),s(this,"panner"),s(this,"_helper",!1),s(this,"_thickness",.1),s(this,"_step",16),s(this,"_lines",[])}setLister(e){return super.setLister(e),this.panner=null==(e=this.context)?void 0:e.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gainNode),this}showHelper(e,t){this._helper=!0,e&&(this._thickness=e),t&&(this._step=t);var r=this.panner.coneInnerAngle,i=this.panner.coneOuterAngle,a=(i-r)/2,s=this.panner.refDistance,o=this.panner.maxDistance,n=new mi(1,1,1),h=new Zt,l=(h.baseColor=new b(1,0,0),new Zt),u=(l.baseColor=new b(0,0,1),new Zt),c=(u.baseColor=new b(0,1,0),new Zt);c.baseColor=new b(1,1,0);for(let e=0;e<this._step;e++){var d=new ee,f=e*i/(this._step-1),m=f<a||r+a<f,g=new ee,v=g.addComponent(Le),v=(v.geometry=n,v.material=m?l:h,v.castShadow=!1,v.castGI=!1,g.localScale=new p(s,this._thickness,this._thickness),g.x=s/2,d.addChild(g),new ee),g=v.addComponent(Le);g.geometry=n,g.material=m?c:u,g.castShadow=!1,g.castGI=!1,v.localScale=new p(o,this._thickness/2,this._thickness/2),v.x=o/2,d.addChild(v),d.rotationY=i/2-90-f,this.object3D.addChild(d),this._lines.push(d)}}hideHelper(){this._helper=!1;for(var e of this._lines)e.removeAllChild(),e.removeFromParent(),e.dispose();this._lines.length=0}toggleHelper(){this._helper?this.hideHelper():this.showHelper()}updateHeler(){this.hideHelper(),this.showHelper()}get refDistance(){return this.panner.refDistance}set refDistance(e){this.panner.refDistance=e,this._helper&&this.updateHeler()}get rolloffFactor(){return this.panner.rolloffFactor}set rolloffFactor(e){this.panner.rolloffFactor=e}get distanceModel(){return this.panner.distanceModel}set distanceModel(e){this.panner.distanceModel=e}get maxDistance(){return this.panner.maxDistance}set maxDistance(e){this.panner.maxDistance=e,this._helper&&this.updateHeler()}setDirectionalCone(e,t,r){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=r,this._helper&&this.updateHeler(),this}connect(){var e;null!=(e=this.source)&&e.connect(this.panner)}start(){}stop(){return super.stop()}onUpdate(){var e,t,r,i;this.playing&&(e=this.panner,t=this.object3D.transform.worldPosition,r=this.object3D.transform.forward,isNaN(r.x)||(e.positionX&&this.context?(i=this.context.currentTime,e.positionX.linearRampToValueAtTime(t.x,i),e.positionY.linearRampToValueAtTime(t.y,i),e.positionZ.linearRampToValueAtTime(t.z,i),e.orientationX.linearRampToValueAtTime(r.x,i),e.orientationY.linearRampToValueAtTime(r.y,i),e.orientationZ.linearRampToValueAtTime(r.z,i)):(e.setPosition(t.x,t.y,t.z),e.setOrientation(r.x,r.y,r.z))))}destroy(){this.panner.disconnect(),this.hideHelper(),super.destroy()}}class Xc{constructor(e=null,t=null){s(this,"_autoUpdate",!0),s(this,"_target"),s(this,"_lookAtObject"),s(this,"_origin",new p(0,0,0)),s(this,"_speed",300),this._target=e,this._lookAtObject=t}get target(){return this._target}set target(e){this._target!=e&&(this._target=e)}get lookAtObject(){return this._lookAtObject}set lookAtObject(e){this._lookAtObject!=e&&(this._lookAtObject=e)}get speed(){return this._speed}set speed(e){this._speed=e}update(){}}class Wc extends ve{constructor(){super(),s(this,"focus"),s(this,"distance",5),s(this,"_camera")}start(){this._camera=this.object3D.getOrAddComponent(ii),this._camera?this.focus?(_.inputSystem.addEventListener(L.POINTER_WHEEL,this.mouseWheel,this),_.inputSystem.addEventListener(L.POINTER_UP,this.mouseUp,this),_.inputSystem.addEventListener(L.POINTER_DOWN,this.mouseDown,this)):console.error("FirstPersonCameraController need target"):console.error("FirstPersonCameraController need camera")}mouseDown(e){_.inputSystem.addEventListener(L.POINTER_MOVE,this.mouseMove,this)}mouseUp(e){_.inputSystem.removeEventListener(L.POINTER_MOVE,this.mouseMove,this)}mouseMove(e){var t=this.transform.localRotation;t.y+=.01*e.movementX,t.x+=.01*e.movementY,this.transform.localRotation=t}mouseWheel(e){this.distance+=.1*_.inputSystem.wheelDelta}onUpdate(){var e=new p,e=(this._camera.transform.forward.scaleToRef(this.distance,e),this.focus.transform.worldPosition);this._camera.transform.localPosition=e}destroy(){_.inputSystem.removeEventListener(L.POINTER_WHEEL,this.mouseWheel,this),_.inputSystem.removeEventListener(L.POINTER_UP,this.mouseUp,this),_.inputSystem.removeEventListener(L.POINTER_DOWN,this.mouseDown,this),super.destroy()}}var Oe=(e=>(e[e.Key_BackSpace=8]="Key_BackSpace",e[e.Key_Tab=9]="Key_Tab",e[e.Key_Clear=12]="Key_Clear",e[e.Key_Enter=13]="Key_Enter",e[e.Key_Shift_L=16]="Key_Shift_L",e[e.Key_Control_L=17]="Key_Control_L",e[e.Key_Alt_L=18]="Key_Alt_L",e[e.Key_Pause=19]="Key_Pause",e[e.Key_CapsLock=20]="Key_CapsLock",e[e.Key_Escape=21]="Key_Escape",e[e.Key_Esc=27]="Key_Esc",e[e.Key_Space=32]="Key_Space",e[e.Key_Prior=33]="Key_Prior",e[e.Key_Next=34]="Key_Next",e[e.Key_End=35]="Key_End",e[e.Key_Home=36]="Key_Home",e[e.Key_Left=37]="Key_Left",e[e.Key_Up=38]="Key_Up",e[e.Key_Right=39]="Key_Right",e[e.Key_Down=40]="Key_Down",e[e.Key_Select=41]="Key_Select",e[e.Key_Print=42]="Key_Print",e[e.Key_Execute=43]="Key_Execute",e[e.Key_Insert=45]="Key_Insert",e[e.Key_Delete=46]="Key_Delete",e[e.Key_Help=47]="Key_Help",e[e.Key_0=48]="Key_0",e[e.Key_1=49]="Key_1",e[e.Key_2=50]="Key_2",e[e.Key_3=51]="Key_3",e[e.Key_4=52]="Key_4",e[e.Key_5=53]="Key_5",e[e.Key_6=54]="Key_6",e[e.Key_7=55]="Key_7",e[e.Key_8=56]="Key_8",e[e.Key_9=57]="Key_9",e[e.Key_A=65]="Key_A",e[e.Key_B=66]="Key_B",e[e.Key_C=67]="Key_C",e[e.Key_D=68]="Key_D",e[e.Key_E=69]="Key_E",e[e.Key_F=70]="Key_F",e[e.Key_G=71]="Key_G",e[e.Key_H=72]="Key_H",e[e.Key_I=73]="Key_I",e[e.Key_J=74]="Key_J",e[e.Key_K=75]="Key_K",e[e.Key_L=76]="Key_L",e[e.Key_M=77]="Key_M",e[e.Key_N=78]="Key_N",e[e.Key_O=79]="Key_O",e[e.Key_P=80]="Key_P",e[e.Key_Q=81]="Key_Q",e[e.Key_R=82]="Key_R",e[e.Key_S=83]="Key_S",e[e.Key_T=84]="Key_T",e[e.Key_U=85]="Key_U",e[e.Key_V=86]="Key_V",e[e.Key_W=87]="Key_W",e[e.Key_X=88]="Key_X",e[e.Key_Y=89]="Key_Y",e[e.Key_Z=90]="Key_Z",e[e.Key_KP_0=96]="Key_KP_0",e[e.Key_KP_1=97]="Key_KP_1",e[e.Key_KP_2=98]="Key_KP_2",e[e.Key_KP_3=99]="Key_KP_3",e[e.Key_KP_4=100]="Key_KP_4",e[e.Key_KP_5=101]="Key_KP_5",e[e.Key_KP_6=102]="Key_KP_6",e[e.Key_KP_7=103]="Key_KP_7",e[e.Key_KP_8=104]="Key_KP_8",e[e.Key_KP_9=105]="Key_KP_9",e[e.Key_Multiply=106]="Key_Multiply",e[e.Key_Add=107]="Key_Add",e[e.Key_Separator=108]="Key_Separator",e[e.Key_Subtract=109]="Key_Subtract",e[e.Key_Decimal=110]="Key_Decimal",e[e.Key_Divide=111]="Key_Divide",e[e.Key_F1=112]="Key_F1",e[e.Key_F2=113]="Key_F2",e[e.Key_F3=114]="Key_F3",e[e.Key_F4=115]="Key_F4",e[e.Key_F5=116]="Key_F5",e[e.Key_F6=117]="Key_F6",e[e.Key_F7=118]="Key_F7",e[e.Key_F8=119]="Key_F8",e[e.Key_F9=120]="Key_F9",e[e.Key_F10=121]="Key_F10",e[e.Key_F11=122]="Key_F11",e[e.Key_F12=123]="Key_F12",e[e.Key_F13=124]="Key_F13",e[e.Key_F14=125]="Key_F14",e[e.Key_F15=126]="Key_F15",e[e.Key_F16=127]="Key_F16",e[e.Key_F17=128]="Key_F17",e[e.Key_F18=129]="Key_F18",e[e.Key_F19=130]="Key_F19",e[e.Key_F20=131]="Key_F20",e[e.Key_F21=132]="Key_F21",e[e.Key_F22=133]="Key_F22",e[e.Key_F23=134]="Key_F23",e[e.Key_F24=135]="Key_F24",e[e.Key_Num_Lock=136]="Key_Num_Lock",e[e.Key_Scroll_Lock=137]="Key_Scroll_Lock",e))(Oe||{});class Yc extends ve{constructor(){super(),s(this,"moveSpeed",2),s(this,"targetPos",new p(0,0,10)),s(this,"lookAtPos",new p(0,0,0)),s(this,"config",{shiftMoveScale:20}),s(this,"_moveScale",1),s(this,"_dir"),s(this,"_mouseFactory",25),s(this,"_factory",1.5),s(this,"_mouseDown",!1),s(this,"_lastPos"),s(this,"_keyState"),this._lastPos=new p,this._keyState={front:!1,back:!1,left:!1,right:!1,q:!1,e:!1},this.setCamera(new p(0,0,100),new p(0,0,0))}setCamera(e,t){this.targetPos.copyFrom(e),this.lookAtPos.copyFrom(t),this.Reset()}start(){_.inputSystem.addEventListener(L.POINTER_WHEEL,this.mouseWheel,this),_.inputSystem.addEventListener(L.POINTER_UP,this.mouseUp,this),_.inputSystem.addEventListener(L.POINTER_DOWN,this.mouseDown,this),_.inputSystem.addEventListener(Tt.KEY_UP,this.keyUp,this),_.inputSystem.addEventListener(Tt.KEY_DOWN,this.keyDown,this),this.transform.lookAt(this.targetPos,this.lookAtPos)}mouseWheel(e){}keyUp(e){switch(e.keyCode){case Oe.Key_W:this._keyState.front=!1;break;case Oe.Key_S:this._keyState.back=!1;break;case Oe.Key_A:this._keyState.left=!1;break;case Oe.Key_D:this._keyState.right=!1;break;case Oe.Key_Shift_L:this._moveScale=1;break;case Oe.Key_Q:this._keyState.q=!1;break;case Oe.Key_E:this._keyState.e=!1;break;case Oe.Key_F:this.transform.lookAt(this.targetPos,this.lookAtPos)}}keyDown(e){switch(e.keyCode){case Oe.Key_W:this._keyState.front=!0;break;case Oe.Key_S:this._keyState.back=!0;break;case Oe.Key_A:this._keyState.left=!0;break;case Oe.Key_D:this._keyState.right=!0;break;case Oe.Key_Q:this._keyState.q=!0;break;case Oe.Key_E:this._keyState.e=!0;break;case Oe.Key_Shift_L:this._moveScale=this.config.shiftMoveScale}}Reset(){this._lastPos.x=_.inputSystem.mouseLastX,this._lastPos.y=_.inputSystem.mouseLastY}mouseDown(e){this.Reset(),this._mouseDown=!0}mouseUp(e){this.Reset(),this._mouseDown=!1}get factory(){return this._factory}set factory(e){this._factory=e}get mouseFactory(){return this._mouseFactory}set mouseFactory(e){this._mouseFactory=e}internal(e,t,r){return(t-e)*r}onUpdate(){this.transform.updateWorldMatrix();var e,t=this.transform,r=Y(de.delta,0,.016);this._mouseDown&&(t.rotationY-=this.internal(t.rotationY+.25*(_.inputSystem.mouseLastX-this._lastPos.x),t.rotationY,r*this._mouseFactory),t.rotationX-=this.internal(t.rotationX+.25*(_.inputSystem.mouseLastY-this._lastPos.y),t.rotationX,r*this._mouseFactory),this.Reset()),this._keyState.front&&(e=t.forward,t.x-=this.internal(t.x+e.x*this.moveSpeed*this._moveScale,t.x,r*this._factory),t.y-=this.internal(t.y+e.y*this.moveSpeed*this._moveScale,t.y,r*this._factory),t.z-=this.internal(t.z+e.z*this.moveSpeed*this._moveScale,t.z,r*this._factory)),this._keyState.back&&(e=t.forward,t.x+=this.internal(t.x+e.x*this.moveSpeed*this._moveScale,t.x,r*this._factory),t.y+=this.internal(t.y+e.y*this.moveSpeed*this._moveScale,t.y,r*this._factory),t.z+=this.internal(t.z+e.z*this.moveSpeed*this._moveScale,t.z,r*this._factory)),this._keyState.left&&(e=t.left,t.x+=this.internal(t.x+e.x*this.moveSpeed*this._moveScale,t.x,r*this._factory),t.y+=this.internal(t.y+e.y*this.moveSpeed*this._moveScale,t.y,r*this._factory),t.z+=this.internal(t.z+e.z*this.moveSpeed*this._moveScale,t.z,r*this._factory)),this._keyState.right&&(e=t.left,t.x-=this.internal(t.x+e.x*this.moveSpeed*this._moveScale,t.x,r*this._factory),t.y-=this.internal(t.y+e.y*this.moveSpeed*this._moveScale,t.y,r*this._factory),t.z-=this.internal(t.z+e.z*this.moveSpeed*this._moveScale,t.z,r*this._factory)),this._keyState.q&&(t.y=ar(t.y,t.y-this.moveSpeed*this._moveScale,r*this._factory)),this._keyState.e&&(t.y=ar(t.y,t.y+this.moveSpeed*this._moveScale,r*this._factory))}destroy(){_.inputSystem.removeEventListener(L.POINTER_WHEEL,this.mouseWheel,this),_.inputSystem.removeEventListener(L.POINTER_UP,this.mouseUp,this),_.inputSystem.removeEventListener(L.POINTER_DOWN,this.mouseDown,this),_.inputSystem.removeEventListener(Tt.KEY_UP,this.keyUp,this),_.inputSystem.removeEventListener(Tt.KEY_DOWN,this.keyDown,this),super.destroy()}}class or{static add(e,t,r){return(r=r||new p).x=e.x+t.x,r.y=e.y+t.y,r.z=e.z+t.z,r}static sub(e,t,r){return(r=r||new p).x=e.x-t.x,r.y=e.y-t.y,r.z=e.z-t.z,r}static mul(e,t,r){return(r=r||new p).x=e.x*t.x,r.y=e.y*t.y,r.z=e.z*t.z,r}static mulScale(e,t,r){return(r=r||new p).x=e.x*t,r.y=e.y*t,r.z=e.z*t,r}static div(e,t,r){return(r=r||new p).x=e.x/t.x,r.y=e.y/t.y,r.z=e.z/t.z,r}static normalize(e){return e.clone().normalize()}static dot(e,t){var r=p.HELP_0;return r.copyFrom(e),r.dotProduct(t)}static calculateVectorAngle_xz(e,t){return Math.acos((e.x*t.x+e.y*t.y)/Math.sqrt((e.x*e.x+e.y*e.y)*(t.x*t.x+t.y*t.y)))}static distance(e,t){return p.distance(e,t)}static getRandomXYZ(e=-100,t=100){return new p(Math.random()*t+e,Math.random()*t+e,Math.random()*t+e)}static getRandomV3(e=-100,t=100,r,i){return new p(Math.random()*t+e,Math.random()*i+r,Math.random()*t+e)}}class jc extends ve{constructor(){super(),s(this,"camera"),s(this,"minDistance",.1),s(this,"maxDistance",500),s(this,"rollSmooth",15),s(this,"dragSmooth",20),s(this,"wheelSmooth",10),s(this,"wheelStep",.002),s(this,"mouseRightFactor",.5),s(this,"mouseLeftFactor",20),s(this,"smooth",!0),s(this,"_wheelStep",.002),s(this,"_distance",0),s(this,"distance",10),s(this,"_roll",0),s(this,"roll",0),s(this,"_pitch",0),s(this,"pitch",0),s(this,"_currentPos"),s(this,"_targetPos"),s(this,"_mouseLeftDown",!1),s(this,"_mouseRightDown",!1),s(this,"_bottomClamp",89.99),s(this,"_topClamp",-89.99),s(this,"_tempDir",new p),s(this,"_tempPos",new p),this._currentPos=new ee,this._targetPos=new ee}start(){this.camera=this.object3D.getOrAddComponent(ii),_.inputSystem.addEventListener(L.POINTER_DOWN,this.onMouseDown,this),_.inputSystem.addEventListener(L.POINTER_MOVE,this.onMouseMove,this),_.inputSystem.addEventListener(L.POINTER_UP,this.onMouseUp,this),_.inputSystem.addEventListener(L.POINTER_WHEEL,this.onMouseWheel,this)}setCamera(e,t,r,i){this.roll=e,this.pitch=t,this.distance=r,this.maxDistance=1.2*r,i&&this._targetPos.transform.localPosition.copy(i)}focusByBounds(e){e=Xr.genMeshBounds(e);this.target=e.center,console.log(e.size),console.log(e.center)}set target(e){this._targetPos.transform.localPosition.copy(e)}get target(){return this._targetPos.transform.localPosition}onMouseWheel(e){this.enable&&(this._wheelStep=this.wheelStep*or.distance(this._currentPos.transform.worldPosition,this.camera.transform.worldPosition)/10,this.distance-=_.inputSystem.wheelDelta*this._wheelStep,this.distance=Y(this.distance,this.minDistance,this.maxDistance))}onMouseDown(e){if(this.enable)switch(e.mouseCode){case 0:this._mouseLeftDown=!0;break;case 1:break;case 2:this._mouseRightDown=!0}}onMouseUp(e){this._mouseLeftDown=!1,this._mouseRightDown=!1}onMouseMove(e){var t;this.enable&&(this._mouseRightDown&&(t=this.camera.transform.forward,or.mulScale(t,.25*e.movementY*this.camera.aspect,p.HELP_1),this._targetPos.x+=p.HELP_1.x*this.mouseRightFactor,this._targetPos.z+=p.HELP_1.z*this.mouseRightFactor,t=this.camera.transform.right,or.mulScale(t,.25*-e.movementX,p.HELP_1),this._targetPos.x-=p.HELP_1.x*this.mouseRightFactor,this._targetPos.z-=p.HELP_1.z*this.mouseRightFactor),this._mouseLeftDown)&&(this.roll-=e.movementX*de.delta*.001*this.mouseLeftFactor,this.pitch-=e.movementY*de.delta*.001*this.mouseLeftFactor,this.pitch=Y(this.pitch,this._topClamp,this._bottomClamp))}onUpdate(){var e;this.enable&&(e=Y(de.delta,0,.016),this.smooth?(this._currentPos.x+=(this._targetPos.x-this._currentPos.x)*e*this.dragSmooth,this._currentPos.y+=(this._targetPos.y-this._currentPos.y)*e*this.dragSmooth,this._currentPos.z+=(this._targetPos.z-this._currentPos.z)*e*this.dragSmooth,this._distance+=(this.distance-this._distance)*e*this.wheelSmooth,this._roll+=(this.roll-this._roll)*e*this.rollSmooth,this._pitch+=(this.pitch-this._pitch)*e*this.rollSmooth):(this._currentPos.x=this._targetPos.x,this._currentPos.y=this._targetPos.y,this._currentPos.z=this._targetPos.z,this._distance=this.distance,this._roll=this.roll,this._pitch=this.pitch),this._tempDir.set(0,0,1),(e=j.HELP_0).fromEulerAngles(this._pitch,this._roll,0),this._tempDir.applyQuaternion(e),this._tempPos=or.mulScale(this._tempDir,this._distance,this._tempPos),this._tempPos.add(this._currentPos.transform.localPosition,this._tempPos),this.transform.lookAt(this._tempPos,this._currentPos.transform.localPosition,p.UP),this.camera.lookTarget.copy(this._currentPos.transform.localPosition))}destroy(){this.camera=null,_.inputSystem.removeEventListener(L.POINTER_DOWN,this.onMouseDown,this),_.inputSystem.removeEventListener(L.POINTER_MOVE,this.onMouseMove,this),_.inputSystem.removeEventListener(L.POINTER_UP,this.onMouseUp,this),_.inputSystem.removeEventListener(L.POINTER_WHEEL,this.onMouseWheel,this),super.destroy()}}class qc extends ve{constructor(){super(),s(this,"_camera"),s(this,"autoRotate",!1),s(this,"autoRotateSpeed",.1),s(this,"rotateFactor",.5),s(this,"zoomFactor",.1),s(this,"panFactor",.25),s(this,"_smooth",5),s(this,"_minDistance",1),s(this,"_maxDistance",1e5),s(this,"_maxPolarAngle",90),s(this,"_minPolarAngle",-90),s(this,"_target",new p(0,0,0)),s(this,"_cTarget",new p(0,0,0)),s(this,"_position",new p(0,0,0)),s(this,"_cPosition",new p(0,0,0)),s(this,"_spherical",new Yh),s(this,"_isMouseDown",!1),s(this,"_lastMouseX",-1),s(this,"_lastMouseY",-1),s(this,"_isPanning",!1)}get target(){return this._target}set target(e){this._target=e}get smooth(){return this._smooth}set smooth(e){this._smooth=Math.max(e,1)}get minDistance(){return this._minDistance}set minDistance(e){this._minDistance=Y(e,2e-6,this._maxDistance)}get maxDistance(){return this._maxDistance}set maxDistance(e){this._maxDistance=Y(e,this._minDistance,1/0)}get minPolarAngle(){return this._minPolarAngle}set minPolarAngle(e){this._minPolarAngle=Y(e,-90,this._maxPolarAngle)}get maxPolarAngle(){return this._maxPolarAngle}set maxPolarAngle(e){this._maxPolarAngle=Y(e,this._minPolarAngle,90)}start(){this._camera=this.object3D.getComponent(ii),this._position=this.object3D.transform.localPosition.clone(),this._cPosition=this._position.clone(),this._target=this._camera.lookTarget.clone(),this._cTarget=this._target.clone(),this._spherical.setCoords(this._position.x-this._target.x,this._position.y-this._target.y,this._position.z-this._target.z),this._camera.lookAt(this._cPosition,this._cTarget,p.UP),this.addEventListener()}onEnable(){this.addEventListener()}onDisable(){this.removeEventListener()}onUpdate(){let e=this._isPanning?1:this.smooth,t=!1;this._cPosition.equals(this.object3D.transform.localPosition)||(this._position.copyFrom(this.object3D.transform.localPosition),e=1,t=!0),this._cTarget.equals(this._target)||(this._cTarget.copyFrom(this._target),e=1,t=!0),t?this._spherical.setCoords(this._position.x-this._target.x,this._position.y-this._target.y,this._position.z-this._target.z):!this._isMouseDown&&this.autoRotate&&(this._spherical.theta-=this.autoRotateSpeed*Math.PI/180,this.updateCamera());var r=(this._position.x-this._cPosition.x)/e,i=(this._position.y-this._cPosition.y)/e,a=(this._position.z-this._cPosition.z)/e;this._cPosition.x=1e-10<Math.abs(r)?this._cPosition.x+r:this._position.x,this._cPosition.y=1e-10<Math.abs(i)?this._cPosition.y+i:this._position.y,this._cPosition.z=1e-10<Math.abs(a)?this._cPosition.z+a:this._position.z,this._camera.lookAt(this._cPosition,this._cTarget,p.UP)}onWheel(e){this._spherical.radius+=e.deltaY*this.zoomFactor,this._spherical.radius=Y(this._spherical.radius,this.minDistance,this.maxDistance),this.updateCamera()}onPointerDown(e){this._isMouseDown=!0,this._lastMouseX=e.mouseX,this._lastMouseY=e.mouseY,2===e.mouseCode&&(this._isPanning=!0)}onPointerMove(e){var t,r,i,a;this._isMouseDown&&this.enable&&(t=e.mouseX,r=e.mouseY,0===e.mouseCode&&0<this._lastMouseX&&0<this._lastMouseY?(i=-(t-this._lastMouseX)*this.rotateFactor,a=(r-this._lastMouseY)*this.rotateFactor,this._spherical.theta+=i*Math.PI/180,this._spherical.phi-=a*Math.PI/180,this._spherical.phi=Y(this._spherical.phi,this.minPolarAngle,this.maxPolarAngle),this.updateCamera()):2===e.mouseCode&&(or.mulScale(this.object3D.transform.up,e.movementY*this.panFactor*this._camera.aspect,p.HELP_1),this._target.y+=p.HELP_1.y,or.mulScale(this.object3D.transform.right,-e.movementX*this.panFactor,p.HELP_1),this._target.x-=p.HELP_1.x,this._target.z-=p.HELP_1.z,this._cTarget.copyFrom(this._target),this.updateCamera()),this._lastMouseX=t,this._lastMouseY=r)}onPointerUp(e){this._isMouseDown=!1,2===e.mouseCode&&(this._isPanning=!1)}onPointerLeave(){this._isMouseDown=!1,this._isPanning=!1}updateCamera(){this._spherical.makeSafe();var e=this._spherical.getCoords();this._position.set(e.x+this._target.x,e.y+this._target.y,e.z+this._target.z)}addEventListener(){_.inputSystem.addEventListener(L.POINTER_WHEEL,this.onWheel,this),_.inputSystem.addEventListener(L.POINTER_DOWN,this.onPointerDown,this),_.inputSystem.addEventListener(L.POINTER_MOVE,this.onPointerMove,this),_.inputSystem.addEventListener(L.POINTER_UP,this.onPointerUp,this),_.inputSystem.addEventListener(L.POINTER_OUT,this.onPointerLeave,this)}removeEventListener(){_.inputSystem.removeEventListener(L.POINTER_WHEEL,this.onWheel,this),_.inputSystem.removeEventListener(L.POINTER_DOWN,this.onPointerDown,this),_.inputSystem.removeEventListener(L.POINTER_MOVE,this.onPointerMove,this),_.inputSystem.removeEventListener(L.POINTER_UP,this.onPointerUp,this),_.inputSystem.removeEventListener(L.POINTER_OUT,this.onPointerLeave,this)}}class Yh{constructor(e=1,t=0,r=0){return s(this,"radius"),s(this,"phi"),s(this,"theta"),s(this,"coords"),this.radius=e,this.phi=t,this.theta=r,this.coords=new p,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}makeSafe(){return this.phi=Math.max(2e-4,Math.min(Math.PI-2e-4,this.phi)),this}setFromVector3(e){return this.setCoords(e.x,e.y,e.z)}setCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Y(t/this.radius,-1,1))),this}getCoords(){var e=Math.sin(this.phi)*this.radius;return this.coords.x=e*Math.sin(this.theta),this.coords.y=Math.cos(this.phi)*this.radius,this.coords.z=e*Math.cos(this.theta),this.coords}}class Kc extends ve{constructor(){super(),s(this,"focus"),s(this,"_rotation",new p(45,0,0)),s(this,"distance",5),s(this,"_camera")}start(){this._camera=this.object3D.getOrAddComponent(ii),this._camera?this.focus?(_.inputSystem.addEventListener(L.POINTER_WHEEL,this.mouseWheel,this),_.inputSystem.addEventListener(L.POINTER_UP,this.mouseUp,this),_.inputSystem.addEventListener(L.POINTER_DOWN,this.mouseDown,this)):console.error("ThirdPersonCameraController need target"):console.error("ThirdPersonCameraController need camera")}mouseDown(e){_.inputSystem.addEventListener(L.POINTER_MOVE,this.mouseMove,this)}mouseUp(e){_.inputSystem.removeEventListener(L.POINTER_MOVE,this.mouseMove,this)}mouseMove(e){this._rotation.y+=.01*e.movementX,this._rotation.x+=.01*e.movementY}mouseWheel(e){this.distance+=.1*_.inputSystem.wheelDelta}onUpdate(){var e=new p,t=(this._camera.transform.forward.scaleToRef(this.distance,e),this.focus.transform.worldPosition);this._camera.transform.localPosition=t.subtract(e)}destroy(){_.inputSystem.removeEventListener(L.POINTER_WHEEL,this.mouseWheel,this),_.inputSystem.removeEventListener(L.POINTER_UP,this.mouseUp,this),_.inputSystem.removeEventListener(L.POINTER_DOWN,this.mouseDown,this),super.destroy()}}class Zc extends ve{constructor(){super(...arguments),s(this,"_postList")}init(e){this._postList=new Map}start(){}stop(){}onEnable(){this.activePost()}onDisable(){this.unActivePost()}activePost(){let e=this.transform.view3D,t=_.getRenderJob(e);this._postList.forEach(e=>{t.addPost(e)})}unActivePost(){let e=this.transform.view3D,t=_.getRenderJob(e);this._postList.forEach(e=>{t.removePost(e)})}addPost(e){var t;if(!this._postList.has(e.prototype))return t=new e,this._postList.set(e.prototype,t),this._enable&&this.activePost(),t}removePost(e){var t;this._postList.has(e.prototype)&&(t=this._postList.get(e.prototype),this._postList.delete(e.prototype),e=this.transform.view3D,_.getRenderJob(e).removePost(t))}getPost(e){return this._postList.has(e.prototype)?this._postList.get(e.prototype):null}}class Qc extends ai{constructor(){super(...arguments),s(this,"_keyGroup"),s(this,"_instanceMatrixBuffer")}init(e){this._keyGroup=new Map}start(){var r=[],i=(this.object3D.getComponents(Le,r,!0),this._instanceMatrixBuffer=new Se(r.length),this._instanceMatrixBuffer.visibility=GPUShaderStage.VERTEX,new Int32Array(r.length));for(let e=0;e<r.length;e++){var a=r[e];a.transform.enable=!1,i[e]=a.transform.worldMatrix.index;let t=a.geometry.uuid;for(let e=0;e<a.materials.length;e++){var s=a.materials[e];t+=s.instanceID}this._keyGroup.has(t)?this._keyGroup.get(t).push(a):this._keyGroup.set(t,[a])}this.instanceCount=r.length,this._instanceMatrixBuffer.setInt32Array("matrixIDs",i),this._instanceMatrixBuffer.apply()}stop(){}nodeUpdate(s,o,n,h){this._keyGroup.forEach((e,t)=>{var r=e[0];for(let e=0;e<r.materials.length;e++){var i=r.materials[e].renderPasses.get(o);if(i)for(let e=0;e<i.length;e++){var a=i[e].renderShader;a.setDefine("USE_INSTANCEDRAW",!0),a.setStorageBuffer("instanceDrawID",this._instanceMatrixBuffer)}}r.nodeUpdate(s,o,n,h)}),super.nodeUpdate(s,o,n,h)}renderPass(h,l,u){this._keyGroup.forEach((t,e)=>{var r=t[0];for(let e=0;e<r.materials.length;e++){var i=r.materials[e].renderPasses.get(l);if(i&&0!=i.length){C.bindGeometryBuffer(u.encoder,r.geometry),r.object3D.transform._worldMatrix;for(let e=0;e<i.length;e++)if(i&&0!=i.length){var a=i[e];if(a.enable)for(let e=1<i.length?1:0;e<i.length;e++){var s=a.renderShader,o=(s.shaderState.splitTexture&&(u.endRenderPass(),be.WriteSplitColorTexture(r.instanceID),u.beginRenderPass(),C.bindCamera(u.encoder,h.camera),C.bindGeometryBuffer(u.encoder,r.geometry)),C.bindPipeline(u.encoder,s),r.geometry.subGeometries);for(let e=0;e<o.length;e++){var n=o[e].lodLevels[r.lodLevel];C.drawIndexed(u.encoder,n.indexCount,t.length,n.indexStart,0,0)}}}}}})}}class Ga extends ve{constructor(){super(),s(this,"_geometry")}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._checkRenderer()}_checkRenderer(){var e=this.object3D.getComponent(Va);e&&this._geometry&&0<e.materials.length&&this.checkRenderer()}checkRenderer(){this.object3D.addComponent(ai)}init(){}cloneTo(e){e.addComponent(Ga)._geometry=this._geometry}}class Va extends ve{constructor(){super(),s(this,"_materials"),this.materials=[]}get materials(){return this._materials}set materials(e){this._materials=e}get material(){return this._materials[0]}set material(e){this._materials[0]=e;var t=this.object3D.getComponent(Ga);t&&e&&t.geometry&&this.object3D.addComponent(ai)}cloneTo(e){e.addComponent(Va).materials.push(...this.materials)}}class Jc extends Bi{constructor(){super(),s(this,"radius",2.5),s(this,"height",10),this._shapeType=si.Capsule}}class $c extends Bi{constructor(){super(),s(this,"mesh"),this._shapeType=si.Mesh}}class Ha{constructor(e,t){s(this,"center",new p),s(this,"extents"),s(this,"max"),s(this,"min"),s(this,"size"),s(this,"tmpVecA",new p),s(this,"tmpVecB",new p),s(this,"tmpVecC",new p),s(this,"tmpVecD",new p),s(this,"radius",0),s(this,"diffBetweenPoints",new p),s(this,"owner"),s(this,"forward",new p(0,0,1)),s(this,"_center",new p),this.center=e||new p(0,0,0),this.radius=void 0===t?.5:t}containsPoint(e){var e=this.tmpVecA.subtract(e,this.center).lengthSquared,t=this.radius;return e<t*t}intersectsRay(e,t){var r=this.tmpVecA.copyFrom(e.origin).subtract(this.center),i=r.dotProduct(this.tmpVecB.copyFrom(e.direction).normalize()),r=r.dotProduct(r)-this.radius*this.radius;return 0<r&&0<i?null:!((r=i*i-r)<0||(i=Math.abs(-i-Math.sqrt(r)),t&&t.copyFrom(e.direction).scaleBy(i).add(e.origin),0))}intersectsBoundingSphere(e){this.tmpVecA.subtract(e.center,this.center);e=e.radius+this.radius;return this.tmpVecA.lengthSquared<=e*e}calculateTransform(e){this.update(e)}containsFrustum(e,t){return t.containsSphere(e)}clone(){return new Ha(this.center.clone(),this.radius)}update(e){this.owner=e,this._center.add(e.transform.worldMatrix.position,this.center),this.forward=e.transform.forward}merge(e){throw new Error("BoundingSphere merge is not ready!")}setFromCenterAndSize(e,t){this.center.copy(e),this.radius=t}}const Qr=class extends Bi{constructor(e){super(),s(this,"_pickRet"),s(this,"box"),s(this,"radius",.5),this._shapeType=si.Sphere,this.radius=e,this.box=new Ha(new p,1)}rayPick(e,t){this.box.setFromCenterAndSize(this.center,this.radius);var r=Qr.helpMatrix,t=(r.copyFrom(t).invert(),Qr.helpRay.copy(e)),e=(t.applyMatrix(r),t.intersectSphere(t.origin,t.direction,this.box.center,this.box.radius));return e?(this._pickRet||(this._pickRet={intersect:!1,intersectPoint:new p,distance:0}),this._pickRet.intersect=!0,this._pickRet.intersectPoint=e,this._pickRet.distance=p.distance(t.origin,Qr.v3_help_0),this._pickRet):null}};let Ur=Qr;s(Ur,"v3_help_0",new p),s(Ur,"helpMatrix",new N),s(Ur,"helpRay",new At);class ef extends ee{constructor(e=.001,t=1e4,r=90,i=!1){super(),s(this,"up_camera"),s(this,"down_camera"),s(this,"left_camera"),s(this,"right_camera"),s(this,"front_camera"),s(this,"back_camera"),this.initCubeCamera(e,t,r,i)}initCubeCamera(e,t,r=90,i=!1){this.up_camera=Ie.createCamera3DObject(this,"up"),this.down_camera=Ie.createCamera3DObject(this,"down"),this.left_camera=Ie.createCamera3DObject(this,"left"),this.right_camera=Ie.createCamera3DObject(this,"right"),this.front_camera=Ie.createCamera3DObject(this,"front"),this.back_camera=Ie.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=i,this.down_camera.isShadowCamera=i,this.left_camera.isShadowCamera=i,this.right_camera.isShadowCamera=i,this.front_camera.isShadowCamera=i,this.back_camera.isShadowCamera=i;this.up_camera.perspective(r,1,e,t),this.up_camera.lookAt(p.ZERO,p.UP,p.DOWN),this.down_camera.perspective(r,1,e,t),this.down_camera.lookAt(p.ZERO,p.DOWN,p.DOWN),this.left_camera.perspective(r,1,e,t),this.left_camera.lookAt(p.ZERO,p.LEFT),this.right_camera.perspective(r,1,e,t),this.right_camera.lookAt(p.ZERO,p.RIGHT),this.front_camera.perspective(r,1,e,t),this.front_camera.lookAt(p.ZERO,p.FORWARD),this.back_camera.perspective(r,1,e,t),this.back_camera.lookAt(p.ZERO,p.BACK),this.up_camera.type=xe.shadow,this.down_camera.type=xe.shadow,this.left_camera.type=xe.shadow,this.right_camera.type=xe.shadow,this.front_camera.type=xe.shadow,this.back_camera.type=xe.shadow}}class tf extends ee{constructor(){super(),s(this,"_envMap"),s(this,"skyObject"),s(this,"envMapChange",!0),s(this,"view"),(this.transform.scene3D=this).skyObject=new ee,this.addChild(this.skyObject),this._isScene3D=!0,this.envMap||(this.envMap=_.res.defaultSky)}get envMap(){return this._envMap}set envMap(e){this._envMap!=e&&(this.envMapChange=!0),this._envMap=e,V.instance.sky&&"map"in V.instance.sky&&(V.instance.sky.map=e)}showSky(){}hideSky(){}get exposure(){return V.instance.sky&&"exposure"in V.instance.sky?V.instance.sky.exposure:0}set exposure(e){V.instance.sky&&"exposure"in V.instance.sky&&(V.instance.sky.exposure=e,_.setting.sky.skyExposure=e)}get roughness(){if(V.instance.sky&&"roughness"in V.instance.sky)return V.instance.sky.roughness}set roughness(e){V.instance.sky&&"roughness"in V.instance.sky&&(V.instance.sky.roughness=e)}}class jh{constructor(){s(this,"_computeShader"),s(this,"_outBuffer")}init(){var e=Qe.getGBufferFrame("ColorPassGBuffer");this._computeShader=new Ce(Sh),this._outBuffer=new Hr(32),this._computeShader.setStorageBuffer("outBuffer",this._outBuffer),this._computeShader.setSamplerTexture("visibleMap",e.getPositionMap())}compute(e){e=Be.getCameraGroup(e.camera),this._computeShader.setStorageBuffer("standUniform",e.uniformGPUBuffer),e=C.beginCommandEncoder();C.computeCommand(e,[this._computeShader]),C.endCommandEncoder(e),this._outBuffer.readBuffer()}getPickMeshID(){var e=this._outBuffer.outFloat32Array[0]+.1;return Math.floor(e)}getPickWorldPosition(e){e=e||new p;var t=this._outBuffer.outFloat32Array[4],r=this._outBuffer.outFloat32Array[5],i=this._outBuffer.outFloat32Array[6];return e.set(t,r,i),e}getPickScreenUV(e){e=e||new J;var t=this._outBuffer.outFloat32Array[2],r=this._outBuffer.outFloat32Array[3];return e.set(t,r),e}}class qh extends br{constructor(e){super(),s(this,"ray"),s(this,"isTouching",!1),s(this,"_mouseCode"),s(this,"_pickEvent"),s(this,"_outEvent"),s(this,"_overEvent"),s(this,"_upEvent"),s(this,"_downEvent"),s(this,"_mouseMove"),s(this,"_pickCompute"),s(this,"_lastDownTarget"),s(this,"mouseEnableMap"),s(this,"_view"),s(this,"_lastFocus"),s(this,"_colliderOut",[]),s(this,"_interestList",[]),this._view=e,this.init()}init(){this.ray=new At,this.mouseEnableMap=new Map,this._pickEvent=new L(L.PICK_CLICK),this._outEvent=new L(L.PICK_OUT),this._overEvent=new L(L.PICK_OVER),this._mouseMove=new L(L.PICK_MOVE),this._upEvent=new L(L.PICK_UP),this._downEvent=new L(L.PICK_DOWN)}start(){_.inputSystem.addEventListener(L.POINTER_DOWN,this.onTouchStart,this),_.inputSystem.addEventListener(L.POINTER_UP,this.onTouchEnd,this),_.inputSystem.addEventListener(L.POINTER_CLICK,this.onTouchOnce,this),_.inputSystem.addEventListener(L.POINTER_MOVE,this.onTouchMove,this),"pixel"==_.setting.pick.mode&&(this._pickCompute=new jh,this._pickCompute.init())}stop(){_.inputSystem.removeEventListener(L.POINTER_DOWN,this.onTouchStart,this),_.inputSystem.removeEventListener(L.POINTER_UP,this.onTouchEnd,this),_.inputSystem.removeEventListener(L.POINTER_CLICK,this.onTouchOnce,this),_.inputSystem.removeEventListener(L.POINTER_MOVE,this.onTouchMove,this)}onTouchStart(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);(this._lastDownTarget=t)&&(this._downEvent.target=t.object3D,this._downEvent.ctrlKey=e.ctrlKey,this._downEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._downEvent),t.object3D.containEventListener(L.PICK_DOWN))&&t.object3D.dispatchEvent(this._downEvent)}onTouchEnd(e){this.isTouching=!1,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);t&&(this._upEvent.target=t.object3D,this._upEvent.ctrlKey=e.ctrlKey,this._upEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._upEvent),t.object3D.containEventListener(L.PICK_UP))&&t.object3D.dispatchEvent(this._upEvent)}getPickInfo(){return{worldPos:this._pickCompute.getPickWorldPosition(),screenUv:this._pickCompute.getPickScreenUV(),meshID:this._pickCompute.getPickMeshID()}}onTouchMove(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);t&&(this._mouseMove.target=t.object3D,this._mouseMove.ctrlKey=e.ctrlKey,this._mouseMove.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._mouseMove),t.object3D.containEventListener(L.PICK_MOVE))&&t.object3D.dispatchEvent(this._mouseMove),t!=this._lastFocus&&(this._lastFocus&&this._lastFocus.object3D&&(this._outEvent.target=t.object3D,this._outEvent.data={pick:this._lastFocus,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this._outEvent.ctrlKey=e.ctrlKey,this.dispatchEvent(this._outEvent),this._lastFocus.object3D.containEventListener(L.PICK_OUT))&&this._lastFocus.object3D.dispatchEvent(this._outEvent),t)&&(this._overEvent.target=t.object3D,this._overEvent.ctrlKey=e.ctrlKey,this._overEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._overEvent),t.object3D.containEventListener(L.PICK_OVER))&&t.object3D.dispatchEvent(this._overEvent),this._lastFocus=t}onTouchOnce(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t,r=this.findNearestObj(this._interestList,this._view.camera);r&&(t="pixel"==_.setting.pick.mode?this.getPickInfo():null,this._pickEvent.target=r.object3D,this._pickEvent.ctrlKey=e.ctrlKey,this._pickEvent.data={pick:r,pickInfo:t,mouseCode:this._mouseCode},this.dispatchEvent(this._pickEvent),r===this._lastDownTarget)&&r.object3D.containEventListener(L.PICK_CLICK)&&r.object3D.dispatchEvent(this._pickEvent),this._lastDownTarget=null}findNearestObj(e,t){let r=null,i=Number.MAX_VALUE;for(const s of e){var a=p.distance(s.object3D.transform.worldPosition,t.transform.worldPosition);a<i&&(r=s,i=a)}return r}collectEntities(){return this._colliderOut.length=0,this._view.scene.getComponents(Gh,this._colliderOut),this._colliderOut}pick(e,t){if(this._interestList.length=0,"pixel"==_.setting.pick.mode){this._pickCompute.compute(this._view);var r=this._pickCompute.getPickMeshID(),r=this.mouseEnableMap.get(r);r&&this._interestList.push(r)}else if("bound"==_.setting.pick.mode){var i;this.ray=t.screenPointToRay(_.inputSystem.mouseX,_.inputSystem.mouseY);for(const a of e)i=a.enable&&a.rayPick(this.ray),i&&this._interestList.push(a)}}}class rf extends gi{constructor(e=0,t=0,r=0,i=0){super(),s(this,"_camera"),s(this,"_scene"),s(this,"_viewPort"),s(this,"_enablePick",!1),s(this,"pickFire"),this._viewPort=new X(e,t,r,i),this.enablePick=!0}get enablePick(){return this._enablePick}set enablePick(e){this._enablePick!=e&&(this.pickFire=new qh(this),this.pickFire.start()),this._enablePick=e}get scene(){return this._scene}set scene(e){(this._scene=e).view=this}get camera(){return this._camera}set camera(e){this._camera=e}get viewPort(){return this._viewPort}set viewPort(e){this._viewPort=e}get graphic3D(){return _.getRenderJob(this).graphic3D}}class af{constructor(){s(this,"name"),s(this,"offset"),s(this,"size"),s(this,"arrayStride"),s(this,"stepMode"),s(this,"attributes")}}class sf{constructor(){s(this,"name"),s(this,"format"),s(this,"offset"),s(this,"shaderLocation"),s(this,"stride")}}var Kh=(e=>(e[e.position=3]="position",e[e.normal=3]="normal",e[e.TANGENT=4]="TANGENT",e[e.uv=2]="uv",e[e.TEXCOORD_1=2]="TEXCOORD_1",e[e.color=4]="color",e[e.joints0=4]="joints0",e[e.weights0=4]="weights0",e[e.joints1=4]="joints1",e[e.weights1=4]="weights1",e[e.vIndex=1]="vIndex",e[e.a_morphPositions_0=3]="a_morphPositions_0",e))(Kh||{});class nf{constructor(){s(this,"_use"),s(this,"_unUse"),this._use=[],this._unUse=[]}pushBack(e){var t=this._use.indexOf(e);-1!=t&&(this._use.splice(t,1),this._unUse.push(e))}getOne(e){let t;return 0<this._unUse.length?(t=this._unUse[0],this._unUse.splice(0,1)):t=new e,this._use.push(t),t}hasFree(){return 0<this._unUse.length}}class of{constructor(){}}class lf{constructor(){s(this,"entity")}get data(){return null}}class Zh{constructor(){s(this,"min",0),s(this,"max",0)}set(e,t){return this.max=t,this.min=e,this}copy(e){return this.max=e.max,this.min=e.min,this}isInterestRange(e){return!(this.max>e.min||e.max<this.min)}}class Qh{constructor(){s(this,"_spaceDesc")}getRange(e){return this._spaceDesc[e]}initSpace(e){this._spaceDesc={};for(var t of e)(this._spaceDesc[t]=new Zh).set(-Number.MAX_VALUE,Number.MAX_VALUE);return this}isContain(e,t){e=this._spaceDesc[e];return t>=e.min&&t<e.max}isInterestRange(e,t){e=this._spaceDesc[e];return!!e&&t.isInterestRange(e)}splitSpace(e,t,r){e=this._spaceDesc[e];return t?e.max=r:e.min=r,this}copySpace(e){for(var t in e._spaceDesc){var r=e._spaceDesc[t];this._spaceDesc[t].copy(r)}return this}}const Ka=class{};let Ot=Ka;s(Ot,"MaxEntityCountInLeaf",4),s(Ot,"MaxLayer",10),s(Ot,"ClearLeafLayer",Ka.MaxLayer-4);const Za=class{constructor(){s(this,"uuid","0"),this.uuid=(Za.UUID++).toString()}};let Yr=Za;s(Yr,"UUID",0);class Jh{constructor(){s(this,"map",{}),s(this,"_count",0)}get count(){return this._count}push(e){return!this.map[e.uuid]&&(this.map[e.uuid]=e,this._count++,!0)}remove(e){return!!this.map[e]&&(delete this.map[e],this._count--,!0)}}const It=class extends Yr{constructor(e=0){super(),s(this,"_dimensionIndex",0),s(this,"_dimensions"),s(this,"_dimension"),s(this,"_left"),s(this,"_right"),s(this,"_space"),s(this,"_parent"),s(this,"_entities"),s(this,"layer"),s(this,"_splitEntityList",[]),s(this,"pointIntersect",new p),this.layer=e,It.nodeCount++}get dimension(){return this._dimension}initNode(e,t,r){return this._dimensions=t,this._dimensionIndex=r,this._dimension=t[r],this._space=(new Qh).initSpace(t),e&&this._space.copySpace(e._space),this._parent=e,this._entities=new Jh,this}updateEntity(e){var t;e.isInNode(this,this._dimension)&&(e.attachTreeNode(this),this.autoSplit(),this._left)&&this._right&&(t=(this._dimensionIndex+1)%this._dimensions.length,t=this._dimensions[t],e.isInNode(this._right,t)?this._right.updateEntity(e):e.isInNode(this._left,t)&&this._left.updateEntity(e))}buildRoot(e){for(const t of e)t.entity.attachTreeNode(this);this.autoSplit()}autoSplit(){if(this._entities.count>Ot.MaxEntityCountInLeaf&&!this._right&&!this._left&&this.layer<Ot.MaxLayer){let e=this._splitEntityList,t=(this._dimensionIndex+1)%this._dimensions.length,r=this._dimensions[t],i=0;for(const o in this._entities.map){var a=this._entities.map[o];i+=a.centerValue(r),e.push(a)}i/=this._entities.count,this._left=new It(this.layer+1),this._right=new It(this.layer+1),this._left.initNode(this,this._dimensions,t),this._right.initNode(this,this._dimensions,t),this._left.setSpace(!0,i),this._right.setSpace(!1,i);for(var s of e)s.isInNode(this._right,r)?s.attachTreeNode(this._right):s.isInNode(this._left,r)&&s.attachTreeNode(this._left)}this._left&&this._left.autoSplit(),this._right&&this._right.autoSplit()}setSpace(e,t){return this._parent&&this._space.splitSpace(this._dimension,e,t),this}isEmpty(){return null==this._left&&null==this._right&&0==this._entities.count}pushEntity(e){return this._entities.push(e)}removeEntity(e){return this._entities.remove(e.uuid)}autoClear(){let e=this;for(;e&&e.layer>Ot.ClearLeafLayer&&e.clearLeaf();)e=e._parent}clearLeaf(){var e=!this._left&&!this._right,t=!e&&this._left.isEmpty()&&this._right.isEmpty();return t&&(this._left=this._right=null,It.nodeCount-=2),e||t}isContain(e){return this._space.isContain(this._dimension,e)}nodeIntersectsBox(e){var t=this._space.getRange("x"),r=this._space.getRange("y"),i=this._space.getRange("z"),a=It.rangeBox;return a.min.set(t.min,r.min,i.min),a.max.set(t.max,r.max,i.max),a.intersectsBox(e)}nodeIntersectsRay(e){var t=this._space.getRange("x"),r=this._space.getRange("y"),i=this._space.getRange("z"),a=It.rangeBox;return a.min.set(t.min,r.min,i.min),a.max.set(t.max,r.max,i.max),!0}pointCast(r,i=0,a){if(a=a||[],0<this._entities.count){var s,o=this._entities.map;for(s in o){let e=o[s],t=e.entityContainPoint(r);(t=!t&&0<i?e.squareDistanceTo(r,this._dimensions)<=i:t)&&a.push(e)}}this._left&&this._left.isContain(r[this._left.dimension])&&this._left.pointCast(r,i,a),this._right&&this._right.isContain(r[this._right.dimension])&&this._right.pointCast(r,i,a)}boxCast(e,t){if(t=t||[],0<this._entities.count){var r,i=this._entities.map;for(r in i){var a=i[r];a.entityIntersectsBox(e)&&t.push(a)}}this._left&&this._left.nodeIntersectsBox(e)&&this._left.boxCast(e,t),this._right&&this._right.nodeIntersectsBox(e)&&this._right.boxCast(e,t)}rayCast(e,t,r){t=t||[],r=r||[];var i=this.pointIntersect;if(0<this._entities.count){var a,s=this._entities.map;for(a in s){var o=s[a];o.entityIntersectsRay(e,i)&&(r.push((new p).copyFrom(i)),t.push(o))}}this._left&&this._left.nodeIntersectsRay(e)&&this._left.rayCast(e,t,r),this._right&&this._right.nodeIntersectsRay(e)&&this._right.rayCast(e,t,r)}};let hi=It;s(hi,"nodeCount",0),s(hi,"rangeBox",new je(new p(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),new p(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)));class hf extends Yr{constructor(e){super(),s(this,"userData"),s(this,"node"),this.userData=e}centerValue(e){return 0}isInNode(e,t){return!1}entityContainPoint(e){return!1}squareDistanceTo(e,t){return Number.MAX_VALUE}entityIntersectsBox(e){return!1}entityIntersectsRay(e,t){return!1}attachTreeNode(e){return this.node&&this.detachTreeNode(),this.node=e,this.node.pushEntity(this)}detachTreeNode(){var e=this.node.removeEntity(this);return this.node=null,e}updateNode(e){var t=this.node;t&&this.detachTreeNode(),e.updateEntity(this),t&&t.autoClear()}}class $h extends st{}s($h,"RESIZE","resize");var eu=(e=>(e[e.MOUSE_LEFT=0]="MOUSE_LEFT",e[e.MOUSE_MID=1]="MOUSE_MID",e[e.MOUSE_RIGHT=2]="MOUSE_RIGHT",e))(eu||{});class bs extends st{}s(bs,"LOADER_PROGRESS","loaderProgress"),s(bs,"LOADER_COMPLETE","loaderComplete");class ui extends st{}s(ui,"ADDED","added"),s(ui,"REMOVED","removed"),s(ui,"CHILD_ADD_EVENT","childAddEvent"),s(ui,"CHILD_REMOVED","childRemoved");class ia extends st{}s(ia,"SHOW","show"),s(ia,"HIDE","hide"),s(ia,"UPDATE","update");class uf{static merge(e,t,r,i){var a=0,s=Math.max(e.width,0),a=(s=Math.max(t.width,s),s=Math.max(r.width,s),s=Math.max(i.width,s),a=Math.max(e.height,0),a=Math.max(t.height,a),a=Math.max(r.height,a),Math.max(i.height,a)),o=new ne(s,a,z.rgba8unorm),n=new Ce(xh),e=(n.setSamplerTexture("textureR",e),n.setSamplerTexture("textureG",t),n.setSamplerTexture("textureB",r),n.setSamplerTexture("textureA",i),n.setStorageTexture("outTex",o),n.workerSizeX=Math.ceil(s/8),n.workerSizeY=Math.ceil(a/8),C.beginCommandEncoder());return C.computeCommand(e,[n]),C.endCommandEncoder(e),o}}class tu{constructor(e=2){s(this,"name"),s(this,"index",2),s(this,"gpuBindGroup"),this.index=e}bindTextureToPipeline(e,t){if(!this.gpuBindGroup){var r,i,a=[];for(let e=0;e<t.length;e++)t[e]&&((r=t[e])instanceof Us?a.push({binding:2*e+0,resource:r.gpuSampler},{binding:2*e+1,resource:r.getGPUView()}):r instanceof Bs?a.push({binding:2*e+0,resource:r.gpuSampler_comparison},{binding:2*e+1,resource:r.getGPUView()}):r instanceof ne&&(i=-1!=r.format.indexOf("depth"),a.push({binding:2*e+0,resource:i?r.gpuSampler_comparison:r.gpuSampler},{binding:2*e+1,resource:r.getGPUView()})));e=e.getBindGroupLayout(this.index);this.gpuBindGroup=E.device.createBindGroup({layout:e,entries:a})}}bindTextureToPipeline2(e,t){if(!this.gpuBindGroup){var r,i=[];for(let e=0;e<t.length;e++)t[e]&&(r=t[e],i.push({binding:e,resource:r.getGPUView()}));e=e.getBindGroupLayout(this.index);this.gpuBindGroup=E.device.createBindGroup({layout:e,entries:i})}}}s(tu,"pool",new Map);class cf extends er{constructor(e,t,r=0){super(),this.bufferType=Ct.StructStorageGPUBuffer,this.createBufferByStruct(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|r,e,t)}}class ci{static createMipmap(e,t){var r=E.device,r=(this._pipelineMax||(this._pipelineMax=r.createComputePipeline({layout:"auto",compute:{module:r.createShaderModule({code:this.codeMax}),entryPoint:"main"}})),this._pipelineMin||(this._pipelineMin=r.createComputePipeline({layout:"auto",compute:{module:r.createShaderModule({code:this.codeMin}),entryPoint:"main"}})),Math.ceil(.5*e.width)),t={mipmapCount:t,texture:e,srcView:null,mipLevel:1,dstHeight:Math.ceil(.5*e.height),dstWidth:r};t.srcView=e.getGPUTexture().createView({format:e.format,dimension:"2d",baseMipLevel:0,mipLevelCount:1}),1024<e.width&&1024<e.height?this.mipmap(this._pipelineMax,t):this.mipmap(this._pipelineMin,t)}static mipmap(i,a){var s=E.device,o=C.beginCommandEncoder();let n=i==this._pipelineMax,h,l;for(let r=a.mipLevel;r<a.mipmapCount;r++){var u=[],c=0,c=(u.push({binding:c++,resource:a.srcView}),u.push({binding:+c,resource:a.texture.gpuSampler}),h=a.texture.getGPUTexture().createView({format:a.texture.format,dimension:"2d",baseMipLevel:r,mipLevelCount:1}),u.push({binding:2,resource:h}),s.createBindGroup({layout:i.getBindGroupLayout(0),entries:u})),u=o.beginComputePass();u.setPipeline(i),u.setBindGroup(0,c);let e=a.dstWidth,t=a.dstHeight;if(n&&(e=Math.max(1,Math.floor(a.dstWidth/8)),t=Math.max(1,Math.floor(a.dstHeight/8))),u.dispatchWorkgroups(e,t),a.dstHeight*=.5,a.dstWidth*=.5,a.srcView=h,a.mipLevel=r+1,l=n&&(a.dstWidth<8||a.dstHeight<8),u.end(),l)break}C.endCommandEncoder(o),l&&this.mipmap(this._pipelineMin,a)}}s(ci,"codeMax",`
        @group(0) @binding(0) var inputTexture : texture_2d<f32>;
        @group(0) @binding(1) var inputTextureSampler : sampler;
        @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba8unorm, write>;
        
        @compute @workgroup_size(8, 8)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let dstSize = textureDimensions(outputTexture).xy;
            let uv01 = vec2<f32>(f32(GlobalInvocationID.x) / f32(dstSize.x - 1), f32(GlobalInvocationID.y) / f32(dstSize.y - 1));
            var fromColor = textureSampleLevel(inputTexture, inputTextureSampler, uv01, 0.0);
            let dstCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
            
            //fromColor = vec4<f32>(0.0, 0.0, 0.0, 1.0);
            //if(dstSize.x == 512){
            //    fromColor.x = 1.0;
            //}else  if(dstSize.x == 256){
            //    fromColor.y = 1.0;
            //}else if(dstSize.x == 128){
            //    fromColor.z = 1.0;
            //}
            
            textureStore(outputTexture, dstCoord, fromColor);
        }
    `),s(ci,"codeMin",`
        @group(0) @binding(0) var inputTexture : texture_2d<f32>;
        @group(0) @binding(1) var inputTextureSampler : sampler;
        @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba8unorm, write>;
        
        @compute @workgroup_size(1, 1)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let dstSize = textureDimensions(outputTexture).xy;
            let uv01 = vec2<f32>(f32(GlobalInvocationID.x) / f32(dstSize.x - 1), f32(GlobalInvocationID.y) / f32(dstSize.y - 1));
            var fromColor = textureSampleLevel(inputTexture, inputTextureSampler, uv01, 0.0);
            let dstCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
            
            textureStore(outputTexture, dstCoord, fromColor);
        }
    `),s(ci,"_pipelineMax"),s(ci,"_pipelineMin");class ru{constructor(){s(this,"name",""),s(this,"passMap",new Map)}}class iu{constructor(){s(this,"passType",""),s(this,"shaderState",new Map),s(this,"vertexShader",""),s(this,"fragmentShader","")}}class Br{static parser(e,r){e=it.filterComment(e);let i=new ru,t=e.indexOf(this.shaderKeyword),a=e.indexOf("{",t),s=e.substring(t+this.shaderKeyword.length,a).trim();var o;i.name=s.substring(1,s.length-1),s=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));for(o of this.splitPassBlock(s)){let e=this.parserPassBlock(o),t;i.passMap.has(e.passType)?t=i.passMap.get(e.passType):(t=[],i.passMap.set(e.passType,t)),t.push(e),0<e.vertexShader.length&&(e.vertexShader=it.parse(e.vertexShader,r)),0<e.fragmentShader.length&&(e.fragmentShader=it.parse(e.fragmentShader,r))}return i}static splitPassBlock(e){let t=0,r=[];for(;t<e.length;){var i=e.indexOf(this.passKeyword,t);if(-1==i){r.push(e.substring(t));break}0!=t&&r.push(e.substring(t,i)),t=i+this.passKeyword.length}return r}static parserPassBlock(e){var t=new iu,r=e.indexOf(this.passTypeKeyword),i=e.indexOf('"',r),r=e.indexOf('"',i+1);return t.passType=e.substring(r+1,i).trim(),this.parserShaderState(t,e),-1!=(r=e.indexOf(this.vertexKeyword))&&(t.vertexShader=this.extractBlock(e.substring(r+this.vertexKeyword.length),"{","}")),-1!=(r=e.indexOf(this.fragmentKeyword))&&(t.fragmentShader=this.extractBlock(e.substring(r+this.fragmentKeyword.length),"{","}")),t}static parserShaderState(e,t){if(-1==(i=t.indexOf("ShaderState")))return!1;var r,i=t.indexOf("{",i),a=t.indexOf("}",i);for(r of t.substring(i+1,a).split(",")){var s=r.split(":"),o=s[0].trim(),s=this.convertValue(s[1].trim());e.shaderState.set(o,s)}return!0}static convertValue(e){return 4==e.length&&"true"==e.toLowerCase()||(5!=e.length||"false"!=e.toLowerCase())&&('"'==e[0]?e.substring(1,e.length-1):Number.parseInt(e))}static extractBlock(e,t,r){var i,a=e.indexOf(t);if(-1==a)return"";let s=0,o=0;for(i of e=e.substring(a)){if(i==t?s++:i==r&&s--,s<=0)break;o++}return e.substring(1,o).trim()}}s(Br,"passKeyword","pass"),s(Br,"shaderKeyword","Shader"),s(Br,"vertexKeyword","vertex"),s(Br,"fragmentKeyword","fragment"),s(Br,"passTypeKeyword","PassType");class ff extends Ve{constructor(e,t){super([],[]),this.crateGBuffer(e,t)}crateGBuffer(e,t){var r=this.attachments,i=this.rtDescriptors,a=new ne(e,t,z.rgba16float,!1),s=(a.name="positionMap",new fe),o=(s.loadOp="load",new ne(e,t,z.rgba16float,!1)),n=(o.name="normalMap",new fe),h=(n.loadOp="load",new ne(e,t,z.rgba16float,!1)),l=(h.name="colorMap",new fe),e=(l.loadOp="load",new ne(e,t,z.depth24plus,!1));e.name="depthTexture",(new fe).loadOp="load",r.push(a),r.push(o),r.push(h),i.push(s),i.push(n),i.push(l),this.depthTexture=e}}class df{constructor(){s(this,"computeShader"),s(this,"visibleBuffer"),s(this,"texture"),this.computeShader=new Ce(Dh),this.visibleBuffer=new Hr(16384),this.computeShader.setStorageBuffer("visibleBuffer",this.visibleBuffer),this.texture=be.getTexture(he.zBufferTexture_NAME),this.computeShader.setSamplerTexture("zBufferTexture",this.texture),this.computeShader.workerSizeX=Math.ceil(this.texture.width/8),this.computeShader.workerSizeY=Math.ceil(this.texture.height/8),this.computeShader.workerSizeZ=1}compute(e,t){this.visibleBuffer.reset(!0,0),this.visibleBuffer.apply();var r=C.beginCommandEncoder();C.computeCommand(r,[this.computeShader]),this.visibleBuffer.readBuffer(),t.zVisibleList=this.visibleBuffer.outFloat32Array}}class pf extends vt{constructor(){super(),s(this,"blurTexture1"),s(this,"blurTexture2"),s(this,"rendererPassState"),s(this,"blurComputes"),s(this,"blurSettings"),s(this,"outTexture"),s(this,"rtFrame")}onAttach(e){_.setting.render.postProcessing.depthOfView.enable=!0}onDetach(e){_.setting.render.postProcessing.depthOfView.enable=!1}createGUI(){}get pixelOffset(){return _.setting.render.postProcessing.depthOfView.pixelOffset}set pixelOffset(e){e=Math.max(0,e),_.setting.render.postProcessing.depthOfView.pixelOffset=e}get near(){return _.setting.render.postProcessing.depthOfView.near}set near(e){e=Math.max(0,e),_.setting.render.postProcessing.depthOfView.near=e}get far(){return _.setting.render.postProcessing.depthOfView.far}set far(e){e=Math.max(0,e),_.setting.render.postProcessing.depthOfView.far=e}createBlurCompute(){this.blurSettings=[],this.blurComputes=[];var t=_.setting.render.postProcessing.depthOfView;for(let e=0;e<t.iterationCount;e++){var r=new Mt(4),i=new Ce(mh),r=(this.blurComputes.push(i),this.blurSettings.push(r),i.setUniformBuffer("blurSetting",r),Qe.getGBufferFrame("ColorPassGBuffer")),r=(i.setSamplerTexture(he.positionBufferTex_NAME,r.attachments[1]),i.setSamplerTexture(he.normalBufferTex_NAME,r.attachments[2]),e%2==0?this.blurTexture1:this.blurTexture2),a=e%2==1?this.blurTexture1:this.blurTexture2;i.setSamplerTexture("inTex",r),i.setStorageTexture("outTex",a),i.workerSizeX=Math.ceil(this.blurTexture1.width/8),i.workerSizeY=Math.ceil(this.blurTexture1.height/8),i.workerSizeZ=1,this.outTexture=a}}createResource(){var e=E.presentationSize,t=e[0],e=e[1],r=(this.blurTexture1=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING),this.blurTexture1.name="dof1",new fe),t=(r.clearValue=[0,0,0,1],r.loadOp="clear",this.blurTexture2=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING),this.blurTexture2.name="dof2",new fe);t.clearValue=[0,0,0,1],t.loadOp="clear",this.rtFrame=new Ve([this.blurTexture1,this.blurTexture2],[r,t])}render(e,t){if(!this.blurComputes){this.createResource(),this.createBlurCompute(),this.createGUI();var r=Be.getCameraGroup(e.camera);for(let e=0;e<this.blurComputes.length;e++)this.blurComputes[e].setUniformBuffer("standUniform",r.uniformGPUBuffer);this.rendererPassState=De.createRendererPassState(this.rtFrame,null)}this.autoSetColorTexture("inTex",this.blurComputes[0]);var i=_.setting.render.postProcessing.depthOfView;i.far=Math.max(i.near,i.far)+1e-4;for(let e=0;e<i.iterationCount;e++){var a=this.blurComputes[e],s=this.blurSettings[e];s.setFloat("near",i.near),s.setFloat("far",i.far),s.setFloat("pixelOffset",(e+1)*i.pixelOffset),s.apply(),a.setStorageBuffer("blurSetting",s)}C.computeCommand(t,this.blurComputes),C.lastRenderPassState=this.rendererPassState}}class mf extends vt{constructor(){super(),s(this,"gtaoTexture"),s(this,"rendererPassState"),s(this,"gtaoCompute"),s(this,"gtaoSetting"),s(this,"aoBuffer"),s(this,"directionsBuffer"),s(this,"directionsArray"),s(this,"rtFrame"),s(this,"Render"),s(this,"randomCount",0)}onAttach(e){_.setting.render.postProcessing.gtao.enable=!0,this.createGUI()}onDetach(e){_.setting.render.postProcessing.gtao.enable=!1,this.removeGUI()}get maxDistance(){return _.setting.render.postProcessing.gtao.maxDistance}set maxDistance(e){e=Y(e,.1,50),_.setting.render.postProcessing.gtao.maxDistance=e}get maxPixel(){return _.setting.render.postProcessing.gtao.maxPixel}set maxPixel(e){e=Y(e,5,100),_.setting.render.postProcessing.gtao.maxPixel=e}get darkFactor(){return _.setting.render.postProcessing.gtao.darkFactor}set darkFactor(e){e=Y(e,.01,1),_.setting.render.postProcessing.gtao.darkFactor=e}get rayMarchSegment(){return _.setting.render.postProcessing.gtao.rayMarchSegment}set rayMarchSegment(e){e=Y(e,4,10),_.setting.render.postProcessing.gtao.rayMarchSegment=e}get multiBounce(){return _.setting.render.postProcessing.gtao.multiBounce}set multiBounce(e){_.setting.render.postProcessing.gtao.multiBounce=e}get blendColor(){return _.setting.render.postProcessing.gtao.blendColor}set blendColor(e){_.setting.render.postProcessing.gtao.blendColor=e}get usePosFloat32(){return _.setting.render.postProcessing.gtao.usePosFloat32}set usePosFloat32(e){_.setting.render.postProcessing.gtao.usePosFloat32=e}createGUI(){}removeGUI(){}createCompute(){_.setting.render.postProcessing.gtao,this.gtaoCompute=new Ce(gh);var e=new Mt(12),t=(this.gtaoCompute.setUniformBuffer("gtaoData",e),this.directionsArray=new Float32Array(16),this.directionsBuffer=new Se(16),this.directionsBuffer.setFloat32Array("array",this.randomDirection()),this.directionsBuffer.apply(),this.gtaoCompute.setStorageBuffer("directions",this.directionsBuffer),this.aoBuffer=new Se(this.gtaoTexture.width*this.gtaoTexture.height),this.gtaoCompute.setStorageBuffer("aoBuffer",this.aoBuffer),Qe.getGBufferFrame("ColorPassGBuffer")),r=t.attachments[1];this.gtaoCompute.setSamplerTexture("posTex",r),this.gtaoCompute.setSamplerTexture("normalTex",t.attachments[2]),this.autoSetColorTexture("inTex",this.gtaoCompute),this.gtaoCompute.setStorageTexture("outTex",this.gtaoTexture),this.gtaoCompute.workerSizeX=Math.ceil(this.gtaoTexture.width/8),this.gtaoCompute.workerSizeY=Math.ceil(this.gtaoTexture.height/8),this.gtaoCompute.workerSizeZ=1,this.gtaoSetting=e}createResource(){var e=E.presentationSize,t=e[0],e=e[1],t=(this.gtaoTexture=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING),this.gtaoTexture.name="gtaoTex",new fe);t.loadOp="load",this.rtFrame=new Ve([this.gtaoTexture],[t])}randomDirection(){this.randomCount++,1<this.randomCount&&(this.randomCount=0);var t=2*Math.PI*this.randomCount/16,r=2*Math.PI/8;for(let e=0;e<8;e++){var i=t+e*r;this.directionsArray[2*e]=Math.sin(i),this.directionsArray[2*e+1]=Math.cos(i)}return this.directionsArray}render(e,t){this.gtaoCompute||(this.createResource(),this.createCompute(),this.rendererPassState=De.createRendererPassState(this.rtFrame,null),this.rendererPassState.label="GTAO",r=Be.getCameraGroup(e.camera),this.gtaoCompute.setUniformBuffer("standUniform",r.uniformGPUBuffer));var r=_.setting.render.postProcessing.gtao,i=(this.directionsBuffer.setFloat32Array("array",this.randomDirection()),this.directionsBuffer.apply(),1-de.frame%2*.2),a=r.maxDistance*i,i=r.maxPixel*i,a=(this.gtaoSetting.setFloat("maxDistance",a),this.gtaoSetting.setFloat("maxPixel",i),this.gtaoSetting.setFloat("darkFactor",r.darkFactor),this.gtaoSetting.setFloat("rayMarchSegment",r.rayMarchSegment),e.camera);this.gtaoSetting.setFloat("cameraNear",a.near),this.gtaoSetting.setFloat("cameraFar",a.far),this.gtaoSetting.setFloat("viewPortWidth",a.viewPort.width),this.gtaoSetting.setFloat("viewPortHeight",a.viewPort.height),this.gtaoSetting.setFloat("multiBounce",r.multiBounce?1:0),this.gtaoSetting.setFloat("blendColor",r.blendColor?1:0),this.gtaoSetting.apply(),C.computeCommand(t,[this.gtaoCompute]),C.lastRenderPassState=this.rendererPassState}}class gf extends vt{constructor(){super(),s(this,"viewQuad"),s(this,"rtTexture");var e=_.setting.render.postProcessing.globalFog,t=Qe.getGBufferFrame("ColorPassGBuffer"),r=E.presentationSize,e=(A.register("GlobalFog_shader",Ah),{fogColor:new ae(new b(e.fogColor.r,e.fogColor.g,e.fogColor.b,e.fogColor.a)),fogType:new ae(e.fogType),height:new ae(e.height),start:new ae(e.start),end:new ae(e.end),density:new ae(e.density),ins:new ae(e.ins)}),r=(this.rtTexture=this.createRTTexture("GlobalFog",r[0],r[1],z.rgba16float),this.viewQuad=this.createViewQuad("GlobalFog","GlobalFog_shader",this.rtTexture,e),t.getPositionMap()),e=t.getNormalMap();this.setInputTexture(r,e)}onAttach(e){_.setting.render.postProcessing.globalFog.enable=!0,_.setting.render.postProcessing.globalFog.debug&&this.debug()}onDetach(e){_.setting.render.postProcessing.globalFog.enable=!1}debug(){}set fogType(e){this.viewQuad.uniforms.fogType.value=e}get fogType(){return this.viewQuad.uniforms.fogType.value}set height(e){this.viewQuad.uniforms.height.value=e}get height(){return this.viewQuad.uniforms.height.value}set start(e){this.viewQuad.uniforms.start.value=e}get start(){return this.viewQuad.uniforms.start.value}set end(e){this.viewQuad.uniforms.end.value=e}get end(){return this.viewQuad.uniforms.end.value}set ins(e){this.viewQuad.uniforms.ins.value=e}get ins(){return this.viewQuad.uniforms.ins.value}set density(e){this.viewQuad.uniforms.density.value=e}get density(){return this.viewQuad.uniforms.density.value}get fogColor(){return this.viewQuad.uniforms.fogColor.color}set fogColor(e){this.viewQuad.uniforms.fogColor.color=e,this.viewQuad.uniforms.fogColor.onChange()}setInputTexture(e,t){var r=this.viewQuad.material.renderShader;r.setTexture("positionMap",e),r.setTexture("normalMap",t)}render(e,t){this.viewQuad.material.renderShader.setTexture("colorMap",this.getOutTexture()),this.viewQuad.renderTarget(e,this.viewQuad,t)}}class xf extends vt{constructor(){super(),s(this,"brightnessView"),s(this,"compositeView"),s(this,"blurList"),s(this,"blurX",1),s(this,"blurY",1),_.setting.render.postProcessing.bloom.enable=!0,this.blurX=_.setting.render.postProcessing.bloom.blurX,this.blurY=_.setting.render.postProcessing.bloom.blurY;var e=E.presentationSize,t=this.createRTTexture("HDRBloomPost-outTextures",e[0],e[1],z.rgba16float,!1),r=(be.createRTTexture(he.colorBufferTex_NAME,e[0],e[1],z.rgba16float,!1),this.createRTTexture("brightnessTextures",e[0],e[1],z.rgba16float,!1));this.brightnessView=this.createViewQuad("brightnessView","Bloom_Brightness_frag_wgsl",r,{luminosityThreshold:new ae(_.setting.render.postProcessing.bloom.brightness)});let i=e[0],a=e[1];this.blurList=[];for(let e=0;e<5;e++){var o=this.createRTTexture("tex_l"+e,i,a,z.rgba16float),n=this.createRTTexture("tex_r"+e,i,a,z.rgba16float),o=this.createViewQuad("ql"+e,"Bloom_blur_frag_wgsl",o,{texSize:new ae(new J(2*i,2*a)),hScale:new ae(e),vScale:new ae(e),horizontal:new ae(.5)}),n=this.createViewQuad("qr"+e,"Bloom_blur_frag_wgsl",n,{texSize:new ae(new J(2*i,2*a)),hScale:new ae(e),vScale:new ae(e),horizontal:new ae(1)});this.blurList.push({ql:o,qr:n}),i/=2,a/=2}this.compositeView=this.createViewQuad("compositeView","Bloom_composite_frag_wgsl",t,{bloomStrength:new ae(_.setting.render.postProcessing.bloom.intensity),bloomRadius:new ae(1)})}onAttach(e){this.debug()}onDetach(e){}debug(){}get bloomStrength(){return this.compositeView.uniforms.bloomStrength.value}set bloomStrength(e){this.compositeView.uniforms.bloomStrength.value=e}get bloomRadius(){return this.compositeView.uniforms.bloomRadius.value}set bloomRadius(e){this.compositeView.uniforms.bloomRadius.value=e}get luminosityThreshold(){return this.brightnessView.uniforms.luminosityThreshold.value}set luminosityThreshold(e){this.brightnessView.uniforms.luminosityThreshold.value=e}render(r,i){var e=this.getOutTexture();this.brightnessView.renderToViewQuad(r,this.brightnessView,i,e);{let t=this.brightnessView.rendererPassState.renderTargets[0];for(let e=0;e<this.blurList.length;e++){var a=this.blurList[e].ql,s=this.blurList[e].qr;a.material.renderShader.setUniformFloat("horizontal",.5),a.material.renderShader.setUniformFloat("vScale",e*this.blurX),a.renderToViewQuad(r,a,i,t),t=a.rendererPassState.renderTargets[0],s.material.renderShader.setUniformFloat("horizontal",2),s.material.renderShader.setUniformFloat("hScale",e*this.blurY),s.renderToViewQuad(r,s,i,t),t=s.rendererPassState.renderTargets[0]}}var t=this.compositeView.material.renderShader;t.setTexture("blurTex1",this.blurList[0].qr.rendererPassState.renderTargets[0]),t.setTexture("blurTex2",this.blurList[1].qr.rendererPassState.renderTargets[0]),t.setTexture("blurTex3",this.blurList[2].qr.rendererPassState.renderTargets[0]),t.setTexture("blurTex4",this.blurList[3].qr.rendererPassState.renderTargets[0]),t.setTexture("blurTex5",this.blurList[4].qr.rendererPassState.renderTargets[0]),this.compositeView.renderToViewQuad(r,this.compositeView,i,e)}}class au{constructor(){s(this,"indexList"),s(this,"color"),s(this,"count")}}class su{constructor(){s(this,"SlotCount",8),s(this,"MaxEntities",16),s(this,"defaultColor",new b(.2,1,1,1)),s(this,"slots",[]),s(this,"dataDirty",!0);var e=_.setting.render.postProcessing.outline.groupCount;this.SlotCount=Math.max(1,Math.min(e,this.SlotCount));for(let e=0;e<this.SlotCount;e++){var t=this.slots[e]=new au;t.indexList=new Float32Array(this.MaxEntities),t.color=this.defaultColor.clone(),t.count=0}}clear(){for(let e=0;e<this.SlotCount;e++)this.clearAt(e)}clearAt(e){this.dataDirty=!0;e=this.slots[e];return e.color.copyForm(this.defaultColor),e.indexList.fill(-1),e.count=0,this}fillDataAt(e,r,t){this.dataDirty=!0;var i=this.slots[e];if(i){i.indexList.fill(-1);for(let e=0,t=r.length;e<t;e++)i.indexList[e]=r[e];i.count=r.length,i.color.copyForm(t)}return this}fetchData(e){return e.dirty=this.dataDirty,e.slots=this.slots,this.dataDirty=!1,this}}class _f extends vt{constructor(){super(),s(this,"outlineTex"),s(this,"lowTex"),s(this,"rendererPassState"),s(this,"calcWeightCompute"),s(this,"outlineCompute"),s(this,"blendCompute"),s(this,"outlineSetting"),s(this,"slotsBuffer"),s(this,"slotsArray"),s(this,"entitiesArray"),s(this,"entitiesBuffer"),s(this,"weightBuffer"),s(this,"lowTexSize"),s(this,"oldOutlineColor"),s(this,"rtFrame"),s(this,"outlineData"),s(this,"fetchData"),s(this,"computeList"),this.outlineData=new su}onAttach(e){_.setting.render.postProcessing.outline.enable=!0}onDetach(e){_.setting.render.postProcessing.outline.enable=!1}set outlinePixel(e){e=Y(e,0,8);var t=_.setting.render.postProcessing.outline;t.outlinePixel!=e&&(t.outlinePixel=e)}get outlinePixel(){return _.setting.render.postProcessing.outline.outlinePixel}set fadeOutlinePixel(e){var t=_.setting.render.postProcessing.outline;e=Y(e,0,8),t.fadeOutlinePixel!=e&&(t.fadeOutlinePixel=e)}get fadeOutlinePixel(){return _.setting.render.postProcessing.outline.fadeOutlinePixel}set strength(e){e=Y(e,0,1);var t=_.setting.render.postProcessing.outline;t.strength!=e&&(t.strength=e)}get strength(){return _.setting.render.postProcessing.outline.strength}set useAddMode(e){_.setting.render.postProcessing.outline.useAddMode=e}get useAddMode(){return _.setting.render.postProcessing.outline.useAddMode}createGUI(){}createCompute(){var e=Qe.getGBufferFrame("ColorPassGBuffer").getPositionMap();this.calcWeightCompute=new Ce(vh),this.calcWeightCompute.setStorageBuffer("outlineSetting",this.outlineSetting),this.calcWeightCompute.setStorageBuffer("slotsBuffer",this.slotsBuffer),this.calcWeightCompute.setStorageBuffer("weightBuffer",this.weightBuffer),this.calcWeightCompute.setStorageBuffer("entitiesBuffer",this.entitiesBuffer),this.calcWeightCompute.setSamplerTexture("indexTexture",e),this.calcWeightCompute.workerSizeX=Math.ceil(this.lowTex.width/8),this.calcWeightCompute.workerSizeY=Math.ceil(this.lowTex.height/8),this.calcWeightCompute.workerSizeZ=1,this.outlineCompute=new Ce(yh),this.outlineCompute.setStorageBuffer("outlineSetting",this.outlineSetting),this.outlineCompute.setStorageBuffer("slotsBuffer",this.slotsBuffer),this.outlineCompute.setStorageBuffer("weightBuffer",this.weightBuffer),this.outlineCompute.setStorageBuffer("oldOutlineColor",this.oldOutlineColor),this.outlineCompute.setStorageTexture("lowTex",this.lowTex),this.outlineCompute.workerSizeX=Math.ceil(this.lowTex.width/8),this.outlineCompute.workerSizeY=Math.ceil(this.lowTex.height/8),this.outlineCompute.workerSizeZ=1,this.blendCompute=new Ce(_h),this.blendCompute.setStorageBuffer("outlineSetting",this.outlineSetting),this.autoSetColorTexture("inTex",this.blendCompute),this.blendCompute.setSamplerTexture("lowTex",this.lowTex),this.blendCompute.setStorageTexture("outlineTex",this.outlineTex),this.blendCompute.workerSizeX=Math.ceil(this.outlineTex.width/8),this.blendCompute.workerSizeY=Math.ceil(this.outlineTex.height/8),this.blendCompute.workerSizeZ=1}createResource(){var e=E.presentationSize,t=e[0],e=e[1],r=(this.lowTexSize=new J(Math.floor(.5*t),Math.floor(.5*e)),this.lowTex=new ne(this.lowTexSize.x,this.lowTexSize.y,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING),this.lowTex.name="lowTex",new fe),r=(r.clearValue=[0,0,0,1],r.loadOp="clear",this.outlineTex=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING),this.outlineTex.name="outlineTex",new fe);r.clearValue=[0,0,0,1],r.loadOp="clear",this.rtFrame=new Ve([this.outlineTex],[r]),Qe.getGBufferFrame("ColorPassGBuffer"),this.outlineSetting=new Mt(8),this.weightBuffer=new Se(this.lowTexSize.x*this.lowTexSize.y*4,GPUBufferUsage.COPY_SRC),this.oldOutlineColor=new Se(this.lowTexSize.x*this.lowTexSize.y*4,GPUBufferUsage.COPY_SRC),this.slotsArray=new Float32Array(4*this.outlineData.SlotCount),this.slotsBuffer=new Se(this.slotsArray.length),this.slotsBuffer.setFloat32Array("slotsArray",this.slotsArray),this.slotsBuffer.apply(),this.entitiesArray=new Float32Array(this.outlineData.SlotCount*this.outlineData.MaxEntities),this.entitiesBuffer=new Se(this.entitiesArray.length),this.entitiesBuffer.setFloat32Array("entitiesArray",this.entitiesArray),this.slotsBuffer.apply(),this.fetchData||(this.fetchData={})}fetchOutlineData(){if(this.outlineData.fetchData(this.fetchData),this.fetchData.dirty){var t=this.outlineData.SlotCount,r=this.outlineData.MaxEntities;for(let e=0;e<t;e++){var i=4*e,a=this.fetchData.slots[e];this.slotsArray[0+i]=a.color.r,this.slotsArray[1+i]=a.color.g,this.slotsArray[2+i]=a.color.b,this.slotsArray[3+i]=a.count,i=r*e,this.entitiesArray.set(a.indexList,i)}this.slotsBuffer.setFloat32Array("slotsArray",this.slotsArray),this.slotsBuffer.apply(),this.entitiesBuffer.setFloat32Array("entitiesArray",this.entitiesArray),this.entitiesBuffer.apply()}}render(e,t){this.calcWeightCompute||(this.createResource(),this.createCompute(),this.createGUI(),this.rendererPassState=De.createRendererPassState(this.rtFrame,null)),this.computeList||(this.computeList=[this.calcWeightCompute,this.outlineCompute,this.blendCompute]);var r=_.setting.render.postProcessing.outline;this.outlineSetting.setFloat("strength",r.strength),this.outlineSetting.setFloat("useAddMode",r.useAddMode?1:0),this.outlineSetting.setFloat("outlinePixel",r.outlinePixel),this.outlineSetting.setFloat("fadeOutlinePixel",r.fadeOutlinePixel),this.outlineSetting.setFloat("lowTexWidth",this.lowTexSize.x),this.outlineSetting.setFloat("lowTexHeight",this.lowTexSize.y),this.outlineSetting.apply(),this.fetchOutlineData(),C.computeCommand(t,this.computeList),C.lastRenderPassState=this.rendererPassState}}class vf extends vt{constructor(){super(),s(this,"SSR_RayTraceCompute"),s(this,"SSR_IS_Compute"),s(this,"SSR_Blend_Compute"),s(this,"isRetTexture"),s(this,"finalTexture"),s(this,"rendererPassState"),s(this,"ssrUniformBuffer"),s(this,"rayTraceData"),s(this,"ssrColorData"),s(this,"isKernelFloat32Array"),s(this,"rtFrame"),s(this,"historyPosition"),s(this,"reflectionRatio",.5)}onAttach(e){_.setting.render.postProcessing.ssr.enable=!0,this.debug()}onDetach(e){_.setting.render.postProcessing.ssr.enable=!1}get fadeEdgeRatio(){return _.setting.render.postProcessing.ssr.fadeEdgeRatio}set fadeEdgeRatio(e){e=Y(e,0,1),_.setting.render.postProcessing.ssr.fadeEdgeRatio=e}get rayMarchRatio(){return _.setting.render.postProcessing.ssr.rayMarchRatio}set rayMarchRatio(e){e=Y(e,0,1),_.setting.render.postProcessing.ssr.rayMarchRatio=e}get roughnessThreshold(){return _.setting.render.postProcessing.ssr.roughnessThreshold}set roughnessThreshold(e){e=Y(e,0,1),_.setting.render.postProcessing.ssr.roughnessThreshold=e}get fadeDistanceMin(){return _.setting.render.postProcessing.ssr.fadeDistanceMin}set fadeDistanceMin(e){e=Y(e,0,1e4),_.setting.render.postProcessing.ssr.fadeDistanceMin=e}get fadeDistanceMax(){return _.setting.render.postProcessing.ssr.fadeDistanceMax}set fadeDistanceMax(e){e=Y(e,0,1e4),_.setting.render.postProcessing.ssr.fadeDistanceMax=e}get powDotRN(){return _.setting.render.postProcessing.ssr.powDotRN}set powDotRN(e){e=Y(e,0,1),_.setting.render.postProcessing.ssr.powDotRN=e}debug(){}createRayTraceShader(){this.SSR_RayTraceCompute=new Ce(Th),this.SSR_RayTraceCompute.setStorageBuffer("ssrUniform",this.ssrUniformBuffer),this.SSR_RayTraceCompute.setStorageBuffer("rayTraceBuffer",this.rayTraceData),this.SSR_RayTraceCompute.setStorageBuffer("historyPosition",this.historyPosition);var e=Qe.getGBufferFrame("ColorPassGBuffer");this.SSR_RayTraceCompute.setSamplerTexture("zBufferTexture",e.getPositionMap()),this.SSR_RayTraceCompute.setSamplerTexture(he.normalBufferTex_NAME,e.attachments[2]),this.SSR_RayTraceCompute.setSamplerTexture(he.materialBufferTex_NAME,e.attachments[3]),V.instance.sky instanceof Js&&this.SSR_RayTraceCompute.setSamplerTexture("prefilterMap",V.instance.sky.map),this.SSR_RayTraceCompute.workerSizeX=Math.ceil(this.isRetTexture.width/8),this.SSR_RayTraceCompute.workerSizeY=Math.ceil(this.isRetTexture.height/8),this.SSR_RayTraceCompute.workerSizeZ=1}createISShader(){this.SSR_IS_Compute=new Ce(wh),this.SSR_IS_Compute.setStorageBuffer("ssrUniform",this.ssrUniformBuffer),this.SSR_IS_Compute.setStorageBuffer("rayTraceBuffer",this.rayTraceData),this.SSR_IS_Compute.setStorageBuffer("ssrColorData",this.ssrColorData),this.SSR_IS_Compute.setStorageBuffer("historyPosition",this.historyPosition),this.autoSetColorTexture("colorMap",this.SSR_IS_Compute),this.SSR_IS_Compute.setStorageTexture("outTex",this.isRetTexture),this.SSR_IS_Compute.workerSizeX=Math.ceil(this.isRetTexture.width/8),this.SSR_IS_Compute.workerSizeY=Math.ceil(this.isRetTexture.height/8),this.SSR_IS_Compute.workerSizeZ=1}createBlendShader(e){this.SSR_Blend_Compute=new Ce(bh),this.SSR_Blend_Compute.setStorageBuffer("rayTraceBuffer",this.rayTraceData),this.autoSetColorTexture("colorMap",this.SSR_Blend_Compute),this.SSR_Blend_Compute.setSamplerTexture("ssrMap",e),this.SSR_Blend_Compute.setStorageTexture("outTex",this.finalTexture),this.SSR_Blend_Compute.workerSizeX=Math.ceil(this.finalTexture.width/8),this.SSR_Blend_Compute.workerSizeY=Math.ceil(this.finalTexture.height/8),this.SSR_Blend_Compute.workerSizeZ=1}createResource(){var e=E.presentationSize,t=e[0],e=e[1],r=(this.finalTexture=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),this.finalTexture.name="ssrOutTex",new fe),t=(r.clearValue=[0,0,0,0],r.loadOp="clear",Math.ceil(t*_.setting.render.postProcessing.ssr.pixelRatio)),e=Math.ceil(e*_.setting.render.postProcessing.ssr.pixelRatio),i=(this.isRetTexture=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),this.isRetTexture.name="ssrTextureIn",new fe);i.clearValue=[0,0,0,0],i.loadOp="clear",this.rtFrame=new Ve([this.finalTexture,this.isRetTexture],[r,i]),this.rayTraceData=new Se(t*e*8,GPUBufferUsage.COPY_SRC),this.ssrColorData=new Se(t*e*4,GPUBufferUsage.COPY_SRC),this.historyPosition=new Se(t*e*4,GPUBufferUsage.COPY_SRC),this.ssrUniformBuffer=new Mt(32),this.ssrUniformBuffer.setFloat("ssrBufferSizeX",this.isRetTexture.width),this.ssrUniformBuffer.setFloat("ssrBufferSizeY",this.isRetTexture.height),this.ssrUniformBuffer.setFloat("colorMapSizeX",this.finalTexture.width),this.ssrUniformBuffer.setFloat("colorMapSizeY",this.finalTexture.height),this.ssrUniformBuffer.apply()}render(e,t){this.SSR_RayTraceCompute||(this.createResource(),this.createISShader(),this.createRayTraceShader(),this.createBlendShader(this.isRetTexture),this.finalTexture,this.rendererPassState=De.createRendererPassState(this.rtFrame,null),e=Be.getCameraGroup(e.camera),this.SSR_RayTraceCompute.setUniformBuffer("standUniform",e.uniformGPUBuffer));e=_.setting.render.postProcessing.ssr,this.ssrUniformBuffer.setFloat("fadeEdgeRatio",e.fadeEdgeRatio),this.ssrUniformBuffer.setFloat("rayMarchRatio",e.rayMarchRatio),this.ssrUniformBuffer.setFloat("fadeDistanceMin",e.fadeDistanceMin),this.ssrUniformBuffer.setFloat("fadeDistanceMax",e.fadeDistanceMax),this.ssrUniformBuffer.setFloat("mixThreshold",e.mixThreshold),this.ssrUniformBuffer.setFloat("roughnessThreshold",e.roughnessThreshold),this.ssrUniformBuffer.setFloat("reflectionRatio",this.reflectionRatio),this.ssrUniformBuffer.setFloat("powDotRN",e.powDotRN),this.ssrUniformBuffer.setFloat("randomSeedX",Math.random()),this.ssrUniformBuffer.setFloat("randomSeedY",Math.random()),this.ssrUniformBuffer.apply(),e=[this.SSR_RayTraceCompute,this.SSR_IS_Compute,this.SSR_Blend_Compute];C.computeCommand(t,e),C.lastRenderPassState=this.rendererPassState}}class yf{static createSeeds(){let t=[new p(0,0,20)],r=0,i=.02;for(let e=1;e<32;e++){var a=new p;t.push(a),r+=1-.382*e/32,i+=.01*e,a.x=Math.sin(r)*i,a.y=Math.cos(r)*i,a.z=1-e/32,a.multiplyScalar(20)}return t}}class Sf extends vt{constructor(){super(),s(this,"taaTexture"),s(this,"outTexture"),s(this,"rendererPassState"),s(this,"taaCompute"),s(this,"copyTexCompute"),s(this,"sharpCompute"),s(this,"taaSetting"),s(this,"preColorBuffer"),s(this,"preColorTex"),s(this,"preProjMatrix"),s(this,"preViewMatrix"),s(this,"rtFrame")}onAttach(e){_.setting.render.postProcessing.taa.enable=!0,e.camera.enableJitterProjection(!0),this.createGUI()}onDetach(e){_.setting.render.postProcessing.taa.enable=!1,e.camera.enableJitterProjection(!1)}get jitterSeedCount(){return _.setting.render.postProcessing.taa.jitterSeedCount}set jitterSeedCount(e){e=Y(e,2,8),e=Math.round(e),_.setting.render.postProcessing.taa.jitterSeedCount=e}get blendFactor(){return _.setting.render.postProcessing.taa.blendFactor}set blendFactor(e){e=Y(e,0,1),_.setting.render.postProcessing.taa.blendFactor=e}get sharpFactor(){return _.setting.render.postProcessing.taa.sharpFactor}set sharpFactor(e){e=Y(e,.1,.9),_.setting.render.postProcessing.taa.sharpFactor=e}get sharpPreBlurFactor(){return _.setting.render.postProcessing.taa.sharpPreBlurFactor}set sharpPreBlurFactor(e){e=Y(e,.1,.9),_.setting.render.postProcessing.taa.sharpPreBlurFactor=e}get temporalJitterScale(){return _.setting.render.postProcessing.taa.temporalJitterScale}set temporalJitterScale(e){e=Y(e,0,1),_.setting.render.postProcessing.taa.temporalJitterScale=e}createGUI(){}createCompute(e){var t=new Ce(Ph),r=(_.setting.render.postProcessing.taa,new Mt(44)),e=Be.getCameraGroup(e.camera),e=(t.setUniformBuffer("standUniform",e.uniformGPUBuffer),t.setUniformBuffer("taaData",r),t.setStorageBuffer("preColorBuffer",this.preColorBuffer),Qe.getGBufferFrame("ColorPassGBuffer"));t.setSamplerTexture("preColorTex",this.preColorTex),t.setSamplerTexture("posTex",e.getPositionMap()),this.autoSetColorTexture("inTex",t),t.setStorageTexture("outTex",this.taaTexture),t.workerSizeX=Math.ceil(this.taaTexture.width/8),t.workerSizeY=Math.ceil(this.taaTexture.height/8),t.workerSizeZ=1,this.taaCompute=t,this.taaSetting=r,this.copyTexCompute=new Ce(Ch),this.copyTexCompute.setStorageBuffer("preColor",this.preColorBuffer),this.copyTexCompute.setStorageTexture("preColorTex",this.preColorTex),this.copyTexCompute.workerSizeX=Math.ceil(this.taaTexture.width/8),this.copyTexCompute.workerSizeY=Math.ceil(this.taaTexture.height/8),this.copyTexCompute.workerSizeZ=1,this.sharpCompute=new Ce(Mh),this.sharpCompute.setUniformBuffer("taaData",r),this.sharpCompute.setSamplerTexture("inTex",this.taaTexture),this.sharpCompute.setStorageTexture("outTex",this.outTexture),this.sharpCompute.workerSizeX=Math.ceil(this.outTexture.width/8),this.sharpCompute.workerSizeY=Math.ceil(this.outTexture.height/8),this.sharpCompute.workerSizeZ=1}createResource(){this.preProjMatrix=(new N).identity(),this.preViewMatrix=(new N).identity();var e=E.presentationSize,t=e[0],e=e[1],r=(this.preColorBuffer=new Se(t*e*4,GPUBufferUsage.COPY_SRC),this.preColorTex=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING),this.preColorTex.name="taaTex",new fe),i=(r.clearValue=[0,0,0,1],r.loadOp="clear",this.taaTexture=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING),this.taaTexture.name="taaTex",new fe),t=(i.clearValue=[0,0,0,1],i.loadOp="clear",this.outTexture=new ne(t,e,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING),this.outTexture.name="sharpTaaTex",new fe);t.clearValue=[0,0,0,1],t.loadOp="clear",this.rtFrame=new Ve([this.preColorTex,this.taaTexture,this.outTexture],[r,i,t])}render(e,t){this.taaCompute||(this.createResource(),this.createCompute(e),this.rendererPassState=De.createRendererPassState(this.rtFrame,null));var r=_.setting.render.postProcessing.taa;this.taaSetting.setMatrix("preProjMatrix",this.preProjMatrix),this.taaSetting.setMatrix("preViewMatrix",this.preViewMatrix),this.taaSetting.setFloat("jitterFrameIndex",e.camera.jitterFrameIndex),this.taaSetting.setFloat("blendFactor",r.blendFactor),this.taaSetting.setFloat("sharpFactor",r.sharpFactor),this.taaSetting.setFloat("sharpPreBlurFactor",r.sharpPreBlurFactor),this.taaSetting.setFloat("jitterX",e.camera.jitterX),this.taaSetting.setFloat("jitterY",e.camera.jitterY),this.taaSetting.apply(),C.computeCommand(t,[this.copyTexCompute,this.taaCompute,this.sharpCompute]),C.lastRenderPassState=this.rendererPassState,this.preProjMatrix.copyFrom(e.camera.projectionMatrix),this.preViewMatrix.copyFrom(e.camera.viewMatrix)}}class nu{constructor(){s(this,"localPosition",new p),s(this,"worldPosition",new p),s(this,"uv",new J),s(this,"faceIndex"),s(this,"isIn",!1),s(this,"t",0),s(this,"u",0),s(this,"v",0),s(this,"triangle"),s(this,"v0"),s(this,"v1"),s(this,"v2"),s(this,"pickList"),s(this,"color")}}const dr=class{static distPtTri(e,t,r,i){var a=new p,s=new p,o=new p,i=(i.subtract(t,a),r.subtract(t,s),e.subtract(t,o),ke(a,a)),r=ke(a,s),n=ke(a,o),h=ke(s,s),o=ke(s,o),l=1/(i*h-r*r),h=(h*n-r*o)*l,i=(i*o-r*n)*l;return h>=-dr.EPS&&i>=-dr.EPS&&h+i<=1+dr.EPS?(o=t[1]+a[1]*h+s[1]*i,Math.abs(o-e[1])):dr.FLT_MAX}static IntersectTriangle(e,t,r){let i=t.v1,a=t.v2,s=t.v3,o=a.subtract(i,p.HELP_3),n=s.subtract(i,p.HELP_4),h=e.direction.cross(n,p.HELP_5),l=ke(o,h),u;if(0<l){if(r)return null;u=e.origin.subtract(i,p.HELP_2)}else u=i.subtract(e.origin,p.HELP_2),l=-l;var c,d,f;return l<1e-4?(this._info.isIn=!1,this._info.t=0,this._info.u=0,this._info.v=0):(r=ke(u,h))<0||r>l||(d=u.cross(o,p.HELP_1),(c=ke(e.direction,d))<0)||r+c>l?(this._info.isIn=!1,this._info.t=0,this._info.u=0,this._info.v=0):(d=ke(n,d),d*=f=1/l,r*=f,c*=f,this._info.isIn=!0,this._info.t=d,f=1-(this._info.u=r)-(this._info.v=c),this._u0.copyFrom(t.u1),this._u0.scale(f),this._u1.copyFrom(t.u2),this._u1.scale(r),this._u2.copyFrom(t.u3),this._u2.scale(c),this._info.uv.copyFrom(this._u0),this._info.uv.add(this._u1,this._info.uv),this._info.uv.add(this._u2,this._info.uv),this._info.localPosition.copyFrom(e.direction).multiplyScalar(d),this._info.localPosition.add(e.origin,this._info.localPosition)),this._info}};let Pt=dr;s(Pt,"EPS",1e-4),s(Pt,"FLT_MAX",3402823466e29),s(Pt,"_info",new nu),s(Pt,"_u0",new J),s(Pt,"_u1",new J),s(Pt,"_u2",new J);class bf{constructor(){s(this,"name"),s(this,"start"),s(this,"count")}}class wf{constructor(){s(this,"texSc"),s(this,"texOff")}}class Tf{constructor(){s(this,"name"),s(this,"fileName"),s(this,"useMipmap"),s(this,"wrapMode"),s(this,"filterMode")}}class Cf{constructor(){s(this,"mapNames")}}class Mf{constructor(){s(this,"start"),s(this,"count")}}class Pf{constructor(){s(this,"name"),s(this,"att_p",-1),s(this,"p_s",-1),s(this,"att_n",-1),s(this,"n_s",-1),s(this,"att_t",-1),s(this,"t_s",-1),s(this,"att_u1",-1),s(this,"u1_s",-1),s(this,"att_u2",-1),s(this,"u2_s",-1),s(this,"att_c",-1),s(this,"c_s",-1),s(this,"dm",0),s(this,"subms"),s(this,"bv")}}class Ef{constructor(){s(this,"name"),s(this,"shader"),s(this,"metalic"),s(this,"roughnees"),s(this,"bc"),s(this,"bTex"),s(this,"bSc"),s(this,"nTex"),s(this,"nSc"),s(this,"rTex"),s(this,"rSc"),s(this,"remaTex"),s(this,"remaSc"),s(this,"eTex"),s(this,"eSc"),s(this,"ec"),s(this,"aoTex"),s(this,"aoSc"),s(this,"aoIn"),s(this,"lIndex"),s(this,"lSc"),s(this,"blendMode"),s(this,"cull"),s(this,"alphaBlend"),s(this,"recshadow"),s(this,"castshadow")}}class Df{constructor(){s(this,"name"),s(this,"p"),s(this,"r"),s(this,"s"),s(this,"q"),s(this,"parent"),s(this,"b_anis"),s(this,"b_mes"),s(this,"b_mats"),s(this,"b_texs")}}const Di=class extends br{constructor(){if(super(),s(this,"_maxRetry",3),Di._instance)throw new Error("LoadManager is singleton class...")}loadAll(t,o){return new Promise((i,e)=>{let a=t.length,s=[];t.forEach((e,t)=>{let r=new o;this.load(e,o).then(e=>{r.parse(e),s.push(r),0===--a&&i(s)})})})}static getInstance(){return this._instance||(this._instance=new Di)}loadUrls(s,o){return new Promise((r,e)=>{let i=s.length,a=[];s.forEach((e,t)=>{this.load(e,o).then(e=>{a.push(e),0===--i&&r(a),i<0&&console.error(`loadUrls ${s} error`)})})})}get maxRetry(){return this._maxRetry}set maxRetry(e){this._maxRetry=e}load(e,r){return new Promise((e,t)=>{r.format})}};let aa=Di;s(aa,"_instance");class Rf{}class If{}class Lf{}class Of{}class Af{}class Uf{}class Bf{}class zf{}class Nf{}class Ff{}class kf{constructor(){s(this,"asset"),s(this,"extras"),s(this,"geometricError"),s(this,"properties"),s(this,"refine"),s(this,"root")}}class Gf{constructor(){s(this,"boundingVolume"),s(this,"children"),s(this,"geometricError"),s(this,"transform")}}class Vf{constructor(){s(this,"boundingVolume"),s(this,"geometricError"),s(this,"refine"),s(this,"content"),s(this,"contents")}}class Hf{constructor(){s(this,"uri"),s(this,"group"),s(this,"metadata")}}class Xf{constructor(){s(this,"class"),s(this,"properties")}}class rn{constructor(){s(this,"group"),s(this,"_modelList"),s(this,"_tileSet"),s(this,"_rootPath"),this.group=new ee}async loadTileSet(e,t){this._modelList=[];e=(this._rootPath=e)+"/"+t;if(this._tileSet=await _.res.loadJSON(e),this._tileSet.root.transform){var r=new N;for(let e=0;e<16;e++)r.rawData[e]=this._tileSet.root.transform[e]}var i=new N;switch((this._tileSet.asset&&this._tileSet.asset.gltfUpAxis||"y").toLowerCase()){case"x":i.makeRotationAxis(p.Y_AXIS,-Math.PI/2);break;case"y":i.makeRotationAxis(p.X_AXIS,Math.PI/2);break;case"z":i.identity()}var a,t=i.clone();t.invert(),this.applyTransform(this.group.transform,t);for(a of this._tileSet.root.children){var s,o,n,h=[];if(a.content&&a.content.uri&&h.push(a.content.uri),a.contents)for(var l of a.contents)h.push(l.uri);for(s of h){let e=this._rootPath+"/"+s,t={onProgress:e=>this.onLoadProgress(e),onComplete:e=>this.onComplete(e)},r;e.endsWith(".glb")?(r=await _.res.loadGltf(e,t),this.applyTransform(r.transform,i)):e.endsWith("tileset.json")?(o=e.replace("/tileset.json",""),await(n=new rn).loadTileSet(o,"tileset.json"),r=n.group):e.endsWith(".i3dm")?r=await _.res.loadI3DM(e,t,i):e.endsWith(".b3dm")&&(r=await _.res.loadB3DM(e,t,i)),r&&(this._modelList.push(r),this.group.addChild(r))}}}onLoadProgress(e){}onComplete(e){}applyTransform(e,t){t=t.decompose(lt.QUATERNION);e.localRotQuat.copyFrom(t[1]),e.localRotQuat=e.localRotQuat,e.localPosition.copyFrom(t[0]),e.localPosition=e.localPosition,e.localScale.copyFrom(t[2]),e.localScale=e.localScale}}class ou extends Ui{constructor(){super(),A.register("ColorLitShader",Ks.Ori_AllShader);var e=this.setShader("ColorLitShader","ColorLitShader"),t=(e.setDefine("USE_BRDF",!0),e.setShaderEntry("VertMain","FragMain"),e.setUniformColor("baseColor",new b),e.setUniformColor("emissiveColor",new b),e.setUniformFloat("envIntensity",1),e.setUniformFloat("normalScale",1),e.setUniformFloat("roughness",0),e.setUniformFloat("metallic",0),e.setUniformFloat("ao",1),e.setUniformFloat("alphaCutoff",0),e.shaderState);t.acceptShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,e.setTexture("normalMap",_.res.normalTexture),e.setTexture("emissiveMap",_.res.blackTexture)}clone(){return null}debug(){}}s(ou,"count",0);class an extends Ui{constructor(){super(),A.register("GlassShader",Rh),this.setShader("GlassShader","GlassShader");var e=this.getShader(),e=(e.setDefine("USE_BRDF",!0),e.setShaderEntry("VertMain","FragMain"),e.shaderState),e=(e.acceptShadow=!0,e.castShadow=!0,e.receiveEnv=!0,e.acceptGI=!0,e.useLight=!0,_.res.getTexture("BRDFLUT"));this.brdfLUT=e,this.baseMap=_.res.whiteTexture,this.normalMap=_.res.normalTexture,this.emissiveMap=_.res.blackTexture}clone(){console.log("clone material "+this.name);var e=new an;return e.baseMap=this.baseMap,e.normalMap=this.normalMap,e.aoMap=this.aoMap,this.maskMap&&(e.maskMap=this.maskMap),e.emissiveMap=this.emissiveMap,this.uvTransform_1&&(e.uvTransform_1=(new X).copyFrom(this.uvTransform_1)),this.uvTransform_2&&(e.uvTransform_2=(new X).copyFrom(this.uvTransform_2)),e.baseColor=this.baseColor.clone(),e.emissiveColor=this.emissiveColor.clone(),this.materialF0&&(e.materialF0=(new X).copyFrom(this.materialF0)),e.envIntensity=this.envIntensity,e.normalScale=this.normalScale,e.roughness=this.roughness,e.metallic=this.metallic,e.ao=this.ao,e.roughness_min=this.roughness_min,e.roughness_max=this.roughness_max,e.metallic_min=this.metallic_min,e.metallic_max=this.metallic_max,e.emissiveIntensity=this.emissiveIntensity,e.alphaCutoff=this.alphaCutoff,e.ior=this.ior,e.clearcoatFactor=this.clearcoatFactor,e.clearcoatRoughnessFactor=this.clearcoatRoughnessFactor,e}}class Wf extends ut{constructor(){super(),A.register("lambert_vert_wgsl",Pi.lambert_vert_wgsl),A.register("lambert_frag_wgsl",Pi.lambert_frag_wgsl);var e=this.setShader("lambert_vert_wgsl","lambert_frag_wgsl"),e=(e.setUniformVector4("transformUV1",new X(0,0,1,1)),e.setUniformVector4("transformUV2",new X(0,0,1,1)),e.setUniformColor("baseColor",new b),e.setUniformVector4("dirLight",new X(0,0,1,1)),e.setUniformColor("dirLightColor",new b),e.setUniformFloat("alphaCutoff",.5),e.setUniformFloat("shadowBias",35e-5),e.shaderState);e.acceptShadow=!0,e.castShadow=!0,e.receiveEnv=!1,e.acceptGI=!1,e.useLight=!0,this.baseMap=_.res.whiteTexture,this.emissiveMap=_.res.blackTexture,this.baseMap=_.res.grayTexture}set baseColor(e){this.renderShader.setUniformColor("baseColor",e)}get baseColor(){return this.renderShader.uniforms.baseColor.color}set envMap(e){}set shadowMap(e){}}class Yf extends Ui{constructor(){super(),A.register("PavementShader",Ih);var e=this.setShader("PavementShader","PavementShader"),t=(e.setShaderEntry("VertMain","FragMain"),e.setUniformColor("baseColor",new b),e.setUniformColor("emissiveColor",new b),e.setUniformFloat("envIntensity",1),e.setUniformFloat("normalScale",1),e.setUniformFloat("roughness",0),e.setUniformFloat("metallic",0),e.setUniformFloat("ao",1),e.setUniformFloat("alphaCutoff",0),e.setDefine("USE_BRDF",!0),e.shaderState);t.acceptShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,e.setTexture("normalMap",_.res.normalTexture),e.setTexture("emissiveMap",_.res.blackTexture),this.baseMap=_.res.whiteTexture,this.transparent=!0}set envMap(e){}set shadowMap(e){}debug(){}}class jf extends ut{constructor(){super(),A.register("UnLitShader",Zs),A.register("PointShadowDebug",Lh);var e=this.setShader("UnLitShader","PointShadowDebug"),e=(e.setShaderEntry("VertMain","FragMain"),e.setUniformVector4("transformUV1",new X(0,0,1,1)),e.setUniformVector4("transformUV2",new X(0,0,1,1)),e.setUniformColor("baseColor",new b),e.setUniformFloat("alphaCutoff",.5),e.shaderState);e.acceptShadow=!1,e.receiveEnv=!1,e.acceptGI=!1,e.useLight=!1,this.baseMap=_.res.whiteTexture}set envMap(e){}set shadowMap(e){}debug(){}}class ga{constructor(e=[]){s(this,"_points"),s(this,"_cacheValue"),this.points=e,this._cacheValue=new J}get points(){return this._points}set points(e){this._points=e}getValue(e){1<(e=e<0?0:e)&&(e=1);let t=this.points.length-1,r=Math.floor(t*e),i=r+1,a=ht.fract((1+t)*e);return i>=t&&(i=r,a=0),this._cacheValue.x=this.points[r].x+(this.points[i].x-this.points[r].x)*a,this._cacheValue.y=this.points[r].y+(this.points[i].y-this.points[r].y)*a,this._cacheValue}static createBezierPoints(e,t){for(var r=new ga,i=0;i<t;i++){var a=ga.multiPointBezier(e,i/t);r.points.push(a)}return r}static multiPointBezier(e,t){for(var r=e.length,i=0,a=0,s=function(e,t){for(var r=1,i=1;0<t;)r*=e,i*=t,e--,t--;return r/i},o=0;o<r;o++){var n=e[o];i+=n.x*Math.pow(1-t,r-1-o)*Math.pow(t,o)*s(r-1,o),a+=n.y*Math.pow(1-t,r-1-o)*Math.pow(t,o)*s(r-1,o)}return new J(i,a)}}class lu{static calculateCubicBezierPoint(e,t,r,i,a){let s=1-(e=(e=1<e?1:e)<0?0:e),o=s*s,n=s*s*s,h=e*e,l=e*e*e,u=t.mul(n),c=r.mul(3),d=(c=(c=c.mul(e)).mul(o),i.mul(3));d=(d=d.mul(h)).mul(s);t=a.mul(l);return u=(u=(u=u.add(c)).add(d)).add(t)}static bezierPoint(e,t,r,i){let a=1-(e=(e=1<e?1:e)<0?0:e),s=a*a,o=e*e,n=t.mul(s),h=r.mul(2);h.scaleBy(a),h.scaleBy(e);t=i.mul(o);return n=(n=n.add(h)).add(t)}static calculateCubicBezierPoints(e,t,r){let i=1-(e=(e=1<e?1:e)<0?0:e),a=i*i,s=i*i*i,o=e*e,n=e*e*e,h=t[r].mul(s),l=t[r+1].mul(3),u=(l=(l=l.mul(e)).mul(a),t[r+2].mul(3));u=(u=u.mul(o)).mul(i);e=t[r+3].mul(n);return h=(h=(h=h.add(l)).add(u)).add(e)}static bezierPathValue(r,i){(r=1<r?1:r)<0&&(r=0);var a,s=i.length,o=this.tmp_points;o.length=0;for(let t=1;t<s;++t)for(let e=0;e<s-t;++e)1==t?((a=new p).x=i[e].x*(1-r)+i[e+1].x*r,a.y=i[e].y*(1-r)+i[e+1].y*r,a.z=i[e].z*(1-r)+i[e+1].z*r,this.tmp_points.push(a)):((a=new p).x=o[e].x*(1-r)+o[e+1].x*r,a.y=o[e].y*(1-r)+o[e+1].y*r,a.z=o[e].z*(1-r)+o[e+1].z*r,o.push(a));return o[0]}}s(lu,"tmp_points",[]);class sa{constructor(e){s(this,"controlVerts"),this.setControlVerts(e)}setControlVerts(e){4==e.length&&(this.controlVerts=e.concat())}getPoint(e){var t,r,i;return 0<=e&&e<=1?(r=3*e*(t=1-e)*t,i=3*e*e*t,e=e*e*e,this.controlVerts[0].mul(t*t*t).add(this.controlVerts[1].mul(r)).add(this.controlVerts[2].mul(i)).add(this.controlVerts[3].mul(e))):p.ZERO}getTangent(e){var t,r,i;return 0<=e&&e<=1?(i=(r=this.controlVerts)[0].add(r[1].add(r[0]).mul(e)),t=r[1].add(r[2].add(r[1]).mul(e)),r=r[2].add(r[3].add(r[2]).mul(e)),i=i.add(t.subtract(i).mul(e)),t.add(r.subtract(t).mul(e)).subtract(i)):p.ZERO}getClosestParam(e,t=1e-6){return this.getClosestParamRec(e,0,1,t)}getClosestParamRec(e,t,r,i){var a,s,o=(t+r)/2;return r-t<i?o:(s=(o+r)/2,a=this.getPoint((t+o)/2),s=this.getPoint(s),a.subtract(e).lengthSquared<s.subtract(e).lengthSquared?r=o:t=o,this.getClosestParamRec(e,t,r,i))}}var hu=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(hu||{});class qf{constructor(e,t=0){s(this,"type",0),s(this,"numCurveSegments",0),s(this,"numControlVerts",0),s(this,"controlVerts",[]),this.setControlVerts(e,t)}getPathType(){return this.type}isClosed(){return 1==this.type}isValid(){return 0<this.numCurveSegments}clear(){this.controlVerts.length=0,this.type=0,this.numCurveSegments=0,this.numControlVerts=0}computeApproxLength(){if(!this.isValid())return 0;var t=this.numCurveSegments+1;if(t<2)return 0;let r=0,i=this.controlVerts;for(let e=1;e<t;e++){var a=i[3*(e-1)],s=i[3*e];r+=a.subtract(s).lengthSquared}return 0==r?0:r}computeApproxParamPerUnitLength(){var e=this.computeApproxLength();return this.numCurveSegments/e}computeApproxNormParamPerUnitLength(){return 1/this.computeApproxLength()}interpolatePoints(i,e){var t=i.length,a=(t<2&&console.error("point count must great 1"),this.clear(),this.type=e,this.controlVerts);switch(e){case 0:this.numCurveSegments=t-1,this.numControlVerts=3*t-2,a.length=this.numControlVerts;for(let e=0;e<t;e++)a[3*e]=i[e];var r=i[1].subtract(i[0]).mul(.25),r=(a[1]=i[0].add(r),i[t-2].subtract(i[t-1]).mul(.25));a[this.numControlVerts-2]=i[t-1].add(r);for(let r=1;r<this.numCurveSegments;r++){var s=i[r-1].subtract(i[r]),o=i[r+1].subtract(i[r]),n=s.lengthSquared,h=o.lengthSquared;if(0<n&&0<h){let e=(n+h)/8,t=o.div(h).subtract(s.div(n));t.normalize(),t=t.mul(e),a[3*r-1]=i[r].subtract(t),a[3*r+1]=i[r].add(t)}else a[3*r-1]=i[r],a[3*r+1]=i[r]}break;case 1:this.numCurveSegments=t,this.numControlVerts=3*t+1,a.length=this.numControlVerts;for(let e=0;e<t;e++)a[3*e]=i[e];a[this.numControlVerts-1]=i[0];for(let e=1;e<=this.numCurveSegments;e++){var l=e-1,u=(e+1)%this.numCurveSegments,c=e%this.numCurveSegments,l=i[l].subtract(i[c]),u=i[u].subtract(i[c]),d=l.lengthSquared,f=u.lengthSquared,p=3*e-1,m=(3*e+1)%(this.numControlVerts-1);if(0<d&&0<f){let e=(d+f)/8,t=u.div(f).subtract(l.div(d));t.normalize(),t=t.mul(e),a[p]=i[c].subtract(t),a[m]=i[c].add(t)}else a[p]=i[c],a[m]=i[c]}}}setControlVerts(e,t){var r=e.length;r<=0||0==t&&r<4||1==t&&r<7||(r-1)%3==0&&(this.clear(),this.type=t,this.numControlVerts=r,this.numCurveSegments=(r-1)/3,this.controlVerts=e)}getPoint(t){if(1==this.type){for(;t<0;)t+=this.numCurveSegments;for(;t>this.numCurveSegments;)t-=this.numCurveSegments}else t=ht.clampf(t,0,this.numCurveSegments);if(0<=t||!(t<=this.numCurveSegments)){let e=Math.floor(t);e>=this.numCurveSegments&&(e=this.numCurveSegments-1);var r=[],i=this.controlVerts;return r[0]=i[3*e+0],r[1]=i[3*e+1],r[2]=i[3*e+2],r[3]=i[3*e+3],new sa(r).getPoint(t-e)}}getPointNorm(e){return this.getPoint(e*this.numCurveSegments)}getTangent(t){if(1==this.type){for(;t<0;)t+=this.numCurveSegments;for(;t>this.numCurveSegments;)t-=this.numCurveSegments}else t=ht.clampf(t,0,this.numCurveSegments);if(0<=t||!(t<=this.numCurveSegments)){let e=Math.floor(t);e>=this.numCurveSegments&&(e=this.numCurveSegments-1);var r=this.controlVerts,i=[];return i[0]=r[3*e+0],i[1]=r[3*e+1],i[2]=r[3*e+2],i[3]=r[3*e+3],new sa(i).getTangent(t-e)}}getTangentNorm(e){return this.getTangent(e*this.numCurveSegments)}computeClosestParam(e,r){let i=Number.MAX_SAFE_INTEGER,a=0,s=[],o=new sa(s);for(let t=0;t<this.controlVerts.length-1;t+=3){for(let e=0;e<4;e++)s[e]=this.controlVerts[t+e];o.setControlVerts(s);var n=o.getClosestParam(e,r),h=o.getPoint(n).subtract(e).lengthSquared;h<i&&(i=h,a=t/3+n)}return a}computeClosestNormParam(e,t){return this.computeClosestParam(e,t*this.numCurveSegments)}}var uu=(e=>(e[e.COLLINEAR=0]="COLLINEAR",e[e.LINES_INTERSECT=1]="LINES_INTERSECT",e[e.SEGMENTS_INTERSECT=2]="SEGMENTS_INTERSECT",e[e.A_BISECTS_B=3]="A_BISECTS_B",e[e.B_BISECTS_A=4]="B_BISECTS_A",e[e.PARALELL=5]="PARALELL",e))(uu||{}),cu=(e=>(e[e.ON_LINE=0]="ON_LINE",e[e.LEFT_SIDE=1]="LEFT_SIDE",e[e.RIGHT_SIDE=2]="RIGHT_SIDE",e))(cu||{});const Ye=class{constructor(e,t){s(this,"start"),s(this,"end"),s(this,"color",new b(1,1,1,1)),s(this,"_normal"),s(this,"_normalCalculated",!1),this.start=e,this.end=t}set(e,t){this.start=e,this.end=t}getCenter(){var e=p.HELP_0;return this.start.subtract(this.end,e),e.scaleBy(.5),e.add(this.end),e}inverse(){var e=this.start;this.start=this.end,this.end=e}equals(e){return this.start==e.start&&this.end==e.end||this.start==e.end&&this.end==e.start}toArray(){return[this.start.x,this.start.y,this.start.z,this.end.x,this.end.y,this.end.z]}static getLines(t){var r=[];for(let e=0;e<t.length;e++){var i=e,a=Is(e+1,t.length),i=t[i],a=t[a];r.push(new Ye(i,a))}return r}intersection(e,t=null){var r=(e.end.z-e.start.z)*(this.end.x-this.start.x)-(e.end.x-e.start.x)*(this.end.z-this.start.z),i=(e.end.x-e.start.x)*(this.start.z-e.start.z)-(e.end.z-e.start.z)*(this.start.x-e.start.x),e=(e.start.x-this.start.x)*(this.end.z-this.start.z)-(e.start.z-this.start.z)*(this.end.x-this.start.x);if(0==r)return 0==i&&0==e?0:5;e/=r;var r=this.start.x+(i/=r)*(this.end.x-this.start.x),a=this.start.z+i*(this.end.z-this.start.z);return null!=t&&(t.x=r,t.y=0,t.z=a),0<=i&&i<=1&&0<=e&&e<=1?2:0<=e&&e<=1?3:0<=i&&i<=1?4:1}getDirection(){var e=this.end.subtract(this.start);return new p(e.x,e.y).normalize()}copyFrom(e){this.start||(this.start=new p),this.end||(this.end=new p),this.start.copyFrom(e.start),this.end.copyFrom(e.end)}static IsEqual(e,t){return Math.abs(e-t)<1e-7}static squreDistanceSegmentToSegment(e,t,B){let r=e.start,i=e.end,a=t.start,s=t.end,o=r.x,n=r.y,h=r.z,l=i.x,u=i.y,z=i.z,c=a.x,d=a.y,f=a.z,k=s.x,N=s.y,F=s.z,p=l-o,m=u-n,g=z-h,v=k-c,x=N-d,_=F-f,y=o-c,S=n-d,b=h-f,w=p*p+m*m+g*g,T=p*v+m*x+g*_,C=v*v+x*x+_*_,M=p*y+m*S+g*b,P=v*y+x*S+_*b,E=w*C-T*T,D=E,R=E,I=0,L=0,A=(this.IsEqual(E,0)?(I=0,D=1,L=P,R=C):(I=T*P-C*M,L=w*P-T*M,I<0?(I=0,L=P,R=C):I>D&&(I=D,L=P+T,R=C)),L<0?-M<(L=0)?I=0:w<-M?I=D:(I=-M,D=w):L>R&&(L=R,T-M<0?I=0:w<T-M?I=D:(I=T-M,D=w)),0),O=0;A=this.IsEqual(I,0)?0:I/D,O=this.IsEqual(L,0)?0:L/R;var e=y+A*p-O*v,t=S+A*m-O*x,U=b+A*g-O*_;return e*e+t*t+U*U}isNear(e,t=0,r){var i=p.HELP_0,a=p.HELP_1,i=(i.copyFrom(e.origin),a.copyFrom(e.direction),a.scaleBy(9999),a.add(i,a),Ye.cacluteLine0.set(i,a),Ye.cacluteLine1.copyFrom(this),r&&(r.perspectiveMultiplyPoint3(Ye.cacluteLine1.start,Ye.cacluteLine1.start),r.perspectiveMultiplyPoint3(Ye.cacluteLine1.end,Ye.cacluteLine1.end)),Ye.squreDistanceSegmentToSegment(Ye.cacluteLine0,Ye.cacluteLine1,r));return i+1e-4<=t?(e.length=i,!0):!(e.length=-999999)}};let Qt=Ye,fu=(s(Qt,"cacluteLine0",new Ye(null,null)),s(Qt,"cacluteLine1",new Ye(null,null)),Math.PI),ws=2*fu;class sn{constructor(e=1,t=0,r=0,i=1,a=0,o=0){s(this,"a"),s(this,"b"),s(this,"c"),s(this,"d"),s(this,"tx"),s(this,"ty"),this.a=e,this.b=t,this.c=r,this.d=i,this.tx=a,this.ty=o}clone(){return new sn(this.a,this.b,this.c,this.d,this.tx,this.ty)}concat(e){var t=this.a,r=this.c,i=this.tx;this.a=t*e.a+this.b*e.c,this.b=t*e.b+this.b*e.d,this.c=r*e.a+this.d*e.c,this.d=r*e.b+this.d*e.d,this.tx=i*e.a+this.ty*e.c+e.tx,this.ty=i*e.b+this.ty*e.d+e.ty}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}identity(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this}invert(){this._invertInto(this)}rotate(e){var t,r,i,a,s,o,n;0!==(e=+e)&&(e*=te,t=Math.cos(e),e=Math.sin(e),r=this.a,i=this.b,a=this.c,s=this.d,o=this.tx,n=this.ty,this.a=r*t-i*e,this.b=r*e+i*t,this.c=a*t-s*e,this.d=a*e+s*t,this.tx=o*t-n*e,this.ty=o*e+n*t)}scale(e,t){1!==e&&(this.a*=e,this.c*=e,this.tx*=e),1!==t&&(this.b*=t,this.d*=t,this.ty*=t)}setTo(e,t,r,i,a,s){return this.a=e,this.b=t,this.c=r,this.d=i,this.tx=a,this.ty=s,this}transformPoint(e,t,r){var i=this.a*e+this.c*t+this.tx,e=this.b*e+this.d*t+this.ty;return r?(r.setTo(i,e,0,1),r):new p(i,e,0,1)}setTranslate(e,t){this.tx=e,this.ty=t}translate(e,t){this.tx+=e,this.ty+=t}mul(e){var t=this.a,r=this.b,i=this.c,a=this.d,s=this.tx,o=this.ty,n=e.a,h=e.b,l=e.c,u=e.d,c=e.tx,e=e.ty;0!==h||0!==l?(this.a=t*n+r*l,this.b=t*h+r*u,this.c=i*n+a*l,this.d=i*h+a*u,this.tx=n*s+l*o+c,this.ty=h*s+u*o+e):(this.a=t*n,this.b=r*u,this.c=i*n,this.d=a*u,this.tx=n*s+c,this.ty=u*o+e)}equals(e){return this.a==e.a&&this.b==e.b&&this.c==e.c&&this.d==e.d&&this.tx==e.tx&&this.ty==e.ty}prepend(e,t,r,i,a,s){var o,n,h=this.tx;return 1==e&&0==t&&0==r&&1==i||(o=this.a,n=this.c,this.a=o*e+this.b*r,this.b=o*t+this.b*i,this.c=n*e+this.d*r,this.d=n*t+this.d*i),this.tx=h*e+this.ty*r+a,this.ty=h*t+this.ty*i+s,this}append(e){var t=this.a,r=this.b,i=this.c,a=this.d;return 1==e.a&&0==e.b&&0==e.c&&1==e.d||(this.a=e.a*t+e.b*i,this.b=e.a*r+e.b*a,this.c=e.c*t+e.d*i,this.d=e.c*r+e.d*a),this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*r+e.ty*a+this.ty,this}deltaTransformPoint(e){var t=this.a*e.x+this.c*e.y,e=this.b*e.x+this.d*e.y;return new p(t,e)}toString(){return"(a="+this.a+", b="+this.b+", c="+this.c+", d="+this.d+", tx="+this.tx+", ty="+this.ty+")"}createBox(e,t,r=0,i=0,a=0){var s,o=this;0!==r?(r*=te,s=Math.cos(r),r=Math.sin(r),o.a=s*e,o.b=r*t,o.c=-r*e,o.d=s*t):(o.a=e,o.b=0,o.c=0,o.d=t),o.tx=i,o.ty=a}createGradientBox(e,t,r=0,i=0,a=0){this.createBox(e/1638.4,t/1638.4,r,i+e/2,a+t/2)}_invertInto(e){let t=this.a,r=this.b,i=this.c,a=this.d,s=this.tx,o=this.ty;var n,h;0==r&&0==i?(e.b=e.c=0)==t||0==a?e.a=e.d=e.tx=e.ty=0:(t=e.a=1/t,a=e.d=1/a,e.tx=-t*s,e.ty=-a*o):0==(n=t*a-r*i)?e.identity():(n=1/n,h=e.a=a*n,r=e.b=-r*n,i=e.c=-i*n,a=e.d=t*n,e.tx=-(h*s+i*o),e.ty=-(r*s+a*o))}getScaleX(){var e;return 1==this.a&&0==this.b?1:(e=Math.sqrt(this.a*this.a+this.b*this.b),this.getDeterminant()<0?-e:e)}getScaleY(){var e;return 0==this.c&&1==this.d?1:(e=Math.sqrt(this.c*this.c+this.d*this.d),this.getDeterminant()<0?-e:e)}getSkewX(){return Math.atan2(this.d,this.c)-Math.PI/2}getSkewY(){return Math.atan2(this.b,this.a)}updateScaleAndRotation(e,t,r,i){var a,s;0!=r&&r!=ws||0!=i&&i!=ws?(r*=te,i*=te,a=Math.cos(r),s=Math.sin(r),r==i?(this.a=a*e,this.b=s*e):(this.a=Math.cos(i)*e,this.b=Math.sin(i)*e),this.c=-s*t,this.d=a*t):(this.a=e,this.b=this.c=0,this.d=t)}preMultiplyInto(e,t){let r=e.a*this.a,i=0,a=0,s=e.d*this.d,o=e.tx*this.a+this.tx,n=e.ty*this.d+this.ty;0===e.b&&0===e.c&&0===this.b&&0===this.c||(r+=e.b*this.c,s+=e.c*this.b,i+=e.a*this.b+e.b*this.d,a+=e.c*this.a+e.d*this.c,o+=e.ty*this.c,n+=e.tx*this.b),t.a=r,t.b=i,t.c=a,t.d=s,t.tx=o,t.ty=n}$transformBounds(e){let t=this.a,r=this.b,i=this.c,a=this.d,s=this.tx,o=this.ty,n=e.x,h=e.y,l=n+e.width,u=h+e.height,c=t*n+i*h+s,d=r*n+a*h+o,f=t*l+i*h+s,p=r*l+a*h+o,m=t*l+i*u+s,g=r*l+a*u+o,v=t*n+i*u+s,x=r*n+a*u+o,_=0;c>f&&(_=c,c=f,f=_),m>v&&(_=m,m=v,v=_),e.x=Math.floor(c<m?c:m),e.width=Math.ceil((f>v?f:v)-e.x),d>p&&(_=d,d=p,p=_),g>x&&(_=g,g=x,x=_),e.y=Math.floor(d<g?d:g),e.height=Math.ceil((p>x?p:x)-e.y)}getDeterminant(){return this.a*this.d-this.b*this.c}}var du=(e=>(e[e.kParticleSystemClampVelocityCurveId=322376503]="kParticleSystemClampVelocityCurveId",e[e.kParticleSystemForceCurveId=306581307]="kParticleSystemForceCurveId",e[e.kParticleSystemRotationCurveId=1793934638]="kParticleSystemRotationCurveId",e[e.kParticleSystemRotationBySpeedCurveId=3737431713]="kParticleSystemRotationBySpeedCurveId",e[e.kParticleSystemStartSpeedCurveId=2527743459]="kParticleSystemStartSpeedCurveId",e[e.kParticleSystemSizeCurveId=2368504881]="kParticleSystemSizeCurveId",e[e.kParticleSystemSizeBySpeedCurveId=4085612399]="kParticleSystemSizeBySpeedCurveId",e[e.kParticleSystemVelocityCurveId=3774601268]="kParticleSystemVelocityCurveId",e[e.kParticleSystemUVCurveId=326370691]="kParticleSystemUVCurveId",e[e.kParticleSystemColorGradientId=1494990940]="kParticleSystemColorGradientId",e[e.kParticleSystemColorByVelocityGradientId=1089181156]="kParticleSystemColorByVelocityGradientId",e[e.kParticleSystemMeshSelectionId=3159510623]="kParticleSystemMeshSelectionId",e[e.kParticleSystemUVRowSelectionId=2941263940]="kParticleSystemUVRowSelectionId",e))(du||{});const Kf=3.141592653589793;class Zf{}function pu(e,t,r){var i=.3333333333333333,e=e*i,a=e*e,r=a*e-e*t*.5+.5*r,t=t*i-a,a=t*t*t,s=a+r*r;return 0<=s?-e-t/(s=0<(s=Math.sqrt(s)-r)?Math.pow(s,i):-Math.pow(-s,i))+s:(s=Math.sqrt(-a),a=Math.acos(-r/s),s=Math.pow(s,i),-e+(s-=t/s)*Math.cos(a*i))}function xa(e,t,r,i){return Math.abs(e)<1e-5?1e-5<Math.abs(t)?(i.r0=-r/t,1):0:(r=t*t-4*e*r)<0?0:(e=.5/e,r=Math.sqrt(r),i.r0=(r-t)*e,i.r1=(-r-t)*e,2)}function mu(e,t,r,i,a){let s=0;var o,n;return 1e-4<=Math.abs(t)?(e[0]=pu(r/t,i/t,a/t),s++,o=r+t*e[0],n=i+r*e[0]+t*e[0]*e[0],s+=xa(t,o,n,{r0:e[1],r1:e[2]})):s+=xa(r,i,a,{r0:e[1],r1:e[2]}),s}class St{constructor(){s(this,"coeff",[])}static EvalSegment(e,t){return e*(e*(e*t[0]+t[1])+t[2])+t[3]}}const qt=class{constructor(){s(this,"segments",[]),s(this,"integrationCache",[]),s(this,"doubleIntegrationCache",[]),s(this,"times",[]),s(this,"segmentCount"),this.segments[qt.kMaxNumSegments]=new St,this.integrationCache[qt.kMaxNumSegments]=0,this.doubleIntegrationCache[qt.kMaxNumSegments]=0,this.times[qt.kMaxNumSegments]=0}calculateMinMax(e,t){e.x=Math.min(e.x,t),e.y=Math.max(e.y,t)}findMinMaxDoubleIntegrated(){let t=J.ZERO.clone(),r=.05;for(let e=0;e<20;e++)this.calculateMinMax(t,this.evaluateDoubleIntegrated(r)),r+=.05;return t}findMinMaxIntegrated(){var r=J.ZERO.clone(),i=[],a=[];for(let t=0;t<this.segmentCount;t++){var s=[],o=mu(s,4*this.segments[t].coeff[0],3*this.segments[t].coeff[1],2*this.segments[t].coeff[2],+this.segments[t].coeff[3]);for(let e=0;e<o;e++){var n=s[e]+i[t];n>=i[t]&&n<a[t]&&this.calculateMinMax(r,this.evaluateIntegrated(n))}this.calculateMinMax(r,this.evaluateIntegrated(a[t])),this.times[t]}return r}generateIntegrationCache(t){t.integrationCache[0]=0;let r=t.times[0],i=0;for(let e=1;e<t.segmentCount;e++){var a=t.segments[e-1].coeff,s=(Ts(a),r-i);t.integrationCache[e]=t.integrationCache[e-1]+St.EvalSegment(s,a)*s,i=r,r=t.times[e]}}generateDoubleIntegrationCache(t){let r=0,i=0;for(let e=0;e<t.segmentCount;e++){t.doubleIntegrationCache[e]=r;var a=t.times[e]-i,a=Math.max(a,0);r+=St.EvalSegment(a,t.segments[e].coeff)*a*a+t.integrationCache[e]*a,i=t.times[e]}}integrate(){this.generateIntegrationCache(this);for(let e=0;e<this.segmentCount;e++)Ts(this.segments[e].coeff)}doubleIntegrate(){this.generateIntegrationCache(this);for(let e=0;e<this.segmentCount;e++)gu(this.segments[e].coeff);this.generateDoubleIntegrationCache(this)}static isValidCurve(e){let t=e.getKeyCount(),r=t-1;return 0!=e.getKey(0).time&&r++,1!=e.getKey(t-1).time&&r++,r<=qt.kMaxNumSegments}evaluateDoubleIntegrated(t){let r=0;for(let e=0;e<this.segmentCount;e++){var i;if(t<=this.times[e])return i=t-r,this.doubleIntegrationCache[e]+this.integrationCache[e]*i+St.EvalSegment(i,this.segments[e].coeff)*i*i;r=this.times[e]}return 1}evaluateIntegrated(t){let r=0;for(let e=0;e<this.segmentCount;e++){var i;if(t<=this.times[e])return i=t-r,this.integrationCache[e]+St.EvalSegment(i,this.segments[e].coeff)*i;r=this.times[e]}return 1}evaluate(t){let r=0;for(let e=0;e<this.segmentCount;e++){if(t<=this.times[e])return St.EvalSegment(t-r,this.segments[e].coeff);r=this.times[e]}return 1}buildCurve(r,i){var e=r.getKeyCount();this.segmentCount=1;if(this.segments.length=0,this.integrationCache.length=0,this.doubleIntegrationCache.length=0,this.times.length=0,this.times[0]=1.01,0!=e)if(1==e)this.segments[0]=new St,this.segments[0].coeff[3]=r.getKey(0).value*i;else{this.segmentCount=e-1;let t=0;0!=r.getKey(0).time&&(this.segments[0].coeff[3]=r.getKey(0).value,this.times[0]=r.getKey(0).time,t=1);for(let e=0;e<this.segmentCount;e++)r.calculateCacheData(void 0,e,e+1,0),this.segments[e+t].coeff=(void 0).coeff.concat(),this.times[e+t]=r.getKey(e+1).time;this.segmentCount+=t,1!=r.getKey(e-1).time&&(this.segments[this.segmentCount].coeff[3]=r.getKey(e-1).value,this.segmentCount++),this.times[this.segmentCount-1]=1.01;for(let e=0;e<this.segmentCount;e++)this.segments[e].coeff[0]*=i,this.segments[e].coeff[1]*=i,this.segments[e].coeff[2]*=i,this.segments[e].coeff[3]*=i}return!0}};let jr=qt;function gu(e){e[0]/=20,e[1]/=12,e[2]/=6,e[3]/=2}function Ts(e){e[0]/=4,e[1]/=3,e[2]/=2,e[3]/=1}s(jr,"kMaxNumSegments",8);var xu=(e=>(e[e.kEMScalar=0]="kEMScalar",e[e.kEMOptimized=1]="kEMOptimized",e[e.kEMOptimizedMinMax=2]="kEMOptimizedMinMax",e[e.kEMSlow=3]="kEMSlow",e))(xu||{}),_u=(e=>(e[e.kMMCScalar=0]="kMMCScalar",e[e.kMMCCurve=1]="kMMCCurve",e[e.kMMCTwoCurves=2]="kMMCTwoCurves",e[e.kMMCTwoConstants=3]="kMMCTwoConstants",e))(_u||{});class Qf{constructor(){s(this,"max"),s(this,"min")}}class Jf{constructor(){s(this,"max"),s(this,"min")}integrate(){this.max.integrate(),this.min.integrate()}doubleIntegrate(){this.max.doubleIntegrate(),this.min.doubleIntegrate()}findMinMaxIntegrated(){return null}findMinMaxDoubleIntegrated(){return null}}class vu{constructor(e=1){s(this,"minMaxState"),s(this,"minCurve"),s(this,"maxCurve"),s(this,"_scalar",1),s(this,"_minScalar"),this._scalar=e,this.minMaxState=0,this.minCurve=new ma,this.maxCurve=new ma}setScalar(e){this._scalar=e}getScalar(){return this._scalar}static evaluateSlow(e,t,r){var i=e.maxCurve.getValue(t)*e.getScalar();return 2==e.minMaxState?ar(e.minCurve.getValue(t)*e.getScalar(),i,r):i}static evaluate(e,t,r=1){var i;return 0==e.minMaxState?e.getScalar():(i=e.maxCurve.getValue(t)*e.getScalar(),1==e.minMaxState?ar(e.minCurve.getValue(t)*e.getScalar(),i,r):3==e.minMaxState?ar(e._minScalar,e._scalar,r):2==e.minMaxState?ar(e.minCurve.getValue(t)*e.getScalar(),i,+Math.random()):this.evaluateSlow(e,t,1))}unSerialized(e){this.minMaxState=e.minMaxState,this._scalar=e.scalar,this._minScalar=e.minScalar,this.maxCurve.unSerialized(e.maxCurve),this.minCurve.unSerialized(e.minCurve)}}class $f{constructor(){s(this,"value",0),s(this,"mode",0),s(this,"spread",0),s(this,"speed",new vu)}unSerialized(e){this.value=e.value,this.mode=e.mode,this.spread=e.spread,this.speed.unSerialized(e.speed)}}function ed(e,t){var r=jr.isValidCurve(e.max);return 2!=t&&3!=t?r:r&&jr.isValidCurve(e.min)}function td(e,t,r,i){e.max.buildCurve(t.max,r),2!=i&&3!=i?e.min.buildCurve(t.max,r):e.min.buildCurve(t.min,r)}function rd(t,r){var e=r.getKeyCount();if(0!=e)if(1==e)fi(t,r.getKey(0).value);else{var i=e-1;fi(t,r.getKey(0).value);for(let e=0;e<i;e++){var a=new en,s=(r.calculateCacheData(a,e,e+1,0),3*a.coeff[0]),o=2*a.coeff[1],n=+a.coeff[2],h=r.getKey(e).time,l=r.getKey(e+1).time,u=[],c=xa(s,o,n,{r0:u[0],r1:u[1]});for(let e=0;e<c;e++)0<=u[e]&&u[e]+h<l&&fi(t,St.EvalSegment(u[e],a.coeff));fi(t,St.EvalSegment(l-h,a.coeff))}}}function fi(e,t){e.x=Math.min(e.x,t),e.y=Math.max(e.y,t)}class nn{constructor(e,t){s(this,"point",new p),s(this,"normal",p.UP),s(this,"_tmpVecA",new p),this.point=e,this.normal=t}clone(){return new nn(this.point.clone(),this.normal.clone())}intersectsLine(e,t,r){var i=-this.normal.dotProduct(this.point),a=this.normal.dotProduct(e)+i,a=a/(a-(this.normal.dotProduct(t)+i)),i=0<=a&&a<=1;return i&&r&&r.lerp(e,t,a),i}intersectsRay(e,t){(t=t||this._tmpVecA).copy(this.point).subtract(e.origin,t);var r=this.normal.dotProduct(t)/this.normal.dotProduct(e.direction),i=0<=r;return i&&t.copyFrom(e.direction).multiplyScalar(r).add(e.origin,t),i}}function id(e,t){return Math.random()*t+Math.random()*e+(t-e)*Math.random()}function ad(e,t,r){r*=Math.random();return Math.random()*t*r+Math.random()*e*r+(t-e)*Math.random()*r}function yu(e,t,r){let i=0,a=0;for(;0===i;)i=Math.random();for(;0===a;)a=Math.random();let s=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*a);return(1<(s=s/10+.5)||s<0)&&(s=yu(e,t,r)),s=(s=Math.pow(s,r))*(t-e)+e}function xt(e){return 0<e?Math.floor(e):Math.floor(e)-1}let W=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];function Cs(e,t){let r=15&e,i=1+(7&r);return(i=8&r?-i:i)*t}function na(e,t,r){var e=7&e,i=e<4?t:r,r=e<4?r:t;return(1&e?-i:i)+(2&e?-2*r:2*r)}function di(e,t,r,i){var e=15&e,a=e<8?t:r,r=e<4?r:12==e||14==e?t:i;return(1&e?-a:a)+(2&e?-r:r)}function zr(e,t,r,i,a){e&=31,t=e<24?t:r,r=e<16?r:i,i=e<8?i:a;return(1&e?-t:t)+(2&e?-r:r)+(4&e?-i:i)}let tt=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]];function sd(e){var t=xt(e),r=t+1,e=e-t,i=e-1,a=1-e*e,s=1-i*i;return.25*((a*=a)*a*Cs(W[255&t],e)+(s*=s)*s*Cs(W[255&r],i))}function nd(e,t){var r=.211324865;let i,a,s,o=.366025403*(e+t),n=e+o,h=t+o,l=xt(n),u=xt(h),c=(l+u)*r,d=l-c,f=u-c,p=e-d,m=t-f,g,v;v=m<p?(g=1,0):(g=0,1);var e=p-g+r,t=m-v+r,x=p-1+2*r,r=m-1+2*r,_=255&l,y=255&u,S=.5-p*p-m*m,S=(i=S<0?0:(S*=S)*S*na(W[_+W[y]],p,m),.5-e*e-t*t),S=(a=S<0?0:(S*=S)*S*na(W[_+g+W[y+v]],e,t),.5-x*x-r*r);return s=S<0?0:(S*=S)*S*na(W[1+_+W[1+y]],x,r),40*(i+a+s)}function od(e,t,r){var i=.166666667;let a,s,o,n,h=.333333333*(e+t+r),l=e+h,u=t+h,c=r+h,d=xt(l),f=xt(u),p=xt(c),m=(d+f+p)*i,g=d-m,v=f-m,B=p-m,x=e-g,_=t-v,y=r-B,S,b,w,T,C,M;M=_<=x?y<=_?(S=1,b=0,w=0,T=1,C=1,0):(C=(T=(w=y<=x?(S=1,b=0):(S=0,b=0,1),1),0),1):_<y?(S=0,b=0,w=1,T=0,C=1):x<y?(S=0,b=1,w=0,T=0,C=1):(S=0,b=1,w=0,T=1,C=1,0);var e=x-S+i,t=_-b+i,r=y-w+i,P=x-T+2*i,E=_-C+2*i,D=y-M+2*i,R=x-1+3*i,I=_-1+3*i,i=y-1+3*i,L=255&d,A=255&f,O=255&p,U=.6-x*x-_*_-y*y,U=(a=U<0?0:(U*=U)*U*di(W[L+W[A+W[O]]],x,_,y),.6-e*e-t*t-r*r),U=(s=U<0?0:(U*=U)*U*di(W[L+S+W[A+b+W[O+w]]],e,t,r),.6-P*P-E*E-D*D),e=(o=U<0?0:(U*=U)*U*di(W[L+T+W[A+C+W[O+M]]],P,E,D),.6-R*R-I*I-i*i);return n=e<0?0:(e*=e)*e*di(W[1+L+W[1+A+W[1+O]]],R,I,i),32*(a+s+o+n)}function ld(e,t,r,i){var a=.138196601;let s,o,n,h,B,l=.309016994*(e+t+r+i),z=e+l,k=t+l,N=r+l,F=i+l,u=xt(z),c=xt(k),d=xt(N),f=xt(F),p=(u+c+d+f)*a,G=u-p,V=c-p,H=d-p,X=f-p,m=e-G,g=t-V,v=r-H,x=i-X,Y=g<m?32:0,j=v<m?16:0,K=v<g?8:0,q=x<m?4:0,Z=x<g?2:0,Q=x<v?1:0,_=Y+j+K+q+Z+Q,J,$,ee,te,re,ie,ae,se,oe,ne,he,le;var e=m-(J=3<=tt[_][0]?1:0)+a,t=g-($=3<=tt[_][1]?1:0)+a,r=v-(ee=3<=tt[_][2]?1:0)+a,i=x-(te=3<=tt[_][3]?1:0)+a,y=m-(re=2<=tt[_][0]?1:0)+2*a,S=g-(ie=2<=tt[_][1]?1:0)+2*a,b=v-(ae=2<=tt[_][2]?1:0)+2*a,w=x-(se=2<=tt[_][3]?1:0)+2*a,T=m-(oe=1<=tt[_][0]?1:0)+3*a,C=g-(ne=1<=tt[_][1]?1:0)+3*a,M=v-(he=1<=tt[_][2]?1:0)+3*a,P=x-(le=1<=tt[_][3]?1:0)+3*a,E=m-1+4*a,D=g-1+4*a,R=v-1+4*a,a=x-1+4*a,I=255&u,L=255&c,A=255&d,O=255&f,U=.6-m*m-g*g-v*v-x*x,U=(s=U<0?0:(U*=U)*U*zr(W[I+W[L+W[A+W[O]]]],m,g,v,x),.6-e*e-t*t-r*r-i*i),U=(o=U<0?0:(U*=U)*U*zr(W[I+J+W[L+$+W[A+ee+W[O+te]]]],e,t,r,i),.6-y*y-S*S-b*b-w*w),e=(n=U<0?0:(U*=U)*U*zr(W[I+re+W[L+ie+W[A+ae+W[O+se]]]],y,S,b,w),.6-T*T-C*C-M*M-P*P),t=(h=e<0?0:(e*=e)*e*zr(W[I+oe+W[L+ne+W[A+he+W[O+le]]]],T,C,M,P),.6-E*E-D*D-R*R-a*a);return B=t<0?0:(t*=t)*t*zr(W[1+I+W[1+L+W[1+A+W[1+O]]]],E,D,R,a),27*(s+o+n+h+B)}const Qa=class{constructor(e,t,r){s(this,"v1"),s(this,"v2"),s(this,"v3"),s(this,"u1"),s(this,"u2"),s(this,"u3"),s(this,"n1"),s(this,"n2"),s(this,"n3"),s(this,"t0"),s(this,"t"),s(this,"u"),s(this,"v"),s(this,"min",new p),s(this,"max",new p),s(this,"id",0),this.id=200+Qa.ID++,e&&t&&r&&this.set(e,t,r)}set(e,t,r){this.v1=e,this.v2=t,this.v3=r;e=this.min,t=this.max;return e.x=Math.min(this.v1.x,this.v2.x,this.v3.x),e.y=Math.min(this.v1.y,this.v2.y,this.v3.y),e.z=Math.min(this.v1.z,this.v2.z,this.v3.z),t.x=Math.max(this.v1.x,this.v2.x,this.v3.x),t.y=Math.max(this.v1.y,this.v2.y,this.v3.y),t.z=Math.max(this.v1.z,this.v2.z,this.v3.z),this}getNormal(){var e=this.v1,t=this.v2,r=this.v3,t=new p(t.x-e.x,t.y-e.y,t.z-e.z),r=new p(r.x-e.x,r.y-e.y,r.z-e.z).cross(t);return r.normalize(),r}turnBack(){var e=this.v3;this.v3=this.v1,this.v1=e}getLines(){var e=this.v1,t=this.v2,r=this.v3;return[new Qt(e,t),new Qt(t,r),new Qt(r,e)]}equals(e){let r=this.getLines(),i=e.getLines(),a=0;for(let t=0;t<r.length;t++)for(let e=0;e<i.length;e++)r[t].equals(i[e])&&a++;return 3==a}getCenter(){var e=this.min,t=this.max,r=new p;return r.x=.5*(e.x+t.x),r.y=.5*(e.y+t.y),r.z=.5*(e.z+t.z),r}intersects(e){var t=this.max,r=this.min,i=e.max,e=e.min;return r.x<=i.x&&t.x>=e.x&&r.y<=i.y&&t.y>=e.y&&r.z<=i.z&&t.z>=e.z}sign2D(e,t,r){return(e.x-r.x)*(t.z-r.z)-(t.x-r.x)*(e.z-r.z)}pointInTriangle2D(e){var t=this.v1,r=this.v2,i=this.v3,a=this.sign2D(e,t,r),r=this.sign2D(e,r,i),e=this.sign2D(e,i,t);return!((a<0||r<0||e<0)&&(0<a||0<r||0<e))}toArray(){return[this.v1.x,this.v1.y,this.v1.z,this.v2.x,this.v2.y,this.v2.z,this.v3.x,this.v3.y,this.v3.z]}};let oa=Qa;s(oa,"ID",-1);const Ja=class extends J{constructor(e=0,t=0){super(e,t),s(this,"u",0),s(this,"v",0),this.u=e,this.v=t}length(){return 0}};let la=Ja;s(la,"uv_0",new Ja);class hd extends tr{constructor(e=1,t=1,r=1,i=8,a=8,o=!1,n=0,h=2*Math.PI){super(),s(this,"radiusTop"),s(this,"radiusBottom"),s(this,"height"),s(this,"radialSegments"),s(this,"heightSegments"),s(this,"openEnded"),s(this,"thetaStart"),s(this,"thetaLength"),this.radiusTop=e,this.radiusBottom=t,this.height=r,this.radialSegments=i,this.heightSegments=a,this.openEnded=o,this.thetaStart=n,this.thetaLength=h,this.uuid=qe(),this.buildGeometry()}addGroup(e,t,r){this.addSubGeometry({indexStart:e,indexCount:t,vertexStart:e,index:r})}buildGeometry(){const f=this,m=(this.radialSegments=Math.floor(this.radialSegments),this.heightSegments=Math.floor(this.heightSegments),[]),g=[],v=[],x=[];let _=0;const i=[],y=this.height/2;let e=0;{var t=new p,a=new p;let r=0;var s=(f.radiusBottom-f.radiusTop)/f.height;for(let e=0;e<=f.heightSegments;e++){var o=[],n=e/f.heightSegments,h=n*(f.radiusBottom-f.radiusTop)+f.radiusTop;for(let e=0;e<=f.radialSegments;e++){var l=e/f.radialSegments,u=l*f.thetaLength+f.thetaStart,c=Math.sin(u),u=Math.cos(u);a.x=h*c,a.y=-n*f.height+y,a.z=h*u,m.push(a.x,a.y,a.z),t.set(c,s,u).normalize(),g.push(t.x,t.y,t.z),v.push(l,1-n),o.push(_++)}i.push(o)}for(let t=0;t<f.radialSegments;t++)for(let e=0;e<f.heightSegments;e++){var d=i[e][t],S=i[e+1][t],b=i[e+1][t+1],w=i[e][t+1];x.push(d,S,w),x.push(S,b,w),r+=6}f.addGroup(e,r,0),e+=r}!1===this.openEnded&&(0<this.radiusTop&&P(!0),0<this.radiusBottom)&&P(!1);var r=new Float32Array(m),T=new Float32Array(g),C=new Float32Array(v),M=new Uint16Array(x);function P(t){var r=_,i=new J,a=new p;let s=0;var o=!0===t?f.radiusTop:f.radiusBottom,n=!0===t?1:-1;for(let e=1;e<=f.radialSegments;e++)m.push(0,y*n,0),g.push(0,n,0),v.push(.5,.5),_++;var h=_;for(let e=0;e<=f.radialSegments;e++){var l=e/f.radialSegments*f.thetaLength+f.thetaStart,u=Math.cos(l),l=Math.sin(l);a.x=o*l,a.y=y*n,a.z=o*u,m.push(a.x,a.y,a.z),g.push(0,n,0),i.x=.5*u+.5,i.y=.5*l*n+.5,v.push(i.x,i.y),_++}for(let e=0;e<f.radialSegments;e++){var c=r+e,d=h+e;!0===t?x.push(d,d+1,c):x.push(d+1,d,c),s+=3}f.addGroup(e,s,!0===t?1:2),e+=s}this.setAttribute(H.position,r),this.setAttribute(H.normal,T),this.setAttribute(H.uv,C),this.setAttribute(H.TEXCOORD_1,C),this.setIndices(M)}}class ud extends tr{constructor(e=.4,t=.1,r=32,i=32){super(),s(this,"radius"),s(this,"tube"),s(this,"radialSegments"),s(this,"tubularSegments"),this.radius=e,this.tube=t,this.radialSegments=r,this.tubularSegments=i,this.initVertex()}initVertex(){var r=2*Math.PI,i=this.radius,a=this.tube,s=this.radialSegments,o=this.tubularSegments,e=(this.bounds=new je(p.ZERO.clone(),new p(2*i,2*a,2*i)),(s+1)*(o+1));let n=new Float32Array(3*e),h=new Float32Array(3*e),l=new Float32Array(2*e),u=new Uint16Array(s*o*2*3),c=0,d=0,f=0,m=0;for(let t=0;t<=s;t++)for(let e=0;e<=o;e++){var g=e/o,v=t/s,x=g*r,_=v*Math.PI*2;n[c++]=(i+a*Math.cos(_))*Math.sin(x),n[c++]=a*Math.sin(_),n[c++]=(i+a*Math.cos(_))*Math.cos(x),h[d++]=Math.sin(x)*Math.cos(_),h[d++]=Math.sin(_),h[d++]=Math.cos(x)*Math.cos(_),l[f++]=g,l[f++]=v,e<o&&t<s&&(_=(x=o+1)*t+e,g=x*(t+1)+e,v=x*(t+1)+e+1,x=x*t+e+1,u[m++]=_,u[m++]=x,u[m++]=g,u[m++]=x,u[m++]=v,u[m++]=g)}this.setIndices(u),this.setAttribute(H.position,n),this.setAttribute(H.normal,h),this.setAttribute(H.uv,l),this.setAttribute(H.TEXCOORD_1,l),this.addSubGeometry({indexStart:0,indexCount:u.length,vertexStart:0,index:0})}}class cd extends Ke{constructor(e,t){super(e,t,6),s(this,"width",4),s(this,"height",4),s(this,"depthOrArrayLayers",6),s(this,"visibility",GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE),this.format=z.depth24plus,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.textureBindingLayout.viewDimension="cube"}internalCreateTexture(){this.textureDescriptor={format:"depth24plus",size:{width:this.width,height:this.height,depthOrArrayLayers:6},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=E.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"cube"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=E.device.createSampler({}),this.gpuSampler_comparison=E.device.createSampler({compare:"less",label:"sampler_comparison"})}}class Su extends Ke{constructor(){super(...arguments),s(this,"uint16Array"),s(this,"floatArray"),s(this,"_dataBuffer")}create(r,i,a=null,e=!0){if(null==a){a=[];for(let e=0,t=r*i*4;e<t;e++)a[e]=0}return this.updateTexture(r,i,a,e),this}updateTexture(e,t,r,i=!0){e==this.width&&t==this.height||(this._dataBuffer&&this._dataBuffer.destroy(),this._dataBuffer=null,this.gpuTexture&&this.gpuTexture.destroy(),this.gpuTexture=null),this.floatArray=r;var a=E.device,s=4*e*2,o=(this.format=z.rgba16float,this.mipmapCount=Math.floor(i?Math.log2(e):1),this.createTextureDescriptor(e,t,this.mipmapCount,this.format),this.uint16Array&&this.uint16Array.length==r.length||(this.uint16Array=new Uint16Array(r.length)),this.uint16Array);for(let e=0,t=o.length;e<t;e++)o[e]=Fr(r[e]);var i=this._dataBuffer=a.createBuffer({size:o.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),n=(a.queue.writeBuffer(i,0,o),C.beginCommandEncoder());n.copyBufferToTexture({buffer:i,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),this.useMipmap||(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float"),C.endCommandEncoder(n),this.gpuSampler=a.createSampler(this),this.gpuTexture=this.getGPUTexture(),1<this.mipmapCount&&nt.webGPUGenerateMipmap(this)}}class fd extends Ke{create(e,t,r,i=!0){var a=E.device,s=4*e*4,o=(this.format=z.rgba32float,this.createTextureDescriptor(e,t,1,this.format),a.createBuffer({size:r.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),r=(a.queue.writeBuffer(o,0,r),C.beginCommandEncoder());r.copyBufferToTexture({buffer:o,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),C.endCommandEncoder(r),i&&(this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float"),this.gpuSampler=a.createSampler({})}fromBuffer(e,t,r){var i=E.device,a=4*e*4,s=(this.format=z.rgba32float,this.mipmapCount=1,this.createTextureDescriptor(e,t,this.mipmapCount,this.format),C.beginCommandEncoder());return s.copyBufferToTexture({buffer:r,bytesPerRow:a},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),C.endCommandEncoder(s),this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.gpuSampler=i.createSampler({}),this}}class dd extends ei{constructor(e){super(),s(this,"_internalTexture"),s(this,"_minSize",32),s(this,"_skyColor"),this._skyColor=e,this._internalTexture=new Su;e=[];return _.res.fillColor(e,this._minSize,this._minSize,this.color.r,this.color.g,this.color.b,this.color.a),this._internalTexture.create(this._minSize,this._minSize,e,!1),this.createFromTexture(this._minSize,this._internalTexture),this}changeColor(e){return this._skyColor=e,_.res.fillColor(this._internalTexture.floatArray,this._minSize,this._minSize,this.color.r,this.color.g,this.color.b,this.color.a),this._internalTexture.updateTexture(this._minSize,this._minSize,this._internalTexture.floatArray,!1),this.uploadTexture(0,this._internalTexture),this}get color(){return this._skyColor}set color(e){this.changeColor(e)}}class pd extends Ke{create(e,t,r,i=!0){var a=E.device,s=4*e*4,i=(this.format=z.rgba16float,this.mipmapCount=Math.floor(i?Math.log2(e):1),this.createTextureDescriptor(e,t,this.mipmapCount,this.format),a.createBuffer({size:r.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),r=(a.queue.writeBuffer(i,0,r),C.beginCommandEncoder());r.copyBufferToTexture({buffer:i,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),C.endCommandEncoder(r),this.minFilter="nearest",this.magFilter="nearest",this.mipmapFilter="nearest",this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="nearest",this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float",this.gpuSampler=a.createSampler(this),1<this.mipmapCount&&nt.webGPUGenerateMipmap(this)}}class md extends ee{constructor(e,t=.1){super(),s(this,"length",100),s(this,"thickness",.1),this.length=e,this.thickness=t,this.init()}init(){var e=new ee,t=new ee,r=new ee,i=new mi(2,2,2),a=new mi(2,2,2),s=new mi(2,2,2),o=new Zt,n=(o.baseColor=new b(1,0,0),new Zt),h=(n.baseColor=new b(0,1,0),new Zt),l=(h.baseColor=new b(0,0,1),e.addComponent(Le)),u=t.addComponent(Le),c=r.addComponent(Le);l.geometry=i,l.material=o,l.castShadow=!1,u.geometry=a,u.material=n,u.castShadow=!1,c.geometry=s,c.material=h,c.castShadow=!1,e.localScale=new p(this.length,this.thickness,this.thickness),e.x=this.length,t.localScale=new p(this.thickness,this.length,this.thickness),t.y=this.length,r.localScale=new p(this.thickness,this.thickness,this.length),r.z=this.length,this.addChild(e),this.addChild(t),this.addChild(r)}}class gd extends DataView{constructor(e,t,r){super(e,t,r),s(this,"position",0)}}class xd{static merge(){}static generateNormal(){}static generateTangent(){}static packUV(){}}class _d{static color_temperature_to_rgb(e){e<1e3?e=1e3:4e4<e&&(e=4e4);var e=e/100,t=this.get_red(e),r=this.get_green(e),e=this.get_blue(e);return new b(t/255,r/255,e/255,1)}static get_red(e){return e<=66?255:(e=329.698727446*Math.pow(e-60,-.1332047592),this.bound(e))}static get_green(e){let t=0;return t=e<=66?99.4708025861*Math.log(e)-161.1195681661:288.1221695283*Math.pow(e-60,-.0755148492),this.bound(t)}static get_blue(e){return 66<=e?255:e<=19?0:(e=138.5177312231*Math.log(e-10)-305.0447927307,this.bound(e))}static bound(e,t=0,r=255){e=Math.max(e,t);return Math.min(e,r)}}class vd{constructor(){s(this,"_pool",[]),s(this,"_worldPosition",new p),s(this,"_viewPosition",new p),s(this,"_zSortList",[])}pop(){return this._pool.pop()||{}}recycle(){for(var e of this._zSortList)e.z=0,e.userData=null,e.obj3d=null,this._pool.push(e);this._zSortList.length=0}sort(e,t,r,i){this._zSortList=[];for(var a of t){var s=this.pop();s.userData=a,s.obj3d=r(a),this._worldPosition.copyFrom(s.obj3d.transform.worldPosition),e.worldToScreenPoint(this._worldPosition,this._viewPosition),s.z=this._viewPosition.z,this._zSortList.push(s)}this._zSortList.sort((e,t)=>0<e.z-t.z?1:-1),i=i||[];for(var o of this._zSortList)i.push(o.userData);return this.recycle(),i}}class yd extends Number{}class Sd extends Number{}class bd extends Number{}class wd extends Bt{constructor(){super(...arguments),s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"w",0)}}export{ml as AccelerateDecelerateInterpolator,dl as AccelerateInterpolator,ma as AnimationCurve,Kt as AnimationMonitor,Ac as AnimatorEventKeyframe,_l as AnticipateInterpolator,Ti as AnticipateOvershootInterpolator,Lc as AtmosphericComponent,Bh as AtmosphericScatteringSky,Uh as AtmosphericScatteringSkySetting,Qs as AtmosphericScatteringSky_shader,Hh as AttributeAnimCurve,Vc as AudioListener,md as AxisObject,Ft as B3DMLoader,nh as B3DMLoaderBase,js as B3DMParseUtil,Ws as B3DMParser,yc as BLUR_CsShader,ch as BRDFLUT,fh as BRDFLUTGenerate,zn as BRDF_frag,Hs as BatchTable,ga as Bezier2D,lu as Bezier3D,$s as BillboardComponent,kh as BillboardType,Ht as BitmapTexture2D,xo as BitmapTexture2DArray,xs as BitmapTextureCube,_o as Blend,Os as BlendFactor,ge as BlendMode,pr as Bloom_shader,Ql as BlurEffectCreatorBlur_cs,Zl as BlurEffectCreatorSample_cs,Jl as BlurTexture2DBufferCreator,rt as BounceInterpolator,je as BoundingBox,Ha as BoundingSphere,ir as BoxColliderShape,mi as BoxGeometry,Cn as BrdfLut_frag,bf as BufferInfo,Nn as BxDF_frag,Vn as BxdfDebug_frag,gd as BytesStream,st as CEvent,br as CEventDispatcher,gi as CEventListener,$h as CResizeEvent,ii as Camera3D,Xc as CameraControllerBase,xe as CameraType,Ie as CameraUtil,Jc as CapsuleColliderShape,Ro as CastPointShadowMaterialPass,Io as CastShadowMaterialPass,Fn as Clearcoat_frag,el as ClusterBoundsSource_cs,dn as ClusterDebug_frag,$o as ClusterLightingBuffer,rl as ClusterLightingRender,tl as ClusterLighting_cs,ko as CollectInfo,Gh as ColliderComponent,Bi as ColliderShape,si as ColliderShapeType,b as Color,ou as ColorLitMaterial,Ks as ColorLitShader,Ln as ColorPassFragmentOutput,Qo as ColorPassRenderer,$a as ColorUtil,wn as Common_frag,Tn as Common_vert,ve as ComponentBase,se as ComponentCollect,Hr as ComputeGPUBuffer,Ce as ComputeShader,ef as CubeCamera,$l as CubeMapFaceEnum,xi as CubeSky_Shader,sa as CubicBezierCurve,qf as CubicBezierPath,hu as CubicBezierType,vl as CycleInterpolator,hd as CylinderGeometry,te as DEGREES_TO_RADIANS,pl as DecelerateInterpolator,Bs as Depth2DTextureArray,Us as DepthCubeArrayTexture,cd as DepthCubeTexture,Ao as DepthMaterialPass,pf as DepthOfFieldPost,mh as DepthOfView_cs,Gl as DirectLight,Tc as EmptyFrag_CommonFragment,Cc as EmptyFrag_FragmentOutput,_ as Engine3D,co as Entity,hs as EntityBatchCollect,V as EntityCollect,Mn as EnvMap_frag,wt as ErpImage2CubeMap,eh as ErpImage2CubeMapCreateCube_cs,th as ErpImage2CubeMapRgbe2rgba_cs,xt as FASTFLOOR,fs as FXAAPost,Oh as FXAAShader,Dn as FastMathShader,ka as FeatureTable,ot as FileLoader,Wc as FirstPersonCameraController,Su as Float16ArrayTexture,fd as Float32ArrayTexture,Yc as FlyCameraController,ds as ForwardRenderJob,In as FragmentVarying,en as FrameCache,uo as Frustum,wc as FrustumCulling_cs,Hn as FullQuad_vert_wgsl,Qe as GBufferFrame,Uo as GBufferPass,ys as GBuffer_pass,fa as GILighting,Kl as GLBChunk,ql as GLBHeader,za as GLBParser,vo as GLSLLexer,oi as GLSLLexerToken,So as GLSLPreprocessor,Co as GLSLSyntax,oh as GLTFBinaryExtension,Ee as GLTFParser,da as GLTFSubParser,Ll as GLTFSubParserCamera,jl as GLTFSubParserConverter,Al as GLTFSubParserMaterial,Ol as GLTFSubParserMesh,gs as GLTFSubParserSkeleton,Ul as GLTFSubParserSkin,$ as GLTFType,gc as GLTF_Accessors,ca as GLTF_Info,fc as GLTF_Light,mc as GLTF_Mesh,dc as GLTF_Node,pc as GLTF_Primitives,cc as GLTF_Scene,_t as GPUAddressMode,Tu as GPUBlendFactor,er as GPUBufferBase,Ct as GPUBufferType,ti as GPUCompareFunction,C as GPUContext,xr as GPUCullMode,_i as GPUFilterMode,va as GPUPrimitiveTopology,z as GPUTextureFormat,ni as GPUVertexFormat,Pu as GPUVertexStepMode,mf as GTAOPost,gh as GTAO_cs,qn as GenerayRandomDir,tr as GeometryBase,jo as GeometryIndicesBuffer,xd as GeometryUtil,Wo as GeometryVertexBuffer,Et as GeometryVertexType,Au as GetRepeat,an as GlassMaterial,Rh as GlassShader,Be as GlobalBindGroup,Li as GlobalBindGroupLayout,gf as GlobalFog,Ah as GlobalFog_shader,Ms as GlobalUniform,fo as GlobalUniformGroup,sl as Graphic3D,Ma as Graphic3DBatchRenderer,il as Graphic3DFillRenderer,Fo as Graphic3DFixedRenderPipeline,al as Graphic3DLineBatchRenderer,No as Graphic3DShader_fs,zo as Graphic3DShader_vs,Nt as GraphicConfig,ls as Graphics3DShape,xf as HDRBloomPost,Gs as HDRTexture,ei as HDRTextureCube,ra as HaltonSeq,jc as HoverCameraController,ft as I3DMLoader,lh as I3DMLoaderBase,qs as I3DMParser,sr as IBLEnvMapCreator,rh as IBLEnvMapCreator_cs,Lt as IESProfiles,An as IESProfiles_frag,lf as IKDTreeUserData,Yo as IndicesGPUBuffer,bn as Inline_vert,un as InputSystem,Qc as InstanceDrawComponent,Pn as InstanceUniform,hh as InstancedMesh,pi as Interpolator,zs as InterpolatorEnum,po as IrradianceVolume,Sn as IrradianceVolumeData_frag,Bn as Irradiance_frag,Bl as Joint,ms as JointPose,xl as JumperInterpolator,hf as KDTreeEntity,hi as KDTreeNode,Zh as KDTreeRange,Qh as KDTreeSpace,Yr as KDTreeUUID,Ci as KHR_draco_mesh_compression,Rf as KHR_lights_punctual,Xl as KHR_materials_clearcoat,Wl as KHR_materials_emissive_strength,If as KHR_materials_ior,Lf as KHR_materials_sheen,Of as KHR_materials_specular,Af as KHR_materials_transmission,Yl as KHR_materials_unlit,Uf as KHR_materials_variants,Bf as KHR_materials_volume,zf as KHR_mesh_quantization,Nf as KHR_texture_basisu,Ff as KHR_texture_transform,_d as KelvinUtil,Oe as KeyCode,Tt as KeyEvent,Ss as Keyframe,uh as LDRTextureCube,Dc as LUT_glsl,Wf as LambertMaterial,Pi as Lambert_shader,Ua as LightBase,vi as LightData,Go as LightEntries,Mc as LightStruct,pn as LightStructFrag,Pe as LightType,mn as LightingFunction_frag,Cf as LightmapInfo,Qt as Line,uu as LineClassification,gl as LinearInterpolator,Wr as LitMaterial,kn as LitShader,gr as LoaderBase,bs as LoaderEvent,aa as LoaderManager,Du as MAX_VALUE,Ru as MIN_VALUE,ut as MaterialBase,Va as MaterialComponent,Eo as MaterialDataUniformGPUBuffer,Ef as MaterialInfo,Do as MaterialPass,Ic as MaterialUniform,_a as MathShader,ht as MathUtil,sn as Matrix3,N as Matrix4,Vo as MatrixBindGroup,of as MatrixDO,ya as MemoryDO,Qn as MemoryInfo,uf as MergeRGBACreator,xh as MergeRGBA_cs,$c as MeshColliderShape,Ga as MeshComponent,Pf as MeshInfo,Le as MeshRenderer,Qf as MinMaxAnimationCurves,vu as MinMaxCurve,_u as MinMaxCurveState,Jf as MinMaxPolyCurves,Br as MorePassParser,ru as MorePassShader,Uc as MorphTargetBlender,Ho as MorphTargetData,Bc as MorphTargetFrame,Re as MorphTarget_shader,eu as MouseCode,Sc as MultiBouncePass_cs,Rn as NormalMap_frag,Nl as OAnimationEvent,Fs as OBJParser,ee as Object3D,ui as Object3DEvent,Df as Object3DInfo,Xr as Object3DUtil,Xh as ObjectAnimClip,Jo as OcclusionSystem,qc as OrbitController,lt as Orientation3D,_h as OutLineBlendColor_cs,vh as OutlineCalcOutline_cs,Rc as OutlinePass,_f as OutlinePost,su as OutlinePostData,au as OutlinePostSlot,yh as Outline_cs,yl as OvershootInterpolator,Gn as PBRLItShader,rr as ParserBase,xu as ParticleSystemCurveEvalMode,du as ParticleSystemRandomnessIds,li as PassGenerate,iu as PassShader,Yf as PavementMaterial,Ih as PavementShader,Ui as PhysicMaterial,gn as PhysicMaterialUniform_frag,jh as PickCompute,qh as PickFire,nu as PickResult,Sh as Picker_cs,ts as PingPong,nn as Plane,Ko as PlaneGeometry,cu as PointClassification,Vl as PointLight,ol as PointLightShadowRenderer,jf as PointMaterial,nl as PointShadowCubeCamera,Lh as PointShadowDebug,L as PointerEvent3D,St as Polynomial,jr as PolynomialCurve,Zf as Polynomials,nf as PoolNode,Hc as PositionAudio,vt as PostBase,Zc as PostProcessingComponent,cl as PostRenderer,hl as PreDepthPassRenderer,it as Preprocessor,ff as ProbeGBufferFrame,mt as ProfilerUtil,Oc as PropertyAnimClip,tn as PropertyAnimation,nr as PropertyAnimationEvent,Ut as PropertyHelp,Zn as QuadGlsl_fs,Kn as QuadGlsl_vs,wu as Quad_depth2dArray_frag_wgsl,Yn as Quad_depth2d_frag_wgsl,jn as Quad_depthCube_frag_wgsl,Wn as Quad_frag_wgsl,Xn as Quad_vert_wgsl,j as Quaternion,ri as RADIANS_TO_DEGREES,ah as RGBEErrorCode,_s as RGBEHeader,Fa as RGBEParser,fe as RTDescriptor,Ve as RTFrame,he as RTResourceConfig,be as RTResourceMap,Ii as Rand,Uu as RandomSeed,At as Ray,Pt as RayCastMeshDetail,Vr as Reader,yi as Rect,Zo as RenderContext,Si as RenderLayer,ss as RenderLayerUtil,ai as RenderNode,Jr as RenderShader,Tr as RendererBase,fl as RendererJob,ul as RendererMap,Ue as RendererMask,pt as RendererMaskUtil,Xo as RendererPassState,oe as RendererType,rs as RepeatSE,ph as Res,bi as SN_ArrayConstant,Jt as SN_BinaryOperation,lc as SN_Break,gt as SN_CodeBlock,Vt as SN_Constant,Ta as SN_Continue,_e as SN_Declaration,hc as SN_Discard,oc as SN_DoWhileLoop,q as SN_Expression,vr as SN_ForLoop,ba as SN_Function,wa as SN_FunctionArgs,_r as SN_FunctionCall,wr as SN_IFBranch,Gt as SN_Identifier,Sr as SN_IndexOperation,Ai as SN_Layout,wo as SN_ParenExpression,Ca as SN_Precision,Oi as SN_Return,wi as SN_SelectOperation,zt as SN_Struct,To as SN_TernaryOperation,Nr as SN_UnaryOperation,yr as SN_WhileLoop,bc as SSAO_cs,vf as SSRPost,bh as SSR_BlendColor_cs,yf as SSR_IS_Kernel,wh as SSR_IS_cs,Th as SSR_RayTrace_cs,tf as Scene3D,os as ShaderAttributeInfo,Ps as ShaderBase,ua as ShaderConverter,Mo as ShaderConverterResult,A as ShaderLib,Ze as ShaderReflection,ct as ShaderStage,Po as ShaderState,ns as ShaderUniformInfo,dt as ShaderUtil,On as ShadingInput,kt as ShadowLightsCollect,ll as ShadowMapPassRenderer,Un as ShadowMapping_frag,zl as Skeleton,Aa as SkeletonAnimationClip,Fl as SkeletonAnimationClipState,$t as SkeletonAnimationComponent,zc as SkeletonAnimationCompute,Ri as SkeletonAnimation_shader,Nc as SkeletonBlendComputeArgs,Mi as SkeletonPose,Fc as SkeletonTransformComputeArgs,Ba as SkinnedMeshRenderer,Bo as SkyGBufferPass,Eh as SkyGBuffer_pass,Nh as SkyMaterial,Js as SkyRenderer,Ec as Sky_glsl_fs,Pc as Sky_glsl_vs,dd as SolidColorSky,Ur as SphereColliderShape,Fh as SphereGeometry,Hl as SpotLight,le as StatementNode,Wh as StaticAudio,Se as StorageGPUBuffer,Ge as StringUtil,Bt as Struct,cf as StructStorageGPUBuffer,qo as SubGeometry,Mf as SubMeshInfo,Ch as TAACopyTex_cs,Sf as TAAPost,Mh as TAASharpTex_cs,Ph as TAA_cs,Ke as Texture,Na as TextureCube,Xt as TextureCubeStdCreator,ks as TextureCubeUtils,Tf as TextureInfo,ci as TextureMipmapCompute,nt as TextureMipmapGenerator,wf as TextureScaleInfo,tu as TexturesBindGroup,Kc as ThirdPersonCameraController,kf as TileSet,Vf as TileSetChild,Hf as TileSetChildContent,Xf as TileSetChildContentMetaData,Gf as TileSetRoot,rn as TilesRenderer,de as Time,x as TokenType,ud as TorusGeometry,hn as TouchData,Fe as Transform,As as TranslatorContext,oa as Triangle,ia as UIEvent,qe as UUID,la as UV,pd as Uint16Texture,dh as Uint8ArrayTexture,Zs as UnLit,Zt as UnLitMaterial,xn as UnLitMaterialUniform_frag,_n as UnLit_frag,Mt as UniformGPUBuffer,ae as UniformNode,ze as UniformType,$f as ValueSpread,J as Vector2,p as Vector3,or as Vector3Ex,wd as Vector3Struct,X as Vector4,sf as VertexAttribute,H as VertexAttributeName,mr as VertexAttributeSize,Kh as VertexAttributeStride,vn as VertexAttributes,af as VertexBufferLayout,Jn as VertexFormat,cs as VertexGPUBuffer,yn as VideoUniform_frag,rf as View3D,Pa as ViewQuad,ne as VirtualTexture,bo as WGSLTranslator,De as WebGPUDescriptorCreator,En as WorldMatrixUniform,kr as WrapMode,Vh as WrapTimeMode,df as ZCullingCompute,Dh as ZPassShader_cs,Oo as ZPassShader_fs,Lo as ZPassShader_vs,vd as ZSorterUtil,ho as append,sh as arrayToString,Cu as blendComponent,td as buildCurves,rd as calculateCurveRangesValue,fi as calculateMinMax,go as castPointShadowMap_vert,Y as clamp,ic as clampRepeat,kc as compute_skeleton_blend,Gc as compute_skeleton_transform,qu as cos,ec as cross,pu as cubicPolynomialRoot,mu as cubicPolynomialRootsGeneric,ed as curvesSupportProcedural,Wu as deg2Rad,ke as dot,gu as doubleIntegrateSegment,yd as f32,no as fastInvSqrt,so as floorfToIntPos,tc as generateRandom,rc as generateRandom3,to as getFloatFromInt,_c as getGLTypeFromTypedArray,xc as getGLTypeFromTypedArrayType,Ku as getGlobalRandomSeed,vc as getTypedArray,ps as getTypedArrayTypeFromGLType,Cs as grad1,na as grad2,di as grad3,zr as grad4,Sd as i32,Ts as integrateSegment,Kf as kPI,ar as lerp,Ou as lerpByte,Lu as lerpColor,Iu as lerpVector3,is as magnitude,ha as makeMatrix44,as as matrixMultiply,nc as matrixRotate,sc as matrixRotateY,lo as multiplyMatrices4x4REF,yu as normal_distribution,$u as normalizeFast,eo as normalizeSafe,Ju as normalizedToByte,Qu as normalizedToWord,W as perm,xa as quadraticPolynomialRootsGeneric,Yu as rad2Deg,Gr as random01,Xu as randomBarycentricCoord,Hu as randomPointBetweenEllipsoid,Gu as randomPointBetweenSphere,Fu as randomPointInsideCube,ku as randomPointInsideEllipsoid,Vu as randomPointInsideUnitCircle,io as randomPointInsideUnitSphere,zu as randomQuaternion,Nu as randomQuaternionUniformDistribution,ao as randomSeed,Sa as randomUnitVector,ro as randomUnitVector2,Ae as rangedRandomFloat,Bu as rangedRandomInt,Xs as readMagicBytes,uc as registerMaterial,Is as repeat,ac as rotMatrix,Eu as rotateVectorByQuat,Ds as roundfToIntPos,Es as scale,Ls as shadowCastMap_frag,mo as shadowCastMap_vert,tt as simplex,ju as sin,sd as snoise1,nd as snoise2,od as snoise3,ld as snoise4,Rs as sqrMagnitude,$n as sqrtImpl,Mu as stencilStateFace,Zu as swap,Fr as toHalfFloat,bd as u32,id as uniform_real_distribution,ad as uniform_real_distribution2,E as webGPUContext};