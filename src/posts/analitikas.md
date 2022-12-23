---
title: Bezcepumu analītikas
date: "2022-12-21"
intro: Aplūkosim divas Google Analytics alternatīvas — Matomo un Fathom un pieredzi ar tām šajā prodžektā.
---

# Bezcepumu analītikas

Katrs vēlas uzzināt, cik apmeklējumu un lasījumu viņam ir. Arī es. Daudziem tas
pat ir svarīgi biznesam. Tomēr neviens nevēlas, lai 2 nedēļas pēc veļasmašīnas pirkuma
katrā ziņu portālā un facebookā tiek piedāvātas vēl un vēl veļasmašīnas. Vispār
jau mēs nevēlamies, lai facebooks vispār zinātu, ka es nopirku veļasmašīnu. Šo
problēmas daļu Eiropa ir atrisinājusi ar GDPR. Bet analītikas nozari tas atmeta
10 vai 20 gadus atpakaļ pagātnē...

GDPR doma ir vienkārša. Nebūs pareizi, ja es bez tavas ziņas nofiksēšu, ka tu,
Armand, te ienāci un palasīji par tosteriem. Un nodošu to gōglei, fecebokam,
tviteŗim un vēl rindai spameru. Tāpat tu arī nejustos labi, ja tavas ienākšanas
brīdī man gōgels pateiktu "reku tev Marta atnāca, viņa tikko par krēmiem lasīja,
gan jau pumpaina, pamēģini kkādu kosmētikas štruntu iesmērēt". GDPR saka, ka
šādi bez lietotāja ziņas ar informāciju darīties nedrīkst. Un es piekrītu.

Bet kā tad tikt pie statistikas? Kā zināt, ko lasa un ko nelasa? Ko skatās un
nepērk, un ko vispār neskatās? Un kā, pie velna, tikt vaļā no tiem sasodītajiem
*kukiju popupiem*?

