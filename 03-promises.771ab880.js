function e(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(o){o.preventDefault();const{delay:t,amount:n,step:l}=o.target.elements;let i=Number(t.value);const s=Number(l.value);for(let o=1;o<=n.value;o+=1)e(o,i).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),i+=s}));
//# sourceMappingURL=03-promises.771ab880.js.map
