import React from "react";
import { getAllByText, render, screen,fireEvent, getByText } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import Form from "./components/Form";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";

describe("basic rendering of the form page", ()=>{
  it("button should not be disabled",()=>{
    const {getByTestId} = render(<FilterButton />);

    expect(getByTestId("toggle")).not.toHaveAttribute("disabled");
  })
});

describe("basic rendering of the todo page",()=>{
  it("delete button should not in disabled state",()=>{
    const {getByTestId}= render(<Todo />);
    expect(getByTestId("edit")).not.toHaveAttribute("disabled");
  })
});

describe("the functionality of form page",()=>{
    it("shoould Add button renders correctly",()=>{
      const {getByTestId}=render(<Form label="new-todo-input"/>);
      expect(getByTestId("need_to_be_added")).toHaveTextContent("What needs to be done?");
    })
});
