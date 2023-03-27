import BackButton from "./BackButton";

export default function TopBar() {
  return (
    <nav className="sticky w-11/12 mx-auto border-b flex justify-between items-center h-16 px-4">
      <BackButton className="flex-none" />
      <h3 className="text-right text-accentcolor2 text-2xl font-heading">HOPE</h3>
    </nav>
  );
}

// flex justify-between items-center
