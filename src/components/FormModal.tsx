import BookForm from './BookForm';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

type Props = {
  open: boolean;
  funcClose: () => void;
  refreshTable: () => Promise<void>;
  formMode: string;
  selectionId: string | undefined;
  bookData: [];
}

const FormModal = (props: Props) => {
  return props.open ? (
    <div onClick={props.funcClose} className="fixed top-0 w-screen h-screen z-10 bg-slate-800 bg-opacity-50">
      <div onClick={(event) => {event.stopPropagation()}} className="w-2/3 mt-40 m-auto bg-slate-200 rounded p-10">
        <Provider store={store}>
          <BookForm 
            closeModal={props.funcClose}
            refreshTable={props.refreshTable}
            formMode={props.formMode}
            selectionId={props.selectionId}
            bookData={props.bookData}
          />
        </Provider>
      </div>
    </div>
  ) : (<></>)
}

export default FormModal;
