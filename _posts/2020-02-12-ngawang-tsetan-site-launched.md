---
layout: post
title: "NBA Analytics"
date: 2020-02-12
---

Well. Finally got around to putting this old website together. Neat thing about it - powered by [Jekyll](http://jekyllrb.com) and I can use Markdown to author my posts. It actually is a lot easier than I thought it was going to be.
<div class="post-style" itemprop="articleBody">
      With the increase in NBA analytics, I decided to take a look at NBA player salaries and whether Advanced Stats or Regular Stats played a larger role in predicting salaries.
      

<h2>NBA Salaries</h2>

<h2 id="overview">Overview</h2>

<p>Basketball has always been my favorite sport and in recent years there has been a new trend towards basketball analytics. This allows me to geek out even further about basketball because now I can combine my passion for basketball with data science allowing me to enjoy the game even further. Although it has become pretty common place for NBA front offices to be stacked with analytics people all the way to the head of teams i.e. Daryl Morey, Sam Hinkie this was not always the case. Back in the early days of basketball analytics people were made fun of by players and NBA vets as people that never played the game and wouldn&rsquo;t understand through just the numbers.</p>

<p>That may have been the case in the early days because the numbers that analysts relied on were the basic stats like rebounds, points, steals but those were not able to capture the more nuanced plays that some players made but were not captured on the stat sheet. And so new metrics were developed to take into consideration these intangibles. The focus of this project will be one using regular and advanced stats will I be able to help players determine their salary in the coming years and two has advanced stats changed the way general mangers determine how to pay players.</p>

<h2 id="gathering-cleaning-data">Gathering &amp; Cleaning Data</h2>

<p>To gather the data, I scraped the website, basketball-reference.com, which has the best source in NBA statistics in my opinion. This was my first attempt at scraping a website and after looking through three options (Beautiful Soup, Selenium and Scrapy) I decided Selenium was the best option in this case because I had to click through the website to toggle some of the settings and Selenium provided the best solution  to that as it lets you interact with the browser.</p>

<p>Selenium  automates browsers and allowed me to open a web browser and surf the internet all through a few lines of python. I have included the link to their <a href="https://www.seleniumhq.org/" target="_blank">website</a> in case any one is interested in using it as well. And if anyone is interested in looking at my code for scraping basketball-reference you can check it out in my github page. In order to make it easier for me to load the data I combined all the different years and types of data into one csv file.</p>

<p>Some of the key things I needed to do before I was able to combine the data into a clean csv file was to check out missing data, any outliers, formatting errors, making sure data was set as the proper types (i.e. floats, ints, and dates). The next step is after cleaning the data is deciding what we want to do with the data. Since, we are aiming to predict player salaries and that is a continuous variable we will use linear regression model.</p>

<p>In order to use the linear regression model there are a few key assumptions we need to check for.</p>

<h2 id="modeling">Modeling</h2>

    </div>
