const alpha2 = require('../../assets/alpha2.json');
require('dotenv').config({ path: "../../.env" });

const getUserIP = async (): Promise<string> => {
    try {
        
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIP: string = data.ip;

        return userIP;

    } catch (error) {
        console.error('Error fetching user IP:', error);
        return null;
    }
}


const getUserLocation = async () : Promise<[string, string]> => {
    try {
        const userIP: string = await getUserIP();
        
        const config = {
            method: 'POST', 
        };
    
        const response = await fetch(`https://ipinfo.io/${userIP}/json?token=${process.env.ACCESS_TOKEN}`, config);
        const data = await response.json();
        
        return [data['city'], alpha2[data['country']]];
    } catch (error) {
        console.error('Error fetching user location:', error);
    }
}

export default getUserLocation;