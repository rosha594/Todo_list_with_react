import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function Todo({todo}) {
  return (
   <List>
    <ListItem>
        <ListItemText primary = {todo} secondary={todo}/>
    </ListItem>
   </List>
  )
}

export default Todo