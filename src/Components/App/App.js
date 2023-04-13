import React from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import Gif from '../Gif/Gif';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // gifs: [],
  //     selectedGifId: ""
  //   };
  //   // this.search = this.search.bind(this)
  // }

  // selectGif(id) {
  //   this.setState({
  //     selectedGifId: id
  //   });
  // }


  render() {
    return (
      <div>
        {/* < Gif id={this.state.slectedGifId}/> */}
        < Gif />
      </div>

    )
  }
}

export default App;
