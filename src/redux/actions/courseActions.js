
/**
 *  Constants
 */
export const SET_COURSE = 'SET_COURSE';
export const EDIT_COURSE = 'EDIT_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const GET_COURSE = 'GET_COURSE';

/**
 *  Actions
 */
export const setCourse = payload => {
    return ({ type: SET_COURSE, course: payload });
};

export const editCourse = (payload, id) => {
    return ({ type: EDIT_COURSE, course: payload, selectedCourseId: id });
};

export const deleteCourse = id => {
    return ({ type: DELETE_COURSE, selectedCourseId: id });
};

export const getCourse = id => {
    return ({ type: GET_COURSE, selectedCourseId: id });
};