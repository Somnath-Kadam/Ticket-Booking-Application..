// import { LightningElement ,wire,track,} from 'lwc';
// import getConserts from '@salesforce/apex/TicketBooking.getConserts';

// export default class ConcertComponent extends LightningElement {
//     consertList;
//     @wire(getConserts) wireconcerts({data,error})
//     {

//         if(data)
//             {
//                this.consertList=data;
//                console.log(data);
//             }
//             else if (error)
//                 {
//                     console.log(error);
//                 }
//     }
//     @track columns=[{label:'Name',fieldName:'Name'},
//                     {label:'Price',fieldName:'Price__c'},
//                     {label:'Date_of_Concert',fieldName:'Date_of_Concert__c'}];


// }
import { LightningElement, wire, track } from 'lwc';
import getConcerts from '@salesforce/apex/TicketBooking.getConcerts';

export default class ConcertComponent extends LightningElement {
    concertList;
    @wire(getConcerts) wireConcerts({ data, error }) {
        if (data) {
            this.concertList = data;
            console.log(data);
        } else if (error) {
            console.log(error);
        }
    }
    
    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Price', fieldName: 'Price__c' },
        { label: 'Date of Concert', fieldName: 'Date_of_Concert__c' }
    ];
}
