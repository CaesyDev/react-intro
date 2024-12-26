import Fine_girl from './assets/fine girl.jpg';
function Card(){

    return (
        <>
            <div className='card'>
                <img className='card-img' src={Fine_girl} alt="A beautiful girl" />
                <h1>I am a full stack dev</h1>
                <p>solving problems using algorithms</p>
            </div>
        </>
    );
}

export default Card;