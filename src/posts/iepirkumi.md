---
title: Valsts iepirkumi
date: "2022-11-28"
intro: Nereti valsts iepirkumos vērtēšanas sistēma ļauj uzvarēt piedāvājumam, kurš nav izdevīgākais. Izskatīsim šo vērtēšanas modeli un veidus, kādā rezultāti ir manipulējami.
---

<script>
import Calculator from '$components/TenderCalculator.svelte'
</script>

# Valsts iepirkumi

Ar iepirkumiem ir dimbā. Katru dienu tiek publicēti iepirkumi, kuros
vērtēšanas sistēma tā vien uzprasās pēc manipulācijām un ļauj viegli
izvēlēties tādu uzvarētāju, kura piedāvājums nebūt nav labākais. Iztirzāsim
šo problemātisko sistēmu un tās trūkumus. Pameklēsim piemērus un padomāsim,
ko varētu darīt lietas labā.

Iepirkuma process paredzēts, lai valsts uzņēmumi godīgā konkurencē varētu
izvēlēties komersantu, kas sniegs valstij nepieciešamo pakalpojumu pēc iespējas
izdevīgāk. Izdevīgumu [drīkst mērīt](https://likumi.lv/ta/id/287760#p51)
dažādi: pēc cenas, kvalitātes, termiņiem... Dažos gadījumos tiek izmantoti
vairāki saimnieciskā izdevīguma mēri un, lai saliktu tos kopā, tie tiek
pārvērsti punktos pēc noteikta algoritma.

Tieši viens no šādiem punktu aprēķina algoritmiem ir šī raksta fokusā. Tas
ir nelāgs, bet bieži izmantots algoritms, kas ļauj vairāk punktu iegūt 
dārgākam piedāvājumam. Turklāt tas var notikt ne tikai ļaunprātīgu
manipulāciju rezultātā, bet arī salīdzinot normālus, godīgus piedāvājumus.

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

Pēc tam aprēķina katra konkursanta saņemto punktu skaitu šajā pozīcijā,
dalot labāko no piedāvātajām cenām ar šī dalībnieka piedāvāto cenu. Var
pamanīt, ka iegūtais skaitlis būs robežās starp 0 un 1 un raksturos cenas
"labumu" — jo tuvāk labākajai cenai ir kandidāta piedāvājums, jo tuvāk
vieniniekam būs šī attiecība. Labākās cenas piedāvātājam tas vienmēr būs 1.
Izklausās feini. Vai vismaz loģiski.

Protams, ne visas pozīcijas ir vienlīdz lielas vai vienlīdz būtiskas, tāpēc
šo iegūto skaitli vēl pareizina ar pozīcijā iegūstamo punktu skaitu. Vienā
pozīcijā tas būs 5, citā 40. Bieži nolikumos tēmēts uz to, lai maksimāli
iegūstamais punktu skaits būtu 100.

Kopā iegūstam šādu formulu kandidāta punktu aprēķinam pozīcijā:

$$
\text{Kandidāta punkti} = \text{Max. punkti pozīcijā} \cdot 
	\frac{\text{Zemākā cena}}{\text{Kandidāta piedāvātā cena}}
$$

Vari pataustīt sistēmu praktiski, šajā kalkulatorā mainot piedāvātās cenas un
vērojot, kā tās ietekmē piešķirtos punktus un konkursa rezultātus.

<Calculator
	editable={true}
	positionCount={3}
	participantCount={3} />

## Sistēma nav stabila

<Calculator
	positionCount={2}
	participantCount={2} />

## Sistēma nav monotona

## Problēmas mērogs

## Ko darīt?
