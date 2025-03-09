import exp from "constants";


export const fetchResources = async () => {
    try {
        const response = await fetch(`/api/get-resources`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch resources: ${response.status}`);
        }

        const result = await response.json();
        console.log("Fetched Resources:", result);
        return result;
    } catch (error) {
        console.error("Error fetching resources:", error);
        return null;
    }
};
