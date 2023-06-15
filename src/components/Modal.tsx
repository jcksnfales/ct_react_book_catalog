type Props = {
  open: boolean;
  funcClose: () => void;
}

const Modal = (props: Props) => {
  return props.open ? (
    <div onClick={props.funcClose} className="fixed top-0 w-screen h-screen z-10 bg-slate-800 bg-opacity-50">
      <div className="w-2/3 mt-40 m-auto bg-slate-200 rounded p-10">hi</div>
    </div>
  ) : (<></>)
}

export default Modal
