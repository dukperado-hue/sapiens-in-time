// every place a character can stand must be on walkable ground (node only, no browser)
const fs=require('fs'),path=require('path');const D=path.join(__dirname,'..');let bad=0;const ok=(c,m)=>{if(!c){bad++;console.log('FAIL',m)}};
const P=JSON.parse(fs.readFileSync(path.join(D,'plague/data/prologue.json'),'utf8'));
const inM=(m,x)=>m.some(([a,b])=>x>=a&&x<=b);
ok(inM(P.mask,P.start.x),'prologue start '+P.start.x);for(const s of P.spots)ok(inM(P.mask,s.x),'prologue spot '+s.k+' at '+s.x);
ok(P.mask.every(([a,b])=>a>=0&&b<=P.w),'prologue mask inside world');
const src=fs.readFileSync(path.join(D,'blocks/v46.js'),'utf8');const W=JSON.parse(src.match(/const WALK46=(\[\[[^;]*\]\]);/)[1]);
const spots=[...src.match(/const SVHOME46=\[([\s\S]*?)\];/)[1].matchAll(/seg:(\d+),x:(\d+),k:'(\w+)'/g)];ok(spots.length>=10,'kaffa spots found '+spots.length);
for(const m of spots){const wx=+m[1]*320+ +m[2];ok(inM(W,wx),'kaffa spot '+m[3]+' at world x '+wx)}
const main=JSON.parse(src.match(/const SVMAIN46=(\[[^\]]*\])/)[1]);main.forEach((x,i)=>ok(inM(W,i*320+x),'kaffa map target '+i));
ok(W[W.length-1][1]<=5*320+200,'kaffa harbour stops at the dock edge (x 200 of the harbour)');
const party=JSON.parse(fs.readFileSync(path.join(D,'plague/data/party.json'),'utf8'));ok(party.members.length===7,'party has 7');ok(party.members.filter(m=>m.playable).length===2,'two playable');
for(const sp of P.spots)for(const k in sp.by||{})for(const l of sp.by[k])ok(!l.who||party.members.some(m=>m.k===l.who)||P.npc[l.who],'speaker '+l.who+' in '+sp.k);
console.log(bad?bad+' failures':'plg_walk: all '+(P.spots.length+spots.length+main.length+4)+' checks ok');process.exit(bad?1:0);
