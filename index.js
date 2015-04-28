
var React = require('react-native');

var { TextInput, View, StyleSheet, } = React;

class TextInputFooter extends React.Component {

  constructor(props){
    this.state = {
      input:'',
    }
  }

  render(){
    return (
      <TextInput
        style={styles.inputBox}
        editable={true}
        placeholder={'Write something here...'}
        value={this.state.input}
        onEndEditing={this.props.toggleEditState}
        onFocus={this.props.toggleEditState}
        onSubmitEditing={this._handleSubmit.bind(this)}
        clearButtonMode='while-editing'
        onChangeText={(text) => this.setState({input: text})}
      />
    );
  }

  _handleSubmit(){
    console.log(this.input);
    this.setState({input:''});
  }

};

var styles = StyleSheet.create({
  inputBox: {
    height: 50, 
    padding: 10, 
    flex: 1, 
    backgroundColor: 'white', 
    fontFamily: 'Avenir', 
    fontSize: 20,
  }
});

module.exports = TextInputFooter;
