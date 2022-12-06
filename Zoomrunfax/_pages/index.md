---
layout: defaults/page
permalink: index.html
narrow: true
title: Zoomrunfax
---

{% include components/intro.md %}

<a href="https://github.com/soeun72/Zoomrunfax.git"><button type="button" class="btn btn-secondary">DOWNLOAD <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></button></a>
<a href="https://zoomrunfax.readthedocs.io/en/main/"><button type="button" class="btn btn-dark">DOCUMENTATION <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button></a>

<br><br><br>
<br><br><br>

# **Latest Posts**
<hr>

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}