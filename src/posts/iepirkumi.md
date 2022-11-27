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

## Kāda ir šī sliktā sistēma?

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
