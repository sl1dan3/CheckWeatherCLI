const getUserLocation = async () => {
    try {
        const response = await fetch("https://ipwho.is/");

        if (!response.ok) {
            throw new Error("Failed to get your geolocation")
        }

        const userLocationInfo = await response.json();

        if (!userLocationInfo.success) {
            throw new Error("Failed to get user location")
        }

        const userCoordinates = {
            country: userLocationInfo.country,
            city: userLocationInfo.city,
            latitude: userLocationInfo.latitude,
            longitude: userLocationInfo.longitude,
        }

        return userCoordinates;
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export {getUserLocation};