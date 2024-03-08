import React from "react";
import { CustInstorCard } from "../CustomInstCard";
import { CustCardWrapperStyled } from "./styled";
import RadioBtn from "../RadioBtn";
import { convertToFormattedDate, getDaysDate } from "../../../utils";
import { useMemo } from "react";



export const CustomCard = (props) => {
    const { className = "", item = {}, handleSelectCourse = () => { }, selectedCourse = {} } = props;

    const { id = "", instructors = [], location = {}, pricing, dates } = item;

    const isSelected = (id === selectedCourse?.id) ? true : false;


    const DatesValues = useMemo(() => {
        return getDaysDate(dates)
    }, [dates])

    if (!item?.id) return null;

    return <CustCardWrapperStyled
        className={className}
        onClick={() => { handleSelectCourse(item) }}
    >
        <div>
            <div className="card-top-sec">
                <RadioBtn checked={isSelected} />
            </div>
            <div className="card-content">
                <div className="card-middle-sec">
                    <div className="card-dates-sec">
                        <div className="card-dates">{DatesValues.date}</div>
                        <div className="card-time">{DatesValues.time}</div>
                        <div className="card-timezone">{location.timezone || ""}</div>
                    </div>
                    <CustInstorCard instructors={instructors} />
                </div>
                <div className="card-price-sec">
                    <span>${pricing.amount} {pricing.currency}</span> Until {convertToFormattedDate(pricing.valid_until, { day: 'numeric', weekday: 'long' })}
                </div>
            </div>
        </div>


    </CustCardWrapperStyled>
}