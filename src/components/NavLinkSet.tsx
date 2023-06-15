import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

type Props = {
  linkAction?: () => void;
}

const NavLinkSet = (props: Props) => {
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(localStorage.getItem('user.isAuthed') === 'true');
  // ^ this state is mainly for forcing this component to re-render when the login state is changed

  // observer for checking authentication state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('user.isAuthed', 'true');
        setIsAuthed(true);
      } else {
        localStorage.removeItem('user.isAuthed');
        setIsAuthed(false);
      }
    });
  }, [auth, navigate]);

  const signInOnClick = async () => {
    await signInWithPopup(auth, Providers.google)
    .then(() => {
      location.reload();
    });
  }
  const signOutOnClick = () => {
    signOut(auth)
    .then(() => {
      location.reload();
    });
  }

  return (
    <div className="w-fit ms-auto">
      <Link onClick={props.linkAction} to="/" className="text-slate-400 hover:text-slate-200 me-6">Home</Link>
      <Link onClick={props.linkAction} to="/catalog" className="text-slate-400 hover:text-slate-200 me-6">Catalog</Link>
      {
        (localStorage.getItem('user.isAuthed') === null) ? (
          <button onClick={signInOnClick} className="px-3 py-2 border rounded text-slate-400 border-slate-400 hover:text-slate-200 hover:border-slate-200">Sign In</button>
        ) : (
          <button onClick={signOutOnClick} className="px-3 py-2 border rounded text-slate-400 border-slate-400 hover:text-slate-200 hover:border-slate-200">Sign Out</button>
        )
      }
    </div>
  )
}

export default NavLinkSet;
