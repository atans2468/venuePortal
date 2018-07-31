import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import firebase from 'firebase';

@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  text: string = "";
  posts: any[] = [];
  pageSize: number = 10;
  cursor: any;
  infiniteEvent: any;
  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }

  post(){
    firebase.firestore().collection("posts").add({
      text: this.text,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      owner: firebase.auth().currentUser.uid,
      owner_name: firebase.auth().currentUser.displayName
    }).then( async (doc) =>{
      console.log(doc);

      // if(this.image){
      //   await this.upload(doc.id)
      // }

      this.text = '';
      this.image = undefined;

      let toast = this.toastCtrl.create({
        message: "Your post was submitted successfully",
        duration: 3000,
        position: 'top'
      }).present();

      this.getPosts();

    }).catch((err) => {
      console.log(err);
    })
  }

  getPosts(){
    
    this.posts = [];

    let loading = this.loadCtrl.create({
      content: "Loading feed..."
    });

    loading.present();

    let query = firebase.firestore().collection("posts").orderBy("created", "desc").limit(this.pageSize);
    
    // ~~~!!!REALTIME UPDATES!!!~~~
    // query.onSnapshot((snapshot) => {
    //   let changedDocs = snapshot.docChanges();

    //   changedDocs.forEach((change) => {
    //     if(change.type == 'added'){
    //       //todo

    //     }else if (change.type == 'modified'){
    //       //todo
    //       console.log("Document with ID " + change.doc.id + " has been modified!")
    //     }else if (change.type == 'removed'){
    //       //todo

    //     }
    //   })
    // })

    query.get().then((docs) => {

      docs.forEach((doc) => {
        this.posts.push(doc);
      })
      loading.dismiss();

      console.log(this.posts);

      this.cursor = this.posts[this.posts.length - 1];

    }).catch((err) => {
      console.log(err);
    })

  }

}
