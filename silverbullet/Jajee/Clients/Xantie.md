#client #xantie
# Hours
# Clients



# Portal
### Create new user and add to access group
```sql
--Add User
DECLARE @UserNM VARCHAR(100);
DECLARE @EmailTXT VARCHAR(150);
DECLARE @UserPrincipalTXT VARCHAR(200);
DECLARE @UserID INT;
DECLARE @AccessGroupID INT;

-- Set values to the variables
SET @UserNM = 'Greg Larson';
SET @EmailTXT = 'GLarson@orthodevelopment.com';
SET @UserPrincipalTXT = 'GLarson_orthodevelopment.com#EXT#@xantieconsulting.onmicrosoft.com';
SET @AccessGroupID = 30;

INSERT INTO [dbo].[Users]
           ([UserNM]
           ,[EmailTXT]
           ,[UserPrincipalTXT])
     VALUES
           (@UserNM
           ,@EmailTXT
           ,@UserPrincipalTXT);

SET @UserID = SCOPE_IDENTITY();

-- Add user to access group
INSERT INTO [dbo].[UserAccessGroup]
           ([AccessGroupID]
           ,[UserID])
     VALUES
           (@AccessGroupID
           ,@UserID);
GO

```

### Add report and add to access group
```sql
-- Add Report
DECLARE @PowerBIReportID VARCHAR(255);
DECLARE @PowerBIWorkspaceID VARCHAR(255);
DECLARE @ReportNM VARCHAR(255);
DECLARE @OrganizationNM VARCHAR(100);
DECLARE @ReportID INT;
DECLARE @AccessGroupID INT;

SET @PowerBIReportID = 'cc00df4d-e688-43b3-ac63-585ab794b488';
SET @PowerBIWorkspaceID = '7fdbdd8e-1296-4622-9bdc-03830d7b30d2';
SET @ReportNM = 'Ortho U.S. Regional Summary';
SET @OrganizationNM = 'Ortho';
SET @AccessGroupID = 30;

INSERT INTO [dbo].[Report]
           ([PowerBIReportID]
           ,[PowerBIWorkspaceID]
           ,[ReportNM]
           ,[OrganizationNM])
     VALUES
           (@PowerBIReportID
           ,@PowerBIWorkspaceID
           ,@ReportNM
           ,@OrganizationNM);
GO

-- Add report to access group
SET @ReportID = SCOPE_IDENTITY();


INSERT INTO [dbo].[ReportAccessGroup]
           ([ReportID]
           ,[AccessGroupID])
     VALUES
           (@ReportID
           ,@AccessGroupID);
GO

```
