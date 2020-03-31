

// export default class IndexService extends Service {
// }
import Service from '@ember/service';
import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    login(userName, email) {
        console.log("login",userName,email)
        return new Promise((resolve, reject) => {
            if (userName !== '' && userName !== undefined && email !== '' && email !== undefined) {
                resolve(userName)
            } else {
                reject("Username and Email can't be empty")
            }
        })
    }
})





