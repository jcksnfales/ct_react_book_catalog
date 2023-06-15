import TextInput from "./TextInput";
import { Checkbox } from "@mui/material";

import { useForm } from "react-hook-form";
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseTitle, chooseAuthor, choosePageCount, chooseIsHardcover, chooseISBN } from "../redux/slices/RootSlice";

interface FormProps {
  id?: string[],
  closeModal: () => void,
  refreshTable: () => Promise<void>
}

const BookForm = (props:FormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data:any, event:any) => {
    if (props.id && props.id.length > 0) {
      await server_calls.update(props.id[0], data)
      .then(() => {
        window.location.reload();
        event.target.reset();
      });
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(choosePageCount(data.page_count));
      dispatch(chooseIsHardcover(data.is_hardcover));
      dispatch(chooseISBN(data.isbn));

      await server_calls.create(store.getState())
      .then(() => {
        props.closeModal();
        props.refreshTable();
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <TextInput {...register('title')} name="title" placeholder="title" type="text"></TextInput>
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <TextInput {...register('author')} name="author" placeholder="author" type="text"></TextInput>
      </div>
      <div>
        <label htmlFor="page_count">Page Count</label>
        <TextInput {...register('page_count')} name="page_count" placeholder="page count" type="number"></TextInput>
      </div>
      <div>
        <label htmlFor="isbn">ISBN</label>
        <TextInput {...register('isbn')} name="isbn" placeholder="ISBN" type="number"></TextInput>
      </div>
      {/* <div>
        
        <Input {...register('is_hardcover')} name="is_hardcover" placeholder="is hardcover?" type="text"></Input>
      </div> */}
      <div>
        <label htmlFor="is_hardcover">Is Hardcover?</label>
        <Checkbox {...register('is_hardcover')} name="is_hardcover"/>
      </div>
      <div className="flex">
        <button type="submit" className="mx-auto px-6 py-2 rounded border-2 text-indigo-950 border-indigo-950 hover:text-slate-200 hover:bg-indigo-950 font-semibold tracking-wide">Submit</button>
      </div>
    </form>
  )
}

export default BookForm;