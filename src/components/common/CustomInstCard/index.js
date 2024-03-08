import React from "react";
import { CustInstCardWrapperStyled } from "./styled";



export const CustInstorCard = (props) => {
    const { className, instructors } = props;
    let instructorObj = instructors[0];

    return <CustInstCardWrapperStyled
        className={className}
    >
        <div>
            <img
                className="instructor-img"
                src={instructorObj.portrait_image || ""}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://i.pinimg.com/474x/80/29/53/8029531c433b7d0e2bf48ca6429ef325.jpg";
                }}
                alt="instructor"
            />
        </div>
        <div>
            {instructorObj ? `${instructorObj.first_name} ${instructorObj.last_name}` : "Instructor: Name"}
        </div>


    </CustInstCardWrapperStyled>
}