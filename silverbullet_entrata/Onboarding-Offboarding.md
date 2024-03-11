2024-02-21 #noah
# Onboarding
- Recruiter gets offer accepted
- Process stops if background check throws exception that affects job
- ADP link is sent to new hire to collect all PII
- Oboarding specialist creates user in CA from ADP data. Copy/paste
- CA > IT > Users & Groups - Create username firstname.lastname
  - ADP flags if user already exists
  - Select SSO user - do we still need to do this #check
  - check assignments for permissions
  - blind designation component #check
  - add additional roles necessary by looking at existing users with same designation #pain-point
  - India has built groups and roles more throughly - 4ish years ago - their process works well now but the new title changes will break it
- Okta
  - Skim provision - being used now for some tools Slack, GSuite, some others - Golden, Alex and Vincent would know better.
  - Okta doesn’t store images - why?
    - badges need images and we need constant profiles
  - Workflow triggers (csv dropped to sftp from ADP - 4 times a day 3a, 11a, 3p, 5:30p, 8p EST)
- ADP background
  - switched end of 2022
  - Its a great payroll system but not a great HRIS
  - It was the path of least resistance
  - Long-term there is appetite to move to a Workday
  - Not on roadmap for 2024. Likely won’t be considered until 2025
- Get Field Mappings file from #noah

- Changes need to be made in ADP and CA independently
  - Manager
  - Title
  - Address
  - Quarterly audit to check that fields are in sync
  - Double the time for every action - Noah can provide number if we need




  # Offboarding
  - ADP seperation
    - voluntary
      - Okta locks all systems except CA
      - Manually term in CA
    - involuntary
      - notify IT to do it faster
    - CSV file indicates when employee is terminated
  - CA
    - immediate or standard separation - runs code now or at end of day
    - We need to build the integration between CA and Okta