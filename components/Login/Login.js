import React from "react";
import { useSession, signin, signout } from 'next-auth/client'
import styles from '../../styles/generic.module.css'
import style from './Login.module.css'
import {Navbar} from "react-bootstrap";

export default function Login() {
  const [session,loading] = useSession();

  return (
      <Navbar collapseOnSelect expand={"md | lg | xl"} className={style.container}>
        <p className={` ${(!session && loading) ? style.loading : style.loaded}`}>
          {!session && (
              <>
                <span className={style.signText}>Not signed in </span>
                <a href={`/api/auth/signin`} onClick={(e) => {
                  e.preventDefault()
                  signin()
                }}
                >
                  <button className={style.signinButton}>Login</button>
                </a>
              </>
          )}
          {session && (
              <>
                <span style={{ backgroundImage:`url(${session.user.image})` }} className={style.avatar}/>
                <span className={style.signText}> Signed in as: <strong>{session.user.email}</strong> </span>
                <a href={`/api/auth/signout`}
                   onClick={(e) => {
                     e.preventDefault()
                     signout()
                   }}>
                  <button className={style.signoutButton}>Logout</button>
                </a>
              </>
          )}
        </p>
      </Navbar>
  )
}