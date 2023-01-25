---
title: Iepirkumu vērtēšana
date: "2023-01-26"
intro: "Kā tad īsti jāvērtē iepirkumi? Pamēģināsim papētīt vienu iespējamo vērtēšanas modeli un tā piemērotību dažādu iepirkumu vajadzībām."
---

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

Ar dažām pozīcijām tas ir triviāli — ja pozīcija sastāv no vienas cenas, tad
tās arī ir šīs pozīcijas izmaksas.

Dinamiskākas pozīcijas kā uzturēšana darba stundas vai mēnešmaksas var novērtēt
kopējās prognozētajās izmaksās — jāpareizina vienas vienības cena ar
prognozējamo vienību skaitu. Bet precīzāk paskatīsimies pie [piemēriem](#praktiskie-piemēri).
Un tur arī padomāsim par sarežģītākiem gadījumiem.

## Pamatojums

Kāpēc tā? Galvenais arguments ir vienkāršība. Tā man šķiet vienkāršākā no tām
sistēmām, kurās nav iebūvētu nepilnību un no riskiem ir vieglāk izvairīties.

Protams, novērtēt uzturēšanas stundu sagaidāmo skaitu ir grūtāk nekā to
nedarīt. Tomēr tas konkursa rīkotājam tāpat ir jāspēj, lai varētu prognozēt
projekta budžetu.

Tāpat arī izteikt naudā kaut kādus kvalitātes kritērijus var šķist grūti vai
pat nereāli. Tomēr šeit vienkāršā ceļa nav. Jā, varbūt grūti pateikt, vai
drošības speciālists ar noteiktu izglītību ir viena tūkstoša vai piecu vērts.
Bet, ja gribas šo kritēriju iekļaut konkursā, tad jāspēj novērtēt tā vērtību.
Novērtēšanas nodošana haotiskām, nelineārām funkcijām nav risinājums.

Par to, kāpēc neder esošā sistēma, kur pozīcijas tiek pārvērstas punktos tā,
ka labākam piedāvājumam atbilst vairāk punkti, jau [izrunājām](/blog/iepirkumi).
Jā, [aplūkojām](/blog/iepirkumu-teorija) arī citas tādu punktu sistēmas, kur
šīs problēmas neizpaužas. Tomēr to sarežģītība ir lielāka. Turklāt tās punktu
sistēmas, kur problēmu nav, ir absolūtas — tās prasa pasūtītājam pašam izdomāt
atskaites cenas un citu parametru vērtējumus, ar ko salīdzinot var pārrēķināt
pozīciju piedāvājumus punktos. Bet, ja jau jāvērtē šā vai tā, tad piedāvāju, ka
ar to arī pietiks — salīdzināsim šīs novērtētās izmaksas.

Vēl varētu jautāt, kāpēc neizvēlēties kādu ordinālu (rangos balstītu) sistēmu,
līdzīgi kā mēs darām vēlēšanās. Visvienkāršākais pretarguments ir apsvērums, ka
ar ranžējumu pozīcijā nevar atspoguļot kvantitatīvās atšķirības.

<details>
<summary>Ir arī citas problēmas. Izvērs šo nodaļu, ja interesē matemātika.</summary>

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

### Finansiālās izmaksu pozīcijas

cena, cena, stundu cena, mēneša cena

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
