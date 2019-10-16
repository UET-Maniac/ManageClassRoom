import React, {Component, forwardRef} from 'react'
import MaterialTable from 'material-table'
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

class AccountPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            accounts: null
        }

    }

    onCreateAccount = (data) => {
        this.props.onCreateAccount({
            username: data.username,
            password: data.password,
            role: data.role,
        })
    }

    // onEditUnit = () => {
    //     this.props.onEditUnit({
    //         id: this.state.id,
    //         nameVi: this.state.nameVi,
    //         notation: this.state.notation,
    //     })
    // }

    render() {
        const {accounts} = this.props
        const columns = [
            {title: 'ID', field: 'id', editable: 'never', hidden: true},
            {title: 'Username', field: 'username', type: 'string'},
            {
                title: 'Password', field: 'password', type: 'string',
            },
            {
                title: 'Role', field: 'role', type: 'string', 
                lookup: { 'admin': 'Admin', 'student': 'Student', 'lecturer': 'Lecturer' }    
            },
        ]
       
        if(accounts !== null) {
            accounts.map((item, index) => {
                if(item.tableData !== undefined) 
                item.tableData.editing = undefined
                item.password = '*******'
            })
            console.log(accounts)
        }


        return (
            <div>
                {accounts !== null && 
                <MaterialTable
                    icons={tableIcons}
                    title="Account Manager"
                    columns={columns}
                    data={accounts}
                    editable={{
                        onRowAdd: newData => 
                            new Promise(resolve => {
                                setTimeout(() =>  {
                                    this.onCreateAccount(newData)
                                    // accounts.push(newData)
                                    resolve();
                                    
                                }, 600)
                            }),
                        onRowUpdate:  (newData, oldData) => 
                            new Promise(resolve => {
                                setTimeout(() => {
                                    // resolve()
                                    // this.setState({
                                    //     id: newData.id,
                                    //     notation: newData.notation,
                                    //     nameVi: newData.nameVi,
                                    // })
                                    // this.onEditUnit()

                                }, 600)
                            }),
                        onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                            resolve();
                                console.log("Delete: ")
                            }, 600);
                        }),
                    }}
                    options={{
                        actionsColumnIndex: -1
                      }}
                />
            }
            </div>
        )
    }
}

export default AccountPage