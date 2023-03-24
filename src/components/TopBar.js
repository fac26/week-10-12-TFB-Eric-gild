import BackButton from "./BackButton";

export default function TopBar() {
  return (
    <nav className="fixed w-full border-b">
      <div className="flex justify-between items-center h-16 px-4">
        <BackButton className="flex-none" />
        <h3 className="flex-1 text-right text-cream text-2xl font-heading">
          HOPE
        </h3>
      </div>
    </nav>
  );
}
