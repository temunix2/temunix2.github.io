# index.markdown

```markdown
---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

```

# about.markdown

```markdown
---
layout: single
title: About
permalink: /about/
author_profile: true
---

This is my blog page. WIP on the descriptions of the about. 

```

# _config.yml

```yml
# Welcome to Jekyll!
#
# This config file is meant for settings that affect your entire site, values
# which you are expected to set up once and rarely need to edit after that.
# For technical reasons, this file is *NOT* reloaded automatically when you use
# `jekyll serve`. If you change this file, please restart the server process.

# Theme Settings
#
# Review documentation to determine if you should use `theme` or `remote_theme`
# https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/#installing-the-theme

# theme                  : "minimal-mistakes-jekyll"
remote_theme           : "mmistakes/minimal-mistakes"
minimal_mistakes_skin    : "default" # "air", "aqua", "contrast", "dark", "dirt", "neon", "mint", "plum", "sunrise"

# Site Settings
locale                   : "en-US"
title                    : "Jhadruk"
title_separator          : "-"
subtitle                 : # site tagline that appears below site title in masthead
name                     : "Ngawang Tsetan"
description              : "An amazing website."
url                      : # the base hostname & protocol for your site e.g. "https://mmistakes.github.io"
baseurl                  : # the subpath of your site, e.g. "/blog"
repository               : # GitHub username/repo-name e.g. "mmistakes/minimal-mistakes"
teaser                   : # path of fallback teaser image, e.g. "/assets/images/500x300.png"
logo                     : /assets/images/phoenix_1.png # path of logo image to display in the masthead, e.g. "/assets/images/88x88.png"
masthead_title           : # overrides the website title displayed in the masthead, use " " for no title
# breadcrumbs            : false # true, false (default)
words_per_minute         : 200
comments:
  provider               : # false (default), "disqus", "discourse", "facebook", "staticman", "staticman_v2", "utterances", "giscus", "custom"
  disqus:
    shortname            : # https://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-
  discourse:
    server               : # https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963 , e.g.: meta.discourse.org
  facebook:
    # https://developers.facebook.com/docs/plugins/comments
    appid                :
    num_posts            : # 5 (default)
    colorscheme          : # "light" (default), "dark"
  utterances:
    theme                : # "github-light" (default), "github-dark"
    issue_term           : # "pathname" (default)
  giscus:
    repo_id              : # Shown during giscus setup at https://giscus.app
    category_name        : # Full text name of the category
    category_id          : # Shown during giscus setup at https://giscus.app
    discussion_term      : # "pathname" (default), "url", "title", "og:title"
    reactions_enabled    : # '1' for enabled (default), '0' for disabled
    theme                : # "light" (default), "dark", "dark_dimmed", "transparent_dark", "preferred_color_scheme"
  staticman:
    branch               : # "master"
    endpoint             : # "https://{your Staticman v3 API}/v3/entry/github/"
reCaptcha:
  siteKey                :
  secret                 :
atom_feed:
  path                   : # blank (default) uses feed.xml
  hide                   : # true, false (default)
search                   : # true, false (default)
search_full_content      : # true, false (default)
search_provider          : # lunr (default), algolia, google
lunr:
  search_within_pages    : # true, false (default)
algolia:
  application_id         : # YOUR_APPLICATION_ID
  index_name             : # YOUR_INDEX_NAME
  search_only_api_key    : # YOUR_SEARCH_ONLY_API_KEY
  powered_by             : # true (default), false
google:
  search_engine_id       : # YOUR_SEARCH_ENGINE_ID
  instant_search         : # false (default), true
# SEO Related
google_site_verification :
bing_site_verification   :
naver_site_verification  :
yandex_site_verification :
baidu_site_verification  :

# Social Sharing
twitter:
  username               :
facebook:
  username               :
  app_id                 :
  publisher              :
og_image                 : # Open Graph/Twitter default site image
# For specifying social profiles
# - https://developers.google.com/structured-data/customize/social-profiles
social:
  type                   : # Person or Organization (defaults to Person)
  name                   : # If the user or organization name differs from the site's name
  links: # An array of links to social media profiles

# Analytics
analytics:
  provider               : false # false (default), "google", "google-universal", "google-gtag", "custom"
  google:
    tracking_id          :
    anonymize_ip         : # true, false (default)


# Site Author
author:
  name             : "Ngawang Tsetan"
  avatar           : /assets/images/phoenix_1.png # path of avatar image, e.g. "/assets/images/bio-photo.jpg"
  bio              : "Life is suffering. So figure out something worth suffering for."
  location         : "Terminus"
  email            :
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      # url: "mailto:your.name@email.com"
    - label: "Website"
      icon: "fas fa-fw fa-link"
      # url: "https://your-website.com"
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url: "https://twitter.com/"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      # url: "https://facebook.com/"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      # url: "https://github.com/"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      # url: "https://instagram.com/"

# Site Footer
footer:
  links:
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url:
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      # url:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      # url:
    - label: "GitLab"
      icon: "fab fa-fw fa-gitlab"
      # url:
    - label: "Bitbucket"
      icon: "fab fa-fw fa-bitbucket"
      # url:
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      # url:


# Reading Files
include:
  - .htaccess
  - _pages
exclude:
  - "*.sublime-project"
  - "*.sublime-workspace"
  - vendor
  - .asset-cache
  - .bundle
  - .jekyll-assets-cache
  - .sass-cache
  - assets/js/plugins
  - assets/js/_main.js
  - assets/js/vendor
  - Capfile
  - CHANGELOG
  - config
  - Gemfile
  - Gruntfile.js
  - gulpfile.js
  - LICENSE
  - log
  - node_modules
  - package.json
  - package-lock.json
  - Rakefile
  - README
  - tmp
  - /docs # ignore Minimal Mistakes /docs
  - /test # ignore Minimal Mistakes /test
keep_files:
  - .git
  - .svn
encoding: "utf-8"
markdown_ext: "markdown,mkdown,mkdn,mkd,md"


# Conversion
markdown: kramdown
highlighter: rouge
lsi: false
excerpt_separator: "\n\n"
incremental: false


# Markdown Processing
kramdown:
  input: GFM
  hard_wrap: false
  auto_ids: true
  footnote_nr: 1
  entity_output: as_char
  toc_levels: 1..6
  smart_quotes: lsquo,rsquo,ldquo,rdquo
  enable_coderay: false


# Sass/SCSS
sass:
  sass_dir: _sass
  style: compressed # https://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style


# Outputting
permalink: /:categories/:title/
paginate: 5 # amount of posts to show
paginate_path: /page:num/
timezone: # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones


# Plugins (previously gems:)
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache

# mimic GitHub Pages with --safe
whitelist:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache


# Archives
#  Type
#  - GitHub Pages compatible archive pages built with Liquid ~> type: liquid (default)
#  - Jekyll Archives plugin archive pages ~> type: jekyll-archives
#  Path (examples)
#  - Archive page should exist at path when using Liquid method or you can
#    expect broken links (especially with breadcrumbs enabled)
#  - <base_path>/tags/my-awesome-tag/index.html ~> path: /tags/
#  - <base_path>/categories/my-awesome-category/index.html ~> path: /categories/
#  - <base_path>/my-awesome-category/index.html ~> path: /
category_archive:
  type: liquid
  path: /categories/
tag_archive:
  type: liquid
  path: /tags/
# https://github.com/jekyll/jekyll-archives
# jekyll-archives:
#   enabled:
#     - categories
#     - tags
#   layouts:
#     category: archive-taxonomy
#     tag: archive-taxonomy
#   permalinks:
#     category: /categories/:name/
#     tag: /tags/:name/


# HTML Compression
# - https://jch.penibelst.de/
compress_html:
  clippings: all
  ignore:
    envs: development


# Defaults
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: # true
      share: true
      related: true
```

