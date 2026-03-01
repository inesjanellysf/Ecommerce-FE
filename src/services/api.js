export async function fetchJson(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

export default function fetchData(url, onSuccess, onError, options = {}) {
    fetchJson(url, options)
        .then((data) => onSuccess?.(data))
        .catch((error) => {
            console.error("Error al cargar los datos:", error);
            onError?.(error);
        });
}
