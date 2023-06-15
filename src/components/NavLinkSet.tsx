import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

type Props = {
  linkAction?: () => void;
}

const NavLinkSet = (props: Props) => {
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(localStorage.getItem('user.isAuthed') === 'true');
  // ^ this state is mainly for forcing this component to re-render when the login state is changed

  const signInOnClick = async () => {
    await signInWithPopup(auth, Providers.google)
    .then(() => {
      localStorage.setItem('user.isAuthed', 'true');
      setIsAuthed(true);
      navigate('/');
    });
  }
  const signOutOnClick = () => {
    signOut(auth)
    .then(() => {
      localStorage.removeItem('user.isAuthed');
      setIsAuthed(false);
      navigate('/');
    });
  }

  return (
    <div className="w-fit ms-auto">
      <Link onClick={props.linkAction} to="/" className="text-slate-400 hover:text-slate-200 me-6">Home</Link>
      <Link onClick={props.linkAction} to="/catalogue" className="text-slate-400 hover:text-slate-200 me-6">Catalogue</Link>
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
