import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import friends from "./friends.json";


class App extends Component {   

  state = {
    friends,
    score: 0,
    topScore: 0,    
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 0,
    card5: 0,
    card6: 0,
    card7: 0,
    card8: 0,
    card9: 0,
    card10: 0,
    card11: 0,
    card12: 0
  };

   shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;  
  
    while (0 !== currentIndex) {
  
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }  
    
    this.setState({friends: array})
  }

  componentDidMount(){
    this.shuffle(this.state.friends)
    console.log(this.state.card1, this.state.card2, this.state.card3)
    
  }



  handleIncrement = (id) => {    
   

    if(this.state[id] === 0){
    this.setState({
      [id]: this.state[id] + 1    
    }); 

    this.setState({score: this.state.score + 1})

      if(this.state.score >= this.state.topScore){
        this.setState({
          topScore: this.state.topScore + 1
        })
      }
    
  } else {

   

   this.setState({score: 0});
      
      this.setState({card1: 0});
      this.setState({card2: 0});
      this.setState({card3: 0}); 
      this.setState({card4: 0}); 
      this.setState({card5: 0});
      this.setState({card6: 0});
      this.setState({card7: 0});
      this.setState({card8: 0});
      this.setState({card9: 0});
      this.setState({card10: 0});
      this.setState({card11: 0});
      this.setState({card12: 0});
      


  } 

    console.log(this.state.card1, this.state.card2, this.state.card3)    

    this.shuffle(this.state.friends);

    
  };

  render() {
    return (
      <Wrapper>
        <Title
        score={this.state.score}
        topScore={this.state.topScore}
        />

        {
          this.state.friends.map(friend => <CharacterCard          
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            image={friend.image} /> )
        }        
      </Wrapper>
    );
  }
}

export default App;