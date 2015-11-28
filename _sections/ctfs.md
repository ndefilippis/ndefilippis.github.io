---
layout: section
title: CTFs
---



I participate in various online computer security competitions (CTFs), and I think I'm pretty good ;)
<div class = "ctf">
	<ul style="text-align:center;">
	{% for ctf in site.ctf_cards %}
	<li class = "horizontal ctf-card" style="width:32%">
		<div style="background-image:url({{ctf.imageurl}})"></div>
	</li>
	{%endfor%}
	</ul>
</div>
