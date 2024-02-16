import React, { useEffect, useState } from 'react'
const URL = 'https://jsonplaceholder.typicode.com/posts'

export const Effect = () => {
    const [apiData, setApidata] = useState([])
    const [editedTitle, setEditedTitle] = useState('');
    const [editItemId, setEditItemId] = useState(null);
  
    useEffect(() => {
        const data = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setApidata(data)
        }
        data()
    },[])

    const handleDelete = (id) => {
        const deldata = apiData.filter((item) =>  item.id !== id )
        setApidata(deldata)
    }

    const handleEdit = (id, title) => {
        setEditItemId(id);
        setEditedTitle(title);
    }

    const handleUpdate = (id) => {
        const updatedData = apiData.map((item) => {
            if (item.id === id) {
              return { ...item, title: editedTitle };
            }
            return item;
          });
          setApidata(updatedData);
          setEditItemId(null);
          setEditedTitle('');
        };

  return (
    <div>
       {apiData.map((elem) => (
        <p key={elem.id}>
          {editItemId === elem.id ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <button onClick={() => handleUpdate(elem.id)}>Update</button>
            </>
          ) : (
            <>
              {elem.title}
              <span onClick={() => handleDelete(elem.id)}> - </span>
              <span onClick={() => handleEdit(elem.id, elem.title)}> Edit </span>
            </>
          )}
        </p>
      ))}
    </div>
  )
}
