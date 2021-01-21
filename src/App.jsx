import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes"

function newNote(oneNote){
    return(
        <Note 
        title = {oneNote.title}
        content = {oneNote.content}
        />
    )
}

function App(){
    return(
        <div>
            <Header />
            {notes.map(newNote)}
            <Footer />

        </div>
    );
}

export default App;

