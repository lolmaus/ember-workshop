import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { alias } from '@ember/object/computed';

const Person = EmberObject.extend({
  name: null,
});

export default Controller.extend({
  person: null,

  init() {
    this.set('person', Person.create({ name: 'John Doe'}));
  },

  name: alias('person.name'),

  actions: {
    setName(event) {
      this.set('name', event.target.value);
    },
  },
});
asdl;fjasdkl;jfl;asodj
