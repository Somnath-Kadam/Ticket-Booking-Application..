trigger UpdatePriceOnConcert on Concert__c (before insert,before update) 
{
 for(Concert__c con:trigger.new)
 {
    if ((con.No_of_Ticket_Remaining__c)<(0.1*con.No__c))
     {
        if(con.Price__c!=null)
        {
            con.Price__c=con.Price__c*1.1;
            System.debug('price = '+con.Price__c);
        }
        
    }

 }

}