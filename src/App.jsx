import ProfileViewer from "./features/ProfileViewer";

function App() {
  return (
    <div
      className="w-full min-h-screen max-h-fit py-2 bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0 lg:py-4"
      id="root"
    >
      <ProfileViewer />
    </div>
  );
}

export default App;
