import RegComponents from './components/componentsLoader';
import { useState } from 'react';
import './App.css'

function App() {

  const [ActivePage, setPage] = useState(() => RegComponents.Hello);

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
    },
    {
      pageKey: 'careerPage',
      label: 'Career',
      action: () => setPage(() => RegComponents.Career)
    }
  ];

  return (
    <>
      <ActivePage />
      <RegComponents.Toolbar props={ToolbarProps}/>
    </>
  )
}

export default App
