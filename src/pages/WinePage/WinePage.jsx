import { useState, useEffect } from 'react';
import * as winesAPI from '../../utilities/wines-api';
import './WinePage.css';

export default function WinePage() {
    const [wineList, setWineList] = useState([]);

    useEffect(function() {
        async function getWines() {
            const wines = await winesAPI.getAll();
            setWineList(wines);
        }
        getWines()
    }, []);

    return (
        <section>
            <h1>WinePage</h1>
            { wineList.map(wine => 
                <p>{wine.name}</p>
            )}
        </section>
    )
}