/* ================= v0.22 VARIETY: themes, a no-repeat gate for routine lines, quiet moments ================= */
// Every line is sorted into one theme by its English text. The year's main line feeds a balancer, so the same kind of
// moment does not come up year after year.
const THM22=[
 ['health',/\b(sick|fever|ill\b|illness|wound|injur|heal|medicine|cough|plague|pain|broken|tooth|limp|mosquito)/i],
 ['climate',/\b(rain|monsoon|flood|drought|storm|snow|cold\b|wind\b|earthquake|dust\b|heat\b|winter|dry spell|tide|volcan|thunder|lightning)/i],
 ['family',/\b(child|children|mother|father|grand(mother|father)|baby|wife|husband|sister|brother|family|marr|wedding|\bsons?\b|daughter|parents|household)/i],
 ['belief',/\b(gods?\b|goddess|spirit|ancestor|temple|priest|ritual|offering|pray|sacred|shrine|monk|nun\b|funeral|bur(y|ied)|tomb|songs?\b|sing|danc|paint|carv|story|myth|omen|festival)/i],
 ['conflict',/\b(war\b|raid|army|soldier|enemy|fight|quarrel|argu|stranger|neighbou?r|trade|merchant|market|sell|silver|debt|tax|other group)/i],
 ['learning',/\b(learn|teach|school|writ(e|ing)|read\b|tablet|scribe|count|stars?\b|watch|notice|lesson|\bword)/i],
 ['food',/\b(hunt|fish|harvest|food|eat|meal|bread|rice|millet|grain|fruit|tuber|cook|supper|feast|hung(er|ry)|famine|stew|milk|honey|beer|catch|taro|maize|olive|weed)/i],
 ['shelter',/\b(house|hut\b|roof|wall|tools?\b|axe|knife|kiln|pots?\b|loom|wheel|build|brick|boat|canoe|needle|shelter|windbreak|beam)/i]];
const thm22=x=>{const en=(x&&x.en)||'';for(const[k,rx]of THM22)if(rx.test(en))return k;return 'daily'};
const key22=x=>((x&&x.en)||'').replace(/\d+([.,]\d+)?/g,'#').trim();
// routine lines (no class, or 'it') may come back once, after 20 years; weather lines after 4 years, up to three times
const GATE22={'':[20,2],it:[20,2],wx:[4,3]};
function gate22(x,c){if(!S||!x||!x.en)return true;const g=GATE22[c||'']||((c==='sad'||c==='cl')&&thm22(x)==='climate'?GATE22.wx:null);if(!g)return true;const k=key22(x),m=S.seen22=S.seen22||{},e=m[k];
  if(e&&(S.age-e.a<g[0]||e.n>=g[1])){S.sup22=(S.sup22||0)+1;return false}m[k]={a:S.age,n:(e?e.n:0)+1};return true}
// strict: never seen this life (ambient lines, quiet moments); otherwise the same rule as the gate
const fresh22=(x,strict)=>{if(!S||!x||!x.en)return true;const e=(S.seen22||{})[key22(x)];return !e||(!strict&&S.age-e.a>=20&&e.n<2)};
function setThm22(x,a){const T=S.thmY=S.thmY||[];if(T[a]==null)T[a]=typeof x==='string'?x:thm22(x)}
// random events: no repeat inside 20 years, no more than twice a life
function ok22(e,i,a){const d=S.done['e'+i];if(d==null)return true;if(e.rep22===0)return false;if(a-d<20)return false;return ((S.evC22||{})['e'+i]||0)<2}
function cnt22(i){const C=S.evC22=S.evC22||{};C['e'+i]=(C['e'+i]||0)+1}
// theme balancer: last year's theme ×0.35, a theme seen in the last three years ×0.65, a theme unseen for eight years ×1.35
function thw22(e,a){const k=e.th22||(e.th22=thm22(e.x)),T=S.thmY||[];if(T[a-1]===k)return .35;
  for(let j=2;j<=3;j++)if(T[a-j]===k)return .65;for(let j=1;j<=8;j++)if(T[a-j]===k)return 1;return 1.35}
// the world around the player, in rough types
function bio22(){const o=sceneOpts(),P=Object.assign({},SC[o.sc]||{},VAR[o.vr]||{});const cold=o.snowGround||o.snowFall||P.cold||(S.R&&S.R.cold>=2);
  if(cold)return 'cold';if(P.sea||o.pac||o.sea10||o.sea16)return 'coast';if(P.dense||P.vines)return 'forest';if(P.riv||P.lake||o.egy||o.gan20||o.ind8)return 'river';
  if(P.dunes||P.dry)return 'dry';return 'open'}
