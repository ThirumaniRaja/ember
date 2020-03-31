import Controller from '@ember/controller';
import Ember from 'ember';
export default Ember.Controller.extend({
    login: Ember.inject.service(),
    actions: {
        login(){
          let {userName, password} = this.getProperties('userName', 'password');
          this.get("login").login(userName, password).then((data)=>{      
              console.log(data)
            this.transitionToPreviousRoute()
          }).catch((reason)=>{
            console.log(`Error: ${reason}`)
          })
        }
      },
      transitionToPreviousRoute(){
          this.transitionToRoute('index');
          console.log("workin")  
    }
    });