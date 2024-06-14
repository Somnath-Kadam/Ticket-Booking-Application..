// import { LightningElement } from 'lwc';
// import getPrice from '@salesforce/apex/TicketBooking.getPrice';
// import {ShowToastEvent} from 'lightning/platformShowToastEvent';


// export default class TicketBookingComponent extends LightningElement {
//     showprice;
//     error;
//     handlesuccess(event)
//     {
//         const evt=new ShowToastEvent({
//             title:'Ticket Booked',
//             message:'Record Id'+event.detail.id,
//             variant:'success'

//         });
//         this.dispatchEvent(evt);
//     }
//     handlechange(event)
//     {
//        let  targetID=event.target.value;
//        getPrice({recordId:targetID})//imperative call
//        .then((data)=>{
//         this.showprice;
//        })
//        .catch((error)=>{
//         this.error=error;
//        })

//     }
// }

import { LightningElement } from 'lwc';
import getPrice from '@salesforce/apex/TicketBooking.getPrice';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TicketBookingComponent extends LightningElement {
    showprice;
    error;

    handlesuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Ticket Booked',
            message: 'Record Id ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }

    handlechange(event) {
        let targetID = event.target.value;
        getPrice({ recordId: targetID }) // imperative call
            .then((data) => {
                this.showprice = data; // Assign the fetched price to showprice
                this.dispatchEvent(
                     new ShowToastEvent({
                        title: 'Price Updated',
                        message: 'Cocert price update',
                        variant: 'success'
                    })
                )
                this.error = undefined; // Clear any previous errors
            })
            .catch((error) => {
                this.error = error;
                this.showprice = undefined; // Clear price in case of error
                // Optionally, show a toast message for the error
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading price',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}
