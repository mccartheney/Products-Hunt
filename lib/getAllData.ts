import axios from "axios"

const getAllData = async () => {
    const apiUrl = process.env.API_URL

    try {
        const response = await axios.get(apiUrl!)
        return response.data
        
    } catch (error) {
        return new Error ("Error on fetching Data")
    }
}

export default getAllData