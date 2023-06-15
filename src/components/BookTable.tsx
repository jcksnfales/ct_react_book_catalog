import { useState } from "react";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchData } from "../custom-hooks/FetchData";
import FormModal from "./FormModal";

const columns:GridColDef[] = [
  {field: 'title', headerName: 'Title', flex: 5},
  {field: 'author', headerName: 'Author', flex: 4},
  {field: 'page_count', headerName: 'Pages', flex: 2},
  {field: 'is_hardcover', headerName: 'Hardcover?', flex: 2},
  {field: 'isbn', headerName: 'ISBN', flex: 3},
  {field: 'local_id', headerName: 'API ID', flex: 3},
]

const BookTable = () => {
  const {bookData, getData} = fetchData();
  const [selectionModel, setSelectionModel] = useState<string>();
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  }
  const closeModal = () => {
    setModalState(false);
  }

  const deleteData = () => {
    if (selectionModel) {
      server_calls.delete(selectionModel[0]).then(() => {getData()})
    }
  }

  return (
  <>
    <FormModal open={modalState} funcClose={closeModal} selectedData={selectionModel} refreshTable={getData}/>
    { // only show action buttons if user is logged in
      localStorage.getItem('user.isAuthed') === 'true' ? (
        <>
          <div className="flex flex-row w-fit mx-auto mt-6 text-slate-600 text-sm">Click on a book's row to select it.</div>
          <div className="flex flex-row w-fit mx-auto mt-4">
            <button onClick={openModal} className="px-4 py-2 rounded border-2 text-indigo-950 border-indigo-950 hover:text-slate-200 hover:bg-indigo-950 font-semibold tracking-wide">Contribute Book</button>
            { // make update and delete buttons unusable until the user has selected at least one book
              (selectionModel) ? (
                <div>
                  <button onClick={openModal} className="mx-4 px-4 py-2 rounded border-2 text-indigo-950 border-indigo-950 hover:text-slate-200 hover:bg-indigo-950 font-semibold tracking-wide">Update Book</button>
                  <button onClick={deleteData} className="px-4 py-2 rounded border-2 text-red-500 border-red-500 hover:text-slate-100 hover:bg-red-500 font-semibold tracking-wide">Delete Book</button>
                </div>
              ) : (
                <div title="Select a book to use these buttons">
                  <button disabled className="mx-4 px-4 py-2 rounded border-2 text-slate-300 border-slate-300 font-semibold tracking-wide">Update Book</button>
                  <button disabled className="px-4 py-2 rounded border-2 text-slate-300 border-slate-300 font-semibold tracking-wide">Delete Book</button>
                </div>
              )
            }
          </div>
        </>
      ) : (
        <div className="flex flex-row w-fit mx-auto mt-6 text-slate-600 italic">You must be logged in to contribute to this list.</div>
      )
    }
    <div className="container mx-auto mt-6 flex flex-col w-80vw h-60vh">
      <DataGrid
        getRowId={(row) => row.local_id}
        rows={bookData}
        columns={columns}
        checkboxSelection={false}
        onRowSelectionModelChange={(item:any) => {setSelectionModel(item)}}
      />
    </div>
  </>
  )
}

export default BookTable;
