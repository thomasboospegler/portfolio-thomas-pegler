import triviaImg from '../assets/projects/trivia-game-pedro-guarize.png';
import musicAppImg from '../assets/projects/trybetunes-preview.png';
import topTrumpsImg from '../assets/projects/tryunfo-preview2.png';
import expensesManagerImg from '../assets/projects/expenses-manager-login.png';
import todoListImg from '../assets/projects/todo-list-guarize.png';
import recipeAppImg from '../assets/projects/smartmockups_kyd2qtqr.jpg';

const portfolio = [
  {
    name: 'Recipes App',
    image: recipeAppImg,
    description:
      'In this project I developed a recipes app, using the latest in the React ecosystem: Hooks and Context API!',
    tools: ['React', 'CSS', 'Hooks'],
    liveProject: 'https://',
    githubCode: 'https://',
  },
  {
    name: 'Music App',
    image: musicAppImg,
    description:
      'In this project I created an application capable of playing music from a wide variety of bands and artists, creating a list of favorite songs and editing the logged in user`s profile.',
    tools: ['React', 'CSS'],
    liveProject: 'https://',
    githubCode: 'https://',
  },
  {
    name: 'Expenses Manager',
    image: expensesManagerImg,
    description:
      'In the Expenses Manager project I developed an expense control wallet with a currency converter.',
    tools: ['React', 'Redux', 'CSS'],
    liveProject: 'https://',
    githubCode: 'https://',
  },
  {
    name: 'ToDo List',
    image: todoListImg,
    description:
      'This is a solution to the Todo app challenge on Frontend Mentor',
    tools: ['React', 'Hooks', 'CSS'],
    liveProject: 'https://',
    githubCode: 'https://',
  },
  {
    name: 'Trivia Game',
    image: triviaImg,
    description:
      'This was a group project in which we developed a trivia-based quiz game using React and Redux, developing its functionality in groups according to the demands defined in a Kanban board.',
    tools: ['React', 'Redux', 'CSS'],
    liveProject: 'https://',
    githubCode: 'https://',
  },
  {
    name: 'Top Trumps',
    image: topTrumpsImg,
    description: `This was the second React project developed during Trybe's Front-End module. 
    A digital version of Top Trumps written in react, in which you are able to create and save custom cards.`,
    tools: ['React', 'CSS'],
    liveProject: 'https://',
    githubCode: 'https://',
  },
];

export default portfolio;
