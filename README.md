Castle
======

Terminal utils for happy scripting


Installing
----------

```
npm install castle
```


API
---

### castle.prompt(message, options);

**message** (string, required) — message to display 
**options** (object, optional) — see options below:

| option | type | default value | description |
| ------------ | ------------ | ------------ | ------------ |
| allowEmpty | boolean | true | If `false` will ask again on empty input |
| defaultValue | string | undefined | Uses default value on empty input |
| style | string | prompt.Style.Default | Specifies prompt color, supported values: `prompt.Style.Default`, `prompt.Style.Dangerous` (red) |


```js
const {prompt} = require('castle');

prompt('Your name');
```

![prompt](./assets/prompt.png)

```js
const name = await prompt('Your name', {defaultValue: 'Anonymous'});
```

![prompt with default value](./assets/prompt_with_default.png)


### castle.confirm(message, options);

**message** (string, required) — message to display 
**options** (object, optional) — see options below:

| option | type | default value | description |
| ------------ | ------------ | ------------ | ------------ |
| allowEmpty | boolean | true | If `false` will ask again on empty input, otherwise treats empty input as negative answer |
| defaultValue | boolean | undefined | Uses default value on empty input |
| style | string | prompt.Style.Default | Specifies prompt color, supported values: `confirm.Style.Default`, `confirm.Style.Dangerous` (red) |


```js
const {confirm} = require('castle');

const isConfirmed = await confirm('Proceed?');
```

![confirm](./assets/confirm.png)
