export default function Challenge({ floors, rooms, style, sims, lotSize, budget, optional }){
    return(
        <div>
            <p>Create a {floors} story, {rooms} room {style} style house for {sims} on a {lotSize} lot
                with a budget of {budget}. You must include {must}. 
            </p>
            <p>This is your color palette:</p>
            <p>Harder option: {optional}.</p>
        </div>
    )
}