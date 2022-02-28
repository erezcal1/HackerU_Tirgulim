let questions = [
  {
    title: "question 1",
    id: 0,
    question: "chose color",
    answer1: "green",
    answer2: "red",
    answer3: "blue",
    answer4: "pink",
    currect: "red",
  },
  {
    title: "question 2",
    id: 1,
    question: "chose color",
    answer1: "orange",
    answer2: "gray",
    answer3: "black",
    answer4: "lime",
    currect: "orage",
  },
  {
    title: "question 3",
    id: 2,
    question: "chose color",
    answer1: "green",
    answer2: "red",
    answer3: "blue",
    answer4: "pink",
    currect: "red",
  },
  {
    title: "question 4",
    id: 3,
    question: "chose color",
    answer1: "orange",
    answer2: "gray",
    answer3: "black",
    answer4: "lime",
    currect: "lime",
  },
];

//destructure the array
let [question1, question2, question3, question4] = questions;

//destructure the object
let { title, question, answer1, ...rest } = question1;
