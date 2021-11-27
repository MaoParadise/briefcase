import { useState } from 'react';

const useSummoners = () => {

    const [summoners, setSummoners] = useState([]);


    const getSummoner = async (summonerName) => {
        await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/`+{summonerName}+`?api_key=RGAPI-60927491-eb4a-45a7-94a4-58b056d612d4`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSummoners(data);
        });
    }


}

export default useSummoners;