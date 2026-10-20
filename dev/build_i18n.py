import json,sys,os,re,glob
import os
D=os.path.dirname(os.path.abspath(__file__))+'/'
src=sys.argv[1];out=sys.argv[2];pseudo='--pseudo' in sys.argv
items=json.load(open(D+'i18n/items.json'))
st=json.load(open(D+'strings.json'))
LANGS=['zh','ja','ko','de','es']
def load(l):
    m={}
    for f in sorted(glob.glob(D+'i18n/%s_*.tsv'%l)):
        for line in open(f,encoding='utf-8'):
            line=line.rstrip('\n')
            if not line.strip() or '\t' not in line:continue
            k,v=line.split('\t',1)
            m[k.strip()]=v
    return m
data={'EN':st['static'],'TPL':st['tpls'],'I18N':{},'UI':{},'INTRO':{}}
report={}
for l in LANGS:
    m={k:('«'+v+'»' if not k.startswith('U.') else '«'+v+'»') for k,v in items} if pseudo else load(l)
    arr=[m.get('S%04d'%i,'') for i in range(len(st['static']))]+[m.get('T%03d'%i,'') for i in range(len(st['tpls']))]
    # template placeholder sanity
    for i,e in enumerate(st['tpls']):
        v=arr[len(st['static'])+i]
        if v and set(re.findall(r'\{\d+\}',v))!=set(re.findall(r'\{\d+\}',e)):print('PLACEHOLDER MISMATCH',l,'T%03d'%i,e,'=>',v)
    ui={k[2:]:v for k,v in m.items() if k.startswith('U.')}
    en_ui=json.load(open(D+'lang_en.json'))
    for k,e in en_ui.items():
        v=ui.get(k)
        if v and set(re.findall(r'\{\w+\}',v))!=set(re.findall(r'\{\w+\}',e)):print('UI PLACEHOLDER MISMATCH',l,k,e,'=>',v)
    if ui:data['UI'][l]=ui
    intro=[m.get('I.%d'%i,'') for i in range(4)]
    if any(intro):data['INTRO'][l]=intro
    if any(arr):data['I18N'][l]=arr
    report[l]=(sum(1 for x in arr if x),len(arr),len(ui))
print(report)
js='/*I18N_DATA*/const I18N_EN='+json.dumps(data['EN'],ensure_ascii=False)+',I18N_TPL='+json.dumps(data['TPL'],ensure_ascii=False)+',I18N='+json.dumps(data['I18N'],ensure_ascii=False)+',I18N_UI='+json.dumps(data['UI'],ensure_ascii=False)+',I18N_INTRO='+json.dumps(data['INTRO'],ensure_ascii=False)+';/*I18N_END*/'
s=open(src,encoding='utf-8').read()
a=s.index('/*I18N_DATA*/');b=s.index('/*I18N_END*/')+len('/*I18N_END*/')
s=s[:a]+js.replace('</','<\\/')+s[b:]
open(out,'w',encoding='utf-8').write(s)
print('wrote',out,len(s))
