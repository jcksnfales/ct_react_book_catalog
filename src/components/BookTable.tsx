import { useState } from "react";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchData } from "../custom-hooks/FetchData";

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
  const [selectionModel, setSelectionModel] = useState<string[]>([]);



  return (
    <div className="container mx-auto mt-8 flex flex-col w-80vw h-60vh">
      <DataGrid getRowId={(row) => row.local_id} rows={bookData} columns={columns} checkboxSelection={true} onRowSelectionModelChange={(item:any) => setSelectionModel(item)}/>
    </div>
  )
}

export default BookTable;
