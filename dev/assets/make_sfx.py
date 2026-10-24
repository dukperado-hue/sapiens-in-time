# Builds dev/assets/sfx from freely licensed recordings (CC0, public domain, CC BY) cloned from public GitHub repos.
# Each file is shortened to at most 60 s, made mono and encoded as Ogg Opus. Run from anywhere; SRC = folder with the clones.
import json,os,subprocess,sys
SRC=sys.argv[1] if len(sys.argv)>1 else '/tmp/snd';OUT=os.path.dirname(os.path.abspath(__file__))+'/sfx/'
R={'blanket':('rafaelmardojai/blanket','775f2a767230a9681850d1b1e085be58656f1382','SOUNDS_LICENSING.md'),
   'ambientsounds':('Muges/ambientsounds','7ef9aefeeed93c37bca3cdb246a982dd1afce2f0','readme.md'),
   'sp':('sonic-pi-net/sonic-pi','df6f17e4625b0451fa2af8accf2e1e641c7ad458','etc/samples/README.md'),
   'vl':('VoxeLibre/VoxeLibre','4492ce6ff8d856daa4567abe2ea689f4e7a39842','mods/ENTITIES/mobs_mc/LICENSE-media.md')}
B='blanket/data/resources/sounds/';V='vl/mods/ENTITIES/mobs_mc/sounds/'
L=[ # out, src, what, author, licence, original page
 ('amb_birds_day','%sbirds.ogg'%B,'Birds singing in daylight (loop)','kvgarlic (edit: Porrumentzio)','CC0','https://freesound.org/people/kvgarlic/sounds/156826/'),
 ('amb_stream','%sstream.ogg'%B,'Small stream over stones (loop)','gluckose','CC0','https://freesound.org/people/gluckose/sounds/333987/'),
 ('amb_wind_soft','%swind.ogg'%B,'Soft wind (loop)','felix.blume (edit: Porrumentzio)','CC0','https://freesound.org/people/felix.blume/sounds/217506/'),
 ('amb_wind_strong','ambientsounds/wind.ogg','Strong wind (loop)','felix.blume','CC0','https://freesound.org/people/felix.blume/sounds/139337/'),
 ('amb_fire_crackle','ambientsounds/fireplace.ogg','Wood fire crackling','inchadney','CC0','https://freesound.org/people/inchadney/sounds/132534/'),
 ('amb_fire_small','%sfireplace.ogg'%B,'Small fire crackling','ezwa (SoundBible)','Public Domain','https://soundbible.com/1543-Fireplace.html'),
 ('amb_crickets_night','%ssummer-night.ogg'%B,'Crickets at night','Lisa Redfern (SoundBible)','Public Domain','https://soundbible.com/2083-Crickets-Chirping-At-Night.html'),
 ('amb_rain','%srain.ogg'%B,'Steady rain (loop)','alex36917 (edit: Porrumentzio)','CC BY','https://freesound.org/people/alex36917/sounds/524605/'),
 ('amb_storm','%sstorm.ogg'%B,'Rain storm (loop)','Digifish music (edit: Porrumentzio)','CC BY','https://freesound.org/people/digifishmusic/sounds/41739/'),
 ('amb_waves','%swaves.ogg'%B,'Sea waves on a shore (loop)','Luftrum (edit: Porrumentzio)','CC BY','https://freesound.org/people/Luftrum/sounds/48412/'),
 ('amb_thunderstorm','ambientsounds/thunderstorm.ogg','Thunderstorm with rolling thunder','RHumphries','CC BY','https://freesound.org/people/RHumphries/sounds/2523/'),
 ('amb_rain_heavy','ambientsounds/heavy-rain.ogg','Heavy rain','D W','CC BY','https://freesound.org/people/D%20W/sounds/136971/'),
 ('amb_rain_forest','ambientsounds/forest-rain.ogg','Rain in a forest','Corsica_S','CC BY','https://freesound.org/people/Corsica_S/sounds/169031/'),
 ('ani_crow','sp/etc/samples/misc_crow.flac','Crow call','davidworksonline','CC0','http://freesound.org/people/davidworksonline/sounds/54973/'),
 ('obj_bell','sp/etc/samples/perc_bell.flac','Struck bell','AlaskaRobotics','CC0','http://freesound.org/people/AlaskaRobotics/sounds/221515/'),
 ('ani_hen_1','%smobs_mc_chicken_buck.1.ogg'%V,'Hen clucking','evsecrets','CC0','https://freesound.org/people/evsecrets/sounds/346961/'),
 ('ani_hen_2','%smobs_mc_chicken_buck.2.ogg'%V,'Hen clucking','evsecrets','CC0','https://freesound.org/people/evsecrets/sounds/346961/'),
 ('ani_cow','%smobs_mc_cow.ogg'%V,'Cow lowing','Zozzy','CC0','https://www.freesound.org/people/Zozzy/sounds/59245/'),
 ('ani_donkey_1','%smobs_mc_donkey_random.2.ogg'%V,'Donkey braying','JarredGibb','CC0','https://freesound.org/people/JarredGibb/sounds/233131/'),
 ('ani_donkey_2','%smobs_mc_donkey_random.1.ogg'%V,'Donkey braying','Garuda1982','CC BY 3.0','https://freesound.org/people/Garuda1982/sounds/539505/'),
 ('ani_horse','%smobs_mc_horse_random.1.ogg'%V,'Horse whinny','GoodListener','CC BY 3.0','https://freesound.org/people/GoodListener/sounds/322454/'),
 ('ani_sheep','%smobs_sheep.ogg'%V,'Sheep bleat','Blender Foundation','CC BY 3.0','(VoxeLibre LICENSE-media.md, no page given)'),
 ('ani_dog_bark','%smobs_mc_wolf_bark.1.ogg'%V,'Dog bark (modified, simplified)','Hybrid Dog (dogblocks mod)','CC0','https://github.com/HybridDog/dogblocks/'),
 ('ani_dog_growl','%smobs_mc_wolf_growl.ogg'%V,'Dog growl (modified, simplified)','Hybrid Dog (dogblocks mod)','CC0','https://github.com/HybridDog/dogblocks/'),
 ('ani_bear_growl','%smobs_mc_bear_growl.1.ogg'%V,'Bear growl','tbsounddesigns','CC BY 3.0','https://freesound.org/people/tbsounddesigns/sounds/416861/'),
 ('ani_cat','%smobs_mc_cat_idle.2.ogg'%V,'Cat meow','SelsRoyalNavy','CC0','https://freesound.org/people/SelsRoyalNavy/sounds/427081/')]
