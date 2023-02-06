import "./App.css";
import Category from "./constant/Category";
import Header from "./constant/Header";
import NewPage from "./constant/NewPage";
import NoticeDetailPage from "./constant/NoticeDetailPage";
import NoticePage from "./constant/NoticePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <NewPage />
      <NoticePage />
      <NoticeDetailPage />
    </div>
  );
}

export default App;
