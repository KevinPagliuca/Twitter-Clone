import React from 'react';
import Button from '../../components/Button';
import TextAreaBlock from '../../components/TextAreaBlock';

import './styles.css';

export default function Tweets() {
    return (
        <div id="tweets">

            <div className="sidebar">
                <div className="user-name">
                    <h3>Kevin Pagliuca</h3>
                    <Button type="button" text="Seguir" className="box" />
                </div>
            </div>

            <div className="container">
                <div className="page-name">
                    <h3>Página principal</h3>
                </div>
                <hr />
                <div className="tweetar">
                    <TextAreaBlock placeholder="O que está acontecendo?" text="Tweetar" />
                </div>

                <div className="feed">
                    <h2>Feed de notícias</h2>

                    <div className="content">
                        <header>
                            <strong>Kevin Pagliuca</strong>
                        </header>
                        <hr />
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. </p>
                        <TextAreaBlock placeholder="Tweete sua resposta" text="Comentar" />
                    </div>
                    <div className="content">
                        <header>
                            <strong>Kevin Pagliuca</strong>
                        </header>
                        <hr />
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <TextAreaBlock placeholder="Tweete sua resposta" text="Comentar" />
                    </div>
                </div>
            </div>


        </div>
    );
}