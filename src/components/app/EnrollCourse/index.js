import { Button, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { staticData } from "../../../staticData";
import { CustomCard } from "../../common/CustomCard";

export default function EnrollCourse(props) {
    const { id } = useParams();

    const [enrolledCourse, setEnrolledCourse] = useState(null)

    useEffect(() => {
        //find Course and set it
        let enrolledCoursed = staticData.find((item) => item.id == id)
        setEnrolledCourse(enrolledCoursed)
    }, [id])


    return (
        <Grid item xs={12}>
            <Grid container className="d-flex jc-center">
                <Grid item={12} >
                    <Typography>You are Enrolled to this course</Typography>
                </Grid>

                <Grid item xs={12} className="d-flex jc-center">
                    {
                        enrolledCourse ?
                            <CustomCard item={enrolledCourse} selectedCourse={enrolledCourse} />
                            : null
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

