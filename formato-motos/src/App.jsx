import './App.css'


function App() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarSection>
        <NavbarItem href="/" current>Home</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}

export default App
