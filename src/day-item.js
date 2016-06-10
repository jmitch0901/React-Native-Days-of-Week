import React,{
  View,
  Text,
  Component,
  StyleSheet
} from 'react-native';

export default class Day extends Component{

  _color(){
    const opacity = 1.0 / (this.props.daysUntil + 1);
    return 'rgba(0,0,0,'+opacity+')';
  }

  _fontWeight(){
    const weight = 7 - this.props.daysUntil;
    return weight * 100 + '';
  }

  _fontSize(){
    return 60 - 6 * this.props.daysUntil;
  }

  _lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }

  _style(){

    return {
      color: this._color(),
      fontWeight: this._fontWeight(),
      fontSize: this._fontSize(),
      lineHeight: this._lineHeight()

    };

  }

  render(){
    return(
      <Text style={this._style()}>
        {this.props.day}
      </Text>
    );
  }
}

// const styles = StyleSheet.create({
//   day: {
//     fontSize:18,
//     color:'#000FFF'
//   }
// });
