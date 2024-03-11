#odev

- Access to new system?
- What are the tables
  - custinvoicetrans
  - custtable
  - dimensions
  - inventitemgroup
  - inventitem
  - ledgertrans
  - salesline
  - salestable
  - smmbusreltable
- New tables we need to bring in
  - commissions?
* [ ] Access to GUIDE Documents in JT Teams site - Dan Brown
* [ ]  

# Things to do
- Bring in data from Dynamics

Important external reports
- Commission report
- Sales Report
- Royalties

## Reports
- Regional Monthly Sales Analysis - Replace with warehouse data to Excel
- Japan Sales Royalties - Brady’s report - Sales that have royalties to Japan - Total sales for the month with Royalties associated to it
- **Royalties** - Statements to Doctor - Teresa’s report - Work with her to figure out what the Atlas data source is
- ~~Vender Trans~~
- Commission Journal Entry Report - Every surgery - Item = *Services - Commission Payment*
- Vendor Invoice Lines - purchases by vendor and purchases by item
- Transfer price by item - Need to ask Jerry. May not need to keep doing this one
- US Sales by State - Easy
- Aging report by agent -
- Expiring Inventory - Expiring inventory in warehouse
- **Commission reminders** - commission statement - Each tab is a unique rep - all the surgeries they did during the month by invoice date - adjustments may be made by a general journal entry - **Separate working session with Holly and Kevin** 
- Days to collect - not top priority - super simple report - average days between surgeryDate and invoiceDate
- Doctor sales by date - similar to commissions report without commissions
- ~~InventoryWarehouseDate~~ - Inventory on-hand by warehouse - automatically generated and sent out of SQL - Lower priority - probably replaced by Surgio (integration) - possibly done in D365 - Rich can decide
- Missing PO by Region - Sales orders that haven’t been invoiced because they haven’t gotten the PO yet - Auto generated and sent out of SSRS web01
- Senate - Customer account statement - JT will do in D365
- Total commissions payable with adjustments - Same as commission reminders? - Holly’s report comes out of atlas - **need to talk with Holly about this**
- CommissionServiceItems - Adjustments for the month - based on credit notes -
- *New* Monthly rebates by item group - sum of all rebates that were posted and the category that can be used to do manual journal entry to move items to sales account - no example. Jonathan Sommer |JT can explain if needed
- *New* Fixed Asset - value from Fixed asset module, address from asset module to - not needed at go-live. needed by end of Dec
- *New* Commission Setup report - review commission setup -
- *New* Rebate statement by customer - One report says rebate fee and other says admin fee


**Need to have another meeting to go over reports needed with operations team**