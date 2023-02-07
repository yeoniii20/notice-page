import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./constant/Category";
import Header from "./constant/Header";
import NewPage from "./constant/NewPage";
import NoticeDetailPage from "./constant/NoticeDetailPage";
import NoticePage from "./constant/NoticePage";
import TeacherRegistration from "./constant/TeacherRegistration";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/newPage" element={<NewPage />} />
        <Route path="/noticePage" element={<NoticePage />} />
        <Route path="/noticeDetailPage" element={<NoticeDetailPage />} />
        <Route path="/teacherRegistration" element={<TeacherRegistration />} />
      </Routes>
    </div>
  );
}

export default App;
