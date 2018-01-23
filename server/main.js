import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('adminCheck', function(){
  if (this.userId) {
    return Meteor.users.find({ _id: this.userId }, { fields: { admin: 1 } });
  } else {
    this.ready();
  }
});
