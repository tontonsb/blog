---
title: Skyline and Reflection countries
date: "2026-05-10"
intro: Outlier countries on the area–highest elevation plot.
---

<script>
	import SkylinePlot from '$components/SkylinePlot.svelte'
</script>

# Skyline and Reflection countries

The whole of Australia is lower than some point in Liechtenstein.
Let's formalize "quite mountainous for their size" and its opposite concept
and see how Lithuania finally gets on a list of terrain extremes, lol.

## What?

Consider comparing the countries by their area and the highest elevation.
If mountainous terrain was distributed randomly, larger countries would have higher probability of containing the very high peaks while the smaller countries would be unlikely to have them.
And in general that's true on Earth, so let's focus on the outliers.

The ones whose elevation stands above their (size-wise) peers are called *skyline countries* here.
And the ones whose elevation stands below their size-wise peers are called *reflection countries*.
Named after the reflection of a skyline in water since that's the contour formed by the opposite extremes.

<figure>

![The skyline of Riga and its reflection in the Daugava river with arrows pointing to some of the locally noticeable peaks in the skyline and in the reflection.](/images/skylines/riga.jpg)
<figcaption>Skyline countries are the ones whose highest peak elevation stands out</figcaption>
</figure>

### Skyline countries

Formal definition:
<dl>
	<dt>Skyline country		<dd>A country such that no smaller country has a higher peak
</dl>

The general term for the envelope entries on a plot is the *Pareto frontier*.

Liechtenstein is an example of being Pareto-efficient in this manner:
sure, you can find higher peaks than Grauspitz in the world, but to do that you must necessarily go to a larger country.
If you go look at smaller countries you will only find lower points.

Since *skyline countries* is a way to formalize the idea of "small but mountainous", the list is not exactly surprising.
People are aware that Nepal or Andorra would fit that description. But can you predict what would be on the other list?

### Reflection countries

Formal definition:
<dl>
	<dt>Reflection country <dd>A country such that no larger country has a lower peak
</dl>

The reflection countries are the ones that have unusually low highest points for their size — ones that are so large that you'd expect them to have some higher mountains somewhere, but they don't.

Example: all the other countries that are as big as Mauritania or larger have higher peaks than Mauritania does.

The reflection countries make the more surprising list since people do not usually expect Mali and Belarus to form a frontier of terrain extremes.

## Plot

<SkylinePlot />

## List

### Skyline countries

| Country		| Area / km²	| Highest point			| Height / m	|
|---------------|--------------:|-----------------------|--------------:|
| Nepal			| 147 181		| Mount Everest			| 8849			|
| Bhutan		| 38 394		| Gangkhar Puensum		| 7570			|
| Rwanda		| 26 338		| Mount Karisimbi		| 4507			|
| Lebanon		| 10 452		| Qurnat as Sawda		| 3088			|
| Andorra		| 468			| Coma Pedrosa			| 2942			|
| Liechtenstein	| 160			| Grauspitz				| 2599			|
| San Marino	| 61			| Monte Titano			| 756			|
| Monaco		| 2.08			| Chemin des Révoires	| 162			|
| Vatican City	| 0.49			| Vatican Hill			| 75			|

Interestingly all of the European microstates are on the list.
For most of them terrain is among the reasons why they are a separate country in the first place.

Notable mentions:

- Tajikistan & Kyrgyzstan (above 7400 m, below 200 000 km²) at the roof of the World.
- In fact Tajikistan along with Georgia and Switzerland would be on the list if not for Bhutan.
- Armenians have Ararat (5165 m) in their hearts (and on the coat of arms) which would allow them to stand above Rwanda in the list.
- Andorra and Liechtenstein are extreme outliers who prevent six countries from getting in the skyline list: Cabo Verde, Comoros, São Tomé and Príncipe, Dominica, Saint Vincent and the Grenadines, Saint Kitts and Nevis.

### Reflection countries

| Country		| Area / km²	| Highest point			| Height / m	|
|---------------|--------------:|-----------------------|--------------:|
| Russia		| 17 075 400	| Mount Elbrus			| 5642			|
| Brazil		| 8 515 767		| Pico da Neblina		| 2994			|
| Australia		| 7 692 024		| Mount Kosciuszko		| 2228			|
| Niger			| 1 267 000		| Mont Idoukal-n-Taghès	| 2022			|
| Mali			| 1 240 192		| Hombori Tondo			| 1153			|
| Mauritania	| 1 030 700		| Kediet et Jill		| 915			|
| Paraguay		| 406 752		| Cerro Tres Kandú		| 842			|
| Burkina Faso	| 274 200		| Mount Tenakourou		| 749			|
| Belarus		| 207 597		| Dzyarzhynskaya Hara	| 345			|
| Lithuania		| 65 300		| Aukštojas Hill		| 294			|
| Denmark		| 43 094		| Møllehøj				| 171			|
| Bahamas		| 13 878		| Mount Alvernia		| 63			|
| Maldives		| 298			| Addu City				| 2				|
<small>Some sources include Mount Vilingili at 5 m for Maldives. Their role in the list would remain unchanged. Changing Australia's definition to include Mawson Peak (2745 m on Heard Island) would let Libya on the list.</small>

As noted in the intro: the whole of Australia is lower than some point in Liechtenstein.
Also Paraguay is larger than you expected, right? And you likely had no mental image of their mountain-ness at all.?

Notable mentions:

- Latvia nearly overlaps with Lithuania on the plot.
- Senegal and Uruguay would be in the list in absence of Belarus.
- Similarly Qatar & Kiribati are blocked by The Bahamas while Marshall Islands and Tuvalu by Maldives.

## Territories

You can also switch the plot above to include dependent territories.
Although a bunch of them find a place on the skyline or the reflection list,
the only country losing its skyline spot is San Marino which yields to Saint Martin.

A curious one is the Mawson Peak.
As the highest point in Heard & McDonald Islands it is part of the skyline — it is a very high point for such a small territory.
But it can also be considered as the highest peak of Australia.
And in that case it would be on the reflection front since 2745 m is still an unusually low highest point for such a large country.

## reSources

- [Data from Wikidata](https://www.wikidata.org)
- [Image of Riga by Svetlana Dik from Shutterstock](https://www.shutterstock.com/image-photo/riga-latvia-march-19-2015-beautiful-267877181) but I messed it up in MS Paint

Some data are hand patched, e.g. removed Mawson Peak (on Heard & McDonald Islands) for Australia in favor of Mount Kosciuszko which is on mainland Australia.
And changed Kuwait's highest point.

Also see:

- [Pareto efficiency on Wikipedia](https://en.wikipedia.org/wiki/Pareto_efficiency)
- [Pareto front on Wikipedia](https://en.wikipedia.org/wiki/Pareto_front)

## About

I got interested in this cross-section because I was aware I'm living in an unusually low country (Latvia) and I had noticed there's only one country in the world that's both bigger and lower than us.

If you see something wrong on this site, let me know by opening an issue on GitHub or try to hit me up on Discord.
