---
sidebar: auto
---

```flowchart
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
```

> This repository used to be a fork of [ulivz/vuepress-plugin-flowchart](https://github.com/ulivz/vuepress-plugin-flowchart) but the original one is no longer maintained, so here's our own. Thanks for the awesome work made by [ulivz](https://github.com/ulivz).


## Install

::: warning Note 
This plugin requires VuePress >= 1.0.0
:::

```bash
yarn add vuepress-plugin-flowchart-js -D
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    'flowchart-js'
  ]
}
```

## Syntax

<pre class="language-markdown"><code>```flowchart [preset]
    
    <!-- Your flowchart code here. -->
    
```</code></pre>

`vuepress-plugin-flowchart` leverages [flowchart.js](https://github.com/adrai/flowchart.js) under the hook.

Available presets for now:

- `vue` (default)
- `ant`

View the current available preset [here](https://github.com/wxsms/vuepress-plugin-flowchart-js/tree/master/lib/presets), feel free to submit your own preset. : )

### Start & End

- `[Variable]->start: [Text]`
- `[Variable]->end: [Text]`

<pre class="language-markdown"><code>```flowchart
st=>start: Start
e=>end: End

st->e
```</code></pre>

```flowchart
st=>start: Start
e=>end: End

st->e
```

### Operation

- `[Variable]->operation: [Text]`

<pre class="language-markdown"><code>```flowchart
process=>operation: Operation
e=>end: End

process->e
```</code></pre>

```flowchart
process=>operation: Operation
e=>end: End

process->e
```


### Inputoutput

- `[Variable]->inputoutput: [Text]`

<pre class="language-markdown"><code>```flowchart
process=>inputoutput: Inputoutput
e=>end: End

process->e
```</code></pre>

```flowchart
process=>inputoutput: Inputoutput
e=>end: End

process->e
```


### Subroutine

- `[Variable]->subroutine: [Text]`

<pre class="language-markdown"><code>```flowchart
process=>subroutine: Subroutine
e=>end: End

process->e
```</code></pre>

```flowchart
process=>subroutine: Subroutine
e=>end: End

process->e
```


### Condition

- `[Variable]->condition: [Text]`
- `[Variable]([yesText])->[Position]`
- `[Variable]([noText])->[Position]`

<pre class="language-markdown"><code>```flowchart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
```</code></pre>

```flowchart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
```


### Parallel

- `[Variable]->parallel: [Text]`
- `[Variable](path1, direction)->[Position]`
- `[Variable](path1, direction)->[Position]`

<pre class="language-markdown"><code>```flowchart
para=>parallel: parallel tasks
process=>operation: Process
e=>end: End

para(path1, bottom)->process->e
para(path2)->e
```</code></pre>

```flowchart
para=>parallel: parallel tasks
process=>operation: Process
e=>end: End

para(path1, bottom)->process->e
para(path2)->e
```

## Showcase

### #1 Ordinary process

<pre class="language-markdown"><code>```flowchart
stage1=>operation: Stage 1
stage2=>operation: Stage 2
stage3=>operation: Stage 3

stage1->stage2->stage3
```</code></pre>

```flowchart
stage1=>operation: Stage 1
stage2=>operation: Stage 2
stage3=>operation: Stage 3

stage1->stage2->stage3
```

### #2 Complex process

<pre class="language-markdown"><code>```flowchart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```</code></pre>

```flowchart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

### #3 Ant Preset

<pre class="language-markdown"><code>```flowchart ant
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
```</code></pre>

```flowchart ant
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
```

## Changes from the original

1. Use <code>\`\`\`flowchart</code> and <code>\`\`\`</code> as default wrapping syntax instead of `@flowstart` and `@flowend`.
1. Remove redundant scrollbars from the charts.
1. Skip SSR by wrapping chart components with `<ClientOnly>`, because:
    1. Normally the SVG tags make no sense to search engines.
    1. Avoid problems.
1. Fix a problem while sometimes charts rendered multiple times in a container.