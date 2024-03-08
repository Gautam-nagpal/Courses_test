import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CourseListContainerStyled } from "./styled";
import { staticData } from "../../../staticData";
import { Button } from "../../common/CustomBtn";
import { CustomCard } from "../../common/CustomCard";
import { BookmarkIcon } from "./utils";


export default function Homepage(props) {
    const history = useHistory();

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [courseList, setCourseList] = useState([])

    useEffect(() => {
        // API hit to get all course List
        setCourseList(staticData)
    }, [])


    const handleSelectCourse = (course) => {
        setSelectedCourse(course)
    }

    const handleClickEnroll = () => {
        if (!(selectedCourse?.id)) {
            return alert("Select a Course to Enroll")
        }

        history.push(`/course/${selectedCourse?.id}/enroll/`)
    }

    return (
        <Grid item xs={12}>
            <Grid container className="d-block">
                <Grid item>
                    Courses List
                </Grid>

                <CourseListContainerStyled item>
                    {
                        courseList.length ? courseList.map((item, index) => {
                            return <React.Fragment key={index}>
                                <CustomCard
                                    item={item}
                                    handleSelectCourse={handleSelectCourse}
                                    selectedCourse={selectedCourse}
                                />
                            </React.Fragment>
                        })
                            : null
                    }
                </CourseListContainerStyled>
                <Grid item>
                    <Button title="Enroll in Course" width="33%" onClick={handleClickEnroll} />
                    <Button title="Save Course" width="33%" btnType="link" leftIcon={BookmarkIcon()} />
                </Grid>
            </Grid>
        </Grid>
    )
}
