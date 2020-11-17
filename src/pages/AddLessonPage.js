import React from "react";
import { useForm } from "react-hook-form";
import {postLesson} from "../api/lessons";
import {subjects} from "../globalSettings";

export default function AddLessonPage() {
  const { register, watch, errors, handleSubmit } = useForm();
  const watchTitle = watch("title", "");
  const watchDescription = watch("description", "");
  const onSubmit = (data) => postLesson(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        ref={register({ required: true, maxLength: 80 })}
      />
      <p>You have {80 - watchTitle.length} characters left</p>
      <select name="subject" ref={register({ required: true })}>
        <option value="" selected disabled hidden>
          choose subject
        </option>
        {subjects.map((subject) =>(
          
          <option value={subject.subject}>{subject.subject}</option>
        ))
        
        }
        
      </select>
      <textarea
        name="description"
        placeholder="Description"
        ref={register({ required: true, maxLength: 160 })}
      />
      <p>You have {160 - watchDescription.length} characters left</p>

      <select name="grade" ref={register({ required: true })}>
        <option value="" selected disabled hidden>
          choose grade
        </option>
        <option value="1/2">1/2</option>
        <option value=" 3/4"> 3/4</option>
        <option value=" 5/6"> 5/6</option>
        <option value=" 7-9"> 7-9</option>
        <option value=" 10"> 10</option>
        <option value=" 11"> 11</option>
        <option value=" 12"> 12</option>
      </select>
      <input
        type="text"
        placeholder="tag1"
        name="tag1"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="tag2"
        name="tag2"
        ref={register({ maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="tag3"
        name="tag3"
        ref={register({ maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="tag4"
        name="tag4"
        ref={register({ maxLength: 100 })}
      />
      <input type="file" name="file" ref={register} />
      <input type="submit" />
    </form>
  );
}
