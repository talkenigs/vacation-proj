import {useState, useContext, useEffect} from 'react'
import axios from "axios";
import { UserContext } from "../Context/UserProvider";

function GetVacations(callback) {
    const userNow = useContext(UserContext)
    const [vacList, setList] = useState("wait")

    useEffect(() => {    
     axios.get("http://127.0.0.1:4000/getvacations", {
          params: {
            user: userNow.id
          }
        }).then((res) => {
          let userList = res.data.userList.listUser
          let allList = res.data.vacList.listAll
          if (userList.length > 0) {
          for (let i in userList) {
          for (let j in allList) {
            if(allList[j].vacation_id === userList[i].vacation_id) {
              let tempVac = allList[j]
              tempVac.isUser = true
            allList.splice(j, 1)
            allList.splice(0, 0, tempVac)
                }
          }}
          setList(allList)
      }})
        }, []);
        return vacList
}

export default GetVacations
