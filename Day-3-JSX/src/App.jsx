import React from 'react'
import WelcomeCard from './components/WelcomeCard'
import JsxExpressions from './components/jsxExpressions'
import FragmentExample from './components/FragmentExample'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <div>
      <WelcomeCard />
      <JsxExpressions />
      {/* <FragmentExample /> */}
      <ProfileCard 
        name="Dev Patel"
        job="Software Engineer"
        avatar="https://i.pravatar.cc/150?img=1"
      />
      <ProfileCard 
        name="Jane Smith"
        job="Product Manager"
        avatar="https://i.pravatar.cc/150?img=3"
      />
      <ProfileCard 
        name="Alice Johnson"
        job="UX Designer"
        avatar="https://i.pravatar.cc/150?img=4"
      />
    </div>
  )
}

export default App