# Gemfile

```
source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem 'github-pages', group: :jekyll_plugins
gem "jekyll"


gem 'jekyll-include-cache'
gem 'faraday-retry'
gem 'webrick'

# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"
gem "minimal-mistakes-jekyll"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

```

# 404.html

```html
---
permalink: /404.html
layout: default
---

<style type="text/css" media="screen">
  .container {
    margin: 10px auto;
    max-width: 600px;
    text-align: center;
  }
  h1 {
    margin: 30px 0;
    font-size: 4em;
    line-height: 1;
    letter-spacing: -1px;
  }
</style>

<div class="container">
  <h1>404</h1>

  <p><strong>Page not found :(</strong></p>
  <p>The requested page could not be found.</p>
</div>

```

# .gitignore

```
_site
.sass-cache
.jekyll-cache
.jekyll-metadata
vendor

```

# .aidigestignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# public
public/robots.txt
public/sitemap.xml
public/sitemap-0.xml

# venv
/wgenv/

# assets
/assets/
/.jekyll-cache/
/_site/


```

# blog/blog.html

```html
---
layout: default
title: Blog
---

{{ content }}

<ul class="taxonomy__index">
  {% assign postsInYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  {% for year in postsInYear %}
    <li>
      <a href="#{{ year.name }}">
        <strong>{{ year.name }}</strong> <span class="taxonomy__count">{{ year.items | size }}</span>
      </a>
    </li>
  {% endfor %}
</ul>

{% assign entries_layout = page.entries_layout | default: 'list' %}
{% assign postsByYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in postsByYear %}
  <section id="{{ year.name }}" class="taxonomy__section">
    <h2 class="archive__subtitle">{{ year.name }}</h2>
    <div class="entries-{{ entries_layout }}">
      {% for post in year.items %}
        {% include archive-single.html type=entries_layout %}
      {% endfor %}
    </div>
    <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
  </section>
{% endfor %}
```

# _posts/2024-02-07-welcome-to-jekyll.markdown

```markdown
---
layout: single
title:  "Welcome to Jhardruk!"
date:   2024-02-07 11:46:06 -0500
categories: jekyll update
published: false
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

```

# _posts/2024-02-07-Jhadruk-post-one.markdown

```markdown
---
layout: single
title:  "Paul Graham Essay Responses"
date:   2024-02-07 16:32:06 -0500
categories: jekyll update
header:
  image: /assets/images/need_to_read_img.png
---

The Need to Read - ([link](https://paulgraham.com/read.html))


# The Journey into Writing and Reading

I am still a beginner in the art of writing. Although I have written words all my life throughout school, I don’t believe writing was something that I ever thought of as an important skill to learn. But reading was definitely something that I was very good at, and I read a lot of books. Mostly sci-fi and fantasy, but the occasional non-fiction books that became more interesting to me as I grew older.

So when I read **PG's essay on the need to read**, I completely agree, but his reasons to read are new reasons to me. Those would not be the reasons I would think we need to read. To me, the first things that come to mind are to explore your imagination and creativity. When I read things, especially the fiction books, my mind is able to create worlds and see things so vividly, almost better than my eyes could.

## The Power of Reading

I now think about this reading in the sense that it can be helpful to learn to write as well, which is the new journey I am embarking on. To help craft and sharpen my thinking. Often times, I run wild with imagination, but when attempting to describe them to people, I struggle. But is the art of writing almost in the same way as the art of translating, enslaving the imagination into the mere form of text? Where in my mind there were these amazing and magical thoughts and emotions, by putting them into text, I would be limiting them to a lesser form.

## Writing as a Form of Magic

Again, I would counter and say that my inability as a writer is the problem, not the process of capturing these ideas. Think about it, for example, how some amazing writers are able to invoke these emotions in millions of people that read the text. These are the true magicians, as they are able to bottle the genie in the lamp. While people who are not skilled at the magic of writing are unable to fully capture the elusive genie in the lamp.

But fear not, because just the mere fact that you are able to have these imaginative thoughts is a good sign for the art of learning to write is easier than the art of learning to imagine.

## The Laziness of Modern Consumption

The other point I wanted to make was that people are now so lazy in their forms of consumption. Might need to look into the science of this, but I would think that people that are watching TV, or movies are using less or different parts of their brain than when reading. There is less to imagine because when you watch something, a director has chosen the look, color, setting, tone, music, and mood of the scene, while reading a book your brain is creating all that in the background, even if you don’t even realize it is doing it.

Although it is good to appreciate the art form that is moving pictures but also good to acknowledge the need for our society to read books as well. I believe reading books is on a decline and hope that we can bring it back.



```

# _layouts/single.html

```html
---
layout: default
---

{% if page.header.overlay_color or page.header.overlay_image or page.header.image %}
  {% include page__hero.html %}
{% elsif page.header.video.id and page.header.video.provider %}
  {% include page__hero_video.html %}
{% endif %}

{% if page.url != "/" and site.breadcrumbs %}
  {% unless paginator %}
    {% include breadcrumbs.html %}
  {% endunless %}
{% endif %}

<div id="main" role="main">
  {% include sidebar.html %}

  <article class="page" itemscope itemtype="https://schema.org/CreativeWork">
    {% if page.title %}<meta itemprop="headline" content="{{ page.title | markdownify | strip_html | strip_newlines | escape_once }}">{% endif %}
    {% if page.excerpt %}<meta itemprop="description" content="{{ page.excerpt | markdownify | strip_html | strip_newlines | escape_once }}">{% endif %}
    {% if page.date %}<meta itemprop="datePublished" content="{{ page.date | date_to_xmlschema }}">{% endif %}
    {% if page.last_modified_at %}<meta itemprop="dateModified" content="{{ page.last_modified_at | date_to_xmlschema }}">{% endif %}

    <div class="page__inner-wrap">
      {% unless page.header.overlay_color or page.header.overlay_image %}
        <header>
          {% if page.title %}<h1 id="page-title" class="page__title" itemprop="headline">{{ page.title | markdownify | remove: "<p>" | remove: "</p>" }}</h1>{% endif %}
          {% include page__meta.html %}
        </header>
      {% endunless %}

      <section class="page__content" itemprop="text">
        {% if page.toc %}
          <aside class="sidebar__right {% if page.toc_sticky %}sticky{% endif %}">
            <nav class="toc">
              <header><h4 class="nav__title"><i class="fas fa-{{ page.toc_icon | default: 'file-alt' }}"></i> {{ page.toc_label | default: site.data.ui-text[site.locale].toc_label | default: "On this page" }}</h4></header>
              {% include toc.html sanitize=true html=content h_min=1 h_max=6 class="toc__menu" skip_no_ids=true %}
            </nav>
          </aside>
        {% endif %}
        {{ content }}
        {% if page.link %}<div><a href="{{ page.link }}" class="btn btn--primary">{{ site.data.ui-text[site.locale].ext_link_label | default: "Direct Link" }}</a></div>{% endif %}
      </section>

      <footer class="page__meta">
        {% if site.data.ui-text[site.locale].meta_label %}
          <h4 class="page__meta-title">{{ site.data.ui-text[site.locale].meta_label }}</h4>
        {% endif %}
        {% include page__taxonomy.html %}
        {% include page__date.html %}
      </footer>

      {% if page.share %}{% include social-share.html %}{% endif %}

      {% include post_pagination.html %}
    </div>

    {% if jekyll.environment == 'production' and site.comments.provider and page.comments %}
      {% include comments.html %}
    {% endif %}
  </article>

  {% comment %}<!-- only show related on a post page when `related: true` -->{% endcomment %}
  {% if page.id and page.related and site.related_posts.size > 0 %}
    <div class="page__related">
      <div align="center" style="margin: 1em 0;">
        <ins class="adsbygoogle"
              style="display:block; border-bottom: initial;"
              data-ad-client="ca-pub-7328585512091257"
              data-ad-slot="3049671934"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
      </div>
      <h2 class="page__related-title">{{ site.data.ui-text[site.locale].related_label | default: "You May Also Enjoy" }}</h2>
      <div class="grid__wrapper">
        {% for post in site.related_posts limit:4 %}
          {% include archive-single.html type="grid" %}
        {% endfor %}
      </div>
    </div>
  {% comment %}<!-- otherwise show recent posts if no related when `related: true` -->{% endcomment %}
  {% elsif page.id and page.related %}
    <div class="page__related">
      <h2 class="page__related-title">{{ site.data.ui-text[site.locale].related_label | default: "You May Also Enjoy" }}</h2>
      <div class="grid__wrapper">
        {% for post in site.posts limit:4 %}
          {% if post.id == page.id %}
            {% continue %}
          {% endif %}
          {% include archive-single.html type="grid" %}
        {% endfor %}
      </div>
    </div>
  {% endif %}
</div>
```

# _layouts/posts.html

```html
---
layout: archive
---

{{ content }}

<ul class="taxonomy__index">
  {% assign postsInYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  {% for year in postsInYear %}
    <li>
      <a href="#{{ year.name }}">
        <strong>{{ year.name }}</strong> <span class="taxonomy__count">{{ year.items | size }}</span>
      </a>
    </li>
  {% endfor %}
</ul>

{% assign entries_layout = page.entries_layout | default: 'list' %}
{% assign postsByYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in postsByYear %}
  <section id="{{ year.name }}" class="taxonomy__section">
    <h2 class="archive__subtitle">{{ year.name }}</h2>
    <div class="entries-{{ entries_layout }}">
      {% for post in year.items %}
        {% include archive-single.html type=entries_layout %}
      {% endfor %}
    </div>
    <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
  </section>
{% endfor %}
```

# _layouts/archive.html

```html
---
layout: default
---

{% if page.header.overlay_color or page.header.overlay_image or page.header.image %}
  {% include page__hero.html %}
{% elsif page.header.video.id and page.header.video.provider %}
  {% include page__hero_video.html %}
{% endif %}

{% if page.url != "/" and site.breadcrumbs %}
  {% unless paginator %}
    {% include breadcrumbs.html %}
  {% endunless %}
{% endif %}

<div id="main" role="main">
  {% include sidebar.html %}

  <div class="archive">
    {% unless page.header.overlay_color or page.header.overlay_image %}
      <h1 id="page-title" class="page__title">{{ page.title }}</h1>
    {% endunless %}
    {{ content }}
  </div>
</div>
```

# _data/navigation.yml

```yml
main: 
  - title: "About"
    url: /about/
```

