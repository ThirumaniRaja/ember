import Service from '@ember/service';
import Ember from 'ember';
//export class LoginService extends Service { }

export default Ember.Service.extend({

    store: Ember.inject.service(),
    login(EnteruserName, userPassword) {
        console.log("signup",EnteruserName,userPassword)
        return new Promise((resolve, reject) => {
            if (EnteruserName !== '' && EnteruserName !== undefined && userPassword !== '' && userPassword !== undefined) {
                resolve(EnteruserName)
            } else {
                reject("Username and password can't be empty")
            }
        })
    }
})





