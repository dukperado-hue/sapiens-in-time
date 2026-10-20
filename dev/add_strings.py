"""After editing game.src.html, find new English strings and give them stable ids.
Usage: ./build.sh && python3 add_strings.py
- Appends new static strings / templates to strings.json and i18n/items.json (old ids never move).
- Writes i18n/new_src.txt (id<TAB>English) to translate into i18n/<lang>_<name>.tsv for zh ja ko de es.
New UI keys in LANG.th/LANG.en need U.<key> lines in a tsv too (run: node test/dumplang2.cjs from dev/ to refresh lang_en.json)."""
import json,subprocess,os
D=os.path.dirname(os.path.abspath(__file__))+'/'
subprocess.run(['python3',D+'extract.py',D+'game.js',D+'strings_fresh.json'],check=True,stdout=subprocess.DEVNULL)
cur=json.load(open(D+'strings.json'));new=json.load(open(D+'strings_fresh.json'))
it=json.load(open(D+'i18n/items.json'))
ns=[x for x in new['static'] if x not in set(cur['static'])];nt=[x for x in new['tpls'] if x not in set(cur['tpls'])]
out=[]
for x in ns:cur['static'].append(x);k='S%04d'%(len(cur['static'])-1);it.append([k,x]);out.append(k+'\t'+x)
for x in nt:cur['tpls'].append(x);k='T%03d'%(len(cur['tpls'])-1);it.append([k,x]);out.append(k+'\t'+x)
json.dump(cur,open(D+'strings.json','w'),ensure_ascii=False,indent=0);json.dump(it,open(D+'i18n/items.json','w'),ensure_ascii=False)
open(D+'i18n/new_src.txt','w').write('\n'.join(out)+'\n');os.remove(D+'strings_fresh.json')
print('new static',len(ns),'new templates',len(nt),'-> i18n/new_src.txt')
