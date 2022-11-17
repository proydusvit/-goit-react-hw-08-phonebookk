import { LinkHome, Con, Text } from "./home.styledd"

export default function HomePage() {
  return (
    <Con><div><Text>Hello mentor!</Text></div>
      <LinkHome to="/login">Click This</LinkHome>
      
    
</Con>
  )
}