import "./App.css";
import Header from "./constant/Header";
import NoticeDetailPage from "./constant/NoticeDetailPage";
import NoticePage from "./constant/NoticePage";

function App() {
  return (
    <div className="App">
      <Header />
      <NoticePage />
      <NoticeDetailPage />
    </div>
  );
}

export default App;
