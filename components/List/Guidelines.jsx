import React from 'react'

export default function Guidelines() {

    const guidelines = [
        {no: 1, text: 'Age of volunteer should be in between 18 and 50'},
        {no: 2, text: 'Report any injuries or hazards that you notice in the workplace'},
        {no: 3, text: 'Respect confidentiality and privacy'},
        {no: 4, text: 'Be punctual and reliable'},
        {no: 5, text: 'Carry out the duties listed in your volunteer position description'},
        {no: 6, text: 'Must be fit, healthy and prepared for the volunteering task in all respects'},
        {no: 7, text: 'Do not participate if you have heart, diabetes, or respiratory or other chronic diseases, Over 65'},
        {no: 8, text: 'Since it involves the most vulnerable people in the Society, volunteers must be prepared to perform duties with utmost sincerity, empathy and compassion'},
        {no: 9, text: 'Use personal protective equipments (PPEs) like; Helmets, Masks, Gloves, SCBA Sets ,Goggles, Protective Suits, Complete Medical Aid Kit, Communication System etc'},
        {no: 10, text: 'Refer the guidelines provided by government (ksdma) for disaster rescue operations'},
    ]

    return (
        <div className='flex flex-col space-y-2 px-2 text-white ' id='rules'>
            <h4 className='text-center uppercase'>Guidelines</h4>
            <ul className='list-decimal list-outside pl-7 text-base'>
                { guidelines.map((item)=>
                    <li key={item.no}>{item.text}</li>
                )}
            </ul>
        </div>
    )
}