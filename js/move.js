"use strict";!function(){var e=["#D61C59","#E7D84B","#1B8798"],i=window.innerWidth,n=(window.innerHeight,{x:i/2,y:i/2}),o=[];function t(t){i=window.innerWidth,window.innerHeight}function s(t){if(0<t.touches.length)for(var i=0;i<t.touches.length;i++)a(t.touches[i].clientX,t.touches[i].clientY,e[Math.floor(Math.random()*e.length)])}function h(t){n.x=t.clientX,n.y=t.clientY,a(n.x,n.y,e[Math.floor(Math.random()*e.length)])}function a(t,i,e){var n=new r;n.init(t,i,e),o.push(n)}function l(){requestAnimationFrame(l);for(var t=0;t<o.length;t++)o[t].update();for(t=o.length-1;0<=t;t--)o[t].lifeSpan<0&&(o[t].die(),o.splice(t,1))}function r(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,i,e){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=e,this.element=document.createElement("span"),this.element.innerHTML=this.character;var n,o=this.element,s=this.initialStyles;for(n in s)o.style[n]=s[n];this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}document.addEventListener("mousemove",h),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),window.addEventListener("resize",t),l()}();