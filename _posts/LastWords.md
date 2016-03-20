---
layout: post
title: NeoCTF - Last Words Write-Up (250)
date: 3-18-2016
author: Nick DeFilippis
---

*tl;dr*
===
Unzip .doc file and type words in the thumbnail one letter to the left on the keyboard.

*Write-Up*
===
For this problem, we are given a .doc file. Trying to open it in Word gives an error,
meaning that the document is corrupt. However, .doc files can be opened with any
unzipping program. Extracting the files reveals three thumbnail pictures
[img/preview.png]

At first glance, the document looks like the problem idea for Combinations,
followed by some gibberish, so I initially thought the gibberish was some
sort of cipher. However, in the middle of the last line I noticed the letters 'g;sh'.
Glancing at my keyboard, I realized if you shifted each letter over to the right
by one, it would spell out the word 'flag'. Continuing in this fashion reveals
the rest of the message:

help me!!! before i go. here is the flag: flag{d3ad_typ1ng}
