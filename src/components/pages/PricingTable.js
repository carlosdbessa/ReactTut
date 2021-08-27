import React, {useState} from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import Button from '@material-ui/core/Button';



function PricingTables() {

    
    
    return (
        <div>


            <PricingTable  highlightColor='#1976D2'>
    <PricingSlot   title='Pack I' priceText='16 €'>
        <PricingDetail> <b>2</b> sabonetes</PricingDetail>
        <PricingDetail> <b>100ml</b> leite</PricingDetail>
        <PricingDetail> <b>1</b> Aroma</PricingDetail>
    </PricingSlot>
    <PricingSlot   title='Pack II' priceText='17,5 €'>
        <PricingDetail> <b>4</b> sabonetes</PricingDetail>
        <PricingDetail> <b>200ml</b> leite</PricingDetail>
        <PricingDetail> <b>1</b> Aroma</PricingDetail>
    </PricingSlot>
    <PricingSlot   title='Pack III' priceText='20 €'>
        <PricingDetail> <b>6</b> sabonetes</PricingDetail>
        <PricingDetail> <b>300ml</b> leite</PricingDetail>
        <PricingDetail> <b>1</b> Aroma</PricingDetail>
    </PricingSlot>
    <PricingSlot    title='Personalização' priceText=''>
        <PricingDetail> <b>Aroma Extra</b> - 1,5 €</PricingDetail>
        <PricingDetail> <b>Nome </b> - 5 € /sabonete</PricingDetail>
        <PricingDetail> <b> .</b> </PricingDetail>
        <PricingDetail> <b> .</b> </PricingDetail>
    </PricingSlot>
</PricingTable>

<p>Para encomendas ou qualquer dúvida, contacte-nos, estaremos sempre ao seu dispor!</p>

        </div>
    )
}

export default PricingTables
