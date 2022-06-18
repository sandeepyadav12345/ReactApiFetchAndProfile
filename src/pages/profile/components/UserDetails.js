import { useState } from 'react';
import '../../../App.css';
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';


function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomName() {
    return "Sandeep Yadav ";
}
function randomProfile() {
    return "2.jpg ";
}
function randomDescription() {
    return "I am  MERN Stack trainee at EBpearls company. I love to code.";
}


function App() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [name, setName] = useState(randomName());
    const [profile, setProfile] = useState(randomProfile());
    const [description, setDescription] = useState(randomDescription());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    const [color, setColor] = useState(randomColor());

    const stored = {name, month, day, color,description,profile};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setProfile(result.profile);
            setDescription(result.description);
            setMonth(result.month);
            setDay(result.day);
            setColor(result.color);
        }        
        setEditMode(false);
    }

    return (
        <div className="container">
            <div className="App">                 
                {
                    editMode
                        ? <>
                            <h1>My Profile</h1>
                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            {
                                isBirthdayToday
                                    ? <div className="birthday">Happy Birthday!</div>
                                    : <h1>My Profile</h1>
                            }
                            <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
           
        </div>
    );
}

export default App;
