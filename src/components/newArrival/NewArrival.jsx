import { useState, useRef, useEffect } from "react"
import Container from "../container/Container"
import axios from "axios";
//importing assets
import icons from "../../assets/icons/icons"


export default function NewArrival() {
    const [activ, setActive] = useState('');
    //create a cont for feaching data
    const [data, setData] = useState([]);

    const letButton = useRef(null);
    const rightButton = useRef(null);

    const handelLetClicked = () => {
        setActive('left');
        if (activ === 'left') {
            letButton.current.style.backgroundColor = '#E7CEC0'
        } else {
            rightButton.current.style.backgroundcolor = '#E6E6E6'
        }
    }
    const handelRightClicked = () => {
        setActive('right');
        if (activ === 'right') {
            letButton.current.style.backgroundColor = '#E7CEC0'
        } else {
            rightButton.current.style.backgroundcolor = '#E6E6E6'
        }
    }
    //send request to server
    useEffect(() => {
        axios.get('http://localhost:3000/newArrival')
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(`error is : ${err}`);
            })
    }, [])

    return (
        <>
            <Container>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-2 h-[76px]">
                            <h2 className="text-[40px] text-black font-medium my-0">New Arrival</h2>
                            <p className="text-[#666666] font-medium">Be the first to have the first-class product</p>
                        </div>
                        <div className="flex gap-5">
                            <button ref={letButton} onClick={handelLetClicked} className="w-[40px] h-[40px] rounded-[100%] border flex justify-center items-center bg-[#E6E6E6]">
                                <img src={icons.leftBordar} alt="left bordar" />
                            </button>
                            <button ref={rightButton} className="w-[40px] h-[40px] rounded-[100%] border flex justify-center items-center bg-[#E6E6E6]">
                                <img src={icons.rightBordar} alt="right border" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        {/* feaching data */}
                        {data.map(arrivalItem => {
                            return (
                                <div className="flex flex-col my-10 w-[312px] h-[408px] p-1" key={arrivalItem.id}>
                                    <img src={arrivalItem.arrivalImage} alt={arrivalItem.arrivalDescription} />
                                    <h2 className="pr-10 text-[#333333] font-bold ">{arrivalItem.arrivalDescription}</h2>
                                    <p className="mt-2 text-[13px] font-bold text-[#658C4A]">Rp {arrivalItem.arrivalPrice}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-center items-center my-5">
                        <button className="bg-[#658C4A] text-[#FFFFFF] w-[122px] h-[38px] rounded-[20px] p-1">See More</button>
                    </div>
                </div>
            </Container>
        </>
    )
}