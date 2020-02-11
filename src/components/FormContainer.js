import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

function FormContainer(props) {

    const handleSubmitButton = value => {
        const id = props.match.params.id;
        if (id) {
            props.onCourseEdited(value, id);
        } else {
            props.onCourseAdded(value);
        }
        props.history.push('/');
    }

    const handleCancelButton = () => {
        props.history.push('/');
    }

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmitButton} initialValues={props.currentCourse} handleCancel={handleCancelButton} />
        </React.Fragment>
    );
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            currentCourse: state.reducer.selectedCourse
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCourseAdded: newCourse => dispatch({ type: actionTypes.SET_COURSE, course: newCourse }),
        onCourseEdited: (newCourse, id) => dispatch({ type: actionTypes.EDIT_COURSE, course: newCourse, selectedCourseId: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);