import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
import { type TaskCardProps } from "./components/lib/type";

function App() {
  const taskCardProps: TaskCardProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header></Header>
      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Chaithat" type="student"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput></TaskInput>
            {/* Card รายการ */}
            <Task {...taskCardProps[0]}></Task>
            <Task {...taskCardProps[1]}></Task>
            <Task {...taskCardProps[2]}></Task>
          </main>
        </div>
      </div>
      <Footer
        year="2026"
        fullName="Chaithat Thaithet"
        studentId="670610683"
      ></Footer>
    </div>
  );
}

export default App;
