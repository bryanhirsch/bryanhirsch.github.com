---
layout: post
categories: git-log 
---


git log --grep=bh-3 --oneline

    ed28886 bh-4 - Make git-log a "category".
    4ad9807 bh-4 - Suppress email address and date lines. Fix formatting of blockquotes.
    fceb135 bh-4 - Update git log posts.  	modified:   _posts/2012-11-04-bh-1.md  	modified:   _posts/2012-11-04-bh-2.md  	modified:   _posts/2012-11-04-bh-3.md  	modified:   _posts/2012-11-04-bh-4.md
    bb1dda6 bh-3 - Document bh-3 in git log project ID list.
    7249b19 bh-3 - Leave example posts hard-coded to demo particular templates.
    27a60a2 bh-3 - Create a default template for entire site (that can be easily changed in a single place).
    8d78fd0 bh-3 - Make a post template. One place to update all templates.
    


git log --grep=bh-3

> commit [ed28886d0f603d246bcbbe246117b351720ee736](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/ed28886d0f603d246bcbbe246117b351720ee736)
>
> 
>     bh-4 - Make git-log a "category".
>     
>       Now paths to logs look like this:
>     
>         /git-log/YYYY-MM-DD-bh-n.html
>     
>      	deleted:    _posts/2012-11-03-git-log.md <--- Move this to /git-log/index.html
>      	modified:   _posts/2012-11-04-bh-1.md
>      	modified:   _posts/2012-11-04-bh-2.md
>      	modified:   _posts/2012-11-04-bh-3.md
>      	modified:   _posts/2012-11-04-bh-4.md
>      	modified:   _posts/2012-11-04-bh-5.md
>      	new file:   git-log/index.md              <--- Make this the "home" page for git-log pages.
>                                                      Jekyll converts index.md to index.html
>      	modified:   scripts/git-log
> 
> commit [4ad98076144e9e89bc95e542cb1ba7553d4e56f9](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/4ad98076144e9e89bc95e542cb1ba7553d4e56f9)
>
> 
>     bh-4 - Suppress email address and date lines. Fix formatting of blockquotes.
>     
>      	modified:   _posts/2012-11-04-bh-1.md
>      	modified:   _posts/2012-11-04-bh-2.md
>      	modified:   _posts/2012-11-04-bh-3.md
>      	modified:   _posts/2012-11-04-bh-4.md
>      	modified:   _posts/2012-11-04-bh-5.md
>      	modified:   scripts/git-log
> 
> commit [fceb135d33915a1d8f44d431d283f80d5fe16780](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/fceb135d33915a1d8f44d431d283f80d5fe16780)
>
> 
>     bh-4 - Update git log posts.
>      	modified:   _posts/2012-11-04-bh-1.md
>      	modified:   _posts/2012-11-04-bh-2.md
>      	modified:   _posts/2012-11-04-bh-3.md
>      	modified:   _posts/2012-11-04-bh-4.md
> 
> commit [bb1dda60cf79b7f13680c46427220abf4f7da17e](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/bb1dda60cf79b7f13680c46427220abf4f7da17e)
>
> 
>     bh-3 - Document bh-3 in git log project ID list.
> 
> commit [7249b1968e70923d640f89982308b36b56054b91](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/7249b1968e70923d640f89982308b36b56054b91)
>
> 
>     bh-3 - Leave example posts hard-coded to demo particular templates.
> 
> commit [27a60a25711967bd614e00c1c658fe245c2d6841](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/27a60a25711967bd614e00c1c658fe245c2d6841)
>
> 
>     bh-3 - Create a default template for entire site (that can be easily changed in a single place).
> 
> commit [8d78fd0db1f93974dd4f7c8fc61eb46b22be9452](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/8d78fd0db1f93974dd4f7c8fc61eb46b22be9452)
>
> 
>     bh-3 - Make a post template. One place to update all templates.
>     
>     This just prints {{ content }} .
>     
>     It creates a single, central place for updating all the posts' templates
>     without changing them manually one-by-one.
>     
>      	new file:   _layouts/post.html
>     
>      	modified:   _posts/2012-11-03-github-pages-test.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-architect.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-dinky.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-hack.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-leapday.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-merlot.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-midnight.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-minimal.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-modernist.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-slate.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-tactile.md
>      	modified:   _posts/2012-11-03-github-pages-welcome-time-machine.md
>      	modified:   _posts/2012-11-03-projects.md
>      	modified:   _posts/2012-11-03-subtree.md
>      	modified:   _posts/2012-11-03-trying-github-pages-and-jekyll.md
> 
