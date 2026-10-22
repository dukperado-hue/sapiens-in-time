import sys,os
D=os.path.dirname(os.path.abspath(__file__))+'/'
lg=sys.argv[1];part=int(sys.argv[2]);N=110
txt=sys.stdin.read().strip('\n')
keys=[l.split('\t')[0] for l in open(D+'src19.txt').read().split('\n') if l.strip()][part*N:(part+1)*N]
L=txt.split('\n');assert len(L)==len(keys),(lg,part,len(L),len(keys))
open(D+'%s_b19_%d.tsv'%(lg,part),'w').write('\n'.join(k+'\t'+v for k,v in zip(keys,L))+'\n');print(lg,part,'ok',len(L))
