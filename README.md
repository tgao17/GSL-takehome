# GreystoneLabs

Take home for GreystoneLabs

Functional requirements

**Create a User**

**Create a Loan**

**Fetch all User’s Loans**

**Fetch the amortization term for a Loan**

**Share a Loan with another User**

1. users should be able to view schedule and amortization data
2. users shoud be able to share their results

Global State Management with useREDUCER

1. User_ID: default to NULL An object {str, int} or NULL we will fetch id from
   api after submitting we can also have an id and username to login
2. Viewmode: 'NewUser', 'Login' 'Landing', 'Share' 'create' 'Term' Home:  
    have "share" and "create" button catalogue of all my loans and shared loans get
   all loans and sort each to 2 lists: one with matching owner id and all else

   Term Schema { "amount": 0, "apr": 0, "term": 0, "status": "active",
   "owner_id": 0 }

3. Term_ID: 'default to 0' (maybe this can be local prop) we will see

Tech specs I am using:

1. MUI
2. Parcel
