#client #odev

# Tasks
- [ ] Sales Order Report
- [ ] Follow up with Brad about SSRS access
# Reports

# Notes
```query
odev
order by created desc
where ref != "Jajee/Clients/ODev" 
render [[Library/Core/Query/Page]]
```



# Portal
## Users
```
(114,'Greg Larson', 'GLarson@orthodevelopment.com', 'GLarson\_orthodevelopment.com#EXT#@xantieconsulting.onmicrosoft.com', 32),

(113,'Dreyson Killpack', 'DKillpack@orthodevelopment.com', 'DKillpack\_orthodevelopment.com#EXT#@xantieconsulting.onmicrosoft.com', 32),

(94, 'Kaden Gubler', 'kgubler@xantie.com', 'kgubler@xantie.com', 32);
```

## Access Groups
| AccessGroupID | Description | Assigned to |
|----------|----------|----------|
| 30 | Test Group | Kaden, Dreyson, Greg | 
| 32 | All | Kaden, Dreyson, Greg |


## Reports
| ReportID | ReportNM | PowerBIReportID | WorkspaceNM |
|----------|----------|----------|----------|
| 41 | Ortho U.S. Sales Analysis | 0c8042f5-f999-4483-ba00-7d4167586c1d | Ortho |
| 43 | Ortho U.S. Daily Sales Orders | 166d3c8b-a9a7-4859-ba0d-b6b25170c245 | Ortho |
| 44 | Ortho U.S. Regional Summary | cc00df4d-e688-43b3-ac63-585ab794b488 | Ortho |
| | Ortho U.S. Sales Analysis - Testing | 323afca4-5dad-4366-9760-431c00bcce3c | Ortho - Testing |


## Workspaces
| Workspace Name | WorkspaceID|
|----------|----------|
| Ortho | 7fdbdd8e-1296-4622-9bdc-03830d7b30d2 |
| Ortho - Testing | c11e98ee-5643-4656-82f8-34fa82fdb925 |


OrganizationID = 15
Workspace ID = 7fdbdd8e-1296-4622-9bdc-03830d7b30d2




# Notes
| Name | Amount |
|----------|----------|
| Pending Sales | $xxxxx | 
| OS Peek | $xxxxx | 
| Other (Including Instruments) | $xxxxx| 


# SQL Scripts
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

### Create users from a list and add to access group
```sql
-- Create a table variable to hold the user data, including an optional UserID
DECLARE @UserData TABLE (
    UserID INT NULL, -- Use NULL for new users, or specify an existing UserID
    UserNM VARCHAR(100),
    EmailTXT VARCHAR(150),
    UserPrincipalTXT VARCHAR(200),
    AccessGroupID INT
);

-- Insert your data into the table variable, specifying NULL for new users
INSERT INTO @UserData (UserID, UserNM, EmailTXT, UserPrincipalTXT, AccessGroupID)
VALUES 
(114, 'Greg Larson', 'GLarson@orthodevelopment.com', 'GLarson_orthodevelopment.com#EXT#@xantieconsulting.onmicrosoft.com', 32),
(113, 'Dreyson Killpack', 'DKillpack@orthodevelopment.com', 'DKillpack_orthodevelopment.com#EXT#@xantieconsulting.onmicrosoft.com', 32),
(94, 'Kaden Gubler', 'kgubler@xantie.com', 'kgubler@xantie.com', 32);

-- Declare variables to hold current row data
DECLARE @UserNM VARCHAR(100);
DECLARE @EmailTXT VARCHAR(150);
DECLARE @UserPrincipalTXT VARCHAR(200);
DECLARE @AccessGroupID INT;
DECLARE @UserID INT;

-- Loop through the table variable
DECLARE cur CURSOR FOR 
    SELECT UserID, UserNM, EmailTXT, UserPrincipalTXT, AccessGroupID FROM @UserData;

OPEN cur;

FETCH NEXT FROM cur INTO @UserID, @UserNM, @EmailTXT, @UserPrincipalTXT, @AccessGroupID;

WHILE @@FETCH_STATUS = 0
BEGIN
	-- Check if UserID is NULL, indicating a potential new user
    IF @UserID IS NULL
    BEGIN
        -- Check if the user already exists based on unique attributes (e.g., EmailTXT or UserPrincipalTXT)
        IF EXISTS (SELECT 1 FROM [dbo].[Users] WHERE EmailTXT = @EmailTXT OR UserPrincipalTXT = @UserPrincipalTXT)
        BEGIN
            -- If user exists, set @UserID to the existing UserID
            SELECT @UserID = UserID FROM [dbo].[Users] WHERE EmailTXT = @EmailTXT OR UserPrincipalTXT = @UserPrincipalTXT;
        END
        ELSE
        BEGIN
            -- If user does not exist, insert new user
            INSERT INTO [dbo].[Users] ([UserNM], [EmailTXT], [UserPrincipalTXT])
            VALUES (@UserNM, @EmailTXT, @UserPrincipalTXT);

            -- Get the newly inserted UserID
            SET @UserID = SCOPE_IDENTITY();
        END
    END

    -- Insert into #UserAccessGroup using the obtained or provided UserID
    IF NOT EXISTS (SELECT 1 FROM [dbo].[UserAccessGroup] WHERE UserID = @UserID AND AccessGroupID = @AccessGroupID)
    BEGIN
        INSERT INTO [dbo].[UserAccessGroup] ([AccessGroupID], [UserID])
        VALUES (@AccessGroupID, @UserID);
    END

    FETCH NEXT FROM cur INTO @UserID, @UserNM, @EmailTXT, @UserPrincipalTXT, @AccessGroupID;
END

CLOSE cur;
DEALLOCATE cur;

```

