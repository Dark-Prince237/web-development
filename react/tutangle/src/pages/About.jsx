
import  { DesktopHeader, MobileHeader, TabHeader } from "../components/Header";
import { DesktopLNavigation, DesktopNavigation, MobileNavigation, TabNavigation } from "../components/Navigation";




const Header = () => {
  return (
    <>
    
    <MobileHeader/>
    <TabHeader/>
    <DesktopHeader/>
    <DesktopLNavigation/>
    <DesktopNavigation/>
    <MobileNavigation/>
    <TabNavigation/>
   
    </>
    
  )
};

const About = () => {

  return(
    <>
     
      
      <Header/>
      
    
    </>
  )
}

export default About;
