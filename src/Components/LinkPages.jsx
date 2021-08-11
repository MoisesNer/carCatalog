import React, { Component } from 'react'
import Title from './Title'
import { GiDonut, GiTrophy, GiCarKey } from 'react-icons/gi'

export default class LinkPages extends Component {

    state = {
        pages: [
            {
                icon: <GiDonut />,
                title: 'Donut Media',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestias?',
                link: 'https://donut.media/'

            },
            {
                icon: <GiTrophy />,
                title: 'Gran Concurso de Elegancia',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestias?',
                link: 'https://www.concursodeelegancia.com.mx/'

            },
            {
                icon: <GiCarKey />,
                title: 'Sema Show',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestias?',
                link: 'https://www.semashow.com/'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Interesing related links' />
                <div className="services-center">
                    {this.state.pages.map((item, index) => {
                        return <article key={index} className='service'>
                            <a href={item.link}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </a>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
