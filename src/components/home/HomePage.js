import React from 'react';

class HomePage extends React.Component {
    render() {
        return(
            <div className="pb-5">

                <div className="main-content py-3 " style={{textAlign:"center"}}>
                <img 
                    style={{maxWidth:'100%'}}
                    src={ '/img/home-banner.png' }
                    alt="home banner"
                />
                <h3 className="pt-5">Find your nearest store</h3>
                <img 
                    style={{maxWidth:'100%'}}
                    src={ '/img/store-locator.png' }
                    alt="store locator"
                />
                <h3 className="pt-5 pb-3">Special bennefits with your rrewards card</h3>
                <img 
                    style={{maxWidth:'100%'}}
                    src={ '/img/rewards-card.png' }
                    alt="rewards card"
                />
                </div>


            </div>
            
        );
    }
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }
}

export default HomePage;