type Props = {
  open: boolean;
  funcClose: () => void;
  confirmAction: () => void;
}

const PromptModal = (props: Props) => {
  return props.open ? (
    <div onClick={props.funcClose} className="fixed top-0 w-screen h-screen z-10 bg-slate-800 bg-opacity-50">
      <div className="w-2/3 mt-40 m-auto bg-slate-200 rounded p-10">
        <div className="row text-center text-indigo-950 font-semibold text-lg">Are you sure?</div>
        <div className="block w-fit mx-auto mt-6">
          <button onClick={props.funcClose} className="me-4 px-6 py-3 rounded border-2 text-indigo-950 border-indigo-950 hover:text-slate-200 hover:bg-indigo-950 font-semibold tracking-wide">Cancel</button>
          <button onClick={props.confirmAction} className="px-6 py-3 rounded border-2 text-red-500 border-red-500 hover:text-slate-100 hover:bg-red-500 font-semibold tracking-wide">Delete Book</button>
        </div>
      </div>
    </div>
  ) : (<></>)
}

export default PromptModal;
  