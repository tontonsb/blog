---
title: Iepirkumu teorija
date: "2023-01-21"
intro: "Kā tad īsti jāvērtē iepirkumi? Palūkosimies, ko par šo tēmu jau zina pasaulē."
---

<script>
import Calculator from '$components/TenderCalculator.svelte'
import Katex from '$components/Katex.svelte'

const chen2008 = String.raw`
	\text{Kandidāta pti} 
	= \left(
		a - b \log {\frac{\text{Piedāvātā cena}}{\text{Zemākā cena}}}
	\right) \cdot \text{Max pti pozīcijā}`
</script>

# Iepirkumu vērtēšanas teorija

Iepriekš [kritizēju](/blog/iepirkumi) plaši izmantotu iepirkumu vērtēšanas
sistēmu. Par laimi mums, arī citās valstīs šādu sistēmu izmanto. Tā rezultātā
ir tapis lērums zinātnisku rakstu par šo tēmu un ir pieredze un secinājumi,
ko ņemt vērā.

Esmu ilgstoši interesējies par ranžēšanas teoriju. Tā pamatā centrēta ap
vēlēšanām, jo tieši uzdevums, kā godīgi apvienot vēlētāju viedokļus vienā
kopvērtējumā, visbiežāk kādam licies interesants. Mana interese arī bieži
vērpusies ap ranžēšanas teorijas pielietojumiem sportā, kur sporta spēļu
maču iznākumiem, tenisa turnīros gūtajām vietām, F1 sacīkšu rezultātiem vai
CS:GO turnīra iznākumiem tiek pēc kaut kādiem principiem piešķirti punkti un
rēķināti kopvērtējumi.

