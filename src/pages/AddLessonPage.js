import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postLessonGraphQL } from "../api/lessons";
import { subjects } from "../colorSettings";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-family: "Lucida Sans";
  width: 100vw;
  min-height: 100vh;
  background-color: #f7fcfc;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: normal;
    font-size: 1.5rem;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

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
    box-shadow: 2px 2px 5px
      rgba(0, 0, 0, 0.2);
  }

  input[type="submit"] {
    background-color: #4287f5;
    color: white;
    font-weight: bolder;
  }

  p {
    background-color: darkred;
    padding: 3px;
    color: white;
  }
`;

const MaxLengthInput = styled.div`
  position: relative;
  height: 100px;
  > textarea {
    height: 100%;
    width: 100%;
    border: inherit;
    box-shadow: inherit;
    border-radius: inherit;

    ::placeholder {
      font-family: "Lucida Sans";
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
  const {
    register,
    watch,
    errors,
    handleSubmit,
  } = useForm();
  const watchTitle = watch("title", "");
  const watchDescription = watch(
    "description",
    ""
  );

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      await postLessonGraphQL(data);
      setIsSubmitting(false);
      alert(
        "Your unit has been uploaded"
      );
    } catch (e) {
      setIsSubmitting(true);
      alert(
        "Oops, something went wrong! Please try again..."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <Link to="/">
        Back to Main Page
      </Link>
      <h1>Add a Unit</h1>
      <Form
        onSubmit={handleSubmit(
          onSubmit
        )}
      >
        <MaxLengthInput>
          <textarea
            type="text"
            placeholder="Title"
            name="title"
            maxLength="80"
            ref={register({
              required: true,
              maxLength: 80,
            })}
          />
          {errors.title && (
            <p>Please enter a title</p>
          )}
          <CharacterCounter>
            {80 - watchTitle.length}{" "}
          </CharacterCounter>
        </MaxLengthInput>
        <select
          name="subject"
          ref={register({
            required: true,
          })}
        >
          <option
            value=""
            selected
            disabled
            hidden
          >
            choose subject
          </option>
          {subjects.map((subject) => (
            <option
              value={subject.subject}
            >
              {subject.subject}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p>Please choose a subject</p>
        )}
        <MaxLengthInput>
          <textarea
            name="description"
            placeholder="Description"
            maxLength="160"
            ref={register({
              required: true,
              maxLength: 160,
            })}
          />
          <CharacterCounter>
            {" "}
            {160 -
              watchDescription.length}
          </CharacterCounter>
        </MaxLengthInput>
        {errors.description && (
          <p>
            Please describe your unit
          </p>
        )}
        <select
          name="grade"
          ref={register({
            required: true,
          })}
        >
          <option
            value=""
            selected
            disabled
            hidden
          >
            choose grade
          </option>
          <option value="1/2">
            1/2
          </option>
          <option value=" 3/4">
            {" "}
            3/4
          </option>
          <option value=" 5/6">
            {" "}
            5/6
          </option>
          <option value=" 7-9">
            {" "}
            7-9
          </option>
          <option value=" 10">
            {" "}
            10
          </option>
          <option value=" 11">
            {" "}
            11
          </option>
          <option value=" 12">
            {" "}
            12
          </option>
        </select>
        {errors.grade && (
          <p>Please choose a grade</p>
        )}
        <input
          type="text"
          placeholder="tag1"
          name="tag1"
          ref={register({
            required: true,
            maxLength: 100,
          })}
        />
        {errors.tag1 && (
          <p>
            Please choose at least one
            tag
          </p>
        )}
        <input
          type="text"
          placeholder="tag2"
          name="tag2"
          ref={register({
            maxLength: 100,
          })}
        />
        <input
          type="text"
          placeholder="tag3"
          name="tag3"
          ref={register({
            maxLength: 100,
          })}
        />
        <input
          type="text"
          placeholder="tag4"
          name="tag4"
          ref={register({
            maxLength: 100,
          })}
        />

        <input
          type="file"
          name="file"
          id="file"
          ref={register({
            required: true,
          })}
        />
        {errors.file && (
          <p>
            Please choose a file to
            upload
          </p>
        )}
        <input
          type="submit"
          disabled={isSubmitting}
          value={
            isSubmitting
              ? "Uploading..."
              : "Submit"
          }
        />
      </Form>
    </Container>
  );
}
