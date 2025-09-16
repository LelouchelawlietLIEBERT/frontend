import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <SignedOut>
        <div className="flex items-center justify-center min-h-screen">
          <SignIn />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="relative w-full h-screen">
          <Dashboard />
          <div className="absolute top-4 right-5 scale-150">
            <UserButton />
          </div>
        </div>
      </SignedIn>
    </>
  );
}

export default App;
