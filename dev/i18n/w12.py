import sys,os
D=os.path.dirname(os.path.abspath(__file__))+'/'
lg=sys.argv[1];txt=sys.stdin.read().strip('\n')
keys=[l.split('\t')[0] for l in open(D+'src12.txt').read().split('\n') if l.strip()]
L=txt.split('\n');assert len(L)==len(keys),(lg,len(L),len(keys))
open(D+'%s_b12.tsv'%lg,'w').write('\n'.join(k+'\t'+v for k,v in zip(keys,L))+'\n');print(lg,'ok',len(L))
