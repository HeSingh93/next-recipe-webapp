import React from "react";
import { useSession, signin, signout } from 'next-auth/client'
import styles from '../../styles/mainPage.module.css'
import style from './header.module.css'

export default function Header() {
  const [session] = useSession();

  const handleSignIn = (e) => {
    e.preventDefault()
    signIn()
  }
  const handleSignOut = (e) => {
    e.preventDefault()
    signOut()
  }

  return (/*
      <div className={styles.navItemText}>
        {!session && <a href="#" onClick={handleSignIn}  className={styles.navItemText}>LOGIN IN</a>  }
        {session && <a href="#" onClick={handleSignOut} className="btn-signin">Sign out</a>  }
      </div>*/
      <nav>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <p>
          {!session && (
              <>
                <span className={style.notSignedIn}>Not signed in</span>
                <a
                    href={`/api/auth/signin`}
                    onClick={(e) => {
                      e.preventDefault()
                      signin()
                    }}
                >
                  <button className={style.signinButton}>Sign in</button>
                </a>
              </>
          )}
          {session && (
              <>
            <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className={style.avatar}
            />
                <span className={style.signedIn}>
              Signed in as <strong>{session.user.email}</strong>
            </span>
                <a
                    href={`/api/auth/signout`}
                    onClick={(e) => {
                      e.preventDefault()
                      signout()
                    }}
                >
                  <button className={style.signoutButton}>Sign out</button>
                </a>
              </>
          )}
        </p>
      </nav>
  )
}