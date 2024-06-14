import ButtonGradient from "./assets/assets/svg/ButtonGradient"
import Button from "./components/Button"
const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Button className="m-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
// src\assets\assets\svg\ButtonGradient.jsx
