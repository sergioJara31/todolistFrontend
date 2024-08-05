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


export const addTask = async (title, description) => {
    try {
        const response = await fetch("http://localhost:3000/todo/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                "title": title, 
                "description":description 
            })
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
            body: JSON.stringify({ "title": title, "description":description })
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
  };



  export const checkItem = async (id, completed) => {
    try {
      const response = await fetch(`http://localhost:3000/todo/update/${id}` , {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "completed": !completed }),
      });
      const result = await response.json();
      console.log(result)
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  