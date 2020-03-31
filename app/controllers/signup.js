 import Controller from '@ember/controller';
 import Ember from 'ember';
//import {validatePresence, validateLength} from 'ember-changeset-validations/validators';
// App = Ember.Application.create();
// export default class SignupController extends Controller{


//     createUser:function(){
//         userName: [
//             validatePresence(true),
//             validateLength({ min: 3, max: 40 })
//         ]


// }

//

// export default class SignupController extends Controller{
//     Ember.validations
//}
//signupController = new SignupController();
// export default Ember.Controller.extend({

//     setUpcontroller: function (controller, model) {
//        // controller.set('index',model )
//     },
//     actions: {
//         createUser() {
//             userName: [
//                 validatePresence(true),
//                 validateLength({min :3, max: 6})
//             ]
//         }
//     }
// });

export default Ember.Controller.extend({
    login: Ember.inject.service(),
    actions: {
        createUser(){
          let {userEmail, userPassword} = this.getProperties('userEmail', 'userPassword');
          this.get("login").login(userEmail, userPassword).then((data)=>{      
              console.log(data)
            this.transitionToPreviousRoute()
          }).catch((reason)=>{
            console.log(`Error: ${reason}`)
          })
        }
      },
      transitionToPreviousRoute(){
          this.transitionToRoute('welcome');
          console.log("workin")  
    }
});

