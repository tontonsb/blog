---
title: Valsts iepirkumi
date: "2022-12-12"
intro: Nereti valsts iepirkumos vērtēšanas sistēma ļauj uzvarēt piedāvājumam, kurš nav izdevīgākais. Izskatīsim šo vērtēšanas modeli un veidus, kādā rezultāti ir manipulējami.
---

<script>
import Calculator from '$components/TenderCalculator.svelte'
import Katex from '$components/Katex.svelte'

const equation = String.raw`
	\text{Kandidāta punkti} 
	= \text{Max punkti pozīcijā} \cdot 
		\frac{\text{Zemākā cena}}{\text{Kandidāta piedāvātā cena}}`
</script>

# Valsts iepirkumi

Ar iepirkumiem ir dimbā. Katru dienu tiek publicēti iepirkumi, kuros
vērtēšanas sistēma tā vien uzprasās pēc manipulācijām un ļauj viegli
izvēlēties tādu uzvarētāju, kura piedāvājums nebūt nav labākais. Iztirzāsim
šo problemātisko sistēmu un tās trūkumus. Pameklēsim piemērus un padomāsim,
ko varētu darīt lietas labā.

Iepirkuma process paredzēts, lai valsts iestādes un uzņēmumi godīgā konkurencē varētu
izvēlēties komersantu, kas sniegs valstij nepieciešamo pakalpojumu pēc iespējas
izdevīgāk. Izdevīgumu [drīkst mērīt](https://likumi.lv/ta/id/287760#p51)
dažādi: pēc cenas, kvalitātes, termiņiem... Dažos gadījumos tiek izmantoti
vairāki saimnieciskā izdevīguma mēri un, lai saliktu tos kopā, tie tiek
pārvērsti punktos pēc noteikta algoritma.

Tieši viens no šādiem punktu aprēķina algoritmiem ir šī raksta fokusā. Tas
ir nelāgs, bet bieži izmantots algoritms, kas ļauj vairāk punktu iegūt 
dārgākam piedāvājumam. Turklāt, tas var notikt ne tikai ļaunprātīgu
manipulāciju rezultātā, bet arī salīdzinot normālus, godīgus piedāvājumus.

Izdomāt vērtēšanas sistēmu ir grūti. Īpaši tad, kad cenas nav vienkārši 
summējamas, bet jāņem vērā gan fiksētās izmaksas, gan stundu darbs, gan varbūt
pat gūstamie ieņēmumi, izpildes termiņi un kvalitāte. Un tādā gadījumā
iepirkumu autori aizņemas vērtēšanas sistēmu no citiem iepirkumiem. Bet ne
vienmēr tas paraugs ir tiešām bijis etalona vērts.

## Kādai jābūt vērtēšanas sistēmai?

Atbilde uz šo jautājumu ir pavisam vienkārša. Vērtēšanas sistēmai jānodrošina
kandidātu ranžējums, kas par vislabāko atzīs to piedāvājumu, kurš ir
visizdevīgākais.

Protams, "visizdevīgākais", var definēt dažādi, tāpēc sāksim ar vienkāršāku
skatu. Uzskatīsim, ka piedāvājumus vērtējam tikai pēc izmaksām un par vislabāko
tad jāatzīst piedāvājums, kurš izmaksās mazāk. Vai tiešām iespējams izdomāt
šķietami ticamu ranžēšanas sistēmu, kas nespēj no cenām izvēlēties lētāko
piedāvājumu? Izrādās, birokrātu spējas ir neierobežotas!

## Kāda ir šī sliktā sistēma?

Vispirms katrā izmaksu pozīcijā (piemēram, projektēšanā, piegādē, uzstādīšanā,
...) tiek no visiem piedāvājumiem atrasta zemākā cena.

Pēc tam katra konkursanta saņemto punktu skaitu šajā pozīcijā aprēķina,
dalot labāko no piedāvātajām cenām ar šī dalībnieka piedāvāto cenu. Var
pamanīt, ka iegūtais skaitlis būs robežās starp 0 un 1 un raksturos cenas
"labumu" — jo tuvāk labākajai cenai ir kandidāta piedāvājums, jo tuvāk
vieniniekam būs šī attiecība. Labākās cenas piedāvātājam tas vienmēr būs 1.
Izklausās feini. Vai vismaz loģiski.

Protams, ne visas pozīcijas ir vienlīdz lielas vai vienlīdz būtiskas, tāpēc
šo iegūto skaitli vēl pareizina ar pozīcijā iegūstamo punktu skaitu. Vienā
pozīcijā tas būs 5, citā 40. Bieži nolikumos tēmēts uz to, lai maksimāli
iegūstamais punktu skaits būtu 100. Kopā iegūstam šādu formulu:

<Katex math={equation} displayMode />

Vari pataustīt sistēmu praktiski, šajā kalkulatorā mainot piedāvātās cenas un
vērojot, kā tās ietekmē piešķirtos punktus un konkursa rezultātus.

<Calculator	editable={true} />

Sīkāk vari padarboties [šeit](iepirkumu-kalkulators).

Precizēšu, ka šo sistēmu neliek lietot nekādi normatīvie akti. Iepirkumu autori
to izvēlas, jo nevar atrast labāku variantu, ko izvēlēties. Bet kāda tad īsti
vaina šādai vērtēšanai?

## Sistēma nav stabila

Ja konkursā ir saņemti divi piedāvājumi (A un B), tad, manuprāt, ir sekojošas
iespējas:

- A piedāvājums ir labāks nekā B piedāvājums.
- B piedāvājums ir labāks nekā A piedāvājums.
- Abi piedāvājumi ir vienlīdz labi.

Man tas izklausās loģiski. Tev, lasītāj, es ceru, tas izklausās tik loģiski, ka
tu pat nesaproti, kāpēc es uzskaitu šos acīmredzamos variantus. Lūk tāpēc, ka
mūsu iepircēji ir atraduši sistēmu, kurā tā nesanāk. Šai sistēmā vienubrīd
piedāvājums A ir labāks nekā B, bet citubrīd sanāk otrādi.

Lūk, aplūkosim divus šādus piedāvājumus divās vienlīdzīgi svērtās pozīcijās:

<Calculator
	positionCount={2}
	participantCount={2}
	weights={[50,50]}
	matrix={[[120,150],[180,140]]} />

Ja rēķināsim vienkārši saskaitot izmaksas, redzēsim, ka "Lāga zeļļu"
piedāvājums kopā izmaksātu 300 naudiņas, bet "Brāķis & co" piedāvājums būtu
mazliet izdevīgāks — izmaksātu 290. Kalkulators parāda, ka arī šeit pētītā
vērtēšanas sistēma par mazliet labāku atzīst "Brāķis & co" piedāvājumu, kaut
gan atšķirība ir tikai ap 1%, nevis 3% kā rādīja elementārāks salīdzinājums.

Bet lūk kā izmainās situācija, ja konkursā izlemj pieteikties vēl viens
dalībnieks:

<Calculator
	positionCount={2}
	participantCount={3}
	weights={[50,50]}
	matrix={[[120,150,180],[180,140,125]]} />

Lai arī jaunais dalībnieks "Uzmetiens" ir iesniedzis pēc jebkuras metrikas
švakāko piedāvājumu un par uzvaru necīnās, paskatiet, kā viņa piedāvājums
ietekmējis pārējo punktus otrajā pozīcijā. Un ne tikai tur. Arī pavisam 
kopā "Lāga zeļļu" piedāvājums ir pēkšņi kļuvis par labāko, pēkšņi apsteidzot
konkurentu "Brāķis & co", kaut gan nedz viena, nedz otra piedāvājums nav
mainījies.

Un jo zemāku cenu "Uzmetiens" otrajā pozīcijā piedāvātu, jo vienādāki kļūtu
pārējo dalībnieku punkti tajā. Ja vienam kandidātam izdodas kādā pozīcijā
pamatot (vai komisija pamatojumu neprasa) pavisam zemu cenu, tad pārējo konkursantu
punkti šai pozīcijā kļūs pavisam mazi, vienādi un nevērtīgi. Dažādus šādus
scenārijus vari modelēt [pilnajā kalkulatora saskarnē](iepirkumu-kalkulators).

Sanāk, ka konkursa dalībnieks var sadārdzināt kādu pozīciju un palūgt citam
uzņēmumam, lai piesakās konkursam ar fiktīvu piedāvājumu, kur attiecīgā
pozīcija ir īpaši lēta un padara visu punktus šai pozīcijā nebūtiskus. Pārāk
trakus šādus gadījumus vajadzētu novērst publisko iepirkumu likuma nosacījumam
par [nepamatoti lētu piedāvājumu](https://likumi.lv/ta/id/287760#p53)
diskvalificēšanu, bet, ja nu komersants spēj pamatot, kāpēc viņiem šī pozīcija
ir "pamatoti" lēta?

Ja mūsu mērķis patiesi ir noskaidrot labāko, ranžēšanas sistēma nedrīkst būt
tāda, kurā dalībnieku secību var izkārtot kāda trešā puse, kas šajā
izkārtojumā nemaz īsti neiesaistās!

## Sistēma nav monotona

Arī situācijās, kad kandidāti ir tikai divi, var notikt tīšas vai netīšas
manipulācijas. Aplūkosim šādu konkursu, kur mazliet labāks piedāvājums ir
Lāga zeļļiem:

<Calculator
	positionCount={3}
	participantCount={2}
	weights={[30,30,30]}
	matrix={[[120,120],[180,180],[140,150]]} />

Protams, "Brāķis & co" gribētu uzvarēt šo konkursu. Taču viņiem skaidrs, ka
finansiāla jēga pildīt šo pasūtījumu būs tikai tad, ja kopā par darbu tiks
saņemtas vismaz 450 naudiņas. Nekas! Pateicoties šīs sistēmas īpatnībām, šis
konkursants var pārlikt 21 naudiņu no pirmās pozīcijas uz otro un kļūt par
uzvarētāju!

<Calculator
	positionCount={3}
	participantCount={2}
	weights={[30,30,30]}
	matrix={[[120,99],[180,201],[140,150]]} />

Un šādā, nedaudz pārkārtotā piedāvājumā pat nerastos aizdomas par nepamatotu
lētumu, ko likums ļautu diskvalificēt.

Protams, ideālā gadījumā konkursants nezina par citu piedāvājumu. Bet normālā
gadījumā arī konkurentu piedāvājuma uzzināšana ļautu to pārspēt tikai ar
mazliet labāku piedāvājumu. Savukārt šeit mēs redzam, kā, zinot piedāvājumu, to
var apspēlēt nevis ar lētāku cenu, bet speciāli piemērotu sadalījumu pa pozīcijām.

Arī nezinot konkurentu piedāvājumus, dalībniekus šī sistēma motivē iesniegt
nevienmērīgus piedāvājumus, jo aprēķinos ietvertā nelinearitāte (piedāvājums
nokļūst zem daļsvītras) atalgo pazemināt vienu pozīciju uz citas pozīcijas
rēķina.

## Piemērs no dzīves

Aprakstītie riski nav tikai teorētiski. Piemēram, pirms 4 gadiem potenciālie
Dziesmu svētku biļešu [tirgotāji cīnījās](https://twitter.com/mairisskuja/status/970194870966071301),
katrs savā pozīcijā izmēģinot superlētuma triku. Lūk, divas interesantās
pozīcijas:

<Calculator
	positionCount={2}
	positions={['Izbraukuma tirdzniecība', 'Sagataves']}
	weights={[10,5]}
	participantCount={3}
	participants={['SIA "Biļešu paradīze"', 'SIA "Mikromaksājumi"', 'SIA "Biļešu serviss"']}
	matrix={[[0.5, 10, 5],[1, 0.01, 0.19]]}
	totals={false} />

Par biļešu sagatavēm viena kompānija nolēmusi prasīt eiriku, otra 19 centus
(varam iztēloties, ka šis skaitlis atbilst pašizmaksai), bet trešā nolēmusi par
sagatavēm atsevišķi neko neprasīt un ielikusi vienu centu. Lai nu tā būtu,
varbūt viņiem tiešām grāmatvedībā tā neveidojas kā atsevišķa pozīcija, bet ir
iekļauta kopā ar ko citu.

Bet izbraukuma tirdzniecības pakalpojumos, kur bija jānorāda stundas darba
cena, situācja ir pavisam dīvaina, jo viens no kandidātiem piedāvājis veikt
šos darbus par 50 centiem stundā. Tad jau laikam automātiski, jo arī 2018. gadā
minimālā stundas alga bija lielāka par puseiri. Grūti spriest, kāpēc
piedāvājums šajā pozīcijā netika atzīts par [nepamatoti lētu](https://likumi.lv/ta/id/287760#p53),
jo visus iepirkuma dokumentus vairs neizdodas atrast publiski pieejamus.

Viegli pamanīt, ka "Biļešu paradīze" un "Mikromaksājumi" ir katrs vienā
pozīcijā nocēluši gandrīz visus punktus. Bet jāpievērš uzmanība arī
blakusefektam — tā rezultātā konkrētajā pozīcijā pārējo divu dalībnieku nebūt
ne vienādie piedāvājumi ir saņēmuši gandrīz vienādu punktu skaitu (tas atšķiras
mazāk nekā par vienu punktu).

Uzskatīsim šos divus piedāvājumu par nepamatoti lētiem un aizstāsim tos ar otru
zemāko cenu konkrētajā pozīcijā. Šis vingrinājums ir tīri hipotētisks, likumā
tādi pigori nav paredzēti un nevajag ar. Bet, lūk kas sanāk:

<Calculator
	positionCount={2}
	positions={['Izbraukuma tirdzniecība', 'Sagataves']}
	weights={[10,5]}
	participantCount={3}
	participants={['SIA "Biļešu paradīze 2"', 'SIA "Mikromaksājumi 2"', 'SIA "Biļešu serviss"']}
	matrix={[[5, 10, 5],[1, 0.19, 0.19]]}
	totals={false} />

Pēkšņi "Biļešu serviss" ir vislabākais un saņem nevis 1.26, bet 15 punktus.
Izrādās, tam katrā pozīcijā bija otrs labākais piedāvājums. Bet izmantotā
vērtēšanas sistēma atalgoja nevis sabalansētu piedāvājumu, bet izmaksu
maksimālu salikšanu vienā pozīcijā. Neapgalvoju, ka dalībnieki to darīja
ļaunprātīgi, bet šeit skaidri demonstrēts, kā viena konkurenta lētums konkrētā
pozīcijā padara pārējo dalībnieku punktus nevērtīgus neatkarīgi no tā, vai
piedāvājums bija patiesi dārgs, vai īstenībā tīri konkurētspējīgs.

Starp citu, līdz uzvarai šai [konkursā](https://twitter.com/mairisskuja/status/970194870966071301/photo/1)
"Biļešu servisam" pietrūka tikai nedaudz vairāk par 12 punktiem, tāpēc šo
varam uzskatīt par piemēru, kur konkursa rezultātu ir izšķīrušas vērtēšanas
sistēmas īpatnības.

## Problēmas mērogs

Bet cik tad bieži tiek izmantota šeit aprakstītā sistēma? Vai tas nav kas
ezotērisks no pagātnes? Ne gluži. Tapinot rakstu, tika pārskatīti 9. decembrī
[EISā](https://www.eis.gov.lv/EKEIS/Supplier) publicētie iepirkumi. No 63 šai
dienā publicētajiem iepirkumiem 61 bija publicēts ar nolikumu un starp tiem
problemātiskā vērtēšanas sistēma tika pamanīta šajos 12:

- CSDD [mēbeļu izgatavošana](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/92956)
- Rīgas Brīvostas [darbinieku veselības apdrošināšana](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/93114)
- LVM [dampera piegāde](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/92976)
- LVM [buldozera piegāde](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/92972)
- Jēkabils novads [pārtikas piegāde skolai](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/92942)
- LTV [satura vadības sistēma](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/92849)
- RD [dzīvokļu atjaunošana](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/93009)
- CSDD [dīzeļdegvielas piegāde](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/93089)
- AADSO [darbinieku veselības apdrošināšana](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/93086)
- Cēsu Līgatnes pārvaldes [degvielas piegāde](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/93079)
- Liepājas [rotaļu laukuma izveide](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/92239)
- NVA [tulkošanas pakalpojumi](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/92439)

Negarantēju, ka šis saraksts ir izsmeļošs, jo lejuplādējot, atverot un
manuāli pārlasot 63 nolikumus kāds gadījums varēja arī paslīdēt garām.
Izsaku pateicību tiem dažiem, kas publicēja iepirkumus PDF formātā.

Lai arī vienas dienas konkursi nav liels iztvērums, novērotais skaits ļauj
pieņemt, ka vismaz daži šādi iepirkumi tiek publicēti gandrīz katru dienu.

Dažos gadījumos labāka sistēma nav acīmredzama. Piemēram, Rīgas Brīvostas
gadījumā var jautāt, kā vispār labi salīdzināt apdrošināšanas prēmijas ar
pretim gūstamajiem segumiem. Toties citos iepirkumos kā LVM
[dampera piegāde](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/92976)
tam vajadzētu būt pavisam triviāli — cik izmaksā, tik izmaksā, ne? Ko tur gudri
dalīt pa punktiem un iegūt nelineārus fokusus ar šo haotisko sistēmu? Pielēsiet
taču, cik kilometru attālumā būs jāpiegādā un attiecīgi ņemiet vērā konkrēto
pozīciju nevis padariet tās manipulējamas!

Protams, vairums iepirkumu, par laimi, šo sistēmu neizmanto. Lielā daļā tā
nemaz nav iespējama, bet dažos gadījumos to varētu izmantot, bet neizmanto.
Labs piemērs ir RSMT [frizieru piederumu](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/93072)
iepirkums, kur tiek iegādāts lērums preču padsmit pozīcijās. Taču nolikums ir
gudrs un vienkāršs — cik nu tas kopā izmaksās, to arī vērtēs. Malači! Un tādu
labu piemēru īstenībā ir daudz.

Cik daudz gadījumos vērtēšanas sistēmai ir bijusi būtiska loma rezultātu
izšķiršanā, šī raksta ietvaros netika pētīts. Taču [iepriekšējās nodaļas](https://juris.glaive.pro/blog/iepirkumi#piem%C4%93rs-no-dz%C4%ABves) gadījums liecina, ka tādi eksistē.

## Kopsavilkums un nepieciešamā rīcība

Katru dienu tiek publicēti iepirkumi ar pārlieku sarežģītu vērtēšanas sistēmu,
kura nenodrošina izdevīgākā piedāvājuma izvēli. Tā ne tikai pieļauj
ļaunprātīgas manipulācijas (un mudina uz tādām), bet arī starp godīgiem
piedāvājumiem var piekārtot tādus punktus, ka tiks izvēlēts mazāk izdevīgais.
Šādai vērtēšanas sistēmai nav jātiek izmantotai nemaz.

Likumdevējs var pilnībā liegt šeit aprakstīto sistēmu un manipulācijas ar vienu
vienkāršu likuma papildinājumu: kandidāta vērtējums konkursā nedrīkst būt
atkarīgs no citu kandidātu piedāvājumiem. Lai arī tas neļaus konkursu
veidotājiem ieviest elegantus 100 punktu griestus, labāk šo skaitlisko
apaļumu nomainīsim pret garantiju, ka 107 punktus vērtais piedāvājums paliks
107 punktus vērts neatkarīgi no tā, kādu akrobātiku vienā vai citā pozīcijā
izmēģinās konkurents. Protams, viss ir relatīvs, arī piedāvājumi. Taču šobrīd
jauna kandidāta pievienošanās var izmainīt secību starp pārējiem un šāds
likuma nosacījums šo risku likvidētu.

Savukārt Iepirkumu uzraudzības birojam neatkarīgi no likumu izmaiņām derētu
ķerties pie iepirkumu uzraudzības un pārbaudīt nolikumos iekļautās ranžēšanas
sistēmas. Jau tagad likums paģēr izvēlēties saimnieciski izdevīgāko
piedāvājumu, tāpēc jau šodien IUB varētu izbrāķēt jebkuru nolikumu ar šādu
sistēmu. Un arī ar jebkuru citu sistēmu, kas ļauj izvēlēties piedāvājumu, kurš
nav izdevīgākais.

Iepirkumu rakstītājiem aicinu likt aiz auss: tas, ka cits ierēdnis ir
uzrakstījis iepirkumu pirms tevis, nenozīmē, ka viņš ir gudrāks un turams par
paraugu. Tas, ka viņa iepirkumu IUB neizbrāķēja, negarantē, ka tur viss bijis
pareizi un jēdzīgi. Galu galā arī paši IUB 
([1](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/90161),
[2](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/90102),
[3](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/72126),
[4](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/50768),
[5](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/34870),
[6](https://www.eis.gov.lv/EKEIS/Supplier/Procurement/26084)) nekautrējas rādīt
piemēru ar šādiem pat aprēķiniem un vismaz pirmajā gadījumā šādi iegūtie punkti
par cenām ir savstarpēji summēti...

Protams, uzrakstīt labu iepirkumu ir grūti. Ir grūti izdomāt pareizu, godīgu,
neapspēlējamu vērtēšanas sistēmu, kas tiešām ņems vērā gan cenu, gan kvalitāti,
gan termiņus, gan potenciālo atdevi (kā tas ir, piemēram, apdrošināšanām). Ir
grūti uzrakstīt visu tā, lai nepaliktu nepamanīti kādi zemūdens akmeņi.
Tāpēc ideāli būtu, ja kāds kantoris sagatavotu labas vadlīnijas, pēc kurām
sagatavot vērtēšanas sistēmas. Kuram kantorim tas piedien es nezinu. Vai tas ir
IUB, vai Valsts kanceleja, vai kāda ministrija. Bet iepirkumā to rakstīšanu
pirkt nevajadzētu :)

Jebkurā gadījumā saprotams, ka konkursu rakstītāji šo sistēmu lieto nevis aiz
ļaunprātības, bet tāpēc, ka noraksta idejas no citiem nolikumiem. Un virspusēji
šī sistēma nudien izskatās gudra un uzticama. Jo sarežģīta. Bet pasakiet
cilvēkiem, kā darīt labāk, un viņi (atskaitot pāris ļaunprāšus) tā arī darīs!
