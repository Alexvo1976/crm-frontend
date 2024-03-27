import './App.css';
import { Dashboard } from './dashboard/Dashboard.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout >

    </div>
  );
}

export default App;
