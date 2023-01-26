---
title: Iepirkumu vērtēšana
date: "2023-01-26"
intro: "Kā tad īsti jāvērtē iepirkumi? Pamēģināsim papētīt vienu iespējamo vērtēšanas modeli un tā piemērotību dažādu iepirkumu vajadzībām."
---

<script>
import Calculator from '$components/TenderCalculator.svelte'
import CalcToPrice from '$components/TenderCalculatorToPrice.svelte'
import Katex from '$components/Katex.svelte'
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
vienu skaitli, kas atbilst šīs pozīcijas "izmaksām". Šīs izmaksas saskaitot pa
visām pozīcijām kopā, uzzinām, cik tad dārgs ir konkrētais piedāvājums. To,
kura kopējās izmaksas ir mazākās, atzīstam par konkursa uzvarētāju.

Ar dažām pozīcijām tas ir triviāli — ja pozīcija sastāv tikai no vienas cenas,
tad tās arī ir šīs pozīcijas izmaksas.

Dinamiskākas pozīcijas kā uzturēšana darba stundas vai mēnešmaksas var novērtēt
kopējās prognozētajās izmaksās — jāpareizina vienas vienības cena ar
prognozējamo vienību skaitu. Bet precīzāk paskatīsimies pie [piemēriem](#praktiskie-piemēri).
Un tur arī padomāsim par sarežģītākiem gadījumiem.

## Pamatojums

Šādā pieejā cenas pozīcijām būtu lineāra nozīme, līdz ar to daudzi no klupšanas
akmeņiem pazūd automātiski, saskaitīt šīs pozīcijas kļūst loģiski. Tiesa,
kvalitātes kritērijos joprojām būs izaicinājumi, pasūtītājs var izvēlēties gan
lineāras, gan nelineāras funkcijas. Un tas bieži būs arī loģiski, jo auto
jaudā atšķirība starp 50 un 100 kW taču ir būtiski lielāka nekā atšķirība starp
250 un 300 kW. Sistēma, kur cenas loma ir lineāra, bet kvalitātes loma var būt
dažāda, krietni labāk var atspoguļot dažādu iepircēju vajadzības.

Par to, kāpēc neder esošā sistēma, kur pozīcijas tiek pārvērstas punktos tā,
ka labākam piedāvājumam atbilst vairāk punkti, jau pamatīgi [izrunājām](/blog/iepirkumi).

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
ar ranžējumu pozīcijā nevar atspoguļot kvantitatīvās atšķirības.

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

Rindā "Aprēķins" redzama funkcija, pēc kuras no pozīcijas piedāvājuma <Katex math='x' />
sarēķināta šai pozīcijai ekvivalentā izmaksa. Vienreizējiem maksājumiem šī
izmaksa ir vienāda ar pašu cenu.

<CalcToPrice
	editable={true}
	positionCount={3}
	participantCount={2}
	matrix={[[200,101],[50,100],[50,100]]} />

### Finansiālās izmaksu pozīcijas

Analīze 

### Kvalitātes kritēriji

cena, termiņi, speciālisti, sertifikāti, vides labums?

### Finansiālās ienākumu pozīcijas

apdrošināšana

## Riski

Protams, arī šāda sistēma nebūs ideāla. Jebkurā sistēmā iepircējam nepietiek
uzskicēt vērtēšanas sistēmu un izsludināt konkursu. Ir jāmēģina arī modelēt
iespējamie piedāvājumi pa pozīcijām un saprast, vai kādā pozīcijā nevar
iestāties neparedzēta situācija. Ja tādi riski ir, tad tur būs nepieciešami
ierobežojumi.
