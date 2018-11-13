({
	handleEvent : function(component, event, helper) {
        debugger;
        var eventType = event.getParam("message");         
        if(eventType == 'refreshlinkedrecords'){
            var childComponent = component.find('linkedrecord');
        	childComponent.refresh('refreshlinkedrecords');
        }       
       
    }
    
})