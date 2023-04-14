

export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await response.json();
    return dataUsers;
}

export const  getPost = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataPost = await response.json();
    return dataPost;
}

export const fetchData = async () => {
try {
        
    const response1 = await fetch ("https://api.thingspeak.com/channels/2075343/fields/1.json", { method: "GET" });
    const getresponse1 = await response1.json();
    const response2 = await fetch ("https://api.thingspeak.com/channels/2075343/fields/2.json", { method: "GET" });
    const getresponse2 = await response2.json();
    return [getresponse1.feeds, getresponse2.feeds]
    }catch(error){
        console.error(error)
    }
}

