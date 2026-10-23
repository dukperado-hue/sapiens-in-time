# v0.22 "living world": atmosphere engine, visuals, variety, audio, layout. Run against the v0.21 source.
import os
B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'v0.22 LIVING WORLD' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
def blk(name):return open(B+name,encoding='utf-8').read()

# --- instrumentation: full log for the repetition audit
rep("S.log.unshift({a:S.age,x,n,c});if(S.log.length>140)S.log.pop();",
    "S.log.unshift({a:S.age,x,n,c});if(S.log.length>140)S.log.pop();if(TEST){(S.logAll=S.logAll||[]).push(x)}")
rep("lg:opts.logs?S.log.map(e=>e.x)","lgRaw:opts.logs?(S.logAll||[]):null,thm:S.thmY||null,lg:opts.logs?S.log.map(e=>e.x)")
rep("<script>\n","<script>\n/* v0.22 LIVING WORLD */\n",1) if s.count("<script>\n")==1 else None

# --- variety
rep("function log(x,n,c){if(n&&n.en)","function log(x,n,c){if(!gate22(x,c))return false;if(n&&n.en)")
rep("const c=EV.filter((e,i)=>okEv(e,a)&&!(e.once&&S.done['e'+i]!=null)&&!(civ(S.ch)&&!e.f&&S.done['e'+i]!=null&&a-S.done['e'+i]<7));",
    "const c=EV.filter((e,i)=>okEv(e,a)&&!(e.once&&S.done['e'+i]!=null)&&!(civ(S.ch)&&!e.f&&S.done['e'+i]!=null&&a-S.done['e'+i]<7)&&ok22(e,i,a)&&fresh22(e.x));")
rep("const e=weighted(c.map(e=>[e,(e.w||1)*(e.f&&e.f===fam&&a>=5?2.6:1)]));\n      S.done['e'+EV.indexOf(e)]=a;",
    "const e=weighted(c.map(e=>[e,(e.w||1)*(e.f&&e.f===fam&&a>=5?2.6:1)*thw22(e,a)]));\n      S.done['e'+EV.indexOf(e)]=a;cnt22(EV.indexOf(e));setThm22(e.th22||e.x,a);")
rep("    else log(S.ch===20?amb20():","    else amb22(()=>S.ch===20?amb20():")
rep(":pick((S.ch===3&&AMB3[S.rg])||AMB[S.rg]||AMB.lev))\n  }",":pick((S.ch===3&&AMB3[S.rg])||AMB[S.rg]||AMB.lev),a)\n  }")
rep("  log(X(d.t.th+' — '+res.th,d.t.en+' — '+res.en),pn||note,d.lg?'lg':'big');\n}",
    "  log(X(d.t.th+' — '+res.th,d.t.en+' — '+res.en),pn||note,d.lg?'lg':'big');setThm22({en:(d.t.en||'')+' '+((text&&text.en)||'')},S.age);\n}")
rep("window.__sitSim=async(n,opts={})=>{","/*V22BLOCKS*/\nwindow.__sitSim=async(n,opts={})=>{")

exec(open(B+'patch_v22b.py',encoding='utf-8').read())
s=s.replace('/*V22BLOCKS*/',blk('v22v.js')+blk('v22a.js'))
open(F,'w',encoding='utf-8').write(s);print('PATCH_OK')