function era22(){const ch=S.ch;if(ch===1||ch===2)return 'fg';if(ch===3)return S.settled?'farm':'fg';if(ch===5)return 'farm';
  const rn=((REGIONS[S.rg]||{}).n||{}).en||'';return (S.rg==='vil'||/village|hamlet|farm/i.test(rn))?'farm':'civ'}
const QM22=[
 // anywhere, any age of history
 {th:'learning',a:6,x:X('คืนที่ฟ้าเต็มไปด้วยดาว ชายแก่คนหนึ่งชี้บอกชื่อดาวดวงที่เขารู้จัก','A sky full of stars, and an old man naming the ones he knows.')},
 {th:'learning',a:4,x:X('คุณนั่งดูมดช่วยกันลากด้วงตายตัวหนึ่งกลับรัง ทุกตัวดึงพร้อมกัน','You watch ants drag a dead beetle home, every one of them pulling at once.')},
 {th:'family',a:18,x:X('เด็กเล็กคนหนึ่งหลับไปบนตักคุณ คุณนั่งนิ่งไม่ขยับ กลัวเด็กตื่น','A small child falls asleep in your lap, and you sit very still so as not to wake them.')},
 {th:'belief',a:5,x:X('ใครบางคนฮัมเพลงที่คุณได้ยินมาตั้งแต่ยังเล็ก','Someone hums a song you have known since you were small.')},
 {th:'daily',a:8,x:X('คุณตื่นก่อนทุกคน แล้วนั่งดูแสงค่อยๆ กลับมา','You wake before everyone else and watch the light come back.')},
 {th:'conflict',a:10,x:X('เพื่อนบ้านสองคนทะเลาะกันตั้งแต่เช้า พอตกเย็นก็หัวเราะด้วยกันแล้ว','Two neighbours quarrel in the morning and are laughing together by evening.')},
 {th:'family',a:3,mx:12,x:X('มือแก่ๆ ที่แตกเพราะงานหนัก ค่อยๆ ถักผมให้คุณ','Old hands, cracked from work, braid your hair.')},
 {th:'food',a:4,x:X('ผลไม้ลูกแรกของฤดู ถูกแบ่งให้ทุกคนได้กินคนละคำ','The first fruit of the season, shared so that everyone gets one bite.')},
 {th:'health',a:16,x:X('ฟันซี่หนึ่งปวดอยู่หลายวัน จนมีคนช่วยถอนออกให้','A bad tooth aches for days, until someone pulls it out.')},
 {th:'learning',a:9,x:X('คุณสอนเด็กที่เล็กกว่าผูกเงื่อนที่ไม่หลุด','You teach a younger child to tie a knot that will not slip.')},
 {th:'learning',a:6,x:X('หญิงชราเล่าว่าสมัยเธอยังสาว อะไรๆ เป็นอย่างไร ไม่มีใครรู้ว่าจริงแค่ไหน','An old woman tells how things were when she was young. Nobody knows how much is true.')},
 {th:'daily',a:5,x:X('จู่ๆ นกทุกตัวก็หยุดร้องพร้อมกัน เงียบไปครู่หนึ่ง แล้วก็เริ่มร้องใหม่','Suddenly every bird stops singing at once. A moment of silence, then they start again.')},
 {th:'family',a:20,x:X('คุณอุ้มญาติผู้ใหญ่ที่เดินไม่ไหวแล้ว ออกมานั่งรับแดด','You carry an old relative who can no longer walk out to sit in the sun.')},
 {th:'conflict',a:8,x:X('คนแปลกหน้าเดินผ่านมา แล้วทิ้งคำใหม่คำหนึ่งไว้ให้คนที่นี่พูดกัน','A stranger passes through and leaves behind a new word that people here start to use.')},
 {th:'health',a:6,x:X('หินคมบาดเท้า กว่าจะเดินได้ไม่กะเผลกก็หลายสัปดาห์','A sharp stone cuts your foot. It is weeks before you walk without a limp.')},
 {th:'daily',a:3,x:X('ควันจากไฟตอนเย็นลอยต่ำปกคลุมทุกคน','Smoke from the evening fires hangs low over everyone.')},
 {th:'learning',a:25,x:X('มือของคุณรู้งานแล้ว ไม่ต้องคิดอีกต่อไปว่าต้องทำอย่างไร','Your hands know the work now. You no longer have to think about it.')},
 {th:'belief',a:22,x:X('คุณนั่งเฝ้าคนที่กำลังจะตาย จับมือไว้จนถึงเช้า','You sit with someone who is dying and hold their hand until morning.')},
 {th:'family',a:14,x:X('เด็กๆ เล่นเป็นผู้ใหญ่ เลียนท่าทางพ่อแม่ทุกท่า','Children play at being grown-ups, copying every gesture of their parents.')},
 {th:'climate',a:6,x:X('แล้งติดกันหลายสัปดาห์ ทุกคนเงยหน้ามองฟ้าอยู่เรื่อย','A long dry spell. Everyone keeps looking at the sky.')},
 {th:'daily',a:45,x:X('ตอนนี้คนที่รุ่นเดียวกับคุณเหลืออยู่ไม่กี่คนแล้ว','Only a few people your age are still alive now.')},
 {th:'family',a:40,need:S=>S.kids.some(k=>!k.dead&&S.age-k.born>=20),x:X('หลานคนหนึ่งเดินท่าเดียวกับคุณเป๊ะ ทุกคนหัวเราะ','One of the grandchildren walks exactly like you, and everyone laughs.')},
 // by surroundings
 {th:'climate',bio:['river','forest'],a:3,x:X('กบร้องจากพื้นที่ชื้นแฉะทั้งคืน','Frogs call all night from the wet ground.')},
 {th:'daily',bio:['river'],a:5,x:X('เที่ยงวันคุณลุยลงแม่น้ำ ความร้อนหายไปชั่วครู่','At noon you wade into the river, and for a moment the heat is gone.')},
 {th:'climate',bio:['river'],a:6,x:X('แม่น้ำสูงกว่าเมื่อวาน สีน้ำตาลและไหลเชี่ยว','The river is higher than yesterday, brown and fast.')},
 {th:'health',bio:['river','forest'],a:4,x:X('ยุงหึ่งอยู่ทั้งเย็น ทุกคนนั่งเบียดกันใกล้ควันไฟ','Mosquitoes whine all evening, and everyone sits close to the smoke.')},
 {th:'food',bio:['coast'],a:6,x:X('คลื่นลูกใหญ่ซัดเอาปลาที่ใครคนหนึ่งจับได้ไปหมด ทุกคนหัวเราะ ยกเว้นเจ้าของ','A big wave takes someone’s whole catch. Everyone laughs except them.')},
 {th:'belief',bio:['coast'],a:4,x:X('คุณเจอเปลือกหอยที่วงก้นหอยสวยไม่มีที่ติ แล้วเก็บไว้อีกหลายปี','You find a shell with a perfect spiral and keep it for years.')},
 {th:'climate',bio:['coast'],a:6,x:X('น้ำทะเลลดลงไกลกว่าที่ใครจำได้','The tide goes out further than anyone can remember.')},
 {th:'climate',bio:['forest'],a:4,x:X('ฝนหยุดไปนานแล้ว แต่น้ำยังหยดจากใบไม้ไม่หยุด','The rain stopped long ago, but water still drips from the leaves.')},
 {th:'conflict',bio:['forest'],a:6,x:X('มีอะไรตัวใหญ่ขยับอยู่ในพุ่มไม้ ทุกคนเงียบกริบจนมันผ่านไป','Something large moves in the trees, and everyone goes silent until it has passed.')},
 {th:'climate',bio:['cold'],a:3,x:X('ลมหายใจกลายเป็นไอในอากาศตอนเช้า ทุกคนนอนเบียดกันให้อุ่น','Your breath smokes in the morning air. Everyone sleeps pressed together for warmth.')},
 {th:'learning',bio:['cold'],a:6,x:X('หิมะตกใหม่ มีรอยเท้าสัตว์ที่ไม่มีใครเห็นตัว','Fresh snow, and the tracks of an animal no one saw.')},
 {th:'climate',bio:['dry'],a:4,x:X('ฝุ่นเข้าไปทุกที่ ทั้งในอาหาร ในน้ำ และในตา','Dust gets into everything: the food, the water, your eyes.')},
 {th:'daily',bio:['dry','open'],a:4,x:X('ตอนเที่ยงไม่มีอะไรขยับ แม้แต่นกก็เงียบ','At midday nothing moves. Even the birds go quiet.')},
 {th:'climate',bio:['open'],a:4,x:X('ลมพัดผ่านทุ่งหญ้าเป็นระลอกเหมือนผิวน้ำ','Wind runs across the grass in waves, like water.')},
 {th:'conflict',bio:['open','dry','cold'],a:6,x:X('ไกลออกไปมีควันลอยเป็นสาย ไฟของคนอีกกลุ่ม','Far off, a thin column of smoke: someone else’s fire.')},
 // farming households
 {th:'food',era:['farm'],a:8,x:X('ถอนหญ้า ถอนหญ้า แล้วก็ถอนหญ้าอีก ปวดหลังไปหลายวัน','Weeding, weeding and more weeding. Your back aches for days.')},
 {th:'food',era:['farm','civ'],a:6,x:X('หนูแอบเข้าไปกินของที่เก็บไว้ เสียไปเกือบหนึ่งตะกร้า','Mice get into the stored food. Almost a basket’s worth is lost.')},
 {th:'climate',era:['farm','civ'],a:4,x:X('ฝนตกกระหน่ำหลังคาทั้งคืน แต่คุณกลับหลับสบายที่สุดในรอบเดือน','Rain drums on the roof all night, and you sleep better than you have all month.')},
 {th:'conflict',era:['farm'],a:12,x:X('คุณไปช่วยเพื่อนบ้านเก็บเกี่ยว แล้วพวกเขาก็จะมาช่วยคุณ','You help the neighbours bring in their harvest. They will help you with yours.')},
 {th:'shelter',era:['farm','civ'],a:14,x:X('คานหลังคาร้าว ต้องเปลี่ยนให้เสร็จก่อนฝนมา','A roof beam cracks and has to be replaced before the rains.')},
 // towns
 {th:'daily',era:['civ'],a:5,x:X('เสียงของเมืองไม่เคยเงียบสนิท แม้แต่ตอนกลางคืน','The noise of the town never quite stops, even at night.')},
 {th:'conflict',era:['civ'],a:10,x:X('คุณเห็นคนรวยมากคนหนึ่งเดินผ่าน แล้วนั่งคิดเรื่องนั้นอยู่พักใหญ่','You see someone very rich go by, and think about it for a long while.')},
 {th:'conflict',era:['civ'],a:8,x:X('คนมามุงดูพ่อค้าสองคนเถียงกันกลางถนน','A crowd gathers to watch two traders argue in the street.')},
 {th:'daily',era:['civ'],a:8,x:X('ข่าวลือแพร่ไปทั่วถนนตั้งแต่เช้า พอตกเย็นก็ไม่มีใครพูดถึงแล้ว','A rumour runs through the streets in the morning and is forgotten by evening.')},
 {th:'daily',era:['civ'],a:25,x:X('ขอทานคนเดิมนั่งที่มุมเดิมทุกวันอยู่หลายปี แล้ววันหนึ่งก็หายไป','The same beggar sits at the same corner every day for years. Then one day they are gone.')},
 {th:'family',era:['civ'],a:4,mx:13,x:X('เด็กๆ วิ่งไล่กันในตรอก ส่งเสียงกรี๊ดกร๊าด','Children chase each other through the alleys, shrieking.')},
 // foragers
 {th:'food',era:['fg'],a:6,x:X('ทั้งกลุ่มหยุดยืนดูฝูงสัตว์เดินผ่านไปไกลๆ แล้วนับกัน','The band stops to watch a herd pass far away, counting.')},
 {th:'learning',era:['fg'],a:5,x:X('คุณเรียนรู้ว่าต้นไหนกินแล้วแสบปาก ต้นไหนกินได้','You learn which plants burn your mouth and which are safe.')},
 {th:'climate',era:['fg'],a:4,x:X('คืนนั้นไม่มีไฟ ฟืนเปียกหมด ทุกคนนั่งตัวสั่น','A night without fire. The wood is all wet, and everyone shivers.')},
 {th:'conflict',era:['fg'],a:12,x:X('ทั้งกลุ่มเถียงกันว่าพรุ่งนี้จะเดินไปทางไหน','The band argues about which way to walk tomorrow.')}];
function quiet22(a){const bio=bio22(),era=era22(),okE=q=>!q.era||q.era.includes(era)||(era==='civ'&&q.era.includes('farm')&&S.field);
  const c=QM22.filter(q=>a>=q.a&&(!q.mx||a<=q.mx)&&(!q.need||q.need(S))&&(!q.bio||q.bio.includes(bio))&&okE(q)&&fresh22(q.x,1));if(!c.length)return false;
  const q=weighted(c.map(q=>[q,thw22({th22:q.th},a)*(q.bio?1.6:1)]));log(q.x);setThm22(q.th,a);return true}
// ambient lines: try for one not seen lately, sometimes a quiet moment instead
function amb22(gen,a){if(a>=3&&rnd()<.3&&quiet22(a))return;for(let i=0;i<8;i++){const x=gen();if(x&&fresh22(x,1)){log(x);setThm22(x,a);return}}if(a>=3)quiet22(a)}
