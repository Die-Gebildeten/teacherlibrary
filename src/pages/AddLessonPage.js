import React from "react";
import { useForm } from "react-hook-form";
import {postLesson, postLessonGraphQL} from "../api/lessons";
import {subjects} from "../globalSettings";
import styled from "@emotion/styled";

const Container = styled.div`
font-family: 'Lucida Sans';
width: 100vw;
min-height: 100vh;
background-color: #f7fcfc;
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;

h1{
  font-weight:normal;
   font-size: 1.5rem;
}`



const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  > * {
    text-align: center;
    width: 300px;
    height: 30px;
    margin: 12px;
    border-radius: 7px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
  input[type=file]{
    display: none;
  }
  input[type=submit]{
    background-color: #4287f5;
    color: white;
    font-weight: bolder;
  }

  label{
    padding-top: 5px;
    font-size: small;
    border: 1px solid black;
    
    :hover{
      background-color: #b6c0d1
    }
  }

`;

const MaxLengthInput = styled.div`
  position: relative;
  height: 100px;
  > textarea{
height: 100%;
width: 100%;
border: inherit;
box-shadow: inherit;
border-radius: inherit;

::placeholder {
  font-family: 'Lucida Sans';
  font-size: small;
}
  }
`;

const CharacterCounter = styled.span`
  position: absolute;
  bottom: 1px;
  left: 2px;
  font-size: small;
`;



export default function AddLessonPage() {
  const { register, watch, errors, handleSubmit } = useForm();
  const watchTitle = watch("title", "");
  const watchDescription = watch("description", "");
  const onSubmit = (data) => postLessonGraphQL(data);
  console.log(errors);

  return (
    <Container>
      <h1>Add a Unit</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MaxLengthInput>
          <textarea
            type="text"
            placeholder="Title"
            name="title"
            ref={register({ required: true, maxLength: 80 })}
          />
          <CharacterCounter>{80 - watchTitle.length} </CharacterCounter>
        </MaxLengthInput>
        <select name="subject" ref={register({ required: true })}>
        <option value="" selected disabled hidden>
          choose subject
        </option>
        {subjects.map((subject) =>(
          
          <option value={subject.subject}>{subject.subject}</option>
        ))
        
        }
        
      </select>
        <MaxLengthInput>
          <textarea
            name="description"
            placeholder="Description"
            ref={register({ required: true, maxLength: 160 })}
          />
          <CharacterCounter> {160 - watchDescription.length}</CharacterCounter>
        </MaxLengthInput>
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
        <label for="file">Upload unit</label>
        <input
          type="file"
          name="file"
          id="file"
          ref={register({ required: true })}
        />
        <input type="submit" />
      </Form>
      </Container>
  );
}
