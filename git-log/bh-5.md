---
layout: post
categories: git-log 
---


git log --grep=bh-5 --oneline

    ed28886 bh-4 - Make git-log a "category".
    4ad9807 bh-4 - Suppress email address and date lines. Fix formatting of blockquotes.
    7cac418 bh-5 - Document change in "Git Log" on blog as project "bh-5".
    ab50021 bh-5 - Update site template to "slate".
    


git log --grep=bh-5

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
> commit [7cac418b47595447c43703b797607e08c20ed3e8](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/7cac418b47595447c43703b797607e08c20ed3e8)
>
> 
>     bh-5 - Document change in "Git Log" on blog as project "bh-5".
> 
> commit [ab500212e4da2904037d5fe0db8cd3fc1ae378c7](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/ab500212e4da2904037d5fe0db8cd3fc1ae378c7)
>
> 
>     bh-5 - Update site template to "slate".
> 
