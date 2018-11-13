({
    initializeMethod : function(component, event, helper) {       
        helper.setHasRecords(component);
    },
    
    handleAction : function(component, event, helper) {         
        // checking what is the action based upon that different method will be called
        component.set("v.Spinner",true);
         if(component.get("v.actionName") == 'link'){
            helper.linkRecord(component, event, helper);
        }
    },
    
    refreshPossibleSection : function(component, event, helper) {   
    	debugger;
    }
})