# second batch (24 Oct 2026): OpenGameArt.org and Wikimedia Commons, CC0 only, files in SRC2
SRC2=sys.argv[2] if len(sys.argv)>2 else '/tmp/snd2/dl'
OGA='https://opengameart.org/content/'
L2=[('amb_frogs_night','bc/birdsCrickets/frog.wav','Frogs at night','Aj_','CC0',OGA+'birdcricketfrog-and-mosquito-sounds'),
 ('amb_night_bird','bc/birdsCrickets/birdNight.wav','Night bird calling','Aj_','CC0',OGA+'birdcricketfrog-and-mosquito-sounds'),
 ('amb_crickets_2','bc/birdsCrickets/cricket.wav','Crickets','Aj_','CC0',OGA+'birdcricketfrog-and-mosquito-sounds'),
 ('obj_mosquito','bc/birdsCrickets/distressedMosquito.wav','Mosquito whine','Aj_','CC0',OGA+'birdcricketfrog-and-mosquito-sounds'),
 ('ani_frog_croak','croak_01_0.mp3','Frog croak','EZduzziteh','CC0',OGA+'frog-croaks'),
 ('ani_frog_ribbit','ribbit_01.mp3','Frog ribbit','EZduzziteh','CC0',OGA+'ribbit-frog-sounds'),
 ('amb_cicadas','082526-cicadasounds_0.ogg','Cicadas in the heat','syncopika','CC0',OGA+'cicada-sounds'),
 ('amb_gulls','Seagull_Ambient_1.wav','Seagulls','Rango Mango','CC0',OGA+'solo-seagull-sound-effects'),
 ('ani_peacock','peacockscream.flac','Peacock call','qubodup','CC0',OGA+'peacock-scream'),
 ('ani_peacock_chirp','peacock_chirp_0.ogg','Peacock short call','AntumDeluge','CC0',OGA+'peacock-chirp'),
 ('amb_crickets_loop','crickets_1.mp3','Crickets (loopable)','Wolfgang_ (original: Ted Kerr)','CC0',OGA+'crickets-ambient-noise-loopable'),
 ('amb_rain_thunder','rain-thunder.ogg','Rain with long thunder','WuxiaScrub','CC0',OGA+'rain-long-thunder'),
 ('amb_birds_2','birds-isaiah658_0.ogg','Birds singing (loop)','isaiah658','CC0',OGA+'ambient-bird-sounds'),
 ('ani_elephant','Elephant_voice_-_trumpeting.ogg','Elephant trumpeting','Thagavaluzhavan (Wikimedia user)','CC0','https://commons.wikimedia.org/wiki/File:Elephant_voice_-_trumpeting.ogg'),
 ('ani_tiger','439280_schots_angry-tiger.wav','Tiger growling (first 20 s)','schots','CC0','https://commons.wikimedia.org/wiki/File:439280_schots_angry-tiger.wav')]
os.makedirs(OUT,exist_ok=True);meta=[]
for out,src,what,auth,lic,page in L:
    repo=src.split('/')[0];p=SRC+'/'+src;o=OUT+out+'.ogg';amb=out.startswith('amb_')
    subprocess.run(['ffmpeg','-v','error','-y','-i',p,'-t','60','-ac','1','-af','afade=t=out:st=59:d=1' if amb else 'anull','-c:a','libopus','-b:a','40k' if amb else '48k',o],check=True)
    d=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',o],capture_output=True,text=True).stdout)
    r=R[repo];meta.append({'file':out+'.ogg','what':what,'author':auth,'license':lic,'source':page,'via':'https://github.com/%s/blob/%s/%s'%(r[0],r[1],r[2]),'seconds':round(d,1),'bytes':os.path.getsize(o)})
for out,src,what,auth,lic,page in L2:
    p=SRC2+'/'+src;o=OUT+out+'.ogg';amb=out.startswith('amb_');T='20' if out=='ani_tiger' else '60'
    subprocess.run(['ffmpeg','-v','error','-y','-i',p,'-t',T,'-ac','1','-af','afade=t=out:st=59:d=1' if amb else 'anull','-c:a','libopus','-b:a','40k' if amb else '48k',o],check=True)
    d=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',o],capture_output=True,text=True).stdout)
    meta.append({'file':out+'.ogg','what':what,'author':auth,'license':lic,'source':page,'via':page,'seconds':round(d,1),'bytes':os.path.getsize(o)})
json.dump(meta,open(OUT+'credits.json','w'),indent=1,ensure_ascii=False)
print(len(meta),'files',sum(m['bytes'] for m in meta)//1024,'KB')
