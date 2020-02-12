import React from 'react';
import { connect } from 'react-redux';
import Button from '../ux/ButtonCompoent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import * as actionTypes from '../../redux/actions/courseActions';

function CourseList(props) {

    const [selectedCourseId, setSelectedCourseId] = React.useState(0);

    const columns = [{
        dataField: 'title',
        text: 'Title'
    },
    {
        dataField: 'length',
        text: 'Length'
    },
    {
        dataField: 'category',
        text: 'Category'
    },
    {
        dataField: 'author',
        text: 'Author'
    }];

    const handleAddClicked = () => {
        props.history.push('/form');
    };

    const handleEditClicked = () => {
        if (selectedCourseId) {
            props.getCourse(selectedCourseId.selectedCourseId);
            setSelectedCourseId({selectedCourseId: undefined});         
            props.history.push(`/course/${selectedCourseId.selectedCourseId}`);
        }   
    };

    const handleDeleteClicked = () => {
        props.onCourseDeleted(selectedCourseId.selectedCourseId);
    };

    const handleRowSelect = (isSelected) => {
        if (isSelected) {
            setSelectedCourseId({selectedCourseId: isSelected.id});
        }
    }

    const selectRow = {
        mode: 'radio',
        bgColor: '#c1f291',
        onSelect: handleRowSelect,
        clickToSelect: true,
        hideSelectColumn: true
    };

    return (
        <React.Fragment>
            <Button type='Add' onClick={handleAddClicked} />
            <Button type='Edit' onClick={handleEditClicked} />
            <Button type='Delete' onClick={handleDeleteClicked} />
            <BootstrapTable keyField='title' data={props.courses} columns={columns} selectRow={selectRow} /* options={this.options}*/ bordered={false} striped hover condensed>
            </BootstrapTable>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return{
        courses: state.reducer.courses
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onCourseDeleted: id => dispatch({ type: actionTypes.DELETE_COURSE, selectedCourseId: id }),
        getCourse: id => dispatch({ type: actionTypes.GET_COURSE, selectedCourseId: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
