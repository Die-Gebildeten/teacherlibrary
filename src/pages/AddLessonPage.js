
import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddLessonPage() {
   
      
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" name="Title" ref={register({required: true, maxLength: 80 })} />
      <select name="Subject" ref={register({ required: true })}>
        <option value="Maths">Maths</option>
        <option value=" German"> German</option>
        <option value=" Chemistry"> Chemistry</option>
        <option value=" Physics"> Physics</option>
        <option value=" Biology"> Biology</option>
        <option value=" Sports"> Sports</option>
        <option value=" Art"> Art</option>
        <option value=" Geography"> Geography</option>
        <option value=" Spanish"> Spanish</option>
        <option value=" French"> French</option>
        <option value=" Religion"> Religion</option>
        <option value=" Ethics"> Ethics</option>
        <option value=" Computer Science"> Computer Science</option>
        <option value=" Politics"> Politics</option>
        <option value=" English"> English</option>
      </select>
      <textarea name="Description" placeholder="Description" ref={register({required: true, maxLength: 160})} />
      <select name="Grade" ref={register({ required: true })}>
        <option value="1/2">1/2</option>
        <option value=" 3/4"> 3/4</option>
        <option value=" 5/6"> 5/6</option>
        <option value=" 7-9"> 7-9</option>
        <option value=" 10"> 10</option>
        <option value=" 11"> 11</option>
        <option value=" 12"> 12</option>
      </select>
      <input type="text" placeholder="tag1" name="tag1" ref={register({required: true, maxLength: 100})} />
      <input type="text" placeholder="tag2" name="tag2" ref={register({maxLength: 100})} />
      <input type="text" placeholder="tag3" name="tag3" ref={register({maxLength: 100})} />
      <input type="text" placeholder="tag4" name="tag4" ref={register({maxLength: 100})} />
      <input type="file" name="file" ref={register({required: true})}/>
      <input type="submit" />
    </form>);
}
