"""Turn the built fragment into a full standalone HTML document (doctype, charset, viewport) for GitHub Pages / phones."""
import sys,re
p=sys.argv[1];s=open(p,encoding='utf-8').read()
if s.lstrip().lower().startswith('<!doctype'):sys.exit(0)
head_end=s.index('</style>')+len('</style>')
meta=('<!doctype html>\n<html lang="th">\n<head>\n<meta charset="utf-8">\n'
 '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
 '<meta name="theme-color" content="#070504">\n'
 '<meta name="description" content="Sapiens in Time — live one ordinary life somewhere in human history. A pixel life-sim in 7 languages.">\n'
 '<meta property="og:title" content="Sapiens in Time">\n<meta property="og:description" content="You are 1 of ~117 billion humans who have ever lived. Live one life, year by year.">\n')
s=meta+s[:head_end]+'\n</head>\n<body>\n'+s[head_end:]+'\n</body>\n</html>\n'
open(p,'w',encoding='utf-8').write(s)
