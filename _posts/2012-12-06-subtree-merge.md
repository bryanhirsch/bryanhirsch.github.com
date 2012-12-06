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
