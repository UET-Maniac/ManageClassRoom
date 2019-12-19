import React, {Component, forwardRef, Fragment} from 'react'
import PropTypes from 'prop-types'
import MaterialTable, {MTableToolbar} from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {withStyles, FormLabel, RadioGroup, FormControlLabel, Radio, Dialog, DialogTitle, FormControl, Fab, Button, InputLabel, Select, MenuItem, FormHelperText} from '@material-ui/core'
// import {fetchClasses, createRoom} from '../../../api/index';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class ClassPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        classes: null,
        term: '',
    }
  }

  componentDidMount() {

  }

  handleChangeTerm = event => {
    console.log(event.target.value)
    this.setState({term: event.target.value})
  }

  render() {
    const {classes} = this.props
    const {term} = this.state

    return (
      <Fragment>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Học kỳ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={term}
          onChange={this.handleChangeTerm}
        >
          <MenuItem value={"HK I 2019-2020"}>HK I 2019-2020</MenuItem>
          <MenuItem value={"HK II 2019-2020"}>HK II 2019-2020</MenuItem>
        </Select>
        <FormHelperText>Chọn kỳ học để lấy danh sách lớp học</FormHelperText>
      </FormControl>
      </Fragment>
    )
  }
}

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240
  }
})

ClassPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ClassPage)