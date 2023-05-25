import React from 'react'
import { Chrono } from 'react-chrono'

const Path = () => {
    const items = [
        {
            title: "April",
            cardTitle: "Dunkirk",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        },
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

        },
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

        },
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

        }
    ];
    return (
        <>
            <div className='w-[80vw] mx-auto'>
                <p className="text-center text-2xl font-bold mt-14 mb-14">Common Steps involves in Admission</p>
                <Chrono hideControls={true} scrollable={false} items={items}
                    theme={{
                        primary: 'black',
                        cardBgColor: 'white',
                        titleColor: 'black',
                    }}
                    mode="VERTICAL_ALTERNATING" />
            </div>
        </>
    )
}

export default Path