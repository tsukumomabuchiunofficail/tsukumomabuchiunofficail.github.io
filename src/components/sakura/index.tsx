import React, { Component, Fragment, type ReactNode } from 'react';
import './style.css'; 
import { randomInteger } from '../../shared/helpers/utilties';
import SakuraConfig from './type';

class Sakura extends Component<SakuraConfig> {
    static defaultProps:SakuraConfig = {
        images: {
            folder: 'img/sakura',
            files:[
                'flower_17.png',
                'flower_18.png',
                'flower_19.png',
                's1.png',
                's2.png',
                's3.png',
                's4.png'
            ]
        },
        count: 10,
        leftRange: {
            start: 0,
            end: 65
        },
        speed: {
            fall: {
                start: 7,
                end: 15
            },
            rotation: {
                start: 2,
                end: 4
            }
        },
        timeRange: {
            start: 0,
            end: 0
        }
    };

    renderSakuras(): JSX.Element[] {
        const config = this.props;
        const items: JSX.Element[] = [];
        for(let i=0; i < config.count; i++) {
            let style ={
                left: `${randomInteger(config.leftRange.start, config.leftRange.end)}vw`,
                animation: `fall ${randomInteger(config.speed.fall.start, config.speed.fall.end)}s linear infinite, rotate${i%2} ${randomInteger(config.speed.rotation.start, config.speed.rotation.end)}s ease-in-out infinite alternate`}
            let imageSrc = `/${config.images.folder}/${config.images.files[randomInteger(0, config.images.files.length-1)]}`
            items.push(<li style={style}><img src={`${imageSrc}`}/></li>)
        }

        return items;
    }

    render(): ReactNode {
        

        return (
            <ul className="sakura">
                <Fragment>{this.renderSakuras()}</Fragment>
            </ul>
        );
    }
}

export default Sakura;