---
title: Vai tu rubī HTML? Elementi un semantika
date: ""
intro: Paspriedīsim, ko HTMLā derētu zināt par elementiem
---

<script>
import {Karatsuba, Classic} from '@tontonsb/karatsuba-display'
import Quiz from '$components/quiz/Quiz.svelte'
import Question from '$components/quiz/Question.svelte'
import Answer from '$components/quiz/Answer.svelte'
</script>

# Vai tu rubī HTML?

Nē, nu kaut kāda ziņā gan jau rubī. Un kaut ko, droši vien, arī ne tik ļoti.
Bet šoreiz parunāsim konkrēti par HTML elementiem. Ko par viņiem derētu zināt?
Un kas ir tie semantiskie štrunti?

Jā, HTML ir tā vieglā daļa. Pat neesot programmēšanas valoda. Nu labi. Bet
sagatavoju testiņu, lai vari pārbaudīt savas zināšanas dažās āķīgākās niansēs.


TODO: uztaisīt quiz widgetu

<Quiz>
	<Question text="1. jautājums">
		<Answer>a1</Answer>
		<Answer correct>a2</Answer>
	</Question>
	<Question text="2.jautājums">
		<Answer>b1</Answer>
	</Question>
</Quiz>

Kad lieto cite?
- 

Kurš no šiem elemenšiem ir depreķēts?


Kuru elementu lieto, lai [kaut kas reāls]
- progress
- details
- ...


Kuru elementu lieto, lai [kaut kas nereāls]
- progress
- details
- nav tāda
- ...

Kura no šīm birkām nav ģeldīga?
`<a>`
`<b>`
`<e>`
`<i>`
`<p>`
`<q>`
`<s>`
`<u>`

Ar kuru nevar iegult pdfu?

object
iframe
embed
portal
samp


piebilde: šīs lietas cilvēkam nav jāzina. arī speciālistam nav vērts galvā turēt elementu katalogu. toties jāzina ir...

TODO: aprakstīt par semantika skalu no nesemantiskiem līdz pavisam semantiskiem elementiem
parunāt par to, ka b un i nav depreķēti vai obsolēti utt


TODO: nākotnē angliski patulkot
TODO: nākotnē otrā daļa par parseri, piem to, ka body tagam var vēlāk atriņus iedot. un ka headā nevar `<div>` ielikt. un ka title ir gandrīz vienīgais obligātais elements.
