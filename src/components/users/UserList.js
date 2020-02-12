import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';
import CircularProgress from '@material-ui/core/CircularProgress'

function UserList(props) {

    React.useEffect(() => {
        props.getUsers();
    }, [])

    const columns = [{
        dataField: 'id',
        text: 'ID'
    },
    {
        dataField: 'name',
        text: 'Name'
    },
    {
        dataField: 'username',
        text: 'Username'
    },
    {
        dataField: 'email',
        text: 'Email'
    },
    {
        dataField: 'phone',
        text: 'Phone'
    },
    {
        dataField: 'website',
        text: 'Website'
    }];

    return (
        <React.Fragment>
            {props.loading ?
                <CircularProgress />
                :
                <BootstrapTable keyField='id' data={props.users} columns={columns} striped hover condensed />
            }
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.userList,
        loading: state.userReducer.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);