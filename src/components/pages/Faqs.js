/* import { FormatAlignRight } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Perguntas frequentes",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    data : 'FormatAlignLeft',
    bgColor: 'grey',
    titleTextColor: "rose",
    rowTitleColor: "blue",
    rowContentColor: 'grey',
    arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAQS() {

    return (
        <div>
            <Faq styles={}
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );

}
 */

import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

export default function FAQS() {

    const data = {
        title: "",
        rows: [
            {
                title: "Como posso fazer a minha encomenda?",
                content: <p>Pode efetuar a sua encomenda através do nosso website e pode tambem recorrer à nossa página de Instagram</p>,
            },
            {
                title: "Qual a quantidade de Leite?",
                content:
                    <p>A quantidade de leite é sempre indicada por nós aquando do momento da sua encomenda.
                     No entando pode consultar no nosso website as quantidades necessárias para cada Pack </p>,
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
        titleTextColor: "blue",
        rowTitleColor: "pink",
        // rowContentColor: 'grey',
        arrowColor: "red",
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