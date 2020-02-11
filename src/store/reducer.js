import * as actionTypes from './actions';

const initialState = {
    courses: [
        {
            id: "React1",
            title: "React1",
            author: "Siddharth",
            length: "5:08",
            category: "JavaScript"
        },
        {
            id: "React2",
            title: "React2",
            author: "Muskan",
            length: "3:10",
            category: "Javascript"
        }
    ],
    selectedCourse: {
        id: "",
        title: "",
        author: "",
        length: "",
        category: ""
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_COURSE:
            return {
                ...state,
                courses: [
                    ...state.courses,
                    {
                        ...action.course,
                        id: action.course.title
                    }
                ]
            };
        case actionTypes.DELETE_COURSE:
            const indexOfCourseToDelete = state.courses.findIndex(x => x.id === action.selectedCourseId);
            state.courses.splice(indexOfCourseToDelete, 1);
            return {
                ...state,
                courses: [
                    ...state.courses
                ]
            };
        case actionTypes.EDIT_COURSE:
            const indexOfCourseToEdit = state.courses.findIndex(x => x.id === action.selectedCourseId);
            const newCourse = {...action.course, id: action.course.title}
            state.courses.splice(indexOfCourseToEdit, 1, newCourse);
            return {
                ...state,
                courses: [
                    ...state.courses
                ]
            }
        case actionTypes.GET_COURSE:
            const indexToGetCourse = state.courses.findIndex(x => x.id === action.selectedCourseId);
            return{
                ...state,
                selectedCourse: Object.assign(state.selectedCourse, state.courses[indexToGetCourse])
            }
        default:
            return state;
    }
};