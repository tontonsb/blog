<script>
	import Meta from '$components/meta/Meta.svelte'
	import Calculator from '$components/TenderCalculator.svelte'
</script>

<Meta title="Iepirkumu kalkulators" description="Kalkulators, kas realizē sliktu iepirkumu vērtēšanas modeli." />

# Iepirkumu kalkulators

Šeit vari paeksperimentēt ar kalkulatoru, kurš realizē ļoti sliktu, bet
pēdējos gados nereti izmantotu konkursantu vērtēšanas modeli.

Šajā kalkulatora versijā vari rediģēt ne tikai piedāvātās cenas, bet arī
pozīciju skaitu, nosaukumus un svarus, kā arī dalībnieku skaitu un nosaukumus.

<Calculator editable=true configurable=true />

## Aprēķinu skaidrojums

Konkursanta saņemto punktu skaitu kādā pozīcijā nosaka, dalot labāko no
piedāvātajām cenām ar šī konkursanta piedāvāto cenu. Rezultātu pareizina
ar maksimālo punktu skaitu šai pozīcijā X. Tad labākās cenas piedāvātājs
saņems X punktus, bet pārējo saņemtie punkti būs atkarīgi no labākā
piedāvājuma šajā pozīcijā.
