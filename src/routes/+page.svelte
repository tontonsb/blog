<script>
	import Meta from '$components/meta/Meta.svelte'
	import { lang } from '$lib/lang.js'
	import { t } from '$lib/translations.js'
</script>

<Meta title={$t.home.title} />

{#if $lang === 'en'}

<h1>Nonstandard analysis</h1>

<p>
	This is supposedly a blog.
	Not a lot of articles here.
	Perhapsy moar will appear over time.
	For now — enjoy what's here! :)
</p>

<p>
	If you'd like to get in touch privately, email
	<a href="mailto:juris@glaive.pro">juris@glaive.pro</a>.
	Or see the other contacts in the footer, I might be findable on Discord or somethinq.
</p>

{:else}

<h1>Nestandarta analīze</h1>

<p>
	Šeit teorētiski varētu būt blogs. Sākotnēji tika izveidots vienas esejas
	publicēšanai. Varbūt brīžiem parādīsies vēl kāds raksts. Varbūt ne. Baudiet
	to, kas ir! :)
</p>

<p>
	Ja vēlies privāti sazināties par kādu jautājumu, atraksti pastu uz
	<a href="mailto:juris@glaive.pro">juris@glaive.pro</a>.
</p>

{/if}
