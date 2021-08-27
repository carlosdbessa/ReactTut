
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import './faq.css';

export default function FAQS() {

    const data = {
        title: "",
        rows: [
            {
                title: "Como posso fazer a minha encomenda?",
                content: <p>Pode efetuar a sua encomenda através do nosso website e pode tambem recorrer à nossa página de Instagram.</p>,
            },
            {
                title: "Qual a quantidade de Leite?",
                content:
                    <p>A quantidade de leite é sempre indicada por nós aquando do momento da sua encomenda.
                     No entando pode consultar no nosso website as quantidades necessárias para cada Pack. </p>,
            },
            {
                title: "Posso encomendar apenas 1 sabonente?",
                content: <p>Não é possível encomendar apenas um sabonete. O número minimo é 2 sabonetes se optar pelo Pack I. </p>,
            },
            {
                title: "O sabonete tem prazo de validade? ",
                content: <p> Caso o sabonete se encontre numa superfície seca e em local fresco não existe uma data de validade definida, no caso
                dos nossos sabonetes com o avançar dos tempos as características inerentes ao leite de materno acabam por perder-se.
                A sugestão da The Baby Soap é que nunca exceda os 6 meses, no caso de usar o sabonete para efeitos
                unicamente decorativos basta garantir que está sobre uma superfície seca e em local fresco.
                </p>,
            },
            {
                title: "Posso adicionar um aroma à minha escolha? ",
                content: <p>Por defeito, os sabonetes TheBabySoap contêm sempre um aroma que pode ser definido por si aquando da encomenda, contudo pode adicionar
                    um aroma extra , com um custo associado, ficando assim os sabonetes com 2 aromas na sua composição.
                </p>,
            },
            {
                title: "Como funciona o processo de encomenda? ",
                content: <p>Após finalizar a encomenda, damos inicio ao processo de recolha do seu leite materno, o sabonete ser-lhe-á entregue o mais rápido possivel 
                    numa morada previamente escolhida por si. * Os tempos de entrega podem variar consoante a zona do país.
                </p>,
            },
            {
                title: "Posso personalizar com nome apenas um dos sabonetes da minha encomenda? ",
                content: <p>Sim, pode personalizar o número de sabonetes que desejar na sua encomenda.</p>,
            },
        ],
    };
    

    const [rows, setRowsOption] = useState(null);

    useEffect(() => {
        if (rows) {
            setTimeout(() => {
                rows[0].expand();
            }, 2500);

            setTimeout(() => {
                rows[0].close();
            }, 5000);

            setTimeout(() => {
                rows[0].scrollIntoView();
                // rows[0].scrollIntoView(true);
            }, 10000);
        }
    }, [rows]);

    

    const styles = {
        // bgColor: 'white',
        //titleTextColor: "blue",
        rowTitleColor: '#d19091',
        
        // rowContentColor: 'grey',
        arrowColor: '#8e97a7',
    };

    return (
        <div>
            <h2 className="section-title">Perguntas Frequentes </h2>

            <div className="faq-style-wrapper">
                <Faq data={data} styles={styles} getRowOptions={setRowsOption} />
            </div>
        </div>
    );
}