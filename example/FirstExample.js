import React, {Component} from 'react';
import ArcherContainer from '../src/ArcherContainer';
import ArcherElement from '../src/ArcherElement';
import {data} from './data';

const laneStyle = {display: 'flex', flexDirection: 'column', border: 'solid', borderColor: 'blue'};
const cardStyle = {display: 'flex', border: 'solid', padding: '10px 10px 10px 10px', margin: '10px 10px 10px 10px'};
const style = {overflow: 'scroll', height: '600px'};

// const FirstExample = () => {
//
//     function componentDidMount() {
//         window.addEventListener('scroll', this.handleScroll, { passive: true })
//     }
//
//     function componentWillUnmount() {
//         window.removeEventListener('scroll', this.handleScroll)
//     }
//
//     function handleScroll(event) {
//         console.log('event', event);
//     }
//
//     function renderLanes() {
//         return data.map((lane) => {
//             return (
//                 <div key={lane.id} style={style}>
//                     <h1>{lane.name}</h1>
//                     <div style={laneStyle}>
//                         {renderCards(lane.cards)}
//                     </div>
//                 </div>
//             );
//         })
//     }
//
//     function renderCards(cards) {
//         return cards.map((card) => {
//             return (
//                 <ArcherElement
//                     id={card.id}
//                     relations={card.relations}
//                 >
//                     <div key={card.id} style={cardStyle}>
//                         <h2>{card.name}</h2>
//                         <img src={card.img} width={100} height={100}/>
//                     </div>
//                 </ArcherElement>
//             );
//         });
//     }
//
//     return (
//         <div style={{height: '600px', margin: '50px'}}>
//             <ArcherContainer strokeColor="red">
//                 <div style={{display: 'flex', justifyContent: 'space-around'}}>
//                     {renderLanes()}
//                 </div>
//             </ArcherContainer>
//         </div>
//     );
// };

class FirstExample extends Component {

    constructor (props) {
        super(props);
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.document.getElementById(1).addEventListener('scroll', this.handleScroll.bind(this), { passive: true })
        window.document.getElementById(2).addEventListener('scroll', this.handleScroll.bind(this), { passive: true })
        window.document.getElementById(3).addEventListener('scroll', this.handleScroll.bind(this), { passive: true })
    }

    componentWillUnmount() {
        window.document.getElementById(1).removeEventListener('scroll', this.handleScroll.bind(this))
        window.document.getElementById(2).removeEventListener('scroll', this.handleScroll.bind(this))
        window.document.getElementById(3).removeEventListener('scroll', this.handleScroll.bind(this))
    }

    handleScroll(event) {
        console.log('event', event);
        this.setState({
            scrolled: true
        });
    }



     renderLanes() {
        return data.map((lane) => {
            return (
                <div key={lane.id} style={style} id={lane.id}>
                    <h1>{lane.name}</h1>
                    <div style={laneStyle}>
                        {this.renderCards(lane.cards)}
                    </div>
                </div>
            );
        })
    }

     renderCards(cards) {
        return cards.map((card) => {
            return (
                <ArcherElement
                    id={card.id}
                    relations={card.relations}
                    key={card.id}
                >
                    <div key={card.id} style={cardStyle}>
                        <h2>{card.name} {card.id}</h2>
                        <img src={card.img} width={100} height={100}/>
                    </div>
                </ArcherElement>
            );
        });
    }

    render() {
        return (
            <div style={{height: '600px', margin: '50px'}} >
                <ArcherContainer strokeColor="red">
                    <div style={{display: 'flex', justifyContent: 'space-around'}} id='parent'>
                        {this.renderLanes()}
                    </div>
                </ArcherContainer>
            </div>
        );
    }

}

export default FirstExample;
