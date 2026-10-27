/* ===================== v0.43: fixes from two playtest reports — the two modes as one world (Thai only) ===================== */
const XF=t=>X(t,t);

/* 1. "survive the day your city falls" is only a goal where a city really falls in your lifetime */
const FALL43=[[16,['cor'],2171,0],[18,['crt'],2169,0],[18,['jud'],1955,4],[18,['rom'],1615,4],
 [24,['bas'],1152,4],[24,['jer'],925,3],[24,['bkh'],804,3],[24,['nis'],803,2],[24,['cor'],788,4],[24,['bag'],766,3],
 [26,['dad'],809,3],[26,['sam'],804,3],[26,['kie'],784,3],[26,['dad'],656,3],
 [28,['tno'],503,3],[28,['bos','wdl'],349,4],[28,['wdl','plt'],186,2]];
{const g=GOALS29.find(z=>z.k==='survive');if(g){const old=g.c;g.c=S=>{if(S.ch===30)return old(S);const y0=S.ya0||S.ya||0;
  return FALL43.some(([ch,rgs,ya,mn])=>ch===S.ch&&rgs.includes(S.rg)&&y0-ya>=mn&&y0-ya<=50)}}}

/* 2. knowledge you learned is worth something different from working it out again */
const MISKNOW43={field:'คุณไม่ต้องลองผิดลองถูก ขึงเชือกเป็นสามสี่ห้าแล้วคำนวณเสร็จก่อนคนอื่นจะเริ่มเถียงกันอีกรอบ จากนั้นคุณสอนลูกหลานทั้งสองบ้านให้ทำเองเป็น',
 navi:'ตัวเลขออกมาในมือคุณเร็วจนกัปตันหันมามองสองครั้ง คุณยังมีเวลาเหลือสอนเด็กฝึกงานบนเรือว่าตารางนี้อ่านอย่างไร',
 sat:'คุณรู้ว่าต้องดูตัวเลขไหนก่อน ทีมจึงตรวจงานเสร็จก่อนกำหนดหนึ่งวัน และคุณได้อธิบายวิธีคิดให้คนรุ่นใหม่ในห้องฟัง',
 apollo:'คุณรู้ว่าความเร็วหลุดพ้นต้องมากกว่าความเร็ววงโคจรราว 1.41 เท่า (รากที่สองของสอง) จึงจับจุดผิดในงานของคนอื่นได้ก่อนยิงจรวด',
 ward:'คุณรู้ทันทีว่าต้องเทียบกับช่วงสองเท่าของส่วนเบี่ยงเบน ตัวเลขของคุณชัดจนหัวหน้าเถียงไม่ได้ และพยาบาลคนอื่นขอให้คุณสอนวิธีจด'};
{const _c=mis38c;mis38c=function(a){const d=_c(a);if(!d)return d;try{const kn=!!bk38().eqM[MIS38[d.m].eq];if(kn)d.n=XF('คุณมีดาวเชี่ยวชาญของสมการนี้แล้ว จะใช้ความรู้ที่เคยเรียนมาเลยก็ได้ หรือจะลงมือเองเพื่อฝึกซ้ำก็ได้')}catch(e){}return d}}
{const _r=mis38run;mis38run=async function(a){const J=S&&S.mis38;await _r(a);try{if(J&&J.how==='know'){const M=MIS38[J.m];fx({kn:2,so:3,b:2});S.teach43=(S.teach43||0)+1;
    let it='';try{const mu=(book29().stuff||{}).mus||{};it=mu['eq.'+M.eq]||''}catch(e){}
    log(XF((MISKNOW43[J.m]||'คุณทำได้เร็วเพราะเคยเรียนมาแล้ว และสอนคนรอบตัวต่อ')+(it?' ในหัวคุณเห็นของชิ้นนั้นชัดเจน '+it.replace(/^\S+\s/,''):'')),XF('ใช้ความรู้ที่เรียนมาสอนคนอื่น'),'big')}
  try{eqBtn37(1)}catch(e){}}catch(e){}}}

/* 3. from a card in the life game, one tap to its lesson in the classroom */
{const _o=eqOpen37;eqOpen37=function(f){_o(f);try{document.querySelectorAll('#eq37 .card.on').forEach(c=>{const k=c.id.replace('eqc_','');const i=EQ37.findIndex(e=>e.k===k);if(i<0||c.querySelector('.st43'))return;
  const b=document.createElement('button');b.className='btn btn-ghost st43';b.textContent='📚 เรียนบทนี้ในห้องเรียน';b.onclick=()=>{const el=document.getElementById('eq37');if(el)el.remove();stLesson42('eq',i)};c.appendChild(b)})}catch(e){}}}
if(typeof window!=='undefined')window.__v43={FALL43,MISKNOW43,survive:S=>(GOALS29.find(z=>z.k==='survive')).c(S),toy:(k,o)=>toyRun38(k,o),eqOpen:f=>eqOpen37(f)};
