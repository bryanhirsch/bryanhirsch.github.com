---
layout: post
categories: git-log 
---


git log --grep=bh-1 --oneline

    ed28886 bh-4 - Make git-log a "category".
    4ad9807 bh-4 - Suppress email address and date lines. Fix formatting of blockquotes.
    fceb135 bh-4 - Update git log posts.  	modified:   _posts/2012-11-04-bh-1.md  	modified:   _posts/2012-11-04-bh-2.md  	modified:   _posts/2012-11-04-bh-3.md  	modified:   _posts/2012-11-04-bh-4.md
    044bbf8 bh-4 - Generate git log posts to link to project IDs.
    523c037 bh-1 - Add links to GitHub Pages templates.
    deb9821 bh-1 - Switch to using static GitHub Pages Architect template.
    7dfc504 bh-1 - GitHub pages apparently does not like symlinks. Try copying files from github-pages/templates/minimal.
    e22162b bh-1 - Use minimal for bryanhirsch.github.com/index.html.
    c0cdcec bh-1 - Remove everything from docroot.
    


git log --grep=bh-1

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
> commit [044bbf87eeacaea819ee9bc3be3ded13699fa0f6](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/044bbf87eeacaea819ee9bc3be3ded13699fa0f6)
>
> 
>     bh-4 - Generate git log posts to link to project IDs.
>     
>      	modified:   _posts/2012-11-03-git-log.md
>      	new file:   _posts/2012-11-04-bh-1.md
>      	new file:   scripts/git-log
> 
> commit [523c037a20f00948f51473262370fa5c2b57b5e2](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/523c037a20f00948f51473262370fa5c2b57b5e2)
>
> 
>     bh-1 - Add links to GitHub Pages templates.
> 
> commit [deb9821e6ead4564599b93d844b4b395760149fe](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/deb9821e6ead4564599b93d844b4b395760149fe)
>
> 
>     bh-1 - Switch to using static GitHub Pages Architect template.
> 
> commit [7dfc504b975ea1e2cf3af029d6916ad6e8acdcaf](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/7dfc504b975ea1e2cf3af029d6916ad6e8acdcaf)
>
> 
>     bh-1 - GitHub pages apparently does not like symlinks. Try copying files from github-pages/templates/minimal.
> 
> commit [e22162b5a003a213299c29786d34a43ec02a1c2c](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/e22162b5a003a213299c29786d34a43ec02a1c2c)
>
> 
>     bh-1 - Use minimal for bryanhirsch.github.com/index.html.
> 
> commit [c0cdcec3520a4c326a502583a9f2a77a213fa8b1](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/c0cdcec3520a4c326a502583a9f2a77a213fa8b1)
>
> 
>     bh-1 - Remove everything from docroot.
> 