### Add new report 
```sql
DECLARE @ReportID INT;
DECLARE @PowerBIReportID VARCHAR(255);
DECLARE @PowerBIWorkspaceID VARCHAR(255);
DECLARE @ReportNM VARCHAR(255);
DECLARE @OrganizationNM VARCHAR(100);

-- Set values to the variables
SET @PowerBIReportID = '166d3c8b-a9a7-4859-ba0d-b6b25170c245';
SET @PowerBIWorkspaceID = '7fdbdd8e-1296-4622-9bdc-03830d7b30d2';
SET @ReportNM = 'Ortho U.S Daily Sales Orders';
SET @OrganizationNM = 'Ortho';

UPDATE [dbo].[Report]
SET [PowerBIReportID] = @PowerBIReportID,
    [PowerBIWorkspaceID] = @PowerBIWorkspaceID,
    [ReportNM] = @ReportNM,
    [OrganizationNM] = @OrganizationNM
WHERE [ReportID] = @ReportID;
GO

SELECT ReportID from [dbo].[Report] WHERE PowerBIReportID = @PowerBIReportID AND PowerBIWorkspaceID = @PowerBIWorkspaceID;

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
SET @ReportID = SCOPE_IDENTIFY();


INSERT INTO [dbo].[ReportAccessGroup]
           ([ReportID]
           ,[AccessGroupID])
     VALUES
           (@ReportID
           ,@AccessGroupID);
GO

```

### Users access
```sql
SELECT u.UserID, 
	u.UserNM,
	o.OrganizationNM,
	ag.AccessGroupNM,
	r.ReportNM
FROM Users u
LEFT JOIN UserAccessGroup uag 
	ON u.UserID = uag.UserID
LEFT JOIN AccessGroup ag
	ON uag.AccessGroupID = ag.AccessGroupID
LEFT JOIN ReportAccessGroup rag
	ON ag.AccessGroupID = rag.AccessGroupID
LEFT JOIN Report r
	ON rag.ReportID = r.ReportID
LEFT JOIN Organization o
	ON ag.OrganizationID = o.OrganizationID
WHERE o.OrganizationID = 15

```




regionNum	regionName	regionShortName	Order	areaNum	color
40	Sales US - Pacific Region	Pacific	1	2	#4577B5
57	Sales US - Utah	Utah	3	1	#737373
45	Sales US - Mountain West Region	Mountain West	2	2	# 91B24F
58	Sales US - Great Lakes	Great Lakes	6	3	#42A2BF
51	Sales US - Southwest Region	Southwest	4	2	#897F4A
43	Sales US - Mid Atlantic Region	Mid Atlantic	8	3	# B84644
41	Sales US - Southeast Region	Southeast	9	3	# F68B3D
44	Sales US - Midwest Region	Midwest	5	3	#42A2BF
55	Sales US - Northeast	Northeast	7	3	#745998