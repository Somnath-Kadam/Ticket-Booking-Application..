
// public with sharing class TicketBooking {
//     @AuraEnabled(cacheable=true)
//     public static List<Concert__c> getConserts(){
//         return [select Id,
//         Name,
//         Date_of_Concert__c,
//         Price__c from Concert__c 
//         where Date_of_Concert__c >TODAY ORDER BY Date_of_Concert__c ASC
//         ];
//     }
//     @AuraEnabled(cacheable=true)
//     public static Decimal getPrice(Id recordId)
//     {
          
//          Decimal Concert=[select Id,Name,Date_of_Concert__c from Concert__c where Id=:recordId].Price__c;
//          return Concert;
//     }
    
    
// }
public with sharing class TicketBooking {
    @AuraEnabled(cacheable=true)
    public static List<Concert__c> getConcerts() {
        return [
            SELECT Id, Name, Date_of_Concert__c, Price__c 
            FROM Concert__c 
            WHERE Date_of_Concert__c > TODAY 
            ORDER BY Date_of_Concert__c ASC
        ];
    }

    @AuraEnabled(cacheable=true)
    public static Decimal getPrice(Id recordId) {
        Concert__c concert = [SELECT Price__c FROM Concert__c WHERE Id = :recordId];
        return concert.Price__c;
    }
}
