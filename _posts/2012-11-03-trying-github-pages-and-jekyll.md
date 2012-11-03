---
layout: architect
title: Trying Jekyll
tags: bh-2 projects
---

### Make GitHub Pages template branches (bh-1)

### Add each branch as a git subtree here: github-pages/templates/template-name

    export TEMPLATE=dinky
    cd _layouts
    cp ../github-pages/templates/$TEMPLATE/index.html $TEMPLATE.html
    vim $TEMPLATE.html 

### Make this into a Jekyll layout template like this:

  Add title token:    {{page.title}}
  And content token:  {{content}}
  Fix paths to CSS and JS. E.g. with vim:
    
    %s/stylesheets/\/templates\/github-pages\/$TEMPLATE\/stylesheets
    %s/javascripts/\/templates\/github-pages\/$TEMPLATE\/javascripts

  E.g. <a href="https://github.com/bryanhirsch/bryanhirsch.github.com/commit/2f6a7748f300f1628cfed48a11efe431b58f7003">2f6a7748f</a>

### copy default welcome text into 2012-11-03-github-pages-welcome-dinky.md

    cd ../_posts/
    vim 2012-11-03-github-pages-welcome-$TEMPLATE.md

   Copy and paste <a href="https://raw.github.com/bryanhirsch/bryanhirsch.github.com/master/_posts/2012-11-03-github-pages-welcome-architect.md">Default Welcome texte</a>

   Make the heaer look like this:
       
      ```
      layout: dinky
      title: GitHub Pages Dinky Template
      ```

### Copy assets.

    cd ../templates/github-pages/
    cp -r ../../github-pages/templates/$TEMPLATE/ $TEMPLATE
    cd $TEMPLATE/
    rm index.html params.json 

  If you look inside this directory, this is all you should have here now:

    ls
    images      javascripts stylesheets

