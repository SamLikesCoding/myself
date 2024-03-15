import RegComponents from './components/componentsLoader';
import PageNav, { PageNavProps } from './components/navbar/navbar';
import { useCallback, useState } from 'react';
import './App.css'


function App() {

  const pages = [
    RegComponents.Hello,
    RegComponents.Skills,
    RegComponents.Career,
    RegComponents.Education,
    RegComponents.Contact
  ];
 
  const [pageIndex, setIndex] = useState(0);
  const handlePageIndex = (idx: number) => {
    console.log('PageChange : '+idx)
    setIndex(idx);
  }

  const navProps: PageNavProps[] = [
    {
      label: "Who am i",
      action: handlePageIndex
    },
    {
      label: "Skills",
      action: handlePageIndex
    },
    {
      label: "Career",
      action: handlePageIndex
    },
  ]


  return (<>
    {
      PageNav(navProps)
    }
    {
      pages.map((view, idx) => (
        <div key={idx}>{view()}</div>
      ))
    }
  </>);
}

export default App
