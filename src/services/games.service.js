const baseUrl = "http://localhost:8080/api";
export const fetchAllGames = async () => {
    try {
        const res = await fetch(`${baseUrl}/games`, { method: "GET" });
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.log("An error occured while getting games => ", error.message);
    }
}

export const fetchAllGameMechanics = async () => {
    try {
        const res = await fetch(`${baseUrl}/game-mechanic`, { method: "GET" });
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.log("An error occured while getting game mechanics => ", error.message);
    }
}

export const fetchGameById = async (id = "") => {
    try {
        const res = await fetch(`${baseUrl}/games/${id}`, { method: "GET" });
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.log("An error occured while getting games => ", error.message);
    }
}

export const deleteGame = async (id = "") => {
    try {
        const res = await fetch(`${baseUrl}/games/${id}`, { method: "DELETE" });
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.log("An error occured while deleting the game => ", error.message);
    }
}

export const deleteGameMechnic = async (id = "") => {
    try {
        const res = await fetch(`${baseUrl}/game-mechanic/${id}`, { method: "DELETE" });
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.log("An error occured while deleting the game => ", error.message);
    }
}

export const AddGameApi = async (payload = { name: '', genre: '', description: '' }) => {
    try {
        const res = await fetch(`${baseUrl}/games`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.log("An error occured while adding new game => ", error.message);
    }
}

export const AddGameMechanicApi = async (payload = { gameMechanic: '' }) => {
    try {
        const res = await fetch(`${baseUrl}/game-mechanic`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.log("An error occured while adding new game mechanic => ", error.message);
    }
}

export const EditGameApi = async (payload = { name: '', genre: '', description: '', id: 0 }) => {
    try {
        const res = await fetch(`${baseUrl}/games/${payload.id}`, {
            method: "PUT",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.log("An error occured while adding new game => ", error.message);
    }
}