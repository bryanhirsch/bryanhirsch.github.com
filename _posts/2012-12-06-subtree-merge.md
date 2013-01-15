---
layout: post
title: git subtree notes
tags: git git-subtree
---

git subtree notes
==================

Checkout an older version:

    git subtree merge --squash --prefix=projects/old-mother-hubbard f28486e


If you add/pull, then merge to an older commit, and then want to pull to catch up to HEAD again, you have to --squash, like this:

    git subtree pull --squash --prefix=projects/old-mother-hubbard ../old-mother-hubbard/ master


Note: There's no "fetch" with subtree. You have to pull and then "merge/squash" to a particular version (commit).


Explanation from documentation on git-subtree --squash option:

    with '--squash', you can switch back and 
    forth between different versions of a subtree, rather
    than strictly forward.  'git subtree merge --squash'
    always adjusts the subtree to match the exactly
    specified commit, even if getting to that commit would
    require undoing some changes that were added earlier.


