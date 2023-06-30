import React, { Component } from "react";

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";

/**
 * Functionality: On search the related robots should be visible.
 * Note to self:
 * 1) Props cannot be changed, however update in value can be managed by State.
 * 2) Since we want to define States, use Class Components and hence Approach2 is used.
 */

/**
 * Approach1
 *
 * Parent
 *      Index
 *
 * Child
 *      SearchBox
 *      CardList
 */

// const App = (props) => {
//   return (
//     <div className="tc">
//         <h1>RoboFriends!</h1>
//         <SearchBox />
//         <CardList robots={robots}/>
//     </div>
//   )
// };

/**
 * Approach2
 *
 * Parent
 *      Index
 *
 * Child
 *      SearchBox
 *      CardList
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  /** ComponentDidMount is invoked immediately after a component is inserted into the tree.
   * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
   */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }

  /**
   * Since this is not predefined function of react,
   * all custom functions should be written as arrow function to avoid 'this' keyword undefined error.
   * Arrow Function automatically binds 'this' to the surrounding code's context
   *
   * On Search, update the state
   */
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };

  render() {
    //Destructuring
    const { robots, searchfield } = this.state;

    //Compare the search value with the robots name and get the searched robot.
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    //If the server takes time to load the data then lets add the condition to show "loading" instead of blank screen
    if (!robots.length) {
      return (
        <div className="tc">
          <h1 className="mb4 mt5">Loading...!</h1>
        </div>
      );
    } else {
      // render and return the layout.
      return (
        <div className="tc">
          <h1 className="mb4 mt5">My RoboFriends!</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
