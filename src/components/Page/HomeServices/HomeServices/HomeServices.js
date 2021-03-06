import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        fetch('https://warm-oasis-87609.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, [])
    return (
        <Container className='custom-container mt-5 pt-5'>
            <h2 className='mb-5 services_text'>What We <span className='provide'>Pr</span><span className='provide_text'>O</span><span className='provide'>vide!</span></h2>
            <div className="services_container">

                {
                    homeServices.slice(0, limit ? limit : homeServices.length).map(homeService => <HomeService
                        key={homeService.name}
                        homeService={homeService}
                        setLimit={setLimit}
                   >
                   </HomeService>)
                }
                
                <div className="view_project ">
                    <a href="/ourServices"><button className="mt-3 more_services justify-content-center">More Services</button></a>
                </div>
            </div>
          
        </Container>
                   
    );
};

export default HomeServices;