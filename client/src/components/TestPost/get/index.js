import React, {useEffect, useState} from 'react';
import API from '../../../API';
import './style.css';

const Get = () => {
    const [notes, setNotes] = useState([]);


    const getNotes = async () => {
        //ansycronously get data from DB
        const response = await API.getTests();
        //isolate the data object in our response
        const data = response.data;
        //set the notes state to the data from our db
        //console.log(data);
        setNotes(data);
    };

    const removeNote = (_id) => {
        console.log('delete button clicked')
        API.deleteNote(_id).then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        getNotes();
    }, [notes]);

    return (
        <div>
            <div>
                {notes.map((note) => {
                    return (
                        <div key={note._id} className="z-depth-5 note row">
                            <div className="col s10">
                            <h2>{note.message}</h2>
                            <br></br>
                            <div>{note._id}</div>
                            </div>
                            <div className="col s2">
                                <button className="btn red white-text" onClick={() => removeNote(note._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Get;

