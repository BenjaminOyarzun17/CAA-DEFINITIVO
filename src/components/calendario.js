import React from 'react';
import {Container} from 'react-bootstrap';

class Calendario extends React.Component{


    render(){
        return(
            <Container>
                
                <iframe src="https://calendar.google.com/calendar/embed?src=1q88lts8705b85atbiqnqfmaks%40group.calendar.google.com&ctz=America%2FSantiago" style={{width:"100%", height:'600px'}}></iframe>
            </Container>

        )
    }

}

export default  Calendario;