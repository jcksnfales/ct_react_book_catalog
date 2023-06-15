import { useState } from "react";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchData } from "../custom-hooks/FetchData";

const columns:GridColDef[] = [
  {field: 'title', headerName: 'Title', flex: 1},
  {field: 'author', headerName: 'Author', flex: 1},
  {field: 'page_count', headerName: 'Pages', flex: 1},
  {field: 'is_hardcover', headerName: 'Hardcover?', flex: 1},
  {field: 'isbn', headerName: 'ISBN', flex: 1},
  {field: 'local_id', headerName: 'API ID', flex: 1},
]

const BookTable = () => {
  const {bookData, getData} = fetchData();
  const [selectionModel, setSelectionModel] = useState<string[]>([]);



  return (
    <div className="container mx-auto flex flex-col w-80vw h-60vh">
      <DataGrid getRowId={(row) => row.local_id} rows={bookData} columns={columns} checkboxSelection={true} onRowSelectionModelChange={(item:any) => setSelectionModel(item)}/>
    </div>
  )
}

export default BookTable;
