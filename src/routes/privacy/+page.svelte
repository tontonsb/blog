<script>
	import Meta from '$components/meta/Meta.svelte'
	import { lang } from '$lib/lang.js'
	import { t } from '$lib/translations.js'
</script>

<Meta title={$t.privacy.title} description={$t.privacy.description} />

{#if $lang === 'en'}

<h1>Privacy policy</h1>

<p>I'm trying to ensure your visit is as close to anonymous as possible.</p>

<p>
	No cookies are placed here. Users are not identified by other means such as
	browser fingerprinting either.
	We are storing the language choice in your browser's local storage, but that is not sent to the server and cannot be used to identify you.
</p>

<p>
	The site is hosted on GitHub <a href="https://pages.github.com/">Pages</a>.
	According to their <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection">information</a>,
	they log visitor IP addresses.
</p>

<p>
	Anonymized visit statistics are collected using <a href="https://matomo.org/">Matomo</a>.
</p>

{:else}

<h1>Datu politika</h1>

<p>Cenšos nodrošināt, lai tavs apmeklējums būtu pēc iespējas tuvāk anonīmam.</p>

<p>
	Šeit netiek likti nekādi cepumi. Neveicam lietotāju identificēšanu arī pēc
	citiem parametriem kā pārlūka īpatnībām utml.
	Valodas izvēle tiek glabāta tava pārlūka local storagē, tā netiek sūtīta uz serveri un netiek izmantota apmeklētāju identificēšanai.
</p>

<p>
	Vietne izvietota GitHub <a href="https://pages.github.com/">Pagēs</a>.
	Saskaņā ar viņu sniegto <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection">informāciju</a>,
	viņi savos žurnālos reģistrē apmeklētāju IP adreses.
</p>

<p>
	Tiek ievākta anonimizēta apmeklējumu statistika ar <a href="https://matomo.org/">Matomo</a>.
</p>

{/if}
