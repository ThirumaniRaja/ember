import Controller from '@ember/controller';
import Ember from 'ember';
import { validatePresence, validateLength } from 'ember-changeset-validations/validators';

export default Ember.Controller.extend({
    index: Ember.inject.service(),
    actions: {
        navUser(){
          let {EnteruserName, EnteruserEmail} = this.getProperties('EnteruserName', 'EnteruserEmail');
          this.get("index").login(EnteruserName, EnteruserEmail).then((data)=>{      
              console.log(data)
            this.transitionToPreviousRoute()
          }).catch((reason)=>{
            console.log(`Error: ${reason}`)
          })
        }
      },
      transitionToPreviousRoute(){
          this.transitionToRoute('signup');
          console.log("workin")  
    }
});