Taisot šo blogu, nolēmu izmēģināt divas [Google Analytics](https://analytics.google.com/)
(turpmāk — GA) alternatīvas. Jāatzīst, mazliet nogļukoju, aizmirstot, ka arī GA
jaunajā, ceturtajā versijā ir pieejama bezizsekošanas analītika. Varbūt kādreiz
izmēģināšu arī to. Bet šoreiz [Matomo](https://matomo.org/) un [Fathom](https://usefathom.com/).

> **Labojums 22.12.2022.** Pamēģināju GA uzstādīt bezcepumu režīmā. Daudz
darba pašam, čakarīga un neskaidra konfigurācija. Faktiski tur nav uz privātumu
tēmēta šablona. Rodas iespaids, ka bezcepumu iespēja nav mērķis un diez vai būs
optimizēta kvalitatīvu datu iegūšanai. Šeit netiks ieviests.

## Matomo Analytics

[Matomo](https://matomo.org/), pēc pašu vārdiem, esot GA alternatīva, kas
aizsargā datus un apmeklētāju privātumu. Protams, pasniegt sevi kā konkurenta
alternatīvu — tas jau parāda spēku samēru :)

Matomo piedāvā divus risinājumus — vai nu lietot viņu mākoni, vai pašam
izmitināt savu Matomo instanci. Matomo mākoņrisinājums šobrīd no maziem
klientiem [prasa](https://matomo.org/pricing/) 19 eirikus mēnesī un par to ļauj
analizēt līdz 30 vietnēm līdz 50 tūkstošiem skatījumu.

Es tomēr izvēlējos *bezmaksas*, pašmitināmo risinājumu. Īsi: ja esi darbinājis
PHP projektus, tad iedarbināt pašam savu Matomo serveri tev nebūs nekādu
problēmu. WordPressisti šo vispār varot uzinstalēt no paneļa kā pluginu un
miers.

Jāatzīst, biju alojies, domājot, ka Matomo ir bezcepumu analītikas rīks. Nē,
pēc noklusējuma tiek izmantoti vairāki cepumi, lai noskaidrotu, kurš viesis
ir jauns, bet kurš — atgriežas. Nācās mazliet paņemties, lai cepumošanu
izslēgtu, jo mans mērķis bija vietne, kurā netiek veiktas tik uzbāzīgas
analītikas, kas liktu prasīt lietotājam atļauju viņu izsekot. Popupiem nē!
Varu iepriecināt, ka tā ir konfigurācijas iespēja, ko var ieslēgt vai nu
Matomo panelī, vai iekļautajā skriptā.

Aplūkojot projektu, redzam, ka funkcionāli produkts cenšas atdarināt GA, skats
ir nedaudz vecmodīgs, tādā tipiskā PHP projektu stilā. Acīs duras ielāpiem
veidotais latviskojums — daži nosaukumi ir iztulkoti, daži palikuši angliski.

![Matomo panelis ar klasisku izvēlni kreisajā pusē un vairākiem blokiem galvenajā daļā. Starp blokiem reālā laika pārskats un pēdējā mēneša apmeklējumu grafiks, bet ir arī reklāmas bloki, kas mudina pāriet uz Matomo *premium* versiju.](/images/analitikas/matomo-dashboard.png)

Ir pieejami visi pierastie dati — apmeklētāju ierīces, operētājsistēmas, ekrāna
izmēri. Avots no kura apmeklētāji nākuši, lapas pa kurām staigājuši, saite ar
kuru izgājuši. Ir arī komerciālās sadaļas par mērķiem, kur var uzskaitīt
konkrētas aktivitātes (piem lietotājs uzspieda uz baniera vai ielika preci
grozā), taču man šis šoreiz nebija aktuāli.

![Matomo parāda apmeklētāju sadalījumu pa ierīču tipiem, operētājsistēmām un ekrāna izmēriem.](/images/analitikas/matomo-data.png)

Kopumā Matomo pret apmeklētāju privātumu izturas cienīgi. Cik nu mūsu vēlmes to
ļauj, ievāktie dati nav pārāk personalizēti, IP adreses ir anonomizitētas (tas
laikam izskaidro ģeolokācijas neprecizitāti). Arī datubāzē pārbaudot es
pārliecinājos, ka nekas vairāk kā attēlā redzams, par apmeklētājiem saglabāts nav.

![Matomo saglabā apmeklējuma laiku, anonimizētu IP adresi, vispārīgus datus par ierīci un apmeklēto lapu sarakstu](/images/analitikas/matomo-visitors.png)

## Fathom

Arī [Fathom](https://usefathom.com/) sevi dēvē par GA alternatīvu, kas respektē
privātumu. Fathom piedāvā tikai statistiku bez cepumiem un bez izsekošanas. Tas
liek cerēt, ka rīks būs vislabāk piemērots precīzai analītikai bez vajadzības
pēc visādiem popupiem.

Šis pakalpojums ir pieejams tikai abonēšanas veidā un tiks mitināts uz
pakalpojumu sniedzēja serveriem. Tomēr atšķirībā no [nelegālajiem](https://noyb.eu/en/austrian-dsb-eu-us-data-transfers-google-analytics-illegal)
amerikāņu pakalpojumiem, Fathom ir Kanādas kompānija, bet dati ir izolēti
Vācijas serveros, kas šo datu apstrādi padara ar GDPR saderīgu.

Izmaksu ziņā Fathom no maziem klientiem [prasa](https://usefathom.com/pricing)
14 eirikus ik mēnesi un par to ļaus vākt statistiku no 50 vietnēm, līdz 100
tūkstošiem apmeklējumu mēnesī.

Ieskatoties redzam modernu paneli, kurš fokusēts gandrīz tikai uz datiem un
informāciju.

![Fathom panelī redzam apmeklējumu skaita grafiku, skatījumu skaitu pa lapām un vietnes, no kurām nākuši apmeklētāji.](/images/analitikas/fathom-dashboard.png)

Tādu klasisku sadaļu īsti nav. Protams, ir kaut kādas iestatījumu lapas, bet
paši dati visi ir vienā skatā, kur ir galvenie rādītāji par apmeklētajām lapām,
apmeklētāju ierīcēm un operētājsistēmām, kā arī kaut kādi mārketinga (eventu)
uzskaites rīki, kurus šoreiz neizmēģināju.

![Fathom datos ir arī informācija par ierīču tipiem, operētājsistēmām un apmeklētāju valstīm.](/images/analitikas/fathom-data.png)

Nekā cita tur laikam nav. Ir iespēja pēc visiem šiem parametriem (piem.
konkrētas valsts un/vai lapas) filtrēt redzamos datus, bet citādi atvērt neko
citu man tur neizdevās. Man interesētu arī sadalījums pa ekrānu izmēriem un
pārlūku versijām, kas ir svarīgi dizainēšanā un izstrādē. Tomēr datu trūcība
šeit rada pārliecību, ka neko baigi personisku šis rīks tiešām neievāc. Varētu
būt, ka no šiem datiem sintizēt lietotāja *pirkstu nospiedumu* būs neiespējamāk
nekā Matomo. Kādi tieši ir ievāktie dati datubāzē personīgi gan pārbaudīt nav
iespējams.

## Datu salīdzinājums

Paskatīsimies, kādus tad datus katrs no rīkiem reģistrēja nedēļā no 12.12.
līdz 18.12. Lūk dažādu metriku salīdzinājums. Dati nav identiski, bet
lielākoties ir gana līdzīgi, lai varētu ticēt, ka tajos ir kāda jēga.

| Metrika            | Matomo | Fathom |
|--------------------|--------|--------|
| Apmeklētāji        | 326    | 311    |
| Skatījumi          | 568    | 598    |
| *Bounces*          | 67%    | 70%    |
| Apmeklējuma ilgums | 2:05   | 2:39   |
| Privātumu lasīja   | 15     | 15     |
| Viesi no Twitter   | 193    | 194    |
| Viesi no Latvijas  | 97     | 295    |
| Firefox lietotāji  | 19     | 17     |
| Telefonu lietotāji | 208    | 217    |

Unikālo apmeklētāju skaitu pētot pa dienām, atšķirības nebija haotiskas, bet
Fathom skaitļi gandrīz katrā dienā bija nedaudz zemāki. Pieņemu, ka Fathom ir
mazliet labāks apmeklētāju unikalitātes atpazīšanā.

Nespriedīšu par cit atšķirību iemesliem. Vien par ģeogrāfiju izvērsīšu. Fathom
lēsumā bija 3 vai mazāk lietotāju no citām valstīm kā Somija, Spānija, Holande,
Šveice, pavisam 9 dažādām (ieskaitot Latviju). Toties Matomo bija saskaitījis
tikai piecas dažādas valstis, 130 apmeklētājus AKā un 97 Amērikā. Un vēl pa
vienam Krievijā un Singapūrā. Skaidrs, ka Matomo IP anonimizācija ir bijusi
pārāk agresīva precīzai ģeolokācijai un/vai datubāze ir novecojusi.

Matomo ļauj iestatījumos norādīt, cik ļoti anonimizēt IP adreses. Es biju
izvēlējies rekomendēto divu oktetu anonimizāciju, bet tur jau bija brīdināts,
ka ģeolokācija būs čābīga. Tagad pārslēdzu uz viena okteta anonimizāciju un
papētīšu, vai ir labāk un vai ir tā vērts.

Šinī nodaļā visvairāk būtu noderējis, ja būtu bijis arī salīdzinājums ar GA,
taču kā bija tā bija. Varbūt nākotnē.

## SPA integrācija

Tehniskākiem cilvēkiem interesēs, cik viegli vai grūti integrēt šos produktus
vienas lapas lietotnēs. Fathom, kā jau mazliet modernākam rīkam ir mazliet
labāka integrācija pie *History API* un viņš pat strādāja bez pielāgojumiem.
Ja nepieciešama kāda detalizētāka, papildus datu sūtīšana, arī Fathom JS
klients šķita diezgan lietojams, bet beigās nolēmu, ka man nekādas manuālas
lietas nebūs vajadzīgas.

Ar Matomo pieslēgšanu tik labi negāja. Izmēģināju trešo pušu risinājumus un
man nekas nepatika. Pamēģināju pats taisīt integrāciju, kas pie navigācijām
nosūtītu notikumus, izmantojot Matomo servera API. Sanāca, bet konfigurēšana
likās visai čakarīga. Beigās paliku pie mazliet nepieklājīga *hacka* — pieliku
klausītāju Fathom radītajam navigācijas *eventam* un uz to arī veicu darbības,
lai standarta veidā aizsūtītu Matomo informāciju.

Ja jums ir klasiska daudzu lapu vietne (piemēram, WordPress), tad šī problēma
nebūs spēkā.

## Kuru lietot

Matomo informācija ir bagātīgāka un tas ļauj datus glabāt tavā serverī, caur
trešo pusi nelaižot neko. Fathom ir modernāks un šķiet labāk pielāgojies tieši
mūsdienīgai bezcepumu analītikai. Arī integrācijas modernākas, bet ne tik
detalizētas.

Ja jums vēl nav PHP servera, es ieteiktu samaksāt 14 EUR mēnesī un paņemt
Fathom. Ar tiem datiem ir gana vairumam gadījumu. Arī privātums šķiet
vienkāršāks un kvalitatīvāks.

Ja PHP serveris jau ir, tad Matomo ir acīmredzamā izvēle, kas jūsu izmaksas
nepalielinās praktiski nemaz. Ja tu esi WordPress projekta *webmasteris*, tad
vispār Matomo lietošana ir *no-brainer*.

Ja tas jums ir būtiski, Matomo ir imports no GA, Fathom vēl nav. Eksporti abiem
ir, bet Matomo vairāk. Man personiski Matomo bija interesanti paskatīties, cik
reizes kāds ir no mana raksta uzspiedis likumi.lv vai EIS saitēm, bet bez tā
var arī iztikt. Arī informāciju par apmeklētāju ierīču lielumu var izzīlēt no
ierīču tipiem.

Nobeidzot, aicinu visus *webmastierus* — vienalga, vai izvēlies GA, Matomo vai
Fathom, vai ko citu, lūdzu, izslēdz pārāk detalizētu izsekošanu un mēģini
respektēt apmeklētāja privātumu gana daudz, lai nekādi popupi nav jārāda. Mēs
neviens negribam tikt izsekot un neviens negrib skatīt un apstiprināt tos
popupus. Statistika ir iespējama bez tā.
