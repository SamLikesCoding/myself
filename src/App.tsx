import RegComponents from './components/componentsLoader';
import { useState } from 'react';
import './App.css'

function App() {

  const [ActivePage, setPage] = useState(() => RegComponents.Skills);

  const ToolbarProps = [
    {
      pageKey: 'helloPage',
      label: 'Who am i?',
      action: () => setPage(() => RegComponents.Hello)
    },
    {
      pageKey: 'skillPage',
      label: 'Skills',
      action: () => setPage(() => RegComponents.Skills)
    }
  ];

  return (
    <>
      <RegComponents.Toolbar props={ToolbarProps}/>
      <ActivePage />
    </>
  )
}

export default App
