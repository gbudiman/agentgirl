var expect = require('chai').expect;
var ag = require('./AgentGirl.js');

var vanilla_200 = new ag.AgentGirl({ xp_sum: 200 });

expect(vanilla_200.data).to.have.property('xp_sum').equal(200);
expect(vanilla_200.data).not.to.have.property('hp');
expect(vanilla_200
        .modify('hp', 50)
        .data).to.have.property('hp').equal(50);
expect(vanilla_200.data).not.to.have.property('hp');

var sawbones_200 = vanilla_200.add_profession('Sawbones');
expect(vanilla_200.data).to.have.property('professions').of.length(0);
expect(sawbones_200.data).to.have.property('professions').include('Sawbones');
expect(sawbones_200
        .set_professions('Thug', 'Pugilist').data.professions.sort())
  .to.eql(['Pugilist', 'Thug']);