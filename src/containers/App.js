import React, { Component } from "react";
import Scroll from '../components/Scroll';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Footer from '../components/Footer';




import "tachyons";
import "./App.css";

/**
 * Main application component that displays a list of robots and a search box to filter them.
 * @extends Component
 */
class App extends Component {
  /**
   * Creates an instance of App component.
   * Initializes the component state.
   */
  constructor() {
    super();

    /**
     * @type {object}
     * @property {Array} robots - The list of robots to display.
     * @property {string} searchField - The current value of the search input field.
     */
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  /**
   * Event handler for changes in the search input field.
   * Updates the component state with the new searchField value.
   * @param {object} event - The event object containing the input field value.
   */
  // onSearchChange = event => {
  //   this.setState({ searchField: event.target.value });
  // };

  /**
   * @description, Called immediately after a component is mounted ( rendered).
   * Setting state here will trigger re-rendering.
   */
  componentDidMount() {
    // fetching api and updating the state of the robot array
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) //parse via json
      .then(data => this.setState({ robots: data }))
      .catch(err => console.log(err));
  }

  /**
   * Renders the App component.
   * Filters the robots based on the current search field value and displays the CardList.
   * @returns {JSX.Element} The JSX representation of the component.
   */
  render() {
    const { robots, searchField } = this.state;

    /**
     * Filters the robots based on the current search field value.
     * @type {Array}
     */
    //check if every string or substring  I enter in the searchbox is substring of any robot name
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    // if (robots.length === 0) { //this one can be also used

    if (!robots.length) {
      return (
        <>
          <h1>Loading....</h1>
        </>
      );
    } else {
      return (
        <>
          {/* The header */}
          <h1 className="mt0 mb3 tc bg-light-green pa3 dark-gray w-100 f2">
            Robofriends
          </h1>

          {/* The search box with the seachChange props */}
          <SearchBox className=" mt3 tc" searchChange={event => {
            this.setState({ searchField: event.target.value });
          }} />

          {/* Scroll can use CardList as Children */}
          {/* The list of cards */}
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>

          <Footer year={new Date().getFullYear()} />

        </>
      );
    }
  }
}

export default App;
