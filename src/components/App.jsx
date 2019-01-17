import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableRow: {
    cursor: 'pointer'
  },
  panel: {
    width: '100%' ,
    display: 'flex',
    justifyContent: 'space-between!important'
  },
  tableCell: {
    padding: '0!important'
  } ,
  heading: {
    width: '100%' ,
    textAlign: 'center'
  } ,
  select: {
    width: '80px' ,
    fontSize: '1rem' ,
  }
});

class App extends PureComponent {
  state = {
    items: this.props.data.items,
    currentPage: 1 ,
    itemsPerPage: 15 ,
  };
  nextPage = (event) => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }
  previousPage = (event) => {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }
  onSelectChange = (event) => {
    this.setState({
      currentPage: event.target.value
    })
  }
  render() {
    const { classes } = this.props;
    const { items, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = this.state.items !== undefined 
                        ? 
                        items.slice(indexOfFirstItem, indexOfLastItem)
                        : 
                        null;
    const renderItems = 
    <Table>
      <TableBody>
      {currentItem.map((item, index) => {
        return (
                <TableRow 
                  key={index} 
                  className={classes.tableRow}
                >
                  <TableCell component="th" scope="row" className={classes.tableCell}>
                    <ExpansionPanel>
                      <ExpansionPanelSummary className="mecdiv">
                        <div className={classes.panel}>
                        <Typography className={classes.heading} component="div">{item.id}</Typography>
                        <Typography className={classes.heading} component="div">{item.firstName}</Typography>
                        <Typography className={classes.heading} component="div">{item.lastName}</Typography>
                        <Typography className={classes.heading} component="div">{item.email}</Typography>
                        <Typography className={classes.heading} component="div">{item.phone}</Typography>
                        </div>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography component="h1" variant="h5">
                          {item.firstName} {item.lastName}
                        </Typography>
                      </ExpansionPanelDetails>
                      <ExpansionPanelDetails className="info">
                        <List className={classes.root}>
                          <ListItem>
                            <ListItemText primary="Description" secondary={item.description} />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText primary="Street" secondary={item.address.streetAddress} />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText primary="City" secondary={item.address.city} />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText primary="State" secondary={item.address.state} />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText primary="Index" secondary={item.address.zip} />
                          </ListItem>
                          <Divider component="li" />
                        </List>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </TableCell>
                </TableRow>
              );
        })}
      </TableBody>
    </Table>
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    const right = 
                  <IconButton 
                    onClick={this.nextPage}
                    disabled={
                      this.state.currentPage === pageNumbers.length 
                      ? true 
                      : false
                    }
                    >
                    <i className="material-icons">
                      keyboard_arrow_right
                    </i>
                  </IconButton>
    const left = 
                <IconButton 
                  onClick={this.previousPage}
                  disabled={this.state.currentPage === 1 ? true : false}
                  >
                  <i className="material-icons">
                    keyboard_arrow_left
                  </i>
                </IconButton>
    return (
      <main className="content">
          <AppBar position="static">
            <Toolbar className="nav">
              <Typography variant="h4" color="inherit">
                  ID
                  <i className="material-icons arrow" 
                    onClick={
                      this.props.data.sortedUp 
                      ? this.props.sortDown 
                      : this.props.sortUp
                    }
                  >
                    { this.props.data.sortedUp 
                      ? 'arrow_drop_up' 
                      : 'arrow_drop_down' }
                  </i>
              </Typography>
              <Typography variant="h4" color="inherit">
                firstName
                <i className="material-icons arrow" 
                  onClick = {
                    this.props.data.sortedByNamesUp 
                    ? 
                    this.props.sortNamesDown 
                    : 
                    this.props.sortNamesUp
                  }>
                    { this.props.data.sortedByNamesUp 
                      ? 'arrow_drop_up' 
                      : 'arrow_drop_down' 
                    }
                  </i>
              </Typography>
              <Typography variant="h4" color="inherit">
                  lastName
                  <i className="material-icons arrow"
                    onClick={
                      this.props.data.sortedByLastNamesUp
                      ?
                      this.props.sortLastNamesDown
                      :
                      this.props.sortLastNamesUp
                    }
                  >
                    { this.props.data.sortedByLastNamesUp 
                      ? 'arrow_drop_up' 
                      : 'arrow_drop_down' 
                    }
                  </i>
              </Typography>
              <Typography variant="h4" color="inherit">
                  email
                  <i className="material-icons arrow"
                    onClick={
                      this.props.data.sortedByEmailUp
                      ?
                      this.props.sortEmailDown
                      :
                      this.props.sortEmailUp
                    }
                  >
                    { this.props.data.sortedByEmailUp 
                      ? 'arrow_drop_up' 
                      : 'arrow_drop_down' 
                    }
                  </i>
              </Typography>
              <Typography variant="h4" color="inherit">
                  phone
                  <i className="material-icons arrow" 
                    onClick={
                      this.props.data.sortedByPhoneUp
                      ?
                      this.props.sortPhoneDown
                      :
                      this.props.sortPhoneUp
                    }
                  >
                    { this.props.data.sortedByPhoneUp 
                      ? 'arrow_drop_up' 
                      : 'arrow_drop_down' 
                    }
                  </i>
              </Typography>
            </Toolbar>
          </AppBar>
        {renderItems}
        <div className="pagination">
          <div className="pages">
              <Select
                value={this.state.currentPage}
                onChange={this.onSelectChange}
                className={classes.select}
              >
                {
                  pageNumbers.map( (v,i) => {
                    return <MenuItem value={v} key={i}>{v}</MenuItem>
                  })
                }
              </Select>
              of {pageNumbers.length}
          </div>
          <div className="nav-icons">
            {left} {right}
          </div>
        </div>
      </main>
    ) 
  }
}
export default withStyles(styles)(App);
