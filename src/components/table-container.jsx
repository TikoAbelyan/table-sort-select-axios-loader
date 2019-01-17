import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/get-data';
import { sortUp } from '../actions/sort-action';
import { sortDown } from '../actions/sort-action';
import {  sortNamesUp , 
          sortNamesDown , 
          sortLastNamesDown , 
          sortLastNamesUp ,
          sortEmailUp ,
          sortEmailDown ,
          sortPhoneUp ,
          sortPhoneDown ,
        } from '../actions/sort-action';
import './table.scss';
import App from './App';
import CircularProgress from '@material-ui/core/CircularProgress';


class TableSort extends PureComponent {
  componentDidMount() {
    this.props.getData();
  }
  sortUp = () => {
    this.props.sortUp({
      items: this.props.data.items ,
    })
  }
  sortDown = () => {
    this.props.sortDown({
      items: this.props.data.items ,
    })
  }
  sortNamesUp = () => {
    this.props.sortNamesUp({
      items: this.props.data.items
    })
  }
  sortNamesDown = () => {
    this.props.sortNamesDown({
      items: this.props.data.items
    })
  }
  sortLastNamesUp = () => {
    this.props.sortLastNamesUp({
      items:this.props.data.items
    })
  }
  sortLastNamesDown = () => {
    this.props.sortLastNamesDown({
      items:this.props.data.items
    })
  }
  sortEmailUp = () => {
    this.props.sortEmailUp({
      items:this.props.data.items
    })
  }
  sortEmailDown = () => {
    this.props.sortEmailDown({
      items:this.props.data.items
    })
  }
  sortPhoneUp = () => {
    this.props.sortPhoneUp({
      items:this.props.data.items
    })
  }
  sortPhoneDown = () => {
    this.props.sortPhoneDown({
      items:this.props.data.items
    })
  }
  render() {
    return (
      this.props.data.items !== undefined
      ?
      <App 
        data={this.props.data}
        sortUp={this.sortUp}
        sortDown={this.sortDown}
        sortNamesUp={this.sortNamesUp}
        sortNamesDown={this.sortNamesDown}
        sortLastNamesUp={this.sortLastNamesUp}
        sortLastNamesDown={this.sortLastNamesDown}
        sortEmailUp={this.sortEmailUp}
        sortEmailDown={this.sortEmailDown}
        sortPhoneUp={this.sortPhoneUp}
        sortPhoneDown={this.sortPhoneDown}
      /> 
      :
      <CircularProgress className="spinner"/>
    ) 
  }
}
const mapStateToProps = state => ({
  data: state.data ,
});

const mapDispatchToProps = {
  getData ,
  sortUp ,
  sortDown ,
  sortNamesUp ,
  sortNamesDown ,
  sortLastNamesUp ,
  sortLastNamesDown ,
  sortEmailUp ,
  sortEmailDown ,
  sortPhoneUp ,
  sortPhoneDown ,
};
export default connect(mapStateToProps, mapDispatchToProps)(TableSort);
