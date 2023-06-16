import TextInput from "./TextInput";
import { Checkbox } from "@mui/material";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseTitle, chooseAuthor, choosePageCount, chooseIsHardcover, chooseISBN } from "../redux/slices/RootSlice";

interface FormProps {
  closeModal: () => void,
  refreshTable: () => Promise<void>,
  formMode: string,
  selectionId: string | undefined,
  bookData: [],
}

const BookForm = (props:FormProps) => {
  const { register, handleSubmit, setValue } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data:any, event:any) => {
    dispatch(chooseTitle(data.title));
    dispatch(chooseAuthor(data.author));
    dispatch(choosePageCount(data.page_count));
    dispatch(chooseIsHardcover(data.is_hardcover));
    dispatch(chooseISBN(data.isbn));

    if (props.formMode == "update" && props.selectionId != undefined) {
      // update
      await server_calls.update(props.selectionId[0], store.getState())
      .then(() => {
        props.closeModal();
        props.refreshTable();
      });
    } else {
      // create
      await server_calls.create(store.getState())
      .then(() => {
        props.closeModal();
        props.refreshTable();
      })
    }
  }

  useEffect(() => {
    // if form is in update mode, pre-fill fields with selected book's data
    if (props.formMode == "update") {
      // get selected book data
      let selectedData = props.bookData.find((b) => {return b["local_id"] == props.selectionId});
      // selectedData shouldn't be undefined but we check if it is to make typescript happy
      if (selectedData != undefined) {
        // if so, set field values
        setValue("title", selectedData["title"]);
        setValue("author", selectedData["author"]);
        setValue("page_count", selectedData["page_count"]);
        setValue("isbn", selectedData["isbn"]);
        setValue("is_hardcover", selectedData["is_hardcover"]);
      }
    }
  }, [props])

  return (
  <>
    {
      (props.formMode == "update") ? (
        <h1 className="mb-4 text-center font-bold text-2xl text-indigo-950 font-serif">Update</h1>
      ) : (
        <h1 className="mb-4 text-center font-bold text-2xl text-indigo-950 font-serif">Create</h1>
      )
    }
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label htmlFor="title" className="text-indigo-950 font-semibold">Title</label>
        <TextInput {...register('title')} name="title" placeholder="title" type="text"></TextInput>
      </div>
      <div className="mb-2">
        <label htmlFor="author" className="text-indigo-950 font-semibold">Author</label>
        <TextInput {...register('author')} name="author" placeholder="author" type="text"></TextInput>
      </div>
      <div className="mb-2">
        <label htmlFor="page_count" className="text-indigo-950 font-semibold">Page Count</label>
        <TextInput {...register('page_count')} name="page_count" placeholder="page count" type="number"></TextInput>
      </div>
      <div className="mb-2">
        <label htmlFor="isbn" className="text-indigo-950 font-semibold">ISBN</label>
        <TextInput {...register('isbn')} name="isbn" placeholder="ISBN" type="number"></TextInput>
      </div>
      <div className="mb-2">
        <label htmlFor="is_hardcover" className="text-indigo-950 font-semibold">Is Hardcover?</label>
        <Checkbox {...register('is_hardcover')} name="is_hardcover"/>
      </div>
      <div className="flex">
        <button type="submit" className="mx-auto px-6 py-2 rounded border-2 text-indigo-950 border-indigo-950 hover:text-slate-200 hover:bg-indigo-950 font-semibold tracking-wide">Submit</button>
      </div>
    </form>
  </>
  )
}

export default BookForm;