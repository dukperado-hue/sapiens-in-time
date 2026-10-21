import sys,os,subprocess
# like w14.py but drops lines whose text equals one in DROP, then appends UI lines given after a line '@@UI'
lg=sys.argv[1];part=sys.argv[2];txt=sys.stdin.read().strip('\n')
body,_,ui=txt.partition('\n@@UI\n')
DROP=set(sys.argv[3:])
L=[l for l in body.split('\n') if l not in DROP]
p=subprocess.run(['python3',os.path.dirname(os.path.abspath(__file__))+'/w14.py',lg,part],input='\n'.join(L),text=True,capture_output=True);print(p.stdout,p.stderr)
if ui and p.returncode==0:open(os.path.dirname(os.path.abspath(__file__))+'/%s_b14_%s.tsv'%(lg,part),'a').write(ui.strip('\n')+'\n')
