import React, {useState, useContext, useEffect} from 'react'
import axios from "axios";
import { UserContext } from "./UserProvider";

export const VacationsContext = React.createContext()

export function VacationsProvider({ children }) {
    const userNow = useContext(UserContext)
    const [vacList, setList] = useState()

    useEffect(() => {    
        axios.get("/getvacations", {
             params: { 
               user: userNow.id 
             }
           }).then((res) => {
             let userList = res.data.userList.listUser
             let allList = res.data.vacList.listAll
            //  if (userList.length > 0) {
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
         })
           }, []);

    return (
        <>
            <VacationsContext.Provider value={vacList} >
            {children}
            </VacationsContext.Provider>
        </>
    )
}

export default VacationsProvider