Protams, daudzi no principiem ir nemainīgi kā vēlēšanās, tā sportā, tā arī
iepirkumos. Mēs visos gadījumos par ideālo risinājumu uzskatām tādu, kur eksistē
[Kondorsē uzvarētājs](https://en.wikipedia.org/wiki/Condorcet_winner_criterion),
t. i. ja piedāvājums A atzīts par labāko, tad tas nozīmē, ka tas ir labāks par
visiem citiem kandidātiem B, C un D. Nevis labāks par B un C, bet zaudē pret D,
kā tas var gadīties sporta spēlēs.

Tāpat arī manis [iepriekš](/blog/iepirkumi#sist%C4%93ma-nav-stabila)
izvirzītais iebildums, ka iepirkumā piesakoties trešajam, vissliktākajam
kandidātam, nedrīkstētu mainīties preference starp pārējiem diviem
kandidātiem, ir interesants arī vēlēšanu teorijā, kur to sauc par 
[neatkarības aksiomu](https://en.wikipedia.org/wiki/Independence_of_irrelevant_alternatives).
Ja A ir labāks nekā B, tad A jāpaliek virs B neatkarīgi no tā, vai konkursā
piedalās arī C vai nē.

## Iepirkumu pētījumi

Tomēr pēdējā laikā esmu pētījis arī specifiskāku literatūru tieši par
iepirkumiem. Lai arī sanāca apstiprināt dažus no maniem uzskatiem,
nevaru noliegt, ka uzzināju daudz ko jaunu, ko nebiju iedomājies. Diemžēl,
vairums pētījumu tomēr tēmēti privātā sektora iepirkumiem, kur lēmumu
pieņemšanas principi var būt mazliet citādi, sadarbība var būt ar neierobežotu
termiņu. Arī caurredzamība un paredzamība privātos iepirkumos nav tik
fundamentāli nepieciešama kā publiskajos iepirkumos. Galu galā, ja A pēc
punktiem sanāk labāks nekā B, bet mēs visi komisijā redzam, ka formula
nogļukojusi un B īstenībā būtu izdevīgāks, tad privāts uzņēmējs var slēgt
līgumu ar B. Bet valstij ir jāpieturas pie sākotnēji izvirzītajiem kritērijiem
un jāslēdz līgums ar A.

Un tomēr literatūra ir. Brīnumainā kārtā eksistē ne tikai dažādas
(zinātniskākas un politiskākās) iepirkumu nozares konferences, bet pat
[Publisko iepirkumu žurnāls](https://www.emerald.com/insight/publication/issn/1535-0118).

Protams, manis iztirzātās problēmas ir pazīstamas arī citās valstīs. Arī
citi [ir secinājuši](https://core.ac.uk/download/pdf/11477491.pdf), ka
relatīva vērtēšanas metode nevar būt godīga un izdevīga godīgām pusēm.
Vienkāršs pamatojums — tajā īstās vērtēšanas formulas nav noteiktas nolikumā,
bet kļūst zināmas tikai pēc piedāvājumu atvēršanas. Jo tās taču ir atkarīgas
no "labākā" katrā pozīcijā.

Telgens un Šotanuss izvirza tēzi, ka atklāta un absolūta
vērtēšanas sistēma ir izdevīgāka arī pasūtītājam. Ja pasūtītājs skaidri nosaka,
cik punktus dabūs viens vai otrs piedāvājums, tad arī kandidāti var pielāgot
savus piedāvājumus — ja pasūtītājam kritiski svarīgs ir ātrums, tad
kandidāti sagatavos piedāvājumus ar īsāku termiņu, bet augstāku cenu. Ja
lielāka nozīmē ir cenai vai speciālistu kvalifikācijai, tad optimizēs to. Tas
ir ievērojami labāk par mūsu tagadējo, relatīvo sistēmu, kur kandidāti pielāgo
piedāvājumus nevis pasūtītāja prioritātēm, bet mēģinot uzminēt konkurentu
piedāvājumus un tos apspēlēt.

Arī citi ir līdzīgi [demonstrējuši](http://www.ippa.org/jopp/download/vol8/issue-3/IPPC_Ar5_Economics_Chen.pdf),
ka pie relatīvām vērtēšanas metodēm dalībnieki ir spiesti optimizēt
piedāvājumus nevis pēc pasūtītāja vajadzībām, bet pēc spēļu teorijas
prinicipiem. Šai rakstā izcelta interesanta detaļa, ka šādi veidotos konkursos
dažreiz izveidojas tāda situācija, ka otrajā vietā palikušais var pēkšņi
kļūt par uzvarētāju, ja sekmīgi apstrīd trešās vietas piedāvājumu un panāk tā
diskvalificēšanu. Vai nav absurdi?

Šis autors arī izceļ, ka eksistē arī vismaz viena relatīva formula, kurai rangu
maiņas paradokss nav spēkā:

<Katex math={chen2008} displayMode />

Lai arī šis rezultāts ir atkarīgs no atskaites (zemākās) cenas, atšķirība starp
diviem piedāvājumiem tāda nav. Ja atškirība starp A un B sanāk 12 punkti, tad
tas tā paliks neatkarīgi no labākās cenas. Izmainīsies tikai tas, vai tie būs
30 un 18 punkti vai 37 un 25.

Tomēr, kā visas relatīvās metodes, arī neļauj uzņēmējam saprast, kāds tieši būs
faktiskais dažādu pozīciju svars pirms visi piedāvājumi ir atvērti. Neļauj
saprast, cik ļoti pasūtītāja acīs tiek vērtēta cena, bet cik — citas prasības.

[Baumo](https://www.researchgate.net/publication/324135433_A_New_Multi-Criterion_Decision_Making_MCDM_Method_Based_on_Proximity_Indexed_Value_for_Minimizing_Rank_Reversals),
ka zināmi kādi 70 kandidātu salīdzināšanas piegājieni, bet
[šajā](http://www.ippa.org/images/JOPP/vol17/issue-1/Article_4_Stilger-et-al.pdf)
rakstā salīdzināti 38 no tiem. Papildus jau minētajiem secības paradoksiem, šai
pētījumā, analizējot reālus iepirkumus, vērtēta arī aizsardzība pret ļoti
lielām cenām — izvērtēts, cik bieži ar vienu vai otru formulu gadās situācija,
kurā uzvarētājs varētu uzvarēt arī tad, ja iesniegtu 50 reizes lielāku cenu.
Pie mums (un visur citur) populārajai sistēmai šis risks ir 10%. Traģiski.

Šis raksts analīzē izmanto arī izolīnijas. Vērtīgs un uzskatāms analīzes
instruments, par kuru, ja saņemšos, pastāstīšu jums atsevišķā reizē.

[Šeit](https://www.sciencedirect.com/science/article/abs/pii/S1478409213000198)
interesanti atstāsta, kā zemākās cenas kritērijs ir ASVā piesipedis uzņēmumus
pārdot valstij iespējami švakākos produktus, kam sekojusi pretreakcija radīt
komiski detalizētas specifikācijas, kas savukārt rada tālākas problēmas ar
sašaurinātu izvēli, formālām atbilstībām utt. Šai rakstā rekomendēts, ka labāk
izmantot nevis vērtēšanas sistēmu ar cenas pārvēršanu punktos, bet visu 
parametru pielīdzināšanu cenai.

Noskaidroju, ka iemesli neizmantot labākas metodes parasti ir tādi, ka labās
metodes šķiet pārāk sarežģītas. Vai konkursu rīkotāji gluži vienkārši nezina,
ka eksistē alternatīvas. Galu galā, manis iepriekš aprakstītās problēmas daudzi
iepircēji uzskata par tikai hipotētiskām.

Nevaru apstrīdēt, ka citas pieejas ir sarežģītākas. Tās kā minimums prasa
konkursa rīkotājam izvēlēties atskaites cenas vai precīzi definēt, kā
pārrēķināt naudiņas punktos vai kvalitātes kritērijus naudiņās. Tas prasa
būtiski vairāk iedziļināšanās un zināšanu nekā uzrīkot konkursu un ļaut, lai
dalībnieku piedāvājumi paši nosaka "tirgus cenas" jeb atskaites sistēmu.

Toties nostāju, ka problēmas ir teorētiskas, apgāž pagājušā gada marta
[pētījums](https://www.sciencedirect.com/science/article/pii/S1478409221000832),
kurā, izvērtējot vairākus simtus Nīderlandes publisko iepirkmu, autori
noskaidrojuši: viens no katriem četrdesmit iepirkumiem būtu beidzies ar citu
iznākumu, ja kāds no neuzvarējušajiem pieteikumiem nebūtu konkursā piedalījies
nemaz. Bet tāda iespēja, ka fiktīvs papildus kandidāts varētu izmainīt secību
starp esošajiem kandidātiem, tika atklāta katrā piektajā iepirkumā.

## Kāda ir citu pieredze?

Diemžēl, visvairāk ir slikto piemēru. Līdzīga sistēma mūsējai, ar
identiskām problēmām, ir daudzās valstīs. Tāda ir [Zviedrijā](https://www.academia.edu/download/41673070/Tender_evaluation_and_supplier_selection20160127-6460-1ypzthf.pdf),
tāda ir [Nīderlandē](http://www.ippa.org/jopp/download/vol8/issue-3/IPPC_Ar5_Economics_Chen.pdf)
un komiskākais — relatīva vērtēšana ar likumu esot noteikta par obligātu
[Dienvidāfrikā](http://ippa.org/images/PROCEEDINGS/IPPC4/10LegalIssueInPublicProcurement/Paper10-7.pdf).

Un nē, iepriekšējā rakstā aplūkotais dziesmusvētku iepirkums, protams,
nav vienīgais gadījums, kad šī sistēma novedusi ķezā. Nīderlandē Utrehtas
pašvadībai bijis drukas štruntiņu iepirkums, kurā uzvarēja Océ, otrajā vietā
atstājot Xerox un trešajā Ricoh. Izrādījās, ka Océ piedāvājumā tomēr kaut kas
nav labi, tāpēc Utrehta lēma līgumu slēgt ar otr... Nē, nē, nē, LOL.

Utrehta atkārtoti Piemēroja ~~pigorus~~ formulas un pēkšņi izrādījās, ka par
labāko kļūst Ricoh piedāvājums, kurš iepriekš bija trešajā vietā. Un par visu šo
cirku, protams, mēs varam lasīt tāpēc, ka Xerox šo noveda 
[tiesā](https://uitspraken.rechtspraak.nl/#!/details?id=ECLI:NL:RBUTR:2011:BT1835), 
kur zaudēja, bet uzvarēja [pārsūdzējienu](https://uitspraken.rechtspraak.nl/#!/details?id=ECLI:NL:GHARN:2012:BX9806)
un [pārpārsūdzējienu](https://uitspraken.rechtspraak.nl/#!/details?id=ECLI:NL:HR:2014:1078).
Vai mums arī tā gribas?

Atgriežoties mierīgākā garā, daži autori, [pētot](http://www.ippa.org/images/PROCEEDINGS/IPPC3/Chapter38.pdf)
itāļu uzņēmumu uzvedību publiskajos iepirkumos, novērtējuši, ka savstarpēji
neatkarīgas vērtēšanas sistēmas nodrošina par 30% labāku cenas un kvalitātes
attiecību.

Atcerieties, iepriekšējā rakstā es [piedāvāju](/blog/iepirkumi#kopsavilkums-un-nepiecie%C5%A1am%C4%81-r%C4%ABc%C4%ABba)
ieviest nosacījumu "*kandidāta vērtējums konkursā nedrīkst būt atkarīgs no citu 
kandidātu piedāvājumiem*"? Tas ir reāli. Izrādās — [Portugāles sabiedrisko līgumu
kodeksā](https://dre.pt/dre/detalhe/decreto-lei/18-2008-248178) šāds punkts jau
[ir iekļauts](https://twitter.com/TontonsB/status/1616562955839209472).

## Secinājumi

Literatūras izpēte apstiprina to, ka aizliegumam veidot relatīvus (no
konkurentiem atkarīgus) vērtējumus ir vieta. Un noteikti ir nepieciešamas arī
vadlīnijas. Procesam jābūt iespējami vienkāršam — tādam, ko grūti salaist
grīstē. Tādam, ko viegli saprast gan organizatoriem, gan dalībniekiem. Tādam,
kurā dalībnieki var paši modelēt, vai vērts darīt ātrāk un sadabūt papildus
speciālistu, vai tomēr tas pasūtītājam šķiet vēlami, bet ne ļoti vērtīgi.

Protams, šis pārskats nav zinātnisks. Es neizvērtēju visu rakstu ticamību un
neveidoju svērtu apkopojumu. Uztveriet šo tikai kā ieskatu literatūrā.

Bet nākošajā rakstā apskatīsim praktiskas idejas — kā tad īsti mēs varētu
vērtēt iepirkumus, lai tas būtu reālistiski, saprotami un godīgi?
