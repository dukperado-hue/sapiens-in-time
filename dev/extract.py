import re,json,sys
import os
D=os.path.dirname(os.path.abspath(__file__))+'/'
src=open(sys.argv[1] if len(sys.argv)>1 else D+'game.js',encoding='utf-8').read()

def scan_string(s,i):
    q=s[i];j=i+1;out=[]
    while j<len(s):
        c=s[j]
        if c=='\\':
            n=s[j+1]
            out.append({'n':'\n','t':'\t'}.get(n,n));j+=2;continue
        if c==q:return ''.join(out),j+1
        out.append(c);j+=1
    raise Exception('unterminated')

def split_args(s,i):
    # s[i] is just after '('; return list of (start,end) arg spans and index after ')'
    depth=0;args=[];st=i;j=i
    while j<len(s):
        c=s[j]
        if c in '\'"`':
            _,j=scan_string(s,j);continue
        if c in '([{':depth+=1
        elif c in ')]}':
            if depth==0:
                args.append((st,j));return args,j+1
            depth-=1
        elif c==',' and depth==0:
            args.append((st,j));st=j+1
        j+=1
    raise Exception('no close')

def parts(expr):
    # split top-level '+' ; return list of ('lit',text) or ('expr',code)
    out=[];depth=0;st=0;j=0;e=expr
    while j<len(e):
        c=e[j]
        if c in '\'"`':
            _,j=scan_string(e,j);continue
        if c in '([{':depth+=1
        elif c in ')]}':depth-=1
        elif c=='+' and depth==0:
            out.append(e[st:j]);st=j+1
        elif c=='?' and depth==0:
            return None  # top-level ternary
        j+=1
    out.append(e[st:])
    res=[]
    for p in out:
        t=p.strip()
        if len(t)>=2 and t[0] in '\'"' and t[-1]==t[0]:
            try:
                v,k=scan_string(t,0)
                if k==len(t):res.append(('lit',v));continue
            except Exception:pass
        res.append(('expr',t))
    return res

def lits_in(e):
    out=[];j=0
    while j<len(e):
        if e[j] in '\'"':
            v,j=scan_string(e,j);out.append(v);continue
        j+=1
    return out

static=[];tpls=[]
def add_static(t):
    t=t.strip() if t.strip()==t else t
    if t and re.search('[A-Za-z]',t) and t not in static:static.append(t)
for m in re.finditer(r'(?<![A-Za-z0-9_$.])(P?X)\(',src):
    kind=m.group(1)
    try:args,_=split_args(src,m.end())
    except Exception:continue
    idx=1 if kind=='X' else 2
    if len(args)<=idx:continue
    a,b=args[idx];expr=src[a:b].strip()
    if kind=='X' and len(args)!=2:continue
    ps=parts(expr)
    if ps is None:
        for l in lits_in(expr):add_static(l)
        continue
    tpl='';k=0;has_lit=False
    for typ,v in ps:
        if typ=='lit':
            if kind=='PX':
                segs=v.split('{p}')
                for i2,sg in enumerate(segs):
                    if i2>0:tpl+='{%d}'%k;k+=1
                    tpl+=sg
                if sg or len(segs)>1:has_lit=True
            else:tpl+=v
            if v.replace('{p}',''):has_lit=True
        else:
            tpl+='{%d}'%k;k+=1
            for l in lits_in(v):add_static(l)
    if not has_lit:continue
    if k==0:add_static(tpl)
    else:
        if re.sub(r'\{\d+\}','',tpl).strip() and tpl not in tpls:tpls.append(tpl)
# UI LANG.en
m=re.search(r"\nen:\{(.*?)\n\},?\n",src,re.S)
print('static',len(static),'templates',len(tpls))
print('en chars static',sum(len(x) for x in static),'tpl',sum(len(x) for x in tpls))
json.dump({'static':static,'tpls':tpls},open(sys.argv[2] if len(sys.argv)>2 else D+'strings_fresh.json','w',encoding='utf-8'),ensure_ascii=False,indent=0)
