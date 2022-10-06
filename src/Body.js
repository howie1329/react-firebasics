import {React, useState} from "react";
import {db} from './firebase'
import {collection, doc,getDocs, addDoc, updateDoc,deleteDoc} from 'firebase/firestore'


function Body(){
    const [thingsArr,setThings] = useState([])
    const [newThing,setThing] = useState()

    //Creating Data to Database
    async function Create(text){
        console.log(newThing)
        const docRef = await addDoc(collection(db,'things'),{
            Name: text
        }).then(setThing(''))
    }

    //Reading From DataBase
    async function Read(){
        let dataArr = []
        const querySnapshot = await getDocs(collection(db,'things'))
        console.log(querySnapshot)
        querySnapshot.forEach((doc) =>{dataArr.push(doc.data())})
        setThings([...dataArr])
        console.log(thingsArr)
    }

    //Update Data In Database
    async function Update(){
        const thingsRef = doc(db,'things','rshG2ko4M5uxxZNWjyeb')
        await updateDoc(thingsRef,{Name: 'Howard'})
    }

    //Delete Data In Database
    async function Delete(){
        await deleteDoc(doc(db,'things','rshG2ko4M5uxxZNWjyeb'))
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-screen min-h-screen gap-3">
            <p className = 'text-2xl underline'>Hello World</p>
            <input className="border-2 border-black rounded text-center" value={newThing} placeholder="new thing" onChange = {(e) => setThing(e.target.value)} type = 'text'></input> 
            <button className = 'btn-prime' onClick = {() => Read()}>See Tasks</button>
            <button className = 'btn-prime' onClick = {() => Create(newThing)}>Create</button>
            <button className = 'btn-prime' onClick = {() => Update()}>Update</button>
            <button className = 'btn-prime' onClick = {() => Delete()}>Delete</button>
            {thingsArr.map(x => <p>{x['Name']}</p>)}
        </div>

    )
}

export default Body;