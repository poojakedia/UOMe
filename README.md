# UOMe: Simplifying Shared Expenses  

## Inspiration  
Managing shared expenses with friends, roommates, or colleagues can quickly become frustrating. From splitting rent and utilities to tracking group outings and travel costs, keeping everything organized is a challenge. We’ve all experienced the awkwardness of reminding someone they owe money or dealing with confusing spreadsheets and receipts.  

We wanted to create a simple, seamless, and stress-free solution that eliminates the hassle of tracking shared expenses. Inspired by our own struggles and feedback from friends, UOMe was born—a platform designed to make splitting bills and settling debts effortless.  

## What It Does  
UOMe allows users to:  
- Track expenses in real-time and assign who owes what.  
- Split bills easily with equal or custom distributions.  
- Settle debts seamlessly and keep track of payments.  
- Avoid awkward money conversations with automated tracking.  

With an intuitive interface and real-time updates, UOMe simplifies financial collaboration, ensuring users can focus on making memories rather than managing expenses.  

## How We Built It  
We leveraged modern web technologies to create a fast, scalable, and reliable platform.  

### Frontend (User Interface & Experience)  
- **HTML & CSS** – Built a clean, responsive UI for a smooth user experience.  
- **JavaScript** – Handled interactive elements and logic on the frontend.  
- **Firebase Hosting** – Deployed the frontend for fast and reliable performance.  

### Backend (Logic & API Development)  
- **Node.js & Express.js** – Created a scalable backend to handle expense tracking, user authentication, and debt settlements.  
- **Cloud Functions** – Processed background tasks efficiently without slowing down the app.  

### Database & Real-Time Synchronization  
- **Firestore (NoSQL Database)** – Enabled real-time expense updates across multiple users and devices.  
- **Optimized Data Structure** – Designed a schema that ensures fast, secure, and reliable data retrieval.  

### Authentication & Security  
- **Firebase Authentication** – Provided secure login and account management.  
- **Data Encryption** – Protected sensitive financial information from unauthorized access.  

## Challenges We Ran Into  
1. **Real-Time Data Sync** – Ensuring expenses updated instantly across all devices required careful structuring of Firestore reads and writes.  
2. **Fair Splitting Logic** – Accounting for equal vs. custom splits while maintaining a user-friendly interface was a design challenge.  
3. **Balancing Simplicity & Features** – Keeping the app simple yet powerful meant refining the UI/UX without overloading users with options.  
4. **Security & Privacy** – Implementing authentication and data protection while ensuring ease of use.  

## Accomplishments That We're Proud Of  
- Successfully built a real-time expense tracking system with a smooth user experience.  
- Designed a minimal yet powerful UI that makes financial management stress-free.  
- Implemented secure authentication and data handling to protect user privacy.  
- Optimized Firestore queries to ensure fast and efficient performance.  
- Created a scalable platform that can grow with more users and features.  

## What We Learned  
- The importance of real-time synchronization and efficient database structuring.  
- How to optimize UI/UX for simplicity while maintaining powerful functionality.  
- Best practices for secure authentication and data protection in financial applications.  
- How to balance performance and scalability using Firebase and cloud functions.  

## What's Next for UOMe  
- **Expense Categories & Budgets** – Add more financial tracking tools for users.  
- **Automated Payment Reminders** – Notify users when payments are due.  
- **Mobile App Development** – Expand UOMe into a dedicated iOS and Android app.  
- **Payment Integrations** – Enable direct payments through PayPal, Venmo, or bank transfers.  
- **AI-Powered Smart Suggestions** – Recommend fair splits and detect spending patterns.  

UOMe was built to eliminate financial friction and make expense management effortless. We are excited to keep improving it and helping more users manage shared costs with ease.  
