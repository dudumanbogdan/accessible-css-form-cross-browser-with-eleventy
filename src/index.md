---
title: "hello world - home page"
layout: "base.njk"
templateEngineOverride: njk,md
---

This is a home page content

## From the blog

{% for post in collections.postsTag | randomPost %}
<a href="{{post.url}}">{{post.data.title}}</a>
{% endfor %}

## Articles

<ul>
{% for article in collections.articles %}
<li><a href="{{ article.url}}">{{ article.data.title }}</a></li>
{% endfor %}
</ul>
