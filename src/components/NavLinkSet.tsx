import { Link, useNavigate } from 'react-router-dom';

type Props = {
  linkAction?: () => void;
}

const NavLinkSet = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-fit ms-auto">
      <Link onClick={props.linkAction} to="/" className="text-slate-400 hover:text-slate-200 ms-6">Home</Link>
    </div>
  )
}

export default NavLinkSet;
