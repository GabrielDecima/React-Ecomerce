import React,{memo} from 'react';

const Footer = () => {
    return (
        <>
        <footer className="pie-pagina">
                <section className="section-footer">
                    <div className="link_redes">
                    <h3>Encontranos en Redes</h3>
                    
                        <div className="tag_face">
                            <a href="https://www.facebook.com/gabrieldecima1028/" target="_blank">facebook</a>   
                        </div>
                        <div className="tag_tw">
                         <a href="" target="_blank">Twitter</a>
                        </div>
                        <div className="tag_oficial">
                            <a href="https://github.com/GabrielDecima/React-34755-Decima" target="_blank">Pagina Oficial</a>
                        </div> 
                        <div className="tag_insta">
                            <a href="https://www.instagram.com/gabrieldecima28/" target="_blank">Desarrollador Web</a>
                        </div>
                    
                    </div>
                </section>
        </footer>


        </>
    );
}

export default memo(Footer);




