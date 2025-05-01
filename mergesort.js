m=(o,t,a=b=0,n=[])=>{for(;a<o.length&&b<t.length;n.push(o[a]<t[b]?o[a++]:t[b++]));return n.concat(o.slice(a),t.slice(b))};s=(o,c=o.length>>1)=>o.length<2?o:m(s(o.slice(0,c)),s(o.slice(c)))
//188 characters
