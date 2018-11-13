public class ConsolidatedReportCtrl {
    @AuraEnabled
    public Static List<Report> getConsolidatedReport(String folderName){
        system.debug('folderName : '+folderName);
        
        List<Report> lstReports = new List<Report>();
        
        if(!String.isBlank(folderName))
        	lstReports = [Select Name from Report where FolderName =: folderName];
        return lstReports;
    }
}