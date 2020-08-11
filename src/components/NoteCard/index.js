import React from 'react'
import PropTypes from 'prop-types';
import StyledNoteCard, { NoteImage, NoteTitle, NoteExcerpt, NotePublishTime } from "./style"
import note1 from "assets/images/note-1.jpg"


function NoteCard({children, ...rest}) {
    return (
        <StyledNoteCard {...rest}>
            <NoteImage src={note1} />
            <NoteTitle>This is Note Title</NoteTitle>
            <NoteExcerpt>This is Note Description</NoteExcerpt>
            <NotePublishTime>2020-08-10</NotePublishTime>
        </StyledNoteCard>
    )
}

NoteCard.propTypes = {
   children: PropTypes.any
}

export default NoteCard
