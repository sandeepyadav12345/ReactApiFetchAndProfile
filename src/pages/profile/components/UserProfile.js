import { useState } from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from '../../../tools';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return  <div>
       
        <Group>

        <img className="profile-image"  src={`/images/${stored.profile}`}  alt="logo" />

        </Group>
           
        <Group>
            <h2>Name:</h2> {stored.name}
        </Group>
        <Group>
            <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <h2>Favourite Color:</h2> <ColorBox color={stored.color}/>
        </Group>
        <Group>
            <h2>Description</h2>{stored.description}
        </Group>
        <Group>
            <button
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}