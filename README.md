# agentgirl
AgentGirl. JS factory object for testing Dystopia Rising character build

# Installation
```
npm install agentgirl
```

# Usage
```javascript
var ag = require('agentgirl');

var vanilla_200 = new ag.AgentGirl({ xp_sum: 200 })
console.log(vanilla_200);

// All AgentGirl methods return new object
//  and leave the original object untouched
console.log(vanilla_200
              .modify('hp', 100)
              .modify('mp', 50));

console.log(vanilla_200
              .set_professions('Thug')
              .add_profession('Cook'));
```

```
AgentGirl { data: { xp_sum: 200, professions: [] } }
AgentGirl { data: { xp_sum: 200, professions: [], hp: 100, mp: 50 } }
AgentGirl { data: { xp_sum: 200, professions: [ 'Thug', 'Cook' ] } }
```
