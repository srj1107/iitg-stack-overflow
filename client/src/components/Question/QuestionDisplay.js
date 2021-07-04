import React from "react";
import { useSelector } from "react-redux";
import QuestionItem from "../QuestionItem/QuestionItem";
import Spinner from "../Spinner/Spinner";
import { NavLink } from "react-router-dom";

const QuestionDisplay = (props) => {
  const {loading,questions} = useSelector((state) => state.question);

  // const tagsFromProps = props.tagsArray;
  // const newSetOfQuestions = new Set();

  // tagsFromProps.forEach((tag) => {
  //   const append = questions.filter((question) => question.tags.includes(tag));
  //   append.forEach((item) => newSetOfQuestions.add(item));
  // });

  // const renderQuestions =
  //   newSetOfQuestions.size === 0 ? questions : [...newSetOfQuestions];
  // console.log(renderQuestions);
  return (
    <>
      {loading && <Spinner />}
      {!loading && questions.length === 0 && (
        <p className="mt-16 w-screen">No questions to show.</p>
      )}

      {!loading && (
        <div className="flex flex-col mt-16 mb-10 w-screen border-l border-gray-300">
          <div className="flex justify-between items-center py-4 px-8">
            <h1 className="text-2xl font-semibold">Top Questions</h1>
            <NavLink to="/question/ask">
            <button className="flex items-center p-2 m-1 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10">
              Ask Question
            </button>
            </NavLink>
          </div>

          {questions.map((question) => (
            <QuestionItem key={question._id} data={question} />
          ))}
        </div>
      )}
    </>
  );
};

export default QuestionDisplay;
