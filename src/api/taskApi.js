const API_URL = "http://localhost:8080/api/v1/tasks";

/**
 * 
 * @param {*} response 
 * @returns 
 */
async function handleResponse(response) {
    if (!response.ok) {
        let message = `Error ${response.status}`;
        try {
            const data = await response.json();
            message = data.message || message;
        } catch {}
        throw new Error(message);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

/**
 * 
 */
export async function getTasks() {
    const response = await fetch(API_URL)
    return handleResponse(response)
}

export async function getTask(id) {
    const response = await fetch(`${API_URL}/${id}`)
    return handleResponse(response)
}

/**
 * 
 * @param {*} task 
 */
export async function createTask(task) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
    })
    return handleResponse(response)
}

/**
 * 
 * @param {*} id 
 * @param {*} task 
 */
export async function updateTask(id, task) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
    })
    return handleResponse(response)
}

/**
 * 
 * @param {*} id 
 */
export async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    return handleResponse(response)
}
