import React from "react";
import "./App.css";

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//SCREENS
import RegisterScreen from "./screens/Register/RegisterScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import PostQuestionScreen from "./screens/PostQuestion/PostQuestion";
import ViewQuestionScreen from "./screens/ViewQuestion/ViewQuestionScreen";
import NotFoundScreen from "./screens/NotFoundScreen"
import AllQuestionsScreen from "./screens/AllQuestions/AllQuestionsScreen";

//HOOKS
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

//FUNCTIONS | ACTIONS | 
import { loadUser } from "./redux/auth/auth.actions";
// import { getQuestions } from "./api/index";
// import { getQuestionAction } from "./redux/questions/questions.actions";
// import {
//   setLoadingAction,
//   stopLoadingAction,
// } from "./redux/loading/loading.actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() =>   {
    // dispatch(setLoadingAction());
    dispatch(loadUser());
    // console.log("Sent get request");
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/questions" exact component={AllQuestionsScreen} />
        <Route path="/question/ask" exact component={PostQuestionScreen} />
        {/* <Route path="/question/edit/:id" exact component={PostQuestionScreen} /> */}
        <Route path="/question/:id" exact component={ViewQuestionScreen}/>
        <Route path="/tags" exact component={HomeScreen} />
        <Route path="/users" exact component={HomeScreen} />
        <Route path="*" component={NotFoundScreen}></Route>
        </Switch>
        {/* <Route path="/questions" exact component={QuestionsScreen} /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
