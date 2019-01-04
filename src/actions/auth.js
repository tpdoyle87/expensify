import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider
} from '../firebase/firebase'


export const login = (uid) => ({
  type: "LOGIN",
  uid
})

export const startLoginGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).catch((e) => {
      if (e === 'auth/account-exists-with-different-credential') {
        const pendingCred = e.credential;
        const email = e.email;
        firebase.auth.fetchSignInMethodsForEmail(email).then((methods) => {
          if (methods[0] === 'password') {
            const password = firebase.auth.promptUserForPassword();
            firebase.auth.signInWithEmailAndPassword(email, password).then((user) => {
              return user.link(pendingCred)
            }).then(() => {
              firebase.auth.goToApp()
            });
            return;
          }
          const provider = firebase.auth.getProviderForProviderId(methods[0]);
          firebase.auth.signInWithPopup(provider).then((result) => {
            result.user.linkAndRetrieveDataWithCredential(pendingCred).then((usercred) => {
              firebase.auth.goToApp();
            });
          })
        })
      }
    });
  }
}

export const startLoginFacebook = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider).catch((e) => {
      if (e === 'auth/account-exists-with-different-credential') {
        const pendingCred = e.credential;
        const email = e.email;
        firebase.auth.fetchSignInMethodsForEmail(email).then((methods) => {
          if (methods[0] === 'password') {
            const password = firebase.auth.promptUserForPassword();
            firebase.auth.signInWithEmailAndPassword(email, password).then((user) => {
              return user.link(pendingCred)
            }).then(() => {
              firebase.auth.goToApp()
            });
            return;
          }
          const provider = firebase.auth.getProviderForProviderId(methods[0]);
          firebase.auth.signInWithPopup(provider).then((result) => {
            result.user.linkAndRetrieveDataWithCredential(pendingCred).then((usercred) => {
              firebase.auth.goToApp();
            });
          })
        })
      }
    });
  }
}

export const startLoginGithub = () => {
  return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider).catch((e) => {
      if (e === 'auth/account-exists-with-different-credential') {
        const pendingCred = e.credential;
        const email = e.email;
        firebase.auth.fetchSignInMethodsForEmail(email).then((methods) => {
          if (methods[0] === 'password') {
            const password = firebase.auth.promptUserForPassword();
            firebase.auth.signInWithEmailAndPassword(email, password).then((user) => {
              return user.link(pendingCred)
            }).then(() => {
              firebase.auth.goToApp()
            });
            return;
          }
          const provider = firebase.auth.getProviderForProviderId(methods[0]);
          firebase.auth.signInWithPopup(provider).then((result) => {
            result.user.linkAndRetrieveDataWithCredential(pendingCred).then((usercred) => {
              firebase.auth.goToApp(usercred);
            });
          })
        })
      }
    });
  }
}

export const logout = () => ({
  type: "LOGOUT"
})

export const startLogout = () => {
  return () => {
    firebase.auth().signOut();
  }
}
