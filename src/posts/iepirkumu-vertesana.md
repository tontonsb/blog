---
title: Iepirkumu vērtēšana
date: "2023-01-27"
intro: "Kā tad īsti jāvērtē iepirkumi? Pamēģināsim papētīt vienu iespējamo vērtēšanas modeli un tā piemērotību dažādu iepirkumu vajadzībām."
---

<script>
import Calculator from '$components/TenderCalculator.svelte'
import CalcToPrice from '$components/TenderCalculatorToPrice.svelte'
import Katex from '$components/Katex.svelte'

const complexFormula = String.raw`
	a_1 P_1 
	+ a_2 P_2 (1 - b_2 Q_2) 
	+ a_3 P_3 (1 - b_{31} Q_{31}) (1 - b_{32} Q_{32}) 
	+ S_4 + \ldots`
</script>

# Iepirkumu vērtēšana

Iepriekš [kritizēju](/blog/iepirkumi) plaši izmantotu iepirkumu vērtēšanas
sistēmu. Kā tad īsti jāvērtē iepirkumi? Nezinu. Bet te pamēģināsim papētīt
vienu iespējamo vērtēšanas modeli un tā piemērojamību dažādu iepirkumu
vajadzībām.

Galvenais izaicinājums slēpjas tajā, ka kandidāti vienlaicīgi jāsalīdzina
vairākās kategorijās. Protams, ja jāizvēlas tikai lētākais ēkas uzbūvētājs
pēc viena skaitļa, tad tas ir elementāri. Bet, ja vēlamies ņemt vērā izmaksas
vairākās pozīcijās? Ja nu vienas no izmaksām ir vienreizējas, bet citas —
ikmēneša vai stundu darba?

Reālos iepirkumos ir vēl sarežģītāki scenāriji, kur blakus izmaksām ir arī
jāsalīdzina termiņi, draudzīgums videi, piesaistīto speciālistu kvalitāte un
pat potenciālie ienākumi kā tas ir, piemēram, apdrošināšanas iepirkumos. Kā
apvienot šīs pozīcijas, kas atsevišķi ir viegli salīdzināmas?

