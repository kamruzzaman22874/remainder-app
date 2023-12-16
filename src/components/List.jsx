
const List = ({ list, Old, upcoming }) => {
    const bgColor = upcoming ? { backgroundColor: '#ffe66d' } : {};
    return (
        <div>
            <ul>
                {
                    list.map((item, idx) => <li key={idx} className="list-none" >
                        <div className="flex justify-center items-center gap-10 text-start bg-[#06d6a0] w-72  mx-auto rounded p-3 shadow-2xl mb-5" style={bgColor}>
                            <img className="w-20" src={item.img} alt="img" />
                            <div>
                                <h3>{item.name}</h3>
                                <h5>{Old(item.birthday)} Years</h5>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div >
    );
};

export default List;