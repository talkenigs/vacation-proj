import React, {useState, useContext, useEffect} from 'react'
import axios from "axios";
import { UserContext } from "../Context/UserProvider";

function GetVacations() {
    const userNow = useContext(UserContext)
    const [vacList, setList] = useState()

    useEffect(() => {
        const fetchList = async () => {
        const response = await axios.get("http://127.0.0.1:4000/getvacations", {
          params: {
            user: userNow.id
          }
        }).then((response) => {
            let userList = response.data.userList.listUser
            let allList = response.data.vacList.listAll
            if (userList.length > 0) {
            for (let i in userList) {
            for (let j in allList) {
              if(allList[j].vacation_id === userList[i].vacation_id) {
                let tempVac = allList[j]
                tempVac.isUser = true
              allList.splice(j, 1)
              allList.splice(0, 0, tempVac)
                  }
            }}}
            setList(allList)
            });
        }
    
      fetchList();
    });

    // const fetchList = async () => {
    //     const response = await axios.get("http://127.0.0.1:4000/getvacations", {
    //       params: {
    //         user: userNow.id
    //       }
    //     });
    //     let userList = response.data.userList.listUser
    //     let allList = response.data.vacList.listAll
    //     if (userList.length > 0) {
    //     for (let i in userList) {
    //     for (let j in allList) {
    //       if(allList[j].vacation_id === userList[i].vacation_id) {
    //         let tempVac = allList[j]
    //         tempVac.isUser = true
    //       allList.splice(j, 1)
    //       allList.splice(0, 0, tempVac)
    //           }
    //     }}}
    //     setList(allList)
    //     };
    //     console.log(allList)

    //   fetchList();

    return vacList
}

export default GetVacations