Iepriekš [iztirzāju](/blog/iepirkumu-teorija), ko par šo tēmu ir sprieduši
citi. No apspriestajiem modeļiem praksē vispielietojamākais šķiet tas, kurš
ieteikts [šajā rakstā](https://www.sciencedirect.com/science/article/abs/pii/S1478409213000198).

## Vērtēšana

Piedāvāju izmantot pavisam vienkāršu principu: katra pozīcijas jānovērtē ar
vienu skaitli, kas atbilst šīs pozīcijas "ekvivalentajām izmaksām". Tas ir —
visas pozīcijas jānovērtē naudā. Šīs izmaksas saskaitot pa visām pozīcijām
kopā, uzzināsim, cik tad dārgs ir konkrētais piedāvājums. To, kura kopējās
izmaksas ir mazākās, atzīstam par konkursa uzvarētāju.

Ar dažām pozīcijām tas ir triviāli — ja pozīcija sastāv tikai no vienas cenas,
tad tās arī ir šīs pozīcijas izmaksas.

Dinamiskākas pozīcijas kā uzturēšana darba stundas vai mēnešmaksas var novērtēt
kopējās prognozētajās izmaksās — jāpareizina vienas vienības cena ar
prognozējamo vienību skaitu.

Kvalitatīvās pozīcijas faktiski nozīmē, ka pasūtītājs ir gatavs par kādu
neobligātu faktoru maksāt vairāk. Vai pieņemt kādu nepilnību, ja ir iespēja
maksāt mazāk. Šādā gadījumā ekvivalentās izmaksas koriģēsim tām attiecīgi
pieskaitot vai piereizinot kādu korekciju.

Bet precīzāk paskatīsimies pie [piemēriem](#praktiskie-piemēri). Un tur arī
padomāsim par sarežģītākiem gadījumiem.

## Pamatojums

Šādā pieejā cenas pozīcijām būtu lineāra nozīme, līdz ar to daudzi no klupšanas
akmeņiem pazūd automātiski. Saskaitīt šīs pozīcijas kļūst loģiski. Tiesa,
kvalitātes kritērijos joprojām būs izaicinājumi, pasūtītājs var izvēlēties gan
lineāras, gan nelineāras funkcijas. Un tas bieži būs arī loģiski, jo auto
jaudā atšķirība starp 50 un 100 kW taču ir būtiski lielāka nekā atšķirība starp
250 un 300 kW. Sistēma, kur cenas loma ir lineāra, bet kvalitātes loma var būt
dažāda, krietni labāk var atspoguļot dažādu iepircēju vajadzības.

Par to, kāpēc neder esošā sistēma, kur pozīcijas tiek nelineāri pārvērstas
punktos tā, ka labākai cenai atbilst vairāk punkti, jau pamatīgi [izrunājām](/blog/iepirkumi).

<details>
<summary>Kāpēc nelineāra cenas loma ir slikta? Spied šeit, lai izvērstu īsu
atgādinājumu!</summary>
Par sliktumu runāsim praktiski — aplūkojot konkrēto, Latvijā populāro iepirkumu
vērtēšanas sistēmu. Ja pozīcijā Analīze kandidāta AS Lāga zeļļi piedāvājums ir
būtiski dārgāks nekā kandidāta SIA Brāķis & co piedāvājums, tad vēl palielinot
cenu šajā pozīcijā, AS Lāga zeļļi punktus vairs īpaši nezaudēs. Rezultātā
kandidāts ir ieinteresēts sadārdzināt šo pozīciju, uz tās rēķina padarot lētākas
pārējās pozīcijas.

<Calculator
	positionCount={3}
	participantCount={2}
	weights={[20,20,20]}
	matrix={[[5000,100],[50,100],[50,100]]} />

Gana patoloģiskos gadījumos kandidāts vienā pozīcijā cenu var audzēt praktiski
neierobežoti un joprojām uzvarēt. Reālu iepirkumu analīzē [novērtēts](http://www.ippa.org/images/JOPP/vol17/issue-1/Article_4_Stilger-et-al.pdf),
ka pie mums populārajā vērtēšanas sistēmā 10.5% iepirkumu uzvarētājs varētu
palikt tas pats arī sadārdzinot savu piedāvājumu veselas 50 reizes. Gluži kā
tabulā virs šīs rindkopas — "Lāga zeļļi" taču uzvarētu liekot analīzes
pozīcijā kaut vai ceturtdaļmiljonu.
</details>

Jā, [aplūkojām](/blog/iepirkumu-teorija) arī citas tādu punktu sistēmas, kur
mūsu sistēmas problēmas neizpaužas. Kāpēc izvēlēties tieši šo no dažādām
sistēmām, kur vērtējums ir prognozējams un pat no dažām tām, kur cenas loma ir
lineāra vai atšķirība starp kandidātu vērtējumiem ir lineāra? Mans galvenais
arguments ir vienkāršība. Šī man šķiet vienkāršākā, paskaidrojamākā un
definējamākā no tām sistēmām, kurās ir mazāk iebūvētu nepilnību un no riskie
ir vieglāk izvairīties.

Turklāt arī citas punktu sistēmas, kur problēmu nav, ir absolūtas — arī tās
prasa pasūtītājam pašam izdomāt atskaites cenas un citu parametru vērtējumus,
ar ko salīdzinot pārrēķināt pozīciju piedāvājumus punktos. Bet, ja jau jāvērtē
šā vai tā, tad piedāvāju, ka ar to arī pietiks — salīdzināsim šīs novērtētās
izmaksas bez sarežģītiem pārrēķiniem punktos.

Protams, novērtēt uzturēšanas stundu sagaidāmo skaitu ir grūtāk nekā to
nedarīt. Tomēr tas konkursa rīkotājam tāpat ir jāspēj, lai varētu prognozēt
projekta budžetu.

Tāpat arī izteikt naudā kaut kādus kvalitātes kritērijus var šķist grūti vai
pat nereāli. Tomēr šeit vienkāršā ceļa nav. Jā, varbūt grūti pateikt, vai
drošības speciālists ar noteiktu izglītību ir viena tūkstoša vai piecu vērts.
Bet, ja gribas šo kritēriju iekļaut konkursā, tad jāspēj novērtēt tā vērtību.
Novērtēšanas nodošana haotiskām, nelineārām funkcijām nav risinājums.

Vēl varētu jautāt, kāpēc neizvēlēties kādu ordinālu (rangos balstītu) sistēmu,
līdzīgi kā mēs darām vēlēšanās. Visvienkāršākais pretarguments ir apsvērums, ka
ar ranžējumu pozīcijā nevar atspoguļot piedāvājumu kvantitatīvās atšķirības.

<details>
<summary>Ir arī citas problēmas. Izvērs šo nodaļu, ja teorijas tev vēl nav par daudz.</summary>

Teorētiski ordinālās sistēmas, kur katrā pozīcijā saranžējam kandidātus,
pieliekam pozīcijām svarus un atrodam konsensus secību starp šīm secībām ir
vilinošas. Ir taču zināms, ka šādas sistēmas (piemēram [šī](https://en.wikipedia.org/wiki/Kemeny%E2%80%93Young_method)
vai [mans absolūtais favorīts](https://arxiv.org/abs/1502.06498) ranžēšanas
jomā) varētu novest pie konsensus ranga, kas pēc daudzām aksiomām ir
visgodīgākais. Arī vēlēšanās parasti izmanto fundamentāli ordinālas sistēmas.

Tomēr ir vairākas problēmas:

- Rangos balstītās konsensus metodes ir grūti sarēķināt. Ne tikai tai ziņā, ka
aprēķini būtu grūti saprotami parastiem cilvēkiem, bet arī datoram grūti veicami.
Atrast konsensus rangu parasti ir eksponenciāli sarežģīts uzdevums.
- Tajās iegūstamie vērtējumi nav dalībniekiem prognozējami, ir grūti
piedāvājumu pielāgot pasūtītāja prioritātēm.
- Tām mēdz izpausties pašām savi [paradoksi](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem).
- Kvantitatīvās pozīcijās (piem. cenās) taču ir būtisks ne tikai ranžējums, bet
arī relatīvā atšķirība.

</details>

## Praktiskie piemēri

Šeit aplūkosim dažus hipotētiskus un dažus anonimizētus iepirkumus no EIS.
Paskatīsimies, kā tad būtu jāpielieto šeit piedāvātā sistēma.

### Vienkāršas izmaksu pozīcijas

Ja iepriekšējā sistēmā mēs varējām novērot paradoksus pat piedāvājumos, kur
kopējās izmaksas varētu izvērtēt, pozīcijas saskaitot, tad šeit tā nevarēs.
Lūk, varat pārbaudīt, ka pēc cenu saskaitīšanas pieejas tas piedāvājums, kurš
būs kopā lētāks, dabūs pirmo vietu. Tas arī ir pamatprincips.

Rindā "Aprēķins" redzama funkcija, pēc kuras no pozīcijas piedāvājuma <Katex math='P' />
sarēķināta šai pozīcijai ekvivalentā izmaksa. Vienreizējiem maksājumiem šī
izmaksa ir vienāda ar pašu cenu.

<CalcToPrice
	editable={true}
	positionCount={3}
	participantCount={2}
	matrix={[[200,101],[50,100],[50,100]]} />

### Finansiālās izmaksu pozīcijas

Pamēģināsim mazliet sarežģītākas funkcijas. Papildus divām vienkāršām cenu
pozīcijām pieliksim arī uzturēšanu (cenu par mēnesi) un papildus darbus,
piemēram, izmaiņu pieprasījumus programmatūrai.

Lai spētu novērtēt, cik tad mums tas kopā izmaksās, jāprognozē, cik mēnešus
un cik stundas mums vajadzēs. Teiksim, ka līgumu slēdzam uz trim gadiem, tad
mēneši būs 36. Bet stundas? Novērtēt grūti, bet nāksies. Godīgi skatoties nekā
citādi šīs pozīcijas nozīmīgumu izvērtēt nevarēs. Piemēram, ja novērtējam, ka
papildus darbi varētu prasīt vidēji 20 stundas mēnesī, tad gala vērtējums būtu
šāds:

<CalcToPrice
	editable={true}
	positions={['Analīze', 'Izstrāde', 'Uzturēšana', 'Darbi']}
	positionCount={4}
	positionToPrice={[x => x, x => x, x => 36*x, x => 720*x]}
	positionToPriceLabel={['P', 'P', '36 × P', '720 × P']}
	participantCount={2}
	matrix={[[2000,2600],[20000,14000],[500,550],[52,60]]} />

Lūk, lai arī nācās mazliet padomāt, esam ieguvuši sagaidāmo izmaksu
novērtējumus un konkursa rezultātu, kas dod priekšroku kandidātam ar zemākām
izmaksām (ja viss noritēs kā plānots).

Rezultātā, atšķirībā no vecās sistēmas, mēs ne tikai redzam, kāds sanāk
uzvarētājs, bet arī pilnībā saprotam, kā veidojies salīdzināmais skaitlis.
Nevis tikai brīnāmies par kaut kādiem punktiem.

### Kvalitātes kritēriji

Iepirkumos mēdz iekļaut tādus kvalitātes kritērijus kā noteiktas ISO
sertifikācijas esamība vai kvalificēta projektu vadītāja klātbūtne. Aplūkosim
gadījumu, kur pasūtītājs uzskata par vēlamu sertificēta projektu vadītāja
esamību. Vecajā iepirkumu vērtēšanā tas nozīmētu, ka par šādas pozīcijas
aizpildīšanu var saņemt papildus 5 vai 10 "punktus".

Bet priekš kam tas labais projvads vajadzīgs? Uz to mums jāatbild, lai varētu
viņu novērtēt naudā. Un uz to atbildēt ir jāspēj pasūtītājam, kas par to dod
priekšroku konkursā!

Pieņemsim, ka iemesls ir pasūtītāja uzskats, ka šādu izpildītāju mazāk būs
jāuzrauga un jāatbalsta. Pasūtītājam nāksies projektā gaitā veltīt mazāk savu
darbinieku darba stundu, kuru kopējais apjoms novērtējams aptuveni 3000 eiro
izmaksās. Tāpēc uzskatīsim, ka kandidāts ar projvadu (PV), radīs par 3000 eiro
mazākas izmaksas nekā kandidāts bez tāda.

<CalcToPrice
	positions={['Darbu izpilde', 'Projvads']}
	positionCount={2}
	positionToPrice={[x => x, x => -3000 * x]}
	positionToPriceLabel={['P', '-3000 × P']}
	participantCount={2}
	matrix={[[20000,21000],[0,1]]} />

Protams, tik pat labi varējām izmantot funkciju <Katex math="3000(1-P)" />, kas
nevis samazinātu SIA Brāķis & co piedāvājuma ekvivalentās izmaksas, bet
palielinātu AS Lāga zeļļi piedāvājuma izmaksas par to pašu summu. Matemātiski
starp šīm pieejām nav atšķirības.

<details>
<summary>Ko darīt ar termiņiem?</summary>
Kā vēl viens kvalitātes kritērijs reizēm tiek iesaistīts piegādes vai darbu
izpildes termiņš. Šo es ieteiktu vispār neizmantot. Ja nu konkursa uzvarētājs
nepagūst termiņā? Lauzt līgumu un sākt visu no sākuma, kad darbi gandrīz
pabeigti būtu pilnīgi nesaimnieciski. Bet atļaut tālāku izpildi (kaut vai ar
līgumsodu) būs netaisnīgi pret konkurentu, kurš termiņu novērtēja tādu, kādu
būtu patiesi izpildījis un tāpēc zaudēja konkursu.

Ja pasūtītājam termiņš nav obligāts, bet ir tik vēlams, ka par to varētu
samaksāt papildus, es iesaku paredzēt šādu punktu nolikumā un līgumā: ja
piegāde tiks veikta tik un tik ātrāk, tad būs bonusiņš tik un tik naudiņas.
</details>

### Finansiālās ienākumu pozīcijas

Tādi iepriekš āķīgi gadījumi kā apdrošināšana ar šo sistēmu kļūst ne tikai
caurredzamāki, bet pat vienkāršāki. Mums atliek tikai novērtēt, cik daudz
apdrošināšanas gadījumu mēs varētu sagaidīt. Piemēram, ja mūsu uzņēmuma ir
100 darbinieki un mēs domājam, ka vidēji viņi izmantos veselības apdrošināšanu
par 10%, tad vērtēsim, cik mēs saņemam par 10 summām, atņemot sagaidāmo
atguvumu no izmaksām.

<CalcToPrice
	editable={true}
	positions={['Cena', 'Apdr. summa']}
	positionCount={2}
	positionToPrice={[x => 100*x, x => -10 * x]}
	positionToPriceLabel={['100 × P', '-10 × S']}
	participantCount={2}
	matrix={[[550,500],[4000,4500]]} />

Šādam aprēķinam parādās labs blakusefekts — mēs redzam, cik daudz apdrošinātājs
tiek plusos par pakalpojuma nodrošināšanu. Ar šo rezultātu mēs varam kontrolēt,
vai mūsu pieņēmumi ir saprātīgi. Ja pēķšņi sanāktu, ka izmaksas šeit sanāktu
negatīvas un apdrošinātājs paliktu mīnusos, tad būtu jāaizdomājas — vai nu mūsu
vai apdrošinātāja novērtējumi sagaidāmajai apdrošināšanas izmantošanai ir
bijuši aplami.

Gadījumos, kad apdrošinām retāku gadījumu (piemēram, ēkas apdrošināšana),
sagaidāmā atmaksa jāreizina ar gadījuma varbūtību, kas būs mazs skaitlis. Jā,
to novērtēt var būt grūti. Bet iepircējs, kas to nespēj novērtēt, nevar būt
kompetents salīdzināt apdrošināšanas piedāvājumus ne ar vienu metodi.

### Citas situācijas

Var būt arī gadījumi, kuros izmaksu korekcija nebūs pieskaitāma.

Ja jāvērtē vienības ar ierobežotu darba ilgumu, tad var cenu dalīt, vērtējot
cenu par vienību gadā. Līdzīgi var būt arī citi gadījumi, kuros cenu var
pārrēķināt uz cenu par "īsto" vienību, lai tas būtu tilpuma vai atmiņas vai vēl
kāds skaitlis.

Nesen redzēju arī iepirkumu, kurā vērtēta iekārtas putekļu izturības klase.
Šādā gadījumā iepircējam jāspēj izvērtēt, cik ļoti iekārtas pielietojamību
un/vai ilgmūžību ietekmē klase un proporcionāli jāpareizina izmaksas (jeb
jāpalielina vai jāsamazina tās par kaut cik procentiem).

Šajos visos gadījumos ekvivalento izmaksu funkcija no cenas (P) un kvalitātes
(Q) būs nevis formā <Katex math="P-bQ" />, bet <Katex math="P(1-bQ)" />.
Protams, piemēri ir vienkāršoti, praksē var būt vairāk faktoru un daži no tiem
var attiekties tikai uz kādu no pozīcijām. Piemēram, kādam gala aprēķins var
sanākt arī tāds:

<Katex math="{complexFormula}," displayMode />

kur <Katex math="a_i" /> un <Katex math="b_i" /> ir attiecīgo vērtību svara
koeficienti.

Lai arī sarežģīti iepirkumi joprojām būs sarežģīti vērtējami, man šie aprēķini
izskatās krietni vienkāršāki, vieglāk izsekojami un pārbaudāmi nekā tagadējās
zemāko cenu dalīšanas...

> **Atceries!** Relatīvās korekcijas nav aditīvas. Ja tev viena
pozīcija labo cenu par 10% un cita pozīcija arī par 10%, tad kopējais labojums
nav 20% ;)

## Riski

Izlasīji? Neuzķeries! Arī šāda sistēma nebūs ideāla. Jebkurā sistēmā iepircējam
nepietiek uzskicēt vērtēšanas sistēmu un izsludināt konkursu. Ir obligāti
jāmēģina arī modelēt iespējamie piedāvājumi pa pozīcijām un saprast, vai kādā
pozīcijā nevar iestāties neparedzēta situācija. Pasūtītājam ir skaidri jāzina,
par kādām piedāvājuma kombinācijām būs vienādi vērtējumi. Un jāsaprot, vai tie
tiešām ir līdzvērtīgi pasūtītāja acīs.

Piemēram, veselības apdrošināšanas piemērā faktiski būs iesaistītas dažādas
summas dažādiem pakalpojumiem. Lai tur nenokļūdītos ar vērtējumu kādā pozīcijā,
būtu vajadzīgs konsultēties pie industrijas pārstāvjiem. Citādi var sanākt, ka
kāds kandidāts spiedīs lielus skaitļus kļūdaini izsvērtā pozīcijā, bet cits
nemaz nepieteiksies, jo uzskatīs izraudzītos svarus par pagalam neizdevīgiem.

Bet šai metodei es spēju saskatīt mazāk riskus un problēmas nekā citām. Un tu?
