import List from "./List";
import { useEffect, useState } from "react";

const RemainderMain = () => {
    const [remainder, SetRemainder] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => SetRemainder(data))
    }, [])

    const Old = (personAge) => {
        let year = new Date(personAge).getFullYear();
        let currentYear = new Date().getFullYear();
        let age = currentYear - year;
        return age;
    }

    const Today = (person) => {
        let currentDay = new Date().getDate();
        let currentMonth = new Date().getMonth();

        let filter = person?.filter(data => {
            let day = new Date(data.birthday).getDate();
            let month = new Date(data.birthday).getMonth();
            return currentDay == day && currentMonth == month;

        });
        return filter;
    };


    const Upcoming = (person, toMonth) => {
        let currentMonth = new Date().getMonth();
        let currentDay = new Date().getDate();

        let filter = person.filter(item => {
            let month = new Date(item.birthday).getMonth();
            let day = new Date(item.birthday).getDate();
            console.log(month, day);

            if (currentDay == day) return;
            return month >= currentMonth && month <= currentMonth + toMonth;
        })

        console.log(filter);

        return filter;
    }
    return (
        <main>
            <h2 className="text-center text-3xl flex justify-center items-center  font-roboto my-10">Birthday Remainder</h2>
            <div className="">
                <h2 className="text-center my-2 text-xl font-semibold">Todays Bithday</h2>
                <List list={Today(remainder)} Old={Old}></List>
                <h2 className="text-center my-2 text-xl font-semibold">Upcoming Bithday</h2>
                <List list={Upcoming(remainder, 3)} Old={Old} upcoming={true} ></List>

            </div>
        </main >
    );
};

export default RemainderMain;