🇮🇳 Formation and Leadership Saga of Bharat’s States

📘 Project Overview


This is an interactive web platform that visualizes the formation and leadership history of Indian states. It provides detailed insights into how each state was formed, who led it, and how leadership evolved — all through interactive maps, AI tools, and engaging visualizations.

🚀 Features at a Glance

🗺️ Interactive Map (React + Leaflet.js) – Color-coded map showing political party rule in each state, with clickable Chief Minister lists.

🔊 Voice Search Map (HTML Page) – Speak a state’s name to highlight it, view and listen to its details.

🧠 AI-Powered Quiz & Games (Flask + Groq API) – Randomized questions and score tracking through MongoDB.

🧍‍♂️ 3D Leader Models (Three.js) – Interactive 3D representations of Indian leaders.

💬 Chatbot – AI-powered assistant to answer queries related to states and leaders.

🕰️ Timeline Map – Visual representation of the formation timeline of Indian states.

🧩 System Modules

1️⃣ Main Page (Chrome Go Live Launch)

Launch index.html using Go Live in VS Code (or any live server).

This acts as the main entry point that links to all modules and features.

2️⃣ React Map (Leaflet.js Integration)

Start the React app using:

npm start

Displays a color-coded political map of India.

Shows party rule per year using selectable year options.

Clicking a state opens the list of Chief Ministers year-wise.

Each Chief Minister’s name is clickable to view detailed leader info.

3️⃣ indiamap (HTML Page)

Open this HTML page. Features include:

Voice Search using the Web Speech API — highlight states by speaking their names.

Displays capital, Chief Minister, official language, and formation date.

Allows users to upload a leader’s image — classifies it and displays that state’s info.

Reads out the information for better accessibility.

4️⃣ Quiz & Games Module (Flask App)

Run the backend using:

python app.py

Randomly generates quiz questions using the Groq API.

Saves user scores and progress to MongoDB.

Includes interactive learning games:

Drag-and-drop India map puzzle

Match Chief Minister to state

Sort states by their formation timeline

5️⃣ 3D Leader Gallery

Built using Three.js for immersive visuals.

Displays 3D models of prominent Indian leaders.

6️⃣ Chatbot & Timeline Map

Chatbot: Responds to user queries related to the project using Groq API.

Timeline Map: Shows the timeline of state formations — how and when each Indian state was established.

🧰 Tech Stack

Layer	Technologies

Frontend	HTML, CSS, JavaScript, React.js, Leaflet.js, Three.js

Backend	Flask

Databases	Firebase (Auth & State Data), MongoDB (Quiz & Game Data)

APIs	Groq API (Chatbot & Quiz)

Authentication	Firebase Authentication

Speech & Media	Web Speech API, Image Classification API

⚙️ Installation & Setup

🔧 Prerequisites

Node.js & npm

Python 3.x

MongoDB (local or cloud)

Firebase project setup for authentication

🪜 Steps to Run

1️⃣ Clone the Repository

git clone https://github.com/YedlaLikitha02/mini_project.git

cd mini_project

2️⃣ Launch Main Page

Open index.html and click Go Live. This opens the main project homepage to navigate modules.

3️⃣ Start the React App (Leaflet Map)

cd react-app

npm install

npm start

Visit: 👉 http://localhost:3000

4️⃣ Start Flask Backend for Quiz & Games

cd backend

pip install -r requirements.txt

python app.py

Visit: 👉 http://127.0.0.1:5000

5️⃣ Run Additional Modules

Open indiamap.html → Voice Search Map & Image Classification.

Launch 3D Gallery, Timeline Map, and Chatbot via project navigation.

🧾 Outputs / Results

Module	Description

Interactive Map	Party rule timeline, clickable Chief Minister details

Voice Search Map	Voice-based highlighting, image upload & text reading

Quiz & Game	Randomized AI quiz and score tracking

3D Models	Interactive visual models of Indian leaders

Chatbot	Smart project-related query assistant

Timeline Map	Shows chronological formation of Indian states

🏁 Conclusion

This project provides a centralized and engaging platform to learn about India’s political and administrative evolution. Through the integration 

of AI tools, voice interfaces, and interactive maps, it transforms static historical data into a dynamic and immersive learning experience.

👥 Contributors

Batch 8 (B8)

Uppunuthula Shiva Prasad – 075

Mailapaka Sai Sree Mahathi – 086

Sahithi Reddy Lingam – 090

Yedla Likitha – 121

Guide: K. Chandra Sekhar, Assistant Professor, IT Dept., MVSR Engineering College

📚 References

R. Kumar et al., Designing Voice-Based State Information Systems Using Speech Recognition, 2022.

P. Sharma & D. Joshi, Real-time Political Data Visualization Using LeafletJS, 2021.

R. T. & A. B., 3D Model Integration in Educational Platforms, 2020.

    #SCREENSHOTS

<img width="1286" height="636" alt="image" src="https://github.com/user-attachments/assets/d13ea3d1-fa3c-4b54-9b83-be1af3c4244f" />
<img width="1316" height="693" alt="image" src="https://github.com/user-attachments/assets/e2950a67-bb8a-47f8-95f3-08607062b20b" />
<img width="650" height="447" alt="image" src="https://github.com/user-attachments/assets/cc6f09d0-a93d-4af8-8414-faa10a3068e0" />
<img width="650" height="447" alt="image" src="https://github.com/user-attachments/assets/33ead10b-e98f-48b0-9610-5e18d3dcd2c7" />
<img width="1398" height="583" alt="image" src="https://github.com/user-attachments/assets/7be63b87-53cb-429c-9e7b-d06f54def6e5" />
<img width="1398" height="597" alt="image" src="https://github.com/user-attachments/assets/8883a8cf-8df3-49cf-a374-36d452165154" />
<img width="647" height="406" alt="image" src="https://github.com/user-attachments/assets/1df7151b-eef6-4a4c-9776-ca6725e60b6b" />
<img width="666" height="406" alt="image" src="https://github.com/user-attachments/assets/4f1f602c-13b1-41b4-b4b5-c0a0ec8737e3" />
<img width="672" height="408" alt="image" src="https://github.com/user-attachments/assets/cd8c596e-adf1-47aa-9178-43a0c93474cf" />
<img width="683" height="408" alt="image" src="https://github.com/user-attachments/assets/b395688a-e170-42fe-bd69-77492f16767b" />










  
