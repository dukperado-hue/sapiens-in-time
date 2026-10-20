const s=require('fs').readFileSync(__dirname+'/../game.js','utf8');const i=s.indexOf('const LANG={');const j=s.indexOf('\nlet lang=',i);
const code=s.slice(i,j).replace('const LANG=','globalThis.LANG=');eval(code);
require('fs').writeFileSync('lang_en.json',JSON.stringify(LANG.en));require('fs').writeFileSync('lang_th.json',JSON.stringify(LANG.th));
console.log(Object.keys(LANG.en).length,Object.keys(LANG.th).length,Object.keys(LANG.th).filter(k=>!(k in LANG.en)),Object.values(LANG.en).join('').length);
