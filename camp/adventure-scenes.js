window.CVC_SCENES=(function createScenes(definitions,themeId){
 const cells=[[12,27,18,14],[37,27,82,14],[63,27,18,38],[88,27,82,38],[12,77,18,62],[37,77,82,62],[63,77,18,86],[88,77,82,86]];
 const make=()=>definitions.map(d=>({...d,words:d.words.map((id,i)=>({id,x:cells[i][0],y:cells[i][1],px:cells[i][2],py:cells[i][3]}))}));
 function drawing(portrait=false){
  const w=portrait?600:1000,h=portrait?1000:600;
  let body='';
  if(themeId==='scuba'){
   body=Array.from({length:3},(_,i)=>`<path d="M${w*.08},${h*(.35+i*.13)}Q${w*.3},${h*(.27+i*.13)} ${w*.5},${h*(.35+i*.13)}T${w*.92},${h*(.35+i*.13)}"/>`).join('')+`<circle cx="${w*.43}" cy="${h*.22}" r="${w*.018}"/><circle cx="${w*.57}" cy="${h*.16}" r="${w*.011}"/>`;
  }else if(themeId==='bike'){
   body=`<path d="M${w*.08},${h*.78}C${w*.3},${h*.85} ${w*.25},${h*.23} ${w*.49},${h*.29}S${w*.68},${h*.8} ${w*.92},${h*.72}" stroke-width="${w*.10}" stroke="#e5e9e2"/><path d="M${w*.08},${h*.78}C${w*.3},${h*.85} ${w*.25},${h*.23} ${w*.49},${h*.29}S${w*.68},${h*.8} ${w*.92},${h*.72}" stroke-dasharray="18 18"/>`;
  }else{
   body=`<path d="M${w*.08},${h*.77}C${w*.38},${h*.9} ${w*.21},${h*.16} ${w*.47},${h*.26}S${w*.68},${h*.84} ${w*.91},${h*.67}" stroke-width="${w*.06}" stroke="#ead6a4"/><path d="M${w*.08},${h*.77}C${w*.38},${h*.9} ${w*.21},${h*.16} ${w*.47},${h*.26}S${w*.68},${h*.84} ${w*.91},${h*.67}" stroke-dasharray="8 15"/>`;
  }
  return`<svg class="scene-lines ${portrait?'scene-portrait':'scene-landscape'}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="#ffffff" stroke-width="4" opacity=".6" stroke-linecap="round">${body}</g></svg>`;
 }
 function render(d,{asset,picture,pad,weather}){
  const rainy=d.id==='scene1'&&weather==='rain',background=rainy?'rain':d.id;
  return`<div class="adventure-scene scene-${d.id} ${rainy?'scene-rain':''}" style="--scene-art:url('${asset('assets/theme/'+background+'-v1.webp')}')">${drawing()}${drawing(true)}${d.words.map((word,i)=>`<article class="scene-feature" style="--x:${word.x}%;--y:${word.y}%;--px:${word.px}%;--py:${word.py}%"><span class="scene-number">${i+1}</span><img class="scene-feature-art" src="${picture(word.id)}" alt="Picture ${i+1}. Drag its word to the pad.">${pad(word.id)}</article>`).join('')}</div>`;
 }
 return{make,render};
})([{"id":"scene1","title":"Campsite","words":["hut","bag","cap","map","net","pan","mug","log"],"sceneSubject":"A cheerful summer campsite beside a forest lake, cosy wooden hut, green canvas tents, simple picnic space and clear walking paths, diverse campers and an adult counsellor in the middle distance; no lettering."},{"id":"scene2","title":"Lakeside","words":["rod","net","frog","log","bug","twig","cup","mat"],"sceneSubject":"A peaceful shallow lakeside study area at summer camp, reed beds, small wooden jetty, smooth stones and a canoe on shore, campers with an adult guide looking at pond life; no written signs."},{"id":"scene3","title":"Cabin","words":["bed","peg","pot","jug","jam","bin","dog","zip"],"sceneSubject":"A bright welcoming camp cabin with simple wooden beds, neat storage hooks, a camp kitchenette and a porch opening toward pine trees, a quiet friendly camp dog by the doorway; no words or labels."}],"camp");
