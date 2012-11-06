---
layout: post
categories: git-log 
---


git log --grep=bh-4 --oneline

    3fc8c74 bh-4 - Move log files out of _posts/ into git-log/.
    ed28886 bh-4 - Make git-log a "category".
    4ad9807 bh-4 - Suppress email address and date lines. Fix formatting of blockquotes.
    d7868d1 bh-4 - Fix blockquotes markup.  	modified:   scripts/git-log
    51709d1 _posts/2012-11-04-bh-4.md
    fceb135 bh-4 - Update git log posts.  	modified:   _posts/2012-11-04-bh-1.md  	modified:   _posts/2012-11-04-bh-2.md  	modified:   _posts/2012-11-04-bh-3.md  	modified:   _posts/2012-11-04-bh-4.md
    612c879 bh-4 - Make commit IDs link to GitHub.
    044bbf8 bh-4 - Generate git log posts to link to project IDs.
    


git log --grep=bh-4

> commit [3fc8c74c533c6ddd03e56abfbe5f3ae2af42a1e7](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/3fc8c74c533c6ddd03e56abfbe5f3ae2af42a1e7)
>
> 
>     bh-4 - Move log files out of _posts/ into git-log/.
>     
>      	renamed:    _posts/2012-11-04-bh-1.md -> git-log/bh-1.md
>      	renamed:    _posts/2012-11-04-bh-2.md -> git-log/bh-2.md
>      	renamed:    _posts/2012-11-04-bh-3.md -> git-log/bh-3.md
>      	renamed:    _posts/2012-11-04-bh-4.md -> git-log/bh-4.md
>      	renamed:    _posts/2012-11-04-bh-5.md -> git-log/bh-5.md
>      	renamed:    _posts/2012-11-04-bh-6.md -> git-log/bh-6.md
>      	modified:   git-log/index.md
>      	modified:   scripts/git-log
> 
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
> commit [d7868d16f95f507d64a7ea1a355b163d069f4783](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/d7868d16f95f507d64a7ea1a355b163d069f4783)
>
> 
>     bh-4 - Fix blockquotes markup.
>      	modified:   scripts/git-log
> 
> commit [51709d1b4f934906147e35579823161b07f340a0](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/51709d1b4f934906147e35579823161b07f340a0)
>
> 
>     _posts/2012-11-04-bh-4.md
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
> commit [612c8793b2bb14041f76233aea8600ead429f737](https://github.com/bryanhirsch/bryanhirsch.github.com/commit/612c8793b2bb14041f76233aea8600ead429f737)
>
> 
>     bh-4 - Make commit IDs link to GitHub.
>     
>      	modified:   scripts/git-log
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