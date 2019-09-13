
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCaQ29_oucrM4YLTAncQq4-T3o9gqhBJaw',
    authDomain: 'nutri-daa14.firebaseapp.com',
    databaseURL: 'https://nutri-daa14.firebaseio.com',
    projectId: 'nutri-daa14',
    storageBucket: 'nutri-daa14.appspot.com',
    messagingSenderId: '944394968956',
    appId: '1:944394968956:web:7bfef3ef7e025245'
  }
};

/*

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.3.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCaQ29_oucrM4YLTAncQq4-T3o9gqhBJaw",
    authDomain: "nutri-daa14.firebaseapp.com",
    databaseURL: "https://nutri-daa14.firebaseio.com",
    projectId: "nutri-daa14",
    storageBucket: "nutri-daa14.appspot.com",
    messagingSenderId: "944394968956",
    appId: "1:944394968956:web:7bfef3ef7e025245"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
