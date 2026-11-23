(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please fill in your name, a valid email and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();

(function(){
function $(i){return document.getElementById(i);}
var PAIR={tomato:{n:"Tomato",y:["Basil","Garlic","Olive oil","Mozzarella","Oregano","Anchovy"],m:["Cumin","Soy sauce","Chilli","Lime","Coriander leaf"],w:"Salt tomatoes ten minutes before you dress them; the juice that runs out is the dressing.",c:["Caprese","Shakshuka base","Tomato and bread salad"]},
lemon:{n:"Lemon",y:["Olive oil","Parsley","Garlic","Butter","Black pepper","Thyme"],m:["Chilli","Honey","Fennel","Yoghurt","Dill"],w:"Zest first, juice second. The zest carries the perfume, the juice only carries acid.",c:["Lemon and herb dressing","Roast chicken with lemon","Lemon butter sauce"]},
garlic:{n:"Garlic",y:["Olive oil","Parsley","Chilli","Rosemary","Tomato","Butter"],m:["Ginger","Soy sauce","Lemon","Yoghurt","Paprika"],w:"Sliced garlic goes sweet and nutty; crushed garlic goes sharp and hot. Choose on purpose.",c:["Garlic and chilli pasta","Garlic butter prawns","Slow-roast garlic"]},
ginger:{n:"Ginger",y:["Spring onion","Soy sauce","Sesame","Chilli","Lime","Honey"],m:["Carrot","Coconut","Coriander leaf","Garlic","Orange"],w:"Grate ginger on the fine side of a box grater and use the juice as well as the pulp.",c:["Ginger and spring onion noodles","Carrot and ginger soup","Ginger dressing"]},
mushroom:{n:"Mushroom",y:["Thyme","Butter","Garlic","Parsley","Soy sauce","Parmesan"],m:["Miso","Cream","Lemon","Chestnut","Black pepper"],w:"Do not crowd the pan and do not salt them early, or they steam instead of browning.",c:["Mushrooms on toast","Mushroom risotto","Miso mushroom noodles"]},
chickpea:{n:"Chickpea",y:["Cumin","Lemon","Tahini","Garlic","Parsley","Olive oil"],m:["Harissa","Yoghurt","Spinach","Tomato","Coriander seed"],w:"A pinch of bicarbonate of soda in the cooking water makes chickpeas soft enough to blend smooth.",c:["Hummus","Chickpea and spinach stew","Crisp roasted chickpeas"]},
rice:{n:"Rice",y:["Butter","Spring onion","Sesame","Soy sauce","Peas","Egg"],m:["Lime","Coriander leaf","Cumin","Coconut","Chilli"],w:"Rinse until the water runs clear, then rest it covered off the heat for ten minutes.",c:["Egg fried rice","Coconut rice","Herbed rice salad"]},
yoghurt:{n:"Yoghurt",y:["Cucumber","Mint","Garlic","Lemon","Dill","Olive oil"],m:["Cumin","Honey","Harissa","Coriander leaf","Lime"],w:"Stir yoghurt smooth and bring it to room temperature before it meets anything hot, or it splits.",c:["Tzatziki","Yoghurt marinade","Herbed yoghurt sauce"]}};
function pOut(){var d=PAIR[$('pIng').value];
 $('pOut').innerHTML='<h4>'+d.n+'</h4><p><b>Classic partners</b></p><div class="tagr">'+d.y.map(function(x){return '<b>'+x+'</b>';}).join('')+'</div><p><b>Worth trying</b></p><div class="tagr">'+d.m.map(function(x){return '<b class="alt">'+x+'</b>';}).join('')+'</div><p><b>Technique:</b> '+d.w+'</p><p style="margin:0"><b>Dishes to start from:</b> '+d.c.join(' &middot; ')+'</p>';}
if($('pIng')){$('pIng').addEventListener('change',pOut);pOut();}
var SWAP={egg:[["1 egg (binding)","3 tbsp aquafaba, whisked","Works in burgers, fritters and meatballs."],["1 egg (binding)","1 tbsp ground flaxseed + 3 tbsp water, rested 10 min","Best in bakes, not in custards."],["1 egg (richness)","60 ml plain yoghurt","Keeps cakes moist; do not use for meringue."]],
butter:[["100 g butter (baking)","80 ml mild olive oil","Cakes stay moist for longer but lose some crumb."],["100 g butter (frying)","1 tbsp oil + a knob of butter","You get the flavour without the burning."],["100 g butter (pastry)","100 g cold solid coconut oil","Keep everything very cold or the pastry will not layer."]],
milk:[["250 ml whole milk","250 ml oat milk","Closest match for sauces and baking."],["250 ml whole milk","200 ml water + 50 ml single cream","Works when you are short in the middle of a recipe."],["250 ml buttermilk","240 ml milk + 1 tbsp lemon juice, rested 10 min","Gives the same lift with bicarbonate of soda."]],
cream:[["150 ml double cream (sauce)","150 ml evaporated milk","Thinner, but it will not split."],["150 ml double cream (sauce)","100 g full-fat cream cheese + 50 ml milk","Richer and tangier; add off the heat."],["150 ml cream (soup)","150 g blended white beans","Thickens without dairy and adds body."]],
stock:[["500 ml chicken stock","500 ml water + 1 tsp miso + a bay leaf","Savoury depth from the pantry."],["500 ml vegetable stock","500 ml mushroom soaking water","Strain it first; it is stronger than it looks."],["500 ml stock","500 ml water + parmesan rind, simmered 15 min","Keep rinds in the freezer for exactly this."]],
breadcrumb:[["80 g breadcrumbs","80 g rolled oats, blitzed","Softer crust; good in meatballs."],["80 g breadcrumbs (coating)","80 g crushed cornflakes","Crisper and holds longer after frying."],["80 g breadcrumbs (binding)","2 tbsp ground almonds","Richer; watch the browning."]],
sugar:[["200 g caster sugar","200 g light brown sugar","Softer, chewier bake with a caramel note."],["200 g sugar (liquid use)","160 ml honey, reduce liquid by 40 ml","Browns faster, so drop the oven 10&deg;C."],["200 g sugar (crunch)","200 g demerara","Keeps its crystals on top of a bake."]],
soy:[["2 tbsp soy sauce","2 tbsp tamari","Gluten-free and slightly rounder."],["2 tbsp soy sauce","1 tbsp fish sauce + 1 tbsp water","Saltier and more savoury; use less."],["2 tbsp soy sauce","1 tbsp miso + 1 tbsp water","Thicker, so loosen the sauce a little."]]};
function sOut(){var k=$('swIng').value,rows=SWAP[k];
 $('swOut').innerHTML='<h4>Swaps that work</h4>'+rows.map(function(r){return '<p style="margin:0 0 .8em"><b>'+r[0]+'</b> &rarr; '+r[1]+'<br><span style="color:#6A6158">'+r[2]+'</span></p>';}).join('')+'<p style="margin:0;font-size:.9rem;color:#6A6158">Swaps change texture as well as flavour. Change one thing at a time so you know what did it.</p>';}
if($('swIng')){$('swIng').addEventListener('change',sOut);sOut();}
function pl(n){return n+' '+(n===1?'person':'people');}
function scOut(){var base=+$('scBase').value,want=+$('scWant').value,app=+$('scApp').value,typ=$('scType').value;
 if(!(base>0)||!(want>0)){$('scOut').innerHTML='<h4>Enter both numbers</h4><p>Tell us what the recipe serves and how many you are feeding.</p>';return;}
 var f=(want*app)/base;
 var tips=[];
 tips.push('Multiply every ingredient by <b>'+f.toFixed(2)+'</b>.');
 if(f>2)tips.push('Above double, cook in two pans rather than one. A crowded pan steams instead of browning.');
 if(f<1)tips.push('Scaling down dries food out faster, so check it a few minutes early.');
 if(typ==='bake')tips.push('Baking is chemistry: keep the tin depth the same and change its area, not its height. Keep the oven temperature the same and adjust the time.');
 if(typ==='stew')tips.push('Salt and chilli do not scale in a straight line. Add about three quarters now and correct at the end.');
 if(typ==='rice')tips.push('Liquid scales less than you think in a covered pot. Use about 90% of the scaled liquid and add more if needed.');
 if(typ==='fry')tips.push('Keep the oil depth the same and fry in batches; the time per batch does not change.');
 var ex=[['Flour 250 g',250],['Liquid 300 ml',300],['Salt 1 tsp',1]];
 $('scOut').innerHTML='<h4>&times; '+f.toFixed(2)+' &nbsp;&middot;&nbsp; feeds '+pl(want)+'</h4><p style="margin:0 0 .5em"><b>Worked examples</b></p><ul>'+ex.map(function(e){var v=e[1]*f;return '<li>'+e[0]+' &rarr; '+(v<10?v.toFixed(2):Math.round(v))+(e[0].indexOf('tsp')>0?' tsp':(e[0].indexOf('ml')>0?' ml':' g'))+'</li>';}).join('')+'</ul><ul style="margin-top:.6em"><li>'+tips.join('</li><li>')+'</li></ul>';}
['scBase','scWant','scApp','scType'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',scOut);});
if($('scBase'))scOut();
})();
