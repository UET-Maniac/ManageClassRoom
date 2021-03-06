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
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip';
import {withStyles, FormLabel, RadioGroup, FormControlLabel, Radio, Dialog, DialogTitle, FormControl, Fab, Button, Paper, Typography} from '@material-ui/core'
import { lookup } from 'dns';

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

const styles = theme => ({
    formControl: {
        margin: theme.spacing(2),
        marginLeft: theme.spacing(10),
    },
    hover: {
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
            textDecoration: 'underline',
        }
    }
})

class RequestManagerPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const {classes} = this.props
        /**
         * Table Schema: RequestForm
         * ID           auto
         * Title        string
         * Content      string
         * Status       string(enum of status: waiting, cancled, checked, accepted)
         * AppliedBy    string(=username)
         * Response     string
         * CreatedBy    string(=username)
         * CreatedAt    date
         * AppliedAt    date
         */

        const columns = [
            {field: 'id', hidden: true},
            {field: 'title'},
            {field: 'createdBy'},
        ]
        const data = [{
            id: 1,
            title: "One",
            createdBy: "HoangPhu"
        },{
            id: 1,
            title: "One",
            createdBy: "HoangPhu"
        }]
        return (
            <Fragment>
                <Paper className={classes.hover}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
                </Paper>
                <Paper className={classes.hover}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
                </Paper>
            </Fragment>
        )
    }
}

RequestManagerPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RequestManagerPage)