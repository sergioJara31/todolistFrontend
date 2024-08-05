export const getAll= async ()=>{
    try {
        const response=  await fetch("http://localhost:3000/todo/all");
        const data=await response.json(); 
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}


export const addTodo = async (newTodo) => {
    try {
        const response = await fetch(`http://localhost:3000/todo/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};




export const deleteTask = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/todo/delete/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
  };
  
  
  
  export const updateTask = async (id, updatedTodo) => {
    try {
        const response = await fetch(`http://localhost:3000/todo/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
  };
  