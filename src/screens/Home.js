const Home = () => {
    const imgSrc = require('../screens/images/fire-pizza.jpg')
    const imgAlt = 'alt'

    return (
        <div className='home'>
            <div className='heroImg'>
                <img src={imgSrc} alt={imgAlt}/>
                <h1>Welcome</h1>
            </div>
        </div>
    )
}

export default Home