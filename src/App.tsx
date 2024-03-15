import RegComponents from './components/componentsLoader';
import PageNav, { PageNavProps } from './components/navbar/navbar';
import { useState } from 'react';
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
    {
      label: "Education",
      action: handlePageIndex
    },
    {
      label: "Contact",
      action: handlePageIndex
    },
  ]


  return (<>
    {
      pages.map((view, idx) => (
        <div key={idx} className={pageIndex === idx? 'view-active':'view-hidden'}>{view()}</div>
      ))
    }
    {
      PageNav(navProps)
    }
  </>);
}

export default App
